/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactElement, useMemo, useEffect, useState, useCallback } from 'react';

import DynamicIcons from '@/components/system/dynamic-icons';
import UseHandleContextMenu from '@/hooks/system/use-context-menu/use-handle-context-menu';
import useDragStore from '@/stores/use-drag-store';
import useFsStore from '@/stores/use-fs-store';
import useGridStore from '@/stores/use-grid-store';
import useMouseStore from '@/stores/use-mouse-store';
import useProcessesStore from '@/stores/use-processes-store';
import useSelectStore from '@/stores/use-select-store';
import { ICON_SIZE } from '@/themes';
import { FileSystemContext, type TransferData, MouseContext } from '@/types';
import cn from '@/utils/format';
import { parseFileName, parseParentPath, parseFullFileName } from '@/utils/fs';
import { positionToIndex, indexToPosition } from '@/utils/grid';

const FileSystemIcon = ({ path }: { path: string }): ReactElement => {
  const parentPath = parseParentPath(path);

  // FS
  const isDir = useFsStore((state) => state.isDir);
  const mv = useFsStore((state) => state.mv);

  // PROCESSES
  const openProcess = useProcessesStore((state) => state.openProcess);
  const getWindow = useProcessesStore((state) => state.getWindow);
  const setFocused = useProcessesStore((state) => state.setFocused);
  const setBlurFocus = useProcessesStore((state) => state.setBlurFocus);
  const replaceFocused = useProcessesStore((state) => state.replaceFocused);

  // GRID
  const gridIndex = useGridStore((state) => state.getIndex(path));
  const lineSize = useGridStore((state) => state.getGrid(parentPath).lineSize);
  const getLineSize = useGridStore((state) => state.getLineSize);
  const getGridIndex = useGridStore((state) => state.getIndex);

  // MOUSE
  const appendMouseContext = useMouseStore((state) => state.appendMouseoverContext);
  const popMouseContext = useMouseStore((state) => state.popMouseoverContext);
  const dragContext = useMouseStore((state) => state.dragContext);
  const setDragContext = useMouseStore((state) => state.setDragContext);
  const setDragoverPath = useDragStore((state) => state.setDragoverPath);

  // SELECT
  const allSelected = useSelectStore((state) => state.getSelected());
  const isSelected = allSelected.includes(path);
  const isUsingSelectRect = useSelectStore((state) => state.isUsingSelectRect);
  const setSelected = useSelectStore((state) => state.setSelected);
  const addSelected = useSelectStore((state) => state.addSelected);
  const removeSelected = useSelectStore((state) => state.removeSelected);
  const mouseDownContext = useSelectStore((state) => state.mouseDownContext);
  const selectingRect = useSelectStore((state) => state.selectRect);

  // DRAG
  const setDragging = useDragStore((state) => state.setDragging);
  const setDragStartContext = useDragStore((state) => state.setDragStartContext);
  const setIsDragging = useDragStore((state) => state.setIsDragging);
  const setGroupSpacingOffsets = useDragStore((state) => state.setGroupSpacingOffsets);
  const setGuideIndex = useDragStore((state) => state.setGuideIndex);
  const setGuideOpacity = useDragStore((state) => state.setGuideOpacity);

  // HOOKS
  const { handleContextMenu } = UseHandleContextMenu();

  // LOCAL
  const fileName = parseFileName(path);
  const componentContext: FileSystemContext = parentPath === '/Desktop' ? 'desktop' : 'folder';

  const gridPos = useMemo(() => {
    // NOTE: You can change grid flow direction here
    // You'll need to change it in the intersection and
    // folder drop logic as well
    const { x, y } = indexToPosition(gridIndex, lineSize);
    return { x: x + 1, y: y + 1 };
  }, [gridIndex, lineSize]);

  // -------------------------------------------
  // ---------------- DRAGGING -----------------
  // -------------------------------------------
  const handleDragStart = useCallback(
    (event: React.DragEvent) => {
      const transferData: TransferData[] = [];
      const offsets = [];
      const dragGroup = [];
      for (const selectedPath of allSelected) {
        const pathGridIndex = getGridIndex(selectedPath);

        // Set the dragging items
        if (selectedPath !== path) dragGroup.push(selectedPath);

        // Create transfer object
        const transferObj: Partial<TransferData> = {};
        transferObj.path = selectedPath;
        transferObj.isHead = selectedPath === path;
        transferObj.startingGridIndex = pathGridIndex;
        transferData.push(transferObj as TransferData);

        // Calculate spacing offsets
        const indexOffset = pathGridIndex - gridIndex;
        offsets.push(indexOffset);
      }

      // Last drag item is the current path
      dragGroup.push(path);
      setDragging(dragGroup);
      setDragStartContext(componentContext);

      // Slight timeout before setting is dragging to prevent minor render bugs
      setTimeout(() => {
        setIsDragging(true);
      }, 100);

      // Set the group spacing offsets
      setGroupSpacingOffsets(offsets);
      event.dataTransfer.setData('text/plain', JSON.stringify(transferData));
    },
    [
      setIsDragging,
      componentContext,
      gridIndex,
      allSelected,
      getGridIndex,
      path,
      setGroupSpacingOffsets,
      setDragging,
      setDragStartContext,
    ],
  );

  const handleDragIcon = useCallback(
    (event: React.DragEvent) => {
      // NOTE: Drop guide is positioned here between various contexts.
      setGuideOpacity(1);
      // Desktop to folder, folder to folder
      if (
        (componentContext === 'desktop' && dragContext === 'folder') ||
        (componentContext === 'folder' && dragContext === 'folder') ||
        (componentContext === 'folder' && dragContext === 'none') ||
        (componentContext === 'folder' && dragContext === 'file-icon')
      ) {
        const folderPath = parseParentPath(path);
        const dragOverFolder = getWindow(folderPath);
        const folderLineSize = getLineSize(folderPath);
        const mouseGridIndex = positionToIndex(
          event.clientX - dragOverFolder.position.x,
          event.clientY - dragOverFolder.position.y - 48,
          folderLineSize,
        );
        setGuideIndex(mouseGridIndex);
        return;
      }
      // Folder to desktop
      if (componentContext === 'folder' && dragContext === 'desktop') {
        const desktopLineSize = getLineSize('/Desktop');
        const mouseGridIndex = positionToIndex(event.clientX, event.clientY, desktopLineSize);
        setGuideIndex(mouseGridIndex);
        return;
      }

      // Desktop to desktop
      const mouseGridIndex = positionToIndex(event.clientX, event.clientY, lineSize, 'col');
      setGuideIndex(mouseGridIndex);
    },
    [
      componentContext,
      dragContext,
      lineSize,
      setGuideIndex,
      getWindow,
      setGuideOpacity,
      getLineSize,
      path,
    ],
  );

  const handleDropIntoIcon = useCallback(
    (event: React.DragEvent) => {
      // NOTE: This handles dropping an icon into another icon. If you're looking for
      // drop logic for the grid, look at the grid component.

      setIsDragging(false);
      event.preventDefault();

      // Grab the transfer data
      const transferData: TransferData[] = JSON.parse(
        event.dataTransfer.getData('text/plain'),
      ) as TransferData[];

      // Set the head element as the lement with the isHead flag or the first element
      const headElement = transferData.find((element) => element.isHead) ?? transferData[0];
      if (headElement.path === path) return; // Dropping on itself
      event.stopPropagation(); // Prevent bubbling

      // Dropping one or more items onto a folder icon
      for (const element of transferData) {
        // Move elements into the folder if the destination is a directory,
        // and the source is not the destination
        if (element.path !== path && isDir(path)) {
          try {
            const destinationPath = `${path}/${parseFullFileName(element.path)}`;
            mv(element.path, destinationPath);

            // Update the focus stack (if the window was open)
            replaceFocused(element.path, destinationPath);
          } catch {
            // Do nothing
          }
        }
      }
    },
    [mv, path, isDir, setIsDragging, replaceFocused],
  );

  // Stop dragging
  const handleDragIconEnd = useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);
  useEffect(() => {
    document.addEventListener('mouseup', handleDragIconEnd);
    return () => {
      document.removeEventListener('mouseup', handleDragIconEnd);
    };
  }, [handleDragIconEnd]);

  // --------------------------------------------
  // ---------------- SELECTING -----------------
  // --------------------------------------------
  const [shiftIsPressed, setShiftIsPressed] = useState(false);

  // Mouse down selection
  const handleMouseDownSelect = useCallback(
    (event: React.MouseEvent) => {
      if (event.button !== 0) return; // Not left click

      // Shift pressed or in a multi-select state
      if (shiftIsPressed || allSelected.length <= 1) return;

      // Add the selection
      addSelected(path);
    },
    [addSelected, allSelected, path, shiftIsPressed],
  );

  // Mouse up selection, a complement to mousedown selection.
  // We do it this way to capture the exact behavior of the os selection system.
  const handleMouseUpSelect = useCallback(() => {
    if (shiftIsPressed || allSelected.length <= 1 || isUsingSelectRect) return;
    setSelected([path]);
  }, [allSelected, isUsingSelectRect, path, setSelected, shiftIsPressed]);

  // Focus selection. Similar to mouse down, but selects only the current path
  const handleFocusSelect = useCallback(() => {
    if (shiftIsPressed || allSelected.length > 1) return;
    setSelected([path]);
  }, [allSelected, path, setSelected, shiftIsPressed]);

  // Toggle selection (shift + click)
  const handleToggleSelect = useCallback(() => {
    if (!shiftIsPressed) return;

    // Not same parent, select only the current path
    const parent = parseParentPath(path);
    if (!allSelected.every((selected) => parseParentPath(selected) === parent)) {
      setSelected([path]);
      return;
    }

    if (isSelected) {
      removeSelected(path);
    } else {
      addSelected(path);
    }
  }, [addSelected, allSelected, isSelected, path, removeSelected, setSelected, shiftIsPressed]);

  // Listen for shift key presses
  const handleShiftPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Shift') {
      setShiftIsPressed(true);
    }
  }, []);

  const handleShiftRelease = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Shift') {
      setShiftIsPressed(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleShiftPress);
    window.addEventListener('keyup', handleShiftRelease);
    return () => {
      window.removeEventListener('keydown', handleShiftPress);
      window.removeEventListener('keyup', handleShiftRelease);
    };
  }, [handleShiftPress, handleShiftRelease]);

  // Intersection logic between an icon and the selection rectangle
  useEffect(() => {
    const isCorrectContext = componentContext === mouseDownContext;
    if (!isUsingSelectRect || !isCorrectContext) return;
    const iconPos = indexToPosition(gridIndex, lineSize);
    if (
      iconPos.x * 100 + ICON_SIZE.width + 40 > selectingRect.position.x &&
      iconPos.y * 100 + ICON_SIZE.height + 40 > selectingRect.position.y &&
      iconPos.x * 100 < selectingRect.position.x + selectingRect.size.width - 20 &&
      iconPos.y * 100 < selectingRect.position.y + selectingRect.size.height - 20
    ) {
      addSelected(path);
    } else if (!shiftIsPressed) {
      removeSelected(path);
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectingRect.size]);

  // -----------------------------------------
  // ---------------- STYLES -----------------
  // -----------------------------------------
  const desktopConfig = {
    selectedStyle: 'bg-black/20',
    hoverStyle: 'hover:bg-black/10',
  };

  const folderConfig = {
    selectedStyle: 'bg-black/20',
    hoverStyle: 'hover:bg-black/10',
  };

  const config = parentPath === '/Desktop' ? desktopConfig : folderConfig;

  return (
    <>
      <li
        data-id="file-icon"
        data-testid={`icon-li-${fileName}`}
        className="flex items-center justify-center"
        style={{
          gridColumnStart: gridPos.x.toString(),
          gridRowStart: gridPos.y.toString(),
        }}
      >
        <button
          type="button"
          data-testid={parseFileName(path)}
          data-id="file-icon"
          draggable
          className={cn(
            'px-2 rounded-md background-transparent cursor-default flex flex-col items-center focus:outline-none',
            isSelected && config.selectedStyle,
            !isSelected && !isUsingSelectRect && config.hoverStyle,
          )}
          onDragStart={handleDragStart}
          onDrag={handleDragIcon}
          onDrop={handleDropIntoIcon}
          onDragEnd={handleDragIconEnd}
          onMouseDown={(event: React.MouseEvent) => {
            event.stopPropagation();
            handleToggleSelect();
            handleMouseDownSelect(event);

            const parent = parseParentPath(path);
            if (parent === '/Desktop') {
              setBlurFocus(true);
            } else {
              setFocused(parent);
            }
          }}
          onDragEnter={(event: React.DragEvent) => {
            let target = event.target as HTMLElement;
            let dataId;
            while (!dataId) {
              dataId = target.dataset.id;
              target = target.parentElement!;
            }
            const parent = parseParentPath(path);
            if (parent === '/Desktop') {
              setBlurFocus(true);
            } else {
              setFocused(parent);
            }
            setDragContext(dataId as MouseContext);
            setDragoverPath(path);
          }}
          onDragOver={(event: React.DragEvent) => {
            event.preventDefault();
            // eslint-disable-next-line no-param-reassign
            event.dataTransfer.dropEffect = 'move';
            setDragoverPath(path);
          }}
          onFocus={() => {
            handleFocusSelect();
          }}
          onMouseUp={() => {
            handleMouseUpSelect();
          }}
          onMouseLeave={(event: React.MouseEvent) => {
            event.stopPropagation();
            popMouseContext();
          }}
          onMouseEnter={(event: React.MouseEvent) => {
            event.stopPropagation();
            appendMouseContext('file-icon');
          }}
          onDoubleClickCapture={() => {
            openProcess(path);
          }}
          onContextMenu={(event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
            handleContextMenu(event, 'file-icon', path);
          }}
        >
          <DynamicIcons path={path} />
          <span className="text-base font-bold">{fileName}</span>
        </button>
      </li>
    </>
  );
};

export default FileSystemIcon;

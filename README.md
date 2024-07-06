### Tasks

### Window

- If the viewport is smaller than the Window's minimum size, a different window should render to tell the user that the given program does not support the current viewport size.
- Better default positions and offset system

### File Explorer

- Right clicking on a file or folder should open a context menu with options:
  - Open
  - Rename
  - Delete
  - Copy
- Right clicking on the desktop / folder should open a context menu with options:
  - Sort icons
  - Create a new folder
  - Create a new file
  - Paste
- Implement sound for file drop

### Theme

- SelectRect color
- Window color
- OnDesktop select color
- OnFolder select color

### File System

- Implement cp (copy)
- Implement option for custom icons

### Tests

- Write new cypress tests for the new features

### Issues

- HMR crashes the app when a folder is opened.
- Shift selecting an item from different context should only select the last item clicked.
- Dragging an item across a non-drop target makes the drop guide fly off screen.
- Dragging an item after it's been opened causes the app to crash.
- Multi-drag items from folder to desktop only drags out the last item.
- Multi-drag items on top of a folder should consolidate the drag guide to the folder's grid.
- Dragging a folder into itself should give some sort of incorrect feedback.

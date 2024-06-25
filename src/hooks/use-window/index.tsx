import useMaxMin from '@/hooks/use-window/use-max-min';
import useWindowMove from '@/hooks/use-window/use-move';
import useWindowResize, { ResizeDirection } from '@/hooks/use-window/use-resize';

// window state hook return types
interface WindowState {
  handleSetResizeDirection: (direction: ResizeDirection) => void;
  handleMouseDownMove: (event: React.MouseEvent) => void;
  handleWindowFullSize: () => void;
  handleWindowMinimizeToggle: () => void;
}

const useWindowState = (path: string): WindowState => {
  const { handleSetResizeDirection } = useWindowResize(path);
  const { handleMouseDownMove } = useWindowMove(path);
  const {
    toggleMaximizeWindow: handleWindowFullSize,
    toggleMinimizeWindow: handleWindowMinimizeToggle,
  } = useMaxMin(path);

  return {
    handleSetResizeDirection,
    handleMouseDownMove,
    handleWindowFullSize,
    handleWindowMinimizeToggle,
  };
};

export default useWindowState;

import useMaxMin from '@/hooks/use-window/use-max-min';
import useWindowMove from '@/hooks/use-window/use-move';
import useWindowResize, { ResizeDirection } from '@/hooks/use-window/use-resize';

// window state hook return types
interface WindowState {
  handleSetResizeDirection: (direction: ResizeDirection) => void;
  handleMouseDownMove: () => void;
  handleWindowFullSize: () => void;
  handleWindowMinimizeToggle: () => void;
}

const useWindowState = (id: string): WindowState => {
  const { handleSetResizeDirection } = useWindowResize(id);
  const { handleMouseDownMove } = useWindowMove(id);
  const {
    toggleMaximizeWindow: handleWindowFullSize,
    toggleMinimizeWindow: handleWindowMinimizeToggle,
  } = useMaxMin(id);

  return {
    handleSetResizeDirection,
    handleMouseDownMove,
    handleWindowFullSize,
    handleWindowMinimizeToggle,
  };
};

export default useWindowState;

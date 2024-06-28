import UseMaxMin from '@/hooks/use-window/use-max-min';
import UseWindowMove from '@/hooks/use-window/use-move';
import UseWindowResize from '@/hooks/use-window/use-resize';
import { ResizeDirection } from '@/types';

// window state hook return types
interface UseWindowReturnTypes {
  handleSetResizeDirection: (direction: ResizeDirection) => void;
  handleMouseDownMove: (event: React.MouseEvent) => void;
  handleWindowFullSize: () => void;
  handleWindowMinimizeToggle: () => void;
}

const UseWindowState = (path: string): UseWindowReturnTypes => {
  const { handleSetResizeDirection } = UseWindowResize(path);
  const { handleMouseDownMove } = UseWindowMove(path);
  const {
    toggleMaximizeWindow: handleWindowFullSize,
    toggleMinimizeWindow: handleWindowMinimizeToggle,
  } = UseMaxMin(path);

  return {
    handleSetResizeDirection,
    handleMouseDownMove,
    handleWindowFullSize,
    handleWindowMinimizeToggle,
  };
};

export default UseWindowState;

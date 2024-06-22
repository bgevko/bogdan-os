### Tasks

### Taskbar

- Taskbar entry should appear closed when the window is not in focus and open when it is in focus.

### Desktop

- Icons should not stack directly on top of each other
- Icons should have a staggered starting position
- On drag, icons should have a ghost image that follows the cursor
- On drop, the icon should animate to the dropped position if the position is within the viewport and not on top of another icon
- On drop, icons should be able to either fall right where they are, or snap to a grid, this setting can live in the desktop store
- If dragging multiple icons, all icons dropped in invalid positions should go back to their original position. The rest should animate to their new position.

### Window

- If the viewport is smaller than the Window's minimum size, a different window should render to tell the user that the given program does not support the current viewport size.
- The window that is in focus should have the higher z-index

### Tests

- Fix window tests

### Refactor

Refactor the desktop icon movement logic. I'll have to use similar functionality for inside folders, so it's a good idea to try to make it reusable.

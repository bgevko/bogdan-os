### Tasks

- Refactor process configuration: Set all options inside the constant file, and use utility getters to retrieve the values.

- Tests for single item drag and drop
  - Within bounds on the desktop
  - Out of bounds on the desktop
  - Onto another folder icon on the desktop
  - Onto another file icon on the desktop (invalid)
  - from the desktop to a folder
  - from desktop to a deeply nested folder
  - from desktop to invalid drop targets: file, window, window title bar, resize handles, taskbar

### Window

- If the viewport is smaller than the Window's minimum size, a different window should render to tell the user that the given program does not support the current viewport size.
- Better default positions and offset system

### File Explorer

- Right clicking on a file or folder should open a context menu with options:
  - Rename
  - Copy
- Right clicking on the desktop / folder should open a context menu with options:
  - Paste
- Implement sound for file drop

### File System Icon

- Implement a new state for renaming / new folder / new file, where the user should type a name and press enter

### System dialog

- Implement system dialog for various operations.

### Theme

- SelectRect color
- Window color
- OnDesktop select color
- OnFolder select color

### File System

- Implement cp (copy)
- Implement option for custom icons

### Issues

- Dropping a group of items out of a folder into the desktop unselects all items. It should keep the items selected by default
  This happens from the desktop to a folder as well.
- Resizing the screen from the left and up causes the window to jump.
  - Does not happen when initially trying to resize the window. After clicking somewhere else and attempting
    to resize it, the bug happens every time.
- Dragging an item after it's been opened to a different parent causes the app to crash.
  - Write more FS tests to ensure mv / delete are also properly affecting the processes state
- Dragging an item across a non-drop target makes the drop guide fly off screen.
- HMR crashes the app when a folder is opened.
- Should set a limit to how many files can be created
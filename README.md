### Tasks

### Taskbar

- Taskbar entry should appear closed when the window is not in focus and open when it is in focus.

### Window

- Grid size should update on window maximize and unmaximize.
- Implement window focus, which should affect both the z-index of the window and the appearance of the taskbar entry.
- If the viewport is smaller than the Window's minimum size, a different window should render to tell the user that the given program does not support the current viewport size.

### File Explorer

- Dragging icons from a folder to the desktop should move the icon to the desktop. Same should happen when dragging from the desktop to a folder, or from one folder to another.
- Dragging icons on top of another folder should move the icon to the folder. If the drop target is not a folder, the icon should return to its original position.
- Style the folder background
- Right clicking on a file or folder should open a context menu with options to rename, delete, and copy.
- Right clicking on the desktop / folder should open a context menu with options to create a new folder and paste.

### Theme

- SelectRect color
- Window color
- OnDesktop select color
- OnFolder select color

### File System

- Implement rmdir and rm
- Implement mv (rename)
- Implement cp (copy)

### Tests

- Write new cypress tests for the new features

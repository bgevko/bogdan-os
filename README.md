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

- Dragging an item after it's been opened causes the app to crash.
  - Write more FS tests to ensure mv / delete are also properly affecting the processes state
- Multi-drag items from folder to desktop only drags out the last item.
  - Implement a bulk move instead of trying to process each item individually.
- Dragging an item from an open folder to another open folder doesn't calculate the drop guide correctly.
  - Consider focused window when determining which folder instance to use for offset calculations.
- Multi-drag items on top of a folder should consolidate the drag guide to the folder icon's location.
- Dragging a folder into itself should give some sort of incorrect feedback.
- Dragging an item across a non-drop target makes the drop guide fly off screen.
- HMR crashes the app when a folder is opened.

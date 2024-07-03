### Tasks

- Fix the issue where dragging items across different contexts doesn't set the correct grid index and position of the dropped item.
- Fix the issue where the drop guide doesn't align to the folder's grid when dragging from desktop to folder.
- Fix the issue where dragging an item over an unfocused folder doesn't focus the folder.

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

- Dragging items across different contexts doesn't set the correct grid index and position of the dropped item.
- Drop guide shouldn't clip its parent boundary
- Dragging an item over an unfocused folder doesn't focus the folder.
- Dropguide doesn't align to the folder's grid when dragging from desktop to folder.
- HMR crashes the app when a folder is opened.

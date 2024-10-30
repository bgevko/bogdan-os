### Issues

- Resizing the screen from the left and up causes the window to jump.
  - Does not happen when initially trying to resize the window. After clicking somewhere else and attempting
    to resize it, the bug happens every time.
- Dragging an item after it's been opened to a different parent causes the app to crash.
  - Write more FS tests to ensure mv / delete are also properly affecting the processes state
- Dragging an item across a non-drop target makes the drop guide fly off screen.
- HMR crashes the app when a folder is opened.
- Should set a limit to how many files can be created

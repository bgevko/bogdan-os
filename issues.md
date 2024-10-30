### Issues

- Dragging mouse and letting go on the minimize or close button triggers that action on the window.
- Dragging an item after it's been opened to a different parent causes the app to crash.
  - Write more FS tests to ensure mv / delete are also properly affecting the processes state
- Dragging an item across a non-drop target makes the drop guide fly off screen.
- HMR crashes the app when a folder is opened.
- Should set a limit to how many files can be created

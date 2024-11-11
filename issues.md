### Issues

- HMR crashes the app when a folder is opened.
- Should set a limit to how many files can be created
- Dragging an item across a non-drop target makes the drop guide fly off screen.
- Drop guide isn't updated correctly when dragging from desktop to folder
- Background stretches on resize

### Solitaire

- Drag start and drag stop cause flickering. It's inefficient to copy cards to the transfer stack and then copy them back on drop. Find a way to optimize
  - Rework the transfer stack system.. a transfer stack is not necessary.
  - Cards can be moved directly from their current position, with offsets.
  - Transfering to a different pile should be done without an intermediate layer.
  - Tableau to Tableau, tabaleau to foundation, waste to foundation, etc.
- Undo is done, try to implement redo as well
- Menu Bar with options to restart
- Ace of diamonds has a visual glitch
- Face down cards have a visual glitch when hovering over window buttons
- Implement a win condition
- Implement a timer
- Implement a scoring system
- Implement hard mode (3 card draw)

- Implement log mode for debugging. Each move should log the new state of the game.

/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */

// game.ts

const DEBUG = true;

export interface Move {
  description: string;
  undoMove: () => void;
}

// Type Definitions
export interface State {
  stock: number[];
  waste: number[];
  foundations: number[][];
  tableau: number[][];
  transferStack: number[];
  moveStack: Move[];
}

// Shuffles the deck of cards in place
export function shuffle(deck: number[]): void {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Initializes the game state for Solitaire
export function initGame(): State {
  const state: State = {
    stock: Array.from({ length: 52 }, (_, i) => (i + 1) * -1),
    waste: [],
    foundations: [[], [], [], []],
    tableau: [[], [], [], [], [], [], []],
    transferStack: [],
    moveStack: [],
  };

  shuffle(state.stock);

  // Set up tableau
  for (let i = 0; i < 7; i += 1) {
    const pile: number[] = [];
    while (pile.length < i + 1) {
      const card = state.stock.pop();
      if (card !== undefined) {
        pile.push(card); // Negative values mean face-down
      }
    }
    // Flip the last card face-up
    pile[pile.length - 1] = -pile.at(-1)!;
    state.tableau[i] = pile;
  }

  // Flip the face stock card
  return state;
}

// Moves items from waste to the transfer stack
export function moveWasteToTransfer({ state }: { state: State }): boolean {
  if (state.waste.length === 0) {
    if (DEBUG) {
      console.log('Waste to Transfer: Nothing in waste pile\nFALSE\n');
    }
    return false;
  }

  // if waste card is face-down
  if (state.waste.at(-1)! < 0) {
    if (DEBUG) {
      console.log('Waste to Transfer: Top waste card is face-down\nFALSE\n');
    }
    return false;
  }

  // pop the top waste card into the transfer stack
  state.transferStack.push(state.waste.pop()!);
  if (DEBUG) {
    const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
    const debugTransfer = `[${state.transferStack.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
    const debugStr = `Waste to Transfer: \nWaste: ${debugWaste}, \nTransfer: ${debugTransfer}`;
    console.log(`${debugStr} \nTRUE\n`);
  }
  const undoMove = () => state.waste.push(state.transferStack.pop()!);
  state.moveStack.push({
    description: 'Undo Transfer',
    undoMove,
  });
  return true;
}

export function moveFoundationToTransfer({
  state,
  foundationIdx,
}: {
  state: State;
  foundationIdx: number;
}): boolean {
  if (
    (foundationIdx < 0 || foundationIdx > 3 || state.foundations[foundationIdx].length === 0) &&
    DEBUG
  ) {
    console.log('Foundation to Transfer: Foundation empty\nFALSE\n');
  }
  state.transferStack.push(state.foundations[foundationIdx].pop()!);
  if (DEBUG) {
    const debugFoundation = `[${state.foundations[foundationIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
    const transferStack = `[${state.transferStack.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
    const debugStr = `Foundation to Transfer: \nFoundation: ${debugFoundation}, \nTransfer: ${transferStack}`;
    console.log(`${debugStr} \nTRUE\n`);
  }
  const undoMove = () => state.foundations[foundationIdx].push(state.transferStack.pop()!);
  state.moveStack.push({
    description: 'Undo Transfer',
    undoMove,
  });
  return true;
}

export function moveTableauToTransfer({
  state,
  tableauIdx,
  count,
}: {
  state: State;
  tableauIdx: number;
  count: number;
}): boolean {
  if (tableauIdx < 0 || tableauIdx > 6 || count <= 0 || count > state.tableau[tableauIdx].length) {
    if (DEBUG) {
      console.log('Tableau to Transfer: Invalid tableau index or count\nFALSE\n');
    }
    return false;
  }
  // The substack that will go to transfer is end - count to end
  const subStack = state.tableau[tableauIdx].slice(-count);

  // If substack is not a valid stack, return false
  if (!isCardStackValid(subStack)) {
    if (DEBUG) {
      const debugTableau = `[${state.tableau[tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
      const debugSubStack = `[${subStack.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
      const debugStr = `Tableau to Transfer: \nTableau: ${debugTableau}, \nSubstack: ${debugSubStack}`;
      console.log(`${debugStr} \nFALSE\n`);
    }
    return false;
  }

  // Move the substack to the transfer stack, pop the substack from the tableau too
  state.transferStack.push(...subStack);
  state.tableau[tableauIdx].splice(-count, count);

  const undoMove = () => {
    state.tableau[tableauIdx].push(...state.transferStack.splice(-count, count));
  };
  state.moveStack.push({
    description: 'Undo Transfer',
    undoMove,
  });
  if (DEBUG) {
    const debugTableau = `[${state.tableau[tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
    const debugTransfer = `[${state.transferStack.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
    const debugStr = `Tableau to Transfer: \nTableau: ${debugTableau}, \nTransfer: ${debugTransfer}`;
    console.log(`${debugStr} \nTRUE\n`);
  }
  return true;
}

export function moveTransferToFoundation({
  state,
  foundationIdx,
}: {
  state: State;
  foundationIdx: number;
}): boolean {
  if (foundationIdx < 0 || foundationIdx > 3 || state.transferStack.length !== 1) {
    if (DEBUG) {
      console.log('Transfer to Foundation: Invalid transfer length or foundation index\nFALSE\n');
    }
    return false;
  }
  // It doesn't stack..
  const transferCard = state.transferStack.at(-1)!;
  const foundation = state.foundations[foundationIdx].at(-1);
  if (!aStacksOnB({ a: transferCard, b: foundation, isFoundation: true })) {
    if (DEBUG) {
      const debugTransfer = getCardStr(transferCard);
      const debugFoundation = getCardStr(foundation);
      const debugStr = `Transfer to Foundation: \nTransfer: ${debugTransfer}, \nFoundation: ${debugFoundation}`;
      console.log(`${debugStr} \nFALSE\n`);
    }
    return false;
  }

  // Move the transfer card to the foundation
  state.foundations[foundationIdx].push(state.transferStack.pop()!);
  const undoMove = () => state.transferStack.push(state.foundations[foundationIdx].pop()!);
  state.moveStack.push({
    description: 'Undo Transfer',
    undoMove,
  });
  return true;
}

export function moveTransferToTableau({
  state,
  tableauIdx,
}: {
  state: State;
  tableauIdx: number;
}): boolean {
  if (tableauIdx < 0 || tableauIdx > 6 || state.transferStack.length === 0) {
    if (DEBUG) {
      console.log('Transfer to Tableau: Invalid transfer length or tableau index\nFALSE\n');
    }
    return false;
  }
  const bottomTransferCard = state.transferStack.at(0)!;
  const topTableauCard = state.tableau[tableauIdx].at(-1);
  if (!aStacksOnB({ a: bottomTransferCard, b: topTableauCard })) {
    if (DEBUG) {
      const debugTransfer = getCardStr(bottomTransferCard);
      const debugTableau = getCardStr(topTableauCard);
      const debugStr = `Transfer to Tableau: \nTransfer: ${debugTransfer}, \nTableau: ${debugTableau}`;
      console.log(`${debugStr} \nFALSE\n`);
    }
    return false;
  }
  // Move the transfer stack to the tableau
  for (let i = 0; i < state.transferStack.length; i += 1) {
    state.tableau[tableauIdx].push(state.transferStack[i]);
  }

  // empty the transfer stack
  state.transferStack = [];

  const undoMove = () => {
    state.tableau[tableauIdx].splice(-state.transferStack.length, state.transferStack.length);
  };
  state.moveStack.push({
    description: 'Undo Transfer',
    undoMove,
  });
  return true;
}

// Moves the top card from the stock to the waste pile
export function popToWaste(state: State): void {
  if (state.stock.length === 0) {
    state.stock = state.waste;
    state.waste = [];
    shuffle(state.stock);

    // flip all stock cards face-down
    for (let i = 0; i < state.stock.length; i += 1) {
      state.stock[i] *= -1;
    }

    if (DEBUG) {
      const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
      const debugShuffledStock = `[${state.stock.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
      const debugStr = `Stock to Waste: \nStock: ${debugShuffledStock}, \nWaste: ${debugWaste}`;
      console.log(`${debugStr} \nRESHUFFLED\n`);
    }
    return;
  }

  // Grab the top card from stock
  const card = state.stock.pop();

  // Push the card to waste
  state.waste.push(-card!);

  const undoMove = () => {
    const undoCard = state.waste.pop();
    if (undoCard !== undefined) {
      state.stock.push(-undoCard);
    }
  };
  state.moveStack.push({
    description: `Stock to Waste: Moved ${getCardStr(card)}`,
    undoMove,
  });
  if (DEBUG) {
    const debugStockTop = getCardStr(state.waste.at(-1));
    const debugStock = `[${state.stock.map((cardVal) => getCardStr(-cardVal)).join(', ')}]`;
    const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
    const debugStr = `Stock to Waste: \nStock (Face-Down): ${debugStock}, \nWaste: ${debugWaste}`;
    console.log(`${debugStr} \nMOVED ${debugStockTop}\n`);
  }
}

// Moves the top card from the waste pile to the first valid isFoundation
export function moveWasteToFirstValidFoundation({ state }: { state: State }): boolean {
  if (state.waste.length === 0) {
    if (DEBUG) {
      console.log('Waste to First Valid Foundation: Nothing in waste pile\nFALSE\n');
    }
    return false;
  }

  const card = state.waste.at(-1)!;

  let debugStr = '';
  for (let i = 0; i < 4; i += 1) {
    const isFoundation = state.foundations[i];
    const foundationCard = isFoundation.at(-1);
    debugStr = `Waste to First Valid Foundation: \nWaste top: ${getCardStr(state.waste?.at(-1))}, \nFoundation top: ${getCardStr(state.foundations[i]?.at(-1))}`;

    if (aStacksOnB({ a: card, b: foundationCard, isFoundation: true })) {
      state.foundations[i].push(state.waste.pop()!);

      const undoMove = () => state.waste.push(state.foundations[i].pop()!);
      state.moveStack.push({
        description: `Waste to Foundation: Moved ${getCardStr(state.foundations[i].at(-1))}`,
        undoMove,
      });

      if (DEBUG) {
        console.log(`${debugStr} \nTRUE\n`);
      }
      return true;
    }
  }
  if (DEBUG) {
    console.log(`${debugStr} \nFALSE\n`);
  }
  return false;
}

export function flipTableauCard({
  state,
  tableauIdx,
}: {
  state: State;
  tableauIdx: number;
}): boolean {
  if (tableauIdx < 0 || tableauIdx > 6 || state.tableau[tableauIdx].length === 0) {
    if (DEBUG) {
      console.log('Flip Tableau Card: Tableau Empty. \nFALSE\n');
    }
    return false;
  }
  const card = state.tableau[tableauIdx].at(-1)!;
  if (card > 0) {
    if (DEBUG) {
      console.log(`Flip Tableau Card: ${getCardStr(card)} already face-up. \nFALSE\n`);
    }
    return false;
  }
  state.tableau[tableauIdx][state.tableau[tableauIdx].length - 1] = -card;

  const undoMove = () => {
    state.tableau[tableauIdx][state.tableau[tableauIdx].length - 1] = -card;
  };

  state.moveStack.push({
    description: `Flip Tableau Card: Flipped ${getCardStr(card)}`,
    undoMove,
  });

  if (DEBUG) {
    console.log(`Flip Tableau Card: Flipped ${getCardStr(card)} \nTRUE\n`);
  }
  return true;
}

// Move tableau to first valid foundation
export function moveTableauToFirstValidFoundation({
  state,
  tableauIdx,
}: {
  state: State;
  tableauIdx: number;
}): boolean {
  if (tableauIdx < 0 || tableauIdx > 6 || state.tableau[tableauIdx].length === 0) {
    if (DEBUG) {
      console.log('Tableau to First Valid Foundation: Tableau Empty. \nFALSE\n');
    }
    return false;
  }

  const debugTableauCard = getCardStr(state.tableau[tableauIdx].at(-1));
  const debugTableau = `[${state.tableau[tableauIdx].map((card) => getCardStr(card)).join(', ')}]`;
  const debugFoundation = `[${state.foundations.map((foundation) => getCardStr(foundation.at(-1))).join(', ')}]`;
  const debugStr = `Tableau to First Valid Foundation: \nTableau top: ${debugTableauCard}, \nTableau: ${debugTableau}, \nFoundations: ${debugFoundation}`;

  for (let i = 0; i < 4; i += 1) {
    const card = state.tableau[tableauIdx].at(-1)!;
    const foundation = state.foundations[i].at(-1);
    if (aStacksOnB({ a: card, b: foundation, isFoundation: true })) {
      state.foundations[i].push(state.tableau[tableauIdx].pop()!);
      const undoMove = () => {
        state.tableau[tableauIdx].push(state.foundations[i].pop()!);
      };
      state.moveStack.push({
        description: `Tableau to Foundation: Moved ${getCardStr(state.foundations[i].at(-1))}`,
        undoMove,
      });
      if (DEBUG) {
        console.log(`${debugStr} \nTRUE\n`);
      }
      return true;
    }
  }
  // Didn't happen
  if (DEBUG) {
    console.log(`${debugStr} \nFALSE\n`);
  }
  return false;
}

// Determines if a sequence of cards can be moved from one tableau pile to another
export function canMoveTableauToTableau({
  state,
  srcIdx,
  destIdx,
  count,
}: {
  state: State;
  srcIdx: number;
  destIdx: number;
  count: number;
}): boolean {
  if (
    srcIdx < 0 ||
    srcIdx > 6 ||
    destIdx < 0 ||
    destIdx > 6 ||
    srcIdx === destIdx ||
    count <= 0 ||
    count > state.tableau[srcIdx].length
  ) {
    return false;
  }

  const srcPile = state.tableau[srcIdx];
  const destPile = state.tableau[destIdx];
  const topCard = srcPile[srcPile.length - count];
  const destCard = destPile.at(-1);

  return aStacksOnB({ a: topCard, b: destCard }) && isCardStackValid(srcPile.slice(-count));
}

// Checks if a sequence of cards is a valid stack according to game rules
export function isCardStackValid(stack: number[]): boolean {
  // stack length 0 not valid
  if (stack.length === 0) {
    return false;
  }

  // stack length 1 is valid if positive
  if (stack.length === 1) {
    return stack[0] > 0;
  }

  for (let i = 1; i < stack.length; i += 1) {
    if (!aStacksOnB({ a: stack[i], b: stack[i - 1] })) {
      return false;
    }
  }
  return true;
}

// Checks if the game has been won
export function isGameWon(state: State): boolean {
  return state.foundations.every((isFoundation) => isFoundation.length === 13);
}

// Undoes the last move in the game
export function undo(state: State): void {
  let debugStr = 'UNDO: No moves to undo';
  if (state.moveStack.length > 0) {
    const { description, undoMove } = state.moveStack.pop()!;
    undoMove();
    debugStr = `UNDO ${description}`;
  }
  if (DEBUG) {
    console.log(`${debugStr}\n`);
  }
}

// Gets the suit and rank of a card
export function getCard(val?: number): { suit: number; rank: number; isFaceUp: boolean } {
  // If no val, the card might be an empty stack
  if (val === undefined) {
    return { suit: -1, rank: -1, isFaceUp: false };
  }

  let isFaceUp = true;
  if (val < 0) {
    isFaceUp = false;
    val *= -1;
  }
  val -= 1; // Adjust for 0-based indexing
  const suit = Math.floor(val / 13); // 0: Hearts, 1: Clubs, 2: Diamonds, 3: Spades
  const rank = val % 13; // 0-12: Ace to King
  return { suit, rank, isFaceUp };
}

// Returns a string representation of the card
export function getCardStr(val?: number): string {
  const card = getCard(val);
  if (card.rank === -1) {
    return 'Empty';
  }

  if (!card.isFaceUp) {
    return '[*]';
  }

  const { suit, rank } = card;
  const suits = ['\u2665', '\u2663', '\u2666', '\u2660']; // Hearts, Clubs, Diamonds, Spades
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  return `${suits[suit]}${ranks[rank]}`;
}

// Helper function: Determines if card 'a' can be stacked on card 'b'
// export function aStacksOnB(a: number, b?: number, isFoundation = false): boolean {
export function aStacksOnB({
  a,
  b,
  isFoundation = false,
}: {
  a: number;
  b?: number;
  isFoundation?: boolean;
}): boolean {
  /**
   * Determines if card 'a' can be stacked on card 'b'
   * In the tableau, cards are stacked in descending order and alternating colors.
   * In the isFoundation, cards are stacked in ascending order and the same suit.
   * Args:
   *     a: The card to be moved.
   *     b: The target card to stack upon.
   *     isFoundation: True if the target is a isFoundation card, False if it's a tableau card.
   * Returns:
   *     True if card 'a' can be stacked on card 'b' according to the rules, False otherwise.
   */

  // Ensure card a is face up
  const { suit: suitA, rank: rankA, isFaceUp: isFaceUpA } = getCard(a);
  if (!isFaceUpA) {
    return false;
  }

  // Handling stacking on an empty pike (when b is undefined)
  if (b === undefined) {
    // For isFoundation, only Aces (rank 0) can start the stack
    if (isFoundation) {
      return rankA === 0;
    }
    // For tableau, only Kings (rank 12) can start the stack
    return rankA === 12;
  }

  // Continue with b
  const { suit: suitB, rank: rankB, isFaceUp: isFaceUpB } = getCard(b);
  if (!isFaceUpB) {
    return false;
  }

  // ADJACENCY RULE
  // For isFoundation: ascending order (a.rank = b.rank + 1)
  // For tableau: descending order (a.rank = b.rank - 1)
  const isValidAdjacency = isFoundation ? rankA === rankB + 1 : rankA === rankB - 1;

  // ALTERNATING COLORS
  // 0: Red Hearts, 1: Black Clubs, 2: Red Diamonds, 3: Black Spades
  // For isFoundation: same suit
  // For tableau: alternating colors (a.suit % 2 != b.suit % 2)
  const isValidColor = isFoundation ? suitA === suitB : suitA % 2 !== suitB % 2;

  return isValidAdjacency && isValidColor;
}

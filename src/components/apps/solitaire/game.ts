/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */

// game.ts

const DEBUG = true;

interface Move {
  description: string;
  undoMove: () => void;
}

// Type Definitions
export interface State {
  stock: number[];
  waste: number[];
  foundations: number[][];
  tableau: number[][];
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
    stock: Array.from({ length: 52 }, (_, i) => i + 1),
    waste: [],
    foundations: [[], [], [], []],
    tableau: [[], [], [], [], [], [], []],
    moveStack: [],
  };

  shuffle(state.stock);

  // Set up tableau
  for (let i = 0; i < 7; i += 1) {
    const pile: number[] = [];
    while (pile.length < i + 1) {
      const card = state.stock.pop();
      if (card !== undefined) {
        pile.push(-card); // Negative values mean face-down
      }
    }
    // Flip the last card face-up
    pile[pile.length - 1] = -pile.at(-1)!;
    state.tableau[i] = pile;
  }
  return state;
}

// // Prints the current game state
// export function printState(state: State): void {
//   console.log('----- STOCK -----');
//   console.log(`${state.stock.length} cards\n`);
//   console.log('----- WASTE -----');
//   console.log(`${state.waste.length} cards\n`);
//   console.log('--- FOUNDATIONS ---');
//   for (const [i, isFoundation] of state.foundations.entries()) {
//     console.log(`${i}: ${isFoundation.length} cards`);
//   }
//   console.log('\n------ TABLEAU -----');
//   for (const [i, pile] of state.tableau.entries()) {
//     console.log(`${i}: ${pile.length} cards`);
//     for (const card of pile) {
//       printCard(card);
//     }
//     console.log();
//   }
// }

// Moves the top card from the stock to the waste pile
export function popToWaste(state: State): void {
  if (state.stock.length === 0) {
    state.stock = state.waste;
    state.waste = [];
    shuffle(state.stock);
    if (DEBUG) {
      const debugWaste = `[${state.waste.map((c) => getCardStr(c)).join(', ')}]`;
      const debugEmptyStock = '[]';
      const debugStr = `Stock to Waste: \nStock: ${debugEmptyStock}, \nWaste: ${debugWaste}`;
      console.log(`${debugStr} \nRESHUFFLED\n`);
    }
    return;
  }
  const card = state.stock.pop();
  if (card !== undefined) {
    state.waste.push(card);
  }

  const undoMove = () => {
    const undoCard = state.waste.pop();
    if (undoCard !== undefined) {
      state.stock.push(undoCard);
    }
  };
  state.moveStack.push({
    description: `Stock to Waste: Moved ${getCardStr(card)}`,
    undoMove,
  });
  if (DEBUG) {
    const debugStockTop = getCardStr(state.waste.at(-1));
    const debugStock = `[${state.stock.map((c) => getCardStr(c)).join(', ')}]`;
    const debugWaste = `[${state.waste.map((c) => getCardStr(c)).join(', ')}]`;
    const debugStr = `Stock to Waste: \nStock: ${debugStock}, \nWaste: ${debugWaste}`;
    console.log(`${debugStr} \nMOVED ${debugStockTop}\n`);
  }
}

// Determines if a card can be moved from the waste pile to a isFoundation
export function canMoveWasteToFoundation({
  state,
  foundationIdx,
}: {
  state: State;
  foundationIdx: number;
}): boolean {
  if (foundationIdx < 0 || foundationIdx > 3 || state.waste.length === 0) {
    return false;
  }
  const card = state.waste.at(-1)!;
  const isFoundation = state.foundations[foundationIdx];
  const foundationCard = isFoundation.at(-1);
  return aStacksOnB({ a: card, b: foundationCard, isFoundation: true });
}

// Moves the top card from the waste pile to the specified isFoundation
export function moveWasteToFoundation({
  state,
  foundationIdx,
}: {
  state: State;
  foundationIdx: number;
}): boolean {
  const debugCard =
    foundationIdx >= 0 && foundationIdx <= 3
      ? getCardStr(state.foundations[foundationIdx]?.at(-1))
      : `Undefined Foundation Idx: ${foundationIdx}`;
  const debugStr = `Waste to Foundation: \nWaste top: ${getCardStr(state.waste.at(-1))}, \nFoundation top: ${debugCard}`;

  if (!canMoveWasteToFoundation({ state, foundationIdx })) {
    if (DEBUG) {
      console.log(`${debugStr} \nFALSE\n`);
    }
    return false;
  }
  state.foundations[foundationIdx].push(state.waste.pop()!);

  const undoMove = () => state.waste.push(state.foundations[foundationIdx].pop()!);
  state.moveStack.push({
    description: `Waste to Foundation: Moved ${getCardStr(state.foundations[foundationIdx].at(-1))}`,
    undoMove,
  });

  if (DEBUG) {
    console.log(`${debugStr} \nTRUE\n`);
  }
  return true;
}

// // Checks if a card can be moved to a isFoundation
// export function canMoveCardToFoundation(state: State, card: number, foundationIdx: number): boolean {
//   if (foundationIdx < 0 || foundationIdx > 3) {
//     return false;
//   }
//   const isFoundation = state.foundations[foundationIdx];
//   return aStacksOnB(card, isFoundation.at(-1)) || canAceStack(card, isFoundation.at(-1));
// }
//
// Determines if a card can be moved from the waste pile to a tableau pile
export function canMoveWasteToTableau({
  state,
  tableauIdx,
}: {
  state: State;
  tableauIdx: number;
}): boolean {
  if (tableauIdx < 0 || tableauIdx > 6 || state.waste.length === 0) {
    return false;
  }
  const card = state.waste.at(-1)!;
  const tableau = state.tableau[tableauIdx];
  const tableauCard = tableau.at(-1);
  return aStacksOnB({ a: card, b: tableauCard });
}

// Moves the top card from the waste pile to the specified tableau pile
export function moveWasteToTableau({
  state,
  tableauIdx,
}: {
  state: State;
  tableauIdx: number;
}): boolean {
  const debugCard =
    tableauIdx >= 0 && tableauIdx <= 6
      ? getCardStr(state.tableau[tableauIdx]?.at(-1))
      : `Undefined Tableau Idx: ${tableauIdx}`;
  const debugStr = `Waste to Tableau: \nWaste top: ${getCardStr(state.waste.at(-1))}, \nTableau top: ${debugCard}`;
  if (!canMoveWasteToTableau({ state, tableauIdx })) {
    if (DEBUG) {
      console.log(`${debugStr} \nFALSE\n`);
    }
    return false;
  }
  state.tableau[tableauIdx].push(state.waste.pop()!);

  const undoMove = () => state.waste.push(state.tableau[tableauIdx].pop()!);
  state.moveStack.push({
    description: `Waste to Tableau: Moved ${getCardStr(state.tableau[tableauIdx].at(-1))}`,
    undoMove,
  });

  if (DEBUG) {
    console.log(`${debugStr} \nTRUE\n`);
  }
  return true;
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

// Determines if a card can be moved from a tableau pile to a isFoundation
export function canMoveTableauToFoundation({
  state,
  tableauIdx,
  foundationIdx,
}: {
  state: State;
  tableauIdx: number;
  foundationIdx: number;
}): boolean {
  if (tableauIdx < 0 || tableauIdx > 6 || foundationIdx < 0 || foundationIdx > 3) {
    return false;
  }

  const tableau = state.tableau[tableauIdx];
  if (tableau.length === 0) {
    return false;
  }

  const card = tableau.at(-1)!;
  const isFoundation = state.foundations[foundationIdx];
  const foundationCard = isFoundation.at(-1);

  return aStacksOnB({ a: card, b: foundationCard, isFoundation: true });
}

// Moves the top card from a tableau pile to a isFoundation
export function moveTableauToFoundation({
  state,
  tableauIdx,
  foundationIdx,
}: {
  state: State;
  tableauIdx: number;
  foundationIdx: number;
}): boolean {
  const debugCardA =
    tableauIdx >= 0 && tableauIdx <= 6
      ? getCardStr(state.tableau[tableauIdx]?.at(-1))
      : `Undefined Tableau Idx: ${tableauIdx}`;
  const debugCardB =
    foundationIdx >= 0 && foundationIdx <= 3
      ? getCardStr(state.foundations[foundationIdx]?.at(-1))
      : `Undefined Foundation Idx: ${foundationIdx}`;
  const debugStr = `Tableau to Foundation: \nTableau top: ${debugCardA}, \nFoundation top: ${debugCardB}`;
  if (!canMoveTableauToFoundation({ state, tableauIdx, foundationIdx })) {
    if (DEBUG) {
      console.log(`${debugStr} \nFALSE\n`);
    }
    return false;
  }

  const card = state.tableau[tableauIdx].pop()!;
  state.foundations[foundationIdx].push(card);

  let wasFlipped = false;
  if (state.tableau[tableauIdx].length > 0 && state.tableau[tableauIdx].at(-1)! < 0) {
    state.tableau[tableauIdx][state.tableau[tableauIdx].length - 1] *= -1;
    wasFlipped = true;
  }

  const undoMove = () => {
    if (wasFlipped) {
      state.tableau[tableauIdx][state.tableau[tableauIdx].length - 1] *= -1;
    }
    state.tableau[tableauIdx].push(state.foundations[foundationIdx].pop()!);
  };

  state.moveStack.push({
    description: `Tableau to Foundation: Moved ${getCardStr(state.foundations[foundationIdx].at(-1))}`,
    undoMove,
  });

  if (DEBUG) {
    console.log(`${debugStr} \nTRUE\n`);
  }
  return true;
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

// Moves a sequence of cards from one tableau pile to another
export function moveTableauToTableau({
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
  const debugDestPile =
    destIdx >= 0 && destIdx <= 6
      ? // ? state.tableau[destIdx]
        `[${state.tableau[destIdx].map((card) => getCardStr(card)).join(', ')}]`
      : `Undefined Destination Pile Idx: ${destIdx}`;

  let debugSrcPile;
  if (srcIdx >= 0 && srcIdx <= 6) {
    debugSrcPile =
      count <= 0 || count > state.tableau[srcIdx].length
        ? `Invalid Source Pile due to count: ${count}`
        : `[${state.tableau[srcIdx]
            .slice(-count)
            .map((card) => getCardStr(card))
            .join(', ')}]`;
  } else {
    debugSrcPile = `Undefined Source Pile Idx: ${srcIdx}`;
  }

  const debugStr = `Tableau to tableau: Moving ${debugSrcPile} to ${debugDestPile}`;

  if (!canMoveTableauToTableau({ state, srcIdx, destIdx, count })) {
    if (DEBUG) {
      console.log(`${debugStr} \nFALSE\n`);
    }
    return false;
  }

  const srcPile = state.tableau[srcIdx];
  const destPile = state.tableau[destIdx];
  const moveStack = srcPile.splice(-count, count);
  destPile.push(...moveStack);

  let wasFlipped = false;
  if (srcPile.length > 0 && srcPile.at(-1)! < 0) {
    srcPile[srcPile.length - 1] *= -1;
    wasFlipped = true;
  }

  const undoMove = () => {
    if (wasFlipped) {
      srcPile[srcPile.length - 1] *= -1;
    }
    srcPile.push(...destPile.splice(-count, count));
  };
  state.moveStack.push({
    description: `Tableau to Tableau: Moved ${debugSrcPile} to ${debugDestPile}`,
    undoMove,
  });
  if (DEBUG) {
    console.log(`${debugStr} \nTRUE\n`);
  }

  return true;
}

// Checks if a sequence of cards is a valid stack according to game rules
export function isCardStackValid(stack: number[]): boolean {
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

// // Prints the card's suit and rank
// export function printCard(val: number): void {
//   if (val < 0) {
//     console.log('[*]'); // Placeholder for a face-down card
//     return;
//   }
//   const card = getCard(val);
//   if (card) {
//     const [suit, rank] = card;
//     const suits = ['♥', '♣', '♦', '♠'];
//     const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//     console.log(`${suits[suit]}${ranks[rank]}`);
//   } else {
//     console.log('[*]');
//   }
// }
//
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

// // Helper function: Checks if an Ace can be placed in an empty isFoundation
// export function canAceStack(card: number, isFoundation?: number): boolean {
//   return isFoundation === undefined && card % 13 === 1;
// }
//
// // Helper function: Checks if a King can be placed on an empty tableau pile
// export function canKingStack(card: number, tableau?: number): boolean {
//   return tableau === undefined && card % 13 === 0;
// }

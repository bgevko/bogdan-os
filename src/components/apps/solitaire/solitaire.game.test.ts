/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-console */
/* eslint-disable no-relative-import-paths/no-relative-import-paths */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable unicorn/no-useless-undefined */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
// game.test.ts
import { describe, it, expect } from 'vitest';

import { initGame, aStacksOnB } from '@/components/apps/solitaire/game';

import * as game from './game';

describe('Solitaire', () => {
  it('should initialize the game with the correct stock and tableau setup', () => {
    for (let i = 0; i < 1000; i += 1) {
      const state = initGame();

      // Check stock count
      expect(state.stock.length).toBe(24);

      // Check tableau piles for face-down and face-up cards
      for (const pile of state.tableau) {
        expect(pile.slice(0, -1).every((card) => card < 0)).toBe(true);
        expect(pile.slice(-1).every((card) => card > 0)).toBe(true);
      }
    }
  });

  it('should stack correctly in the tablueau', () => {
    const valid: Record<number, number[]> = {
      // Hearts on Clubs and Spades
      1: [15, 41], // A♥ -> 2♣, 2♠
      2: [16, 42], // 2♥ -> 3♣, 3♠
      3: [17, 43], // 3♥ -> 4♣, 4♠
      4: [18, 44], // 4♥ -> 5♣, 5♠
      5: [19, 45], // 5♥ -> 6♣, 6♠
      6: [20, 46], // 6♥ -> 7♣, 7♠
      7: [21, 47], // 7♥ -> 8♣, 8♠
      8: [22, 48], // 8♥ -> 9♣, 9♠
      9: [23, 49], // 9♥ -> 10♣, 10♠
      10: [24, 50], // 10♥ -> J♣, J♠
      11: [25, 51], // J♥ -> Q♣, Q♠
      12: [26, 52], // Q♥ -> K♣, K♠
      13: [], // K♥ -> undefined
      // Clubs on Hearts and Diamonds
      14: [2, 28], // A♣ -> 2♥︎, 2♦︎
      15: [3, 29], // 2♣ -> 3♥︎, 3♦︎
      16: [4, 30], // 3♣ -> 4♥︎, 4♦︎
      17: [5, 31], // 4♣ -> 5♥︎, 5♦︎
      18: [6, 32], // 5♣ -> 6♥︎, 6♦︎
      19: [7, 33], // 6♣ -> 7♥︎, 7♦︎
      20: [8, 34], // 7♣ -> 8♥︎, 8♦︎
      21: [9, 35], // 8♣ -> 9♥︎, 9♦︎
      22: [10, 36], // 9♣ -> 10♥︎, 10♦︎
      23: [11, 37], // 10♣ -> J♥︎, J♦︎
      24: [12, 38], // J♣ -> Q♥︎, Q♦︎
      25: [13, 39], // Q♣ -> K♥︎, K♦︎
      26: [], // K♣ -> undefined
      // Diamonds on Clubs and Spades
      27: [15, 41], // A♦︎ -> 2♣, 2♠
      28: [16, 42], // 2♦︎ -> 3♣, 3♠
      29: [17, 43], // 3♦︎ -> 4♣, 4♠
      30: [18, 44], // 4♦︎ -> 5♣, 5♠
      31: [19, 45], // 5♦︎ -> 6♣, 6♠
      32: [20, 46], // 6♦︎ -> 7♣, 7♠
      33: [21, 47], // 7♦︎ -> 8♣, 8♠
      34: [22, 48], // 8♦︎ -> 9♣, 9♠
      35: [23, 49], // 9♦︎ -> 10♣, 10♠
      36: [24, 50], // 10♦︎ -> J♣, J♠
      37: [25, 51], // J♦︎ -> Q♣, Q♠
      38: [26, 52], // Q♦︎ -> K♣, K♠
      39: [], // K♦︎ -> undefined
      // Spades on Hearts and Diamonds
      40: [2, 28], // A♠ -> 2♥︎, 2♦︎
      41: [3, 29], // 2♠ -> 3♥︎, 3♦︎
      42: [4, 30], // 3♠ -> 4♥︎, 4♦︎
      43: [5, 31], // 4♠ -> 5♥︎, 5♦︎
      44: [6, 32], // 5♠ -> 6♥︎, 6♦︎
      45: [7, 33], // 6♠ -> 7♥︎, 7♦︎
      46: [8, 34], // 7♠ -> 8♥︎, 8♦︎
      47: [9, 35], // 8♠ -> 9♥︎, 9♦︎
      48: [10, 36], // 9♠ -> 10♥︎, 10♦︎
      49: [11, 37], // 10♠ -> J♥︎, J♦︎
      50: [12, 38], // J♠ -> Q♥︎, Q♦︎
      51: [13, 39], // Q♠ -> K♥︎, K♦︎
      52: [], // K♠ -> undefined
    };

    // Test all non empty tableau combinations
    for (let a = 1; a <= 52; a += 1) {
      for (let b = 1; b <= 52; b += 1) {
        const expected = valid[a].includes(b);
        const result = aStacksOnB({ a, b });

        // Debug message if not passing
        if (expected !== result) {
          const shouldStackMsg = `${game.getCardStr(a)} should stack on ${game.getCardStr(b)}`;
          const shouldNotStackMsg = `${game.getCardStr(a)} should not stack on ${game.getCardStr(b)}`;

          if (expected) {
            console.log(shouldStackMsg);
          } else {
            console.log(shouldNotStackMsg);
          }
          expect.fail();
        }
        expect(result).toBe(expected);
      }
    }

    // Ensure kings stack on empty tableau piles
    const kings = [13, 26, 39, 52];
    for (const a of kings) {
      const emptyPile: number[] = [];
      // grab the top of an empty pile
      const b = emptyPile.at(-1);
      const result = aStacksOnB({ a, b });

      if (!result) {
        console.log(`${game.getCardStr(a)} should stack on an empty pile`);
        expect.fail();
      }
      expect(result).toBe(true);
    }
  });

  it('should stack correctly in the foundation', () => {
    // In the foundation, the stacking rules are different than in the tableau
    // The stack starts with an Ace and builds up to a King
    // Only cards with the same suit can stack on each other
    const valid: Record<number, number[]> = {
      // Hearts foundation
      1: [], // A♥ -> undefined
      2: [1], // 2♥ -> A♥
      3: [2], // 3♥ -> 2♥
      4: [3], // 4♥ -> 3♥
      5: [4], // 5♥ -> 4♥
      6: [5], // 6♥ -> 5♥
      7: [6], // 7♥ -> 6♥
      8: [7], // 8♥ -> 7♥
      9: [8], // 9♥ -> 8♥
      10: [9], // 10♥ -> 9♥
      11: [10], // J♥ -> 10♥
      12: [11], // Q♥ -> J♥
      13: [12], // K♥ -> Q♥
      // Clubs foundation
      14: [], // A♣ -> undefined
      15: [14], // 2♣ -> A♣
      16: [15], // 3♣ -> 2♣
      17: [16], // 4♣ -> 3♣
      18: [17], // 5♣ -> 4♣
      19: [18], // 6♣ -> 5♣
      20: [19], // 7♣ -> 6♣
      21: [20], // 8♣ -> 7♣
      22: [21], // 9♣ -> 8♣
      23: [22], // 10♣ -> 9♣
      24: [23], // J♣ -> 10♣
      25: [24], // Q♣ -> J♣
      26: [25], // K♣ -> Q♣
      // Diamonds foundation
      27: [], // A♦︎ -> undefined
      28: [27], // 2♦︎ -> A♦︎
      29: [28], // 3♦︎ -> 2♦︎
      30: [29], // 4♦︎ -> 3♦︎
      31: [30], // 5♦︎ -> 4♦︎
      32: [31], // 6♦︎ -> 5♦︎
      33: [32], // 7♦︎ -> 6♦︎
      34: [33], // 8♦︎ -> 7♦︎
      35: [34], // 9♦︎ -> 8♦︎
      36: [35], // 10♦︎ -> 9♦︎
      37: [36], // J♦︎ -> 10♦︎
      38: [37], // Q♦︎ -> J♦︎
      39: [38], // K♦︎ -> Q♦︎
      // Spades foundation
      40: [], // A♠ -> undefined
      41: [40], // 2♠ -> A♠
      42: [41], // 3♠ -> 2♠
      43: [42], // 4♠ -> 3♠
      44: [43], // 5♠ -> 4♠
      45: [44], // 6♠ -> 5♠
      46: [45], // 7♠ -> 6♠
      47: [46], // 8♠ -> 7♠
      48: [47], // 9♠ -> 8♠
      49: [48], // 10♠ -> 9♠
      50: [49], // J♠ -> 10♠
      51: [50], // Q♠ -> J♠
      52: [51], // K♠ -> Q♠
    };

    // Test all non empty foundation combinations
    for (let a = 1; a <= 52; a += 1) {
      for (let b = 1; b <= 52; b += 1) {
        const expected = valid[a].includes(b);
        const result = aStacksOnB({ a, b, isFoundation: true });
        // Debug message if not passing
        if (expected !== result) {
          const shouldStackMsg = `${game.getCardStr(a)} should stack on ${game.getCardStr(b)}`;
          const shouldNotStackMsg = `${game.getCardStr(a)} should not stack on ${game.getCardStr(b)}`;
          if (expected) {
            console.log(shouldStackMsg);
          } else {
            console.log(shouldNotStackMsg);
          }
          expect.fail();
        }
        expect(result).toBe(expected);
      }
    }

    // Ensure aces stack on empty foundation piles
    const aces = [1, 14, 27, 40];
    const emptyPile: number[] = [];
    // grab the top of an empty pile
    const b = emptyPile.at(-1);
    for (const a of aces) {
      const result = aStacksOnB({ a, b, isFoundation: true });
      if (!result) {
        console.log(`${game.getCardStr(a)} should stack on an empty pile`);
        expect.fail();
      }
      expect(result).toBe(true);
    }
  });

  it('should pop from stock to waste correctly', () => {
    const state = initGame();
    // stock should be 24 cards
    expect(state.stock.length).toBe(24);

    // Pop all cards from stock to waste
    for (let i = 0; i < 24; i += 1) {
      const stockTop = state.stock.at(-1);
      game.popToWaste(state);

      // Stock should be i cards less
      expect(state.stock.length).toBe(23 - i);

      // Top of waste should be the card popped from stock
      expect(state.waste.at(-1)).toBe(stockTop);
    }

    // stock is empty and waste is full
    expect(state.stock.length).toBe(0);
    expect(state.waste.length).toBe(24);

    // Popping again should transfer all the waste back to stock
    game.popToWaste(state);
    expect(state.stock.length).toBe(24);
    expect(state.waste.length).toBe(0);
  });

  it('should move from waste to foundation pile and also test winning condition', () => {
    const state = initGame();

    // Hearts foundation
    state.waste = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let foundationIdx = 0;
    // attempt to move all heart cards to foundation 0
    for (let i = 1; i <= 13; i += 1) {
      const topWaste = state.waste.at(-1);
      const result = game.moveWasteToFoundation({ state, foundationIdx });
      if (!result) {
        const cardA = state.waste.at(-1);
        const cardB = state.foundations[foundationIdx].at(-1);
        const shouldMoveMsg = `${game.getCardStr(cardA)} should move to foundation column ${foundationIdx}, top card is ${game.getCardStr(cardB)}`;
        console.log(shouldMoveMsg);
      }
      expect(result).toBe(true);
      expect(state.foundations[foundationIdx].at(-1)).toBe(topWaste);
      expect(state.waste.length).toBe(13 - i);
      expect(state.foundations[foundationIdx].length).toBe(i);
    }

    // Clubs foundation
    state.waste = [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14];
    foundationIdx = 1;
    // attempt to move all club cards to foundation 1
    for (let i = 1; i <= 13; i += 1) {
      const topWaste = state.waste.at(-1);
      const result = game.moveWasteToFoundation({ state, foundationIdx });
      if (!result) {
        const cardA = state.waste.at(-1);
        const cardB = state.foundations[foundationIdx].at(-1);
        const shouldMoveMsg = `${game.getCardStr(cardA)} should move to foundation column ${foundationIdx}, top card is ${game.getCardStr(cardB)}`;
        console.log(shouldMoveMsg);
      }
      expect(result).toBe(true);
      expect(state.foundations[foundationIdx].at(-1)).toBe(topWaste);
      expect(state.waste.length).toBe(13 - i);
      expect(state.foundations[foundationIdx].length).toBe(i);
    }

    // Diamonds foundation
    state.waste = [39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27];
    foundationIdx = 2;
    // attempt to move all diamond cards to foundation 2
    for (let i = 1; i <= 13; i += 1) {
      const topWaste = state.waste.at(-1);
      const result = game.moveWasteToFoundation({ state, foundationIdx });
      if (!result) {
        const cardA = state.waste.at(-1);
        const cardB = state.foundations[foundationIdx].at(-1);
        const shouldMoveMsg = `${game.getCardStr(cardA)} should move to foundation column ${foundationIdx}, top card is ${game.getCardStr(cardB)}`;
        console.log(shouldMoveMsg);
      }
      expect(result).toBe(true);
      expect(state.foundations[foundationIdx].at(-1)).toBe(topWaste);
      expect(state.waste.length).toBe(13 - i);
      expect(state.foundations[foundationIdx].length).toBe(i);
    }

    // Spades foundation
    state.waste = [52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40];
    foundationIdx = 3;
    // attempt to move all spade cards to foundation 3
    for (let i = 1; i <= 13; i += 1) {
      const topWaste = state.waste.at(-1);
      const result = game.moveWasteToFoundation({ state, foundationIdx });
      if (!result) {
        const cardA = state.waste.at(-1);
        const cardB = state.foundations[foundationIdx].at(-1);
        const shouldMoveMsg = `${game.getCardStr(cardA)} should move to foundation column ${foundationIdx}, top card is ${game.getCardStr(cardB)}`;
        console.log(shouldMoveMsg);
      }
      expect(result).toBe(true);
      expect(state.foundations[foundationIdx].at(-1)).toBe(topWaste);
      expect(state.waste.length).toBe(13 - i);
      expect(state.foundations[foundationIdx].length).toBe(i);
    }

    // Ensure waste is empty
    expect(state.waste.length).toBe(0);
    // Ensure all foundations are full
    for (const foundation of state.foundations) {
      expect(foundation.length).toBe(13);
    }
    // Expect game to be won
    expect(game.isGameWon(state)).toBe(true);

    // Test a few invlalid moves

    // Empty waste to foundation
    state.foundations = [[1], [], [], []];
    expect(game.moveWasteToFoundation({ state, foundationIdx: 0 })).toBe(false);
    expect(state.foundations[0].length).toBe(1);
    expect(state.waste.length).toBe(0);

    // 2 of clubs on 1 of hearts in foundation idx 0
    state.waste = [15];
    expect(game.moveWasteToFoundation({ state, foundationIdx: 0 })).toBe(false);
    expect(state.foundations[0].length).toBe(1);
    expect(state.waste.length).toBe(1);

    // try to stack a non ace on empty
    expect(game.moveWasteToFoundation({ state, foundationIdx: 1 })).toBe(false);
    expect(state.foundations[1].length).toBe(0);
    expect(state.waste.length).toBe(1);

    // try to stack same suit 3 on Ace
    state.foundations = [[1], [], [], []];
    state.waste = [3];
    expect(game.moveWasteToFoundation({ state, foundationIdx: 0 })).toBe(false);

    // Try to stack a same suit, ascending adjacent card (this game state should not be possible)
    state.foundations = [[3], [], [], []];
    state.waste = [2];
    expect(game.moveWasteToFoundation({ state, foundationIdx: 0 })).toBe(false);

    // Try to stack a same suit, same value card (this game state should not be possible)
    state.foundations = [[3], [], [], []];
    state.waste = [3];
    expect(game.moveWasteToFoundation({ state, foundationIdx: 0 })).toBe(false);

    // Try to stack a valid 2 on ace, but it's face down
    state.foundations = [[1], [], [], []];
    state.waste = [-2];
    expect(game.moveWasteToFoundation({ state, foundationIdx: 0 })).toBe(false);

    // Try an invalid foundation index
    state.foundations = [[1], [], [], []];
    state.waste = [2];
    expect(game.moveWasteToFoundation({ state, foundationIdx: 4 })).toBe(false);
  });

  it('should move waste to first valid foundation', () => {
    const state = initGame();
    state.waste = [4, 3, 2, 1];

    // Ace to first empty
    expect(game.moveWasteToFirstValidFoundation({ state })).toBe(true);
    expect(state.waste).toEqual([4, 3, 2]);
    expect(state.foundations).toEqual([[1], [], [], []]);

    // 2 to first valid
    expect(game.moveWasteToFirstValidFoundation({ state })).toBe(true);
    expect(state.waste).toEqual([4, 3]);
    expect(state.foundations).toEqual([[1, 2], [], [], []]);

    // Another ace to next valid
    state.waste = [14];
    expect(game.moveWasteToFirstValidFoundation({ state })).toBe(true);
    expect(state.waste).toEqual([]);
    expect(state.foundations).toEqual([[1, 2], [14], [], []]);

    // Try twice again, one with a 3 of hearts, and the other with a 2 of clubs
    state.waste = [3, 15];
    expect(game.moveWasteToFirstValidFoundation({ state })).toBe(true);
    expect(state.waste).toEqual([3]);
    expect(state.foundations).toEqual([[1, 2], [14, 15], [], []]);
    expect(game.moveWasteToFirstValidFoundation({ state })).toBe(true);
    expect(state.waste).toEqual([]);
    expect(state.foundations).toEqual([[1, 2, 3], [14, 15], [], []]);
  });

  it('should move waste to tableau pile', () => {
    const state = initGame();

    // empty to full stack, alternating hearts, clubs, diamonds, spades
    state.waste = [1, 15, 29, 43, 5, 19, 33, 47, 9, 23, 37, 51, 13];
    state.tableau = [[], [], [], [], [], [], [], []];
    let tableauIdx = 0;
    for (let i = 1; i <= 13; i += 1) {
      expect(game.moveWasteToTableau({ state, tableauIdx })).toBe(true);
    }

    // alternating hearts and clubs
    state.waste = [1, 15, 3, 17, 5, 19, 7, 21, 9, 23, 11, 25, 13];
    state.tableau = [[], [], [], [], [], [], [], []];
    tableauIdx = 1;
    for (let i = 1; i <= 13; i += 1) {
      expect(game.moveWasteToTableau({ state, tableauIdx })).toBe(true);
    }

    tableauIdx = 2;
    // invalid moves
    // empty waste
    state.waste = [];
    state.tableau = [[], [], [], [], [], [], [], []];
    expect(game.moveWasteToTableau({ state, tableauIdx })).toBe(false);

    // correct suit, but ascending adjacent card,
    // We'll try to stack jack of hearts onto a 10 of clubs
    state.waste = [11];
    state.tableau = [[], [], [23], [], [], [], [], []];
    expect(game.moveWasteToTableau({ state, tableauIdx })).toBe(false);

    // correct suit, but same value card
    state.waste = [10];
    state.tableau = [[], [], [23], [], [], [], [], []];
    expect(game.moveWasteToTableau({ state, tableauIdx })).toBe(false);

    // invalid idx,
    tableauIdx = 8;
    state.waste = [13];
    state.tableau = [[], [], [], [], [], [], [], []];
    expect(game.moveWasteToTableau({ state, tableauIdx })).toBe(false);
  });

  it('should move tableau to foundation pile', () => {
    const state = initGame();

    // Hearts foundation
    state.tableau = [[8, 1], [9, 2], [10, 3], [11, 4], [12, 5], [13, 6], [7]];
    state.foundations = [[], [], [], []];
    for (let i = 0; i < 13; i += 1) {
      const tableauIdx = i % 7;
      expect(game.moveTableauToFoundation({ state, tableauIdx, foundationIdx: 0 })).toBe(true);
    }
    expect(state.foundations[0].length).toBe(13);
    expect(state.tableau.every((pile) => pile.length === 0)).toBe(true);

    // Clubs foundation
    state.tableau = [[26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14], [], [], [], [], [], []];
    for (let i = 0; i < 13; i += 1) {
      const tableauIdx = 0;
      expect(game.moveTableauToFoundation({ state, tableauIdx, foundationIdx: 1 })).toBe(true);
    }

    // Diamonds foundation
    state.tableau = [[39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27], [], [], [], [], [], []];
    for (let i = 0; i < 13; i += 1) {
      const tableauIdx = 0;
      expect(game.moveTableauToFoundation({ state, tableauIdx, foundationIdx: 2 })).toBe(true);
    }

    // Spades foundation
    state.tableau = [[52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40], [], [], [], [], [], []];
    for (let i = 0; i < 13; i += 1) {
      const tableauIdx = 0;
      expect(game.moveTableauToFoundation({ state, tableauIdx, foundationIdx: 3 })).toBe(true);
    }

    // Covered cards should flip when uncovered
    state.tableau = [[-4, -3, -2, 1], [], [], [], [], [], []];
    state.foundations = [[], [], [], []];
    expect(game.moveTableauToFoundation({ state, tableauIdx: 0, foundationIdx: 0 })).toBe(true);
    expect(state.tableau[0]).toEqual([-4, -3, 2]);
    expect(game.moveTableauToFoundation({ state, tableauIdx: 0, foundationIdx: 0 })).toBe(true);
    expect(state.tableau[0]).toEqual([-4, 3]);
    expect(game.moveTableauToFoundation({ state, tableauIdx: 0, foundationIdx: 0 })).toBe(true);
    expect(state.tableau[0]).toEqual([4]);
    expect(game.moveTableauToFoundation({ state, tableauIdx: 0, foundationIdx: 0 })).toBe(true);
    expect(state.tableau[0]).toEqual([]);
  });

  it('should move single top card from tableau to tableau', () => {
    const state = initGame();

    // move a single king to another empty pile
    state.tableau = [[13], [26], [39], [52], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 4, count: 1 })).toBe(true);
    expect(game.moveTableauToTableau({ state, srcIdx: 1, destIdx: 5, count: 1 })).toBe(true);
    expect(game.moveTableauToTableau({ state, srcIdx: 2, destIdx: 6, count: 1 })).toBe(true);
    expect(game.moveTableauToTableau({ state, srcIdx: 3, destIdx: 0, count: 1 })).toBe(true);

    // Aces cannot stack on empty tableau
    state.tableau = [[1], [14], [27], [40], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 5, count: 1 })).toBe(false);
    expect(game.moveTableauToTableau({ state, srcIdx: 1, destIdx: 5, count: 1 })).toBe(false);
    expect(game.moveTableauToTableau({ state, srcIdx: 2, destIdx: 5, count: 1 })).toBe(false);
    expect(game.moveTableauToTableau({ state, srcIdx: 3, destIdx: 5, count: 1 })).toBe(false);

    // Transfer entire pile to another empty pile, 1 card at a time
    state.tableau = [[1, 15, 29, 43, 5, 19, 33, 47, 9, 23, 37, 51, 13], [], [], [], [], [], []];
    for (let i = 0; i < 13; i += 1) {
      expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 1 })).toBe(true);
    }
    expect(state.tableau[0].length).toBe(0);
    expect(state.tableau[1].length).toBe(13);

    // invalid moves
    // empty src
    state.tableau = [[], [], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 1 })).toBe(false);
    // invalid src idx
    expect(game.moveTableauToTableau({ state, srcIdx: 8, destIdx: 1, count: 1 })).toBe(false);
    // invalid dest idx
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 8, count: 1 })).toBe(false);

    // Try to move a card that's not supposed to stack
    state.tableau = [[1], [2], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 1 })).toBe(false);
    expect(game.moveTableauToTableau({ state, srcIdx: 1, destIdx: 0, count: 1 })).toBe(false);

    // Uncover a covered card when exposed
    state.tableau = [[-23, -11, -25, 13], [], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 1 })).toBe(true);
    expect(state.tableau[0]).toEqual([-23, -11, 25]);
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 1 })).toBe(true);
    expect(state.tableau[0]).toEqual([-23, 11]);
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 1 })).toBe(true);
    expect(state.tableau[0]).toEqual([23]);
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 1 })).toBe(true);
    expect(state.tableau[0]).toEqual([]);
  });

  it('should move multiple cards from tableau to tableau', () => {
    const state = initGame();

    // Move a partial valid king stack to another empty pile
    state.tableau = [[13, 25, 37, 49, 9, 21, 33, 45], [], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 8 })).toBe(true);
    expect(state.tableau[0].length).toBe(0);
    expect(state.tableau[1].length).toBe(8);

    // Move a partial stack on top of another partial stack
    state.tableau = [[13, 25, 37, 49, 9], [21, 33, 45, 5, 17], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 5 })).toBe(false);
    expect(game.moveTableauToTableau({ state, srcIdx: 1, destIdx: 0, count: 5 })).toBe(true);

    // Attempt to move an invalid stack pile, but with the stack top card being valid
    // i.e. the 8 (8 of hearts) can stack on the 22 (9 of clubs), but the cards below the 8 form an
    // invalid stack
    state.tableau = [[8, 7, 6, 5, 4], [22], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 5 })).toBe(false);

    // Attempt to move a valid stack, but some of the cards are face down
    // i.e. the -9 (9 of hearts) and all cards below form a valid stack, and would
    // normally stack on the 23(10 of clubs), but the -9 is face down
    state.tableau = [[-9, -21, -33, 45], [23], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 4 })).toBe(false);

    // If a covered card is exposed, it should uncover
    // I'll move the 37 (Jack of diamonds) to the 25 (Queen of clubs)
    // The -1 (Ace of hearts) should uncover
    state.tableau = [[-2, -1, 37, 23, 9], [25], [], [], [], [], []];
    expect(game.moveTableauToTableau({ state, srcIdx: 0, destIdx: 1, count: 3 })).toBe(true);
    expect(state.tableau[0]).toEqual([-2, 1]);
    expect(state.tableau[1]).toEqual([25, 37, 23, 9]);
    game.moveTableauToFoundation({ state, tableauIdx: 0, foundationIdx: 0 });
    expect(state.tableau[0]).toEqual([2]);
  });

  it('should undo moves correctly', () => {
    const initialState = initGame();
    // deep copy the state using strucutred cloning
    let state = structuredClone(initialState);
    // single undo
    game.popToWaste(state);
    expect(state).not.toEqual(initialState);
    game.undo(state);
    expect(state).toEqual(initialState);

    // undo when move statck is empty
    game.undo(state);
    expect(state).toEqual(initialState);

    // Pop to waste 5 times, and undo 5 times
    for (let i = 0; i < 5; i += 1) {
      game.popToWaste(state);
    }
    for (let i = 0; i < 5; i += 1) {
      game.undo(state);
    }
    expect(state).toEqual(initialState);

    // Test waste to foundation undo
    initialState.waste = [40, 27, 14, 1];
    initialState.foundations = [[], [], [], []];
    state = structuredClone(initialState);

    game.moveWasteToFoundation({ state, foundationIdx: 0 });
    game.moveWasteToFoundation({ state, foundationIdx: 1 });
    game.moveWasteToFoundation({ state, foundationIdx: 2 });
    game.moveWasteToFoundation({ state, foundationIdx: 3 });
    game.undo(state);
    game.undo(state);
    game.undo(state);
    game.undo(state);
    expect(state).toEqual(initialState);

    // waste to tableau undo
    initialState.waste = [13, 26, 39, 52];
    initialState.tableau = [[], [], [], [], [], [], []];
    state = structuredClone(initialState);
    game.moveWasteToTableau({ state, tableauIdx: 0 });
    game.moveWasteToTableau({ state, tableauIdx: 1 });
    game.moveWasteToTableau({ state, tableauIdx: 2 });
    game.moveWasteToTableau({ state, tableauIdx: 3 });
    game.undo(state);
    game.undo(state);
    game.undo(state);
    game.undo(state);
    expect(state).toEqual(initialState);

    // tableau to foundation undo
    initialState.tableau = [[1], [14], [27], [40], [], [], []];
    initialState.foundations = [[], [], [], []];
    state = structuredClone(initialState);
    game.moveTableauToFoundation({ state, tableauIdx: 0, foundationIdx: 0 });
    game.moveTableauToFoundation({ state, tableauIdx: 1, foundationIdx: 1 });
    game.moveTableauToFoundation({ state, tableauIdx: 2, foundationIdx: 2 });
    game.moveTableauToFoundation({ state, tableauIdx: 3, foundationIdx: 3 });
    game.undo(state);
    game.undo(state);
    game.undo(state);
    game.undo(state);
    expect(state).toEqual(initialState);

    // Tableau to tableau
    initialState.tableau = [[13, 25, 37, 49, 9], [21, 33, 45, 5, 17], [], [], [], [], []];
    state = structuredClone(initialState);
    game.moveTableauToTableau({ state, srcIdx: 1, destIdx: 0, count: 5 });
    game.undo(state);
    expect(state).toEqual(initialState);
  });
});

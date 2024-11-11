/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

      // first stock card be face down
      expect(state.stock.at(-1)! > 0).toBe(false);
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
      expect(state.waste.length).toBe(i + 1);

      // Top of waste should be the card popped from stock
      expect(state.waste.at(-1)).toBe(-stockTop!);
    }

    // stock is empty and waste is full
    expect(state.stock.length).toBe(0);
    expect(state.waste.length).toBe(24);

    // Popping again should transfer all the waste back to stock
    game.popToWaste(state);
    expect(state.stock.length).toBe(24);
    expect(state.waste.length).toBe(0);

    // Top stock card should be face down
    expect(state.stock.at(-1)! < 0).toBe(true);
    game.popToWaste(state);
    expect(state.stock.at(-1)! < 0).toBe(true);
  });

  it('Single card from waste or foundation should move to transfer pile correctly', () => {
    const state = initGame();
    state.waste = [-1, -2];
    expect(game.moveWasteToTransfer({ state })).toBe(false);
    state.waste = [-1, 2];
    expect(game.moveWasteToTransfer({ state })).toBe(true);
    expect(state.transferStack).toEqual([2]);
    game.undo(state);
    expect(state.waste).toEqual([-1, 2]);
    expect(state.transferStack).toEqual([]);

    // foundation
    state.foundations = [[1], [2], [3], [4]];
    expect(game.moveFoundationToTransfer({ state, foundationIdx: 0 })).toBe(true);
    expect(state.transferStack).toEqual([1]);
    expect(state.foundations[0]).toEqual([]);
    game.undo(state);
    expect(state.transferStack).toEqual([]);
    expect(state.foundations[0]).toEqual([1]);
  });

  it('should move one or more cards from the tableau to the transfer pile correctly', () => {
    const state = initGame();
    state.tableau = [[-1, -2, -3], [4], [5], [6], [7], [8], [9]];
    expect(game.moveTableauToTransfer({ state, tableauIdx: 0, count: 1 })).toBe(false);
    state.tableau[0] = [-1, 2, 3];
    expect(game.moveTableauToTransfer({ state, tableauIdx: 0, count: 1 })).toBe(true);
    expect(state.transferStack).toEqual([3]);
    expect(state.tableau[0]).toEqual([-1, 2]);
    game.undo(state);
    expect(state.transferStack).toEqual([]);
    expect(state.tableau[0]).toEqual([-1, 2, 3]);

    // move a card of 2 stacks (valid)
    state.tableau[0] = [-1, 29, 15];
    expect(game.moveTableauToTransfer({ state, tableauIdx: 0, count: 2 })).toBe(true);
    expect(state.transferStack).toEqual([29, 15]);
    game.undo(state);
    expect(state.transferStack).toEqual([]);
    expect(state.tableau[0]).toEqual([-1, 29, 15]);
    expect(game.moveTableauToTransfer({ state, tableauIdx: 0, count: 3 })).toBe(false);

    // try to transfer an entire valid stack
    state.tableau[0] = [13, 25, 11, 23, 9, 21, 7, 19, 5, 17, 3, 15, 1];
    expect(game.moveTableauToTransfer({ state, tableauIdx: 0, count: 13 })).toBe(true);
    expect(state.transferStack).toEqual([13, 25, 11, 23, 9, 21, 7, 19, 5, 17, 3, 15, 1]);
    expect(state.tableau[0]).toEqual([]);
    game.undo(state);
    expect(state.transferStack).toEqual([]);
    expect(state.tableau[0]).toEqual([13, 25, 11, 23, 9, 21, 7, 19, 5, 17, 3, 15, 1]);
  });

  it('should move transfer to foundation correctly, must only be one card no matter the transfer stack size', () => {
    const state = initGame();
    state.transferStack = [15, 1];
    expect(game.moveTransferToFoundation({ state, foundationIdx: 0 })).toBe(false);
    expect(state.transferStack).toEqual([15, 1]);
    expect(state.foundations[0]).toEqual([]);
    state.transferStack = [1, 15];
    expect(game.moveTransferToFoundation({ state, foundationIdx: 0 })).toBe(false);
    expect(state.transferStack).toEqual([1, 15]);
    state.transferStack = [1];
    expect(game.moveTransferToFoundation({ state, foundationIdx: 0 })).toBe(true);
    expect(state.transferStack).toEqual([]);
    expect(state.foundations[0]).toEqual([1]);
    game.undo(state);
    expect(state.foundations[0]).toEqual([]);
    expect(state.transferStack).toEqual([1]);
  });

  it('should move transfer to tableau correctly, one or more cards', () => {
    const state = initGame();
    state.transferStack = [-52];
    state.tableau[0] = [];
    expect(game.moveTransferToTableau({ state, tableauIdx: 0 })).toBe(false);
    state.transferStack = [52];
    expect(game.moveTransferToTableau({ state, tableauIdx: 0 })).toBe(true);
    expect(state.tableau[0]).toEqual([52]);
    expect(state.transferStack).toEqual([]);

    // move multiple cards
    state.transferStack = [-38, 24, 10];
    expect(game.moveTransferToTableau({ state, tableauIdx: 0 })).toBe(false);
    state.transferStack = [38, 24, 10];
    expect(game.moveTransferToTableau({ state, tableauIdx: 0 })).toBe(true);
    expect(state.tableau[0]).toEqual([52, 38, 24, 10]);
    expect(state.transferStack).toEqual([]);

    // Try to move a value unto a flipped card (invalid)
    state.tableau[0] = [-10];
    state.transferStack = [22];
    expect(game.moveTransferToTableau({ state, tableauIdx: 0 })).toBe(false);
    state.tableau[0] = [10];
    expect(game.moveTransferToTableau({ state, tableauIdx: 0 })).toBe(true);

    // move partial stack to transfer, then transfer to another partial stack
    state.tableau = [[-16, 44, 30], [32], [], [], [], [], []];
    expect(game.moveTableauToTransfer({ state, tableauIdx: 0, count: 2 })).toBe(true);
    expect(state.transferStack).toEqual([44, 30]);
    expect(state.tableau[0]).toEqual([-16]);
    expect(game.moveTransferToTableau({ state, tableauIdx: 1 })).toBe(true);
    expect(state.tableau[1]).toEqual([32, 44, 30]);
    expect(state.transferStack).toEqual([]);
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

  it('should move tableau to first valid foundation', () => {
    const state = initGame();
    state.tableau = [[-4, -3, 1], [14], [27], [40], [2], [15], [28]];
    let tableauIdx = 0;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    expect(state.tableau).toEqual([[-4, -3], [14], [27], [40], [2], [15], [28]]);
    game.flipTableauCard({ state, tableauIdx });
    expect(state.tableau).toEqual([[-4, 3], [14], [27], [40], [2], [15], [28]]);
    tableauIdx = 1;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    tableauIdx = 2;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    tableauIdx = 3;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    tableauIdx = 4;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    tableauIdx = 5;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    tableauIdx = 6;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    tableauIdx = 0;
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    game.flipTableauCard({ state, tableauIdx });
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx })).toBe(true);
    expect(state.tableau).toEqual([[], [], [], [], [], [], []]);
    expect(state.foundations).toEqual([[1, 2, 3, 4], [14, 15], [27, 28], [40]]);

    // invalid moves
    state.tableau = [[-4, -3, 1], [14], [27], [40], [2], [15], [28]];
    state.foundations = [[], [], [], []];
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx: 4 })).toBe(false);
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx: 5 })).toBe(false);
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx: 0 })).toBe(true);
    expect(game.moveTableauToFirstValidFoundation({ state, tableauIdx: 4 })).toBe(true);
  });

  it('should flip tableau card, or ignore it if it is already flipped', () => {
    const state = initGame();
    state.tableau = [[-1], [], [], [], [], [], []];
    expect(game.flipTableauCard({ state, tableauIdx: 0 })).toBe(true);
    expect(state.tableau).toEqual([[1], [], [], [], [], [], []]);
    expect(game.flipTableauCard({ state, tableauIdx: 0 })).toBe(false);
    expect(state.tableau).toEqual([[1], [], [], [], [], [], []]);
  });

  it('should undo moves correctly', () => {
    const initialState = initGame();
    // deep copy the state using strucutred cloning
    const state = structuredClone(initialState);
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
  });
});

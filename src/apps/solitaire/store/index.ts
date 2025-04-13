/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // Added this line
import { immer } from 'zustand/middleware/immer';

import { assertDefined } from '@/utils';

const DEBUG = false;

type Move =
  | { type: 'popToWaste' }
  | { type: 'popThreeToWaste'; numPopped: number }
  | { type: 'moveWasteToFirstAvailableFoundation'; foundationIdx: number }
  | { type: 'moveTableauToFirstAvailableFoundation'; tableauIdx: number; foundationIdx: number }
  | { type: 'flipTableauCard'; tableauIdx: number }
  | { type: 'tableauToFoundation'; tableauIdx: number; foundationIdx: number }
  | { type: 'foundationToTableau'; foundationIdx: number; tableauIdx: number }
  | { type: 'wasteToFoundation'; foundationIdx: number }
  | { type: 'wasteToTableau'; tableauIdx: number }
  | { type: 'tableauToTableau'; fromTableauIdx: number; toTableauIdx: number; count: number };

export interface LeaderboardEntry {
  name: string;
  time: number;
  score: number;
  highlight?: boolean;
}

interface DragData {
  dragCards: number[];
  fromTableauIdx?: number | null;
  fromFoundationIdx?: number | null;
}

export interface GameState {
  stock: number[];
  waste: number[];
  foundations: number[][];
  tableau: number[][];
  moveStack: Move[];
  dragData: DragData;
  isWon: boolean;
  score: number;
  secondsElapsed: number;
  isGameInProgress: boolean;
  leaderboard: LeaderboardEntry[];
  submitted: boolean;
  newGameFlag: boolean;
  showHighScoresFlag: boolean;
  showGameRulesFlag: boolean;
  showGameSettingsFlag: boolean;
  pauseGameFlag: boolean;
  difficulty: 'easy' | 'normal' | 'hard';
  difficultyMultiplier: 0.5 | 1 | 2;
}

interface Actions {
  init: () => void;
  // Getters
  getStock: () => number[];
  getWaste: () => number[];
  getFoundations: () => number[][];
  getTableau: () => number[][];
  getMoveStack: () => Move[];
  getDragCards: () => number[];
  getFromTableauIdx: () => number | null;
  getFromFoundationIdx: () => number | null;
  getIsWon: () => boolean;
  getScore: () => number;
  getSecondsElapsed: () => number;
  setWinningConditionIfWon: () => void;
  getLeaderboard: () => LeaderboardEntry[];
  getSubmitted: () => boolean;
  getNewGameFlag: () => boolean;
  getShowHighScoresFlag: () => boolean;
  getShowGameRulesFlag: () => boolean;
  getShowGameSettingsFlag: () => boolean;
  getPauseGameFlag: () => boolean;
  getDifficulty: () => 'easy' | 'normal' | 'hard';
  getDifficultyMultiplier: () => 0.5 | 1 | 2;

  // Setters
  setDragCards: (cards: number[]) => void;
  setFromTableauIdx: (tableauIdx: number | null) => void;
  setFromFoundationIdx: (foundationIdx: number | null) => void;
  setSecondsElapsed: (seconds: number) => void;
  setScore: (score: number) => void;
  setLeaderboard: (leaderboard: LeaderboardEntry[]) => void;
  setSubmitted: (submitted: boolean) => void;
  setNewGameFlag: (newGameFlag: boolean) => void;
  setShowHighScoresFlag: (showHighScoresFlag: boolean) => void;
  setShowGameRulesFlag: (showGameRulesFlag: boolean) => void;
  setShowGameSettingsFlag: (showGameSettingsFlag: boolean) => void;
  setPauseGameFlag: (pauseGameFlag: boolean) => void;
  setDifficulty: (difficulty: 'easy' | 'normal' | 'hard') => void;

  // Actions
  popToWaste: () => void;
  popThreeToWaste: () => void;
  moveTableauToFirstAvailableFoundation: (tableauIdx: number) => boolean;
  moveTableauToFoundation: (tableauIdx: number, foundationIdx: number) => boolean;
  moveWasteToFoundation: (foundationIdx: number) => boolean;
  moveWasteToTableau: (tableauIdx: number) => boolean;
  moveTableauToTableau: (fromTableauIdx: number, toTableauIdx: number, count: number) => boolean;
  moveWasteToFirstAvailableFoundation: () => boolean;
  moveFoundationToTableau: (foundationIdx: number, tableauIdx: number) => boolean;
  flipTableauCard: (tableauIdx: number) => boolean;
  reset: () => void;
  undo: () => void;
  clearLeaderboard: () => void;
  calcFinalScore: () => number;
}

interface SolitaireState extends GameState, Actions {}

const useSolitaireStore = create<SolitaireState>()(
  persist(
    immer((set, get) => ({
      stock: [] as number[],
      waste: [] as number[],
      foundations: [[], [], [], []] as number[][],
      tableau: [[], [], [], [], [], [], []] as number[][],
      dragData: {
        dragCards: [] as number[],
        fromTableauIdx: null,
      },
      moveStack: [] as Move[],
      isWon: false,
      score: 0,
      secondsElapsed: 0,
      isGameInProgress: false,
      leaderboard: [] as LeaderboardEntry[],
      submitted: false,
      newGameFlag: false,
      showHighScoresFlag: false,
      showGameRulesFlag: false,
      showGameSettingsFlag: false,
      pauseGameFlag: false,
      difficulty: 'normal',
      difficultyMultiplier: 1,

      getStock: () => get().stock,
      getWaste: () => get().waste,
      getFoundations: () => get().foundations,
      getTableau: () => get().tableau,
      getMoveStack: () => get().moveStack,
      getFromTableauIdx: () => get().dragData.fromTableauIdx ?? null,
      getFromFoundationIdx: () => get().dragData.fromFoundationIdx ?? null,
      getDragCards: () => get().dragData.dragCards,
      getIsWon: () => get().isWon,
      getScore: () => get().score,
      getSecondsElapsed: () => get().secondsElapsed,
      setWinningConditionIfWon: () => {
        if (get().foundations.every((foundation) => foundation.length === 13)) {
          set((state) => {
            state.isWon = true;
          });
        }
      },
      getLeaderboard: () => get().leaderboard,
      getSubmitted: () => get().submitted,
      getNewGameFlag: () => get().newGameFlag,
      getShowHighScoresFlag: () => get().showHighScoresFlag,
      getShowGameRulesFlag: () => get().showGameRulesFlag,
      getShowGameSettingsFlag: () => get().showGameSettingsFlag,
      getPauseGameFlag: () => get().pauseGameFlag,
      getDifficulty: () => get().difficulty,
      getDifficultyMultiplier: () => get().difficultyMultiplier,

      // setters
      setFromTableauIdx: (tableauIdx) => {
        set((state) => {
          state.dragData.fromTableauIdx = tableauIdx;
        });
      },
      setFromFoundationIdx: (foundationIdx) => {
        set((state) => {
          state.dragData.fromFoundationIdx = foundationIdx;
        });
      },
      setDragCards: (cards) => {
        set((state) => {
          state.dragData.dragCards = cards;
        });
      },
      setSecondsElapsed: (seconds) => {
        set((state) => {
          state.secondsElapsed = seconds;
        });
      },
      setScore: (score) => {
        set((state) => {
          state.score = score;
        });
      },
      setLeaderboard: (leaderboard) => {
        set((state) => {
          // if leaderboard is bigger than 100 entries, truncate
          if (leaderboard.length > 100) {
            leaderboard = leaderboard.slice(0, 100);
          }
          state.leaderboard = leaderboard;
        });
      },
      setSubmitted: (submitted) => {
        set((state) => {
          state.submitted = submitted;
        });
      },
      setNewGameFlag: (newGameFlag) => {
        set((state) => {
          state.newGameFlag = newGameFlag;
        });
      },
      setShowHighScoresFlag: (showHighScoresFlag) => {
        set((state) => {
          state.showHighScoresFlag = showHighScoresFlag;
        });
      },
      setShowGameRulesFlag: (showGameRulesFlag) => {
        set((state) => {
          state.showGameRulesFlag = showGameRulesFlag;
        });
      },
      setShowGameSettingsFlag: (showGameSettingsFlag) => {
        set((state) => {
          state.showGameSettingsFlag = showGameSettingsFlag;
        });
      },
      setPauseGameFlag: (pauseGameFlag) => {
        set((state) => {
          state.pauseGameFlag = pauseGameFlag;
        });
      },
      setDifficulty: (difficulty) => {
        set((state) => {
          state.difficulty = difficulty;
          switch (difficulty) {
            case 'easy': {
              state.difficultyMultiplier = 0.5;
              break;
            }
            case 'normal': {
              state.difficultyMultiplier = 1;
              break;
            }
            case 'hard': {
              state.difficultyMultiplier = 2;
              break;
            }
            default: {
              state.difficultyMultiplier = 1;
            }
          }
        });
      },

      // Actions
      popToWaste: () => {
        set((state) => {
          // Transfer waste to stock if stock is empty
          if (state.stock.length === 0) {
            state.stock = state.waste.map((card) => -card).reverse();
            state.waste = [];
            state.score -= 200;
            if (DEBUG) {
              const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugShuffledStock = `[${state.stock.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugStr = `Pop to waste:\n Stock: ${debugShuffledStock}\n Waste: ${debugWaste}`;
              console.log(debugStr);
              console.log('TRANSFERRED WASTE TO STOCK');
            }
            return;
          }

          // Grab the top card from stock, flip it, and push it to waste
          const card = assertDefined(state.stock.pop());
          state.waste.push(-card);

          state.moveStack.push({
            type: 'popToWaste',
          });

          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }

          if (DEBUG) {
            const debugStockTop = getCardStr(state.waste.at(-1));
            const debugStock = `[${state.stock.map((cardVal) => getCardStr(-cardVal)).join(', ')}]`;
            const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugStr = `Pop to waste: \nStock (Face-down): ${debugStock}, \nWaste: ${debugWaste}`;
            console.log(debugStr);
            console.log(`MOVED ${debugStockTop} TO WASTE`);
          }
        });
      },

      popThreeToWaste: () => {
        set((state) => {
          // Transfer waste to stock if stock is empty
          if (state.stock.length === 0) {
            state.stock = state.waste.map((card) => -card).reverse();
            state.waste = [];
            state.score -= 200;
            if (DEBUG) {
              const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugShuffledStock = `[${state.stock.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugStr = `Pop to waste:\n Stock: ${debugShuffledStock}\n Waste: ${debugWaste}`;
              console.log(debugStr);
              console.log('TRANSFERRED WASTE TO STOCK');
            }
            return;
          }
          // Grab the top 3 cards from stock, flip them, and push them to waste
          const cards = state.stock.length >= 3 ? state.stock.splice(-3) : state.stock.splice(0);

          state.waste.push(...cards.map((card) => -card));
          state.moveStack.push({
            type: 'popThreeToWaste',
            numPopped: cards.length,
          });
          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }
          if (DEBUG) {
            const debugStockTop = getCardStr(state.waste.at(-1));
            const debugStock = `[${state.stock.map((cardVal) => getCardStr(-cardVal)).join(', ')}]`;
            const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugStr = `Pop to waste: \nStock (Face-down): ${debugStock}, \nWaste: ${debugWaste}`;
            console.log(debugStr);
            console.log(`MOVED ${debugStockTop} TO WASTE`);
          }
        });
      },

      moveTableauToFirstAvailableFoundation: (tableauIdx: number) => {
        if (tableauIdx < 0 || tableauIdx > 6 || get().tableau[tableauIdx].length === 0) {
          if (DEBUG) {
            console.log('Tableau to first foundation: Invalid index or empty tableau');
          }
          return false;
        }

        let didFindFoundation = false;

        set((state) => {
          const debugTableauCard = getCardStr(state.tableau[tableauIdx].at(-1));
          const debugTableau = `[${state.tableau[tableauIdx].map((card) => getCardStr(card)).join(', ')}]`;
          const debugFoundation = `[${state.foundations.map((foundation) => getCardStr(foundation.at(-1))).join(', ')}]`;
          const debugStr = `Tableau to First Valid Foundation: \nTableau top: ${debugTableauCard}, \nTableau: ${debugTableau}, \nFoundations: ${debugFoundation}`;

          // Find the first foundation that the tableau card can be moved to

          for (let i = 0; i < 4; i += 1) {
            const card = assertDefined(state.tableau[tableauIdx].at(-1));
            const foundation = state.foundations[i].at(-1);
            if (aStacksOnB({ a: card, b: foundation, isFoundation: true })) {
              state.foundations[i].push(assertDefined(state.tableau[tableauIdx].pop()));
              state.moveStack.push({
                type: 'moveTableauToFirstAvailableFoundation',
                tableauIdx,
                foundationIdx: i,
              });
              if (DEBUG) {
                console.log(`${debugStr} \nTRUE\n`);
              }
              didFindFoundation = true;
              state.score += 100 * get().difficultyMultiplier;
              return;
            }
          }

          // If no foundation can accept the tableau card, log and return false
          if (DEBUG) {
            console.log(`${debugStr} \nFALSE\n`);
          }
        });

        return didFindFoundation;
      },
      moveTableauToFoundation: (tableauIdx: number, foundationIdx: number) => {
        let didMove = false;
        set((state) => {
          if (
            tableauIdx < 0 ||
            tableauIdx > 6 ||
            foundationIdx < 0 ||
            foundationIdx > 3 ||
            state.tableau[tableauIdx].length === 0
          ) {
            if (DEBUG) {
              console.log('Tableau to Foundation: Invalid index or empty tableau');
            }
            didMove = false;
            return;
          }

          const tableauCard = assertDefined(state.tableau[tableauIdx].at(-1));
          const foundationCard = assertDefined(state.foundations[foundationIdx].at(-1));

          // Doesn't stack
          if (!aStacksOnB({ a: tableauCard, b: foundationCard, isFoundation: true })) {
            if (DEBUG) {
              const debugTableauCard = getCardStr(tableauCard);
              const debugFoundationCard = getCardStr(foundationCard);
              const debugStr = `Tableau to Foundation: \nTableau top: ${debugTableauCard}, \nFoundation top: ${debugFoundationCard}`;
              console.log(`${debugStr} \nFALSE\n`);
            }
            didMove = false;
            return;
          }

          // Move the tableau card to the foundation
          state.foundations[foundationIdx].push(assertDefined(state.tableau[tableauIdx].pop()));
          if (DEBUG) {
            const debugTableau = `[${state.tableau[tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugFoundation = `[${state.foundations[foundationIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugStr = `Tableau to Foundation: \nTableau: ${debugTableau}, \nFoundation: ${debugFoundation}`;
            console.log(`${debugStr} \nTRUE\n`);
          }
          didMove = true;
          state.score += 100 * get().difficultyMultiplier;

          state.moveStack.push({
            type: 'tableauToFoundation',
            tableauIdx,
            foundationIdx,
          });
          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }
        });
        return didMove;
      },

      moveWasteToFoundation: (foundationIdx: number) => {
        let didMove = false;
        set((state) => {
          if (foundationIdx < 0 || foundationIdx > 3 || state.waste.length === 0) {
            if (DEBUG) {
              console.log('Waste to Foundation: Invalid index or empty waste');
            }
            didMove = false;
            return;
          }

          const wasteCard = assertDefined(state.waste.at(-1));
          const foundationCard = assertDefined(state.foundations[foundationIdx].at(-1));

          // Doesn't stack
          if (!aStacksOnB({ a: wasteCard, b: foundationCard, isFoundation: true })) {
            if (DEBUG) {
              const debugWasteCard = getCardStr(wasteCard);
              const debugFoundationCard = getCardStr(foundationCard);
              const debugStr = `Waste to Foundation: \nWaste top: ${debugWasteCard}, \nFoundation top: ${debugFoundationCard}`;
              console.log(`${debugStr} \nFALSE\n`);
            }
            didMove = false;
            return;
          }

          // Move the waste card to the foundation
          state.foundations[foundationIdx].push(assertDefined(state.waste.pop()));
          if (DEBUG) {
            const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugFoundation = `[${state.foundations[foundationIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugStr = `Waste to Foundation: \nWaste: ${debugWaste}, \nFoundation: ${debugFoundation}`;
            console.log(`${debugStr} \nTRUE\n`);
          }

          didMove = true;
          state.score += 100 * get().difficultyMultiplier;

          state.moveStack.push({
            type: 'wasteToFoundation',
            foundationIdx,
          });

          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }
        });
        return didMove;
      },

      moveWasteToTableau: (tableauIdx: number) => {
        let didMove = false;
        set((state) => {
          if (tableauIdx < 0 || tableauIdx > 6 || state.waste.length === 0) {
            if (DEBUG) {
              console.log('Waste to Tableau: Invalid index or empty waste');
            }
            didMove = false;
            return;
          }

          const wasteCard = assertDefined(state.waste.at(-1));
          const tableauCard = assertDefined(state.tableau[tableauIdx].at(-1));

          // Doesn't stack
          if (
            !aStacksOnB({
              a: wasteCard,
              b: tableauCard,
              isEasyMode: get().difficulty === 'easy',
            })
          ) {
            if (DEBUG) {
              const debugWasteCard = getCardStr(wasteCard);
              const debugTableauCard = getCardStr(tableauCard);
              const debugStr = `Waste to Tableau: \nWaste top: ${debugWasteCard}, \nTableau top: ${debugTableauCard}`;
              console.log(`${debugStr} \nFALSE\n`);
            }
            didMove = false;
            return;
          }

          // Move the waste card to the tableau
          state.tableau[tableauIdx].push(assertDefined(state.waste.pop()));
          if (DEBUG) {
            const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugTableau = `[${state.tableau[tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugStr = `Waste to Tableau: \nWaste: ${debugWaste}, \nTableau: ${debugTableau}`;
            console.log(`${debugStr} \nTRUE\n`);
          }
          didMove = true;
          state.score += 50 * get().difficultyMultiplier;

          state.moveStack.push({
            type: 'wasteToTableau',
            tableauIdx,
          });

          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }
        });
        return didMove;
      },

      moveFoundationToTableau: (foundationIdx: number, tableauIdx: number) => {
        let didMove = false;
        set((state) => {
          if (
            foundationIdx < 0 ||
            foundationIdx > 3 ||
            tableauIdx < 0 ||
            tableauIdx > 6 ||
            state.foundations[foundationIdx].length === 0
          ) {
            if (DEBUG) {
              console.log('Foundation to Tableau: Invalid indices or empty foundation');
            }
            didMove = false;
            return;
          }

          const foundationCard = assertDefined(state.foundations[foundationIdx].at(-1));
          const tableauCard = assertDefined(state.tableau[tableauIdx].at(-1));
          if (
            !aStacksOnB({
              a: foundationCard,
              b: tableauCard,
              isEasyMode: get().difficulty === 'easy',
            })
          ) {
            if (DEBUG) {
              const debugFoundationCard = getCardStr(foundationCard);
              const debugTableauCard = getCardStr(tableauCard);
              const debugStr = `Foundation to Tableau: \nFoundation top: ${debugFoundationCard}, \nTableau top: ${debugTableauCard}`;
              console.log(`${debugStr} \nFALSE\n`);
            }
            didMove = false;
            return;
          }

          // Move the foundation card to the tableau
          state.tableau[tableauIdx].push(assertDefined(state.foundations[foundationIdx].pop()));
          if (DEBUG) {
            const debugFoundation = `[${state.foundations[foundationIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugTableau = `[${state.tableau[tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
            const debugStr = `Foundation to Tableau: \nFoundation: ${debugFoundation}, \nTableau: ${debugTableau}`;
            console.log(`${debugStr} \nTRUE\n`);
          }
          didMove = true;
          state.score -= 150;

          state.moveStack.push({
            type: 'foundationToTableau',
            foundationIdx,
            tableauIdx,
          });

          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }
        });
        return didMove;
      },

      moveTableauToTableau: (fromTableauIdx: number, toTableauIdx: number, count: number) => {
        let didMove = false;
        set((state) => {
          if (
            fromTableauIdx < 0 ||
            fromTableauIdx > 6 ||
            toTableauIdx < 0 ||
            toTableauIdx > 6 ||
            count <= 0 ||
            count > state.tableau[fromTableauIdx].length
          ) {
            if (DEBUG) {
              console.log('Tableau to Tableau: Invalid indices or count');
            }
            didMove = false;
            return;
          }

          const fromTableau = state.tableau[fromTableauIdx];
          const toTableau = state.tableau[toTableauIdx];
          const subStack = fromTableau.slice(-count);

          // If substack is not a valid stack, return false
          if (!isCardStackValid(subStack)) {
            if (DEBUG) {
              const debugFromTableau = `[${fromTableau.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugSubStack = `[${subStack.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugStr = `Tableau to Tableau: \nFrom Tableau: ${debugFromTableau}, \nSubstack: ${debugSubStack}`;
              console.log(`${debugStr} \nFALSE\n`);
            }
            didMove = false;
            return;
          }

          // Bottom card of substack doesn't stack on target tableau stack
          if (
            !aStacksOnB({
              a: assertDefined(subStack.at(0)),
              b: toTableau.at(-1),
              isEasyMode: get().difficulty === 'easy',
            })
          ) {
            if (DEBUG) {
              const debugSubStack = `[${subStack.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugToTableau = `[${toTableau.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugFromTableau = `[${fromTableau.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              const debugCount = count.toString();
              const debugStr = `Tableau to Tableau: \nSubstack: ${debugSubStack}, \nTo Tableau: ${debugToTableau}, \nFrom Tableau: ${debugFromTableau}, \nCount: ${debugCount}`;
              console.log(`${debugStr} \nFALSE\n`);
            }
            didMove = false;
            return;
          }

          // Transfer substack to target tableau, remove substack from source tableau
          state.tableau[toTableauIdx].push(...state.tableau[fromTableauIdx].splice(-count, count));
          didMove = true;

          state.moveStack.push({
            type: 'tableauToTableau',
            fromTableauIdx,
            toTableauIdx,
            count,
          });

          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }
        });
        return didMove;
      },

      moveWasteToFirstAvailableFoundation: () => {
        let didFindFoundation = false;
        set((state) => {
          const card = assertDefined(state.waste.at(-1));

          let debugStr = '';

          // Look for a valid foundation
          for (let i = 0; i < 4; i += 1) {
            const isFoundation = state.foundations[i];
            const foundationCard = isFoundation.at(-1);
            debugStr = `Waste to First Valid Foundation: \nWaste top: ${getCardStr(state.waste?.at(-1))}, \nFoundation top: ${getCardStr(state.foundations[i]?.at(-1))}`;

            if (aStacksOnB({ a: card, b: foundationCard, isFoundation: true })) {
              state.foundations[i].push(assertDefined(state.waste.pop()));

              state.moveStack.push({
                type: 'moveWasteToFirstAvailableFoundation',
                foundationIdx: i,
              });

              // Keep only the last 10 moves
              if (state.moveStack.length > 10) {
                state.moveStack.shift();
              }

              if (DEBUG) {
                console.log(`${debugStr} \nTRUE\n`);
              }
              didFindFoundation = true;
              state.score += 100 * get().difficultyMultiplier;
              return;
            }
          }
          // No valid foundation found
          if (DEBUG) {
            console.log(`${debugStr} \nFALSE\n`);
          }
        });
        return didFindFoundation;
      },
      flipTableauCard: (tableauIdx: number) => {
        let didFlipCard = false;
        set((state) => {
          // Invalid index or tableau is empty
          if (tableauIdx < 0 || tableauIdx > 6 || state.tableau[tableauIdx].length === 0) {
            if (DEBUG) {
              console.log('Flip Tableau Card: Tableau Empty. \nFALSE\n');
            }
            didFlipCard = false;
            return;
          }

          // Card is not face down
          const card = assertDefined(state.tableau[tableauIdx].at(-1));
          if (card > 0) {
            if (DEBUG) {
              const debugCard = getCardStr(card);
              const debugIdx = tableauIdx;
              const debugTableau = `[${state.tableau[tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
              console.log(
                `Flip Tableau Card: Card ${debugCard} in tableau ${debugIdx.toString()} is already face up. \nFALSE\n`,
              );
              console.log(`Tableau: ${debugTableau}`);
            }
            didFlipCard = false;
            return;
          }

          // Flip the card
          state.tableau[tableauIdx][state.tableau[tableauIdx].length - 1] = -card;

          state.moveStack.push({
            type: 'flipTableauCard',
            tableauIdx,
          });

          // Keep only the last 10 moves
          if (state.moveStack.length > 10) {
            state.moveStack.shift();
          }

          if (DEBUG) {
            console.log(`Flip Tableau Card: Flipped ${getCardStr(card)} \nTRUE\n`);
          }
          didFlipCard = true;
          state.score += 50 * get().difficultyMultiplier;
        });
        return didFlipCard;
      },

      undo: () => {
        set((state) => {
          if (state.moveStack.length === 0) {
            if (DEBUG) console.log('Undo: No moves to undo');
            return;
          }

          // Apply a 10 point penalty for undoing a move
          state.score -= 100;

          const move = assertDefined(state.moveStack.pop());
          switch (move.type) {
            case 'popToWaste': {
              // If waste is empty, transfer stock to waste
              if (state.waste.length === 0) {
                state.waste = state.stock.map((card) => -card);
                state.stock = [];
              } else {
                state.stock.push(-assertDefined(state.waste.pop()));
              }
              if (DEBUG) {
                const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
                const debugStock = `[${state.stock.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
                const debugStr = `Undo Pop to waste: \nStock: ${debugStock}, \nWaste: ${debugWaste}`;
                console.log(debugStr);
              }
              break;
            }

            case 'popThreeToWaste': {
              // If waste is empty, transfer stock to waste
              if (state.waste.length === 0) {
                state.waste = state.stock.map((card) => -card);
                state.stock = [];
              } else {
                const numPopped = move.numPopped;
                state.stock.push(...state.waste.splice(-numPopped));
              }
              if (DEBUG) {
                const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
                const debugStock = `[${state.stock.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
                const debugStr = `Undo Pop to waste: \nStock: ${debugStock}, \nWaste: ${debugWaste}`;
                console.log(debugStr);
              }
              break;
            }

            case 'moveWasteToFirstAvailableFoundation': {
              state.waste.push(assertDefined(state.foundations[move.foundationIdx].pop()));
              if (DEBUG) {
                const debugWaste = `[${state.waste.map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
                const debugFoundation = `[${state.foundations
                  .map((foundation) => getCardStr(foundation.at(-1)))
                  .join(', ')}]`;
                const debugStr = `Undo Move Waste to Foundation: \nWaste: ${debugWaste}, \nFoundations: ${debugFoundation}`;
                console.log(debugStr);
              }
              break;
            }

            case 'moveTableauToFirstAvailableFoundation': {
              state.tableau[move.tableauIdx].push(
                assertDefined(state.foundations[move.foundationIdx].pop()),
              );
              if (DEBUG) {
                const debugTableau = `[${state.tableau[move.tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
                const debugFoundation = `[${state.foundations
                  .map((foundation) => getCardStr(foundation.at(-1)))
                  .join(', ')}]`;
                const debugStr = `Undo Move Tableau to Foundation: \nTableau: ${debugTableau}, \nFoundations: ${debugFoundation}`;
                console.log(debugStr);
              }
              break;
            }

            case 'flipTableauCard': {
              state.tableau[move.tableauIdx][state.tableau[move.tableauIdx].length - 1] =
                -assertDefined(state.tableau[move.tableauIdx].at(-1));
              if (DEBUG) {
                const debugTableau = `[${state.tableau[move.tableauIdx].map((cardVal) => getCardStr(cardVal)).join(', ')}]`;
                const debugStr = `Undo Flip Tableau Card: \nTableau: ${debugTableau}`;
                console.log(debugStr);
              }
              break;
            }

            case 'tableauToFoundation': {
              state.tableau[move.tableauIdx].push(
                assertDefined(state.foundations[move.foundationIdx].pop()),
              );
              break;
            }

            case 'foundationToTableau': {
              state.foundations[move.foundationIdx].push(
                assertDefined(state.tableau[move.tableauIdx].pop()),
              );
              break;
            }

            case 'wasteToFoundation': {
              state.foundations[move.foundationIdx].push(assertDefined(state.waste.pop()));
              break;
            }

            case 'wasteToTableau': {
              state.waste.push(assertDefined(state.tableau[move.tableauIdx].pop()));
              break;
            }

            case 'tableauToTableau': {
              state.tableau[move.fromTableauIdx].push(
                ...state.tableau[move.toTableauIdx].splice(-move.count, move.count),
              );
              break;
            }

            default:
            // pass
          }
        });
      },

      clearLeaderboard: () => {
        set((state) => {
          state.leaderboard = [];
        });
      },

      calcFinalScore: () => {
        // reward player with a flat 300 points if their time is under 2 minutes
        // otherwise, taper it off by 1 point per second. Past 5 minutes, no bonus.
        // If the player completes under 5 minutes, also take away the 2 point penalty for every 10 seconds.
        const [score, time] = [get().score, get().secondsElapsed];
        const bonus = time < 120 ? 3000 : Math.max(0, 300 - time) * 10;
        return score + bonus;
      },

      reset: () => {
        set((state) => {
          state.isGameInProgress = false;
          localStorage.removeItem('solitaire-store');
        });
      },
      init: () => {
        // Don't add things that should persist between resets, i.e. leaderboard, difficulty settings, etc.
        if (!get().isGameInProgress) {
          set((state) => {
            state.stock = Array.from({ length: 52 }, (_, i) => -(i + 1)); // -1 to -52 (face down)
            state.waste = [] as number[];
            state.foundations = [[], [], [], []] as number[][];
            state.tableau = [[], [], [], [], [], [], []] as number[][];
            state.dragData = {
              dragCards: [] as number[],
              fromTableauIdx: null,
            };
            state.moveStack = [] as Move[];
            state.isWon = false;
            state.score = 0;
            state.secondsElapsed = 0;
            state.isGameInProgress = true;
            state.submitted = false;
            state.newGameFlag = false;
            state.showHighScoresFlag = false;
            state.showGameRulesFlag = false;
            state.showGameSettingsFlag = false;
            state.pauseGameFlag = false;

            for (let i = state.stock.length - 1; i > 0; i -= 1) {
              const j = Math.floor(Math.random() * (i + 1));
              [state.stock[i], state.stock[j]] = [state.stock[j], state.stock[i]];
            }

            // Fill tableau from the stock, starting with the smallest pile
            for (let pileSize = 1; pileSize <= 7; pileSize += 1) {
              const pile = Array.from({ length: pileSize }, () =>
                assertDefined(state.stock.pop()),
              ).filter((card) => card !== undefined);
              pile[pile.length - 1] = -assertDefined(pile.at(-1)); // Flip the last card face up

              // Set the pile into the state
              state.tableau[pileSize - 1] = pile;
            }

            // DEBUG
            // state.stock = [];
            // state.waste = [];
            // state.tableau = [
            //   [13, 25, 11, 23, 9, 21, 7, 19, 5, 17, 3, 15, 1],
            //   [26, 12, 24, 10, 22, 8, 20, 6, 18, 4, 16, 2, 14],
            //   [39, 51, 37, 49, 35, 47, 33, 45, 31, 43, 29, 41, 27],
            //   [52, 38, 50, 36, 48, 34, 46, 32, 44, 30, 42, 28, 40],
            //   [],
            //   [],
            //   [],
            // ];
            // state.foundations = [[], [], [], []];
          });
        }
      },
    })),
    {
      name: 'solitaire-store',
    },
  ),
);
export default useSolitaireStore;

/*
################################
||                            ||
||           Helpers          ||
||                            ||
################################
*/
function getCardStr(val?: number): string {
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

function getCard(val?: number): { suit: number; rank: number; isFaceUp: boolean } {
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
// Helper function: Determines if card 'a' can be stacked on card 'b'
// export function aStacksOnB(a: number, b?: number, isFoundation = false): boolean {
export function aStacksOnB({
  a,
  b,
  isFoundation = false,
  isEasyMode = false,
}: {
  a: number;
  b?: number;
  isFoundation?: boolean;
  isEasyMode?: boolean;
}): boolean {
  /**
   * Determines if card 'a' can be stacked on card 'b'
   * In the tableau, cards are stacked in descending order and alternating colors.
   * In the isFoundation, cards are stacked in ascending order and the same suit.
   * Args:
   *     a: The card to be moved.
   *     b: The target card to stack upon.
   *     isFoundation: True if the target is a isFoundation card, False if it's a tableau card.
   *     isEasyMode: Allows any card to be stacked on an empty tableau pile.
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
    // or any card if it's easy mode
    return rankA === 12 || isEasyMode;
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

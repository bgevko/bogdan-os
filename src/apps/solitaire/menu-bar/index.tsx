// Solitaire menu bar items
import useSolitaireStore from '@/solitaire/store';
import useProcessesStore from '@/stores/use-processes-store';
import { MenuBarItems, MenuAction } from '@/types';

const actions: MenuBarItems = new Map([
  [
    'Game',
    new Map<string, MenuAction>([
      [
        'Reset',
        {
          callback: () => {
            const setNewGameFlag = useSolitaireStore.getState().setNewGameFlag;
            setNewGameFlag(true);
          },
          bottomBorder: true,
        },
      ],
      [
        'Pause',
        {
          callback: () => {
            const setPauseGameFlag = useSolitaireStore.getState().setPauseGameFlag;
            setPauseGameFlag(true);
          },
        },
      ],
      [
        'Settings',
        {
          callback: () => {
            const setShowGameSettingsFlag = useSolitaireStore.getState().setShowGameSettingsFlag;
            setShowGameSettingsFlag(true);
          },
        },
      ],
      [
        'High Scores',
        {
          callback: () => {
            const setShowHighScoresFlag = useSolitaireStore.getState().setShowHighScoresFlag;
            setShowHighScoresFlag(true);
          },
          bottomBorder: true,
        },
      ],
      [
        'Quit',
        {
          callback: (path?: string) => {
            const close = useProcessesStore.getState().closeProcess;
            close(path!);
          },
        },
      ],
    ]),
  ],
  [
    'Edit',
    new Map<string, MenuAction>([
      [
        'Undo',
        {
          callback: () => {
            const moveStack = useSolitaireStore.getState().getMoveStack();
            if (moveStack.length === 0) return;
            const undo = useSolitaireStore.getState().undo;
            undo();
          },
          disableCallback: () => {
            const moveStack = useSolitaireStore.getState().getMoveStack();
            return moveStack.length === 0;
          },
        },
      ],
    ]),
  ],
  [
    'About',
    new Map<string, MenuAction>([
      [
        'Game Rules',
        {
          callback: () => {
            const setShowGamerulesFlag = useSolitaireStore.getState().setShowGameRulesFlag;
            setShowGamerulesFlag(true);
          },
        },
      ],
      [
        'GitHub',
        {
          callback: () => {
            const url = 'https://github.com/bgevko/bogdan-os';
            window.open(url, '_blank');
          },
        },
      ],
    ]),
  ],
]);

export default actions;

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface State {
  center: string;
  sides: string;
  length: string;
  padding: string;
  wrap: string;
  showHelpFlag: boolean;
  resetFlag: boolean;
}

interface Actions {
  // getters
  getCenter: () => string;
  getSides: () => string;
  getLength: () => string;
  getPadding: () => string;
  getWrap: () => string;
  getShowHelpFlag: () => boolean;
  getResetFlag: () => boolean;

  // setters
  setCenter: (center: string) => void;
  setSides: (sides: string) => void;
  setLength: (length: string) => void;
  setPadding: (padding: string) => void;
  setWrap: (wrap: string) => void;
  setShowHelpFlag: (flag: boolean) => void;
  setResetFlag: (flag: boolean) => void;

  // actions
  reset: () => void;
}

/*
 ********************************
 *             Types            *
 ********************************
 */
interface HeaderState extends State, Actions {}

/*
 ********************************
 *         Initial State        *
 ********************************
 */
const initialState: State = {
  center: '#',
  sides: '||',
  length: '32',
  padding: '0',
  wrap: '/*',
  showHelpFlag: false,
  resetFlag: false,
};

const useHeadersStore = create<HeaderState>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      // getters
      getCenter: () => get().center,
      getSides: () => get().sides,
      getLength: () => get().length,
      getPadding: () => get().padding,
      getWrap: () => get().wrap,
      getShowHelpFlag: () => get().showHelpFlag,
      getResetFlag: () => get().resetFlag,

      // setters
      setCenter: (center) => {
        set((state) => {
          state.center = center;
        });
      },
      setSides: (sides) => {
        set((state) => {
          state.sides = sides;
        });
      },
      setLength: (length) => {
        set((state) => {
          state.length = length;
        });
      },
      setPadding: (padding) => {
        set((state) => {
          state.padding = padding;
        });
      },
      setWrap: (wrap) => {
        set((state) => {
          state.wrap = wrap;
        });
      },
      setShowHelpFlag: (flag) => {
        set((state) => {
          state.showHelpFlag = flag;
        });
      },
      setResetFlag: (flag) => {
        set((state) => {
          state.resetFlag = flag;
        });
      },
      reset: () => {
        set((state) => {
          state.center = initialState.center;
          state.sides = initialState.sides;
          state.length = initialState.length;
          state.padding = initialState.padding;
          state.wrap = initialState.wrap;
          state.showHelpFlag = initialState.showHelpFlag;
          state.resetFlag = true;
        });
      },
    })),
    {
      name: 'headers-store',
    },
  ),
);
export default useHeadersStore;

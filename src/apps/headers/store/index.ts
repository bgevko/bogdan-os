import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // Added this line
import { immer } from 'zustand/middleware/immer';

export interface State {
  center: string;
  sides: string;
  length: string;
  padding: string;
  wrap: string;
  showHelpFlag: boolean;
}

interface Actions {
  // getters
  getCenter: () => string;
  getSides: () => string;
  getLength: () => string;
  getPadding: () => string;
  getWrap: () => string;
  getShowHelpFlag: () => boolean;

  // setters
  setCenter: (center: string) => void;
  setSides: (sides: string) => void;
  setLength: (length: string) => void;
  setPadding: (padding: string) => void;
  setWrap: (wrap: string) => void;
  setShowHelpFlag: (flag: boolean) => void;
}

interface HeaderState extends State, Actions {}

const useHeadersStore = create<HeaderState>()(
  persist(
    immer((set, get) => ({
      center: '#',
      sides: '||',
      length: '48',
      padding: '1',
      wrap: '/*',
      showHelpFlag: false,

      // getters
      getCenter: () => get().center,
      getSides: () => get().sides,
      getLength: () => get().length,
      getPadding: () => get().padding,
      getWrap: () => get().wrap,
      getShowHelpFlag: () => get().showHelpFlag,

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
    })),
    {
      name: 'headers-store',
    },
  ),
);
export default useHeadersStore;

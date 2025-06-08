// a, b, select, start, up, down, left, right

type ControllerMapping = Record<number, string>;
type KeyboardMapping = Record<string, string>;

const ps4: ControllerMapping = {
  1: 'a',
  0: 'b',
  8: 'select',
  9: 'start',
  12: 'up',
  13: 'down',
  14: 'left',
  15: 'right',
};

const userMapping: KeyboardMapping = {
  x: 'b',
  z: 'a',
  Tab: 'select',
  Enter: 'start',
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
};

export function getControllerMapping(controllerId: string): ControllerMapping {
  switch (controllerId) {
    case 'DUALSHOCK 4 Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)':
      return ps4;
    default:
      return ps4;
  }
}

export function getKeyboardMapping(preset: string): KeyboardMapping {
  switch (preset) {
    case 'user':
      return userMapping;
    default:
      return userMapping;
  }
}

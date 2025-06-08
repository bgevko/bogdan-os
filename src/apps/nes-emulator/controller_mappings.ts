// a, b, select, start, up, down, left, right

type ControllerMapping = Record<number, string>;

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

export function getControllerMapping(controllerId: string): ControllerMapping {
  switch (controllerId) {
    case 'DUALSHOCK 4 Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)':
      return ps4;
    default:
      return ps4;
  }
}

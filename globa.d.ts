import { NESStateEvent, NESToast } from '@/nes/events';

declare global {
  interface WindowEventMap {
    nessave: NESStateEvent;
    nesload: NESStateEvent;
    nestoast: NESToast;
  }
}

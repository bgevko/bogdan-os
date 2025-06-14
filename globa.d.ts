import { NESStateEvent } from '@/nes/events';

declare global {
  interface WindowEventMap {
    nessave: NESStateEvent;
    nesload: NESStateEvent;
  }
}

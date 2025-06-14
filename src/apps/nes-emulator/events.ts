export type NESStateEvent = CustomEvent<{ slot: number }>;
export type NESToast = CustomEvent<{ message: string; type: string; duration: number }>;

export function triggerSave(slot: number) {
  window.dispatchEvent(new CustomEvent<{ slot: number }>('nessave', { detail: { slot } }));
}

export function triggerLoad(slot: number) {
  window.dispatchEvent(new CustomEvent<{ slot: number }>('nesload', { detail: { slot } }));
}

export function triggerToast(message: string, type = 'info', duration = 3000) {
  window.dispatchEvent(
    new CustomEvent<{ message: string; type: string; duration: number }>('nestoast', {
      detail: { message, type, duration },
    }),
  );
}

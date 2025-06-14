export type NESStateEvent = CustomEvent<{ slot: number }>;
export type NESToast = CustomEvent<{ message: string }>;

export function triggerSave(slot: number) {
  window.dispatchEvent(new CustomEvent<{ slot: number }>('nessave', { detail: { slot } }));
}

export function triggerLoad(slot: number) {
  window.dispatchEvent(new CustomEvent<{ slot: number }>('nesload', { detail: { slot } }));
}

export function triggerToast(message: string) {
  window.dispatchEvent(new CustomEvent<{ message: string }>('nestoast', { detail: { message } }));
}

export type NESStateEvent = CustomEvent<{ slot: number }>;

export function triggerSave(slot: number) {
  window.dispatchEvent(new CustomEvent<{ slot: number }>('nessave', { detail: { slot } }));
}

export function triggerLoad(slot: number) {
  window.dispatchEvent(new CustomEvent<{ slot: number }>('nesload', { detail: { slot } }));
}

import { useEffect, useRef } from 'react';

type EventCallback<T extends Event> = (event: T) => void;
type DOMEventTypes = keyof DocumentEventMap;

interface UseEventReturnTypes {
  registerEvents: <T extends Event>(
    eventType: DOMEventTypes,
    callbacks: EventCallback<T>[],
  ) => void;
}

const useEvent = (): UseEventReturnTypes => {
  const eventCallbacks = useRef<Record<DOMEventTypes, EventCallback<Event>[]>>(
    {} as Record<DOMEventTypes, EventCallback<Event>[]>,
  );

  const registerEvents = <T extends Event>(
    eventType: DOMEventTypes,
    callbacks: EventCallback<T>[],
  ) => {
    eventCallbacks.current[eventType] = callbacks as EventCallback<Event>[];
  };

  const handleEvent = (event: Event, eventType: DOMEventTypes) => {
    for (const callback of eventCallbacks.current[eventType]) {
      callback(event);
    }
  };

  useEffect(() => {
    const eventTypes = Object.keys(eventCallbacks.current) as DOMEventTypes[];
    const listeners: Partial<Record<DOMEventTypes, (event: Event) => void>> = {};

    for (const eventType of eventTypes) {
      const listener = (event: Event) => {
        handleEvent(event, eventType);
      };
      listeners[eventType] = listener;
      if (eventType === 'resize') {
        window.addEventListener(eventType, listener);
      } else {
        document.addEventListener(eventType, listener);
      }
    }

    return () => {
      for (const eventType of eventTypes) {
        const listener = listeners[eventType];
        if (listener) {
          if (eventType === 'resize') {
            window.removeEventListener(eventType, listener);
          } else {
            document.removeEventListener(eventType, listener);
          }
        }
      }
    };
  }, []);

  return { registerEvents };
};

export default useEvent;

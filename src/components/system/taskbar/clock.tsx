import { useState, useEffect, useCallback } from 'react';

const useLocaleTimeDate = (date: Date) => {
  const localeDate = date.toLocaleDateString();
  const localeTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const localeDateTime = date.toLocaleString();
  return { date: localeDate, time: localeTime, dateTime: localeDateTime };
};

const Clock = (): JSX.Element => {
  const [now, setNow] = useState(new Date());
  const { time } = useLocaleTimeDate(now);

  const updateClock = useCallback(() => {
    setNow(new Date());
  }, []);

  useEffect(() => {
    const update = () => {
      const currentTime = new Date();
      setNow(currentTime);

      const msUntilNextMinute =
        60_000 - (currentTime.getSeconds() * 1000 + currentTime.getMilliseconds());
      setTimeout(update, msUntilNextMinute);
    };

    const msUntilNextMinute = 60_000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    const initialTimeout = setTimeout(update, msUntilNextMinute);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, [updateClock, now]);

  return (
    <>
      <span className="debossed-line-border-l h-full w-1" />
      <time className="debossed-border flex h-full w-[130px] items-center justify-center font-mono text-onSurface">
        {time}
      </time>
    </>
  );
};

export default Clock;

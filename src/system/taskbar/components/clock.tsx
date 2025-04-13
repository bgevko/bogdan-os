import React, { useState, useEffect, useCallback } from 'react';

const useLocaleTimeDate = (date: Date) => {
  const localeDate = date.toLocaleDateString();
  const localeTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const localeDateTime = date.toLocaleString();
  return { date: localeDate, time: localeTime, dateTime: localeDateTime };
};

const Clock = (): React.JSX.Element => {
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
      <time
        onContextMenu={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        className="text-gray800 flex w-[80px] select-none items-center justify-center rounded-[6px] bg-white text-sm font-bold"
      >
        {time}
      </time>
    </>
  );
};

export default Clock;

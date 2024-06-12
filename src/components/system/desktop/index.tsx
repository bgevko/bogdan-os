import { type ReactElement } from 'react';

import { iconDirectory } from '@/globals/process-directory';
import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';
import { parseFileNames } from '@/utils/format';

const DesktopIcon = ({ id }: { id: string }): ReactElement => {
  const processDirectory = useProcessesStore((state) => state.processDirectory);
  const iconSrc = `${iconDirectory}${processDirectory[id].icon}.png`;
  const { title } = processDirectory[id];
  return (
    <button
      type="button"
      className="w=[70px] h=[68.4px] absolute flex cursor-default flex-col items-center"
      style={{ transform: 'translate(0, 0)' }}
    >
      <img src={iconSrc} alt={title} width="48px" height="48px" />
      <span className="text-sm">{title}</span>
    </button>
  );
};

const DesktopIcons = (): ReactElement => {
  const desktopFiles = parseFileNames(useFsStore().getChildren('/Desktop', { filesOnly: true }));
  return (
    <section
      className="relative w-full p-4"
      style={{ height: `calc(100vh - ${TASKBAR_HEIGHT.toString()}px)` }}
    >
      {desktopFiles.map((file) => (
        <DesktopIcon key={file} id={file} />
      ))}
    </section>
  );
};

const Desktop = (): React.ReactElement => {
  return <DesktopIcons />;
};

export default Desktop;

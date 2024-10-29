import ContextMenu from '@/components/system/context-menu';
import DropGuide from '@/components/system/desktop/drop-guide';
import Grid from '@/components/system/desktop/grid';
import SelectRect from '@/components/system/desktop/select-rect';
import FileSystemIcon from '@/components/system/fs/fs-icon';
import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import cn from '@/utils/format';

const Desktop = (): React.ReactElement => {
  const desktopItems = useFsStore((state) => state.getChildren('/Desktop'));
  const blurred = useProcessesStore((state) => state.getIsBlurred());

  return (
    <>
      <ContextMenu />
      {blurred && <SelectRect />}
      <div className={cn('flex size-full overflow-hidden')}>
        {blurred && <DropGuide />}
        <Grid>
          {desktopItems.map((fileNode) => {
            return <FileSystemIcon key={fileNode.path} path={fileNode.path} />;
          })}
        </Grid>
      </div>
    </>
  );
};

export default Desktop;

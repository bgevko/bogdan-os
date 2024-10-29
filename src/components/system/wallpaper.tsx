import { type ReactElement, ReactNode } from 'react';

import Renderer from '@/components/system/background-renderer/renderer';

const Wallpaper = ({ children }: { children: ReactNode }): ReactElement => (
  <main className="fixed inset-0 h-dvh w-dvw">
    <Renderer>{children}</Renderer>
  </main>
);

export default Wallpaper;

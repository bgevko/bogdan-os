import { type ReactElement, ReactNode } from 'react';

const Desktop = ({ children }: { children: ReactNode }): ReactElement => (
  <main className="fixed inset-0 h-dvh w-dvw bg-background">{children}</main>
);

export default Desktop;

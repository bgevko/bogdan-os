import { type ReactElement, ReactNode } from 'react';

const Window = ({ children }: { children: ReactNode }): ReactElement => (
  <section className="bg-surface text-onSurface">{children}</section>
);

export default Window;

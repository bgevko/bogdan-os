import { type ReactElement, ReactNode } from 'react';

const Window = ({ children }: { children: ReactNode }): ReactElement => (
  <section className="mx-auto my-96 flex size-40 items-center justify-center bg-surface text-onSurface">
    {children}
  </section>
);

export default Window;

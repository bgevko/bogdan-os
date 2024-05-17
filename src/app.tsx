import { useStore } from '@/stores/use-store';

export function App() {
  const { count, inc } = useStore();
  return (
    <>
      <h1 className="text-2xl">Hello, world!</h1>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </>
  );
}

const HelloWorld = ({ rootPath }: { rootPath: string }): React.ReactElement => (
  <div className="debossed-border flex size-full items-center justify-center">
    <h1>Hello from default, {rootPath}</h1>
  </div>
);

export default HelloWorld;

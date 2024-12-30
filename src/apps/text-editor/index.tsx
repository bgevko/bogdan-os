const TextEditor = ({ rootPath }: { rootPath: string }): React.ReactElement => (
  <div className="flex size-full items-center justify-center">
    <h1>Greetings from file {rootPath}!</h1>
  </div>
);

export default TextEditor;

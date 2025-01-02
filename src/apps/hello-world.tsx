const HelloWorld = (): React.ReactElement => (
  <div
    className="flex size-full select-none items-center justify-center"
    onContextMenu={(e) => {
      e.preventDefault();
    }}
  >
    <h1>Greetings from file!</h1>
  </div>
);

export default HelloWorld;

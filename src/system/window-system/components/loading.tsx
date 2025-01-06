const Loading = (): React.ReactElement => {
  return (
    <div className="flex size-full items-center justify-center duration-100">
      <div className="size-16 animate-spin rounded-full border-y-4 border-gray-500" />
    </div>
  );
};

export default Loading;

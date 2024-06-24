export interface FileNodeData {
  path: string;
  children?: FileNodeData[];
}

const defaultDir: FileNodeData = {
  path: '/',
  children: [
    {
      path: '/Desktop',
      children: [
        {
          path: '/Desktop/HelloWorld.test',
        },
        {
          path: '/Desktop/Test1',
        },
        {
          path: '/Desktop/Terminal.app',
        },
      ],
    },
  ],
};

export default defaultDir;

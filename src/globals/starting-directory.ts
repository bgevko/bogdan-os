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
          path: '/Desktop/HelloWorld.default',
        },
        {
          path: '/Desktop/Terminal.app',
        },
        {
          path: '/Desktop/MyFolder',
          children: [
            {
              path: '/Desktop/MyFolder/MyFile.txt',
            },
          ],
        },
      ],
    },
  ],
};

export default defaultDir;

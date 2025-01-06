import '@/apps/readme/styles.css';

const Readme = (): React.ReactElement => (
  <div
    className="flex size-full flex-col gap-2 rounded-b-lg p-4"
    style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE1AF 100%)',
    }}
    onContextMenu={(e) => {
      e.preventDefault();
    }}
  >
    <h1
      className="rainbow background w-full py-2 text-center text-4xl font-bold"
      style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}
    >
      <span className="wave">W</span>
      <span className="wave">e</span>
      <span className="wave">l</span>
      <span className="wave">c</span>
      <span className="wave">o</span>
      <span className="wave">m</span>
      <span className="wave">e</span>
    </h1>
    <p>
      This is my <em>desktop-in-the-web</em> project, it&apos;s{' '}
      <a
        className="link-hover text-blue-700"
        href="https://github.com/bgevko/bogdan-os"
        target="_blank"
        rel="noreferrer"
      >
        open-source
      </a>
      !
    </p>

    <p className="font-bold"> You can:</p>
    <ul>
      <li>- Create files and drag things around.</li>
      <li>- Use the available apps</li>
      <li>
        - <em>In Progress:</em> Text file support
      </li>
      <li>
        - <em>In Progress:</em> Tetris
      </li>
    </ul>

    <p>Thanks for visiting!</p>
    <p className="mt-auto">
      You can connect with me at{' '}
      <a
        className="text-wave link-hover text-blue-700"
        href="https://bgevko.com"
        target="_blank"
        rel="noreferrer"
      >
        bgevko.com
      </a>
      .
    </p>
  </div>
);

export default Readme;

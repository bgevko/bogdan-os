const Solitaire = (): React.ReactElement => (
  <div
    style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE1AF 100%)',
    }}
    className="flex size-full flex-col gap-2 rounded-b-lg p-4"
  >
    <h1
      className="rainbow backgroundw-full py-2 text-center text-4xl font-bold"
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
      This is my <em>browser-in-the-web</em> project, a work in progress.
    </p>

    <p className="font-bold"> You can:</p>
    <ul>
      <li>- Use Excalidraw</li>
      <li>- Create files & folders (still limited)</li>
      <li>- Drag things around</li>
      <li className="italic">- SOON: Play solitaire</li>
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

export default Solitaire;

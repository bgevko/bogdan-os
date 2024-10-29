/* eslint-disable react/no-unescaped-entities */
const Solitaire = (): React.ReactElement => (
  <div
    style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE1AF 100%)',
    }}
    className="flex size-full flex-col gap-2 rounded-b-lg p-4"
  >
    <h1
      className="wave-text w-full text-center text-4xl font-bold"
      style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}
    >
      <span className="wave-text">Hello!</span>
    </h1>

    <p>This is my browser in the web project, a work in progress.</p>

    <p>
      I'm <span className="font-bold">Bogdan</span>! Connect with me at{' '}
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

    <p>
      Try these:
      <ul>
        <li>- Use Excalidraw</li>
        <li>- Create files & folders (still limited)</li>
        <li>- Drag things around</li>
        <li className="font-bold">- SOON: Play solitaire</li>
      </ul>
    </p>

    <p>Thanks for visiting!</p>
  </div>
);

export default Solitaire;

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module '*.svg?react' {
  const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

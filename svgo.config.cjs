// For reference only
// These are settings for svgo to process SVG files in the project
// These settings remove all fill set to white so we can use our own fill colors
// The actual implementation is in vite.config.ts
module.exports = {
  plugins: [
    { name: 'convertStyleToAttrs', active: true }, // Move inline styles to attributes
    {
      name: 'removeAttributesBySelector',
      params: {
        selector: '[fill="#fff"]',
        attributes: ['fill'],
      },
    },
  ],
};

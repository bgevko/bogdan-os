import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import glsl from 'vite-plugin-glsl';
import tailwindcss from '@tailwindcss/vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const isProductionBuild = process.env.BUILD_ENV === 'production';
  const outDir = isProductionBuild ? '/var/www/bogdan-os' : 'dist';
  return {
    plugins: [
      glsl(),
      react(),
      wasm(),
      topLevelAwait(),
      tailwindcss(),
      svgr({
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            floatPrecision: 2,
            plugins: [
              { name: 'convertStyleToAttrs' },
              {
                name: 'removeAttributesBySelector',
                params: {
                  selector: '[fill="#fff"]',
                  attributes: ['fill'],
                },
              },
            ],
          },
        },
      }),
    ],
    worker: {
      plugins: () => [wasm(), topLevelAwait()],
    },
    preview: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
      threads: false,
    },
    build: {
      outDir: outDir,
    },
    resolve: {
      alias: {
        '@/nes': path.resolve(__dirname, './src/apps/nes-emulator'),
        '@/solitaire': path.resolve(__dirname, './src/apps/solitaire'),
        '@/system': path.resolve(__dirname, './src/system'),
        '@/sounds': path.resolve(__dirname, './src/system/sounds'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.IS_PREACT': JSON.stringify('true'),
    },
  };
});

// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

const ignoreRules = {};

const baseConfig = {
  ...js.configs.recommended,
  name: 'baseConfig',
  files: ['src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
};

const reactConfig = {
  ...reactPlugin.configs.flat.recommended,
  name: 'reactConfig',
  settings: {
    react: {
      version: 'detect',
    },
  },
};

const typescriptConfig = tseslint.config(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    name: 'typescriptConfig',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

export default defineConfig([baseConfig, reactConfig, ...typescriptConfig]);

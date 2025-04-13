// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import * as reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import reactCompiler from 'eslint-plugin-react-compiler';

const ignores = ['react/react-in-jsx-scope', '@typescript-eslint/no-empty-function'];
const ignoreRules = Object.fromEntries(ignores.map((rule) => [rule, 'off']));

const ruleOverrides = {
  rules: ignoreRules,
};

const baseConfig = {
  ...js.configs.recommended,
  name: 'baseConfig',
  files: ['src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'eslint.config.mjs'],
};

const reactConfig = {
  ...reactPlugin.configs.flat.recommended,
  ...reactHooks.configs['recommended-latest'],
  ...reactCompiler.configs.recommended,
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

export default defineConfig([
  globalIgnores([
    'node_modules',
    'dist',
    'build',
    'coverage',
    'public',
    'vite.config.ts',
    '**/.*',
    '**/.*/**',
  ]),
  baseConfig,
  reactConfig,
  ...typescriptConfig,
  ruleOverrides,
]);

import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules, fixupPluginRules, fixupConfigRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import _import from 'eslint-plugin-import';
import unicorn from 'eslint-plugin-unicorn';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import tailwindcss from 'eslint-plugin-tailwindcss';
import reactCompiler from 'eslint-plugin-react-compiler';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    '**/dist',
    '**/.eslintrc.cjs',
    '**/node_modules',
    '**/vite.config.ts',
    '**/tailwind.config.ts',
  ]),
  {
    extends: fixupConfigRules(
      compat.extends(
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
        'plugin:import/recommended',
        'plugin:unicorn/recommended',
        'plugin:tailwindcss/recommended',
        'prettier',
      ),
    ),

    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'react-refresh': reactRefresh,
      import: fixupPluginRules(_import),
      unicorn: fixupPluginRules(unicorn),
      'no-relative-import-paths': noRelativeImportPaths,
      tailwindcss: fixupPluginRules(tailwindcss),
      'react-compiler': reactCompiler,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        node: true,
        typescript: true,
      },
    },

    rules: {
      'no-plusplus': 'off',
      'no-use-before-define': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'prefer-destructuring': 'off',
      'no-param-reassign': 'off',
      'lines-between-class-members': 'off',
      'arrow-body-style': 'off',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'jsx-ally/no-static-element-interactions': 'off',
      'react/no-array-index-key': 'off',
      'react-compiler/react-compiler': 'error',
      'react/jsx-no-useless-fragment': 'off',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx'],
        },
      ],

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
        },
      ],

      'react/jsx-key': 'error',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-cycle': 'off',
      'import/prefer-default-export': 'off',
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],

      'import/order': [
        'error',
        {
          'newlines-between': 'always',

          pathGroups: [
            {
              pattern: '$/**',
              group: 'internal',
            },
          ],

          pathGroupsExcludedImportTypes: ['builtin'],

          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
            'unknown',
          ],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'no-restricted-syntax': ['off'],
      'import/no-extraneous-dependencies': 'error',

      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],

      'no-relative-import-paths/no-relative-import-paths': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: fixupConfigRules(compat.extends('plugin:import/typescript')),
  },
  {
    files: ['src/pages/**/*.tsx', '**/additional.d.ts', '**/instrospection.ts'],

    rules: {
      'import/no-anonymous-default-export': 'off',
      'import/no-default-export': 'off',
    },
  },
]);

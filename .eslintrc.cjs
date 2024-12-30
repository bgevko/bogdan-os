module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
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
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'import',
    'unicorn',
    'no-relative-import-paths',
    'tailwindcss',
    'eslint-plugin-react-compiler',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'vite.config.ts', 'tailwind.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
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
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-key': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
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
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index'], 'unknown'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-restricted-syntax': ['off'],
    'import/no-extraneous-dependencies': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-relative-import-paths/no-relative-import-paths': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:import/typescript'],
    },
    {
      files: [
        // Next pages files
        'src/pages/**/*.tsx',
        // Typescript declaration file
        'additional.d.ts',
        // Graphql Codegen generated file
        '**/instrospection.ts',
      ],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
};

module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['sort-keys-fix', 'sort-destructure-keys'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        custom: {
          match: true,
          regex: '^I[A-Z][a-zA-Z0-9]+$',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
      {
        custom: {
          match: true,
          regex: '^T[A-Z][a-zA-Z0-9]+$',
        },
        format: ['PascalCase'],
        selector: 'typeAlias',
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    'import/extensions': [
      'error',
      {
        css: 'always',
        json: 'always',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown', ['sibling', 'parent'], 'index', 'object'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'builtin',
            pattern: 'react',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@com/**',
            position: 'after',
          },
          {
            group: 'unknown',
            pattern: '@com/core/**/contexts/**',
            position: 'after',
          },
          {
            group: 'sibling',
            pattern: '@*Config',
            position: 'after',
          },
          {
            group: 'object',
            pattern: '.**',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys-fix/sort-keys-fix': 'warn',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  },
};

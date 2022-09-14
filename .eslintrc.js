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
  plugins: ['sort-keys-fix', 'sort-destructure-keys'],
  // use plugins if need to manually add all rules if not add to extends and dissable what not needed
  rules: {
    '@next/next/no-img-element': 'off',
    // sort destructure
    // So that .ts and .tsx should not be in imports
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
        groups: [
          'builtin', // Built-in types are first
          'external',
          'internal',
          'unknown',
          ['sibling', 'parent'], // Then sibling and parent types. They can be mingled together
          'index', // Then the index file
          'object',
        ],
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
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ], // next will add React
    'react/react-in-jsx-scope': 'off', // Because of Hoisting
    'react/require-default-props': 0, // this is a tricky need to check this
    'sort-destructure-keys/sort-destructure-keys': 2, // Sort destructure
    'sort-keys-fix/sort-keys-fix': 'warn', // Sort object
  },
};

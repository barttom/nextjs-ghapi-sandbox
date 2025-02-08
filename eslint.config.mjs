import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);

// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
  ),
  ...compat.plugins('jsx-a11y'),
  ...compat.config({
    rules: {
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'no-use-before-define': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  }),
];

export default eslintConfig;

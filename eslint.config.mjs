import { dirname } from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
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
    'airbnb',
  ),
  ...compat.plugins('jsx-a11y'),
  ...compat.config({
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    },
  }),
];

export default eslintConfig;

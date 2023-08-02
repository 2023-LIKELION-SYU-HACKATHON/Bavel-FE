module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    'react/function-component-definition': 'off',
  },
  ignorePatterns: ['vite.config.ts', 'postcss.config.js', 'tailwind.config.js'],
};

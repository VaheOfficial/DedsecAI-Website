module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals' // Add the Next.js ESLint plugin
  ],
  parser: '@typescript-eslint/parser', // Ensure TypeScript parsing
  parserOptions: {
    ecmaVersion: 2020, // Use modern ECMAScript features
    sourceType: 'module', // Enable module parsing
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};

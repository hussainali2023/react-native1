module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',            // Use ESLint's recommended rules
    'plugin:react/recommended',      // Use React's recommended linting rules
    'plugin:react-native/all',       // Use React Native specific linting rules
    'plugin:prettier/recommended',   // Integrates Prettier with ESLint and disables conflicting ESLint rules
  ],
  parser: '@babel/eslint-parser',    // Use Babel parser to support JSX and modern JavaScript
  parserOptions: {
    ecmaVersion: 2020,               // Support ECMAScript 2020 syntax
    sourceType: 'module',            // Allow module syntax (import/export)
    ecmaFeatures: {
      jsx: true,                     // Enable JSX parsing
    },
  },
  env: {
    es6: true,                       // Enable ES6 features
    node: true,                      // Enable Node.js global variables
    browser: true,                   // Enable browser global variables
    'react-native/react-native': true, // Enable React Native-specific global variables
  },
  plugins: [
    'react',                         // React plugin for React linting rules
    'react-native',                  // React Native plugin for React Native specific linting rules
    'prettier',                      // Prettier plugin to ensure code formatting consistency
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+ no longer requires React in scope for JSX
    'react/prop-types': 'off',         // Disable prop-types rule (use TypeScript or other types if preferred)
    'no-console': 'warn',              // Warn about console logs
    'no-debugger': 'warn',             // Warn about debugger statements
    'prettier/prettier': 'warn',       // Activate Prettier linting
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    "react-native/react-native": true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
  plugins: ["react", "react-native"],
};

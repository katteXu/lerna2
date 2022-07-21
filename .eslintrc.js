module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": ["warn"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },
  env: { node: true },
};

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
      '@typescript-eslint/no-use-before-define': 1
  },
  parserOptions: {
    "project": ["tsconfig.json"]
},
};

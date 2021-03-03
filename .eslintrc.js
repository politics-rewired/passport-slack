module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};

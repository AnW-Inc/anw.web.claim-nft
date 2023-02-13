module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
    },
  ],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
}

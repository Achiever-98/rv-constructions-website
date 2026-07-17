export default [
  {
    files: ["app/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"]
    }
  }
];
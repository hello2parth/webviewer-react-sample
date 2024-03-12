module.exports = {
  tabWidth: 4,
  trailingComma: "none",
  arrowParens: "avoid",
  printWidth: 120,
  overrides: [
      {
          files: ["package*.json", "tsconfig.json"],
          options: {
              tabWidth: 2
          }
      },
  ]
};

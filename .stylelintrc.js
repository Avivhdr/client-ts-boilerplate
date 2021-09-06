module.exports = {
  extends: [
    "stylelint-config-recommended", // A set of style rules
    // "stylelint-config-prettier", // Turns off all rules that are unnecessary or might conflict with Prettier (formatting rules)
    "stylelint-prettier/recommended" // This does:
      // 1. Enables the stylelint-plugin-prettier plugin
      // 2. Enables the prettier/prettier rule
      // 3. Extends the stylelint-config-prettier configuration
  ],
  plugins: [
    "stylelint-csstree-validator" // A plugin for validating CSS syntax
  ],
    rules: {
    "csstree/validator": { // This rule activates the stylelint-csstree-validator plugin
      "properties": {
        // "width": "| fit-content" // We can specify the values that are allowed if csstree doesn't recognize the property
      }
    },
    "property-no-unknown": null, // The csstree plugin handles this case better
    "unit-no-unknown": null, // The csstree plugin handles this case better
    "declaration-empty-line-before": null,
    "selector-type-no-unknown": null
  }
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["no-null", "simple-import-sort"],
  rules: {
    // eslint
    "dot-notation": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-return-await": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "unicode-bom": ["error", "never"],

    // Enabled in eslint:recommended, but not applicable here
    "no-extra-boolean-cast": "off",
    "no-case-declarations": "off",
    "no-cond-assign": "off",
    "no-control-regex": "off",
    "no-inner-declarations": "off",

    // Rules enabled in typescript-eslint configs that are not applicable here
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",

    // eslint-plugin-no-null
    "no-null/no-null": "error",

    // eslint-plugin-simple-import-sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};

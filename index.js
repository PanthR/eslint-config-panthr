module.exports = {
  "env": {
    "amd": true,
    "node": true
  },
  "rules": {
      "comma-dangle": [2, "never"],
      "no-cond-assign": [2, "always"],
      "no-constant-condition": 2,
      "no-dupe-args": 2,
      "no-dupe-keys": 2,
      "no-duplicate-case": 2,
      "no-empty": 2,
      "no-empty-character-class": 2,
      "no-extra-boolean-cast": 2,
      "no-extra-parens": 2,
      "no-extra-semi": 2,
      "no-func-assign": 2,
      "no-inner-declarations": [2, "both"],
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": 2,
      "no-negated-in-lhs": 2,
      "no-obj-calls": 2,
      "no-regex-spaces": 2,
      "no-sparse-arrays": 2,
      "no-unexpected-multiline": 2,
      "no-unreachable": 2,
      "use-isnan": 2,
      "valid-typeof": 2,
      "block-scoped-var": 2,
      "complexity": 0,
      "consistent-return": 2,
      "curly": 2,
      "dot-location": [2, "property"],
      "dot-notation": 2,
      "eqeqeq": [2, "allow-null"],
      "guard-for-in": 2,
      "no-caller": 2,
      "no-case-declarations": 2,
      "no-else-return": 1,
      "no-empty-pattern": 2,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 2,
      "no-fallthrough": 2,
      "no-floating-decimal": 2,
      "no-implicit-coercion": 2,
      "no-implied-eval": 2,
      "no-labels": 2,
      "no-lone-blocks": 2,
      "no-loop-func": 2,
      "no-multi-spaces": 2,
      "no-multi-str": 2,
      "no-native-reassign": 2,
      "no-new-func": 2,
      "no-new-wrappers": 2,
      "no-new": 2,
      "no-octal-escape": 2,
      "no-octal": 2,
      "no-param-reassign": 0,
      "no-process-env": 2,
      "no-proto": 2,
      "no-redeclare": 2,
      "no-return-assign": 2,
      "no-script-url": 2,
      "no-self-compare": 2,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unused-expressions": 2,
      "no-useless-call": 2,
      "no-useless-concat": 2,
      "no-void": 2,
      "no-warning-comments": [1, { "location": "anywhere" }],
      "no-with": 2,
      "radix": [2, "always"],
      "vars-on-top": 2,
      "wrap-iife": [2, "outside"],
      "yoda": 2,
      "init-declarations": [2, "never"],
      "no-catch-shadow": 2,
      "no-delete-var": 2,
      "no-label-var": 2,
      "no-shadow-restricted-names": 2,
      "no-shadow": 2,
      "no-undef-init": 2,
      "no-undef": 2,
      "no-undefined": 0,
      "no-unused-vars": [2, {"vars": "all", "args": "none"}],
      "no-use-before-define": [2, "nofunc"],
      "array-bracket-spacing": [2, "never"],
      "block-spacing": [2, "always"],
      "brace-style": [2, "1tbs", { "allowSingleLine": true }],
      "camelcase": 2,
      "comma-spacing": 2,
      "comma-style": [2, "last"],
      "computed-property-spacing": [2, "never"],
      "consistent-this": [1, "that"],
      "eol-last": 2,
      "func-style": [2, "declaration"],
      "id-length": [1, { "min": 1, "max": 24 }],
     // "indent": [2, 3],
      "key-spacing": 2,
      "linebreak-style": 0,
      "max-depth": [2, 3],
      "max-len": [1, 105, 3, { "ignorePattern": "^\\s*\\*" }],
      "max-nested-callbacks": [2, 5],
      "max-params": [2, 5],
      "max-statements": [1, 40],
      "new-cap": 2,
      "new-parens": 2,
      "newline-after-var": [2, "always"],
      "no-array-constructor": 2,
      "no-bitwise": 1,
      "no-continue": 2,
      "no-lonely-if": 2,
      "no-mixed-spaces-and-tabs": [2, true],
      "no-multiple-empty-lines": [2, { "max": 1 }],
      "no-new-object": 2,
      "no-plusplus": 2,
      "no-spaced-func": 2,
      "no-trailing-spaces": 2,
      "no-underscore-dangle": 0,
      "no-unneeded-ternary": 2,
      "object-curly-spacing":[2, "always"],
      "one-var": [2, "always"],
      "operator-assignment": [2, "always"],
      "operator-linebreak": [2, "after", { "overrides": { ":": "before" }}],
      "quote-props": [2, "as-needed"],
      "quotes": [2, "single"],
      "semi-spacing": 2,
      "semi": [2, "always"],
      "keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],
      "space-before-blocks": [2, "always"],
      "space-before-function-paren": [2, "never"],
      "space-in-parens": [2, "never"],
      "space-infix-ops": 2,
      "space-unary-ops": 2,
      "spaced-comment": [2, "always"]
   }
};

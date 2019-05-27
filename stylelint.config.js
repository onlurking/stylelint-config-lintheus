/**
 * Copyright 2019-present Diogo Felix
 * @license BSD-2-Clause
 */
"use strict";

// Always use the BEM naming pattern
const namingPattern = /^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-z]+(?:-[a-z]+)*(?:__[a-z]+(?:-[a-z]+)*)?(?:--[a-z]+(?:-[a-z]+)*)?(?:\\[.+\\])?$/;

module.exports = {
  extends: "stylelint-config-recommended",
  // export namingPattern so it can be used in your own rules
  namingPattern,
  plugins: ["stylelint-order", ],
  rules: {
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "block-opening-brace-space-before": "always-multi-line",
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": ["never", {
      "ignore": ["after-declaration"]
    }],
    "declaration-no-important": true,
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "numeric",
    "function-calc-no-unspaced-operator": true,
    "function-max-empty-lines": 1,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "max-empty-lines": 2,
    "max-nesting-depth": [3, {
      ignore: ['blockless-at-rules'],
    }],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-blacklist": "max-width",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "no-duplicate-selectors": true,
    "no-descending-specificity": null,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-unknown-animations": true,
    "number-max-precision": 8,
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": ["always-multi-line", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-max-compound-selectors": 3,
    "selector-class-pattern": [namingPattern, {
      "message": "Selector should be lowercase and follow the BEM pattern (block__element--modifier)"
    }],
    "selector-combinator-space-after": "always",
    "selector-max-id": 0,
    "selector-max-universal": [0, {
      "severity": "warning"
    }],
    "selector-max-pseudo-class": 1,
    "selector-max-specificity": "0,2,1",
    "selector-max-type": [0, {
      "ignore": "child"
    }],
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global"]
    }],
    "selector-no-qualifying-type": true,
    "string-quotes": "double",
    "time-min-milliseconds": [150, {
      "severity": "warning"
    }],
    "unit-blacklist": ["in", "cm", "mm", "q", "pt", "pc", "ex", "ch"],
    "unit-case": "lower",
    "unit-no-unknown": true,
    "declaration-property-value-blacklist": {
      "position": ["fixed", "sticky"],
      "/^border/": ["none"],
      "/.+/": ["initial"]
    },
    "value-keyword-case": "lower",
    "value-list-comma-newline-before": "never-multi-line",
    "value-no-vendor-prefix": true,
    "order/order": [
      ["custom-properties", "dollar-variables", {
        "type": "at-rule",
        "name": "extend"
      }, {
        "type": "at-rule",
        "name": "include",
        "hasBlock": false
      }, "declarations", {
        "type": "at-rule",
        "name": "include",
        "hasBlock": true
      }, "rules"]
    ],
    "order/properties-alphabetical-order": true
  },
};

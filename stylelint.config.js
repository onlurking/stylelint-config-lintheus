/**
 * Copyright 2019-present Diogo Felix
 * @license BSD-2-Clause
 */


// Always use the BEM naming pattern
const namingPattern = /^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-z]+(?:-[a-z]+)*(?:__[a-z]+(?:-[a-z]+)*)?(?:--[a-z]+(?:-[a-z]+)*)?(?:\\[.+\\])?$/;

module.exports = {
  defaultSeverity: 'warning',
  extends: 'stylelint-config-recommended',
  // export namingPattern so it can be used in your own rules
  namingPattern,
  plugins: ['stylelint-order'],
  rules: {
    // At-rule
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'at-rule-property-requirelist': {
      'font-face': ['font-display', 'font-family', 'font-style'],
    },

    // Block
    'block-opening-brace-space-before': 'always-multi-line',
    'block-no-empty': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['grid-template'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-trailing-semicolon': 'always',

    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'color-named': 'never',

    // Comment
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-blacklist': [
      [/^TODO:/, /^FIXME:/, 'fuck', 'shit', 'damn'],
      {
        severity: 'warning',
      },
    ],

    // Custom property
    'custom-property-empty-line-before': 'never',

    // Declaration
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': ['never', {
      ignore: ['after-declaration'],
    }],
    'declaration-no-important': true,
    'declaration-property-value-blacklist': {
      position: ['fixed', 'sticky'],
      '/^border(?!-(width|spacing))/': [
        /thin/,
        /medium/,
        /thick/,
        'none', // Prefer `0`
      ],
      '/.+/': ['initial'],
      '/^transition/': [/all/],
    },

    // Font family
    'font-family-name-quotes': 'always-unless-keyword',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'numeric',

    // Function
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-max-empty-lines': 1,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // General
    indentation: 2,
    linebreaks: 'unix',
    'max-empty-lines': 2,
    'max-nesting-depth': [3, {
      ignore: ['blockless-at-rules'],
      message: "Browsers evaluate selectors from right to left, don't nest more than 3 levels",
    }],
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],

    // Length
    'length-zero-no-unit': true,

    // Media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-blacklist': ['max-width', { message: 'Always use min-width' }],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // Number
    'number-max-precision': 8,
    'number-no-trailing-zeros': true,

    // Property
    'property-blacklist': ['float'],
    'property-case': 'lower',
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'app-region', // Electron
          'appearance',
          'mask',
        ],
      },
    ],
    'property-no-unknown': true,

    // Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [namingPattern, {
      message: 'Selector should be lowercase and follow the BEM pattern (block__element--modifier)',
    }],
    'selector-max-attribute': 8,
    'selector-max-class': 8,
    'selector-max-compound-selectors': 3,
    'selector-combinator-space-after': 'always',
    'selector-max-id': 0,
    'selector-max-universal': [0, {
      message: 'Always use class selectors, ids have very high specificity',
      severity: 'warning',
    }],
    'selector-max-pseudo-class': 1,
    'selector-max-specificity': '0,2,1',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'selector-max-type': [0, {
      ignore: 'child',
      message: 'Prefer class selectors',
    }],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'],
    }],
    'selector-no-qualifying-type': true,

    // String
    'string-no-newline': true,

    // Time
    'time-min-milliseconds': [150, {
      severity: 'warning',
    }],

    // Unit
    'unit-blacklist': ['in', 'cm', 'mm', 'q', 'pt', 'pc', 'ex', 'ch'],
    'unit-case': 'lower',
    'unit-no-unknown': true,

    // Value
    'value-keyword-case': 'lower',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-no-vendor-prefix': true,

    // Order
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
      ],
    ],
    'order/properties-alphabetical-order': true,
  },
};

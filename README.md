# Lintheus

[![npm version](https://badge.fury.io/js/stylelint-config-lintheus.svg)](https://badge.fury.io/js/stylelint-config-lintheus)
[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

My former co-worker CSS code review rules as a [stylelint](https://stylelint.io/) configuration.

## Usage

**1.** Install a compatible version of `stylelint` (we express it as a `peerDependency` so you can choose a version that works for you).

```
npm install --save-dev stylelint stylelint-config-lintheus
```

**2.** Configure your stylelint configuration file to extend this package:

```js
{
  "extends": "stylelint-config-lintheus",
  "rules": {
    // Add overrides and additional rules here
  }
}
```

## SCSS support

**Lintheus** doesn't support SCSS syntax yet. 

Alternatively, you can use [stylelint-config-recommended-scss] or [stylelint-config-xo-scss].


## FAQ

### Why the project name is Lintheus?
Is a joke with my former co-worker name, Matheus and linters.

### How can i get this up and running fast?
Just create the `.stylelintrc` file with:

```bash
cat << EOF > .stylelintrc
{
  "extends": "stylelint-config-lintheus"
}
EOF
```

### I need to break a rule... :disappointed:
You should strive for not breaking any rule at all.

But if is a must, then, you should make an exception only on the offending line using `stylelint-disable-next-line`, eg:

```css
/* stylelint-disable-next-line selector-max-specificity */
.accordion__input:checked + .accordion__label > .accordion__label-image {
```

If you managed to get two or more offences in the same line, then separate the exceptions with comma, eg:
```css
/* stylelint-disable-next-line selector-max-specificity, selector-max-compound-selectors */
.accordion__input:checked + .accordion__label > .accordion__label-content > .accordion__label-status {
```

## Roadmap

- [ ] Document the decision behind every rule.
- [ ] SCSS support.

## Licence

[BSD 2-Clause](https://tldrlegal.com/license/bsd-2-clause-license-(freebsd))

[stylelint-config-recommended-scss]: https://github.com/kristerkari/stylelint-config-recommended-scss
[stylelint-config-xo-scss]: https://github.com/xojs/stylelint-config-xo-scss

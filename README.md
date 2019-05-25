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

## Roadmap

- [ ] document the decision behind every rule.

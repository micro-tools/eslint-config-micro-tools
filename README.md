eslint-configuration
====================

[Shareable eslint](http://eslint.org/docs/developer-guide/shareable-configs) config as used by micro-tools and nodefluent.

Setup
-----

Install this module (and eslint) and add it to *package.json's* *devDependencies*:

```
npm install -D eslint-configuration
```

Create a basic *.eslintrc.json* file in your project's root:

```json
{
    "extends": "eslint-configuration"
}
```

Add your own rules/global to this config file.
 
### Optional

- add a run script to your *package.json*:
```json
…
  "scripts": {
    …
    "lint": "eslint .",
    …
  },
…
```
- create an [*.eslintignore*](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories) to exclude generated code, e.g. *istanbul* coverage reports 

Commit-Hook
-----------

This package will install a pre-commit-hook into your project that runs "npm run lint" prior each commit.

Disabling rules
--------------

If you want to disable specific rules selectively see [eslint documentation](http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments).


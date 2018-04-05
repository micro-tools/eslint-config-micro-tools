const Validate = require('git-validate');

Validate.installScript('lint', 'eslint .');
Validate.configureHook('pre-commit', ['lint']);

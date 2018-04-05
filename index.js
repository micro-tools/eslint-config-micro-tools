module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "plugins": [
        "no-es6-getter-setter"
    ],
    "rules": {
        // possible errors
        "no-template-curly-in-string": "error",
        "no-unsafe-negation": "error",

        // best practices
        "block-scoped-var": "error",
        "complexity": ["error", 25],
        "curly": "error",
        "eqeqeq": ["error", "smart"],
        "guard-for-in": "error",
        "no-extend-native": "error",
        "no-new": "error",
        "no-sequences": "error",

        // strict mode
        "strict": "error",

        // variables
        "no-unused-vars": ["warn", {"vars": "all", "args": "none"}],
        "no-use-before-define": ["error", "nofunc"],

        // Node.js and CommonJS

        // Stylistic Issues
        "array-bracket-spacing": ["error", "never"],
        "brace-style": ["error", "1tbs"],
        "camelcase": "error",
        "computed-property-spacing": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        "max-depth": ["warn", 6],
        "max-len": ["warn", 120],
        "max-statements": ["warn", 63],
        "no-bitwise": "error",
        "no-eq-null": "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "never"],
        "quotes": ["error", "double", "avoid-escape"],
        "semi": ["error", "always"],
        "space-unary-ops": "error",

        // ECMAScript 6
        "arrow-body-style": ["error", "as-needed"],
        "no-var": "warn",
        "prefer-const": "warn",

        // custom ECMAScript 6
        "no-es6-getter-setter": "error"
    }
};

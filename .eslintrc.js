module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 2],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'no-console': 'warn',
        'comma-dangle': ['error', 'always-multiline'],
        'eqeqeq': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'comma-style': ['error', 'last'],
        'no-multiple-empty-lines': [1, { 'max': 1 }],
        'no-spaced-func': 'error',
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
    },
};

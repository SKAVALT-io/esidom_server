module.exports = {
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules/', 'src/'],
            },
        },
    },
    env: {
        browser: true,
        es2021: true,
        // 'jest/globals': true,
    },
    extends: [
        'airbnb-base',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'jest',
    ],
    rules: {
        indent: ['error', 4],
        // 'no-console': 'off',
    },
};

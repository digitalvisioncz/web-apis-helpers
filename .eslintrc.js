module.exports = {
    env: {browser: true, node: true},
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    extends: ['@digitalvisioncz/eslint-config-base', '@digitalvisioncz/eslint-config-typescript'],
    rules: {},
    ignorePatterns: ['.eslintrc', '.eslintrc.js'],
};

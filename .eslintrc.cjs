module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
        'plugin:import/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier', 'import', 'simple-import-sort', 'react-hooks', '@typescript-eslint'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'prettier/prettier': [
            'warn',
            {
                semi: true,
                tabWidth: 4,
                printWidth: 120,
                endOfLine: 'auto',
                bracketSpacing: true,
                arrowParens: 'always',
                singleQuote: true,
            },
        ],
        'import/no-unresolved': ['off'],
        'react/no-unknown-property': ['off'],
    },
    settings: {
        react: { version: 'detect' },
    },
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            [
                                // Packages `react` related packages come first.
                                '^react',
                                '^@?\\w',
                                // Internal packages.
                                '^(@|components)(/.*|$)',
                                // Side effect imports.
                                '^\\u0000',
                                // Style imports.
                                '^.+\\.?(css)$',
                            ],
                            // Parent imports. Put `..` last.
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        ],
                    },
                ],
            },
        },
    ],
};

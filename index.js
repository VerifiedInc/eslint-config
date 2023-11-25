module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jest'],
  extends: [
    'semistandard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // don't require file extensions when importing js/ts files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    // when using frameworks like Feathers, unused vars are common to properly type certain functions/methods
    // so as a compromise we allow them but require them to be prefixed with an underscore
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_.*',
      },
    ],
    // having this rule on would prevent constructor shorthand syntax
    // e.g. constructor(private readonly app: Application) {}
    'no-useless-constructor': 'off',
    // the `indent` and `@typescript-eslint/indent` rules have some conflicts and are generally kinda broken
    // ref: https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // but this seems to work
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    // same for `no-use-before-define` + `@typescript-eslint/no-use-before-define`
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // turning this rule off because prettier doesn't support it
    // and it's not really that important
    'space-before-function-paren': 'off',
    // disabling because in Prettier v3 trailing-commas are now the default
    "comma-dangle": "off",
  },
  env: {
    'jest/globals': true,
    node: true,
  },
};

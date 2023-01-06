# UnumID ESLint Config

Shared [ESLint](https://eslint.org/) config based on [semistandard](https://github.com/standard/semistandard).

## Installation

Install via npm cli

```shell
npm i -D git+ssh://git@github.com:UnumID/eslint-config.git#{version}
```

Or by adding to `package.json` directly

```json
{
  ...
  "devDependencies": {
    ...
    "@unumid/eslint-config": "git+ssh://git@github.com:UnumID/eslint-config.git#{version}
  }
}
```

### Peer Dependencies

The `eslint` package itself and required ESLint plugins must be installed as peer dependencies.

```shell
npm i --save-peer eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise
```

## Usage

Simply extend `@unumid/eslint-config` in the project's ESLint config (`.eslintrc`, `.eslintrc.js`, etc)

```json
{
  "extends": ["@unumid/eslint-config"]
}
```

## Custom Rules

- `import/extensions`: Don't require file extensions when importing `.js` or `.ts` files.
- `no-unused-vars`: Allow unused variables only if they are prefixed with an underscore (`_`), to accommodate frameworks like Feathers that sometimes have strict requirements for function/method types, but not implementations, while making it clear when a variable isn't used.
- `no-useless-constructor`: Disabled to allow use of constructor shorthand, e.g. `constructor(private readonly app: Application) {}`
- `indent`/`@typescript-eslint/indent` and `no-use-before-define`/`@typescript-eslint/no-use-before-define`: These rules have some conflicts between the base eslint versions and the typescript versions, so we've done our best to make them work for us.

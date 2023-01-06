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

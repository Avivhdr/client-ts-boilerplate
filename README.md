# Getting Started with Boilareplate-client

This boiler plate is based on `create-react-app --template typscript` and was ejected

## Styling
Editor Config
Prettier
Stylelint: stylelint-config-recommended, prettier (prettier errors are shown as stylelint errors)
ESLint: airbnb-typescript, prettier (prettier errors are shown as eslint errors)

## .vscode
Overrides local settings.json with these rules:
When saving a file:
1. TS file - running eslint --fix
2. css file - running stylelint --fix

## Available Scripts

### `yarn start`
### `yarn test`
### `yarn build`
### `yarn stylelint`
Fixes all stylelint errors and prettier errors in all `css` files
### `yarn prettier-eslint`
format all files based on `.prettierrc` configuration and then pass the result to `eslint --fix`


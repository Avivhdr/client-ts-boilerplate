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
### `yarn analyze`
Analyzing source code size using `source-map-exploer` and show results in the browser (must have a build version in the `build` folder - `npm run build`)
### `yarn eslint`
Fixes all fixable ESlint errors and prettier errors in all `js` files
### `yarn stylelint`
Fixes all fixable Stylelint errors and prettier errors in all `css` files
### `yarn fix-all`
runs the eslint script, followed by the stylelint script
### `yarn prettier-eslint` (do  not use)
format all files based on `.prettierrc` configuration and then pass the result to `eslint --fix`


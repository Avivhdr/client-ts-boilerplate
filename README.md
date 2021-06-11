# Boilareplate-ts-client

This boiler plate is based on `create-react-app --template typscript` and was ejected.

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

Runs the eslint script, followed by the stylelint script

### `yarn prettier-eslint` (do  not use)

format all files based on `.prettierrc` configuration and then pass the result to `eslint --fix`

## public folder

To reference assets in the public folder, you need to use an environment variable called PUBLIC_URL.
From the public folder:

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

From `src`:

```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

### `Absolute Imports`

When importing a file you can use:

1. Relative imports: `../../components/Bar.tsx`
2. Absolute imports that starts with `~`.That way you can see a visual difference between global imports like `lodash/fp` and `@material-ui/core` and local absolute imports: `~/components/Bar`

```js
import React from 'react'; // external import
import _ from 'lodash/fp'; // external import
import { makeStyles } from '@material-ui/core'; // external import
import Bar from '~/components/Bar'; // internal import
import logo from './logo.svg'; // relative import
```

The ESlint rule `import/order` will make sure the import will be in this order.

## Optional `.env` files

- `.env`: Default.
- `.env.local`: Local overrides. **This file is loaded for all environments except test.**
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- `npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
- `npm run build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

`.env` files are read from `config/paths.js` and you can move them to a  different folder by changing their loading paths:

```javascript
line 55: dotenv: resolveApp('.env'),
```

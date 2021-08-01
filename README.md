# Boilareplate-ts-client

This boiler plate is based on `create-react-app --template typscript` and was ejected.

## *TODO:*

* path intelisense for `~/..`
* Add react-error-boundary
* Add [routing](https://reactrouter.com/web/example/animated-transitions)
* Debugging jest files in eject-mode [docs](https://create-react-app.dev/docs/debugging-tests)
* Add sign-up & login page
* Add dark-mode ([use-dark-mode](https://github.com/donavon/use-dark-mode) & [ui](https://www.npmjs.com/package/react-dark-mode-toggle))
## Styling

* Normalize.css is included in `index.css`
* Import a css file with this pattern: `[name].module.css` and the styled will be encpsulated to the component using `css-modules`.
## Linting included in the project:
---
<!-- <details>
  <summary>click to expand!</summary> -->
* Editor Config

* Prettier

* *Stylelint*: stylelint-config-recommended, prettier (prettier errors are shown as stylelint errors)

* ESLint: airbnb-typescript, prettier (prettier errors are shown as eslint errors)
<!-- </details></br></br> -->

## .vscode

---
<!-- <details>
  <summary>click to expand!</summary> -->

* ### <u>settings.json</u> -  overrides local settings.json with these rules:

  When saving a file:

  1. TS file - running eslint --fix
  2. css file - running stylelint --fix

* ### <u>extensions.json</u> - list of recommanded extention for this project.

<!-- </details></br></br> -->

## Available Scripts

---
<!--
<details>
  <summary>click to expand!</summary> -->

### `start`

### `test`
<details>
  <summary>click to expand!</summary>
  When you run the `test` script, Jest will launch in watch mode*. Every time you save a file, it will re-run the tests, like how npm start recompiles the code.

By default, when you run npm test, Jest will only run the tests related to files changed since the last commit.

Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

You can also press a in the watch mode to force Jest to run all tests.
</details>

### `build`

### `serve`

When a `build` folder is present (after running the `build` script), running this script will load the build folder in the browser.

### `analyze`

Analyzing source code size using `source-map-exploer` and show results in the browser (must have a build version in the `build` folder - `npm run build`)

### `eslint`

Fixes all fixable ESlint errors and prettier errors in all `js` files

### `stylelint`

Fixes all fixable Stylelint errors and prettier errors in all `css` files

### `fix-all`

Runs the eslint script, followed by the stylelint script

### `prettier-eslint` (do  not use)

format all files based on `.prettierrc` configuration and then pass the result to `eslint --fix`

<!-- </details></br></br> -->

## public folder

---

<!-- <details> -->
  <!-- <summary>click to expand!</summary> -->


To reference assets in the public folder, you need to use an environment variable called PUBLIC_URL.
From the public folder:

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

From `src`:

```javascript
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

  <!-- </details></br></br> -->

## Absolute Imports

---
<!-- <details> -->
  <!-- <summary>click to expand!</summary> -->

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
<!-- </details></br></br> -->

## Optional `.env` files

---
<details>
  <summary>click to expand!</summary>
- `.env`: Default.
- `.env.local`: Local overrides. **This file is loaded for all environments except test.**
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- `npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
- `npm : `.env.production.local`, `.env.local`, `.env.production`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

`.env` files are read from `config/paths.js` and you can move them to a  different folder by changing their loading paths:

```javascript
line 55: dotenv: resolveApp('.env'),
```

</details></br></br>

## Google analytics

---

<details>
  <summary>click to expand!</summary>
If this is a public app, you can use the `reportWebVitals()` function to pass live information to google analytics ([details](https://create-react-app.dev/docs/measuring-performance))

</details></br></br>

## Proxying

----

<details>
  <summary>click to expand!</summary>

When working on both client and server, you can set the a `proxy` property inside `package.json` like this:
```JSON
 "proxy": "http://localhost:4000", // should match server port
```
And perform API calls to the server like this:
```javascript
fetch('/api/users');
```
**This will work in development only!**

</details></br></br>

<br/><br/><br/><br/>

MarkDown:
========

# H1
## H2
### H3
#### H4
##### H5
###### H6

*italics* or _italics_

**bold** or __bold__

***bold & italic*** and **_bold & italic_**

~~Scratch this~~



1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.⋅⋅
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Horizontal Rule
***

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

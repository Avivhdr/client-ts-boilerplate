# Boilareplate-ts-client

## <u>Sections</u>:
1. [How this boiler plate was built](#how-this-boiler-plate-was-built)
2. [Coding options](#coding-options)
3. [Available scripts](#available-scripts)
4. [TODO](#todo)

<br />

## <u>How this boiler plate was built</u>
---
1. `npx create-react-app --template typscript`
2. `npm run eject`
3. Adding [css normalize](https://create-react-app.dev/docs/adding-css-reset/)
4. Adding [EditorConfig](https://editorconfig.org/)
5. Adding [Prettier](https://prettier.io/)
6. Adding [Stylelint](https://stylelint.io/) (with prettier-config**)
7. Adding [ESLint](https://eslint.org/) (with prettier-config** + recommended plugins)

** Configuring linters so that Prettier errors are shown as ESlint errors (in TS/JS files) and Stylelint errors (in style files)

9. Increase TS strictness in [.tsconfig](tsconfig.json) and Improving `.tsconfig` readability
10. Adding VSCcode project-specific settings:
    * [settings.json](./.vscode/settings.json) -> Overrides user's settings
    * [extensions.json](./.vscode/extensions.json) -> A list of extensions that would be recommended to install when first cloning the project.
    * [launch.json](./.vscode/launch.json) -> usefull for debugging inside VSCode
11. Adding a[`.env`](./.env) file with all the available built-in options commented out.
12. Adding [Error catcher](https://reactjs.org/docs/error-boundaries.html) by Wrapping `<App />` with an [ErrorBoundary](https://github.com/bvaughn/react-error-boundary) component.


<br />

## <u>Coding Options</u>

---

* Import a css file with this pattern: `[name].module.css` and the styled will be encpsulated to the component using `css-modules`.
* Ignoring ts inside jsx:
```jsx
{
  // @ts-ignore
  <Bomb />
}
```
*  `public` folder

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


* Absolute Imports - when importing a file you can use:

  1. Relative imports: `../../components/Bar.tsx`
  2. Absolute imports that starts with `~`.

      That way you can see a visual difference between global imports like `lodash/fp` & `@material-ui/core`, and local absolute imports like `~/components/Bar`

    ```js
    import React from 'react'; // external import
    import _ from 'lodash/fp'; // external import
    import { makeStyles } from '@material-ui/core'; // external import
    import Bar from '~/components/Bar'; // internal import
    import logo from './logo.svg'; // relative import
    ```

  The ESlint rule `import/order` will make sure the import will be in this order.

<br />

## <u>Available Scripts</u>

---
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
<details>
  <summary>click to expand!</summary>
  When a `build` folder is present (after running the `build` script), running this script will load the build folder in the browser.
</details>

### `analyze`
<details>
  <summary>click to expand!</summary>
Analyzing source code size using `source-map-exploer` and show results in the browser (must have a build version in the `build` folder - `npm run build`)
</details>

### `eslint`
<details>
  <summary>click to expand!</summary>
Fixes all fixable ESlint errors and prettier errors in all `js` files
</details>

### `stylelint`
<details>
  <summary>click to expand!</summary>
Fixes all fixable Stylelint errors and prettier errors in all `css` files
</details>

### `fix-all`
<details>
  <summary>click to expand!</summary>
Runs the eslint script, followed by the stylelint script
</details>

### `prettier-eslint` (do  not use)
<details>
  <summary>click to expand!</summary>
format all files based on `.prettierrc` configuration and then pass the result to `eslint --fix`
</details>

<br />

## <u>TODO:</u>

---
* path intelisense for `~/..`
```
  /*
    "@app/*": ["app/*"],
    "@config/*": ["app/_config/*"],
    "@environment/*": ["environments/*"],
    "@shared/*": ["app/_shared/*"],
    "@helpers/*": ["helpers/*"]
  */
```
* Add [routing](https://reactrouter.com/web/example/animated-transitions)
* Debugging jest files in eject-mode [docs](https://create-react-app.dev/docs/debugging-tests)
* Add sign-up & login page
* Add dark-mode ([use-dark-mode](https://github.com/donavon/use-dark-mode) & [ui](https://www.npmjs.com/package/react-dark-mode-toggle))
* https://github.com/sindresorhus/eslint-plugin-unicorn/blob/d53d935951aa815c763fc9441aa452c763294715/docs/rules/error-message.md

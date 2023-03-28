# React eShop app

## Installation

Clone project and install dependencies:

```bash
npm install
```

How to run Vite server [Local deploy](http://localhost:5137/):

```bash
npm run dev
```

How to build project:

```bash
npm run build
```

## Features

`.js` files process by `babel` - JavaScript compiler configured `webpack-dev-server`
```js
export default Header {...}
import { Header } from 'components/Header/Header';
```

`.svg`,`.png`, `.jpg` files processed by `vite`
```js
import logo from '@images/...';
```

 `.css` files processed by `sass-loader`
 To use css as module, it should be named as `*.module.scss`
 This variable with lowerCamelCase naming contains in SCSS file with kebab-case name .some-div-name
```js
import "@styles/main.scss";
import styles from "./header.module.scss"; 

`<div style="${styles.someDivName}"></div>`;
```

# heatmapjs-vue

[![version](https://img.shields.io/npm/v/heatmapjs-vue.svg)](https://www.npmjs.com/package/heatmapjs-vue)
[![download](https://img.shields.io/npm/dm/heatmapjs-vue.svg)](https://www.npmjs.com/package/heatmapjs-vue)
[![license](https://img.shields.io/github/license/nqdy666/heatmapjs-vue.svg)](https://github.com/nqdy666/heatmapjs-vue/blob/dev/LICENSE)

> heatmapjs component for Vue.js.

> [CN 中文版](./README.zh_CN.md)

Built upon [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) v2.0.5+ and depends on [Vue.js](https://vuejs.org/) v2.2.6+.

#### Features
- IE9+
- Support Typescript
- Auto resize

## Documentation
- **[Demo](https://nqdy666.github.io/heatmapjs-vue/)**
- **[例子](https://nqdy666.github.io/heatmapjs-vue/cn/)**
- **[Example on JSBin](https://jsbin.com/quwakos/edit?html,css,js,output)**

## Install

#### NPM
Install the package.

```bash
$ npm install heatmapjs-vue
```

Register the component

```js
import Vue from 'vue'
import heatmapjsVue from 'heatmapjs-vue'
Vue.use(heatmapjsVue)
```

You may now use the component in your markup

```html
<style>
  .heatmapjs-container {
    width: 1000px;
    height: 500px;
  }
</style>
<heatmapjs-vue class="heatmapjs-container" :max="100" :min="0" :data="[{ x: 10, y: 15, value: 5}]"></heatmapjs-vue>
```

#### CDN

include `vue` 、`heatmap.js`、 `heatmapjs-vue.js`、`heatmapjs-vue.css` - I recommend using [unpkg](https://unpkg.com/#/).

```html
<link rel="stylesheet" href="https://unpkg.com/heatmapjs-vue@0.0.4/dist/heatmapjs-vue.css"/>
<style>
  .heatmapjs-container {
    width: 1000px;
    height: 500px;
  }
</style>
```

```html
<script src="https://unpkg.com/vue@latest"></script>
<script src="https://unpkg.com/heatmap.js@2.0.5/build/heatmap.min.js"></script>
<!-- use the latest release -->
<script src="https://unpkg.com/heatmapjs-vue@latest"></script>
<!-- or point to a specific release -->
<script src="https://unpkg.com/heatmapjs-vue@0.0.4"></script>
```

You may now use the component in your markup

```html

<heatmapjs-vue class="heatmapjs-container" :max="100" :min="0" :data="[{ x: 10, y: 15, value: 5}]"></heatmapjs-vue>
```

#### typescript
**[heatmapjs-vue-ts-example](https://github.com/nqdy666/heatmapjs-vue-ts-example)**

## Using the component

### Props *(all reactive)*
* `options` (default: `{}`)

  For further details, see [heatmap.js' API documentation](https://www.patrick-wied.at/static/heatmapjs/docs.html)

* `min` (default: `0`)
  
  the lower bound of your dataset
  
* `max` (default: `100`)

  the upper bound of your dataset
  
* `data` (default: `[]`)

  dataset
  ```
  var dataPoint = { 
    x: 5, // x coordinate of the datapoint, a number 
    y: 5, // y coordinate of the datapoint, a number
    value: 100 // the value at datapoint(x, y)
  };
  var data = [
    dataPoint, dataPoint, dataPoint, dataPoint
  ]
  ```
* `clickDrawable` (default: `false`)

  add a datapoint when click

* `moveDrawable` (default: `false`)

  add a datapoint when mousemove or touchmove

* `drawValue`  (default: `1`)

  the value of datapoint when click or move

### Methods
* `getValueAt`
* `getData`
* `getDataURL`
* `repaint`

For further details, see [heatmap.js' API documentation](https://www.patrick-wied.at/static/heatmapjs/docs.html)

### Events
* `change`

  triggered when data changes due to a click or move and the first parameter emit is the latest dataset

## Local development

development
```bash
$ npm i
$ npm run docs-dev
```

publish
```bash
$ npm install -g babel-cli
$ npm i rollup -g
$ chmod a+x scripts/build
$ npm run release
$ git push --follow-tags origin dev && npm publish
```
If you use the window system, you can't execute directly `npm run release`, you need to install git bash software, and then use git bash to execute the command `./scripts/build` and `npm run release:only`.

docs-publish
```bash
$ npm install -g gh-pages
$ chmod a+x scripts/docs-publish
$ npm run docs-publish
```
If you use the window system, you can't execute directly `npm run docs-publish`, you need to install git bash software, and then use git bash to execute the command `./scripts/docs-publish`.

## Donation
If you find it useful, you can buy us a cup of coffee.

<img width="650" src="https://raw.githubusercontent.com/nqdy666/heatmapjs-vue/dev/docs/assets/images/qrcode-donation.png" alt="donation">

## License

[MIT](https://github.com/nianqin/heatmapjs-vue/blob/dev/LICENSE.md)

Copyright (c) 2019-present, Qin Nian

# heatmapjs-vue

heatmapjs component for Vue.js.

#### Features
- IE10+

## Documentation
- **[Demo & Docs](https://nqdy666.github.io/heatmapjs-vue/)**

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
<heatmapjs-vue :max="100" :min="0" :data="[{ x: 10, y: 15, value: 5}]"></heatmapjs-vue>
```

#### CDN

Just include `vue` & `heatmapjs-vue.js` - I recommend using [unpkg](https://unpkg.com/#/).

```html
<script src="https://unpkg.com/vue@latest"></script>
<!-- use the latest release -->
<script src="https://unpkg.com/heatmapjs-vue@latest"></script>
<!-- or point to a specific release -->
<script src="https://unpkg.com/heatmapjs-vue@0.0.3"></script>
```

You may now use the component in your markup

```html
<heatmapjs-vue :max="100" :min="0" :data="[{ x: 10, y: 15, value: 5}]"></heatmapjs-vue>
```

## Using the component

### Props *(all reactive)*
* `options`

* `min`

* `max`

* `data`

* `clickDrawable`

* `moveDrawable`

* `drawValue`

### Methods
* `addData`
* `getValueAt`
* `getData`
* `getDataURL`
* `repaint`

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
$ npm run release
$ git push --follow-tags origin dev && npm publish
```
If you use the window system, you can't execute directly `npm run release`, you need to install git bash software, and then use git bash to execute the command `./scripts/build` and `npm run release:only`.

docs-publish
```bash
$ npm install -g gh-pages
$ npm run docs-publish
```
If you use the window system, you can't execute directly `npm run docs-publish`, you need to install git bash software, and then use git bash to execute the command `./scripts/docs-publish`.

## Donation
If you find it useful, you can buy us a cup of coffee.

<img width="650" src="https://raw.githubusercontent.com/nqdy666/heatmapjs-vue/dev/docs/assets/images/qrcode-donation.png" alt="donation">

## License

[MIT](https://github.com/nianqin/heatmapjs-vue/blob/master/LICENSE.md)

Copyright (c) 2019-present, Qin Nian

# heatmapjs-vue

[![version](https://img.shields.io/npm/v/heatmapjs-vue.svg)](https://www.npmjs.com/package/heatmapjs-vue)
[![download](https://img.shields.io/npm/dm/heatmapjs-vue.svg)](https://www.npmjs.com/package/heatmapjs-vue)
[![license](https://img.shields.io/github/license/nqdy666/heatmapjs-vue.svg)](https://github.com/nqdy666/heatmapjs-vue/blob/dev/LICENSE)

> heatmapjs 的 Vue.js 组件.

> [English Document](./README.md)

基于 [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) v2.0.5+ 开发，依赖 [Vue.js](https://vuejs.org/) v2.2.6+.

#### 特性
- IE9+
- Support Typescript
- Auto resize

## 文档
- **[Demo](https://nqdy666.github.io/heatmapjs-vue/)**
- **[中文例子](https://nqdy666.github.io/heatmapjs-vue/cn/)**
- **[Example on JSBin](https://jsbin.com/quwakos/edit?html,css,js,output)**

## 安装

#### NPM
安装npm包.

```bash
$ npm install heatmapjs-vue
```

组件注册

```js
import Vue from 'vue'
import heatmapjsVue from 'heatmapjs-vue'
Vue.use(heatmapjsVue)
```

现在可以使用该组件

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

包含 `vue` 、`heatmap.js`、 `heatmapjs-vue.js`、`heatmapjs-vue.css` - 我推荐使用 [unpkg](https://unpkg.com/#/).

```html
<link rel="stylesheet" href="https://unpkg.com/heatmapjs-vue@0.0.5/dist/heatmapjs-vue.css"/>
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
<!-- 使用最新版本 -->
<script src="https://unpkg.com/heatmapjs-vue@latest"></script>
<!-- 或指定某一个版本 -->
<script src="https://unpkg.com/heatmapjs-vue@0.0.5"></script>
```

现在可以使用该组件

```html

<heatmapjs-vue class="heatmapjs-container" :max="100" :min="0" :data="[{ x: 10, y: 15, value: 5}]"></heatmapjs-vue>
```

#### typescript
**[heatmapjs-vue-ts-example](https://github.com/nqdy666/heatmapjs-vue-ts-example)**

## 组件

### 属性 *(全部可响应)*
* `options` (default: `{}`)

  更多信息，请查看 [heatmap.js' API documentation](https://www.patrick-wied.at/static/heatmapjs/docs.html)

* `min` (default: `0`)
  
  数据集最小边界值
  
* `max` (default: `100`)

  数据集最大边界值
  
* `data` (default: `[]`)

  数据集
  ```
  var dataPoint = { 
    x: 5, // 数据点的x坐标, 数字
    y: 5, // 数据点的y坐标, 数字
    value: 100 // 在点(x, y)的值
  };
  var data = [
    dataPoint, dataPoint, dataPoint, dataPoint
  ]
  ```
* `clickDrawable` (default: `false`)

  单击时添加数据点

* `moveDrawable` (default: `false`)

  当鼠标移动或触摸移动时添加一个数据点

* `drawValue`  (default: `1`)

  单击或移动时数据点的值

### Methods
* `getValueAt`
* `getData`
* `getDataURL`
* `repaint`

更多信息，请查看 [heatmap.js' API documentation](https://www.patrick-wied.at/static/heatmapjs/docs.html)

### Events
* `change`

  当数据因单击或移动而发生更改时触发，且发送的第一个参数是最新的数据集

## 本地开发

开发
```bash
$ npm i
$ npm run docs-dev
```

发布
```bash
$ npm install -g babel-cli
$ npm i rollup -g
$ chmod a+x scripts/build
$ npm run release
$ git push --follow-tags origin dev && npm publish
```
如果您使用的是windows系统，您不能直接执行`npm run release`，您需要安装git bash软件，然后使用git bash执行命令`./scripts/build`和`npm run release:only`。

文档发布
```bash
$ npm install -g gh-pages
$ chmod a+x scripts/docs-publish
$ npm run docs-publish
```
如果您使用windows系统，您不能直接执行`npm run docs-publish`，您需要安装git bash软件，然后使用git bash执行`./scripts/docs-publish`命令。

## 捐赠
如果你觉得有用，您可以请我们喝杯咖啡。

<img width="650" src="https://raw.githubusercontent.com/nqdy666/heatmapjs-vue/dev/docs/assets/images/qrcode-donation.png" alt="donation">

## 许可证

[MIT](https://github.com/nianqin/heatmapjs-vue/blob/dev/LICENSE.md)

Copyright (c) 2019-present, Qin Nian

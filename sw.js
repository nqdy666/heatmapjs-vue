importScripts('/heatmapjs-vue/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/heatmapjs-vue/_nuxt/1c07baa5419fda8cea65.js",
    "revision": "ade2605c6ea6e710c19de154227d233a"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/3f6adedeeeef9824fbbf.css",
    "revision": "80aa0e3ff7a6bf4c8db1ba774665e302"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/54d7e03a0e50a8ea6819.js",
    "revision": "c4a081f2ff6fb479cf3d04c14221513e"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/5f890d221c065cf056f1.css",
    "revision": "632233ffa8b098a4f4e01f8a7a379751"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/61e40766e3e290b3a370.js",
    "revision": "86e41024e6173bfdea177fe3e3eb2222"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/7af70792408909b3e930.css",
    "revision": "28930deda4bd181a95832503d5570b9f"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/9c1d29d998e2bd80ec65.js",
    "revision": "f1544927fd98a413b1bc4d836f849b9a"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/a88667d7ed646f3e85cc.css",
    "revision": "82553a6b825ca2616d19be10fb22273e"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/df327ba4b856fca31225.js",
    "revision": "ac5ef15def041d3842a1e73c74ae40e6"
  },
  {
    "url": "/heatmapjs-vue/_nuxt/ff1b3c75f88dfbdbd273.js",
    "revision": "a332533f77e20d352d6d546abce2c899"
  }
], {
  "cacheId": "heatmapjs-vue",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/heatmapjs-vue/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/heatmapjs-vue/.*'), workbox.strategies.networkFirst({}), 'GET')






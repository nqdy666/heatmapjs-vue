importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1c07baa5419fda8cea65.js",
    "revision": "ade2605c6ea6e710c19de154227d233a"
  },
  {
    "url": "/_nuxt/3f6adedeeeef9824fbbf.css",
    "revision": "80aa0e3ff7a6bf4c8db1ba774665e302"
  },
  {
    "url": "/_nuxt/4ee53e05b8a38b958e15.js",
    "revision": "6eb6039b3dd6797da46d1aa4b7df7e02"
  },
  {
    "url": "/_nuxt/54d7e03a0e50a8ea6819.js",
    "revision": "c4a081f2ff6fb479cf3d04c14221513e"
  },
  {
    "url": "/_nuxt/5f890d221c065cf056f1.css",
    "revision": "632233ffa8b098a4f4e01f8a7a379751"
  },
  {
    "url": "/_nuxt/636ec3fdfbb307acff38.css",
    "revision": "57e902367c165ecdd9fc5ea3c56133c3"
  },
  {
    "url": "/_nuxt/a88667d7ed646f3e85cc.css",
    "revision": "82553a6b825ca2616d19be10fb22273e"
  },
  {
    "url": "/_nuxt/b0ab21b5ff32b9518c83.js",
    "revision": "87accd69fae98fe2231c1577814f3341"
  },
  {
    "url": "/_nuxt/d6e8523f72d236d03f93.js",
    "revision": "0b590a356f518170352d35ac716e4cde"
  },
  {
    "url": "/_nuxt/ff1b3c75f88dfbdbd273.js",
    "revision": "a332533f77e20d352d6d546abce2c899"
  }
], {
  "cacheId": "heatmapjs-vue",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')






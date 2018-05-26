/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b06ce4519cb8cc247b10e4dac6a0bbe8"
  },
  {
    "url": "assets/css/6.styles.a33790b2.css",
    "revision": "371c91754982f2225b3bdcc43eacb09c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.480ece22.js",
    "revision": "8b16ef41f4faf61dd44c614032cf7c06"
  },
  {
    "url": "assets/js/1.ab4a1ba3.js",
    "revision": "ffbf1ce4ed7b74e3543fb67c36263563"
  },
  {
    "url": "assets/js/2.896d1dc4.js",
    "revision": "330d6539ac477950130d54af9f836828"
  },
  {
    "url": "assets/js/3.62e9eaaf.js",
    "revision": "5e2d781ca2224bb7a14641e9ca7402e6"
  },
  {
    "url": "assets/js/4.694152f8.js",
    "revision": "446f65ff97ed3a7b25f5d070812a513f"
  },
  {
    "url": "assets/js/5.2352d488.js",
    "revision": "42b2400147e167ca37d47c25b4a66ef2"
  },
  {
    "url": "assets/js/app.17d843f9.js",
    "revision": "872a71df0cae478ed6de3ba3cd1f5a4a"
  },
  {
    "url": "en/blog/index.html",
    "revision": "17c01ad453b90791d038ca4d78076981"
  },
  {
    "url": "en/index.html",
    "revision": "fd256fd65ac8308c9a1308425e6b759c"
  },
  {
    "url": "index.html",
    "revision": "0a1f7d7038d1663a68615d5d11db3eac"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "0a62f27db7e982ac98faa08cc57d80a1"
  },
  {
    "url": "zh/blog/vue-webpack-boilerplate-template.html",
    "revision": "ed6a5f5bb1327dc2c8fc8615b0c78df3"
  },
  {
    "url": "zh/index.html",
    "revision": "d4f9d67f01890fd41a5faec827ddcdb3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

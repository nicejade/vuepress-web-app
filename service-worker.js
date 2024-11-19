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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55d4092cb2cfc250e333f615267c1ba6"
  },
  {
    "url": "assets/css/0.styles.ddb5b0d9.css",
    "revision": "9453b1de4651c694a72e4386dc220ba1"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.633ab906.js",
    "revision": "0945a1531435ed855b8cfdc411cd154a"
  },
  {
    "url": "assets/js/10.0483d064.js",
    "revision": "0bad7acb51ed63f38c2486626be1ccd4"
  },
  {
    "url": "assets/js/11.a63898e4.js",
    "revision": "7b9d6791b9b2c9e38d221fae3d5b3561"
  },
  {
    "url": "assets/js/12.b37efcc2.js",
    "revision": "70e59b879d6857b3fe3de128763cef9b"
  },
  {
    "url": "assets/js/13.259d4b22.js",
    "revision": "67f06f86c2a7161f8b22885ab2054678"
  },
  {
    "url": "assets/js/14.a213a7c9.js",
    "revision": "4bbc231df488c84e930418e1266b28a1"
  },
  {
    "url": "assets/js/15.5266b5a6.js",
    "revision": "fbe06d6254b070d3c0001aa381492b23"
  },
  {
    "url": "assets/js/16.bf1513c2.js",
    "revision": "275da0954905f9029733ce9fa6999dc4"
  },
  {
    "url": "assets/js/17.65ee11bb.js",
    "revision": "50bd49bc40b9588d978d994ba0ce0ca6"
  },
  {
    "url": "assets/js/18.0858dbfb.js",
    "revision": "0fd1a2b00328a970507ce1d6c380dfac"
  },
  {
    "url": "assets/js/19.20ad348e.js",
    "revision": "f2fa9e565892281854de5fe63134a09c"
  },
  {
    "url": "assets/js/2.141dc9ba.js",
    "revision": "c5f73fbee6a6b7ee2030e26515d5f611"
  },
  {
    "url": "assets/js/20.43572e78.js",
    "revision": "0e11676fb75553fc9d31b7e8cecf0f88"
  },
  {
    "url": "assets/js/21.5f64d5f5.js",
    "revision": "c289097b2ba4df878b60166761d05630"
  },
  {
    "url": "assets/js/22.f7db0219.js",
    "revision": "9f05ea08bb405f7d23960ea3728ff665"
  },
  {
    "url": "assets/js/23.7c04662b.js",
    "revision": "29ac05b60221fdb5858950929c2feaaa"
  },
  {
    "url": "assets/js/24.c9b1482e.js",
    "revision": "4e192e97bf556255d391f3ff6a08d717"
  },
  {
    "url": "assets/js/25.32ab9778.js",
    "revision": "cbf84cf92324d3e951039ef27b820613"
  },
  {
    "url": "assets/js/26.0f879694.js",
    "revision": "f3be0ec44ad89dbfdef66f7989514597"
  },
  {
    "url": "assets/js/27.c37b22fd.js",
    "revision": "bb17c2a0e8e4a2cf9177872f8de34612"
  },
  {
    "url": "assets/js/28.1f9afc16.js",
    "revision": "a34e96f5a11fd43574e3b350d3616d26"
  },
  {
    "url": "assets/js/29.4aa3f1b8.js",
    "revision": "4303b2faf217c453e6c700356c1c0d21"
  },
  {
    "url": "assets/js/3.0f190b30.js",
    "revision": "b221f4c6104e5dbb87c7b36b76a601b4"
  },
  {
    "url": "assets/js/30.b42ea5c1.js",
    "revision": "c7efec48c54b81d6ba3428e250349753"
  },
  {
    "url": "assets/js/31.aa20b3fa.js",
    "revision": "0e7bae20ddca76dae4f95ec8fc99effb"
  },
  {
    "url": "assets/js/32.127de060.js",
    "revision": "da072ddf4bff8ffc9a0af690dc781b40"
  },
  {
    "url": "assets/js/33.4f440cdd.js",
    "revision": "f62f81570c2695bafdf2b6bebef7974b"
  },
  {
    "url": "assets/js/34.1cd3f671.js",
    "revision": "d30688ea4200d557f71339ccf29aaf8a"
  },
  {
    "url": "assets/js/35.f8915764.js",
    "revision": "f6504105c827f0275d9413ee4330d3a3"
  },
  {
    "url": "assets/js/36.bd438491.js",
    "revision": "11b9c23dff3da26bd510b254379a35e1"
  },
  {
    "url": "assets/js/37.db8b0896.js",
    "revision": "c1f501b1a08c669f1b3f646f9ee5d3d2"
  },
  {
    "url": "assets/js/38.bedac36f.js",
    "revision": "92030a8d14f7baa8bff62aca5199bc6b"
  },
  {
    "url": "assets/js/39.388160ca.js",
    "revision": "fa6aff74ece9ccebb4644d41778e44a5"
  },
  {
    "url": "assets/js/40.d7fa4c15.js",
    "revision": "5e267589bc5af34feb8649ca71f25f10"
  },
  {
    "url": "assets/js/41.b1ecfe98.js",
    "revision": "27bd2281bc8018b00bbec4c8c334abfb"
  },
  {
    "url": "assets/js/42.f5eb9586.js",
    "revision": "637ab8d972fbb765aec17b816a659176"
  },
  {
    "url": "assets/js/43.be0b32b1.js",
    "revision": "aed050bcfa34d0046a7faa97047fafd0"
  },
  {
    "url": "assets/js/44.3d29cb15.js",
    "revision": "7870595e77925ac0fe676c754358b138"
  },
  {
    "url": "assets/js/45.4a548aa8.js",
    "revision": "891fbb226e3cf929f4da18b522e0055e"
  },
  {
    "url": "assets/js/46.97ce2206.js",
    "revision": "7d4aa307e191e5ab5706834d0c1d10db"
  },
  {
    "url": "assets/js/6.88d7cc3e.js",
    "revision": "23a8246960ed3f884106cf3151681ce4"
  },
  {
    "url": "assets/js/7.48328e1b.js",
    "revision": "d0cf06fe6b1d7916a1f3fff766daf485"
  },
  {
    "url": "assets/js/8.4c25fbf5.js",
    "revision": "af4c5da0f60772b148dfc1d8b8e4a91c"
  },
  {
    "url": "assets/js/9.2bf7cca7.js",
    "revision": "b608a636d231ed45397a8aebdab99c7b"
  },
  {
    "url": "assets/js/app.7ba205b1.js",
    "revision": "885834839869c2f728bf3f1aae033589"
  },
  {
    "url": "assets/js/vendors~docsearch.ea4af40a.js",
    "revision": "51112be820401ab88a5a92e3dc0b7c11"
  },
  {
    "url": "en/application/index.html",
    "revision": "a24700fdbfc761f36a2d33e212346d79"
  },
  {
    "url": "en/index.html",
    "revision": "8260d982b4bfbd280eac5014a5b97770"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bf9fc4406a3840645c9b762d8c0fb7ad"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "35565751c6b628c5de1f6f4ba2732459"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d8f7e1c5df51f575589f26b3cbfff706"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cbcbd08d98eabb259fcb16a72ef268d7"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2b04eca1ae92a244149afd5abeca1ce9"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "6808484c1b5067a9f6f32d534fd11b7c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "0d5a26850f76ad55786b29467a406dff"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "1d3f0124ce2fc59f980fc5671ef706cc"
  },
  {
    "url": "logo.png",
    "revision": "dfaa3c3e7a2d84fe769b20cb75c8603d"
  },
  {
    "url": "logo.svg",
    "revision": "0bc11315eb4ecc8b732764361dbe1302"
  },
  {
    "url": "zh/application/index.html",
    "revision": "5c6cddedf5cf4f485ee8c14d9e6ffd5b"
  },
  {
    "url": "zh/article/arya-jarvis-born-for-efficiency.html",
    "revision": "cfbdf3ecbc2239cf19533ef89f0de01e"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "92f0e04987afeb87e4e148fd3714df9e"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "800a7e5faf26afd6623cbeaf61e168c3"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "1d518c037e4c450a1a1011e6c784c484"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "7058e75f8fca26aa4c3ca4aebe377589"
  },
  {
    "url": "zh/article/how-to-quickly-delete-git-repository-new-changes.html",
    "revision": "e5f87aa3dfbf709e35486ef977759504"
  },
  {
    "url": "zh/article/how-to-use-npm-npx-tutorial.html",
    "revision": "34b060a12b6b865dfbd19dd6340c97a3"
  },
  {
    "url": "zh/article/how-to-write-a-good-readme-for-your-project.html",
    "revision": "105708a11ad123c2cd29ef9ade2ebfd8"
  },
  {
    "url": "zh/article/index.html",
    "revision": "fa320b1f51d087a4d5a3c68ad1050126"
  },
  {
    "url": "zh/article/js-import-export-vs-require-module-exports.html",
    "revision": "ae59031480d9c405174d4d6ba2feec7f"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "c1273676263788507ca160d1a27923ea"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "5162827b89ef3d6032d848789de0c807"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "da0fb9fad772bf27f4838d343a892f4b"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "8831b8394f55b381bff255e2230dc290"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "ddf4f93f65ee064e13117b66cfcb977f"
  },
  {
    "url": "zh/article/vuepress-hexo-jekyll-ghost-gitbook-hugo-solo_compare-personal-website-generator.html",
    "revision": "5573a9d3dd6c3e06a68683cf5b2b3258"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "2b4bbe9ddd4a1e6216cb98f674d7683a"
  },
  {
    "url": "zh/blog/docz-blog.html",
    "revision": "e4582c105406ac89c47d655bd636664d"
  },
  {
    "url": "zh/blog/ghost-blog.html",
    "revision": "ab1879dfc2b0f230305a8b9aef65b70a"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "f36422cfd9766a652928368ca55b7ec4"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "6efd5551d7b03af3c1e9c50951aae929"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "890a229993b212d1cddd83a46a822a57"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "405475893491380bf925ef781c9cf1a9"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "c3a1309ec9d15175cec0448837e50785"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "97fc9f34ae684443291c69fdd91f5c08"
  },
  {
    "url": "zh/index.html",
    "revision": "cb602c1b46e887aa3bc9be2d5bc24000"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "5052b0fce6980589f37142d6f317a6ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

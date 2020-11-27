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
    "revision": "89105d15288ec4d6e69ad42c78acb723"
  },
  {
    "url": "assets/css/0.styles.3ae4fbcb.css",
    "revision": "0041d0d6e2c1c58aa5a5d1fdfb25b948"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c58c3c3f.js",
    "revision": "59a7bdf57cbd2208c4f706d8ced074b2"
  },
  {
    "url": "assets/js/10.3d9a11d4.js",
    "revision": "75c7e954090b99bc88b5aed8c4daae62"
  },
  {
    "url": "assets/js/11.2a731341.js",
    "revision": "9a1b59419bb53e7dd92357302a6c5bfe"
  },
  {
    "url": "assets/js/12.c7cea086.js",
    "revision": "f3a4a9c604e69152ecef0d06dc3bf7e1"
  },
  {
    "url": "assets/js/13.b8cc9d83.js",
    "revision": "f9a37c92ba8eb974fab5b0b3c988d2b7"
  },
  {
    "url": "assets/js/14.69890a0b.js",
    "revision": "de3f7533e9047cf3cbc525ebb7e7c956"
  },
  {
    "url": "assets/js/15.f32406e7.js",
    "revision": "5e374db3a3cced15fe4516e2c6f9c270"
  },
  {
    "url": "assets/js/16.2e4b5ad4.js",
    "revision": "6913b45a112a4ae8707119eb954b0993"
  },
  {
    "url": "assets/js/17.b9bc5a8e.js",
    "revision": "80f87f462b4053bf7dfb70418355cca6"
  },
  {
    "url": "assets/js/18.19539ff1.js",
    "revision": "39690427abc877d36b7a44df39c767c4"
  },
  {
    "url": "assets/js/19.ce384083.js",
    "revision": "858c098cacda603d5bb515f70b7f234f"
  },
  {
    "url": "assets/js/20.d7a210a4.js",
    "revision": "a88f4725a42335bd7c75e9c62d697d25"
  },
  {
    "url": "assets/js/21.59eb2691.js",
    "revision": "acb1b0ccc1dcd06b7aea52ad2e84d86d"
  },
  {
    "url": "assets/js/22.9f0fa932.js",
    "revision": "f79af58c86471362466b6d825e5a644b"
  },
  {
    "url": "assets/js/23.69b137f1.js",
    "revision": "f5171e3165ac5b970413842d997db2ad"
  },
  {
    "url": "assets/js/24.f96fd1f1.js",
    "revision": "7c3850338241e3a963b78c4d9c1301ff"
  },
  {
    "url": "assets/js/25.ddc91f4e.js",
    "revision": "a9ce10972db482dc4467d8ce807b68e0"
  },
  {
    "url": "assets/js/26.d04cd006.js",
    "revision": "3a6ebea4f37cd39576494cc688d61d09"
  },
  {
    "url": "assets/js/27.849aed1b.js",
    "revision": "b195ce2bcd50de5004e51c0d8411ff8a"
  },
  {
    "url": "assets/js/28.6c31658c.js",
    "revision": "684da66860479e18348e640708b98230"
  },
  {
    "url": "assets/js/29.4667528d.js",
    "revision": "9e9a648363c615468526448f87f5a859"
  },
  {
    "url": "assets/js/30.1190ad20.js",
    "revision": "45a80451824315ca195a5b4e26f8c690"
  },
  {
    "url": "assets/js/31.d74e980a.js",
    "revision": "91f5aa994c0ce3d164a6e3482fa656ef"
  },
  {
    "url": "assets/js/4.61a6ee2e.js",
    "revision": "5e5cb1e07ad43f4aad2d3a26eb0ccae1"
  },
  {
    "url": "assets/js/5.bca84215.js",
    "revision": "dd85bd75ff67c261e2027d9d67e755e3"
  },
  {
    "url": "assets/js/6.18ddaedc.js",
    "revision": "34fd9bf5965b3e9be293a800fef0bf95"
  },
  {
    "url": "assets/js/7.906e6466.js",
    "revision": "1adc9ccd75cdd56026a3128aa8635202"
  },
  {
    "url": "assets/js/8.996b9924.js",
    "revision": "acf349114110b610b2afa8f7e63253fb"
  },
  {
    "url": "assets/js/9.2cda373c.js",
    "revision": "7e7ea0c00dd744465b158e49b2bda50c"
  },
  {
    "url": "assets/js/app.70424b15.js",
    "revision": "1620ca4c924a04e3f526abd29ed579ee"
  },
  {
    "url": "assets/js/vendors~flowchart.216ef086.js",
    "revision": "9b00d20b3d322ca3db0e036a03ee498f"
  },
  {
    "url": "auto.jpeg",
    "revision": "8ce3011616f31d665f2179edd2092518"
  },
  {
    "url": "banner.jpg",
    "revision": "38ad7665b3d03e2eb2edcf02347ea21e"
  },
  {
    "url": "categories/index.html",
    "revision": "2edc33b2212da003d8e7579f0bb5fb4b"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "ca1913911cd8f830b15bfda06dd2c4b1"
  },
  {
    "url": "categories/Vue/page/2/index.html",
    "revision": "79c00fdbc876242ac570d56ce1ce9144"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "da10de25906222e35d9ee3e33f4b5b75"
  },
  {
    "url": "head.jpg",
    "revision": "350e4ac403a28d3ee7580e76d27e3202"
  },
  {
    "url": "head.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "hero_black.png",
    "revision": "341621b18486ba4639bd2fa6fa5aab98"
  },
  {
    "url": "hero_old.png",
    "revision": "6e0567b30bfbca91471a5d5b886a13c5"
  },
  {
    "url": "hero_write.png",
    "revision": "944bdac8ed5e270e2e51db554b4c2232"
  },
  {
    "url": "index.html",
    "revision": "42123936b57887cd505757594e565964"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "2cd1a17ac3ee1578fa8f25467c15c73f"
  },
  {
    "url": "live2d/autoload.js",
    "revision": "767726c570dad7d1469fa5dba259937e"
  },
  {
    "url": "live2d/live2d.min.js",
    "revision": "ee7efff8ff5d1d4bd4a0ff99affd3ec7"
  },
  {
    "url": "live2d/waifu-tips.js",
    "revision": "e01c75f70a9465389471f638b1356bf8"
  },
  {
    "url": "live2d/waifu.css",
    "revision": "c0b987bdddfa732f8505a8d139bdb69b"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "bda5c901ab22d9bf0d0abe17767bc1ec"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "1bd7ee1a12edb6ee0de9e8a667098e5b"
  },
  {
    "url": "tag/index.html",
    "revision": "9411ee85c8b70f44988b55297d99e808"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "5db271d0f33f703816e21cb5bb5ca592"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "32861ac35a30adaa782d1180a697d2e8"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "ec57a588a058a724807e2d735bb2dde2"
  },
  {
    "url": "tag/node/index.html",
    "revision": "edfe0221eed63906e05f19ce58427e64"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "d4ed58a6c731975785c4061cdc943fbb"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "5d2d4ad3cb7f9603d78b60a86d85247a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "63fa2764f7dac61c6adc7aca4c97f3db"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "12bc8933a2995a629f7d6d0bbd820420"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a75ce6a8894ee5004a7165e39e409368"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "63e0b7a4eaa46a49aa38fe7d4952cd65"
  },
  {
    "url": "tag/个人简介/index.html",
    "revision": "96ba45fd71ff8eab19d052216a38d680"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "8e065248cf1b0d0df11b4a5525b0d3ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "b4e2274819bea3abb28568aa7c3b78dd"
  },
  {
    "url": "views/auto/index.html",
    "revision": "9acd1bba4fafc6ef56e3aa1f167ce89b"
  },
  {
    "url": "views/index.html",
    "revision": "80fb03142817ad5be57727bfa9eda492"
  },
  {
    "url": "views/Mongodb/2017/110101.html",
    "revision": "83571091e2cb9c59dd8c2d3409e08d80"
  },
  {
    "url": "views/Mongodb/2017/110102.html",
    "revision": "810f7752e2648c11dc5e5860b6c7bb58"
  },
  {
    "url": "views/Vue/2017/052401.html",
    "revision": "b9ba2a9588dc47ec6705460db2a7b67b"
  },
  {
    "url": "views/Vue/2017/121501.html",
    "revision": "ebd4feed01e6a98fef2c181649f5c312"
  },
  {
    "url": "views/Vue/2017/122801.html",
    "revision": "55fd7074daf32ce0935998a7c310f39d"
  },
  {
    "url": "views/Vue/2018/010101.html",
    "revision": "87cf76215c9383b9fc8dda299869dd43"
  },
  {
    "url": "views/Vue/2018/020401.html",
    "revision": "755af1d588b6c9ec90d8439166f7eb99"
  },
  {
    "url": "views/Vue/2018/072601.html",
    "revision": "7c1f2f61d363508d64d7392d06eca678"
  },
  {
    "url": "views/Vue/2018/081101.html",
    "revision": "38df47c9ee48685089b3e9c52e432116"
  },
  {
    "url": "views/Vue/2018/081501.html",
    "revision": "464569b1ecc2c41b3dca7436fd0da539"
  },
  {
    "url": "views/Vue/2018/081502.html",
    "revision": "0ea35ccfce1b5e58f316831dce428c9a"
  },
  {
    "url": "views/Vue/2018/091001.html",
    "revision": "cfdd329ce6b132a01c55a7885461ee14"
  },
  {
    "url": "views/Vue/2018/091301.html",
    "revision": "ff3b058bf580347dad6809bb97cceb7c"
  },
  {
    "url": "views/Vue/2018/110301.html",
    "revision": "bf2ea9dd121a7591cb6caec0c9496bb0"
  },
  {
    "url": "views/Vue/2018/111301.html",
    "revision": "48f7432000a4db3176925313b3353acf"
  },
  {
    "url": "views/Vue/2019/061501.html",
    "revision": "f1a5351897987577f27c029b954f9bb1"
  },
  {
    "url": "views/Vue/2019/072401.html",
    "revision": "5925fd300fca8f257c0660f62de799c9"
  },
  {
    "url": "wechat.jpg",
    "revision": "8bf799c30af4e4362754e8e88e3cc04b"
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

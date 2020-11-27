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
    "revision": "d6513292c6118a6cdfe38ab8dca4a325"
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
    "url": "assets/js/12.7deea4d0.js",
    "revision": "6f56db2a74e512d8defc5be973100f90"
  },
  {
    "url": "assets/js/13.86201c1c.js",
    "revision": "c5053473f0abaaae85c9f299a49796da"
  },
  {
    "url": "assets/js/14.69890a0b.js",
    "revision": "de3f7533e9047cf3cbc525ebb7e7c956"
  },
  {
    "url": "assets/js/15.d791ab5f.js",
    "revision": "b8b4663b1ab1f4737adf7bb7521424d3"
  },
  {
    "url": "assets/js/16.8d2416af.js",
    "revision": "96eb43c4830beb2498f4a4eaeda4d62a"
  },
  {
    "url": "assets/js/17.b9bc5a8e.js",
    "revision": "80f87f462b4053bf7dfb70418355cca6"
  },
  {
    "url": "assets/js/18.20051c17.js",
    "revision": "7ad1919cbdb4319788c95bf63a5776aa"
  },
  {
    "url": "assets/js/19.2c63408b.js",
    "revision": "97a6281da39072459cb88e46abb70509"
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
    "url": "assets/js/22.5a1d4a64.js",
    "revision": "f6f2d5764992ea87422f17e7c50002b2"
  },
  {
    "url": "assets/js/23.69b137f1.js",
    "revision": "f5171e3165ac5b970413842d997db2ad"
  },
  {
    "url": "assets/js/24.c3847649.js",
    "revision": "aba322e77b0a9fed12f8b2363972d823"
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
    "url": "assets/js/29.af301c25.js",
    "revision": "a7e120bb1667c2c9e3ea2710b8d14465"
  },
  {
    "url": "assets/js/30.b35c1f16.js",
    "revision": "49b42e0ff0d29655007088835b58d0e0"
  },
  {
    "url": "assets/js/31.150c29ad.js",
    "revision": "ea354fc554bf43c0c18bda6353203daa"
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
    "url": "assets/js/app.dfc1161c.js",
    "revision": "00fc08eadcd3701430cc8751f7e4bdb9"
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
    "revision": "279a0884c936b702cd31852b05f76f40"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "344cdf0df9dfd9f7364a3dee5b47ef04"
  },
  {
    "url": "categories/Vue/page/2/index.html",
    "revision": "086662e85d70b32524d957296232b768"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "ee8f25fb0f9f7be8aa114612e7dca88f"
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
    "revision": "53b55e81b4df3803ac9036fe0e15593a"
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
    "revision": "c3b646073d047e605d1e7ba24c024c78"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "53ff3586f124c2fe8fc6722dd926c253"
  },
  {
    "url": "tag/index.html",
    "revision": "3e10218a1f81bc982165cd294450ba70"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "2545a013ae47773446c151debe750a0a"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "32e1d5ccdac0ef27451df0f22d325b86"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "c8f65c64e2c7ae938f03cb82693da943"
  },
  {
    "url": "tag/node/index.html",
    "revision": "415601da3a03b60a8559f7c009d73591"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "acbb183f904556733e7af7aa94425d36"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "9dca9ddaf104d48f11dd1e29454be10d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "036db697b6a4dce2b2aeef089eee0b39"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "2f73ffc535b6457250e2ed4b8ee008fd"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "5447f7ca8a2d7ba6b78e72f1cdac836c"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "b85705ae2a078725c37ac35dfd5658c3"
  },
  {
    "url": "tag/个人简介/index.html",
    "revision": "c3d3a5dd1313c355ddc4878a13a19141"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "e1e816d07eed1bb6cfb720a6fa82dd6c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b78cbf4a6a856a87208e37bef0f34967"
  },
  {
    "url": "views/auto/index.html",
    "revision": "874c3aae6e0f2831dc2620dba5c0f80a"
  },
  {
    "url": "views/index.html",
    "revision": "e9eb9c5852739eddca92832b11087880"
  },
  {
    "url": "views/Mongodb/2017/110101.html",
    "revision": "1b937525a5144032f3a6249966bbe1b4"
  },
  {
    "url": "views/Mongodb/2017/110102.html",
    "revision": "755af6848cf7caee475fe8d38be9b9c9"
  },
  {
    "url": "views/Vue/2017/052401.html",
    "revision": "05d7f504445ccfe02da2494acfa5cc47"
  },
  {
    "url": "views/Vue/2017/121501.html",
    "revision": "599c942c6c6262104d3dad22ea1fdc91"
  },
  {
    "url": "views/Vue/2017/122801.html",
    "revision": "9696146ed4dc0cf4e900e776884cd149"
  },
  {
    "url": "views/Vue/2018/010101.html",
    "revision": "5303ef50a2acb79abffd3f198e7e8b9a"
  },
  {
    "url": "views/Vue/2018/020401.html",
    "revision": "51c5a1aa1021bf6f00b9def7014db200"
  },
  {
    "url": "views/Vue/2018/072601.html",
    "revision": "ff7bcb320f9d5b5dc0bb391078b01b3e"
  },
  {
    "url": "views/Vue/2018/081101.html",
    "revision": "c01e94d3566edc0ad01e9d9a240243ac"
  },
  {
    "url": "views/Vue/2018/081501.html",
    "revision": "04d434988432a9f501cc98a9b1c15ad9"
  },
  {
    "url": "views/Vue/2018/081502.html",
    "revision": "739ebfa87ce189573c059189c0086390"
  },
  {
    "url": "views/Vue/2018/091001.html",
    "revision": "ee32aee40a42c90c3cbf3b55a19edf59"
  },
  {
    "url": "views/Vue/2018/091301.html",
    "revision": "d74116c5a6814f23a53f476c77986c88"
  },
  {
    "url": "views/Vue/2018/110301.html",
    "revision": "f855642d0676441eb7ec4bd9dca165ff"
  },
  {
    "url": "views/Vue/2018/111301.html",
    "revision": "4076031ccc1ddf03d592512b05975f3f"
  },
  {
    "url": "views/Vue/2019/061501.html",
    "revision": "fbbde4a904dac193d1585461d96be876"
  },
  {
    "url": "views/Vue/2019/072401.html",
    "revision": "9083f66675bcdcf0d89bd7c4bbe362d7"
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

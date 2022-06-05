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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "45dfc7dbe08581e715e16d1947cab090"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "4b19516a57dfc516bc0876b5de162969"
  },
  {
    "url": "about-alice/index.html",
    "revision": "a174546daf4dac60106453fa72da16db"
  },
  {
    "url": "assets/css/0.styles.1bb3c49e.css",
    "revision": "f78eb87b42a807678b9a7b6d67dbfc31"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.c9680b7f.js",
    "revision": "b23d39187179c453d3dd065f1315304d"
  },
  {
    "url": "assets/js/11.08cefc39.js",
    "revision": "b139da7e755493eb829ad557091d19fe"
  },
  {
    "url": "assets/js/12.ad67ff16.js",
    "revision": "6d5b156857e525765d0af1801b137e7a"
  },
  {
    "url": "assets/js/13.470ccfad.js",
    "revision": "b432581c2f46fd8efe133f67f57c83f6"
  },
  {
    "url": "assets/js/14.20514074.js",
    "revision": "3580215eda0dd00483d072608f3ad61c"
  },
  {
    "url": "assets/js/15.6cc34506.js",
    "revision": "62052c0c8943f88bb2d9f28d5bc56791"
  },
  {
    "url": "assets/js/16.5f6ed6f5.js",
    "revision": "4ab52055a9041f84e0ca0074c6b12cde"
  },
  {
    "url": "assets/js/17.6d8a1a2a.js",
    "revision": "75a8da3b9d446a9bbd1050d2768e0995"
  },
  {
    "url": "assets/js/18.3e8b8f7a.js",
    "revision": "3688a9c64b3a986e14324d7ee373f8b9"
  },
  {
    "url": "assets/js/19.229c50a5.js",
    "revision": "03d24e61410a19bff05a71f3bcee1b88"
  },
  {
    "url": "assets/js/2.a7ea16a7.js",
    "revision": "7ffa9b2fb39a3ad9774eaa86d3edd598"
  },
  {
    "url": "assets/js/20.761cb18f.js",
    "revision": "20674f01a2b69530c23a0ce82b21d4a4"
  },
  {
    "url": "assets/js/21.2415ed3e.js",
    "revision": "56bc0a2c202669edcc8a5ead61f3608d"
  },
  {
    "url": "assets/js/22.4e163607.js",
    "revision": "8c425558625af4cb31a47790fb3ca26b"
  },
  {
    "url": "assets/js/23.0d3f71b6.js",
    "revision": "7e8ac08399c85cd4712473f048cdb62e"
  },
  {
    "url": "assets/js/24.c1257056.js",
    "revision": "5f78fda0e5a2547420abd97caaf80e38"
  },
  {
    "url": "assets/js/25.b141fd5b.js",
    "revision": "e92a5aeae017226be7b1f06fb6456b97"
  },
  {
    "url": "assets/js/26.104ccbc2.js",
    "revision": "e478c41aa41432dc21301b414a81c72a"
  },
  {
    "url": "assets/js/27.6b570696.js",
    "revision": "01d7beb5f80156e8f1ad1544758afff7"
  },
  {
    "url": "assets/js/28.dbd5a2dd.js",
    "revision": "d8c8556906a80a0e04e8e00a7f8d3586"
  },
  {
    "url": "assets/js/29.06403818.js",
    "revision": "12550f1bb6bc41b6dcf703b52741bc4d"
  },
  {
    "url": "assets/js/3.f276937b.js",
    "revision": "7b942cd6e967696ae5418186a3134a4d"
  },
  {
    "url": "assets/js/30.46894977.js",
    "revision": "b2b1a4efa06f88efac444838fa3243c7"
  },
  {
    "url": "assets/js/31.daf65397.js",
    "revision": "62a8f02bc812e0ad46941fb121fe715a"
  },
  {
    "url": "assets/js/32.46274f57.js",
    "revision": "931b2d666b9555e24a4aa498fd6c14f6"
  },
  {
    "url": "assets/js/33.1aca596f.js",
    "revision": "0203e7fadc1a811db2ccbe0c3cb31b63"
  },
  {
    "url": "assets/js/34.ae467144.js",
    "revision": "8f3a6bef66a9043b0c1636ba555d0abc"
  },
  {
    "url": "assets/js/35.55f0eec2.js",
    "revision": "e702b1332457105738447906210c2184"
  },
  {
    "url": "assets/js/36.05980845.js",
    "revision": "e13ee4a9c7babfaa919e25fc0ad425ab"
  },
  {
    "url": "assets/js/37.10419297.js",
    "revision": "b9105a1184b9a149417a26fce991919f"
  },
  {
    "url": "assets/js/38.58d56d7b.js",
    "revision": "f52ee31f898d79f6c3193bb6793e4d8d"
  },
  {
    "url": "assets/js/39.ce0a8d64.js",
    "revision": "9fad521f40845002009d033654a93aca"
  },
  {
    "url": "assets/js/4.12525eba.js",
    "revision": "051a27ea4bdfb6a3f4167e40f8dae304"
  },
  {
    "url": "assets/js/40.82563041.js",
    "revision": "f300d83405251b8dd9937c4f9097fdd5"
  },
  {
    "url": "assets/js/41.dafa6bd6.js",
    "revision": "0699b078544be74bdad67943e2ff87d5"
  },
  {
    "url": "assets/js/42.7908fe8d.js",
    "revision": "d0942f8b78eb42c8de4d899d4ef3895a"
  },
  {
    "url": "assets/js/43.e07ceed8.js",
    "revision": "536397bf70277cce806729f20f091dae"
  },
  {
    "url": "assets/js/44.ed0e1aab.js",
    "revision": "18daa3b03282f765a100fcfaea423b3a"
  },
  {
    "url": "assets/js/45.6e2e6389.js",
    "revision": "e3556b21f29ffd75c87f004a5ce8c95d"
  },
  {
    "url": "assets/js/46.1699963c.js",
    "revision": "709cf476db09c1713eb5ae0b566674e9"
  },
  {
    "url": "assets/js/47.178bfd43.js",
    "revision": "dd3d31e3dd48e6ffda2395a2a2a38884"
  },
  {
    "url": "assets/js/48.9abd24df.js",
    "revision": "5c0494af3956c26682d29dc535c86dd4"
  },
  {
    "url": "assets/js/49.48dff9c6.js",
    "revision": "dd0f2b169c1fc81b1319b533d41c9cc7"
  },
  {
    "url": "assets/js/5.56546ad2.js",
    "revision": "10619fb4459d3c5e7bfa85a98905c96a"
  },
  {
    "url": "assets/js/50.a9c1b5c9.js",
    "revision": "025368d3354c1a41afee50d946387363"
  },
  {
    "url": "assets/js/51.38d180df.js",
    "revision": "e5db81604d31d2e32d3dddaf4bb7c144"
  },
  {
    "url": "assets/js/52.5c477477.js",
    "revision": "43ff90efe5692038ebce9038f1b16b1c"
  },
  {
    "url": "assets/js/53.6fa6a16d.js",
    "revision": "8b39ac0977880f6765a68dfee6421cd1"
  },
  {
    "url": "assets/js/54.2794b7eb.js",
    "revision": "136f7c9783098f2c14436fe5de258b68"
  },
  {
    "url": "assets/js/55.256f4bb6.js",
    "revision": "d73523661766b2dcfb85f485b3bf4e9f"
  },
  {
    "url": "assets/js/56.967bce29.js",
    "revision": "fec8376abdaacd0ce324c5d426eff034"
  },
  {
    "url": "assets/js/57.cb3460de.js",
    "revision": "cab7428d5807a6c1db6453c945c54a61"
  },
  {
    "url": "assets/js/58.a8214a8d.js",
    "revision": "a138f5215773a20ae3346417d0fdc8f6"
  },
  {
    "url": "assets/js/59.a89b812f.js",
    "revision": "af7b4acae0cf09f68b4c314e484f8e8c"
  },
  {
    "url": "assets/js/6.633eebf7.js",
    "revision": "4370fdbbdf25bcf25ba35cf6945e986b"
  },
  {
    "url": "assets/js/60.6bb80053.js",
    "revision": "0b5b46f4b145c86309318e7180f68042"
  },
  {
    "url": "assets/js/61.0bfbe0a1.js",
    "revision": "b53d5168f92fd35081a68833a1ec4b2a"
  },
  {
    "url": "assets/js/62.f44ba94c.js",
    "revision": "a40e2ff79e889648e2f9954facfefc00"
  },
  {
    "url": "assets/js/63.671bca1f.js",
    "revision": "ad367d26779407e750ea0acab6b3a0d3"
  },
  {
    "url": "assets/js/64.c6c87d30.js",
    "revision": "f6e6b9559cf04035e0cb2ac13bf90787"
  },
  {
    "url": "assets/js/65.6376121b.js",
    "revision": "403ecfb0010881710dc69421509c1c96"
  },
  {
    "url": "assets/js/66.c53b49cf.js",
    "revision": "2f6af1c96b187fd7158d62c0f6ccb64b"
  },
  {
    "url": "assets/js/67.7c33eaaa.js",
    "revision": "842e1dcb23cd26a8faff914028709844"
  },
  {
    "url": "assets/js/68.e5aad584.js",
    "revision": "233b95bc611cfc21aa1fcc9ef76550d6"
  },
  {
    "url": "assets/js/69.8c30ce9a.js",
    "revision": "a68019ada4fa7cd52cf3496c910de2ef"
  },
  {
    "url": "assets/js/7.6b646be9.js",
    "revision": "c592c049af939e8081db8377061e0a07"
  },
  {
    "url": "assets/js/70.182b6f10.js",
    "revision": "be9f7ff131c8d368f172c1f809129133"
  },
  {
    "url": "assets/js/71.88300a17.js",
    "revision": "2096fe36a25e6781f863af2d54f85ba1"
  },
  {
    "url": "assets/js/72.e9be75f5.js",
    "revision": "824256179c6b263c2e5d888fab702881"
  },
  {
    "url": "assets/js/73.79f928e3.js",
    "revision": "ae1d36395868d15fc8a05ecd1f6a7dfe"
  },
  {
    "url": "assets/js/74.2ea8afbb.js",
    "revision": "1987e8ed38ef4dd3db4fef83632ec90c"
  },
  {
    "url": "assets/js/75.9968af52.js",
    "revision": "f6ff0f3cf7afa10af6695f7436e59c6f"
  },
  {
    "url": "assets/js/76.8bbc8770.js",
    "revision": "4506cbb97e2a60811e29f962bf4a04c3"
  },
  {
    "url": "assets/js/77.3532e9aa.js",
    "revision": "ddb7203d5021258974a6f471bdb1887e"
  },
  {
    "url": "assets/js/78.ed95b845.js",
    "revision": "68fda9cc56b1cbd1ce97d5b3a84b153a"
  },
  {
    "url": "assets/js/79.e90277d8.js",
    "revision": "a033ca550d041afc2f5e84e2a3f6ceb4"
  },
  {
    "url": "assets/js/8.f93f5d74.js",
    "revision": "9db35ebd0a6fc4bc32af86fc07cac329"
  },
  {
    "url": "assets/js/80.ff36fd3b.js",
    "revision": "32c5f09b25e90324fcf9d20bb95d0938"
  },
  {
    "url": "assets/js/81.510cc653.js",
    "revision": "3fc853858fb24e58d6d0aadb7734e98c"
  },
  {
    "url": "assets/js/82.8e1e1ae8.js",
    "revision": "a8c19184815e1589b9aade7b2719b7f6"
  },
  {
    "url": "assets/js/83.dfad29ce.js",
    "revision": "952cb334bd01df18f39dc42bda568e77"
  },
  {
    "url": "assets/js/84.019fcc3d.js",
    "revision": "da4caa84033c64804682f1fc098110db"
  },
  {
    "url": "assets/js/85.a17ba462.js",
    "revision": "c9619cf286b869aaf645f403509c4843"
  },
  {
    "url": "assets/js/86.ab7d35b1.js",
    "revision": "598c3b39d78efc2e4d5af4136bf5c626"
  },
  {
    "url": "assets/js/87.9c26de6e.js",
    "revision": "52539beb9f517b7a6c5ba58d9ec89785"
  },
  {
    "url": "assets/js/88.961075b2.js",
    "revision": "b1da33dc7b806c1ee8439452aef4f763"
  },
  {
    "url": "assets/js/89.b238b266.js",
    "revision": "0610d1cf91d2bb25b3c30dca543769d1"
  },
  {
    "url": "assets/js/9.69b7f3f7.js",
    "revision": "fd7b0aeafdd8dc869529b2e31304b440"
  },
  {
    "url": "assets/js/90.018b3d10.js",
    "revision": "7b8b09fd299b2f2963a14bea01b410f3"
  },
  {
    "url": "assets/js/app.f301c85f.js",
    "revision": "a539571cb5f70e108e445c227b5befb8"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "efb2a0feea814eaaad42f97059e104db"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "f79e9e542e32c71fc93112e63169f639"
  },
  {
    "url": "community-made/index.html",
    "revision": "30f466e4e12c038ebb57b9b6d1c952a3"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "d446cd38a8d67af11daf732b6b5cfdf5"
  },
  {
    "url": "contribute/index.html",
    "revision": "698d80a6f2ed27a4aa0b24c7c9d3a58b"
  },
  {
    "url": "core-development/index.html",
    "revision": "b51075ef7680e462bfb3bb017078f385"
  },
  {
    "url": "css/disclaimer.css",
    "revision": "a4ffbe51d2caff27984923c340b6ea60"
  },
  {
    "url": "css/landingPage.css",
    "revision": "a5010a895cc52c0ac13e83a6b6877c6b"
  },
  {
    "url": "css/speechbubbles.css",
    "revision": "26459906382c06dcc5545d63e2bc056d"
  },
  {
    "url": "de/about-alice/GLOSSARY.html",
    "revision": "56afb907d24d678c5ff9220831b44fe7"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "46fade67bc45599ec65a1e608f1e081b"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "67fe6f1427f8d3fa1a9dec0d05f5bd5e"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "2bca6ef6bb1c5b2214f272abe0d9c573"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "2d9846e8ec68c46da414420fd2062201"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "331ecee19a7b61cabe215b7a83e52d77"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "5d5451489e6971c2b39d93026af83252"
  },
  {
    "url": "de/index.html",
    "revision": "490478c5a5eb3fdde9cbec3c98b10ed8"
  },
  {
    "url": "de/links/index.html",
    "revision": "f3cd978b8a71bbe00dcb4b5fc3f5252e"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "cf2a635a4f11d9c78f7ee0e71de4fad4"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "80add8c3948fa8b8b7d4d56072d20917"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "e4c9f0d7217091abc2aa50ea660df051"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "ca4b08ce143b9725551feec79a3259a6"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "5a57ffe941accf3415b798ac821b8557"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "68938d88fe3811ccc025dc6f77b17c53"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "5ee1602462a3c28f0487cb399429b407"
  },
  {
    "url": "de/setup/index.html",
    "revision": "3fbef63956833485dcdcc5d28498f5b3"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "ccc63b033a6978883e8ed860de262347"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "c9436324a8f9bf77e7062c686777a969"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "02d2df06d6f2ae78c3653be598828674"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "0198008dabd645ccacf0d6656391bf9c"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "f5c697aaf01a15ce9a47e6b888549b66"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "dbfd80ce64002e8561f125a2edb7fc3b"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "040e0f3a2966f8c22cc5fa3e4d8a1b1a"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "6f291f57ff15e030b0e8a6fe4390d528"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "7a744fff672acc1120b7b1a9ec40a984"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "c6aee3b14eaf76290289fc432362884e"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "276d48e1d9a548864936629a78f00142"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "00fec5bfa00786faafbb2ab90d4b0bb3"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "410cf9ded120a61b9511f454da2c9173"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "fa23e1388cb99de18f62f3b82405663a"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "a49304ad4d4d44cca1f2c82cc2524f98"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "0576549f946095ab80c482abd76bb5c4"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "a71058c915242d804befb7980eb1e397"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "225ff36cde4c2fad5455f140f7a54ffb"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "7f22f222379a49030673f24b4b8342c1"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "30b7ada7d80266651e14c6f8acea5c11"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "daa7e080274b62ec0cad0233dad8af01"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "c787063e257782710ecef1680d5736ad"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "9f3f273a58dd8e9210e560491cc1d12b"
  },
  {
    "url": "de/usage/index.html",
    "revision": "e7933fcef553273adabee7b3efa78851"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "3a598637f9dcfc2a822574db972984c6"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "a1661825f203bb7155af1d34d4062aa1"
  },
  {
    "url": "icons/favicon-120x120.png",
    "revision": "5005adfac255e800b20a7d2233cb27d7"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "91d2bf76f70aff20be8a381c6c32a9f4"
  },
  {
    "url": "icons/favicon-144x144.png",
    "revision": "e765c130f6a5d35b68b43d6433606b27"
  },
  {
    "url": "icons/favicon-152x152.png",
    "revision": "c82a6c3c802d675f1513216e7442c4f4"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "8ec418f3a05eb417b381836a74f9a869"
  },
  {
    "url": "icons/favicon-192x192.png",
    "revision": "30302cdff0b55dd8e28ed58a8a1a0bc0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "d948094050d93f170e908e3b9edcbaf1"
  },
  {
    "url": "icons/favicon-384x384.png",
    "revision": "c0feac3c42f08114bae1eee3f1407e58"
  },
  {
    "url": "icons/favicon-512x512.png",
    "revision": "e99acc60dfa1f5bcd7860fcf5e6d114b"
  },
  {
    "url": "icons/favicon-64x64.png",
    "revision": "340a4256ad6929ec8e4ca10311aa0583"
  },
  {
    "url": "icons/favicon-72x72.png",
    "revision": "1e1d2ce565256ce2cf2037da035a3eab"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "7c3e251b2b29df98f97e936ceeb9716a"
  },
  {
    "url": "icons/maskable_icon.png",
    "revision": "88d292d3d098172d45af701dbaf3b902"
  },
  {
    "url": "images/aliceAvatar.png",
    "revision": "fa47b5dc9505cc80f7583cac8737ec00"
  },
  {
    "url": "images/badges_demo.png",
    "revision": "cd80ccbb0ae176b263524d27d4df433f"
  },
  {
    "url": "images/badges/license.svg",
    "revision": "e8827371f66d0b2f0d6577882ecf8805"
  },
  {
    "url": "images/cloning.png",
    "revision": "2f85624617e7d159bb6046cd11fbfd22"
  },
  {
    "url": "images/dependencies.png",
    "revision": "51b9763a0d3a25b3dbb4ebbd4ba7c89a"
  },
  {
    "url": "images/devmode_enable.png",
    "revision": "7f3010c7cce017b73e48509c23ebdea0"
  },
  {
    "url": "images/devmode_git.png",
    "revision": "4bbe647d45f473e2588f680704a648a7"
  },
  {
    "url": "images/devmode_git2.png",
    "revision": "4b8136ffad726eafa92df9b8234ca1cf"
  },
  {
    "url": "images/devmode_git3.png",
    "revision": "1c271107f84cab317d74ecc8f3857076"
  },
  {
    "url": "images/devmode_github.png",
    "revision": "8b0586ff67a43a464c958a8926e1e54e"
  },
  {
    "url": "images/devmode_instructions.png",
    "revision": "79465d9d6268c214b094d7315aefb7ba"
  },
  {
    "url": "images/devmode_skillInstall.png",
    "revision": "58fdd35c9837a48a26c99ac456d8e56d"
  },
  {
    "url": "images/devmode_talk.png",
    "revision": "6a88f08c1cf462f1951b61120cf0dcb9"
  },
  {
    "url": "images/devmode_training.png",
    "revision": "ed113d17bf9799ad278b6b8d978e4f6b"
  },
  {
    "url": "images/devmode_training2.png",
    "revision": "2a1c093106c5d8b733a8c9b633e236f3"
  },
  {
    "url": "images/devmode_training3.png",
    "revision": "34b4343aced39cb52b14c08b0fe9d2d7"
  },
  {
    "url": "images/devmode_training4.png",
    "revision": "2aceba610fe0312340991d9f31fd344f"
  },
  {
    "url": "images/femaleAvatar.png",
    "revision": "761d395d254ec6591d8f57a8e68cee9d"
  },
  {
    "url": "images/femaleAvatar.svg",
    "revision": "5bbbd436492df8d309e94502e29e6a3f"
  },
  {
    "url": "images/gitlab.svg",
    "revision": "fc06122e8970aeacaf7952d3651c5da9"
  },
  {
    "url": "images/inspect_code.png",
    "revision": "921a84071153bcfb5588ab702d86f616"
  },
  {
    "url": "images/jetbrains-variant-3.svg",
    "revision": "86e2dba1a91e7b4c1337c99ed01f07c2"
  },
  {
    "url": "images/maleAvatar.png",
    "revision": "7e630c2249143ff00a1b14e578a264f8"
  },
  {
    "url": "images/maleAvatar.svg",
    "revision": "0a38c1531e2310b43a9b682a146a5bdc"
  },
  {
    "url": "images/pipeline_example.png",
    "revision": "e48fd5b5446db619ffdef412d13545dc"
  },
  {
    "url": "images/projectalice_banner.svg",
    "revision": "e11c4d335c56da9e183852d40154792e"
  },
  {
    "url": "images/projectalice.svg",
    "revision": "4f23cca9a7c3e5cf413ec2fa9db423f2"
  },
  {
    "url": "images/Pull.png",
    "revision": "315e4b2cfd7cb8f286b08acfc1e4e16c"
  },
  {
    "url": "images/Push_Pull.png",
    "revision": "9af253909fe0568423392bacfc2f32fe"
  },
  {
    "url": "images/reformat_code.png",
    "revision": "b8bb30a6eba806da5ca0a75507b0bfbc"
  },
  {
    "url": "images/schemapath.png",
    "revision": "9387fa767a4ab4f86f1c9d2f272c60ca"
  },
  {
    "url": "images/sonarlint.png",
    "revision": "7494b1005e3663f8eebecdfc42ac5a5d"
  },
  {
    "url": "images/sonarlintalice.png",
    "revision": "072ccfd0b331fbd73957374f8c717922"
  },
  {
    "url": "images/sonarlintserver.png",
    "revision": "c7668754482cb4f0e04181cb2ecc6f7a"
  },
  {
    "url": "images/umbrella.png",
    "revision": "08ed555ace234e6a28f51eae80723fc1"
  },
  {
    "url": "images/webinterface/001.png",
    "revision": "5023035d80d5cb3cbdbfa2facbd9a396"
  },
  {
    "url": "images/webinterface/002.png",
    "revision": "77940abc28e7ff9df132e4f347b31d8b"
  },
  {
    "url": "images/webinterface/003.png",
    "revision": "2e7a2e9107a163b9f37fd2d4b4c8645b"
  },
  {
    "url": "index.html",
    "revision": "0e9f27e30bac4132f2f66c544ab249dd"
  },
  {
    "url": "links/index.html",
    "revision": "f3e33a4e1d6b8b308b9721fc9166aec8"
  },
  {
    "url": "satsetup/index.html",
    "revision": "6cf08bf6667d6ceab8ce13762ba427a6"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "e9a397e85a6e49c932e5748cdf630b0e"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "7d5bca478126a1f508b16f1143462392"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "c8585925b01f294dc573e659f67a1c22"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "020fa2a3aae48933680b337e13b72756"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "2a89a6c076ef40d5e06854c5f66dc927"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "6d13ec26efb5d2abe0ea2193ebfe5526"
  },
  {
    "url": "setup/docker.html",
    "revision": "ed990d15827dac74319271b927cb5571"
  },
  {
    "url": "setup/image-install.html",
    "revision": "222f693c8edc876588603473c30fda7c"
  },
  {
    "url": "setup/index.html",
    "revision": "a96e673e1ef21959dc260c11d14ff9c1"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "b2817d670a6112823126c0b120293cf2"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "1b8416968406f4ecd04096df9d18f204"
  },
  {
    "url": "setup/requirements.html",
    "revision": "0cff309f72def52b23fd096fc5f911a9"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "eaa2700d0d8c4113d0f79d5729ac0e82"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "54bed74953c0e1ca04b5a58e9d10becb"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "c71dee40db7440a36e82aa1ebb53f7ca"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "8c51325cc514219449d1a53fe31b17fe"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "883ea6be4c0d4391bedbf83cc7465d15"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "12589e01cb1a4a2dd4d0f6714a16f664"
  },
  {
    "url": "skill-development/index.html",
    "revision": "70c1f36c3abbefe2e037736f72a849ae"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "c6b8f8e76bcd1186b6e98dae7a78a282"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "64f34bb4521fe27b294f6501d207ae9c"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "0d48a2b55f2ab54a13c916a98e64a12a"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "54ab9e631d4aad35ea6bd796c322b279"
  },
  {
    "url": "sponsors/index.html",
    "revision": "a2c13a73c6d74ee3cbe92f2f6b5e9ce0"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "f52966e66bdd6a0fc0c4f16173ffab95"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "5da9e8a2b020ffdc3b2dabb639849fdd"
  },
  {
    "url": "usage/index.html",
    "revision": "50882d722400b7c241a23359bad9578b"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "a5617aad3623f451056540dfccd61cc5"
  }
].concat(self.__precacheManifest || []);
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

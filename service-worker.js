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
    "revision": "c2077e2ff5db8a846ab0f5a58e70bcd5"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "8650c0bb5af947af005bf500b5f0ceee"
  },
  {
    "url": "about-alice/index.html",
    "revision": "045203c86541ed6d55ab10f4a320e4c0"
  },
  {
    "url": "assets/css/0.styles.7535d8bb.css",
    "revision": "3e59032ae47973e3638afd33c9edd669"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.7665418d.js",
    "revision": "ba5b5c3375e1d8165c062a82e9189dbb"
  },
  {
    "url": "assets/js/11.607faa84.js",
    "revision": "144779d7838df1d484c42967c271c431"
  },
  {
    "url": "assets/js/12.399e4e7e.js",
    "revision": "a2ec7a4e8ae073eb8036758443472872"
  },
  {
    "url": "assets/js/13.2be9d451.js",
    "revision": "eb0ab595d77976ae523bed3ea5dde944"
  },
  {
    "url": "assets/js/14.c2ef3879.js",
    "revision": "b16dad14ce3ddbd85e62c7370dbd516d"
  },
  {
    "url": "assets/js/15.a9c224cd.js",
    "revision": "ff805814957e7f94d747d14ec90fabfa"
  },
  {
    "url": "assets/js/16.980ae1df.js",
    "revision": "80df9fd03ffe264379ebfa861b30ed5f"
  },
  {
    "url": "assets/js/17.58c1857b.js",
    "revision": "6217f8a662e34bd3576b8ed48b726524"
  },
  {
    "url": "assets/js/18.b4399973.js",
    "revision": "22798c580a092df87fa5ed592bcc3a57"
  },
  {
    "url": "assets/js/19.618265c7.js",
    "revision": "edaa80df66505c765b7c6e863cb086f8"
  },
  {
    "url": "assets/js/2.e49cbc56.js",
    "revision": "898f2b0471743ce98b7233dd0513829f"
  },
  {
    "url": "assets/js/20.aa43f2b4.js",
    "revision": "9ebac0757eaad4f8af1ccbb55173373e"
  },
  {
    "url": "assets/js/21.5166fa75.js",
    "revision": "5678c1a92447d3f8b154b38cf322920b"
  },
  {
    "url": "assets/js/22.e78111e5.js",
    "revision": "e661c8f6e763ceaadb528eee101ccf7f"
  },
  {
    "url": "assets/js/23.417cb6a3.js",
    "revision": "2e7ae133350933eff2d5c9172b2298d0"
  },
  {
    "url": "assets/js/24.5d5e573c.js",
    "revision": "dcbb4f9855aeb35b18833542e59ebd14"
  },
  {
    "url": "assets/js/25.365a49fd.js",
    "revision": "e73703332d4af718cd7ee27735a616f0"
  },
  {
    "url": "assets/js/26.8267584e.js",
    "revision": "8d425fc662a0a33d21c776a424c0fb9b"
  },
  {
    "url": "assets/js/27.f1b37830.js",
    "revision": "e5431f244ee673fa6d3a830ac9376b06"
  },
  {
    "url": "assets/js/28.08177017.js",
    "revision": "277d9eb8d7ee16eecdb19b0bdfb68541"
  },
  {
    "url": "assets/js/29.d7df12c6.js",
    "revision": "99121d1c8d344caf53537387e1ebddf6"
  },
  {
    "url": "assets/js/3.0843c390.js",
    "revision": "d44d51828a279a7b217de8cebca83b4e"
  },
  {
    "url": "assets/js/30.1ca5ac87.js",
    "revision": "59ed828914d00dda36381f06b68f89de"
  },
  {
    "url": "assets/js/31.b3698c4c.js",
    "revision": "0e1d157faec11b1d71c83055fc79c0bf"
  },
  {
    "url": "assets/js/32.447767be.js",
    "revision": "eb9c4ceb8c2a8ac19a46b1c5dddf12c2"
  },
  {
    "url": "assets/js/33.d79412da.js",
    "revision": "1285f5942c0aa75a5fee1b83ae04d4d7"
  },
  {
    "url": "assets/js/34.ab5e3b49.js",
    "revision": "5c8ab4037a7eb912d7839f0ddfd1f38c"
  },
  {
    "url": "assets/js/35.a27cbf4d.js",
    "revision": "e35fd08cd0f86587da4e537b1788285f"
  },
  {
    "url": "assets/js/36.0184cf97.js",
    "revision": "54633c84ac1165076e6970ebf27d8fde"
  },
  {
    "url": "assets/js/37.a3a8ec32.js",
    "revision": "d5622918e7f55dfcccd812fe41ff2127"
  },
  {
    "url": "assets/js/38.9d32346a.js",
    "revision": "9c1a9e74454a6b12dd964d34511a5dc3"
  },
  {
    "url": "assets/js/39.cea5f259.js",
    "revision": "5de36dc7dbfda3b9b30aed2f9b18b9c5"
  },
  {
    "url": "assets/js/4.c07cc05c.js",
    "revision": "95cda4a0eec3ca1c68413880ca8eb7bc"
  },
  {
    "url": "assets/js/40.6fd3a8f9.js",
    "revision": "fc9303adbaa315718bf5e9e9e4a325e3"
  },
  {
    "url": "assets/js/41.f713917b.js",
    "revision": "0a29d89528dbd7c9551aa77fd111909b"
  },
  {
    "url": "assets/js/42.a3260615.js",
    "revision": "25360ab09fd2a70e64dc216ebfd9b6ee"
  },
  {
    "url": "assets/js/43.a26292f1.js",
    "revision": "095c43d20837583241f9ac329d3caeb4"
  },
  {
    "url": "assets/js/44.89df1cc2.js",
    "revision": "16833db62bc05b9669bef8709ac5d8aa"
  },
  {
    "url": "assets/js/45.abb9e3ac.js",
    "revision": "22e4cdf6d4e9748126834775f42a7e7f"
  },
  {
    "url": "assets/js/46.8312254c.js",
    "revision": "de0f054fc73d4504149f9c63ddcd4413"
  },
  {
    "url": "assets/js/47.c59b906e.js",
    "revision": "62b08949675904383b1dcf4f56c3cd02"
  },
  {
    "url": "assets/js/48.28ef6719.js",
    "revision": "879e8ae4d7bb71a2a20b96b1383861ce"
  },
  {
    "url": "assets/js/49.e41af724.js",
    "revision": "c9e3593959aab5297867aa3791de7baf"
  },
  {
    "url": "assets/js/5.558fb95c.js",
    "revision": "ce63b661fc438a737c389a6189ffa690"
  },
  {
    "url": "assets/js/50.2a3aa55e.js",
    "revision": "6b91910b08e685e84cca157eec015a8e"
  },
  {
    "url": "assets/js/51.6baa1571.js",
    "revision": "dc93f1a82072956dc97b6c15336c6a95"
  },
  {
    "url": "assets/js/52.ded6f122.js",
    "revision": "00ca332fb91da996440e43ec6ee1d8db"
  },
  {
    "url": "assets/js/53.62679872.js",
    "revision": "81da16b2a593cbf8bcb7883bb9890c49"
  },
  {
    "url": "assets/js/54.4cdde61b.js",
    "revision": "042bdf631c5fe293120c0fb64b8f1a6a"
  },
  {
    "url": "assets/js/55.af5424f6.js",
    "revision": "6509d9bd0ca47874fcd0d04c05183669"
  },
  {
    "url": "assets/js/56.2a2112d1.js",
    "revision": "e22e38d45de3d161ef8056ecfe617ad8"
  },
  {
    "url": "assets/js/57.cbc367fc.js",
    "revision": "f07f7d0b30b96667be496eaf3f543332"
  },
  {
    "url": "assets/js/58.2c9ea4b3.js",
    "revision": "4e2a0bf99c5667018d084084fa722a20"
  },
  {
    "url": "assets/js/59.20cf133b.js",
    "revision": "685c27dc38f34f3f08d383266d28ba7e"
  },
  {
    "url": "assets/js/6.8040558e.js",
    "revision": "822169866e03d8177a6ebc1d9aa1fa4b"
  },
  {
    "url": "assets/js/60.facc31e4.js",
    "revision": "a0bd513ef68d8f788c4cdf7dfe096898"
  },
  {
    "url": "assets/js/61.a74ee735.js",
    "revision": "5f8df2ed4549893011f2f7e08722ab8f"
  },
  {
    "url": "assets/js/62.73a32650.js",
    "revision": "aa0e9784d908d2e11842894c9c27991e"
  },
  {
    "url": "assets/js/63.64d6c0ce.js",
    "revision": "521957d63fa72e03417914115928b3f4"
  },
  {
    "url": "assets/js/64.f81e65c0.js",
    "revision": "6a0c264e2203a37cd10bb45ac4efa26e"
  },
  {
    "url": "assets/js/65.6de37e65.js",
    "revision": "b26928b87493abc902481f2e0c283898"
  },
  {
    "url": "assets/js/66.9a9172cb.js",
    "revision": "1447db59a799ec46f50f0491e323b7ad"
  },
  {
    "url": "assets/js/67.5c35ec18.js",
    "revision": "b19c0697b363b6fce1b5b5e231bf6daa"
  },
  {
    "url": "assets/js/68.526171d5.js",
    "revision": "30090ef015bd66006fa4de54688774af"
  },
  {
    "url": "assets/js/69.64cb0eb9.js",
    "revision": "07cae1ffeabff314a4ade14947c95a76"
  },
  {
    "url": "assets/js/7.5e1effe2.js",
    "revision": "cb36a94332e6bee24a2939e1530adb9a"
  },
  {
    "url": "assets/js/70.063efd18.js",
    "revision": "9ff26d2d5c4836c5e5ef561acc5e1885"
  },
  {
    "url": "assets/js/71.259f3ffd.js",
    "revision": "3bcbd64ab07d6f821a695ea5b70664b4"
  },
  {
    "url": "assets/js/72.ff9c0434.js",
    "revision": "c9648ea04ed83d2de13ddab3c33b7bf7"
  },
  {
    "url": "assets/js/73.550397ce.js",
    "revision": "cec7dff80295f5bde87ca00b9c39a71e"
  },
  {
    "url": "assets/js/74.0e7cc18a.js",
    "revision": "219307f9de8b2bc0c0d55a83813f1c6a"
  },
  {
    "url": "assets/js/75.ced8c63d.js",
    "revision": "e99e3fcaad8a6cf4b476f22b396defbf"
  },
  {
    "url": "assets/js/76.66cfde53.js",
    "revision": "3e0e17628ffb542626de31c194b84d5d"
  },
  {
    "url": "assets/js/77.8e9de700.js",
    "revision": "0facd44df7369b33d965c7d9accd8c94"
  },
  {
    "url": "assets/js/78.feb938ad.js",
    "revision": "299b31c2f7330f18933828d1d932fa8d"
  },
  {
    "url": "assets/js/79.525c36e2.js",
    "revision": "60db936571fd9ea73f4fbd61c0964d38"
  },
  {
    "url": "assets/js/8.c0930a3d.js",
    "revision": "4e191122adb2b03eda85f35044574f8b"
  },
  {
    "url": "assets/js/80.ddbe6494.js",
    "revision": "4798d2fc7b2318fafa9d69f8b4e9563f"
  },
  {
    "url": "assets/js/81.5b256260.js",
    "revision": "96cafbe26b39fefa2ac9de075f77f1de"
  },
  {
    "url": "assets/js/82.c33560e1.js",
    "revision": "0e465530fc4998574c0c06c7c0d7eaa3"
  },
  {
    "url": "assets/js/83.667f6d9e.js",
    "revision": "524b973bb2f0dd15a8cc85c1d023ea28"
  },
  {
    "url": "assets/js/84.6c7ac9c7.js",
    "revision": "9ab8c925015f84497f616a0c0504ae4d"
  },
  {
    "url": "assets/js/85.b3c863ff.js",
    "revision": "0245a2bdc8b29458e4d4648032185303"
  },
  {
    "url": "assets/js/9.7232c29e.js",
    "revision": "813b6cabd1711b4d54f93dcf79f94555"
  },
  {
    "url": "assets/js/app.b1568b33.js",
    "revision": "5d4f94057caa39a5aa72170c288594f7"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "05b9907f8eb1220a608cdd4602ccbf0b"
  },
  {
    "url": "community-made/index.html",
    "revision": "23168868774b66aed02c445395d80ab6"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "8bff768619cfe8fed480df5a970b1c18"
  },
  {
    "url": "contribute/index.html",
    "revision": "d67a65fbbb8ec5666c1c3e31daa31c57"
  },
  {
    "url": "core-development/index.html",
    "revision": "4e9ac2b16e43ad30fa19cf690c235cbb"
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
    "revision": "1842134973f481ec7721157503e669a5"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "ccfea18a56996ccf4d354944d477bce6"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "ce10ec76dcf9bc0ea3647b4c251a1dd4"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "7687016ca7f127d329516e7c8c975908"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "a0e1ef6cf8b7605c6d4e3fbc2e8e453d"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "d556b38613984a30328d28ee3b05e502"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "38dd7d17dc86703c8f7a6aff09f0ee2f"
  },
  {
    "url": "de/index.html",
    "revision": "734b3611224f64db7a64d3a4ef5398aa"
  },
  {
    "url": "de/links/index.html",
    "revision": "745f50514e6a7118e71ef92c7ff7f892"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "ad4da9a2a472d3cf4933a373c0c2cb56"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "7cd0d82a72622d0107f464473fb4a42e"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "12ba5c3332bae72022e3d94f1e35cb95"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "bceb9c5b97bc1797554e36948c34536f"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "a543193c5f6959bf15082581db21ac29"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "bf5995667a898cc1f181eebfae97d799"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "fc038b5200590ecb8e4331171a87bfb4"
  },
  {
    "url": "de/setup/index.html",
    "revision": "457ccf62b89eabb2a570a780507e5fd3"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "50c595606240f6a24299464a9b8dbffb"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "b1db2ae29964ffcda9746cf58fa35051"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "27e0838ad007cfe65682d0c51bfbe006"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "8740456c1df84a2f32864600868cf6ef"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "f87e3047156fa110d3381501229fd2ad"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "94e6967d0f26711a48ed6993aa991cd8"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "ee3247f93505d87a05bc50fa5221b895"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "ca4bd1475f232f743cdb8913829ce636"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "5cc670094433d49d358e4c9d32768695"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "93a344b1276e43c998388770a61428b8"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "7eca2488d8b10a88b7eda25067261dba"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "e05c10c68cad7cc794331b778028bccc"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "469ab36fabd5f449e622f4f37bd2a77b"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "26dc10d14f2e6fb1f7fab17a1372a378"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "44bc054e40afd089d5c059f0050e450a"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "c3618c099f394869ca78cf7a97d41370"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "e2622a2a8c43d7bdf53763084f47e835"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "db6341070d4ba3fcc4b9fa096078df4f"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "adc5cffc579a3ef55ebc5407c513b9be"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "4a008afa0dd25443336b0864a2cd275e"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "cf89178b75b132c785d9361034188e12"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "41af7193b9090b55c71d967eec6f0e1b"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "ad04461978fbbbf80b71b946c8964dde"
  },
  {
    "url": "de/usage/index.html",
    "revision": "32e1d1a1339036fea19adc9b4f202810"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "bb931d27ee4f4939834aafad21e38150"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "a1a21008630a6c1e2225d80223e3df05"
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
    "url": "index.html",
    "revision": "a8b130fd7747ed878934e84558ad3569"
  },
  {
    "url": "links/index.html",
    "revision": "b01ca6afd0d8ab67fa93e00c8970e15d"
  },
  {
    "url": "satsetup/index.html",
    "revision": "eae7fe253f1ab1d32d2eb7278fa3aaf8"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "a1010b28b899585735be9f1f43e50440"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "bb753ad3a717f99c167feae4cc59719e"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "ae7999273a753dee3fa306a277c92a7b"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "0778fb12f8ea7bbc9837dcd0f34a7282"
  },
  {
    "url": "setup/docker.html",
    "revision": "ed09e8983df887fb78b80cab8ac7cb58"
  },
  {
    "url": "setup/image-install.html",
    "revision": "251d61e302d44a6b3ffe55be3f869d48"
  },
  {
    "url": "setup/index.html",
    "revision": "e809c7ca4d18a87a24bd5e300d6c0484"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "b9cebb57091380025a836246d173eb6a"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "187de9398745551d12a08492f2de40bd"
  },
  {
    "url": "setup/requirements.html",
    "revision": "98989d16f128329578242a9dea2bc839"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "cbcb8463e589afe90105ecb9997f7b93"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "dd26071ff4ea873b7bbd7fc586e7f81b"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "808a7af37cfe0a84b5e310ac11497c30"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "5655a4887776a041060a47f80b2a5354"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "32bc5b1ea895f5ae2079f47226f69c9e"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "f6cbb9c502cd2ff092241bbe84d8b636"
  },
  {
    "url": "skill-development/index.html",
    "revision": "30b1f5be45a5d28b83af8cf318017f83"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "44229fd590c622eb14eca41a6661681a"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "24ea9234e495fcd28311627bcd2d6918"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "5e3e0e459004c40a1e6f68d1082fb02f"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "7ddd45abf8bb69a7c24f65ff4924f81f"
  },
  {
    "url": "sponsors/index.html",
    "revision": "4d037919bafbe81499d130ca8276446a"
  },
  {
    "url": "usage/index.html",
    "revision": "e7f6c3a1292790df71f88705f867808c"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "87a5dcdd5e3c09d3cd77bd313ea1d22a"
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

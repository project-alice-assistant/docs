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
    "revision": "434d73bf633fa290da36eba187239022"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "692428d7230f52d9f39e761513477809"
  },
  {
    "url": "about-alice/index.html",
    "revision": "4d7d7a9e4f7a46b0d995d32531cfa9f8"
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
    "url": "assets/js/82.c84ed049.js",
    "revision": "e198b0dfd5d32dee56581cdb4d28260c"
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
    "url": "assets/js/app.6cf5bb79.js",
    "revision": "3019f59099e212c19abc415eb5c2eb8d"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "2546889631256b738e7e235bcf3cd5fb"
  },
  {
    "url": "community-made/index.html",
    "revision": "6ccb375f8365946c1cc0621508f47c58"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "6b92c3a74da5b6cd419b0a778a068346"
  },
  {
    "url": "contribute/index.html",
    "revision": "80b61ee540928913bbb4c45a47a834b4"
  },
  {
    "url": "core-development/index.html",
    "revision": "9d11bd1c1d2fdc1523471a453c57463e"
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
    "revision": "a4186f70d579f44e8895265ab6d06ab9"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "b0cc140b5a7051fedf88e46c9bd3b5b3"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "25aeed41623a90e4d8794adc95f99fc3"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "e7acb9fe33c73857d8767f86b63e5a02"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "dd08fcf85afcb060b2bc425c24ff9650"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "c0e414c0ec84837c26acaa055afe7014"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "434338b04b785f1b03a18599eec7f9a0"
  },
  {
    "url": "de/index.html",
    "revision": "e8f393ae363498fab93f4fddd303b4b6"
  },
  {
    "url": "de/links/index.html",
    "revision": "d46c0de81384e4c0c029cb49def4bc40"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "a4b9e8915b50774913e55fa2717350fd"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "4773a222becfbd2f24284a16681da29b"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "60c41ca95e86f89b36ad7ccb1453d52b"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "fb047c3ca85ba9d33dcfc4be72462bc2"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "69f92080ca6bff95b1f6f35910918536"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "4b8596eee7ff5cacbdd023a4a90cb1df"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "4ce2b9fc3957c931e1e0f3dad0a9e904"
  },
  {
    "url": "de/setup/index.html",
    "revision": "4bfa2df44b8fbb2c2ae61113085b1893"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "6629ea2ca3e6330bf9b7f9dddef49e5f"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "c671b0dcdf86521bd10f0de5c9384cd4"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "dedaad222254d1476a92352a02752f30"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "e1c157848a6029ec823cb7870653716a"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "1ea09113d3ff38766cea6d06f1b00489"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "d81b672d31ca84e0464b52245d10c84e"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "63d09da1e78c5b86b71753564d5aaa09"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "b48ff013d65a892243fc6497bc25fdfb"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "ebcf58ed846e58557ca0435a1069f2c7"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "e7c04ecc1fa0fb2019372d0b90365f1c"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "80111227e8c3c3d034016165a8d09a0f"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "da648d417b13e77376bb27fc89e9a1a3"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "9d4d934dc81244284e6dc3214c70fa7d"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "ff7d00aeaf9424872bb831ba02855bc0"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "703b572982fe2e52d3c6ab9e4b6095de"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "b3a7abb9afaf274bb7d01340b1a34295"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "3f20d986d21e81896b63bdd1122cfe6d"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "ccf32fa12d8a3f951583fa4185944c14"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "044f71b0715fc75e21a1b10246010d66"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "e443ac2eae52e9492b470ecd260685b0"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "869acc3d89e9534699f456666fdeb68d"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "094db65c288d06696f338c5c2fe3d143"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "ca172e3698587f34f9acb0cd1ead8517"
  },
  {
    "url": "de/usage/index.html",
    "revision": "2715ab2b027b1b937a169ed2bde61419"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "a72151466dba5bea4bf343e23be8ec0a"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "95af49a13c6d8bb265b0c0ab89422afd"
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
    "revision": "ee8765ede23d765d59a073cdc9e6fe20"
  },
  {
    "url": "links/index.html",
    "revision": "37f495b41191d542584aa013996a9f8f"
  },
  {
    "url": "satsetup/index.html",
    "revision": "57cc1f0270e2a25429e091c4ba988dc6"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "32a61f539144363616f42361fdb43d1c"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "9d6b22bc3bac9bf72ee304707157598d"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "7db17fac2ab9a1e67f7e570c7f50e769"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "5db0f0d6f4e215220c791b94f185163b"
  },
  {
    "url": "setup/docker.html",
    "revision": "e9731ed12a56c99d9684d30523624eea"
  },
  {
    "url": "setup/image-install.html",
    "revision": "0c14c9eefcdbeda5ca39cf43c2c6b331"
  },
  {
    "url": "setup/index.html",
    "revision": "d16559c445434d6c90e908c45e4d5397"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "7ffef303a5d30c40b37ef072d5226aa5"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "0b4866adec4024192bcd296fde0831f7"
  },
  {
    "url": "setup/requirements.html",
    "revision": "2bc2928a4a0fc9712f86b236b243f688"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "e06f26c2ffaccee9160250675cb9a9f3"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "04543f76b5b8b9f7e3218c735a05122e"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "ff57e6a12b28bfb1d6142f01555d4bdd"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "25c69c5dda0b0b4ca4f1980ab2a62cde"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "185cd1a92bf837ce06f34f9be76d6f87"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "4d135e0f8477311236c947ed0159fd93"
  },
  {
    "url": "skill-development/index.html",
    "revision": "11235ae5a6e5dd344f5966ae167259d5"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "fb52b9f400c1e9b7bbc689f86ff8d15b"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "7a6813850f620d2582c64caac0cc666b"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "79e76d87b8d12f028a75172e5c242d9f"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "7f95d5007feca11c7e8753f508c58342"
  },
  {
    "url": "sponsors/index.html",
    "revision": "94900734e0e33576c45b731e0291ad96"
  },
  {
    "url": "usage/index.html",
    "revision": "a3119749372502a7abc943a37f1f83c5"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "50e616811c45662fa62ecea426ae5288"
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

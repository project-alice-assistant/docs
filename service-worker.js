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
    "revision": "3596641da901c9de7ddf6bf57047a853"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "fa92ee3f7b6013a90fe4e9ef28871147"
  },
  {
    "url": "about-alice/index.html",
    "revision": "4e38828a91979dd5df3272b22cf20ffe"
  },
  {
    "url": "assets/css/0.styles.cb822780.css",
    "revision": "4ee3ab852c1c58be7b873cc812f25a78"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.05c3f570.js",
    "revision": "8db707d901f60a50bf96cd3408999fab"
  },
  {
    "url": "assets/js/11.deddad27.js",
    "revision": "3d705a91b73171fe1d5edfa414a9af63"
  },
  {
    "url": "assets/js/12.1d631d19.js",
    "revision": "f992be8fb17653375b17791f4d61b190"
  },
  {
    "url": "assets/js/13.dbc1a904.js",
    "revision": "7988d8936b6feb46c8fd123c4297c337"
  },
  {
    "url": "assets/js/14.bc1b001c.js",
    "revision": "8ad6be797ca4677f7ec7746cf0ebe279"
  },
  {
    "url": "assets/js/15.0c617e39.js",
    "revision": "6a406dc87b9cb969e41c17ae802da925"
  },
  {
    "url": "assets/js/16.c9622ea2.js",
    "revision": "3e67e7e4e92d9f97b385a0cb49278a29"
  },
  {
    "url": "assets/js/17.d8218860.js",
    "revision": "d0572ea3ba95d21abbee0731c6a71e30"
  },
  {
    "url": "assets/js/18.bd6901c6.js",
    "revision": "362806ca731fe90ac6850d8250d540ee"
  },
  {
    "url": "assets/js/19.4f61b35e.js",
    "revision": "c79e0d0edc3be363e253e8ccd0f3fcac"
  },
  {
    "url": "assets/js/2.24430068.js",
    "revision": "d0dfeebbd652ebbd874dca1fc0dafd97"
  },
  {
    "url": "assets/js/20.f614bafa.js",
    "revision": "e0e8f1e3cdd9542b453e0be80bf32a0d"
  },
  {
    "url": "assets/js/21.ea0cd103.js",
    "revision": "2a5f52c3ab5ded58a1cdd13497753908"
  },
  {
    "url": "assets/js/22.f08e9952.js",
    "revision": "6d24a21ba16f2ebce8eb29cfc4c18b4a"
  },
  {
    "url": "assets/js/23.f067337d.js",
    "revision": "538722781e62807e02bf2f389dfe978b"
  },
  {
    "url": "assets/js/24.455d8f70.js",
    "revision": "752f8d69808c3d8287666d731d2aa9d5"
  },
  {
    "url": "assets/js/25.2c2dad70.js",
    "revision": "710351989c1a06c7de63cd019096ad5c"
  },
  {
    "url": "assets/js/26.05130d94.js",
    "revision": "83a928aa7b24d9026dd3da012c1a258e"
  },
  {
    "url": "assets/js/27.f32d3c92.js",
    "revision": "6adf61f3eb094b6d2db228cd3edd096d"
  },
  {
    "url": "assets/js/28.7ddcdeb3.js",
    "revision": "f3f543b641fd9be1d2f3ebfe060ac940"
  },
  {
    "url": "assets/js/29.1664e1b4.js",
    "revision": "4642de53431518e279583cb62e50bae9"
  },
  {
    "url": "assets/js/3.7d96c1c9.js",
    "revision": "080348933b8c323aefeed3b5c5086e8a"
  },
  {
    "url": "assets/js/30.9c7e4519.js",
    "revision": "0c74f0bca301390502928321f3cb5c1e"
  },
  {
    "url": "assets/js/31.fee8815b.js",
    "revision": "0bf8d80bba1bb39f667522dbfa096e84"
  },
  {
    "url": "assets/js/32.df77e36a.js",
    "revision": "0721966dc40185fca4454c726ebb25d4"
  },
  {
    "url": "assets/js/33.1234a3f7.js",
    "revision": "915b7acc3d03d5e5edb731bc6faca495"
  },
  {
    "url": "assets/js/34.a7d95e06.js",
    "revision": "dd0c0a3a248abcd972d7b66f2bc6a09b"
  },
  {
    "url": "assets/js/35.5d178331.js",
    "revision": "52ba82c771c393bb52873e33b5275e2a"
  },
  {
    "url": "assets/js/36.f057b019.js",
    "revision": "7af14430620724906e4ac19887cfb4ed"
  },
  {
    "url": "assets/js/37.2a70a366.js",
    "revision": "588312e312cd72e39835cebad9fcfe33"
  },
  {
    "url": "assets/js/38.21454d44.js",
    "revision": "b5ce94cb36bf7c576bb35dacb83138c3"
  },
  {
    "url": "assets/js/39.35b4d3b8.js",
    "revision": "638965ab4ffdbcae2a22077a01367bc3"
  },
  {
    "url": "assets/js/4.896409cd.js",
    "revision": "b2477c6e01d1858ad24356023493ede1"
  },
  {
    "url": "assets/js/40.9ca684c6.js",
    "revision": "45d3b31544597f3ba59584d9d9a49657"
  },
  {
    "url": "assets/js/41.f2781b55.js",
    "revision": "bda6e306681dd78c61a9cad3344bfc08"
  },
  {
    "url": "assets/js/42.b5fdcef7.js",
    "revision": "8aa6c6f445fc8d92bcd2967cbf3f970a"
  },
  {
    "url": "assets/js/43.06cc491c.js",
    "revision": "31564eba407d5c9a210faf63b109de16"
  },
  {
    "url": "assets/js/44.eee18c86.js",
    "revision": "1c854f8bbce88da3915ca458148695cc"
  },
  {
    "url": "assets/js/45.f05add04.js",
    "revision": "05bda0e6dd43f8b10f8cc04129f99f51"
  },
  {
    "url": "assets/js/46.f16b2e49.js",
    "revision": "a676d2ccc9871e027e63932244cead36"
  },
  {
    "url": "assets/js/47.3b399f82.js",
    "revision": "cd39fb3d34fe80e98eb4cc602fc310eb"
  },
  {
    "url": "assets/js/48.2addab73.js",
    "revision": "775c0bd0c6652782f41ea71b7a4f9d64"
  },
  {
    "url": "assets/js/49.63c314a2.js",
    "revision": "4e9b8541af18759930325809a4d4bb73"
  },
  {
    "url": "assets/js/5.5cde5b1a.js",
    "revision": "620f00f50a716ca560f5c00a4ff7d132"
  },
  {
    "url": "assets/js/50.d89a4c78.js",
    "revision": "8cbb9774e6ff4743eb95c47355e56cd4"
  },
  {
    "url": "assets/js/51.17169437.js",
    "revision": "21040e7eab600e8405a01adffb91141e"
  },
  {
    "url": "assets/js/52.bc7672c9.js",
    "revision": "0104edc26cbabe5f4e7d97db026ade07"
  },
  {
    "url": "assets/js/53.7d4855bc.js",
    "revision": "055f8bb2d58860144a108e156768d7cb"
  },
  {
    "url": "assets/js/54.e9d3a0ab.js",
    "revision": "d153b69ddc3fdea9a262c49b9b805f78"
  },
  {
    "url": "assets/js/55.a3df49d6.js",
    "revision": "5d69f5283702b76e8608e6a7d0f599ff"
  },
  {
    "url": "assets/js/56.5a15bde2.js",
    "revision": "f5362176eba9ee2875f472cee18d8934"
  },
  {
    "url": "assets/js/57.2971497d.js",
    "revision": "a63f33117e2d745c3075bb280594fbab"
  },
  {
    "url": "assets/js/58.2d66b97e.js",
    "revision": "81ce5738e5d04eb03d11e10fa9f40704"
  },
  {
    "url": "assets/js/59.bd18dc82.js",
    "revision": "b98c88949ecc7af9c15587c39fc96439"
  },
  {
    "url": "assets/js/6.ec8c40ec.js",
    "revision": "6f8ac727fd912225252149bcecf0a001"
  },
  {
    "url": "assets/js/60.515d2580.js",
    "revision": "3221713dcf1016258cbac2a19a2dda03"
  },
  {
    "url": "assets/js/61.3e39656b.js",
    "revision": "7001e43ec632c53e8e82142375a007c1"
  },
  {
    "url": "assets/js/62.75e36457.js",
    "revision": "e7381c8a91cf6ce8f219e801cebbdd47"
  },
  {
    "url": "assets/js/63.06718c25.js",
    "revision": "9933f99fca012cb180b932fa6ee0de04"
  },
  {
    "url": "assets/js/64.8eaa0479.js",
    "revision": "dbe9c7cb3c5744b4b35324e2d582ef4a"
  },
  {
    "url": "assets/js/65.075fd735.js",
    "revision": "05e6f98ffb9f6a5c72cb24e72b8f8a3a"
  },
  {
    "url": "assets/js/66.0d6f4ab3.js",
    "revision": "c742f5f6deaa0e4434951829ff7495d4"
  },
  {
    "url": "assets/js/67.b71182d4.js",
    "revision": "aa8484a5e48d4799aa975d81a55281ef"
  },
  {
    "url": "assets/js/68.2dc57ee7.js",
    "revision": "2390b7e5840e80d9a7a60a3d7af43c4a"
  },
  {
    "url": "assets/js/69.adfd43d1.js",
    "revision": "6a52afa2687de3076db9868c67014bf4"
  },
  {
    "url": "assets/js/7.dfa90003.js",
    "revision": "d56e2b894be8b25d2c7f77f87d2054d1"
  },
  {
    "url": "assets/js/70.822ef574.js",
    "revision": "6d3acfb5de1fc71329d3504948fc771e"
  },
  {
    "url": "assets/js/71.d6dc36f7.js",
    "revision": "d942ce12dc011d3539c21cff9c89ec34"
  },
  {
    "url": "assets/js/72.65cb463c.js",
    "revision": "253a1744d742e3bec36d3c860442ab9f"
  },
  {
    "url": "assets/js/73.6a08a417.js",
    "revision": "6b5379ecba954679cbbe08a3640d5f86"
  },
  {
    "url": "assets/js/74.4d3f100b.js",
    "revision": "62f5a5bf2eedade95b1f2c5d16832a9d"
  },
  {
    "url": "assets/js/75.c1ecc7af.js",
    "revision": "f64569b39f50a564e3b202a6dcc826db"
  },
  {
    "url": "assets/js/76.a1aedc43.js",
    "revision": "ce705fd5a3bf02cf694415a9f0a802f6"
  },
  {
    "url": "assets/js/77.6002d789.js",
    "revision": "8a2e9abd9a9e608e566c36c6d5b8aabf"
  },
  {
    "url": "assets/js/78.2af7a0f8.js",
    "revision": "8f10ed142d3bca695e4793ecaa07bd34"
  },
  {
    "url": "assets/js/79.f1e779f2.js",
    "revision": "2f81c95dfe20ca1133f1f11f2a453538"
  },
  {
    "url": "assets/js/8.b0e8ad38.js",
    "revision": "8260c2b69821c7fcc5793d055a3a2a4e"
  },
  {
    "url": "assets/js/80.77a7737a.js",
    "revision": "eab7c448d073aeae824bb43d2a5afeaa"
  },
  {
    "url": "assets/js/81.b116fbcb.js",
    "revision": "29fddfaa39c80832bf705a38be31334d"
  },
  {
    "url": "assets/js/82.6f4a62af.js",
    "revision": "3fd871cb43660b03f6090acaf75bb032"
  },
  {
    "url": "assets/js/83.63391ae4.js",
    "revision": "6651342ff8202aa47fd2ad7b0c6c3d2e"
  },
  {
    "url": "assets/js/84.d8a9815a.js",
    "revision": "7fa16905957fff9b4d35692e52738053"
  },
  {
    "url": "assets/js/85.deff539d.js",
    "revision": "8d32817b4735141c311ba3cd872a03eb"
  },
  {
    "url": "assets/js/86.0cd4c8ec.js",
    "revision": "1d4fca29dd98464109f8d4806fa6d8aa"
  },
  {
    "url": "assets/js/9.638897c4.js",
    "revision": "e5a32ba97910974721c0236e2f08e659"
  },
  {
    "url": "assets/js/app.4d0ff649.js",
    "revision": "5e74307d771e352cb8b1f46db8fbda01"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "31e26ef278cfa9711eaed2809b09016c"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "b6065cf0281b33a7d9ca6255f2a99b61"
  },
  {
    "url": "community-made/index.html",
    "revision": "aea173a491e338ae68c03daef4cc083c"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "744c75278771fae2cb4cf03c51c29f96"
  },
  {
    "url": "contribute/index.html",
    "revision": "8172cf8c5ead4b8de3584feed427db1d"
  },
  {
    "url": "core-development/index.html",
    "revision": "a57a3b011dae5cca3d788edce0686d47"
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
    "revision": "08d328d6b587d09d285af2fb43cec7e6"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "8e293c9f29613a295e97890ff8a83a7d"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "40a71f68740311b825f62f826dca85c4"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "d0d816e88a8ca72828afcea4da5241fd"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "ec29b2a1f1fa53f31218149a5912b3a5"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "7c43182bc109ffa32038ebe1bb480698"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "5609722839a768efc3cd79eeddf6d1a7"
  },
  {
    "url": "de/index.html",
    "revision": "4d0c6d9927946f2df533146612d9342a"
  },
  {
    "url": "de/links/index.html",
    "revision": "800f287ce9747bb03f961b7a813daf9d"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "a7fcd516228fd481278ae47321d5d25b"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "0707a1a2dc4ba0311f0c1f0707533327"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "f2bbe1ea88e86a597a5355e3a6ed7ccc"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "47d7f5c101d263b41e271cc6bea99f1d"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "63836b472f9448b7fa5f3feae8f12b64"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "deef31e09be61ff3ee10c1003d3fe29e"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "42659079997643aec28e876fdb2832fc"
  },
  {
    "url": "de/setup/index.html",
    "revision": "d84780a2bd4802a961a41a23412fcc9e"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "541fda0f506299534dd205b388b3d006"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "c96c51a148496e9b56560eb8fd1d4a55"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "216768ee9cb62f0f4cd0c4d6cf41aba9"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "ff84ec37cd00f8ff32e62ac155c58b60"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "8cb39026ad51b0a1eee9db1113f11ced"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "17b2c48eb3d297bfb02cb830fe29878d"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "b398c3d0353cc544342756f8df12d252"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "06fa8547d1675357edf86a956bff9cb8"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "0c73dc613d93647c6f7ada36eb6dcb2e"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "6d858d60f86bfc4a26402c9835c59cca"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "66fed890f1fbfdcf8d66bf364ada9348"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "02f685198847ffe431013614f3f5c73f"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "6daf3c7b6106eee716f73e0d771a6fc4"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "89cfa6bc5a0115c0fdbce27eba8539fb"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "660a63021b58bf41f49ffe186c232dec"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "a61df716ed1e20f1e28079c9e3474508"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "6bc3af541b46fd62a9274658399549b7"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "01dc096323237df3143d71d89ab6787f"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "63acc18d42aac25991d09fd93f77cb46"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "b8d9df9ec9f1acf7766c9622d434724e"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "e88979acacbff9a360cf0f1ccc82e7af"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "63e82af98187bf8548a1a13d405964dc"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "7331563a91e3726732bf42dda450820d"
  },
  {
    "url": "de/usage/index.html",
    "revision": "af696529128dde623e2dafe28ca320cf"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "48351b423343c9e8208fdf9e179abf38"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "3443b53caef9a0e6fcbe76b2704441b8"
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
    "revision": "664f8e900aa5a725b5b68d48d0052cd8"
  },
  {
    "url": "links/index.html",
    "revision": "0c46a82fe90fb58849872301bf9f1ea4"
  },
  {
    "url": "satsetup/index.html",
    "revision": "5928d807d3fc8d9b025713fb60eb9678"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "fd96ba57e7321dc679dd9b05c70ab2b5"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "e73135749178dd98acd13498f46b7463"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "b26f04ee6319e40098c2a356e0f88640"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "e57336d9f3855b5a09ee3f478b271e7e"
  },
  {
    "url": "setup/docker.html",
    "revision": "c2254f0df90dc453739c15576723452c"
  },
  {
    "url": "setup/image-install.html",
    "revision": "3a2e1191a28ebefe43d8e9029adf7596"
  },
  {
    "url": "setup/index.html",
    "revision": "8589bac12c3c3b2cc4a02b1fd21fa36f"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "2aff2873a3846c39b4f03118b77f8ca8"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "a7e1ea42693a318421729e48a9070d06"
  },
  {
    "url": "setup/requirements.html",
    "revision": "0e078d087fd7bdfa64846076f15b44fd"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "af1748f4809a28470ebb0af19a581dde"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "b1ae6de5af9132d652e43d746c3b4aa7"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "74e87330227ca9a8b7fcab0f9f28c513"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "db44c9a09f24e9abafa93661e9ef6ee5"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "2dd79af70756f5f329e6197ace2ac46b"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "64833188477fb090a4fd201f0aac4dfd"
  },
  {
    "url": "skill-development/index.html",
    "revision": "db105ce0bef8f8eb32389ecc320705f7"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "7bbed48a717a5a84142459f3f017d2e4"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "72f12b6e2a85051f75c09c2bee925293"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "f4b6be32226bb64032f391e473c249bb"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "3b65bc954cc21724bdda0ae8607e0f63"
  },
  {
    "url": "sponsors/index.html",
    "revision": "811dbae944d69a468bbdb9289b92cb6b"
  },
  {
    "url": "usage/index.html",
    "revision": "97b120011c40aab26ac3f5bc7981bc94"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "25923cc8bd013403854877e83e05850e"
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

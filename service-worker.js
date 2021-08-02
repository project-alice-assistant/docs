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
    "revision": "56e0451c0a17fa4225f3fa7134fc92db"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "6aa18d3a629d019126ff1247e8c6e32e"
  },
  {
    "url": "about-alice/index.html",
    "revision": "5c437b8f0262e843b45edf3bc57d1a97"
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
    "url": "assets/js/10.3060e14a.js",
    "revision": "8db707d901f60a50bf96cd3408999fab"
  },
  {
    "url": "assets/js/11.c67d2491.js",
    "revision": "3d705a91b73171fe1d5edfa414a9af63"
  },
  {
    "url": "assets/js/12.250a893b.js",
    "revision": "f992be8fb17653375b17791f4d61b190"
  },
  {
    "url": "assets/js/13.d4fa1a5c.js",
    "revision": "7988d8936b6feb46c8fd123c4297c337"
  },
  {
    "url": "assets/js/14.0877857d.js",
    "revision": "8ad6be797ca4677f7ec7746cf0ebe279"
  },
  {
    "url": "assets/js/15.52845287.js",
    "revision": "6a406dc87b9cb969e41c17ae802da925"
  },
  {
    "url": "assets/js/16.0e85d107.js",
    "revision": "3e67e7e4e92d9f97b385a0cb49278a29"
  },
  {
    "url": "assets/js/17.0c1e3bd1.js",
    "revision": "d0572ea3ba95d21abbee0731c6a71e30"
  },
  {
    "url": "assets/js/18.79b85c10.js",
    "revision": "362806ca731fe90ac6850d8250d540ee"
  },
  {
    "url": "assets/js/19.805fe391.js",
    "revision": "c79e0d0edc3be363e253e8ccd0f3fcac"
  },
  {
    "url": "assets/js/2.29971ebb.js",
    "revision": "d0dfeebbd652ebbd874dca1fc0dafd97"
  },
  {
    "url": "assets/js/20.f4347ef7.js",
    "revision": "e0e8f1e3cdd9542b453e0be80bf32a0d"
  },
  {
    "url": "assets/js/21.44be8009.js",
    "revision": "2a5f52c3ab5ded58a1cdd13497753908"
  },
  {
    "url": "assets/js/22.458289c3.js",
    "revision": "6d24a21ba16f2ebce8eb29cfc4c18b4a"
  },
  {
    "url": "assets/js/23.01023a35.js",
    "revision": "538722781e62807e02bf2f389dfe978b"
  },
  {
    "url": "assets/js/24.5e822f7e.js",
    "revision": "752f8d69808c3d8287666d731d2aa9d5"
  },
  {
    "url": "assets/js/25.4ded96b4.js",
    "revision": "710351989c1a06c7de63cd019096ad5c"
  },
  {
    "url": "assets/js/26.3c1a00d1.js",
    "revision": "83a928aa7b24d9026dd3da012c1a258e"
  },
  {
    "url": "assets/js/27.e2da2a99.js",
    "revision": "6adf61f3eb094b6d2db228cd3edd096d"
  },
  {
    "url": "assets/js/28.d2836e5e.js",
    "revision": "f3f543b641fd9be1d2f3ebfe060ac940"
  },
  {
    "url": "assets/js/29.41804473.js",
    "revision": "4642de53431518e279583cb62e50bae9"
  },
  {
    "url": "assets/js/3.f611981e.js",
    "revision": "080348933b8c323aefeed3b5c5086e8a"
  },
  {
    "url": "assets/js/30.4c33b4ca.js",
    "revision": "0c74f0bca301390502928321f3cb5c1e"
  },
  {
    "url": "assets/js/31.3d94805a.js",
    "revision": "0bf8d80bba1bb39f667522dbfa096e84"
  },
  {
    "url": "assets/js/32.bfdf3e53.js",
    "revision": "0721966dc40185fca4454c726ebb25d4"
  },
  {
    "url": "assets/js/33.ea3c64ab.js",
    "revision": "915b7acc3d03d5e5edb731bc6faca495"
  },
  {
    "url": "assets/js/34.16a86c94.js",
    "revision": "dd0c0a3a248abcd972d7b66f2bc6a09b"
  },
  {
    "url": "assets/js/35.b028b922.js",
    "revision": "52ba82c771c393bb52873e33b5275e2a"
  },
  {
    "url": "assets/js/36.ee615a35.js",
    "revision": "7af14430620724906e4ac19887cfb4ed"
  },
  {
    "url": "assets/js/37.ae458720.js",
    "revision": "588312e312cd72e39835cebad9fcfe33"
  },
  {
    "url": "assets/js/38.2a6c9002.js",
    "revision": "b5ce94cb36bf7c576bb35dacb83138c3"
  },
  {
    "url": "assets/js/39.b12c97f3.js",
    "revision": "638965ab4ffdbcae2a22077a01367bc3"
  },
  {
    "url": "assets/js/4.97839d4b.js",
    "revision": "b2477c6e01d1858ad24356023493ede1"
  },
  {
    "url": "assets/js/40.4a54fe5e.js",
    "revision": "45d3b31544597f3ba59584d9d9a49657"
  },
  {
    "url": "assets/js/41.20ee6b37.js",
    "revision": "bda6e306681dd78c61a9cad3344bfc08"
  },
  {
    "url": "assets/js/42.d75e618d.js",
    "revision": "8aa6c6f445fc8d92bcd2967cbf3f970a"
  },
  {
    "url": "assets/js/43.92c34234.js",
    "revision": "31564eba407d5c9a210faf63b109de16"
  },
  {
    "url": "assets/js/44.5a5822a9.js",
    "revision": "1c854f8bbce88da3915ca458148695cc"
  },
  {
    "url": "assets/js/45.a4026946.js",
    "revision": "05bda0e6dd43f8b10f8cc04129f99f51"
  },
  {
    "url": "assets/js/46.9a9e0f92.js",
    "revision": "a676d2ccc9871e027e63932244cead36"
  },
  {
    "url": "assets/js/47.116505f0.js",
    "revision": "cd39fb3d34fe80e98eb4cc602fc310eb"
  },
  {
    "url": "assets/js/48.39ab94a4.js",
    "revision": "775c0bd0c6652782f41ea71b7a4f9d64"
  },
  {
    "url": "assets/js/49.c6bf5a5f.js",
    "revision": "4e9b8541af18759930325809a4d4bb73"
  },
  {
    "url": "assets/js/5.89381c9c.js",
    "revision": "620f00f50a716ca560f5c00a4ff7d132"
  },
  {
    "url": "assets/js/50.0d96218a.js",
    "revision": "8cbb9774e6ff4743eb95c47355e56cd4"
  },
  {
    "url": "assets/js/51.96984cc6.js",
    "revision": "21040e7eab600e8405a01adffb91141e"
  },
  {
    "url": "assets/js/52.9974b9c5.js",
    "revision": "0104edc26cbabe5f4e7d97db026ade07"
  },
  {
    "url": "assets/js/53.4f496f6d.js",
    "revision": "055f8bb2d58860144a108e156768d7cb"
  },
  {
    "url": "assets/js/54.2b48b2db.js",
    "revision": "d153b69ddc3fdea9a262c49b9b805f78"
  },
  {
    "url": "assets/js/55.efb2f45d.js",
    "revision": "5d69f5283702b76e8608e6a7d0f599ff"
  },
  {
    "url": "assets/js/56.0e6a69a2.js",
    "revision": "f5362176eba9ee2875f472cee18d8934"
  },
  {
    "url": "assets/js/57.3dd01aa4.js",
    "revision": "a63f33117e2d745c3075bb280594fbab"
  },
  {
    "url": "assets/js/58.3e5190ab.js",
    "revision": "81ce5738e5d04eb03d11e10fa9f40704"
  },
  {
    "url": "assets/js/59.ac239b95.js",
    "revision": "b98c88949ecc7af9c15587c39fc96439"
  },
  {
    "url": "assets/js/6.201265f5.js",
    "revision": "6f8ac727fd912225252149bcecf0a001"
  },
  {
    "url": "assets/js/60.4f270077.js",
    "revision": "3221713dcf1016258cbac2a19a2dda03"
  },
  {
    "url": "assets/js/61.5acaa200.js",
    "revision": "7001e43ec632c53e8e82142375a007c1"
  },
  {
    "url": "assets/js/62.3df284fa.js",
    "revision": "e7381c8a91cf6ce8f219e801cebbdd47"
  },
  {
    "url": "assets/js/63.50eae30a.js",
    "revision": "9933f99fca012cb180b932fa6ee0de04"
  },
  {
    "url": "assets/js/64.ef7fbd73.js",
    "revision": "dbe9c7cb3c5744b4b35324e2d582ef4a"
  },
  {
    "url": "assets/js/65.0c97e21a.js",
    "revision": "05e6f98ffb9f6a5c72cb24e72b8f8a3a"
  },
  {
    "url": "assets/js/66.d0dde7b2.js",
    "revision": "c742f5f6deaa0e4434951829ff7495d4"
  },
  {
    "url": "assets/js/67.b0a2f830.js",
    "revision": "aa8484a5e48d4799aa975d81a55281ef"
  },
  {
    "url": "assets/js/68.01aa2ffe.js",
    "revision": "2390b7e5840e80d9a7a60a3d7af43c4a"
  },
  {
    "url": "assets/js/69.ef55aefc.js",
    "revision": "6a52afa2687de3076db9868c67014bf4"
  },
  {
    "url": "assets/js/7.b1002553.js",
    "revision": "d56e2b894be8b25d2c7f77f87d2054d1"
  },
  {
    "url": "assets/js/70.e22eeb12.js",
    "revision": "6d3acfb5de1fc71329d3504948fc771e"
  },
  {
    "url": "assets/js/71.0062b553.js",
    "revision": "d942ce12dc011d3539c21cff9c89ec34"
  },
  {
    "url": "assets/js/72.53d6cbe5.js",
    "revision": "253a1744d742e3bec36d3c860442ab9f"
  },
  {
    "url": "assets/js/73.6c0e8c28.js",
    "revision": "6b5379ecba954679cbbe08a3640d5f86"
  },
  {
    "url": "assets/js/74.6841d182.js",
    "revision": "62f5a5bf2eedade95b1f2c5d16832a9d"
  },
  {
    "url": "assets/js/75.903d6ff8.js",
    "revision": "f64569b39f50a564e3b202a6dcc826db"
  },
  {
    "url": "assets/js/76.24988856.js",
    "revision": "ce705fd5a3bf02cf694415a9f0a802f6"
  },
  {
    "url": "assets/js/77.65d9d3bd.js",
    "revision": "8a2e9abd9a9e608e566c36c6d5b8aabf"
  },
  {
    "url": "assets/js/78.4c44b497.js",
    "revision": "8f10ed142d3bca695e4793ecaa07bd34"
  },
  {
    "url": "assets/js/79.308ff2fb.js",
    "revision": "009c40f02f2c7a0cdbd290686e95b561"
  },
  {
    "url": "assets/js/8.b0e8ad38.js",
    "revision": "8260c2b69821c7fcc5793d055a3a2a4e"
  },
  {
    "url": "assets/js/80.0911882b.js",
    "revision": "eab7c448d073aeae824bb43d2a5afeaa"
  },
  {
    "url": "assets/js/81.619744fe.js",
    "revision": "29fddfaa39c80832bf705a38be31334d"
  },
  {
    "url": "assets/js/82.5c91543c.js",
    "revision": "3fd871cb43660b03f6090acaf75bb032"
  },
  {
    "url": "assets/js/83.9bd6deab.js",
    "revision": "6651342ff8202aa47fd2ad7b0c6c3d2e"
  },
  {
    "url": "assets/js/84.03e18951.js",
    "revision": "7fa16905957fff9b4d35692e52738053"
  },
  {
    "url": "assets/js/85.66443a3c.js",
    "revision": "8d32817b4735141c311ba3cd872a03eb"
  },
  {
    "url": "assets/js/86.3879ca70.js",
    "revision": "1d4fca29dd98464109f8d4806fa6d8aa"
  },
  {
    "url": "assets/js/9.dbf55efd.js",
    "revision": "e5a32ba97910974721c0236e2f08e659"
  },
  {
    "url": "assets/js/app.9f62009a.js",
    "revision": "6ec78a19e43b57f65d25c69436d43748"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "67b40037b30f2c7f07008aa1ae87d0ee"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "270c000a693993732f59ce514fc2a75c"
  },
  {
    "url": "community-made/index.html",
    "revision": "14ccf968f25b0672d88a8350caf02986"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "9c179b3b5eb0cd7d8efda948cea5f69d"
  },
  {
    "url": "contribute/index.html",
    "revision": "50949a41dd8069d431fb22a8d61090f7"
  },
  {
    "url": "core-development/index.html",
    "revision": "6316b0efff3bbe4993f73a73f8de34dc"
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
    "revision": "ee45377d318ac7913b39039fed7b7581"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "5f5813873d94f45b2b5f12d32029e3a1"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "dc3c9df5c2720aa1e00076401c12ffd1"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "3073557c61ea6317d96aced2222b3ad7"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "10747540e84a0998c84eb2642bd81a49"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "4ef5689fefd8253496f1ab65311bc8b2"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "c24d014000fa22e9a582ae0eb5c60c6e"
  },
  {
    "url": "de/index.html",
    "revision": "4ed5efbc1ab8fa596ec3f4dc069ddf5e"
  },
  {
    "url": "de/links/index.html",
    "revision": "beaf670bd1615167749d83633cad137b"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "9b8918010f537ecf9ea3de747d4bea6a"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "545871e7e5f9ccea6e68c752e08178e7"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "5d081cddd0c41c4ad9b09f8ff96a58be"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "dd80093597c0a58afb492192aa6bc2bb"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "6b293f23f6c9c8d3fa43c4051a461ce3"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "63ec3e7fabbe6ecf66f5aac58c6c098c"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "b072eb8c5fc6418ce70e853d2d9d1af3"
  },
  {
    "url": "de/setup/index.html",
    "revision": "a8f575a312a85a7a22dfd57c43e3b7d1"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "287ecca2955092d8f5004a7625a32a6f"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "dde2fe23ddf2c3f4f0afaa6b6c087a58"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "23668a23735c79d2dd44ad46fa228c36"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "122f47f781b1d5cd231f3e52fa33025b"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "6ff6c734a716e748b4245bf4d1e6307b"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "76959ff5b67711f1a45a92aa21316620"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "5c74bec34edae78b1b2255bec5c89bea"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "77e54a775a10d78b454c5ae821349b81"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "67443e9fb59a893bf9ed1784eb230649"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "8ba738c935d4070f247f9bdbc5757e2f"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "969b139d80e8da703912466dc8f02d03"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "f2f5fd426d09b02089a3d8a403ae4415"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "e89d972c76867804e9c83c0cc0c37dbf"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "d913cf5b1f83cb9437cf5fc166aebeaa"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "fc0dd9f15306eb2787452ba0f678e7b8"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "e78dc51055b72769333288d42e76ad96"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "e181d006b204bdc552bafe2a62ffde3a"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "02d38c00982952b840173696942f9cc5"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "524d7f89185f8b5764d2831fae8253ac"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "b9dc665585b6daf0785cba766938bb09"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "4b89af0dce6305fe6323365d9818564e"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "96f9942c6d70968860d2bdf220174a25"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "381db590694edde58a4be2efb64f7dca"
  },
  {
    "url": "de/usage/index.html",
    "revision": "629fb77e1abfaf6842d44338d2e2d8fe"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "fdef6be083ac6ddc2205052a64ce507e"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "164b9db9b9eb8d9fdac67b51be4fd6dc"
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
    "revision": "aea5f1efa58bd79d5f45f9d5da01b761"
  },
  {
    "url": "links/index.html",
    "revision": "864042f0f9a6f2942e81c3ee004b5d76"
  },
  {
    "url": "satsetup/index.html",
    "revision": "265c8a3754df72a8c2aefbf32b886bc8"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "bf724edff9b28b95502d69b6c6e9bfeb"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "14d9dcecf58935af99e9007b6ea09b2a"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "6a42072364c2d2fc913462e9d3bb029a"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "e9413a03b0fbaa6d8053eecb86fa06d3"
  },
  {
    "url": "setup/docker.html",
    "revision": "a65bc5000c1aaf69ddf0d9ed68e52ff5"
  },
  {
    "url": "setup/image-install.html",
    "revision": "9ac8ecfd7de932d97e91bb9e549120d3"
  },
  {
    "url": "setup/index.html",
    "revision": "4d35a750ce2e245d772633c128b35757"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "47b6f9631775f9215886597392782275"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "06eff8cb92e84b605fcaba989bb59abc"
  },
  {
    "url": "setup/requirements.html",
    "revision": "d6ba383154eb3b1126674a60fe512fa6"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "bbb3cc5d2a8f9cd2473d4a56fa07a2b9"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "c9342af5631d39232ff3450ddb98d4a2"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "391c9afd02a50e566b09f6e54c711463"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "14391cf6be9668302b3a49279687e031"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "ccbb8995bea305bfdec3d6cd17139b25"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "5d1b10a429b0bb824e81612e4136e66c"
  },
  {
    "url": "skill-development/index.html",
    "revision": "7da596a8274fd9d56564914f37fd86ce"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "d3e9923800b7dcbf51e14d840695458d"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "2e918c7ee6d072fc70a5994d6fa94f5f"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "58e73967d4846f0ea3d3b4932915474b"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "2734b2f0b9683e8bad3a453a5d023429"
  },
  {
    "url": "sponsors/index.html",
    "revision": "0114d06bb53e68a8f696c6052a14d346"
  },
  {
    "url": "usage/index.html",
    "revision": "1dfc2f7fa2e1a9cfbde428ead8521fd1"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "3553888c2e81726b0e3e3a001452d3cc"
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

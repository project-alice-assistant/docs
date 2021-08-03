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
    "revision": "1498efe6bcef0cf0dc8773c343ab63bd"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "dec3b39d52df8b3ba2510e16e50a97db"
  },
  {
    "url": "about-alice/index.html",
    "revision": "7cccbdbe655d27e4559bf0f069bfdf81"
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
    "url": "assets/js/79.9fc36daa.js",
    "revision": "866771cf9ab6411520fc9c8885f88934"
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
    "url": "assets/js/app.89fbe3e4.js",
    "revision": "df04f4b2419141f1318385c5da7b3e7a"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "8080aff415cd425870a546b5aea78488"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "a10810eed26f2a7c1aec4abdb3bde0a6"
  },
  {
    "url": "community-made/index.html",
    "revision": "3bb2fb519e22bf14c8d065992488c5ea"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "88ce55fb9cabbe8cdd38a49acf94b9d8"
  },
  {
    "url": "contribute/index.html",
    "revision": "1ba4b11e2741b3c6cc11b1ec40789dbf"
  },
  {
    "url": "core-development/index.html",
    "revision": "12b0aec839a62e805dfa165d4a605b7e"
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
    "revision": "21d3d411cbd90f071be81ecfc4789887"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "ce00d6540ab6d48c493b3ce84c20d6a7"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "55ab1dff855357688701671af362214d"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "dfccc6ffc40fdf9a1615e793fa99a7e6"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "ea92fcabfd9d73a1c4f4c858b32a9ae1"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "0d757680698ed9959932bb225cee5b60"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "fccef46c8fa61bfcbb951a2265ec8c27"
  },
  {
    "url": "de/index.html",
    "revision": "81d9212014b677a32eae45b9b342aa8a"
  },
  {
    "url": "de/links/index.html",
    "revision": "7131e09f3737f2b1a0b9e0d467ab2ad8"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "ba7081af57bfbe79fa98f9116e32dcad"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "93d1de96878a098afb97cd990b5e7e07"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "37490cb8007e1322373328eaa734fad9"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "75a514475fc056cd1985ec4a43e93acb"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "70bb2951977fb78b3e7f43a73be4912d"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "1b06f42075ba3c5659859fb4aa5d2934"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "7f6e7406eccf0cef6cf33cdc153aa2f2"
  },
  {
    "url": "de/setup/index.html",
    "revision": "d4e044b3990248e533c6b264ce83349a"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "77daafcb7e6b0dff5288bc7db5933637"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "cda851ecdfc8458dca8b1a97d2be894c"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "29a2b36eee245c4d63a5c2a1aa2ba006"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "43d5dbe5cd0c51605036677ba430f1cf"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "44759acbbbcca4de4c498c2c70de7015"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "9602e2428a08d6949eb8edecbef83081"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "a9c87200eb2bd215802b411105be9084"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "372545d399298f74d7e88699a60782ea"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "e209a4feade803dba5e5e95074528cdb"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "7af575f914b6c7d72e3f031f5193268d"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "4124e3678623ea05873a152183280909"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "475a7cf5127b08625073e647b7c7e94e"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "7e247e6144f0bf3e88205a86a19e924a"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "0331b84541537111cd5f18923f400e8a"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "7d82c51b221ff427d734f171a39d61d4"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "797092b415933e5caf0802a829338133"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "83e19c73955caa2e3deeb73858081507"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "abd2ba3584613465cb0318ac0c73287b"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "1b863f24bc597ed4c122731ff5246911"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "ff997d4135202aa8a58c7f72cbe05a3e"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "a5bb10eba4f1e6a4a20e0eb55cce4c49"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "14a75de34dca114d9f000b304d9c604f"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "94746d22d211a86e95868f3577427953"
  },
  {
    "url": "de/usage/index.html",
    "revision": "be41dedea8a9cb5fd473f288afbbbb8a"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "5d8e6041560a9d3cd7aed7c73a48e9f8"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "342543fd055344c9ac0f076c625f5ec0"
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
    "revision": "f32c2446b38e131bac35add1ff4a33fe"
  },
  {
    "url": "links/index.html",
    "revision": "fec55b179115b58d42c5d66d24dfe9d0"
  },
  {
    "url": "satsetup/index.html",
    "revision": "5269e2c299efb2c6023029cde06b9131"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "75d947482d496768f021e3137722194d"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "f151764817007c4e8a3755cb765ae900"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "19e3c7544ebe29d54f246b1ff1798291"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "71552c68b7b0842e2bfa3b83e96a282b"
  },
  {
    "url": "setup/docker.html",
    "revision": "aeb76056fc86c2003a5da1f04f8a5ba6"
  },
  {
    "url": "setup/image-install.html",
    "revision": "d888bd1f93db125eb52e0c66311a81a7"
  },
  {
    "url": "setup/index.html",
    "revision": "f24967da3a96af8bd599131b00767faa"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "3b69878ac9ef69d8ef0e5fe8a02a44f1"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "76cdf98b0a56ed64b8837b07d53e15f8"
  },
  {
    "url": "setup/requirements.html",
    "revision": "32404de4ee529f766ae4a022817760ac"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "bc340ed6b37e1542b9096bb616310aa7"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "bca8c89764dc9f3e2edf5b3ffb07ae6e"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "b1fc817bb13735097ad285d96315b177"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "3639a699d2f8dd267335e12454eb63f4"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "ca46382043470dc0a7e53942d556e6e8"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "3826eea266b044ace888ae6cb1ca1a21"
  },
  {
    "url": "skill-development/index.html",
    "revision": "a0e8af82407db2c902bcc0d4979ca372"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "848f5552a9fd37b75f9c46ebe572b965"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "ddfd7ab14fff3818b95e65083f7d76e1"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "597c0bf3ef1053fba2e6f790b4bc049a"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "1357e4270d0854e20d38f46f44991b44"
  },
  {
    "url": "sponsors/index.html",
    "revision": "811efd73ce2825e442b261b1564c0f2a"
  },
  {
    "url": "usage/index.html",
    "revision": "d3473392d2519e7f6ca563bbfa7d541b"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "be960a796c5fd2084c39ec7f59a7e429"
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

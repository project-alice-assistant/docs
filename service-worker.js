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
    "revision": "7f3535619a7d13d7126985cf0853a884"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "43b024dbf4fc7934d38277d03a00d147"
  },
  {
    "url": "about-alice/index.html",
    "revision": "9fe4a99ea62c63da8bd9530ef48c1cd6"
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
    "url": "assets/js/79.77554164.js",
    "revision": "d28d1e4e344ba22b239a546bf49c82da"
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
    "url": "assets/js/app.05788070.js",
    "revision": "a2bfb063131a48db88dd8d59b8c3eee6"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "ef480a573601bc7c55930930aba7373f"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "bda11ee677f053af9c1de268258d7a6f"
  },
  {
    "url": "community-made/index.html",
    "revision": "4e745de58f3adcbfad69e32b0ef6c2a9"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "60c5e3e2533a2af94184a3ef6198192e"
  },
  {
    "url": "contribute/index.html",
    "revision": "3bf827eb01083d07c221235ba002849a"
  },
  {
    "url": "core-development/index.html",
    "revision": "0102e0f68e89e45f13a6b188368355da"
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
    "revision": "9b7cef204c2d48b4ed79ec3aafdb374a"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "03e5a11e94283044550fc4d2a2c4f1cc"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "92719ed547a87d115e0fac13b6f3a1f5"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "fa1722b0beea3ac3fd179de339799df7"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "b5fa42c1d0684bfef3063984fc9d5b28"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "1dcaf4b305253533579be5e6f44c0502"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "8450d93e451092e2f38b5e1d5a39b324"
  },
  {
    "url": "de/index.html",
    "revision": "3ad78b1392b646cae1f7eb880f633853"
  },
  {
    "url": "de/links/index.html",
    "revision": "7120aeeb96065ea9d9978b52340cf31f"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "31207dd0b1b919e3eadc6528f70d668b"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "86a5ecf380ac1e0b93f7d704c73a26d4"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "690fb9f49a5e15fe5c0bb8983c1c12cd"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "4463d8749e1bf51adfbacfd8603e6aa5"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "1991f9d916b00073e0d2f9b92deca1a1"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "59bc4605ad32c40e4491d376f1e81e76"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "3d75cf5b38681231ca195a42726bdd68"
  },
  {
    "url": "de/setup/index.html",
    "revision": "a32a988bec833ae211241debe5b1e302"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "c01c1e05b359ea5dca664be70d3ffa4c"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "a5a98d8db03fce7bf2733727b779e8db"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "17d397a03ec848362e75cd48763dde0a"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "a7d8b128db87282c94863e300015f705"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "81b49e2f5926579ed9354dd3b1605e6c"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "a0207e212b5d2622e64dd69e4e3c6005"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "34faf1af229ba39c2d17128ffdd3f9e9"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "fda6c3be9c45c7adcbe9209e459ca5fb"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "23ad9f7afed7fe2929498e3743e1b539"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "14ce577a2154d537369a7ff3b69e8765"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "54aa967e57ee5e373681db5ea13e47fd"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "7b358f8fa7a7e531b66a9d0bbe0bd207"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "55688c29a361c0417709df16f91b1dce"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "0e6515e85c2fa9cf1da0630509a2515b"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "b23b805ad48d0323aba0be5d17227518"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "d78321d1a3cbbc63cb08a2afd717f174"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "f61c92d7ebc9cb4797631fb83841eb15"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "083fe3d4bce4b7a2adc4375f2564a5e9"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "de6ffacca34d941e46ff67e45c119e70"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "4b17d7f214fba9ded4856d9313e41510"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "d518263ba06b50297de5677437bb95be"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "ed7d37ed211dba0bfd37cf6ced05b698"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "23534b593fd5cd41540992914e044ea5"
  },
  {
    "url": "de/usage/index.html",
    "revision": "866f135610a017bf4728ce915977e709"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "65a22504a08169a0f32f8b4126fc4a14"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "e8184b86112b3ed635ec008173331543"
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
    "revision": "e6c80fb2ff2727dd276c5d33780082da"
  },
  {
    "url": "links/index.html",
    "revision": "c80ef6d00c5d889ec8f984bd696f8193"
  },
  {
    "url": "satsetup/index.html",
    "revision": "cdd50e9fefe13f88d61b472d5ca13145"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "6a6d16287a270fa32323be5ad8e9f527"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "18de8ab22bca45795b11822d78b6826c"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "28ab453f74159788ceb599bf38b187a1"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "58e4a9d6331fea626af156144fa43694"
  },
  {
    "url": "setup/docker.html",
    "revision": "08873ad88fc151695163852f2584ec7d"
  },
  {
    "url": "setup/image-install.html",
    "revision": "006e08d5f059bcf8d7334faed2ece6b4"
  },
  {
    "url": "setup/index.html",
    "revision": "9c29382f0f5253a755d8f2698d59b1b7"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "c0cfacdda8a24153c49d0d0dc9efd945"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "9eb8744dedf6aeb534e14788081fdf7d"
  },
  {
    "url": "setup/requirements.html",
    "revision": "17edfa656bf32fc9768f4879030327e3"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "26c1d7a5426ec5dd4d5e714ca2ce3d4d"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "3dfe589186e2a9c4c6240c9cdcf38b10"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "e8536becc849ecca6961532d40a89a1a"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "0480fdaaaa659af3654c6d7d5f9a6e53"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "fd64170d72bc45aa92e4c5daa5e8b801"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "a86786e830f84a1acb0328cac7894cae"
  },
  {
    "url": "skill-development/index.html",
    "revision": "64b01678953451fd7480e6eec7d56351"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "40f12d923567001e2de6c23fe0a74ccb"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "293f403d5ac33c0057ce9653ab3de266"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "255bad985412013d896d070d2e91594f"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "a65f2a2f0f4a9c845747dcee684cc043"
  },
  {
    "url": "sponsors/index.html",
    "revision": "82794bd18ae3d43f416dad3dcd492cf5"
  },
  {
    "url": "usage/index.html",
    "revision": "b6a5ae6515dcf86d816aaa52d7417fff"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "e312dcfb0af62f94c92c08d030749c81"
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

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
    "revision": "c29763910a82ee6751688c0b7137fa17"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "0170cb86e5f7648d0a8c1b6b7f4f041b"
  },
  {
    "url": "about-alice/index.html",
    "revision": "5da2c898e5448208c87d3f7ca6fe672f"
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
    "url": "assets/js/10.62a2ba49.js",
    "revision": "9d68f7a7d82701c9885d1028e475855c"
  },
  {
    "url": "assets/js/11.640e088b.js",
    "revision": "2d3a6a3b4178cd4b70a654b91ac97f59"
  },
  {
    "url": "assets/js/12.03f08cdc.js",
    "revision": "06b7cdcb24dea1131ccf1d1e24faf030"
  },
  {
    "url": "assets/js/13.c1b3ee2e.js",
    "revision": "b02fc08cb7b5d35427f0bed1b9cef856"
  },
  {
    "url": "assets/js/14.98f6c838.js",
    "revision": "992f135f1e179b222f236fd04aded2fa"
  },
  {
    "url": "assets/js/15.9dff089b.js",
    "revision": "edc0e1a3c3cf01583da58ddf280e7a2f"
  },
  {
    "url": "assets/js/16.bdce3915.js",
    "revision": "8f8241782fd4590dec80f5c37c9aa1c6"
  },
  {
    "url": "assets/js/17.d96269dd.js",
    "revision": "377c03443d483b8b0d720c4771b8f737"
  },
  {
    "url": "assets/js/18.3c90cd1e.js",
    "revision": "ddb4377f2d9d973a69050a6967bb1d19"
  },
  {
    "url": "assets/js/19.cda5d53c.js",
    "revision": "602f2bb8fa3ee689f40b803e2dbfce13"
  },
  {
    "url": "assets/js/2.7618d9b8.js",
    "revision": "4d4a0bec184b02e03c1d11c1c81e5db6"
  },
  {
    "url": "assets/js/20.48ee452a.js",
    "revision": "39a9e0fd67ff080578655edef6e1d485"
  },
  {
    "url": "assets/js/21.c2a3f9b5.js",
    "revision": "87fce5becb4972a16d7d0c98407b0b6c"
  },
  {
    "url": "assets/js/22.8f02fbae.js",
    "revision": "bda884fe5e14173635a0a553bfe2b919"
  },
  {
    "url": "assets/js/23.948345f3.js",
    "revision": "b839f358a956f7d0a999c8b69b5b9cca"
  },
  {
    "url": "assets/js/24.3320e9b5.js",
    "revision": "fb13bf57c5fb09f923d5e545dcb02bce"
  },
  {
    "url": "assets/js/25.13ee95ec.js",
    "revision": "ef5be9b4f8a76d7e012dea72775621de"
  },
  {
    "url": "assets/js/26.de6288be.js",
    "revision": "5deff4c8b720bab7d62007abb940a9b0"
  },
  {
    "url": "assets/js/27.7b49c818.js",
    "revision": "6253026d4dfe9467d83c0514c8a4d4da"
  },
  {
    "url": "assets/js/28.88865872.js",
    "revision": "41bea3c518261ec580f3f622f74013da"
  },
  {
    "url": "assets/js/29.93ed6ad2.js",
    "revision": "a82a6a01d7b32fb36932cbb8cc71de06"
  },
  {
    "url": "assets/js/3.1e6cb6f7.js",
    "revision": "17d3fa7f9d6c41017d617fd7cfe00a20"
  },
  {
    "url": "assets/js/30.75e2fe6d.js",
    "revision": "b2cbd6a61592347b67e4e59b9999720c"
  },
  {
    "url": "assets/js/31.356f5be3.js",
    "revision": "0eb33edaa53ae7615103ab90641dec9d"
  },
  {
    "url": "assets/js/32.3ab56b3a.js",
    "revision": "0a99f756bc84b9e1ccfcdab02a025365"
  },
  {
    "url": "assets/js/33.53a829e3.js",
    "revision": "ed245e1eed37b2ecf8587014b726fd26"
  },
  {
    "url": "assets/js/34.31bc62e3.js",
    "revision": "73b331deb5ce80f321347e3d7bb6d7b6"
  },
  {
    "url": "assets/js/35.6de71710.js",
    "revision": "3f81bc4ed06179de0a43848ef8f1d685"
  },
  {
    "url": "assets/js/36.874a71ec.js",
    "revision": "0e1e757f22d9e2e2dddf51e8c35cea45"
  },
  {
    "url": "assets/js/37.d2666781.js",
    "revision": "b9825fc706a158fe42018a03a049e6e2"
  },
  {
    "url": "assets/js/38.68e9fd35.js",
    "revision": "c6a85fc95599db2d6717c23cd59b4637"
  },
  {
    "url": "assets/js/39.62f276d4.js",
    "revision": "f33a601db78cbd04f5d84ada4ef4d332"
  },
  {
    "url": "assets/js/4.6d6c5390.js",
    "revision": "8c0b6a0a580ef540f27482b1572e4c26"
  },
  {
    "url": "assets/js/40.09c472bb.js",
    "revision": "204097936322f975f8ee4cab8e7c8e3e"
  },
  {
    "url": "assets/js/41.e27294f4.js",
    "revision": "525b8344efc29e5140f87f4e330288eb"
  },
  {
    "url": "assets/js/42.692d6cb9.js",
    "revision": "5a559d55a09555634d6c2c57619b9e9f"
  },
  {
    "url": "assets/js/43.360b7f46.js",
    "revision": "757fec20b130a1f957a9ef4d0a327d36"
  },
  {
    "url": "assets/js/44.56261539.js",
    "revision": "ab51bf332dc84a1a6526de1589e339c5"
  },
  {
    "url": "assets/js/45.ab0d6453.js",
    "revision": "ba77572f202f33b78278fe62fb5074d3"
  },
  {
    "url": "assets/js/46.09e82ab7.js",
    "revision": "a319f536306cafb3fe0bcdb07febbe35"
  },
  {
    "url": "assets/js/47.bd243bbc.js",
    "revision": "3bb9a0f2fcf956e319e0014e2de1df37"
  },
  {
    "url": "assets/js/48.b0512dd8.js",
    "revision": "eb62a88e0a25e05df0e43cf04ebf8e04"
  },
  {
    "url": "assets/js/49.6418558a.js",
    "revision": "526e9bb5c24aad4b21baf362c4517c90"
  },
  {
    "url": "assets/js/5.575cb635.js",
    "revision": "c5c9a2f80381a488cadba2a5c3538542"
  },
  {
    "url": "assets/js/50.c88c9abc.js",
    "revision": "6b2950973ab6a0e6d1f3843a026a64cb"
  },
  {
    "url": "assets/js/51.8cae1364.js",
    "revision": "d1dd9e773dd321821d8eff5750be30cd"
  },
  {
    "url": "assets/js/52.3b301239.js",
    "revision": "3ff2c3c84fb4162c36fcf2913ab7f4a4"
  },
  {
    "url": "assets/js/53.f2e52566.js",
    "revision": "8072854eecc12841d79efd087ccea40d"
  },
  {
    "url": "assets/js/54.c0214e19.js",
    "revision": "d558782d4becf9d5bd169b4eb210d5bd"
  },
  {
    "url": "assets/js/55.c3f54cb2.js",
    "revision": "a61b11b03d8ca95af9d7c2faaef703e3"
  },
  {
    "url": "assets/js/56.39a1a85b.js",
    "revision": "d045e34a3838b6f0e9902c57a8997fc6"
  },
  {
    "url": "assets/js/57.614e2665.js",
    "revision": "609d385ac6b6587b1e4a9e39c0151524"
  },
  {
    "url": "assets/js/58.18ea7d11.js",
    "revision": "ad7cfa148f69bbf3c52b2de86fb63b3f"
  },
  {
    "url": "assets/js/59.7ee29556.js",
    "revision": "f5a30bc9229fbfad2bbf648081309d35"
  },
  {
    "url": "assets/js/6.331cba85.js",
    "revision": "5bad5c8265c21f674b4532da4d5de6a8"
  },
  {
    "url": "assets/js/60.5f75e059.js",
    "revision": "6ed1fee6595e50e4ebd6ba8f892f47e3"
  },
  {
    "url": "assets/js/61.85d28e0c.js",
    "revision": "e225777745af2f050797c0f212ea85c9"
  },
  {
    "url": "assets/js/62.5870af76.js",
    "revision": "77ae14c7ed901e7c9707173021ae8ea0"
  },
  {
    "url": "assets/js/63.0e648f9b.js",
    "revision": "2594e3d9fecc74e3851e37f300b56da9"
  },
  {
    "url": "assets/js/64.86d73d7e.js",
    "revision": "79fd1727cdf95c9501fce0271b650d15"
  },
  {
    "url": "assets/js/65.1a37cd4b.js",
    "revision": "f17f18413aab5ed8da4c81509cc50eba"
  },
  {
    "url": "assets/js/66.a62affcb.js",
    "revision": "6cdd49ddac019b32a9405676e9b066a1"
  },
  {
    "url": "assets/js/67.f1b2b5f8.js",
    "revision": "d68201d7dbeb946593e2a62be0404a93"
  },
  {
    "url": "assets/js/68.7fa17d93.js",
    "revision": "7e386384fa461843d1c4fbcecb3a2fca"
  },
  {
    "url": "assets/js/69.cd946d81.js",
    "revision": "80beef87d904eba8346509facc5a3882"
  },
  {
    "url": "assets/js/7.6cb00d9d.js",
    "revision": "82c7eee19ca3c8f8ce5a3471ac55eed9"
  },
  {
    "url": "assets/js/70.e8213af9.js",
    "revision": "d7fb8e24a0ec7136307f7f7bbce475c2"
  },
  {
    "url": "assets/js/71.34cba492.js",
    "revision": "1a86da32c93af222883340609c3e75d6"
  },
  {
    "url": "assets/js/72.03b459f4.js",
    "revision": "7fad5162e2bc50f0448c7d3919496dde"
  },
  {
    "url": "assets/js/73.5749def3.js",
    "revision": "d4e856de78d1ac3349d2b93de420fbbd"
  },
  {
    "url": "assets/js/74.e2f06566.js",
    "revision": "5e6a1167b7a119aeef18c47c90ab59d4"
  },
  {
    "url": "assets/js/75.77aa17c1.js",
    "revision": "c66aa1578ca17ed9120bbdfe37e6df0b"
  },
  {
    "url": "assets/js/76.4c9f46d7.js",
    "revision": "9a95934cf028b79880e4cdc886660499"
  },
  {
    "url": "assets/js/77.9047c89b.js",
    "revision": "e3f3b8a4d62a1a86df29f7d58e48fa02"
  },
  {
    "url": "assets/js/78.f80fb40e.js",
    "revision": "85fbb576c18d1eca26cddd196a82d9ec"
  },
  {
    "url": "assets/js/79.dce7d163.js",
    "revision": "3a3a788803411853a9c19f94b03ed989"
  },
  {
    "url": "assets/js/8.18c7f2dd.js",
    "revision": "7e8564fe21196e605e3ea7eac4f40429"
  },
  {
    "url": "assets/js/80.dbc5ab0c.js",
    "revision": "ac4f348bfa7948225c4c6e5d032a1f8e"
  },
  {
    "url": "assets/js/81.f200575c.js",
    "revision": "700891e2e4975b23558392f40c20e29d"
  },
  {
    "url": "assets/js/82.9550869f.js",
    "revision": "44d31a2c5e1ba989d8e591df47540a18"
  },
  {
    "url": "assets/js/83.9415959a.js",
    "revision": "0a71dbe0a9ce93c13ab57e547f73bb28"
  },
  {
    "url": "assets/js/84.6740a101.js",
    "revision": "0dc4a088889512e23b03f3b2fe015bc2"
  },
  {
    "url": "assets/js/85.0ff27d57.js",
    "revision": "f423f40355f782683b9353c14ed67d75"
  },
  {
    "url": "assets/js/86.92be6c13.js",
    "revision": "80a41db00e0bc78f6ba2e73140ee69d8"
  },
  {
    "url": "assets/js/87.27fb0e05.js",
    "revision": "e047e26c06996a6bd1fe13a8d18fa1fd"
  },
  {
    "url": "assets/js/88.32303b4b.js",
    "revision": "dcca9d7e90b79a3450acc3a2f68b33eb"
  },
  {
    "url": "assets/js/89.b6f23756.js",
    "revision": "922e1d7d0dd728cd02217559cf41ecad"
  },
  {
    "url": "assets/js/9.cc4efd27.js",
    "revision": "86657ba587722c0fccf207719a406d56"
  },
  {
    "url": "assets/js/90.dc4c8ea3.js",
    "revision": "ff5e1b7ba9c9ed7eb8b1f9cd69273c30"
  },
  {
    "url": "assets/js/app.0a54f0f9.js",
    "revision": "9bd068561599641793c0d145fe8d37fc"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "f4d1133b7bf8fe877aa4bff135671c21"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "ca1ec0a7e0d69f363fcfa314f7baed91"
  },
  {
    "url": "community-made/index.html",
    "revision": "ab2002c6a9528d8db4d2d78531d590a5"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "145053dbd083055f528b8226c43628ab"
  },
  {
    "url": "contribute/index.html",
    "revision": "88da5346a0cded0279dd44f72c566c80"
  },
  {
    "url": "core-development/index.html",
    "revision": "fb04ff835b98ef4e744a635a0f2d403c"
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
    "revision": "2dbfb533b37961700c8e0875b2e2bcfd"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "d00236b83c582bc659d0d522332e81ba"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "f8f332f96c63cccb3fb22f8c384533f4"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "7e1c2e802072d4a20922b90f0cbcc067"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "85d548187e8d2d7eb1497919b0d11c17"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "bb9a0f5498ad4642aa84740faa2a2b17"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "0ac314fedfa3a57a374c81abff211c15"
  },
  {
    "url": "de/index.html",
    "revision": "ac197eeaeaba70d2b08808655938aa46"
  },
  {
    "url": "de/links/index.html",
    "revision": "01564fcc9a9bb2406fa8fb17edc153ea"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "671b071c295f4e0ffd91ca2046a70e1e"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "f9fdf35e4dcd6e5a806e59f624e8bec3"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "5f65114df601cc91f2cd0cd8d5479e88"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "da63ae4e4edc59c64ef1df295c38494f"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "b6c3ebe0e24ab918f269465838fe902b"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "4612626e6685286d6b83df0285d60346"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "46348a813c8ecb32cb7f568365bb37c2"
  },
  {
    "url": "de/setup/index.html",
    "revision": "501f0e85ea9175c4f1e5d95380761549"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "5de2072ebdb793a2dce94333a85feb02"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "3ba9906e4596a2543d8c3742d2065e62"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "524cca3a8693f591cd0808bb1267c558"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "6daf893e920ccaa43ba7bc5d639cd1f1"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "7ef883cf518b90f1fad24dcabc1712b2"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "91f84816adc3349bfa14a71a0822a72a"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "1e0999a61f4b649ae31eebb15c3f4d3c"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "049680b54558b17a01c9b8abc0d0892c"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "bc629d6f088e3854d50d0e09a3f813e7"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "b17708a54496095cd27c2198597a2615"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "debbbd4b86278daf102446ab0fb2316c"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "00c1a1f392f50771e94087c6317762f6"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "77c24aa9093384b3c488e7cf71ae0f95"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "a33e6227f641471b548ef6c06e2c7040"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "87c874d6dd3c610c96061737330352db"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "684a94a870045dae7447232aa9c355c9"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "672cfec46d16d31e9411a1373dcd5bd6"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "f66b2d68586da39f14f92bbf09c31697"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "7c4138cb02968e35619a6b569434fa7e"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "cbd0d7043b8e2c2deccf57d49fdc3467"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "021162f64d6a286738d0370d4c8d024c"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "c3828265408494344047235f381ae671"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "44b667e3eddc345a69ff4668848a6a2f"
  },
  {
    "url": "de/usage/index.html",
    "revision": "55256d907632ee5dd88dbba811958db3"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "cd29630134c287036eaf0bc1f7cd6c93"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "9bb307d7145b00dd5bc57290280b8735"
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
    "revision": "2ebcebafade7c44b9e32e68a0b62a65c"
  },
  {
    "url": "links/index.html",
    "revision": "ff9003a6632876bd8ec7adf6007348ca"
  },
  {
    "url": "satsetup/index.html",
    "revision": "53e4065ed1cf352fa259a249be93192f"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "d07c90b944823df43e76ff6486a4f846"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "7754fff4e884039ac6195f049bef636f"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "6d1c1c0c4689b94452347a6e77ec6c29"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "3dce72dee00671da03d1879f82eb5179"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "094c8661f30cc9b87fbc8f9526614255"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "e7993fd9a91196f5202a44701fe31440"
  },
  {
    "url": "setup/docker.html",
    "revision": "b443714c8730c66cc1559351c9d70c61"
  },
  {
    "url": "setup/image-install.html",
    "revision": "d5b667cf309994791c3fa712a50474b7"
  },
  {
    "url": "setup/index.html",
    "revision": "a8c309674480e301534deddda8130ce8"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "e99e6dc543bba08173df4d3e50f91133"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "391ccdec1f917b56434c3204166f894b"
  },
  {
    "url": "setup/requirements.html",
    "revision": "95c713aba3803d52ce5f2fd0534958c3"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "7af0817cf027fe89869661e74757e8c0"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "5d531b765c17ccf0e8357c091d48c353"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "095c3f93b1147cceb78309d2e21c05c6"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "75c45579bb17839f54315a36084f766e"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "b1684cc984f34980eeda3c5f039335c5"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "2b1196c848fbbcfc97132423583946c3"
  },
  {
    "url": "skill-development/index.html",
    "revision": "b7482f7c3c9bccf9043d9d65c7080fce"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "9c39a649cc38b9f9b03c12cbb10a6087"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "8ee1098b67f0a0138e0ff130649ee3cb"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "e664a8bcda69fce72b29b5a94cf66010"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "1e1dcbc57372a1fad70b8fca95d78100"
  },
  {
    "url": "sponsors/index.html",
    "revision": "cada36fd06a6f34e026d4de1d29fce81"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "9a41e61e35ee5f841a9aceee0e99ab4a"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "79ab417dc96b5c84eda248c7dfb7dfc5"
  },
  {
    "url": "usage/index.html",
    "revision": "614a0b2916e772632a0be357bd206500"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "6bedec571044444200e2b08311d619de"
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

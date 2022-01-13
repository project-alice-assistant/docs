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
    "revision": "d391eb2b639e4858837d427e58fbd9e9"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "b0c495e16c684614549ca354521cbf1f"
  },
  {
    "url": "about-alice/index.html",
    "revision": "77fe126284ac27f4e352f0375fc50630"
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
    "url": "assets/js/10.9cf68bb8.js",
    "revision": "09622d27a49d2e678ebbbe7db142b463"
  },
  {
    "url": "assets/js/11.09c51d6b.js",
    "revision": "32f83c157b260d38f2ec399057d247fb"
  },
  {
    "url": "assets/js/12.01c4c9ea.js",
    "revision": "55e74a1421482011abf209e6730d68a5"
  },
  {
    "url": "assets/js/13.c93359d3.js",
    "revision": "8e95d9807f4cc5bf755cc19d3fa2e90d"
  },
  {
    "url": "assets/js/14.d05e5587.js",
    "revision": "a7d87fee433348119d2d4e368e3cfcc3"
  },
  {
    "url": "assets/js/15.22eb71ba.js",
    "revision": "c3ef1bbce6e1d5488ab8c2b500cd7c25"
  },
  {
    "url": "assets/js/16.49f43c8b.js",
    "revision": "4edea5114774b4bda91ccce73f9a1aad"
  },
  {
    "url": "assets/js/17.4b6d48ee.js",
    "revision": "a573c6373c68abd225806069f432fbcb"
  },
  {
    "url": "assets/js/18.d7a7b0fd.js",
    "revision": "600e9cab489828f740d06ce0ac08a753"
  },
  {
    "url": "assets/js/19.62526a65.js",
    "revision": "8d412f762facad418e3266f753708606"
  },
  {
    "url": "assets/js/2.b3ff83ad.js",
    "revision": "7a380f1584f97f3aa4218e01abb122bc"
  },
  {
    "url": "assets/js/20.62e977c9.js",
    "revision": "1d2c1cc684ba01a60d1f4974c677a0e9"
  },
  {
    "url": "assets/js/21.2a60bab9.js",
    "revision": "ffdbe501bcac82480cedfec5459424d4"
  },
  {
    "url": "assets/js/22.83e16af6.js",
    "revision": "36777ac2feedc83d794cd23643748a4a"
  },
  {
    "url": "assets/js/23.b613fb07.js",
    "revision": "1926b31ec3762892bf1571a674a4768d"
  },
  {
    "url": "assets/js/24.002bb27d.js",
    "revision": "9b7c6581c70606295d24676c33914e8d"
  },
  {
    "url": "assets/js/25.135dd58f.js",
    "revision": "b3849d8f13d1cee0131ef513a8b80831"
  },
  {
    "url": "assets/js/26.ed0ce721.js",
    "revision": "3123fda0b39f1741f3bd111f9c355efc"
  },
  {
    "url": "assets/js/27.6a915f93.js",
    "revision": "3593940e71d1634223c6e8d730974265"
  },
  {
    "url": "assets/js/28.5ec0c748.js",
    "revision": "85fee047dc319a3710b362e85990dcdb"
  },
  {
    "url": "assets/js/29.787755c0.js",
    "revision": "4ac65135708f81e99dde5756005c9cda"
  },
  {
    "url": "assets/js/3.2451a539.js",
    "revision": "e24760a840e67a53e0278a6c99f44d5a"
  },
  {
    "url": "assets/js/30.f389f516.js",
    "revision": "f48fd1f33d5ca00d1ff41c22e7f74454"
  },
  {
    "url": "assets/js/31.c96fd4b3.js",
    "revision": "e491cc4273f9a2d3405d696f8e57a1a8"
  },
  {
    "url": "assets/js/32.6597fa13.js",
    "revision": "bd7a05f9221bb093f3eb9cb86f9908a5"
  },
  {
    "url": "assets/js/33.8471edbb.js",
    "revision": "97f1dd78d31187a3064bed86a16fedf4"
  },
  {
    "url": "assets/js/34.11a56a66.js",
    "revision": "0572e4d6285f5170b1a483d0ab545738"
  },
  {
    "url": "assets/js/35.0993a186.js",
    "revision": "b91b4657b5486588ab804ded729cf632"
  },
  {
    "url": "assets/js/36.3d3d505f.js",
    "revision": "07a4af245d8e7d72bccb71aa2e2c1a4e"
  },
  {
    "url": "assets/js/37.ef120a69.js",
    "revision": "2ded8f8eee12c677c9d820be52e3df29"
  },
  {
    "url": "assets/js/38.5ae80fea.js",
    "revision": "2150a21f77fe2f696653e870caecb255"
  },
  {
    "url": "assets/js/39.078b7570.js",
    "revision": "b8dc43341c774f82c51c677671a2418c"
  },
  {
    "url": "assets/js/4.3a6a18ae.js",
    "revision": "066ef1a1dcc43e22708db6af82d143ad"
  },
  {
    "url": "assets/js/40.5e5dd990.js",
    "revision": "c00374bae881234077e18a67fbd9be90"
  },
  {
    "url": "assets/js/41.1840f934.js",
    "revision": "ccdad4d21470352b9d410d7132ae6a63"
  },
  {
    "url": "assets/js/42.d1c3a36b.js",
    "revision": "56c8d20e9efd9fa78dbfe810120364fa"
  },
  {
    "url": "assets/js/43.3ceba228.js",
    "revision": "2ef0f1818824097deae3d04d1c6a27b5"
  },
  {
    "url": "assets/js/44.b4a261ff.js",
    "revision": "d9c313ce24cbd05cb0d9c6f2db823cee"
  },
  {
    "url": "assets/js/45.6a0055be.js",
    "revision": "a1db8cbaf747e7ac494b6b647316e6fc"
  },
  {
    "url": "assets/js/46.d5158b34.js",
    "revision": "f90bb11a363880dcf3f9cff84b7d6fd4"
  },
  {
    "url": "assets/js/47.5db8cab9.js",
    "revision": "22a244b0b02e7bbe16d1a936c00589a7"
  },
  {
    "url": "assets/js/48.18ffdaa5.js",
    "revision": "6c9232b14e1ab034ab40dc4f05c09d67"
  },
  {
    "url": "assets/js/49.6f7ef6e4.js",
    "revision": "7bf8e83f9ecfe6e512bd34958c6985b4"
  },
  {
    "url": "assets/js/5.09c2ff66.js",
    "revision": "5b3bbd0da8edec72aa9fc480688dac21"
  },
  {
    "url": "assets/js/50.9d585146.js",
    "revision": "74e868519516b2e88139b47da5b2ea91"
  },
  {
    "url": "assets/js/51.5ccd1a79.js",
    "revision": "f1dacc7ebbe4c9bbda50d1d74f31af95"
  },
  {
    "url": "assets/js/52.f8c8e3b9.js",
    "revision": "8f31fca7ccbf4737779e538ea596f6c4"
  },
  {
    "url": "assets/js/53.11473f30.js",
    "revision": "95419711e55c1d6d4418767e187b0b70"
  },
  {
    "url": "assets/js/54.5632ac44.js",
    "revision": "717e20893baf641afe587c33bdfd230a"
  },
  {
    "url": "assets/js/55.3a2e4416.js",
    "revision": "1413da08f0cd4cbb2607265608796932"
  },
  {
    "url": "assets/js/56.dd21ef74.js",
    "revision": "81c2b253de9a9133ebe59b983bf08479"
  },
  {
    "url": "assets/js/57.f34ee7a4.js",
    "revision": "52f2f36fbeb8c03d1b56119e01250008"
  },
  {
    "url": "assets/js/58.3461ff4c.js",
    "revision": "3d619f80905d27b272372572fc700459"
  },
  {
    "url": "assets/js/59.c729c97d.js",
    "revision": "cc1d077b4b26f719e947a99082c60168"
  },
  {
    "url": "assets/js/6.c7b0e53e.js",
    "revision": "98cac2eb8613b46ead37bef3a4fb1a41"
  },
  {
    "url": "assets/js/60.3683d908.js",
    "revision": "c6db0bfe65383d18a1a1cf6cdc1e7fff"
  },
  {
    "url": "assets/js/61.20a4896b.js",
    "revision": "18c48698c53e51e3b5c123f59bec96e2"
  },
  {
    "url": "assets/js/62.a82dfe93.js",
    "revision": "32130336e97afaf1f81e15d60dbe43b0"
  },
  {
    "url": "assets/js/63.cb7fb5a7.js",
    "revision": "7aa74c7e9c0fe6e8d00a6748803bbee4"
  },
  {
    "url": "assets/js/64.d407b313.js",
    "revision": "a08ed9d955597b48fc09de901c283a94"
  },
  {
    "url": "assets/js/65.0a56a9ab.js",
    "revision": "376df5b924d385a7908d1b7b69a6cf8b"
  },
  {
    "url": "assets/js/66.ec0bae9f.js",
    "revision": "cdf187cc0389b99e1db322dd8f0315b2"
  },
  {
    "url": "assets/js/67.5e5d920b.js",
    "revision": "e5ea8d33123e4c81f8ed77ff8a487440"
  },
  {
    "url": "assets/js/68.7e3c1146.js",
    "revision": "0305de23547cfde32cc4bc8c98e819d6"
  },
  {
    "url": "assets/js/69.64ca953c.js",
    "revision": "8c301346598846ad4af4e355e4b67c9b"
  },
  {
    "url": "assets/js/7.1df6a09e.js",
    "revision": "380a3be85f6f8696da8b7e7516da5987"
  },
  {
    "url": "assets/js/70.b44d7f45.js",
    "revision": "a32a191c295cf37ea838b717417b8980"
  },
  {
    "url": "assets/js/71.188a02ac.js",
    "revision": "e2b0cd205eb8c3bf5f26078b58635a6c"
  },
  {
    "url": "assets/js/72.f5d4ae9c.js",
    "revision": "8e76bbcff5a26d43f4a156c995f2943f"
  },
  {
    "url": "assets/js/73.f3e4d969.js",
    "revision": "6d7c966b29d13fc6b7db23effde01a60"
  },
  {
    "url": "assets/js/74.f819dd12.js",
    "revision": "0b07a523f2fcbf4fa2ac5d11e58e8f1d"
  },
  {
    "url": "assets/js/75.62f5316a.js",
    "revision": "7ee4e6cb3a585f16efea6529e92c4193"
  },
  {
    "url": "assets/js/76.708ea954.js",
    "revision": "b2eba3988ca17af1e10d24459044351e"
  },
  {
    "url": "assets/js/77.87a8f580.js",
    "revision": "6446965d7a19a9d6a5a7ea1ccf3afffc"
  },
  {
    "url": "assets/js/78.a0d9ee06.js",
    "revision": "057aa4948706f1c023bc79267d98631e"
  },
  {
    "url": "assets/js/79.514420f1.js",
    "revision": "c025ede1244d99b909e781a2203ebaca"
  },
  {
    "url": "assets/js/8.7d14e9f8.js",
    "revision": "f2d706f807eee35817e5051517c6d31d"
  },
  {
    "url": "assets/js/80.4ad961e5.js",
    "revision": "b9a25ee5599c7c141168c44b8e5cb155"
  },
  {
    "url": "assets/js/81.7295cf51.js",
    "revision": "8a7d3863876844189d979a8a3f71d3ce"
  },
  {
    "url": "assets/js/82.c7bc12ab.js",
    "revision": "4d578d67abfd3c17da40a1f4ba00518f"
  },
  {
    "url": "assets/js/83.354ce6d3.js",
    "revision": "d3838716c1aa3dbf5dbc05a60daec1cc"
  },
  {
    "url": "assets/js/84.e1ed474a.js",
    "revision": "66bea1b95ed911e7e696bc29ba87d295"
  },
  {
    "url": "assets/js/85.de5b108c.js",
    "revision": "b11d9cb5a16647777102b6f752183941"
  },
  {
    "url": "assets/js/86.9c9c2b3d.js",
    "revision": "5f62601303f1602b3e1d07f61d1df445"
  },
  {
    "url": "assets/js/87.d107c550.js",
    "revision": "4ac3caa21eb8076cde1b1c4900791268"
  },
  {
    "url": "assets/js/88.4a42ff31.js",
    "revision": "c8ef4cba8c2a9d23d04aad483922a1ec"
  },
  {
    "url": "assets/js/89.dc5adfd8.js",
    "revision": "7713ae9b11d8d38674fd585489f32996"
  },
  {
    "url": "assets/js/9.72cb00f6.js",
    "revision": "f07fab096f757588fb296ccf0dc3ea73"
  },
  {
    "url": "assets/js/90.08b60423.js",
    "revision": "816faae2f3153c8b4248dc076837fcbd"
  },
  {
    "url": "assets/js/app.9bc7c83a.js",
    "revision": "c000e9b748bbdf85ae7f306739a01bd3"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "cdb3177d428bfe841e41f9b25772be3d"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "8cd371cb210f2b137b801bd6cdea5e0b"
  },
  {
    "url": "community-made/index.html",
    "revision": "0025a2a887afd3f052309b19fd1aaed1"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "59692e507f5ac836180901689eaf0906"
  },
  {
    "url": "contribute/index.html",
    "revision": "3a26787c0abd208c0b235626351ee5ea"
  },
  {
    "url": "core-development/index.html",
    "revision": "a30097d9ec47faa3347b4dadc7d8f738"
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
    "revision": "203914a9b740a66b7a469c654dcfa49c"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "0b3338c5291210c93925e7e499cdb95d"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "24c8569354a6654dd7548520d554c4f1"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "769082d0d95cc09930c30c9000bed0e8"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "ae6558ad66fcdee42b1d3644890915f9"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "eed1613294b14dee1158645d2a2e21fa"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "fb6089bd383d5401583bdac1210b39cc"
  },
  {
    "url": "de/index.html",
    "revision": "4d6e6ff8648b093f679a0f881fd61b8e"
  },
  {
    "url": "de/links/index.html",
    "revision": "d30d26147accce671ae746968ab94d67"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "36a9f8a745206e36c3e16130d2dd4a26"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "62d80eaa10ea3ff11971ff29827941b0"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "7810785f04c07d75e2929c468fc25c44"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "01b87ac10418b002ac49404fc979d28d"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "8021b898365a4870be6288749f3e72e5"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "e25564470f7c40cb0316d6f4cada579c"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "aae3d6674e8827eebe59e6ede7fcda18"
  },
  {
    "url": "de/setup/index.html",
    "revision": "802b8509d40eca4f5eba8fde365560e8"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "1d708206b5f6a01422d8bbe37fd517c7"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "8362063e7f27fd94f2fb2ac9bdcdef59"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "017b552a223151db9b4c7cc8686c5d6b"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "5a28020d799f15ac20dee305cf34f092"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "d63c4060a5a615a1972fa62a97412978"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "ae6c9eb4d639ba6eca396edd1ec35cf7"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "258534315038e215b4405e876fd1a528"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "9aadd5bbbade463b0c19b306c39675ba"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "2964e23ae630a913de2c9d16ce97c99e"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "47f9614c370c4eb3aa07e72f6be743f8"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "a12c0ad4fcd3afabfb1b094f7083400f"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "70919b09e2c96f8f63e498089ec80873"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "5ec4fbe99fe5ff918a5c1bbee68bbfb4"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "a437a556e4a6e47de63d4b3704f51662"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "12c0ece9ab6680805552a37a0ac1466f"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "2e7469c66a70cddf908aaf83fc0238bc"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "5c12723559522026d2a3d8ad9a2d5ec0"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "cecb0ad4d4c2fd503ceb0da3bcd548b8"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "354b319b54c57ac021e5d21e67154a73"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "87f59c0936d4c6685b7e830fcc18d4b7"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "81f9705e40d4de3076146bc67aba9b6f"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "8212a0863ac2b3bac1181d3aa59163fc"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "93987d15053e263566def8425307a239"
  },
  {
    "url": "de/usage/index.html",
    "revision": "f4c2180ccb5f44f6ef27eb6cdcc2ba74"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "62e0c6662e1fb01af00a444bcb3ef326"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "8f4bac405a2b6abc488cfb5127808c90"
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
    "revision": "10c751eb351ff1409a8e5f949de7b310"
  },
  {
    "url": "links/index.html",
    "revision": "5adc6ddca17a2eb827163ceef834fb82"
  },
  {
    "url": "satsetup/index.html",
    "revision": "7190f0867effbe60819143330ee0023a"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "acc949531a75803f25e19dbeec7fba3f"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "b611db83ad71753e14de0926f26ebd93"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "54bccd2cc4b0ecc5a8fd2e847a9dd67a"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "abc828d06b2d55dc35a474937ce45f92"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "12af6c74b7e1ebc3070ee84986be6915"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "55740ed95f6ddeed15fbc858eb7b1b16"
  },
  {
    "url": "setup/docker.html",
    "revision": "3bf8d69c7be891619798f20ce92ed0e7"
  },
  {
    "url": "setup/image-install.html",
    "revision": "ac9cc5f31d8dd02656c099a32957af8d"
  },
  {
    "url": "setup/index.html",
    "revision": "15f0365d5963f611f3e8016c67fade37"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "534601af7304bdda192c9dedf6daeb27"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "22403fb61cc220996d11fb2da6f49935"
  },
  {
    "url": "setup/requirements.html",
    "revision": "d2d74f018ebb05b704d99c94821e2b73"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "904fde926214d6ecd5f8e1b894515778"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "9a584f565326d788f900efd5f10d69f6"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "584e1961180405dd07684e66c83cf8a5"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "2ff25c6a2be5728e6564407b5973949b"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "e8c2775ab0eb71638bc8283888684c89"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "e4e6ab4f769092c3d5d9de1da5ef8edb"
  },
  {
    "url": "skill-development/index.html",
    "revision": "45dc19cb0ea5a1af9f6166c229c29a42"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "62c9d807298cf26f1ff67be639bde200"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "e5bb4b248e9462e589298874f27e00f6"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "8a0d5eb0e3bd7fc0e8d96f57c8eeefe6"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "f80cbe7d646432419c7b9b1024fc35c9"
  },
  {
    "url": "sponsors/index.html",
    "revision": "dd10ca2290f367b2e2b6301eea531b5a"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "7d9128e67255853ed755f2287cd26088"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "c8f99b2fb2c7d3a12ccd4096bebcd6bd"
  },
  {
    "url": "usage/index.html",
    "revision": "de7f7ee53f008da3a4bebf64bbd0fda0"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "dc0d124f4cbf3728cce4b095eea5ed2e"
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

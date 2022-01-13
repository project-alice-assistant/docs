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
    "revision": "dbf347237fe533eb892ef602c8f737cd"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "3cbcde22d99a60023a9bba248feef57e"
  },
  {
    "url": "about-alice/index.html",
    "revision": "b445cf3b18780b581f16f97c4f993003"
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
    "url": "assets/js/82.7b2ecfa8.js",
    "revision": "b504729d3bddf2b3fb2ab0614f7ee84b"
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
    "url": "assets/js/app.4c11cb21.js",
    "revision": "9e912c93c3c74642fe072a435553b226"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "0766e6aed971f1660894ed604b2c681a"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "c26df6efddf6bd661377f1699a266a77"
  },
  {
    "url": "community-made/index.html",
    "revision": "43c33f971a8655cd98de207c0524a01d"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "9f110e8f591a5b5bce7d5c5c39a94c2a"
  },
  {
    "url": "contribute/index.html",
    "revision": "1809ce5f7fceed83f38c1c497b729c0d"
  },
  {
    "url": "core-development/index.html",
    "revision": "1a1bbc4eca8da3a4869a4ca22932c4f5"
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
    "revision": "1dec71ac64f2d0e930b78fd10980d720"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "8160968a00735cb608c2a05b1f318c98"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "ee4d51b776e69eb3db540af1508174e9"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "8df2b843dbb7bce755cbd7e82258a9ef"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "52b3285dbc53470c57ee93e806d87e49"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "dd5c91c15d9fbf59f3caf97e5b6fb3a3"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "15992114ce998c92dbe7363461cb5759"
  },
  {
    "url": "de/index.html",
    "revision": "ae4e0b00730322a5fd90008644b02f8d"
  },
  {
    "url": "de/links/index.html",
    "revision": "c922a1ec4c9feabe3e86654a26e97556"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "9d48c7cd5fec7f54408e4a414ff53fa2"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "e2afb99ad8f3472c43c17253b1b083cb"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "01b34c29443ff3693b6c5278cf499543"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "bdcc94ef6adc9ac9d762480413c9fe85"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "142528768e28ed32ba8f0decce9d9609"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "cae2278938403e9a2fe652b9f55ba44f"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "2aab6d110a39355961095d0ec2a620a5"
  },
  {
    "url": "de/setup/index.html",
    "revision": "af3d678cadfafb0da18966a32b829caa"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "7a3287a0d4a2d83ac22e45ff98f91874"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "710302a2bbb9e80adbb9a9b81f18b8c8"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "fa3f4e190dda0b3cef53e4b131cc1eb0"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "58ed42cacb0de34988713748abde729e"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "674ec7cea240ff8f48969387bcca05da"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "c93ea72bb931f35e1cbce45ad485ee97"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "c48488cd7febb3ce22a72f8b88f86baf"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "8759844f42aee035b73c94f5514509cf"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "3043ae23c220635651dcfe51550f5ac8"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "475e3b7ceef1e635d2df00b0a5b48cd0"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "fa6d36e929468c8954642d4e00ccbbb3"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "9a2eb3988790a8873130bc211ebc2b17"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "fd567ffaa26be190ed4e12b1eccdb982"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "3d82ba7843459b113f05dac6b9060da0"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "f4a8d20ea1886e28165aea7c8a0f606d"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "feb91fe7bf3c93e646b816451fe67174"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "1cadb658a8b68310699c7923bcce7e98"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "905f027db11108f310bc4dc291e86513"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "10b74e6c7f52c108dc57bce96d743177"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "8915ebfe8a55791cf8921a98403ef74c"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "26e2c03d8ea677bcde6f7bad96ca03bd"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "718285c2aae8cdc5da1b40ec3bee800f"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "9533f5c5f2f993d3ae82992e32f65b1f"
  },
  {
    "url": "de/usage/index.html",
    "revision": "d3f66c5d49f0f0398a13578c65d3045d"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "b25913be2309e8349e215fde2cd69bda"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "109fa5b69df9bd0c34716bfe5b332547"
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
    "revision": "70b303edd79a12ef180cab2b780937f4"
  },
  {
    "url": "links/index.html",
    "revision": "7cd0f7ce4a2e5aa047ac18e664a9c5ea"
  },
  {
    "url": "satsetup/index.html",
    "revision": "4ffe2faa4863570675df4439890d00ee"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "f926d7e079e7ddd72d10d332761cc4b9"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "ed05c04ded8d5d710d77ab2c14fee634"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "ac25230bc58d791f2597371a5d5bf0b1"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "3916a62cead649ea20b7cf5aecfcc1cb"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "085706424f032522f5da3e6ce941b3fb"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "b778d399594eae17ad6985a5fd7e1207"
  },
  {
    "url": "setup/docker.html",
    "revision": "a86c2c984c69140f8040d73cff814e1e"
  },
  {
    "url": "setup/image-install.html",
    "revision": "26f14584e2ce2119f0a811ad85981377"
  },
  {
    "url": "setup/index.html",
    "revision": "b9a6ec2fddc25e4b37d45782025b07ea"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "323e6ddb87ff2447cb57256ab248dac6"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "ad65d613e0f6c2d26a4a15a10e8ad9ec"
  },
  {
    "url": "setup/requirements.html",
    "revision": "4e0f53c90ba4232e3d184bd472a53e8e"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "2243b4ce9255985964819d737bc583a4"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "b9626a49c0f625d903e26afe54576e52"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "8826a2247567f8a21b1ce88a221b7cfe"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "14c79b859948eaa04986083d081a1f0a"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "25eb72ebf6e2e6dea174128fd5f32d40"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "968f8315f9eab963658b09b7fe9e7ffb"
  },
  {
    "url": "skill-development/index.html",
    "revision": "6dbc1049daf22e237f8982343ba4153f"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "55d5f3abd853d71ba3349b403a04ad86"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "3e31fea206d2f6850414ce6982d83d88"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "b326f28c938811b41f52444c95dac263"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "2d8c8369fbea689120b4cb95bcf8b09c"
  },
  {
    "url": "sponsors/index.html",
    "revision": "5ccdb519a5fb450b7414cc7b4953bb71"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "15633e181ee1186df3b89b63698a452e"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "c7e7ca7136931268bf3d21e39c2aa33d"
  },
  {
    "url": "usage/index.html",
    "revision": "6025de5e0f8f54d5c9a6ca602cd0141f"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "764dea1cbed738bd6fce5c4891ffb088"
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

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
    "revision": "745f907bf69f5ba10cd2a56a3efaa839"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "5365e0fa35dda1607ab56a3bf5091452"
  },
  {
    "url": "about-alice/index.html",
    "revision": "430c3363137fef5630c324216ab725d3"
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
    "url": "assets/js/app.1e44b50c.js",
    "revision": "0cc01b8dc258f91cfc140b25214cbe6c"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "eabcc2dfd99244193cc65febd8689ca1"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "58a20983c2d2cc2ed3895c45f13a2f5e"
  },
  {
    "url": "community-made/index.html",
    "revision": "9bdc16a1cb65fc057346dc1f6eb51895"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "51eeb4b82b2e1999c47863dacd923d0e"
  },
  {
    "url": "contribute/index.html",
    "revision": "57852c01c40ea1d638983431c5417c9d"
  },
  {
    "url": "core-development/index.html",
    "revision": "73855d4a203f193420be4f05147113b9"
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
    "revision": "5cfa076e34b54fe51d0d9bc14382df90"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "72b9cca08e422fce15895b3f8198085c"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "bc8d0b677ac9c3d6f1394b5858aafc41"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "876db1b23764e4cacefdba5f6ec96994"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "4dbc60b36ad98a552aaff3d9b39a4768"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "90c7b5a448fa4d35d3b7ecf7e23bdac0"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "de03bbcfdeb7818fea4949cafdd7c5bd"
  },
  {
    "url": "de/index.html",
    "revision": "f8b07d9de4b99ac8d587c94614305a72"
  },
  {
    "url": "de/links/index.html",
    "revision": "e0ea1c677b8a5539d6d51ea4f6bd8d4e"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "bbfc26be997b896970fc8de0337dd554"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "c530449a41af7f729d9d44a50454cbd2"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "6d91d4faf0e75889d83e50be80a038c1"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "65bf11462f59578659f93b7bd860541e"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "99e0144e42a5dcc2de647d4f2245f87b"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "c4086d873f7548d890d3b2a5f1036f07"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "f2a8c8365f1d6d7c8c707e3e6ea1499e"
  },
  {
    "url": "de/setup/index.html",
    "revision": "73a300ca5dbb64ad0ad93fe1ddb5622f"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "cd86c1abc10e0ce56739d0f7b30c7c26"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "d2f6c585df5e52406078f7501a1748f4"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "47651ebe7e90b4318e281f93c845766b"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "0ec11eabd301610c5ce41aec718cf8e5"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "ea9464aa0402d9827f214e80d46ff1a7"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "b74cb0b2ab4c44f47dca4db7114f9f2b"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "9409f1075329115fc2b2a9a595d3db44"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "161898a95f72c4918208bc1c077cd048"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "5645ca0f2879c71a6a1689e448055329"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "e16fcaa83465db51b90a13d9f1d3236a"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "65c38ff428f20b6d35fc0cfb880f232c"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "a67ec2c521525db9c3f49ce7e7d84784"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "6ffc4ac821c7a7b11189e60f4d9e2a9a"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "511d9acfa2b5ff7107f347880758617c"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "283f5db51b34d0320f1d24924e41166d"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "1965bcf63e095717137fb1ced186d60d"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "39ae1176e15bde03707e741e186bd4f7"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "2d1b6423ec261bac49447d216bf94733"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "e7c350836f5519c51adffd5886352540"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "7a1cf5b34a9f3c042ff2c7e7a6d3386e"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "a16adb20f132a9af3e38173a66bf4bd8"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "3a98a065364548e4c7941a432d71b350"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "f4fb803aa19d066c3ea70048dbe7d17d"
  },
  {
    "url": "de/usage/index.html",
    "revision": "57bda01afb0dab86a6f774f23611467d"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "ff4c9600249b9d9b1007d2a3373d3fbb"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "77896b1d13e038c9dbb95b17300f8478"
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
    "revision": "67292e11ff3f1f6ac08f15ddad7ec33e"
  },
  {
    "url": "links/index.html",
    "revision": "11bc1ad13dc235d172f3acde0d92b271"
  },
  {
    "url": "satsetup/index.html",
    "revision": "e621eb414c48d60b1beed47ce868aa67"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "07e554bd43bd24c0b58984d96a72e8b4"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "f9ecb27cfe12549ab6d0842c38e9a7fe"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "9cddc89505cb145b1dd63f826a0cdd96"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "9202c3dd523fbf314ffb563ee7054bd6"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "278b5f8b103fd2f93837c529e146fc77"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "cb26d972e8dd57621858e8e547554d2e"
  },
  {
    "url": "setup/docker.html",
    "revision": "3962a5d1b2959037ccb889c9a7ce08e2"
  },
  {
    "url": "setup/image-install.html",
    "revision": "a08fadfb8ed59107a017417e8939893d"
  },
  {
    "url": "setup/index.html",
    "revision": "c12ac3034d3a6d1b7a4b8bec0ab36337"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "90892f5f92abff644c639c2047e54521"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "8fef624638fe5a9601a674933dc762ff"
  },
  {
    "url": "setup/requirements.html",
    "revision": "9c0ad5996b1ef4e1e891dbfd350f4293"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "35d6d0eb87cf0cb1b7fc61d40a9f53aa"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "c7d4c264618fd50f1934bbe253093438"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "17cb1aee6c9652bc879183e4b345dda8"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "abdba3e0256b5a290a84e1de0a7706cb"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "e2bc2d0001886adcfe18e7e5669a623e"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "9a0eb567c511c00b031779ece8518b2a"
  },
  {
    "url": "skill-development/index.html",
    "revision": "9fb3b9196495e97b284eaecefbaa28e4"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "18c44ab8edaeffad81a86ec2e869a65c"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "8a9e349d9185c3d0ef57cdc976e40591"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "ef42a7db804676f364432afd8f745afe"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "6f10630b55bf7f22ca647fb8d57f04da"
  },
  {
    "url": "sponsors/index.html",
    "revision": "a40b208f5487cd4869b70613dc4f42cd"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "9cce58420585c30a98bf5b3e6d0a2bd3"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "81b323a52ee77be19dfe3b431c6364a8"
  },
  {
    "url": "usage/index.html",
    "revision": "c8ddc80e851c5113cc2114965f339fe5"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "cbd217652c577cb7d1108251670749ac"
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

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
    "revision": "4ead58a255952e6a5b392cdfaa29ec78"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "b18528322ab9546449eb02b76dcab461"
  },
  {
    "url": "about-alice/index.html",
    "revision": "16d23f64366990c1696306c9e58faa3d"
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
    "url": "assets/js/2.4ec5cd51.js",
    "revision": "2077d72cd3d5ea5610f55d92b1b1fd6f"
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
    "url": "assets/js/3.545a52f1.js",
    "revision": "b78c2da8156c29b2c64630abfeea2ee0"
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
    "url": "assets/js/7.0645293a.js",
    "revision": "c4aa0af1c43b2f919b4b67e4eff44b26"
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
    "url": "assets/js/app.9c7c5263.js",
    "revision": "6de8aca79f074a441caf7000024df5d5"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "c91322e133df8f6fd1a8ce681b72eaa3"
  },
  {
    "url": "community-made/index.html",
    "revision": "73585a773e6f55271534bc2375471bee"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "69d4689a771db90260bbee35539015df"
  },
  {
    "url": "contribute/index.html",
    "revision": "dd0680350d18375957c8818b02ffca02"
  },
  {
    "url": "core-development/index.html",
    "revision": "f927c59a46e692c3593623be426d0787"
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
    "revision": "a5209cde0dca29fe6259c2209b35a2fc"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "0dcfca936e61d03510a6125f9088a57c"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "d9e8f3d309f786d9e71bc4fb3c2d0d5a"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "106ed2ee0d7b0016185500653978d67b"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "aa1600c2299d7bd444200db3d7ad1726"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "1dd62b3166de0ff551506e8bb8f4ce16"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "8219a292f1fe1617c087b159d0382ba5"
  },
  {
    "url": "de/index.html",
    "revision": "07e43bc9c9723bca77a7cd765c212dd2"
  },
  {
    "url": "de/links/index.html",
    "revision": "91d07ad1880126020eb28d1ed14cac1f"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "50d1c9da5329a00ada9c53dd7777b384"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "395ec72424329001fbd525e8c7a76b3d"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "e7133a5222881424279851ff5e17ca74"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "af0661ceb76d948b28aa81c8144a779e"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "5b95767c798ea8fc075d115b05156aa4"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "9939491b941708887d77b629b152e1b2"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "aa142310983e01c6c09fa27f256d8951"
  },
  {
    "url": "de/setup/index.html",
    "revision": "55309eeeecfecf672ba9990842b9b1e7"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "7e3195522a8b1a2c0a5178dc36ac37cb"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "2991d107e3836199badafe094fc42466"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "887185b92ac9bc9399db1dae85852391"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "31430b7a3b2c9de47c8840104ab3f42a"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "d611fe7e6630928288e5b3fcc7ff667b"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "9bc66ba7ff81d0dfc230032e44d37b54"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "463b595140e92360a487511c7741c2ba"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "8834b9b8b33dbd9b21ca11354b256879"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "64872b40ff9370bf899776ec182141cf"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "de16e88d0cdb23080c22f026f82b00a1"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "95c5718736459d5dfc031e1effcd4404"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "fa6213921e9e43961eac8e9914bebcae"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "e095237044d62cc0029872badb28682b"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "c89bbf6c7ad3ca64543a5f7883c7e7a6"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "6838daa8719590caa660e3f4c9a69ff7"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "7c61c46049de5eb025cb960d96e66cbd"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "c8f3a9087ac37572a5f0d94475d42889"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "c0df6d219e4fcf33f50f8bb8f0c066b5"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "dc5465112c661f42070580900548ce44"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "947e337564607b5cdd5c4de9b3f53fd6"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "e88a4c53dfde256a8b6fd06bfc1b5903"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "650c5dd5ac27f08baa96b7b2702bebbc"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "643034c569a68c5d1b75b36f389a0954"
  },
  {
    "url": "de/usage/index.html",
    "revision": "84dc6ba5fde3baf337f04bfe30855c5d"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "706da3beea488c15d6b59c0698c29970"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "89abe0c14cee38fb24f8f7dc3bae9440"
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
    "revision": "64c7a1dfd8fbef8d79c489749ef8069b"
  },
  {
    "url": "links/index.html",
    "revision": "ca125baeec11149c8c4c32f322b4889f"
  },
  {
    "url": "satsetup/index.html",
    "revision": "bf204f625438399d05d4763bdbf36a75"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "75a92701285f0ab34a93025ab0129b0d"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "fcd52b0afcf189fe458faa409a17a0ca"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "e19786d921771d65bf190a791305d8cb"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "3a5e010936852254625d84632fbcb025"
  },
  {
    "url": "setup/docker.html",
    "revision": "e0e2306d01e922a3368b58143e5fa1cf"
  },
  {
    "url": "setup/image-install.html",
    "revision": "e254a630841f368224b26a814d8044c4"
  },
  {
    "url": "setup/index.html",
    "revision": "70f3f082946e7e973b745a59e6e53b6c"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "d7a7c04e169e944a061edc56e7c2a016"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "cab9b4232805aa6350ae391fcf013b36"
  },
  {
    "url": "setup/requirements.html",
    "revision": "2847ee5b727a9da0f1b270983eed3762"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "de909f62f1dfd01ce6e82352f850a79b"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "7a8638f03618c8b82dddcaebba163f0b"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "e90125b7a12718032dfeebae036b474f"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "0c9f08f344c63372a17e5a3f5014e79f"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "5807ab8c0ec1f7d23d57f884f5f2f44e"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "eb56829a6128e49f6a306898ef9e399d"
  },
  {
    "url": "skill-development/index.html",
    "revision": "3c702624a45d27fda624ef8451485f04"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "195bdeac5b7eeefbf7cb21c17e0a90c2"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "d9aef7cc18b01936c903829cbc4b3b4e"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "f4c0e2d53db0e916f651d479dd6fd90e"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "844ec10ec012afb3145fd50ad932aacf"
  },
  {
    "url": "sponsors/index.html",
    "revision": "adae3ccd604e6dfca47153dcfcbd2e9a"
  },
  {
    "url": "usage/index.html",
    "revision": "a9a6affa23f0a43d73aacd21c9bfc6b9"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "de2bfa7c2f16470f1d2d3626f2bdd111"
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

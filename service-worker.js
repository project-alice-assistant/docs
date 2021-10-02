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
    "revision": "1cc3e357f2d2e2e5e98ab636281f2cc8"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "8a8bcefff08c7dd93b43f4c36d910917"
  },
  {
    "url": "about-alice/index.html",
    "revision": "3a14bf463362e7494d463e96e5b956c0"
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
    "url": "assets/js/10.6fc6462e.js",
    "revision": "7ba50f32f5a834c848d23da71bc3df0a"
  },
  {
    "url": "assets/js/11.24a8aa79.js",
    "revision": "c48b577ada1574fe0adb05ed7834fe4f"
  },
  {
    "url": "assets/js/12.5b8a3b7c.js",
    "revision": "796d2f72c424a44a9e2b9ce11f07ed26"
  },
  {
    "url": "assets/js/13.d8dad290.js",
    "revision": "cf22be8c6bbd7ced00c30251319a1062"
  },
  {
    "url": "assets/js/14.e0b0552a.js",
    "revision": "2ec382f72dbb5fdc926c4656b4fbadbd"
  },
  {
    "url": "assets/js/15.dee676c3.js",
    "revision": "275eee2708ba90a40ddcf4962f8e230a"
  },
  {
    "url": "assets/js/16.2236ae1f.js",
    "revision": "98a97f40efebcda5f83fbcc7f1b5842e"
  },
  {
    "url": "assets/js/17.a4b835c3.js",
    "revision": "caf9086e89f54f2e861df59e4ac42456"
  },
  {
    "url": "assets/js/18.2aa59b9f.js",
    "revision": "92ccf698a7de4a5add12be4d6ec22b22"
  },
  {
    "url": "assets/js/19.84d5b360.js",
    "revision": "42bbd337fd1843445dcda6bbb8274aaa"
  },
  {
    "url": "assets/js/2.b912f33a.js",
    "revision": "5379d9e991a12bb6dbc58e7a593cdb11"
  },
  {
    "url": "assets/js/20.dcab6409.js",
    "revision": "9a1d4067660d58b6052f27e203ab5430"
  },
  {
    "url": "assets/js/21.593787bb.js",
    "revision": "71f044afc117401d4d23875b2eb376d4"
  },
  {
    "url": "assets/js/22.43fe5f8e.js",
    "revision": "bfc4825a23cfc581658a00d00b46588f"
  },
  {
    "url": "assets/js/23.b4e529ac.js",
    "revision": "a35c0b55d1c50b766af3766caef46519"
  },
  {
    "url": "assets/js/24.2119636a.js",
    "revision": "8928c4bfdca0b7e47244bc21b3f9209d"
  },
  {
    "url": "assets/js/25.5ed74881.js",
    "revision": "ce950f8b7fa9aad642b1bedadaefe365"
  },
  {
    "url": "assets/js/26.322c1d8f.js",
    "revision": "9315a91beb938349f5135bf081e707dc"
  },
  {
    "url": "assets/js/27.15e19371.js",
    "revision": "04671e0cd8e2e6bc1ec90c469c207e15"
  },
  {
    "url": "assets/js/28.9c66ef1e.js",
    "revision": "a9c275b1b0f1989b93b644c1d8eaa25b"
  },
  {
    "url": "assets/js/29.1aaa73ab.js",
    "revision": "780028ad21f3e730b5a6e39d9d427af7"
  },
  {
    "url": "assets/js/3.8ef7239c.js",
    "revision": "dcb704171dec49ce68b8a654e8d6fe87"
  },
  {
    "url": "assets/js/30.c567d02a.js",
    "revision": "b470e358ad1f4e86707cd4e1c8b40379"
  },
  {
    "url": "assets/js/31.c27b9e77.js",
    "revision": "785a78ee46e90294a18cc453aba73f10"
  },
  {
    "url": "assets/js/32.683c1431.js",
    "revision": "86b7e71ea92c138048c650adcb06dd1d"
  },
  {
    "url": "assets/js/33.45fd002b.js",
    "revision": "bb47d4e25287c00b9434adcda5293b1b"
  },
  {
    "url": "assets/js/34.e32f75f9.js",
    "revision": "50793674c35c89ac8d341e712f59b8b5"
  },
  {
    "url": "assets/js/35.5f46f80f.js",
    "revision": "927e133079e0f96c198bc31631172f21"
  },
  {
    "url": "assets/js/36.fea3c57d.js",
    "revision": "054f776092bd2a78ffc9b885ab2e8e23"
  },
  {
    "url": "assets/js/37.9da64601.js",
    "revision": "17e295a2f0f62489de2f57ced09a68e8"
  },
  {
    "url": "assets/js/38.faf963ce.js",
    "revision": "0da67e48260f58e18eb91fc547616d81"
  },
  {
    "url": "assets/js/39.bfc81134.js",
    "revision": "1ab584971b629c2bf54020b8fb96b39a"
  },
  {
    "url": "assets/js/4.42d81b85.js",
    "revision": "af6b26b6dc085512cca0762545222002"
  },
  {
    "url": "assets/js/40.a63a5dba.js",
    "revision": "86fdbe2ce396c2b2d738449448b72861"
  },
  {
    "url": "assets/js/41.90b30a64.js",
    "revision": "f3aa91fa7f230bf9a3f84ab3ebff4d53"
  },
  {
    "url": "assets/js/42.7357ba6b.js",
    "revision": "0f03d8368b3841aecfac7d02005ac8ac"
  },
  {
    "url": "assets/js/43.02452d54.js",
    "revision": "a9a7b1cd99181755f567a326fdc9b33e"
  },
  {
    "url": "assets/js/44.26f7bec9.js",
    "revision": "e983c041d9f3024e41869cea21d3e369"
  },
  {
    "url": "assets/js/45.555f0be3.js",
    "revision": "06e66e70b108b9725b851db620fea794"
  },
  {
    "url": "assets/js/46.ad8a9f18.js",
    "revision": "5797702e6c704c54125a8992abd5c997"
  },
  {
    "url": "assets/js/47.6d3c65e2.js",
    "revision": "24917971f7f94f1b705bb3e045cc51d2"
  },
  {
    "url": "assets/js/48.88072538.js",
    "revision": "acb9e1ee74b14e7af78f1729512a68b7"
  },
  {
    "url": "assets/js/49.ba9d9727.js",
    "revision": "959c489135d4c4e5438f8587e2ff8b0a"
  },
  {
    "url": "assets/js/5.b748133e.js",
    "revision": "d4a44c89a124619436afd9f561cbf3ef"
  },
  {
    "url": "assets/js/50.42b25049.js",
    "revision": "7c010e39e097c382c288fccf4f9b6b84"
  },
  {
    "url": "assets/js/51.6fae91bc.js",
    "revision": "6e42b4ccda34b8fb111746f770af27f7"
  },
  {
    "url": "assets/js/52.d992e285.js",
    "revision": "80ed90fd81108775d301c8cdb5b9aaab"
  },
  {
    "url": "assets/js/53.1633caed.js",
    "revision": "5c49050229bd583f5f5d41f1774c61b2"
  },
  {
    "url": "assets/js/54.8549d639.js",
    "revision": "a2b560d54370d67db732e4bda9229cb4"
  },
  {
    "url": "assets/js/55.ba788020.js",
    "revision": "872813ab436dd99a47d20b7a819eca65"
  },
  {
    "url": "assets/js/56.e62a2293.js",
    "revision": "53edb8bb8feed9dbc7a6331790c471ed"
  },
  {
    "url": "assets/js/57.471cfad8.js",
    "revision": "cfab579b0d425d9b542ab90c918e955b"
  },
  {
    "url": "assets/js/58.8098f376.js",
    "revision": "cb7cdedb4e3df0d83d7c22367b018e3b"
  },
  {
    "url": "assets/js/59.42201f76.js",
    "revision": "46422cac8eaf19ee9e19d588a3c9a79e"
  },
  {
    "url": "assets/js/6.e760200b.js",
    "revision": "a4a0d643d458e44c007e617a63ce7b0f"
  },
  {
    "url": "assets/js/60.573d38d5.js",
    "revision": "53b2d8a49ec961ababbd37078b399613"
  },
  {
    "url": "assets/js/61.d84c4e7a.js",
    "revision": "cb7df809f7f468865b912e79acbc6441"
  },
  {
    "url": "assets/js/62.bb8661ee.js",
    "revision": "1377ce41fd5298f9f8181af73bfe329d"
  },
  {
    "url": "assets/js/63.3b097f51.js",
    "revision": "9fbfc39b6e7ae28c0d5d79b0bbbe2c96"
  },
  {
    "url": "assets/js/64.1517c081.js",
    "revision": "bbb189108c14c12d68ad3f79ab4b060f"
  },
  {
    "url": "assets/js/65.bcc25083.js",
    "revision": "880775238bd8a73e5e9e70d38d1a0fd0"
  },
  {
    "url": "assets/js/66.e37d5282.js",
    "revision": "c8965acea05601aac6d636fbdcff51ae"
  },
  {
    "url": "assets/js/67.d2645a3c.js",
    "revision": "2a71c88d2d63cd59c47feb36d1a99517"
  },
  {
    "url": "assets/js/68.d167609c.js",
    "revision": "604067e528bc7216f5d5c0819a197f1a"
  },
  {
    "url": "assets/js/69.4c466931.js",
    "revision": "3fab088b6ce964f61a4e6b9eb0da3e53"
  },
  {
    "url": "assets/js/7.9208124b.js",
    "revision": "8d0a1346607117ec8393766f6c0fa8ef"
  },
  {
    "url": "assets/js/70.53daaf1f.js",
    "revision": "06aec720750794c883cfd200de3f94c5"
  },
  {
    "url": "assets/js/71.4a76e108.js",
    "revision": "d4f753b29679c29038a3b3556fff6259"
  },
  {
    "url": "assets/js/72.50e70d33.js",
    "revision": "4d1435e2928cd3bd9d258cf87135ec6e"
  },
  {
    "url": "assets/js/73.1d55cb0e.js",
    "revision": "147040506fde950138e78d1897f704b5"
  },
  {
    "url": "assets/js/74.8f07d814.js",
    "revision": "2f70180dd09d45d11667c59af9922dd6"
  },
  {
    "url": "assets/js/75.4740ce9f.js",
    "revision": "b1a059e2a780366cbd4222c40b82a942"
  },
  {
    "url": "assets/js/76.75002c53.js",
    "revision": "b84523eef11caeee18ae219ac87d146a"
  },
  {
    "url": "assets/js/77.20a57f0f.js",
    "revision": "3369a35c8158db945fcae305f61eb917"
  },
  {
    "url": "assets/js/78.f91ceea4.js",
    "revision": "7d2a61df80b6a4ef7f8baa764fd59076"
  },
  {
    "url": "assets/js/79.b66d498a.js",
    "revision": "8963213a0d423b514fb7ec01aad777b4"
  },
  {
    "url": "assets/js/8.d639be16.js",
    "revision": "3a98efdd92033636cf9344652b1c86c8"
  },
  {
    "url": "assets/js/80.725b2608.js",
    "revision": "b7e91fde8f05875628ffcb5e90b22210"
  },
  {
    "url": "assets/js/81.1996ea70.js",
    "revision": "45d14da0c1f66e5020ceca180a5bb52c"
  },
  {
    "url": "assets/js/82.ba6840e9.js",
    "revision": "8565e945146690ecbb4b4f1acd6be8bc"
  },
  {
    "url": "assets/js/83.813d3e3e.js",
    "revision": "f22c2cdae1c7ea4484e588bf43c3dedf"
  },
  {
    "url": "assets/js/84.47a7e211.js",
    "revision": "7c7b2116a745cc6179fd9eeb17f35e16"
  },
  {
    "url": "assets/js/85.4e719016.js",
    "revision": "f41da731dfa63dbab2f9238c5bd4a114"
  },
  {
    "url": "assets/js/86.86bbe542.js",
    "revision": "1d4ef3b3bfbfde2dd564f66a06588112"
  },
  {
    "url": "assets/js/9.c9ebe4d4.js",
    "revision": "84037028fa700229f0b44eac4a4c5eb7"
  },
  {
    "url": "assets/js/app.f37984c1.js",
    "revision": "0e612e27b869eb4c2cfa0e8c01792e29"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "c5fb57a58034e148874fad2d1eeb6242"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "d7a28982fa478cf852d641d80a019cb6"
  },
  {
    "url": "community-made/index.html",
    "revision": "0500e72fbb9e35081709efe86736192a"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "e4fd90c9e79d97d5f9cda2d5ba384cfb"
  },
  {
    "url": "contribute/index.html",
    "revision": "7d4db94a03f387c452e000991b1f898a"
  },
  {
    "url": "core-development/index.html",
    "revision": "9a20980f7eaa268712105f829b11ce00"
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
    "revision": "34eb2bbc625f7607af7a7ce1aa5f5421"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "a830ac94fba3b681f7d6013542de4cf1"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "5cbcd3d93f42b7a985de4b5f2a5482d2"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "2e0eb2cb33a416d4574a78cea3f840f8"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "aa13507da03e6666472e74f53896607b"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "fbbdfff44f630bcf51904e0f84006c94"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "e6103f7b2b2bad5237f52a48e0e95925"
  },
  {
    "url": "de/index.html",
    "revision": "5664d639caa9405485c7dd86d98071b3"
  },
  {
    "url": "de/links/index.html",
    "revision": "498ebe22aad1b4d630dbec8f15185e31"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "aacd751b9c9655efa7b06b4c1e73af2b"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "a39b69762e8306a493653b3bd096becd"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "2c824e413d3967b69c2a4d8415bc183f"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "8bdabfef2fb6863b51ac6ae0019fb318"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "cd149ce4f2fe9dcf0eb8db6c8b1a0f4a"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "bf439307b810e18468688530cbc36f6e"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "252e30dbe78c151bef5ba52fdceecbeb"
  },
  {
    "url": "de/setup/index.html",
    "revision": "eb379f64440a043eef5bc2b5a00c18e1"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "63ea763ed29a879639587ba6b60fd9aa"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "e00de5a6a1347b918d1f8d24d2396c22"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "f96929721cbc79221f4f43a3fe2a4582"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "8817df46e897905f2ca666484e34c546"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "dbe538c6b18414dea025c243a98b035c"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "9b9123603235a365dc96267791f558a1"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "87ce376bf56bc98f9dda86eefd24b69e"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "c58deafd8f13f7aac2f8e020b22ae694"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "9b9fd19a379febfc427c0e659931322f"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "9b4329b7840ac77d553d04f9d20b0d17"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "697b8b51abef026cf9bf41a74e2deb16"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "2d8f60e0749e64e024b769866795392b"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "cb7a417397b245e25b31c657d6d2195d"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "ab4ee1d38e7ee2878f5e4a36da281ab6"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "132eca446c582168376723dc513051c3"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "4781062442ae3b3d8f2dd9e26b797e32"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "4ed498d4d5f4657f25397fcca03d3e62"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "6825c35e6f1220aa125c5b6db7b24d3d"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "289d100bf5d104b7544b8f66cd77b7dd"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "01bfcb8803db6d6c3b2258fa283ba1d6"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "ab838cca13db8a5e9a586322cf3cf51b"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "e23551fba1178d6baef171401a60e965"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "94f25e8e32e6ee8cceeb1b371d7c989a"
  },
  {
    "url": "de/usage/index.html",
    "revision": "ce670101f8f97822082407bc613e6022"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "5e870f74989cc44da700a5c48dcd9073"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "d86a13b1c165f5a803e4ec85aa0b91d6"
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
    "revision": "992bb0d53922578680332bfe5b57d6a4"
  },
  {
    "url": "links/index.html",
    "revision": "e7d8e99befdf53633e90ff9f695775d4"
  },
  {
    "url": "satsetup/index.html",
    "revision": "b063020e5489f52fca17abc41648721b"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "03d481c9ec67f61cf2f1d2bf828f41fe"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "00639168d2dc1aac0f34715b8f2c7d29"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "93c1358793adf77d34e55bcf770cb2fc"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "f51fb4c035c4e85ff93004161fa3d6a7"
  },
  {
    "url": "setup/docker.html",
    "revision": "6019ecabf0e408851fd4bd6da3a94ad1"
  },
  {
    "url": "setup/image-install.html",
    "revision": "d93919e4afab4a54c9cab08876e6f27e"
  },
  {
    "url": "setup/index.html",
    "revision": "6142a904f1ac65418e46bb37a3c223da"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "d834197c9e83a141b18d594e1c34a6e0"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "cd280a4c9ffba7abc4146129efb0c616"
  },
  {
    "url": "setup/requirements.html",
    "revision": "72df83802d4a5cacaf7e3790cb698f5f"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "1787e68a34cae43872a218cbdf1e9d3c"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "87141abe2a0ea4d0d21b1abfb9589471"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "7bf154b5a7ceb3f0a60823fd80efdb70"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "f47519b97872a8efe0db4266d08c5d2e"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "2ac8f5635d5184805b988fe817163619"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "67cffee960c96add676fde0c98791134"
  },
  {
    "url": "skill-development/index.html",
    "revision": "c58b2aa0fecbb15d4776d78715f48e0a"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "d0e94a55b88ccd5c52ebfae3cf2f1615"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "303a22543aca8848a55fdf5ee9234400"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "5d7bcffa21054ee17a1384ef22a813bc"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "34f010a3e8b2d9980077312b679ca1ce"
  },
  {
    "url": "sponsors/index.html",
    "revision": "1f0dbeb12ddef82f114a38daeebe9f11"
  },
  {
    "url": "usage/index.html",
    "revision": "7190a8d1de79eae8c612efab12c30057"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "950ad2fb4080ab47980061f41f625d28"
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

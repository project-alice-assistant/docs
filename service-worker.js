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
    "revision": "791cde1aadf4226ecba5c18151f9b69c"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "21a5c41235ebb1be4e15d40f9868b840"
  },
  {
    "url": "about-alice/index.html",
    "revision": "bd2a5b807757a333b3a87d659ee27fc8"
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
    "url": "assets/js/10.d91d1f7a.js",
    "revision": "12f7d2b898be400fa334a4faf4e0dae3"
  },
  {
    "url": "assets/js/11.10058b9c.js",
    "revision": "c2be65b40b43d713bff30a828f123a2f"
  },
  {
    "url": "assets/js/12.cf99b670.js",
    "revision": "ab2b75f8e8ca74b1363e54b5594c3f1e"
  },
  {
    "url": "assets/js/13.04d96fa6.js",
    "revision": "d76885c533078e1d398b593f434a842c"
  },
  {
    "url": "assets/js/14.5588ddba.js",
    "revision": "f18611302df622d018ded2ea7c462ffe"
  },
  {
    "url": "assets/js/15.9a669689.js",
    "revision": "ab8a4eee1d872354fe4902da33f2c081"
  },
  {
    "url": "assets/js/16.f494618b.js",
    "revision": "a58094a071636ad37f129621214ceffe"
  },
  {
    "url": "assets/js/17.debaf032.js",
    "revision": "3cf4a67e6db8a3d4a2ea7827c4f66857"
  },
  {
    "url": "assets/js/18.03c00501.js",
    "revision": "24847a6064a93560a23bd95bc7f42007"
  },
  {
    "url": "assets/js/19.be2bfe49.js",
    "revision": "d5604141460ceaf835eef7fb928bfe93"
  },
  {
    "url": "assets/js/2.a551a428.js",
    "revision": "0fff5f021bd47c55436e89e2b16f271f"
  },
  {
    "url": "assets/js/20.840eef0e.js",
    "revision": "4ed9bae919d02730688b6d211ea12d0c"
  },
  {
    "url": "assets/js/21.220f6406.js",
    "revision": "764e676610b69bb41a84d7dc6c2c4b8a"
  },
  {
    "url": "assets/js/22.17befb24.js",
    "revision": "7ce8b26b4c1c6f0aa76d967af76b1d72"
  },
  {
    "url": "assets/js/23.69fe1e20.js",
    "revision": "75f95efe24caf409c13ac14e940453b7"
  },
  {
    "url": "assets/js/24.c6a4b22a.js",
    "revision": "9369c551d7fa5f5999f867d95a0dbfb7"
  },
  {
    "url": "assets/js/25.fe972a28.js",
    "revision": "31df4bd588a0fe17114cd5ccf1124bdf"
  },
  {
    "url": "assets/js/26.e631b219.js",
    "revision": "05ad2f67a8700a2c409e373f191b3c61"
  },
  {
    "url": "assets/js/27.510a9341.js",
    "revision": "e5d372b29407bdfc355d1bf3ccb11b72"
  },
  {
    "url": "assets/js/28.a7d6f96a.js",
    "revision": "2774be03008e67c790722d2f7917d0db"
  },
  {
    "url": "assets/js/29.40856eba.js",
    "revision": "7fdafcd8fd4b53375f99a45be424361d"
  },
  {
    "url": "assets/js/3.ef026a77.js",
    "revision": "9e15abc869fa7ea44f9f5939e8b240e5"
  },
  {
    "url": "assets/js/30.d4f8369f.js",
    "revision": "9b5299f48c84daf32c5753b9ffa43581"
  },
  {
    "url": "assets/js/31.24432263.js",
    "revision": "c25cf98902fdb3e1cef84f14cdc0ad5c"
  },
  {
    "url": "assets/js/32.aff7d73a.js",
    "revision": "82044a1b479ae237f63d0abd568c5d4d"
  },
  {
    "url": "assets/js/33.32ebc3ec.js",
    "revision": "30de85d31d4340ccc5a0e205a1c033fe"
  },
  {
    "url": "assets/js/34.cba498ab.js",
    "revision": "ec180f046b109834134f52de82f98866"
  },
  {
    "url": "assets/js/35.ccc407f7.js",
    "revision": "95708a7d402741e983a297177a221235"
  },
  {
    "url": "assets/js/36.5cb18cfa.js",
    "revision": "3149c145b1229b83a6aa443bb82fdbd2"
  },
  {
    "url": "assets/js/37.8c4d5dd4.js",
    "revision": "3285c8075e456269e28ec3b94bba9f87"
  },
  {
    "url": "assets/js/38.c19f4e64.js",
    "revision": "b1206e3f7d09120e59f78abc8dfa3db3"
  },
  {
    "url": "assets/js/39.fb4b031a.js",
    "revision": "e13216f38a09930e3c33cf04e888c7a3"
  },
  {
    "url": "assets/js/4.b74872ba.js",
    "revision": "e4f4e8b452754bddf388e65adf7dc3dc"
  },
  {
    "url": "assets/js/40.573a7171.js",
    "revision": "5b9cd8ae3d2e804bd4228e2d49f49912"
  },
  {
    "url": "assets/js/41.a3a97a5c.js",
    "revision": "056dbed1f9a2d4213b56e6958ed6a621"
  },
  {
    "url": "assets/js/42.ae4b87ec.js",
    "revision": "182f403c2b60891a755d3ae7df9c9fa9"
  },
  {
    "url": "assets/js/43.6f3923a4.js",
    "revision": "4be424d97fcc174944e3ec13c7d378c1"
  },
  {
    "url": "assets/js/44.72d3a017.js",
    "revision": "7c32c0cfbd1c51a2fcc9ea0e4c7b4102"
  },
  {
    "url": "assets/js/45.62e15547.js",
    "revision": "3afd787dcfbf193774d717548ff0ffe5"
  },
  {
    "url": "assets/js/46.b3d224cf.js",
    "revision": "40fc9f0eeb39cc954f5efdd06b613fa1"
  },
  {
    "url": "assets/js/47.96753512.js",
    "revision": "70c5a83373b0cbe88ae11d09b9c0532a"
  },
  {
    "url": "assets/js/48.6ff10027.js",
    "revision": "3c351ef4566d55f9e8af9ae562c70a21"
  },
  {
    "url": "assets/js/49.3c1f9ad7.js",
    "revision": "1a8a70f86689d6d467f82a5420423863"
  },
  {
    "url": "assets/js/5.f86bb900.js",
    "revision": "57e88fd38f95a622d2034e4987c2d805"
  },
  {
    "url": "assets/js/50.c307411b.js",
    "revision": "924bc108110e3e77b50a1ca86b40ffe2"
  },
  {
    "url": "assets/js/51.c73df241.js",
    "revision": "a9d86412aff68c72961a86d641d63ee3"
  },
  {
    "url": "assets/js/52.a11f2f8f.js",
    "revision": "89a568866c526424531c68cebde12a58"
  },
  {
    "url": "assets/js/53.6bccc86d.js",
    "revision": "e41ab60918e89433f0603f496c8cd153"
  },
  {
    "url": "assets/js/54.6f049953.js",
    "revision": "ae69346e9b0f9ffa02be46adbac76266"
  },
  {
    "url": "assets/js/55.5022bce0.js",
    "revision": "14df975f6f53efc6eea32782b1f72c6b"
  },
  {
    "url": "assets/js/56.d3c90a3c.js",
    "revision": "83039ec01900c1fe94966e07d71ce451"
  },
  {
    "url": "assets/js/57.66d2ef0d.js",
    "revision": "580bdee0285cf1fd1f1940431c61e2f7"
  },
  {
    "url": "assets/js/58.0f92ac98.js",
    "revision": "00823aa0ba3b0b8523e27fd3bff3ff00"
  },
  {
    "url": "assets/js/59.152f6ef7.js",
    "revision": "8c1aa834c2b240756b1612f04d493367"
  },
  {
    "url": "assets/js/6.648f1956.js",
    "revision": "5c209f26260b49cf392c38631d7bc8cf"
  },
  {
    "url": "assets/js/60.d28b996e.js",
    "revision": "10fbfe5f71864c5c057578c9ab95c101"
  },
  {
    "url": "assets/js/61.5999b471.js",
    "revision": "5e0c5b442554928a7799273c7dc8cd3b"
  },
  {
    "url": "assets/js/62.b83f2777.js",
    "revision": "378ae1958a6ffea871f71e0f253ba7e1"
  },
  {
    "url": "assets/js/63.cda040a2.js",
    "revision": "fd382e2e8d0313b7570742f4162ea9e5"
  },
  {
    "url": "assets/js/64.7a7a688e.js",
    "revision": "77c288953a772d67580f33890d470c0d"
  },
  {
    "url": "assets/js/65.c479fcc0.js",
    "revision": "f87e653dd8829df93e705882e4509d03"
  },
  {
    "url": "assets/js/66.1c8f501f.js",
    "revision": "b78b5f33cb5c911d7cd563b9fe17de6b"
  },
  {
    "url": "assets/js/67.19ad0f2c.js",
    "revision": "f3a7fddc67c082fe3258f5a4a785f234"
  },
  {
    "url": "assets/js/68.98afbdd7.js",
    "revision": "256cb4aef465adae9d9c8c2a7cecbd91"
  },
  {
    "url": "assets/js/69.d8042d6d.js",
    "revision": "4026840113459615df460993942ce549"
  },
  {
    "url": "assets/js/7.baad2eb9.js",
    "revision": "27b2d230f36851a6db0ed729bb482645"
  },
  {
    "url": "assets/js/70.e6889346.js",
    "revision": "e9975ecc4ab1c15061f17b04fa426dc3"
  },
  {
    "url": "assets/js/71.37b57fc5.js",
    "revision": "099b83e8249a6ded5616970d94604d95"
  },
  {
    "url": "assets/js/72.5b42c7a7.js",
    "revision": "6d15a3ad30fdf17d752a9aee77553e2f"
  },
  {
    "url": "assets/js/73.3a9eaad3.js",
    "revision": "a5bab8ee89b47c66036c590fa5f5f368"
  },
  {
    "url": "assets/js/74.9fe66e72.js",
    "revision": "336a747ac27478391ceb8032f8e5a892"
  },
  {
    "url": "assets/js/75.04cb1fa2.js",
    "revision": "05cb53ef725eb6ed3d6791d0f547376e"
  },
  {
    "url": "assets/js/76.13cadd15.js",
    "revision": "d4cfba53a8d991880012e349675083d5"
  },
  {
    "url": "assets/js/77.7efff303.js",
    "revision": "42e0ecf405e81090efbe62670183e3c5"
  },
  {
    "url": "assets/js/78.2d49a940.js",
    "revision": "8078044485b416ef0dc165db2950da9e"
  },
  {
    "url": "assets/js/79.d5fffb4f.js",
    "revision": "235d211f6b7636ab43cd886e21696348"
  },
  {
    "url": "assets/js/8.772eee80.js",
    "revision": "6e2aa401f32ab9d2e43d47d78d815ed0"
  },
  {
    "url": "assets/js/80.9b6edafc.js",
    "revision": "988e6de423edf58e5c28ca980d7fbce7"
  },
  {
    "url": "assets/js/81.8b4b5363.js",
    "revision": "9463c599306b5cfaf1ead6055a61e6fa"
  },
  {
    "url": "assets/js/82.7a223958.js",
    "revision": "a131fd46f42e55f1de9f707c80c11736"
  },
  {
    "url": "assets/js/83.af77f8ed.js",
    "revision": "097940963b825e3b88545ef2ff27a39d"
  },
  {
    "url": "assets/js/84.2e026559.js",
    "revision": "32911f67b5bf97a6a2d7f79496269d18"
  },
  {
    "url": "assets/js/85.62d448a3.js",
    "revision": "f0495af8c48f342ec6bcb095975942a7"
  },
  {
    "url": "assets/js/86.a14d4189.js",
    "revision": "bf67e97dface524d617016e30ca55614"
  },
  {
    "url": "assets/js/87.7a3c6109.js",
    "revision": "35b087524d263a67b0de6e2862ea41a9"
  },
  {
    "url": "assets/js/9.935c2fa8.js",
    "revision": "94c6a30cfd9794a16dd52856982ee403"
  },
  {
    "url": "assets/js/app.9df07572.js",
    "revision": "d7362e6e16e4082c9f4ee7de8e89ef36"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "fe11b7b098cf91bbba8fa1c70de0e0cf"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "e902ddacba2ffbb3bf92ddec1e22ba19"
  },
  {
    "url": "community-made/index.html",
    "revision": "689acb3e9e0cb9afdee38da910159409"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "8f624c98bdb97e6a6e987bc0df8ad2ee"
  },
  {
    "url": "contribute/index.html",
    "revision": "8245fda2875ecd909db0abccfc2b7dc0"
  },
  {
    "url": "core-development/index.html",
    "revision": "60aa38432066d0e38e53cdff68cab6d3"
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
    "revision": "10940aff548004274866f0582df81978"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "5475b6066a3e06560e4fa8c851bf6f1e"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "531da968f3c8ba9e14c47bd8d58ecd44"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "4d7ddef8f0970045de610e3a8ae40e3a"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "e5cfbe67b444f5209b943c9b2d38551f"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "b8da126729c19186921df32b1250de69"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "7e62a9a0e68956440c25915baf87f9a2"
  },
  {
    "url": "de/index.html",
    "revision": "58e2cfbfd453e700d3dbff85b619b069"
  },
  {
    "url": "de/links/index.html",
    "revision": "9b8c1e75666a7cb2b8db4cc8d8f9f0ae"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "33ffb253400c1bbdbf90d9b2ef051aec"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "593ae22f4a61c26e6001ddaf6f2c6e87"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "4115a5f1ec23fbb1cd2da42d32a1a5af"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "57f13b8392cd6932f7c1c21aa67d1f18"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "efdcfb835a1c71eabaeca688b739a3a9"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "762e0fc7a06e1bd386b76cb9386bffd8"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "adece318affc0c29d159fd4c2fe4120f"
  },
  {
    "url": "de/setup/index.html",
    "revision": "8acd9eea4fda3c499456efdd30664310"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "00ecaf35ab2bbe99b0a684ddde9c8bc1"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "8d925022ddfea528c883ed80ed2b0f74"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "1a2bdd5f56d5284b0695d99e248c7111"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "0a9d933e70781adb6473b0e9590ba82c"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "975ce09596e9b8ec63cb78d95f36a8ea"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "0464c8afcf6401edade6b2c63844c695"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "49604fcec4dba405560687cbf9f348d6"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "e1f7bad99cf5447fbbde8b1b981a86de"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "42db56618381517d799065b2b947e523"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "80f0149835d4bef6867e46e21e92861c"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "e8646e13627599933bdc7e2bb2ca4558"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "fdc3539a6515a996ba27a97a50a1c4fb"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "4092c2473364cec8d2a3a7844ff6c021"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "ede665b8a9fa048633cd3dc5e2c8fa85"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "9555324168206d5f6540eda254445eb6"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "bb28cbc18be99003b36935f3e6cd812d"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "95c142cfbe4b112043c92d394648dfd3"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "9557d4db5c1cac9b21770b59edebcb97"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "d52ecd9b88bc170280893b2dd252122e"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "b260458f28a5e455da21c4f8d1807860"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "641b1afaaaa5be92d65a8b33eef7a5a6"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "b45fa1ed36c89a13b9ca5be9fb26fa78"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "bf3ce8a0b1147621af3601b955a1b646"
  },
  {
    "url": "de/usage/index.html",
    "revision": "eac6e50183a506e24e3d5f6e026764c9"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "d4ece7e66f4f65ab14f3be5cbe36081e"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "52f71a61e77ca1c77c457cfccdbed7a1"
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
    "revision": "27f568715828b52717e02268c209294f"
  },
  {
    "url": "links/index.html",
    "revision": "dc1a0291cb50ab147ac49569ae92c86b"
  },
  {
    "url": "satsetup/index.html",
    "revision": "d3432992021e5965ae4b927119c93b05"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "1f34dcfef416e3271c7c3318decad470"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "c08e8d6f0732139ff540c3efaacbe470"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "19faeb2229ad66de367c589e755b0bd6"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "dac9472c071812464ec90892b3e924de"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "9f06ed19e44bd5133f616260e64a067f"
  },
  {
    "url": "setup/docker.html",
    "revision": "fe4d4f94ed1f40be9ef077c8ffb60a23"
  },
  {
    "url": "setup/image-install.html",
    "revision": "c8fa8cc16ceaa787a823d663dc5e4d65"
  },
  {
    "url": "setup/index.html",
    "revision": "3765d4224484134ed0ba628d26347fec"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "d0dc894b57ee0062a988d56210b69bdd"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "bb5148095f8d845aa6b0e467854bfb34"
  },
  {
    "url": "setup/requirements.html",
    "revision": "c9cca3e55a69781eddb5b6daba769125"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "892f0e6c0ff463e38e3595dbc988e8a8"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "c56337872a0fd061794f22e3b916a4e5"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "3f95e9085013ac7ff0b1ed01a041f8a3"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "02b1697b10b4e2bf2c121c74a8aa2cf4"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "3f2e46cb521e96c306b9c1624ce2b484"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "7bc9b26fa41f0abbe95649c4e1d808d1"
  },
  {
    "url": "skill-development/index.html",
    "revision": "822ee81e552eeaff484c6627d0914abc"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "f3b94b11747428b6e4cb08b34f11d810"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "aeb4d1c432eb6e3773004bec03021baa"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "bb9d9653982a11941ea8e53a01aff523"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "3201d01b395e7341a6df336433b6472f"
  },
  {
    "url": "sponsors/index.html",
    "revision": "f6258adfaeef77860fbfa93e11ca669a"
  },
  {
    "url": "usage/index.html",
    "revision": "278a1d7422341e50c58802e07bfdac0e"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "e5cc15657fa82090a95c81f72d71295c"
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

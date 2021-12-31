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
    "revision": "67f12ce344720d76aecedd307efb1aa5"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "aa78de12f7367b52791b684ec55081a4"
  },
  {
    "url": "about-alice/index.html",
    "revision": "9371cf567bcfc9b40e022b121734499c"
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
    "url": "assets/js/app.6b0e48eb.js",
    "revision": "2650238708174a4e27cafdb453203048"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "f805abeeaef95cf9a80e14d6e0c5ae9c"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "b3c0eb67406ce93e50aedd3b5178f0d2"
  },
  {
    "url": "community-made/index.html",
    "revision": "ca3ab73c1ffb8eee6dca53b9c61ab6a7"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "7844f39e448a0e68a5b46c912dcd6f83"
  },
  {
    "url": "contribute/index.html",
    "revision": "1aa13fa5c24377c2366b227bd4e1bd20"
  },
  {
    "url": "core-development/index.html",
    "revision": "fa259e3225bcd055eb9509eb8e6afe81"
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
    "revision": "8b2344ccd313130e157cf59b85d2324f"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "270227cf5131067256bda53b3b2b63e2"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "fd7d23a11b447389c7d90c89c4ed9540"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "9a35874ecc58cd40d7062f790ff0369d"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "4cd65fdf59d2fd4bf2a642e695a2d5bd"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "71efa0967a2032c0d0c1095b78765d05"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "0db70536c3580dc335901b27dede318d"
  },
  {
    "url": "de/index.html",
    "revision": "3da29875497151e0a84463e394754898"
  },
  {
    "url": "de/links/index.html",
    "revision": "089b45b8329aa19a4b3a82fa5e71b24b"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "f0b0a916f44c54b724a022a5eef10ba9"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "c6fc420d989cfb81c66d1c60f61fc3ca"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "6ceb2c71b15f2ee01b0fad60496174be"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "2375d707177254d0493c099380fbf45e"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "98f6bcfed491a30372d349b3fcb2156d"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "0350a3eb308e0fe012bb8ca9b42aff3a"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "e718fced5652fd4817034492e843ac17"
  },
  {
    "url": "de/setup/index.html",
    "revision": "1f827c1431447afa412953c315dd1952"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "cf5bcf2d193c67bc672568f6067a3935"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "bdfca76063fd6da383897328b9f60cce"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "e2631e3bc21134bd6022ae5047f3c2e8"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "a0d507af8dacffedbca1a6af18a8afdd"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "eed3317fcaad79c4f6d534a9f9f96be7"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "120e79debe71fb53f4eef7f55c8160c6"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "23794ede6abbad976104f8bfc4a633f5"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "7055ba46af2f9ab82f0e719c40a8aabb"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "f527387ec6173d1ab0de44581bab2b49"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "6ac386900be27efbd958120fcd7089bc"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "b110941e10cda625e49f20449d697a83"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "7d1775cd4088f4eb3f219473958d2f38"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "61dbdd61ad3275fe274ce3f19b5f82a8"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "b1a4255c60b242c4de0622a965e83fd2"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "37b20bbe2cd18d29726447dcff7f4f2f"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "634c3bc5b76ddf202af3f5a2d31c2d80"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "d923122fddee77c8bd7b58e63c9686ce"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "b4672c4836bf30fcc41b0c02d1afabab"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "becbdc1d58733202e39e3a46f520018a"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "c8e1798afe50a736e8951c36ef2bccf2"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "0bedada16315941807b773410e208a86"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "7e24ca5635012d685c42bffe01aa48fe"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "f41665feb7bbfb0eed25c38d503ac63b"
  },
  {
    "url": "de/usage/index.html",
    "revision": "a7c50f365737e6ab5fe5ed2f04c6c317"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "c977a850ee6ee46d3c2c196b9132c8b9"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "4c063ef3c60c2b1ea6743e812ac04764"
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
    "revision": "2df3fcc21bb611101497fe8ab5ce8ba6"
  },
  {
    "url": "links/index.html",
    "revision": "3fd6361d2712af6585cc2f8843cd7d95"
  },
  {
    "url": "satsetup/index.html",
    "revision": "383577d73f4bbb4559cbe0790159ddd5"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "c6e2c3bcecf9743f5e1c3cc9edaae2c9"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "ea477f014be5bf4f16f8ac86b2a65379"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "0a2228c746a8f1a08d4d2f35b7cade39"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "36c4a58d490fb84def004b803759e321"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "ba58ef7953a8dfd435d0f44148134980"
  },
  {
    "url": "setup/docker.html",
    "revision": "6dca16427e411f4395cd9963a226b5f2"
  },
  {
    "url": "setup/image-install.html",
    "revision": "3afb772a6313af70b7d83d7d7d3c07ae"
  },
  {
    "url": "setup/index.html",
    "revision": "9c8460c6b843e6fa82da366c5985053e"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "22226910ed0d7adfd7dc811ad716b039"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "cf1d170086480ff1b1b5ed89e473ba73"
  },
  {
    "url": "setup/requirements.html",
    "revision": "510dae288f101ccfafdf1025716af9dd"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "9624519b5fb622b0e17ba975a81c3dfd"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "d665cc13ce067287d7e2258a66212bb4"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "55f4623b6cec47958ddab24ba8a062e1"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "beda43233037c7569aa40958b01ebe93"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "b11dcac52426c840d98bba48e8cba7a4"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "ea6a43a298b1fd65e3855d3a6e03b2d6"
  },
  {
    "url": "skill-development/index.html",
    "revision": "393c27ce2819b5208c4eb9504c233e5d"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "8fd17c0a55b24bce35457366b6e163c1"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "fc7898b7c80701f6fd35f87267609e0e"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "66ad7d7f00b127467c0b422a26467233"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "d9638c545000925d5b08fd319e7efdbb"
  },
  {
    "url": "sponsors/index.html",
    "revision": "1b4166e20ddc6045956e9ce097a13d5c"
  },
  {
    "url": "usage/index.html",
    "revision": "3c2b47d1a85675dd990a44ae7f4b957d"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "40a84f3a22297dd9610beecdf3d03f93"
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

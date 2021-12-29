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
    "revision": "8a1062f6625ddda338fc9a3498f360d7"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "9a3a3bb6b5b93d601e46000e30a4b372"
  },
  {
    "url": "about-alice/index.html",
    "revision": "48e108d1553ce220788c53b510720c5f"
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
    "url": "assets/js/2.fa290f71.js",
    "revision": "cf6bd2301f57e56f95a63baa538e84c8"
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
    "url": "assets/js/3.36b4cf43.js",
    "revision": "ba63b1bb7ccf397b949663caf942dff0"
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
    "url": "assets/js/7.ca636256.js",
    "revision": "ac1fbcaa545977e098bc27a2920e14bb"
  },
  {
    "url": "assets/js/70.e6889346.js",
    "revision": "e9975ecc4ab1c15061f17b04fa426dc3"
  },
  {
    "url": "assets/js/71.391a9ad0.js",
    "revision": "1a26fcd06c49326be05396365b66ad18"
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
    "url": "assets/js/75.724f8eab.js",
    "revision": "0f1710ed66e8c0fd0fa69df6b3f68e32"
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
    "url": "assets/js/app.d704de36.js",
    "revision": "a5fc5afa1f3b5b643316cf0871c58cef"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "d7e595d3c8d17de535635b5087997e4b"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "de867010127d94939e8e2c95f0b23bd3"
  },
  {
    "url": "community-made/index.html",
    "revision": "8edd5af8cf94bd3e707fc0fca3623603"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "640b430888eeefd9776a2debf955eacf"
  },
  {
    "url": "contribute/index.html",
    "revision": "aad3da1b1498518c50b22fd8ae6e1651"
  },
  {
    "url": "core-development/index.html",
    "revision": "b845ef9f38350f293255c59deaee27fc"
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
    "revision": "f876aba019cfcbb25eb2b06df89ba44d"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "8e662d2a27447851b056cc11c39f2865"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "dc0b1e3587ab50f785975185a1f620d6"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "0af1ffd3360de02f0d2a93e54821d83b"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "2a0f942b6bfc3667981ec07b82586af9"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "4da2e82c74275ffe983dbb707011eb32"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "228591430bb8d487e532f751de6caf56"
  },
  {
    "url": "de/index.html",
    "revision": "5d4d60561463802eef6f70fe1e81e62c"
  },
  {
    "url": "de/links/index.html",
    "revision": "5d3976b8c7acafb98471bdf693af4584"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "6cc407154c05551106418dbaaabc08b2"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "d22a111a89e6df15072d5b5eb581b2ac"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "38988dc0b662fb01192f42805d21e963"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "53be70479c5c8415eeffeef950b94445"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "ad609d61db7cf604b5082e4719225b95"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "bf39152e32a1a6cbd28ada16fc772487"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "5b1dddae0ce93a463ba1d042f8555d93"
  },
  {
    "url": "de/setup/index.html",
    "revision": "39be5d8bf76c4ac23119daca6eeb8084"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "c7fe745c51ea16b431529779307a3ca7"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "15fc6a842ca04d682a59cf4e66168d9c"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "a2c7376d8b21f0fadb9c7754928baea9"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "133f7a2ca688b57bd9884a395649599f"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "540a61b84797a5e02fea21a03dee1137"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "f193390e07385aed1c0a329f3f537766"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "1e3a12b0506cbb5d45428412d62bc137"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "b7f945b945f0e76fa6b391bfad5d62df"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "1974a7db1ec70697dd2605ebe5429426"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "2bdee9f9284df3d6d73e8f31725c7fca"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "119bbfed61efcafdba7c31559ed01d54"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "106e4dfc7a7e0bc7af788e7b3dc42d29"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "153284ee6f5fe19e4c02539ab452b0c6"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "c4d88cda99b41021507794ff23e2e302"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "437be7bfee920cd0147ec1d93b1b9ffb"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "04910fd8ff769c8dd71507df8f7e2c9a"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "079e0266af8fe2900c1cd84ccf4adffb"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "c7cbedffe65ff8ec243b412e0d3d333c"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "17fe5ea99401d1f4028c953d693598fd"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "5d742893bfe19e5dfddf336d973d6169"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "9ed2a456392ba9c12f0d2c295d83cc8b"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "00afcad0f3a5c99acefc677a7c2455d5"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "91a5deeb05602f79078d328aa26e255f"
  },
  {
    "url": "de/usage/index.html",
    "revision": "e13cf8486d63e2234b1f843d066b10a5"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "24d913681a9090c2c3cbf4fef69b64f7"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "d78bf21e5d150e6d3808661f46b8118a"
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
    "revision": "970983a18913d4ed70979cec68db3e58"
  },
  {
    "url": "links/index.html",
    "revision": "aa8e80d4d25d114a5f29eb668a65efd6"
  },
  {
    "url": "satsetup/index.html",
    "revision": "c982ba72a600f4d2390dc73edccedced"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "06b9ba0b7b62de40cc7e5871706d54b3"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "4c12e4389232cad466f422a7d6d4338f"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "a996e928d78923040128dc1e357d5e57"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "5113abc6cef23156319fac36515cbfa2"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "e8e10a7cf4d08a8dc614775f2f173993"
  },
  {
    "url": "setup/docker.html",
    "revision": "277e448e0931df102125cfe6f95b500c"
  },
  {
    "url": "setup/image-install.html",
    "revision": "4a72fcfec0906829a1efee318099a0b2"
  },
  {
    "url": "setup/index.html",
    "revision": "8782d430c3f9275a03209fac943f3874"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "c893032e475c0b39572461017821da30"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "571812ce0c913b7509429499eb0827d7"
  },
  {
    "url": "setup/requirements.html",
    "revision": "a59aa03d75ed01fbcd8792d3d523b189"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "1ffae2da80df507f480483af9481ae57"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "b1f5173b77b7c189392585f13cd23e1f"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "9aadefdc19a4e64801d9839331aa02a5"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "772e59458e9f38b3608b0edf95efd4f5"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "e99237c07160359cdd4c7d4f5e9e7084"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "c8991cc724cbb370eb70e9ce469e1361"
  },
  {
    "url": "skill-development/index.html",
    "revision": "fd7f1c6e7258450b1a7c7d7610601ec1"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "5695a8b48269634351ccf7864e231325"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "0833c2aac7c77d4f2fe8ccbee24a0608"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "700881b4ca26c15ce41c6526b3a39edd"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "06583075f0c6dfd8fd031385c5729f69"
  },
  {
    "url": "sponsors/index.html",
    "revision": "696d0aafcfe7326e831f77a7de31cbd2"
  },
  {
    "url": "usage/index.html",
    "revision": "645c70db7c3fee2015dc27d646a7d0c2"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "ab278afa1b20bf89a6e1209407e74324"
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

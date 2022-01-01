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
    "revision": "cfc81ac8fb68bc11d20fc01965de7c9d"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "184f9f7414b56b67b91f800af71fee89"
  },
  {
    "url": "about-alice/index.html",
    "revision": "9d8a6d3280fb170cb629d7e63d9e92ef"
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
    "url": "assets/js/12.aac7ed72.js",
    "revision": "f60582e6455aad78733dcc3f720844c4"
  },
  {
    "url": "assets/js/13.04d96fa6.js",
    "revision": "d76885c533078e1d398b593f434a842c"
  },
  {
    "url": "assets/js/14.6ad83f9f.js",
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
    "url": "assets/js/5.ea868a11.js",
    "revision": "3c94d27b77112191f6ab28791e5af730"
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
    "url": "assets/js/67.a54fde48.js",
    "revision": "af0695f1b9a21fd445e5f4633be53cb3"
  },
  {
    "url": "assets/js/68.f25842e5.js",
    "revision": "9b363854f9c09dd1658adaa7fa348ed3"
  },
  {
    "url": "assets/js/69.fdc3e619.js",
    "revision": "7325451053852b5f1a6689da2abc08d3"
  },
  {
    "url": "assets/js/7.baad2eb9.js",
    "revision": "27b2d230f36851a6db0ed729bb482645"
  },
  {
    "url": "assets/js/70.2c942682.js",
    "revision": "89dfc45fda9cf7243315d3ea6f7aa7ca"
  },
  {
    "url": "assets/js/71.e4577d8e.js",
    "revision": "f25c574aa481b9db9ca6c62bd279f918"
  },
  {
    "url": "assets/js/72.c00be023.js",
    "revision": "cacde156bd029aab279716767b8011f6"
  },
  {
    "url": "assets/js/73.047f47dc.js",
    "revision": "d4addc0e4b4dbd9cee16fb444710ab40"
  },
  {
    "url": "assets/js/74.14aecdbb.js",
    "revision": "41706a371c48f30bdf53a82965028b46"
  },
  {
    "url": "assets/js/75.2cae2cb3.js",
    "revision": "204d1f7d5dd7e75865e4fb7944a6faa1"
  },
  {
    "url": "assets/js/76.04848286.js",
    "revision": "05a24964383e10b4a706696f4a65b787"
  },
  {
    "url": "assets/js/77.a11e3b2b.js",
    "revision": "61dde27c8714d6c2b5339f84b4b476af"
  },
  {
    "url": "assets/js/78.1b774140.js",
    "revision": "73f1bce3ab8576688d13d44d86f65d30"
  },
  {
    "url": "assets/js/79.639698b9.js",
    "revision": "8e75991dbba0c015275049869792db5c"
  },
  {
    "url": "assets/js/8.772eee80.js",
    "revision": "6e2aa401f32ab9d2e43d47d78d815ed0"
  },
  {
    "url": "assets/js/80.0bb21e37.js",
    "revision": "d16c177c286a8ff9aef36ee0ae4b242e"
  },
  {
    "url": "assets/js/81.c54c0cf1.js",
    "revision": "ae08fc39029afa703e7a36e64da49293"
  },
  {
    "url": "assets/js/82.965240a4.js",
    "revision": "b3d77c308caa37b6fa6c5131edc3a1b2"
  },
  {
    "url": "assets/js/83.78616b84.js",
    "revision": "50844adb2a34223d3337ff7b0e6fba40"
  },
  {
    "url": "assets/js/84.3c43face.js",
    "revision": "bb6e3ffc6c8d59be121ef549c6be2ee6"
  },
  {
    "url": "assets/js/85.46bca3e7.js",
    "revision": "8943559de3258465a551570563337872"
  },
  {
    "url": "assets/js/86.51a0b539.js",
    "revision": "d283a3693153d3fedf8a2875a306f843"
  },
  {
    "url": "assets/js/87.0d25c143.js",
    "revision": "ef09e0643f1f96e8a98f214e3d8dd617"
  },
  {
    "url": "assets/js/88.0b64b5ae.js",
    "revision": "811fe4c15e1340dd53e5653214cc2406"
  },
  {
    "url": "assets/js/89.d1902fb8.js",
    "revision": "d0ef94fb0d31caa7a66273d60e310ea2"
  },
  {
    "url": "assets/js/9.935c2fa8.js",
    "revision": "94c6a30cfd9794a16dd52856982ee403"
  },
  {
    "url": "assets/js/90.a0963f69.js",
    "revision": "58e729005431178045badd47f341c99c"
  },
  {
    "url": "assets/js/app.9e4c23cf.js",
    "revision": "11986091e27028b0a443ce395b6092ef"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "ef34e69dc8d60d7738d99d67b1ec1b2c"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "45c26af12ee420bc79464e7f44586c7b"
  },
  {
    "url": "community-made/index.html",
    "revision": "69759e32fb8de95f00989d5f1aa636d3"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "544da606cd8086344a1d5192f7788ac8"
  },
  {
    "url": "contribute/index.html",
    "revision": "ed1a32afee8a296d0470f4be4759432b"
  },
  {
    "url": "core-development/index.html",
    "revision": "d76411eced5f8ce5d8f197edbe524d13"
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
    "revision": "9d24c1bf69dddf07f884c3f5ae31cc0b"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "814d3022e2c5d031e797854bac5526b5"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "1791cc6303a221c978987aaecdef36e4"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "823285ffcb34a442275a88ec559b6fbf"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "f9d4fb6997cd9ee48fadafc8e0db18ae"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "a878df42197f0b2944368581425eb130"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "ca6b60c54ddbf6113e034f33c38547ab"
  },
  {
    "url": "de/index.html",
    "revision": "02f4cc2d2838265570157a77a4f78526"
  },
  {
    "url": "de/links/index.html",
    "revision": "723f7e2e48a76b27ad150de063a5e4c5"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "ee41d5ad2632db1484e867935a933822"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "b71d33341e626a979fc52bfe7b369794"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "b3444aa56af9c7e1c7691b963c61f2d0"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "e6724ffc302260dfa460f6faecbccad4"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "82a6014a284356b0d3705692d00aaaae"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "70ae68a50942cb53dd09abcc2068914d"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "eeeadfc4fc4e52aa391cf8ce1e565743"
  },
  {
    "url": "de/setup/index.html",
    "revision": "1e82c5fc8a2b23395ff70cc203dc33ef"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "cfbb41bbb599eacdb7f3db1cb1cf72f3"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "68866a18107bc8c4e7675b9db3901c0b"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "091ce219a3e67de4128de2e5b1ec99b4"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "0ecb4d9385a5e1c9c14e06f28d0224e2"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "054f0120d02444c814f3d2ee124c9db4"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "ac7e5e336dc2af486e9015f8e55132f6"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "3238938ba02d99bb5525882a593116c9"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "11b8bff9a01cc2fe902579f36e986184"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "b6c0b0827925eb20b187e6f4fd0e217d"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "ff9fea719a13e7d3ff1a07d18c8898b1"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "b865068c7a7430e95815656159c6e7e4"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "4038ca2a1daac4f2c33ec911b7e78cfd"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "2e15f50baa72e304b0eb61b76f187a66"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "8ba834ad8f9fa64ca3bc98a28ea42e64"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "8e5bf712e09f7e7141306965cd13d9ee"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "bc01ce54903610f43cc45cb4492fe0ab"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "d3232f798cdf086ca98cff2ef77a9529"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "8506c6c0db6ed115e4684000cf2526f3"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "497626d6a027c0975f940e6ab998e02b"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "8fb7670597bdee5334264abeec67f7e3"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "6adfdaa0f04846c095d552389a7895ab"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "f969053e17b50a0d2cde5bc6b833d05e"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "422604471cb79159a03d5a201926c3c4"
  },
  {
    "url": "de/usage/index.html",
    "revision": "03e0294640152919eed6f32a2958f0cb"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "65f41f2fbbc686cda45c0c8ea5bfde7f"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "2a4dbe86c35bba60274f1e9f8d8bd82c"
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
    "revision": "ed87275519572aaf7b8f262092e880ad"
  },
  {
    "url": "links/index.html",
    "revision": "02f91e04b7b6ddb01aa17049cf2ccbc4"
  },
  {
    "url": "satsetup/index.html",
    "revision": "f0cf4520edb60979f599aa877179e950"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "bf457ace1fdabf4fe4a0e2307b7dd45e"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "777fc023b6f0dae11a1d947309ce8a1e"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "f7148ae1e5c7dad826525e47b030b388"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "27e2a42ea940f33b186bf0a9a617f970"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "4cb5e13aa86da18b2405b1ab25862874"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "fa8bf8f5431b67d643bd2f1992ec3707"
  },
  {
    "url": "setup/docker.html",
    "revision": "8dc94fe389efcef7c305b954301c8dc5"
  },
  {
    "url": "setup/image-install.html",
    "revision": "16c3c6fd4a6cf55b69180589e63bce96"
  },
  {
    "url": "setup/index.html",
    "revision": "7b350807f83453e1125a0e4e7548e144"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "9324fbd0b32cc739926c009d6b7b5f79"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "01ef7cf3a6298efb44a1b964b3d997f5"
  },
  {
    "url": "setup/requirements.html",
    "revision": "6c00caa3545ed41b5b78f7cba5964854"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "5bde2e8e53deb0a33cf163750230ae4c"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "95904705ea5ed64cb6f89f122f01f0b0"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "42a91ea3cb4d901ae5846e1b8df63252"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "69ae8348453f0d60f785d876a15b11f7"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "dbe59d3ade0d54aae1bf3d81485d4aae"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "565261bdf41dca8bb60c027a7f8d7b04"
  },
  {
    "url": "skill-development/index.html",
    "revision": "098fde56b2c92a5b26fc7a0b7a08887f"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "6123f3807c221c93a0decb2dd9134fe4"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "69e7c09ef26f5b27e134f516da2d13f0"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "e4c7038dd6ef674577b24ca91cdeab5d"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "a8ccb373a404436819a2c3f8fd590f83"
  },
  {
    "url": "sponsors/index.html",
    "revision": "b533b85b36de39ebff0f3fe6ad52de8b"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "4649d510e9afea3ca19ee67cb49c3e8a"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "d4ad939366420d8f7290d0b25ebe4a73"
  },
  {
    "url": "usage/index.html",
    "revision": "b9144646df642d8397e9adcf2e3a65b1"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "a6e7f73f3b48afb2e9c559a5d8d9ca0c"
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

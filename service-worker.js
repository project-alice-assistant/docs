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
    "revision": "92504465f35afb583b99a25a561fc986"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "eabbcfdcb37ef1b1429f9c4e011703e4"
  },
  {
    "url": "about-alice/index.html",
    "revision": "50ec4ae839ef84558a0dc38590d3da34"
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
    "url": "assets/js/15.b69e6551.js",
    "revision": "34cf8ade6a05d1e32fb3a8526be9b4d8"
  },
  {
    "url": "assets/js/16.f494618b.js",
    "revision": "a58094a071636ad37f129621214ceffe"
  },
  {
    "url": "assets/js/17.e9a4b6a0.js",
    "revision": "c0b557b638d76475935e8b411f9fb3c8"
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
    "url": "assets/js/23.fc5442b3.js",
    "revision": "6cb5ec2aff917abe925909f149715ecb"
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
    "url": "assets/js/68.dd93fea9.js",
    "revision": "09a72c7d2577558c9ff2d649fa65dc80"
  },
  {
    "url": "assets/js/69.cba2cbb1.js",
    "revision": "dae776b8d801d5d2489b03f9fa166917"
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
    "url": "assets/js/79.8f92bc13.js",
    "revision": "525f8c9a07bc7718f1279bd7e09ce039"
  },
  {
    "url": "assets/js/8.772eee80.js",
    "revision": "6e2aa401f32ab9d2e43d47d78d815ed0"
  },
  {
    "url": "assets/js/80.9c13896d.js",
    "revision": "92030b61fbce6aac18667ce0cc3e8f21"
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
    "url": "assets/js/84.89af12d2.js",
    "revision": "73bde21f0497c397a50cf5768c2ac387"
  },
  {
    "url": "assets/js/85.91f6954d.js",
    "revision": "37277138dd57a203d577863591f0391e"
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
    "url": "assets/js/90.b2c5461c.js",
    "revision": "4d0ae5c79fc0043ef77a163a891257d2"
  },
  {
    "url": "assets/js/app.f5ae55fc.js",
    "revision": "918ebdbfe5a2eae20e8875e53f34fbc5"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "a117e62e02e527aaa85afb0b186d0be1"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "afeb62f8e532cea81056175aee3ff73c"
  },
  {
    "url": "community-made/index.html",
    "revision": "4e5c7bdc2f03d8e9922ab54c57318c25"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "5a0717e5b2d3df895591e0c5ec1fee44"
  },
  {
    "url": "contribute/index.html",
    "revision": "d7a3affc3c84fe72df179d35f0f856ea"
  },
  {
    "url": "core-development/index.html",
    "revision": "897c0785d60c2b358821cc753c1ba4e0"
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
    "revision": "8f79130f4b42224f98b804e30bc00f0b"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "6156a90baf24de479c73cfe7571f57cd"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "fdae77b692d34aaf0e0e6d910afefa9c"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "b6dbc5804f0e2b770dedce921ec3d8b7"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "5c8aad2c56726f6277bfb33ec3d1f100"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "1e35591f0e08ac09775888385ed4f00d"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "7884d86600311458e422bc8ffba9a598"
  },
  {
    "url": "de/index.html",
    "revision": "a958b94102466ac184c6659d24641c0a"
  },
  {
    "url": "de/links/index.html",
    "revision": "520c7b9f60f416644f197afe93003446"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "cfc068e8ff143382fe46cef2fa194697"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "e6dab2a228d5159452140e9284f70eb6"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "103e053db4d58e515f3350297bef9a16"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "8c00d8bbc1afed5c5bbbb04ce98a5323"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "80e1871069b2cf83b144548d1d43a321"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "30b6e71994ca184216ea4e110246ff07"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "688d93cdd038bdc6c708dabc71ec87a5"
  },
  {
    "url": "de/setup/index.html",
    "revision": "a36a967870cd70d61d2f3cdc3477e463"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "34b4b569826dcc8eac6ce7942c83021b"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "b0f1f5920308043291a15bfd6b85f94d"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "51df88c4bfa53218f8cdba9e1f6d65b9"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "d4b8b92348a47e6ccbe787ed4bc9f54f"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "6e13c74ea68f01ba3966b346e26c1979"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "15789cf6844180ee12e21f47d86955c3"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "d46c105c6f8fbca8092de516601bf364"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "0f34ae864ca2409392eed6cf36471542"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "05147ebe510a8ee066c56dfc4757c973"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "48066a02180b9368a1d33439f410efc6"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "9a3a614ad575b8504af62a29e8100202"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "134522f893472b3ea38a3e79c688d3fa"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "ed156f1dd0fcf09b20f40a06c2ba901a"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "ebea159c09880e6ff63c34fd2a5b7358"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "1a055ae6390c5b1544df1d45f37c5712"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "6acebc3e289715558b58b9c655d72830"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "ffa12035a4260923d4ddec82c49cd99d"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "444c8ee9599e9cb06d7f5b1de9adf3a5"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "385213a5be73fa0ea7c2f2a69ae0b1d2"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "7a5bdb18bc4cc155168bfea5223c4691"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "49d5939ec8c410c3f614d36ddcd0a203"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "45c52d3763536fe2f59daf955ea9f4f1"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "496fe9db1c1814dcc0ebadba0e249c5b"
  },
  {
    "url": "de/usage/index.html",
    "revision": "a53f47d4dc9f6f939f432f6cf0cc804f"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "e63c55bf93ad4a017d0ab6e6ae912a39"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "635cb3be5b8501678d3c692346a10fd1"
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
    "revision": "ca3126dc5c17f15631075477f740c0ab"
  },
  {
    "url": "links/index.html",
    "revision": "6552ccae523788c1dd279a3acb5d2e68"
  },
  {
    "url": "satsetup/index.html",
    "revision": "20bdbf43eb1939c1f40559bf6ec1fcf6"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "2e3e6e996d7fbd49481ef3562d632190"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "5e8a10e74699c03c30ae7fb4129a5560"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "7f4e3d5e3ecfa8e52e9c03317634fb47"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "1d76f22f8f17a8ecaf18a1e7fce029a1"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "ba7e429431f8fa4a125f3181c20f7527"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "d9b2cc38a2a2e342b2e0036d67a190f4"
  },
  {
    "url": "setup/docker.html",
    "revision": "a5a0b9c5a89fbb96eca6c4b8c946df34"
  },
  {
    "url": "setup/image-install.html",
    "revision": "bd4436785db6024eb48b065950487161"
  },
  {
    "url": "setup/index.html",
    "revision": "5b810c2bfc4ee03f5f6f547572001a6e"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "e94089d4808a0c88f8d711aabad7dd94"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "f56ee8704eb3d9c3ebb77e8f069de187"
  },
  {
    "url": "setup/requirements.html",
    "revision": "431805568fce06f5955ebd7013d25e63"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "02f3c8fa73cb712ee625e6ff14dd96b7"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "4341db16a4d19ee1e0b7e37fb5e890e7"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "2b613812cf65518288b02190cdf3d9d9"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "ae8cec33d9ffe480c82d4fadef966143"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "fe2fa3c47839cb74f89978b7a58a88f4"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "e0e3aba34777d44be861896a02936921"
  },
  {
    "url": "skill-development/index.html",
    "revision": "f726d91b309f332e0cc6ab56c938d9f4"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "ebdd8a90356dd01f644ce85bd675d856"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "b40acc76a08a50d46877416e97e4e3b4"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "aee3d7cee5b0039b2e900695b2ea6f70"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "e01f2c44f8afa199271461e900fd0dd1"
  },
  {
    "url": "sponsors/index.html",
    "revision": "34a4311695c8cdfe1d3516fdb3382c04"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "82404e46b32c94564c2716d322d58170"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "936922be9ddeb8b45eafb2885ddad99c"
  },
  {
    "url": "usage/index.html",
    "revision": "53b7c6f354932771f6bed927e0dd5922"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "6c780224a9b6660c4ef90b5cbb2c1649"
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

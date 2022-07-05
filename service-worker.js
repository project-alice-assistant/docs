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
    "revision": "1f40a2a2cd5c9b1eda720e9c06ae0d41"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "bf8603093f7e5baf0295f4ef00306c8c"
  },
  {
    "url": "about-alice/index.html",
    "revision": "e61246b789b982d36791b9959eee9e2f"
  },
  {
    "url": "assets/css/0.styles.da4825c5.css",
    "revision": "978bbe0f3063624ed7aa2c2f7f071d3c"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.0abf3088.js",
    "revision": "622d50ff88cce06001c1850b1c6a1c70"
  },
  {
    "url": "assets/js/11.7763c3dc.js",
    "revision": "13c44feddca03bd930c176f5e6cb9a0e"
  },
  {
    "url": "assets/js/12.82de0f9b.js",
    "revision": "d1f31b6e9c0a63ec801ca74043da39f3"
  },
  {
    "url": "assets/js/13.1a792efa.js",
    "revision": "9c243b850b83fb6bdd160298d343b0df"
  },
  {
    "url": "assets/js/14.62db48b7.js",
    "revision": "eb9934d7bc1915ded64b790c6b300493"
  },
  {
    "url": "assets/js/15.e60610b8.js",
    "revision": "59ca5b61eee9a5d832a139e6ff756e50"
  },
  {
    "url": "assets/js/16.76676dc5.js",
    "revision": "a99639db550af87af803aa8930bbfe75"
  },
  {
    "url": "assets/js/17.09a26a78.js",
    "revision": "f4b4a423fa8ef5ff880c88740c75b6a2"
  },
  {
    "url": "assets/js/18.50cdef19.js",
    "revision": "0aca952dcec646cb2f7c4dada38d7f4c"
  },
  {
    "url": "assets/js/19.0a39e38b.js",
    "revision": "5c8b6994c151da6cc5e07bc26da65f75"
  },
  {
    "url": "assets/js/2.86ee97e6.js",
    "revision": "e4eb4a97a24acfcc9dbdbf262863ecef"
  },
  {
    "url": "assets/js/20.a8dcafa2.js",
    "revision": "20e783c71bb578d43d17f52a61fa529e"
  },
  {
    "url": "assets/js/21.65b94cd9.js",
    "revision": "d5a287a0654dab7001e031baab87002f"
  },
  {
    "url": "assets/js/22.ceedb83b.js",
    "revision": "e65c3144ea18142e85c9745006084ec9"
  },
  {
    "url": "assets/js/23.a1022bce.js",
    "revision": "79178a1005314a45162841cbe9ef5620"
  },
  {
    "url": "assets/js/24.f6f403a6.js",
    "revision": "213657950a80b0bb17a83337f8f89a1a"
  },
  {
    "url": "assets/js/25.4c3cd042.js",
    "revision": "2116b206285db05be3f20e826743ff93"
  },
  {
    "url": "assets/js/26.8a5ef2c4.js",
    "revision": "dd608932d3e18f8704cc11850a194aeb"
  },
  {
    "url": "assets/js/27.b244cea9.js",
    "revision": "28b4fa30e02b77908670cc80fac67ab3"
  },
  {
    "url": "assets/js/28.664e3e28.js",
    "revision": "f649574cda4dda0f4a49419120514e0d"
  },
  {
    "url": "assets/js/29.829cead8.js",
    "revision": "6525f0bae858403dc83c45d8112ea86a"
  },
  {
    "url": "assets/js/3.517acffb.js",
    "revision": "80e9cc484c55482e6a85482ba7f89eab"
  },
  {
    "url": "assets/js/30.42a2e961.js",
    "revision": "8925cc0556d36be233fc249c59880917"
  },
  {
    "url": "assets/js/31.f7e5b053.js",
    "revision": "7a87c38753a63fdf740e166734a67d57"
  },
  {
    "url": "assets/js/32.bf1231ef.js",
    "revision": "d40cba0920aeddafd5a452601ecb2f3d"
  },
  {
    "url": "assets/js/33.813fd529.js",
    "revision": "c3bd36014ff9fdc5cf20e396a3697def"
  },
  {
    "url": "assets/js/34.99e9ab13.js",
    "revision": "aab66cd6bb254fe6345fefddde02a2dd"
  },
  {
    "url": "assets/js/35.3398cbe4.js",
    "revision": "6adf995a6f5b2513ce7637c9add83c54"
  },
  {
    "url": "assets/js/36.b64e974c.js",
    "revision": "00236e421b9c5ee3f0741583ab30b7aa"
  },
  {
    "url": "assets/js/37.c4f8798f.js",
    "revision": "3bb4e488c30b89007fcf3eb614b62344"
  },
  {
    "url": "assets/js/38.9289a115.js",
    "revision": "461a83efbc5f1a9def6f7ff9cf140eae"
  },
  {
    "url": "assets/js/39.438ab5c3.js",
    "revision": "ace52edb7581c8603b0c23c9438cf5df"
  },
  {
    "url": "assets/js/4.b542adea.js",
    "revision": "64affd0b6455c58884915a2decb1a97e"
  },
  {
    "url": "assets/js/40.af33cd3d.js",
    "revision": "a35fd146b3b48d3b2f02d4d2dbc9825e"
  },
  {
    "url": "assets/js/41.76c0682c.js",
    "revision": "59298e8dec845081f1bd73c0b18a4d64"
  },
  {
    "url": "assets/js/42.2d5556a8.js",
    "revision": "98253b1aba02daf8961df2bafe9c3ab1"
  },
  {
    "url": "assets/js/43.54114443.js",
    "revision": "6e3b16942172428ec7d5707ffb075edf"
  },
  {
    "url": "assets/js/44.1336c696.js",
    "revision": "3e009b7424fde0471e68ffe78bbe8c84"
  },
  {
    "url": "assets/js/45.3be33c5e.js",
    "revision": "d846db00794c7210ae99b13a312c6b50"
  },
  {
    "url": "assets/js/46.85cfe0d9.js",
    "revision": "41e7bea6a420f9a6fe487447e38e5ad5"
  },
  {
    "url": "assets/js/47.4c501cc6.js",
    "revision": "75518a8d286c66916a90725f17350fd3"
  },
  {
    "url": "assets/js/48.772dbe4f.js",
    "revision": "6f516bcaf7e86221bc8678b49f6a7abb"
  },
  {
    "url": "assets/js/49.5035007c.js",
    "revision": "435462de438adff07a90703dcd7b649c"
  },
  {
    "url": "assets/js/5.ae6dec0f.js",
    "revision": "eae49a3e4aefcd42e563e48a7ddd93ce"
  },
  {
    "url": "assets/js/50.642b46f5.js",
    "revision": "0844d2d6857cda04af1f9b30dbbb96c6"
  },
  {
    "url": "assets/js/51.6a4b5367.js",
    "revision": "c5fdb734db8e2544089f7a31a65bb250"
  },
  {
    "url": "assets/js/52.e0c97fe3.js",
    "revision": "c5168d9a3c33d2340b264417c314e0d9"
  },
  {
    "url": "assets/js/53.29a8e3e9.js",
    "revision": "35839f18672d9b8fa16536e71e2e05ab"
  },
  {
    "url": "assets/js/54.bd00240d.js",
    "revision": "3c5d9da997b65cb3275b28ac77856132"
  },
  {
    "url": "assets/js/55.d2c86ddb.js",
    "revision": "6939cef5fd678d3c4c7dc38ce584f4d3"
  },
  {
    "url": "assets/js/56.c556c78b.js",
    "revision": "daab5b176c0a3c72a0ad79dc5d20017b"
  },
  {
    "url": "assets/js/57.82c5dac8.js",
    "revision": "e5247037ce01d73e8670b5df4d259b2d"
  },
  {
    "url": "assets/js/58.31bbc523.js",
    "revision": "f3f91576eed18526ca9621da1a67b7b5"
  },
  {
    "url": "assets/js/59.7d91a084.js",
    "revision": "ff9b06a5320367593d609ed47af748aa"
  },
  {
    "url": "assets/js/6.9fe6b66b.js",
    "revision": "890fd028af132c5a7e8cadc45417cef1"
  },
  {
    "url": "assets/js/60.b2098cbd.js",
    "revision": "184d501c71276c65ef97771e602b6147"
  },
  {
    "url": "assets/js/61.ff7ad7d5.js",
    "revision": "e9a6f28cbfc8b2881ec0e90789cfd762"
  },
  {
    "url": "assets/js/62.37714f8e.js",
    "revision": "6b5afdf1fcf2c7a65cf80af2c4bcd20f"
  },
  {
    "url": "assets/js/63.6c5d414f.js",
    "revision": "76d5335f44fc9d5d59f935dd4e8966ae"
  },
  {
    "url": "assets/js/64.2e3388b0.js",
    "revision": "d81b1ee87ddad945b29eb9a78f7a0b36"
  },
  {
    "url": "assets/js/65.4c70718b.js",
    "revision": "80aec6fb7f81dc06c5d52a3c4c59bbf2"
  },
  {
    "url": "assets/js/66.3fe8e200.js",
    "revision": "50a05f234e8fbd9035bfdc6420db9106"
  },
  {
    "url": "assets/js/67.e26535d1.js",
    "revision": "04a03b4950ee118e531fb46e44c4d319"
  },
  {
    "url": "assets/js/68.9ce73dfe.js",
    "revision": "72bf3871bd847cbd41ba8b58273d79b7"
  },
  {
    "url": "assets/js/69.37d4ee05.js",
    "revision": "8805c2712fac4713efd49b4ddd403713"
  },
  {
    "url": "assets/js/7.c80fb0f3.js",
    "revision": "b75b1732051ba9ba05f89a62cb801da9"
  },
  {
    "url": "assets/js/70.9bf999ac.js",
    "revision": "7f0a84c450cdcd4b9dd26323a18ae70e"
  },
  {
    "url": "assets/js/71.47648510.js",
    "revision": "67b9463b6e44c4e8f544caffa5337c2f"
  },
  {
    "url": "assets/js/72.a4aabd7c.js",
    "revision": "6453730ab622c13f212bea556f132394"
  },
  {
    "url": "assets/js/73.f5e9ac72.js",
    "revision": "036814bcfe988fac737f57829f055eb7"
  },
  {
    "url": "assets/js/74.07535375.js",
    "revision": "0f33d7e10988a4fe81d93611ce995f94"
  },
  {
    "url": "assets/js/75.94ea72d9.js",
    "revision": "8b350b0d33263892cdacab6499c4398d"
  },
  {
    "url": "assets/js/76.456adf58.js",
    "revision": "4fb471d44ce46d4c8683e68bdf481fcf"
  },
  {
    "url": "assets/js/77.f2665829.js",
    "revision": "51300ccceff29de0c0f8ae75d63d1a5b"
  },
  {
    "url": "assets/js/78.c9355b66.js",
    "revision": "c583c9c9003c7a31b02283a2d8a50711"
  },
  {
    "url": "assets/js/79.f3654abf.js",
    "revision": "49c990e7fa99fa09a971992c57262275"
  },
  {
    "url": "assets/js/8.8f8690ae.js",
    "revision": "a6a3a440251728722d4da1f38dc0c943"
  },
  {
    "url": "assets/js/80.1e1f9f1f.js",
    "revision": "f36349d207e29ee165040b47c26131ef"
  },
  {
    "url": "assets/js/81.70632723.js",
    "revision": "f3e0a884498e84176a1cd183ca5bee40"
  },
  {
    "url": "assets/js/82.fd3cba1d.js",
    "revision": "f9234cd158af0a065948a892beea836b"
  },
  {
    "url": "assets/js/83.2d308ed8.js",
    "revision": "546f241a345487de04844c81fb7a8adc"
  },
  {
    "url": "assets/js/84.f074664e.js",
    "revision": "c3b7966e7f4327113e73c53019d8f97f"
  },
  {
    "url": "assets/js/85.b036c787.js",
    "revision": "a88efaf71368b6f2f460e4c62d3f9ea3"
  },
  {
    "url": "assets/js/86.31272156.js",
    "revision": "5506d4e93bc71f24ac6e1e7859dceb29"
  },
  {
    "url": "assets/js/87.71992b6e.js",
    "revision": "b1006f5d3e429b5de1bdb597bbc950b1"
  },
  {
    "url": "assets/js/9.31a4a25f.js",
    "revision": "5a1acec84b02736f15718e042201ccda"
  },
  {
    "url": "assets/js/app.ee2a2505.js",
    "revision": "9bc0a097d09f468f9629191334d0ab73"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "e4ade90e659422eaa588f0a708cb4a3b"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "9e0e51ca6ad1005b40e63186f2505684"
  },
  {
    "url": "community-made/index.html",
    "revision": "ed94aa84f253ee3dfc29794e8ad04897"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "8f401ddbd3d136f66b3a557dc96e5eff"
  },
  {
    "url": "contribute/index.html",
    "revision": "d81baf8e398a646982aed525b9cd5442"
  },
  {
    "url": "core-development/index.html",
    "revision": "3b88596ca82eb586aba8d4096b83aab6"
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
    "revision": "8f97ff2f913b00aa812f4d33366212a0"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "ab93da5c03772ec39f9a31da21434153"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "0bb90a3d79527addacb52597cb3d4ca2"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "c6acb945168cf3184bb532b2720269e6"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "87d13d5411e6c0cdbf152fa0f1c3a2d3"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "bcb89c3fec1de112f49d088702a111bb"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "8c168918e477c93c70dff118b3a7e6db"
  },
  {
    "url": "de/index.html",
    "revision": "9d1e943622473d69c9557faa22c18887"
  },
  {
    "url": "de/links/index.html",
    "revision": "9bafd8041ab4aaf61227fe87b73842ce"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "1ccc05a6cd6e79073f596fef4a43721c"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "574321f56f51baecdb730207eed5e672"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "ea886d41d2c90f6ed291ff453d599cbb"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "9ba237b1c9122cc733e1197e416e2468"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "b37c633fb5a1c39c5a56ab0987ad901e"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "e3063f2b1011f7ebad5d0555414a87a7"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "4fb67dc710ae7af92eea6ce89a67c5f6"
  },
  {
    "url": "de/setup/index.html",
    "revision": "0ee2b7fc097277b3c4496628916b5289"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "77d6286ea8a36926ebfa53a137f86545"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "b63f7b97249e697846e7754562ee64f6"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "2dbbbb9862ce792da9ef639aebf38b7c"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "3da0b1786bb3556fd002ff7027faa581"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "14659034433ba8a6a22dae05baf96f89"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "e3b266763304a9453447ec3f20734895"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "68baf4f4de1bf8cf9cb38e9300fdc639"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "ea5b5b893f87392f5a9151b4317508c4"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "84e891f3ef41eaeffcc2912e8e686894"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "19bbc7d15cc7561d127a8c04d63a307d"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "60c64de34007fbc7afa533b5491e2998"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "009080cfb0743033dcdf2a7680eeca44"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "1d530cf011e6d431cd83678e1b143817"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "71234abea297c35429d6aa735cf0693b"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "634c12aefe39af5abfb2fc68d7f7d074"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "ca3cfad77c308823e0fbd3cebc2345d8"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "c392c2a370aed214b2506034ba7138a6"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "7ae8ae187e663bf767c28d6459e01a57"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "f73aba945e034ef6a86fa6f5e2e4a2a3"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "deabec8650cfa951b403e6bc4f3838d1"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "a64ff88521704e8d1d70bbd6cdb54950"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "317db78a07562b7affabef0496ed7250"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "4031da80491c9d7513b293d6fe6771d6"
  },
  {
    "url": "de/usage/index.html",
    "revision": "e64ab989a865c5423d1108ba40c82fd1"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "54d20a115da8b9bc163112e26cbafd26"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "d6d9d992593431cef13ba56d8c92a9c9"
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
    "url": "images/devmode_enable.png",
    "revision": "7f3010c7cce017b73e48509c23ebdea0"
  },
  {
    "url": "images/devmode_git.png",
    "revision": "4bbe647d45f473e2588f680704a648a7"
  },
  {
    "url": "images/devmode_git2.png",
    "revision": "4b8136ffad726eafa92df9b8234ca1cf"
  },
  {
    "url": "images/devmode_git3.png",
    "revision": "1c271107f84cab317d74ecc8f3857076"
  },
  {
    "url": "images/devmode_github.png",
    "revision": "8b0586ff67a43a464c958a8926e1e54e"
  },
  {
    "url": "images/devmode_instructions.png",
    "revision": "79465d9d6268c214b094d7315aefb7ba"
  },
  {
    "url": "images/devmode_skillInstall.png",
    "revision": "58fdd35c9837a48a26c99ac456d8e56d"
  },
  {
    "url": "images/devmode_talk.png",
    "revision": "6a88f08c1cf462f1951b61120cf0dcb9"
  },
  {
    "url": "images/devmode_training.png",
    "revision": "ed113d17bf9799ad278b6b8d978e4f6b"
  },
  {
    "url": "images/devmode_training2.png",
    "revision": "2a1c093106c5d8b733a8c9b633e236f3"
  },
  {
    "url": "images/devmode_training3.png",
    "revision": "34b4343aced39cb52b14c08b0fe9d2d7"
  },
  {
    "url": "images/devmode_training4.png",
    "revision": "2aceba610fe0312340991d9f31fd344f"
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
    "revision": "c7a93793688054e6c007b681f9c6ca9d"
  },
  {
    "url": "links/index.html",
    "revision": "65307e37fc422b56c4a5f5f880ac2eec"
  },
  {
    "url": "satsetup/index.html",
    "revision": "e6b4a96fddbc484fc34023ce4f9cd703"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "c8a4a56beda14ee965989a76ab5bb2e2"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "51f8b762b04e1f12c062f3e110622258"
  },
  {
    "url": "setup/docker.html",
    "revision": "904e40ec8e257ff1fd8e1a8d5b5233e9"
  },
  {
    "url": "setup/image-install.html",
    "revision": "ba0e2c5a003a0b3799ddbd9e17d1cbbf"
  },
  {
    "url": "setup/index.html",
    "revision": "adba33ad3493e77dddaff901e9a2e77f"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "fb6893824638f076f275692c17601370"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "8146d6f86a835eb2f944427627f3e0dc"
  },
  {
    "url": "setup/requirements.html",
    "revision": "eb039d5704d459ca448c14578941b5c2"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "c180a8faf14af57d42a16539988f580b"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "37820b3d8ab9b8ac5772c92d94511b5c"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "696b330feea6fbbb9eb05692ce272834"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "a08a44f51cf4939195ac8dfdcd69454d"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "315ad7a9e03c0943174be624502472b7"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "f09c89ae700af701d9fd22bba81bd347"
  },
  {
    "url": "skill-development/index.html",
    "revision": "c0d4736429cb77f716a0978ceb77af80"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "ffde3914d12fe99c81612ad18779d67d"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "c22a357552747affedb9008a9981b1ee"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "3fcf38518cfabcbc1e108ce4da56c358"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "c5654c620f0d661480b1144d2198d605"
  },
  {
    "url": "sponsors/index.html",
    "revision": "b9a96fbeaad5212a433be7718f7d117f"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "24632e2e661d243f2e459f7500f0994f"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "d9b9649aaa7c100309bfd1544fb08a02"
  },
  {
    "url": "troubleshooting/satellite.html",
    "revision": "9e28e2c08620ed460763ba9e4b895fc5"
  },
  {
    "url": "usage/index.html",
    "revision": "1dca52f32f99d1e917135bebe1a482c3"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "3d81e5d58f5a1f93e147aea2d1ee145a"
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

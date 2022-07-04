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
    "revision": "478a8489349fe12e83ac0b8b459a61b6"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "122fb74503d68327f12bc51dcd175e54"
  },
  {
    "url": "about-alice/index.html",
    "revision": "36bc4ea0ce71394c92ea2c43ae806d05"
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
    "url": "assets/js/87.ee49e8d1.js",
    "revision": "ca0564e2e31794dc874c023349914eff"
  },
  {
    "url": "assets/js/9.31a4a25f.js",
    "revision": "5a1acec84b02736f15718e042201ccda"
  },
  {
    "url": "assets/js/app.2e0b658b.js",
    "revision": "cf7b46dd67a962c0a9126b92e861dae2"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "7c076c81c17326cae498d666a447acef"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "b92266b435bc6eeb772bdfa08dc00f45"
  },
  {
    "url": "community-made/index.html",
    "revision": "4a69fcf920f432683b991abee2f5aadb"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "5d58888f035edf25d93eb68468b8d33b"
  },
  {
    "url": "contribute/index.html",
    "revision": "5dfa9fdf190a2c97cbc08be3d94a5018"
  },
  {
    "url": "core-development/index.html",
    "revision": "2d5b1f37be6ec4288e567dd4cdc3797a"
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
    "revision": "bf60342749e630d442ac520d20d7c9e7"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "a88401b4c283d4af9bf11bd1b3d2d6d1"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "16591b680a84f00f3c83af57eedad6fa"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "0af2c63bf5df3c509a4dcdcb1175ac55"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "b66d9f2a34cfec18ac59458ff19f84a6"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "686e15b7fea4baf451b29b5f0f0c1f86"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "1db789ad815a6725c6fcb44c6fe3cc55"
  },
  {
    "url": "de/index.html",
    "revision": "9fd412300cc3491c500189e1bd539f01"
  },
  {
    "url": "de/links/index.html",
    "revision": "0951bfb04dbf5766a2981cdb4ffe4d13"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "ebb9005b6143b503d82fe8d3392b542d"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "98723f3c482f6264a422fc9213af4de6"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "b515c1561ce864e4ff7eb9adb88ab032"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "e654e3a118ca811ae87d2238e0a1a09d"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "a84570bbf4e59f07235b9aa58b8410d0"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "af7b8d3ca6ed984ab172c796de1ddb53"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "7551e7ff356f890cc769b9f5d023ba9d"
  },
  {
    "url": "de/setup/index.html",
    "revision": "706f41a2bb5f3dca7edb3aedde07b949"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "24ff69c08ea5bb8e8fe3f29aaa751c7a"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "30af3e29cdc86af4f7add89c18095713"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "1ed42d7ad77131524a572b9bcbc85b0d"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "0f619869020b138ec3a6d24801a29641"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "2ae2b378e9fc31235a366a1f440bc416"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "a416aa67ac02efdaff7aae5e86a3862a"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "9d6f575539c3dba9ca6041d67100d785"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "b7741d1da84a1a858e6553cee8e14789"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "0099e595f247d4af2590a84e846e0aa5"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "2ad365843bda9ea2f01851a8561a79cc"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "fae34a59e3b4c11b99767bbbf9c27538"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "b26f0f82b4a442f7cec180ef986c2b22"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "5fde2e86b18ce63b4aed751f998e3185"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "3f82b2fa635a956a2ed2d977b6f0b9a0"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "b67379ce32d05816bd4648bbe670824e"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "4b18d796b1d194e488ce30a4ec82f8d0"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "64051c4f654a4fc8aeb83d46fa99ea94"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "e5e681924dde37d93f257c08b55b9606"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "9543478a549624569917913ef0125763"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "1fa6f2bc7180e97c8a8ada887e6bbcdd"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "54e8f8567f1afd906e2ca3b6e83cc848"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "08a4091ed7f30cbc5c201518d7d0e556"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "ab2ac3164281bf2ced90235bb37aa9be"
  },
  {
    "url": "de/usage/index.html",
    "revision": "b5a531fa1b562cdecfb79ee1d9b40a7f"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "fb646e67299605e2466008ff0cc02657"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "80627c485d7e0a64e1eaabca69890279"
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
    "revision": "9ac505df866322ab427a199e161350c7"
  },
  {
    "url": "links/index.html",
    "revision": "dfc94db03701fe270cc3b5560749ba0e"
  },
  {
    "url": "satsetup/index.html",
    "revision": "152ecf4239f0cb3754b1b96f329c247f"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "5ab7cd77e690bceb59edd197d470ec46"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "1aa34113bbfdfb3a3b2e83f34e81aa57"
  },
  {
    "url": "setup/docker.html",
    "revision": "2c69d5442f3767d59a3c2a01d27355d6"
  },
  {
    "url": "setup/image-install.html",
    "revision": "44ee01e8497faf3f317f27b5a4d5b743"
  },
  {
    "url": "setup/index.html",
    "revision": "4c871a2a9637857cdda703221addd2ee"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "ad445c4ea0968f7d5a51a9a5544910fe"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "7e2b23d40ea7865b4e4a64b63984f69e"
  },
  {
    "url": "setup/requirements.html",
    "revision": "0e8392b4c519950b32ad3bc4b26e85ec"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "4f203eb604143ca65dc82bb82aa0be90"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "9a33d60c781942a3bcce773f02c8897d"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "59ec2c1fa579f06f01dd99b22f37eee8"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "a0b4dae8c24ccd5065957e193bb689af"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "8fc25c30fecb4c78ff2ac6a1180d62c2"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "beb7a852f7223d0d59cffbf726e1a40d"
  },
  {
    "url": "skill-development/index.html",
    "revision": "eb91ab60a6c376c0a8a4d60792c9ec7e"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "f9631341c5142583fd2278213c64e425"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "9cf768b5986a63da376ffe102f46eded"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "c71eb0176cd37f134daa8928aab6a09b"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "25ecf9c8a515f8102207370f4fd92591"
  },
  {
    "url": "sponsors/index.html",
    "revision": "85bdf82f37be5ee73e731692e1db722c"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "21adc3aa0400aa125ad166366a67f030"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "8e8680d80726ee5dcc94210e91a412e2"
  },
  {
    "url": "troubleshooting/satellite.html",
    "revision": "cecf2d35797c2e1c326c65f5928548aa"
  },
  {
    "url": "usage/index.html",
    "revision": "c080f5b300772d2015ca11f53fd25c6a"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "d85304e0e164bdd83f28c4fd55576a02"
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

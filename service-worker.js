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
    "revision": "b805a2910d939863f6ade63c78db44df"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "2639793c97124483ba6049072c781a9e"
  },
  {
    "url": "about-alice/index.html",
    "revision": "7f05fe9243f6470ed0a77c1f346538ee"
  },
  {
    "url": "assets/css/0.styles.5cea0438.css",
    "revision": "978bbe0f3063624ed7aa2c2f7f071d3c"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.4a57c1a2.js",
    "revision": "622d50ff88cce06001c1850b1c6a1c70"
  },
  {
    "url": "assets/js/11.eaa0f131.js",
    "revision": "13c44feddca03bd930c176f5e6cb9a0e"
  },
  {
    "url": "assets/js/12.086f2bae.js",
    "revision": "d1f31b6e9c0a63ec801ca74043da39f3"
  },
  {
    "url": "assets/js/13.f5b0b6fc.js",
    "revision": "9c243b850b83fb6bdd160298d343b0df"
  },
  {
    "url": "assets/js/14.6dcc678a.js",
    "revision": "eb9934d7bc1915ded64b790c6b300493"
  },
  {
    "url": "assets/js/15.27aff993.js",
    "revision": "59ca5b61eee9a5d832a139e6ff756e50"
  },
  {
    "url": "assets/js/16.6c0c2d90.js",
    "revision": "a99639db550af87af803aa8930bbfe75"
  },
  {
    "url": "assets/js/17.28d4b260.js",
    "revision": "f4b4a423fa8ef5ff880c88740c75b6a2"
  },
  {
    "url": "assets/js/18.9eff9a50.js",
    "revision": "0aca952dcec646cb2f7c4dada38d7f4c"
  },
  {
    "url": "assets/js/19.49c84686.js",
    "revision": "5c8b6994c151da6cc5e07bc26da65f75"
  },
  {
    "url": "assets/js/2.f69f995f.js",
    "revision": "e4eb4a97a24acfcc9dbdbf262863ecef"
  },
  {
    "url": "assets/js/20.935ffe73.js",
    "revision": "20e783c71bb578d43d17f52a61fa529e"
  },
  {
    "url": "assets/js/21.cd9d4676.js",
    "revision": "d5a287a0654dab7001e031baab87002f"
  },
  {
    "url": "assets/js/22.e1415403.js",
    "revision": "e65c3144ea18142e85c9745006084ec9"
  },
  {
    "url": "assets/js/23.9cb0a9ff.js",
    "revision": "79178a1005314a45162841cbe9ef5620"
  },
  {
    "url": "assets/js/24.e76dd0ea.js",
    "revision": "213657950a80b0bb17a83337f8f89a1a"
  },
  {
    "url": "assets/js/25.8faa5ade.js",
    "revision": "2116b206285db05be3f20e826743ff93"
  },
  {
    "url": "assets/js/26.bf070011.js",
    "revision": "dd608932d3e18f8704cc11850a194aeb"
  },
  {
    "url": "assets/js/27.5926c7ea.js",
    "revision": "28b4fa30e02b77908670cc80fac67ab3"
  },
  {
    "url": "assets/js/28.96cf78a5.js",
    "revision": "f649574cda4dda0f4a49419120514e0d"
  },
  {
    "url": "assets/js/29.5fd1cbdd.js",
    "revision": "6525f0bae858403dc83c45d8112ea86a"
  },
  {
    "url": "assets/js/3.d8e745c8.js",
    "revision": "80e9cc484c55482e6a85482ba7f89eab"
  },
  {
    "url": "assets/js/30.e473d56b.js",
    "revision": "8925cc0556d36be233fc249c59880917"
  },
  {
    "url": "assets/js/31.2cbb6ac7.js",
    "revision": "7a87c38753a63fdf740e166734a67d57"
  },
  {
    "url": "assets/js/32.c349dfcc.js",
    "revision": "d40cba0920aeddafd5a452601ecb2f3d"
  },
  {
    "url": "assets/js/33.3c363aa1.js",
    "revision": "c3bd36014ff9fdc5cf20e396a3697def"
  },
  {
    "url": "assets/js/34.09049430.js",
    "revision": "aab66cd6bb254fe6345fefddde02a2dd"
  },
  {
    "url": "assets/js/35.b8da91e6.js",
    "revision": "6adf995a6f5b2513ce7637c9add83c54"
  },
  {
    "url": "assets/js/36.254b2237.js",
    "revision": "00236e421b9c5ee3f0741583ab30b7aa"
  },
  {
    "url": "assets/js/37.86c6cd28.js",
    "revision": "3bb4e488c30b89007fcf3eb614b62344"
  },
  {
    "url": "assets/js/38.7b2790d3.js",
    "revision": "461a83efbc5f1a9def6f7ff9cf140eae"
  },
  {
    "url": "assets/js/39.35bbfd20.js",
    "revision": "ace52edb7581c8603b0c23c9438cf5df"
  },
  {
    "url": "assets/js/4.b498bc4e.js",
    "revision": "64affd0b6455c58884915a2decb1a97e"
  },
  {
    "url": "assets/js/40.2136da41.js",
    "revision": "a35fd146b3b48d3b2f02d4d2dbc9825e"
  },
  {
    "url": "assets/js/41.04414fd6.js",
    "revision": "59298e8dec845081f1bd73c0b18a4d64"
  },
  {
    "url": "assets/js/42.02a1436c.js",
    "revision": "98253b1aba02daf8961df2bafe9c3ab1"
  },
  {
    "url": "assets/js/43.c3e3c8a2.js",
    "revision": "6e3b16942172428ec7d5707ffb075edf"
  },
  {
    "url": "assets/js/44.e6fe7dc2.js",
    "revision": "3e009b7424fde0471e68ffe78bbe8c84"
  },
  {
    "url": "assets/js/45.870869bc.js",
    "revision": "d846db00794c7210ae99b13a312c6b50"
  },
  {
    "url": "assets/js/46.d44cc272.js",
    "revision": "41e7bea6a420f9a6fe487447e38e5ad5"
  },
  {
    "url": "assets/js/47.64aede6c.js",
    "revision": "75518a8d286c66916a90725f17350fd3"
  },
  {
    "url": "assets/js/48.c8a77c20.js",
    "revision": "6f516bcaf7e86221bc8678b49f6a7abb"
  },
  {
    "url": "assets/js/49.c4037ba0.js",
    "revision": "435462de438adff07a90703dcd7b649c"
  },
  {
    "url": "assets/js/5.7c74ee10.js",
    "revision": "eae49a3e4aefcd42e563e48a7ddd93ce"
  },
  {
    "url": "assets/js/50.dc738f1b.js",
    "revision": "0844d2d6857cda04af1f9b30dbbb96c6"
  },
  {
    "url": "assets/js/51.cadde523.js",
    "revision": "c5fdb734db8e2544089f7a31a65bb250"
  },
  {
    "url": "assets/js/52.1a56cb48.js",
    "revision": "c5168d9a3c33d2340b264417c314e0d9"
  },
  {
    "url": "assets/js/53.0c4f254f.js",
    "revision": "35839f18672d9b8fa16536e71e2e05ab"
  },
  {
    "url": "assets/js/54.13084cf4.js",
    "revision": "3c5d9da997b65cb3275b28ac77856132"
  },
  {
    "url": "assets/js/55.2912c862.js",
    "revision": "6939cef5fd678d3c4c7dc38ce584f4d3"
  },
  {
    "url": "assets/js/56.7dace3b7.js",
    "revision": "daab5b176c0a3c72a0ad79dc5d20017b"
  },
  {
    "url": "assets/js/57.b3783bf0.js",
    "revision": "e5247037ce01d73e8670b5df4d259b2d"
  },
  {
    "url": "assets/js/58.755567f6.js",
    "revision": "f3f91576eed18526ca9621da1a67b7b5"
  },
  {
    "url": "assets/js/59.663336fa.js",
    "revision": "ff9b06a5320367593d609ed47af748aa"
  },
  {
    "url": "assets/js/6.16767913.js",
    "revision": "890fd028af132c5a7e8cadc45417cef1"
  },
  {
    "url": "assets/js/60.71836dea.js",
    "revision": "184d501c71276c65ef97771e602b6147"
  },
  {
    "url": "assets/js/61.869e00a0.js",
    "revision": "e9a6f28cbfc8b2881ec0e90789cfd762"
  },
  {
    "url": "assets/js/62.90aed71c.js",
    "revision": "6b5afdf1fcf2c7a65cf80af2c4bcd20f"
  },
  {
    "url": "assets/js/63.c9c126cf.js",
    "revision": "76d5335f44fc9d5d59f935dd4e8966ae"
  },
  {
    "url": "assets/js/64.2e8aad52.js",
    "revision": "bbfc103f7faa9a25b593bd7a1860d414"
  },
  {
    "url": "assets/js/65.7bda5b85.js",
    "revision": "80aec6fb7f81dc06c5d52a3c4c59bbf2"
  },
  {
    "url": "assets/js/66.8c78df7b.js",
    "revision": "50a05f234e8fbd9035bfdc6420db9106"
  },
  {
    "url": "assets/js/67.e5406118.js",
    "revision": "04a03b4950ee118e531fb46e44c4d319"
  },
  {
    "url": "assets/js/68.97cdae77.js",
    "revision": "72bf3871bd847cbd41ba8b58273d79b7"
  },
  {
    "url": "assets/js/69.2e7abea2.js",
    "revision": "8805c2712fac4713efd49b4ddd403713"
  },
  {
    "url": "assets/js/7.310cb2bf.js",
    "revision": "b75b1732051ba9ba05f89a62cb801da9"
  },
  {
    "url": "assets/js/70.59d73244.js",
    "revision": "7f0a84c450cdcd4b9dd26323a18ae70e"
  },
  {
    "url": "assets/js/71.46859b3b.js",
    "revision": "67b9463b6e44c4e8f544caffa5337c2f"
  },
  {
    "url": "assets/js/72.0ef92bff.js",
    "revision": "6453730ab622c13f212bea556f132394"
  },
  {
    "url": "assets/js/73.10c2f184.js",
    "revision": "036814bcfe988fac737f57829f055eb7"
  },
  {
    "url": "assets/js/74.ac25d623.js",
    "revision": "0f33d7e10988a4fe81d93611ce995f94"
  },
  {
    "url": "assets/js/75.74a3562e.js",
    "revision": "8b350b0d33263892cdacab6499c4398d"
  },
  {
    "url": "assets/js/76.a2d60be7.js",
    "revision": "4fb471d44ce46d4c8683e68bdf481fcf"
  },
  {
    "url": "assets/js/77.26970684.js",
    "revision": "51300ccceff29de0c0f8ae75d63d1a5b"
  },
  {
    "url": "assets/js/78.ecd796fe.js",
    "revision": "c583c9c9003c7a31b02283a2d8a50711"
  },
  {
    "url": "assets/js/79.08d9ed7a.js",
    "revision": "49c990e7fa99fa09a971992c57262275"
  },
  {
    "url": "assets/js/8.c947e874.js",
    "revision": "a6a3a440251728722d4da1f38dc0c943"
  },
  {
    "url": "assets/js/80.b0ee620f.js",
    "revision": "f36349d207e29ee165040b47c26131ef"
  },
  {
    "url": "assets/js/81.9254cc52.js",
    "revision": "f3e0a884498e84176a1cd183ca5bee40"
  },
  {
    "url": "assets/js/82.a0714d61.js",
    "revision": "f9234cd158af0a065948a892beea836b"
  },
  {
    "url": "assets/js/83.af194ce9.js",
    "revision": "546f241a345487de04844c81fb7a8adc"
  },
  {
    "url": "assets/js/84.845c96a7.js",
    "revision": "c3b7966e7f4327113e73c53019d8f97f"
  },
  {
    "url": "assets/js/85.51f557da.js",
    "revision": "a88efaf71368b6f2f460e4c62d3f9ea3"
  },
  {
    "url": "assets/js/86.faa1a615.js",
    "revision": "5506d4e93bc71f24ac6e1e7859dceb29"
  },
  {
    "url": "assets/js/87.a7229aee.js",
    "revision": "b1006f5d3e429b5de1bdb597bbc950b1"
  },
  {
    "url": "assets/js/9.0989ef4e.js",
    "revision": "5a1acec84b02736f15718e042201ccda"
  },
  {
    "url": "assets/js/app.5e9535b0.js",
    "revision": "e7d9d119a462e0a92cce3623a5b16a18"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "1fac0fa5ce2f12474f0d26b6e60afc8d"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "efef889a7dbee2456b582464c49a723e"
  },
  {
    "url": "community-made/index.html",
    "revision": "a2a483215d490262537ccdd74a8feda3"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "db08404ec1e7f46ba53a94963c300f1b"
  },
  {
    "url": "contribute/index.html",
    "revision": "23d44f9c573ca2a53232f156fc7a70d9"
  },
  {
    "url": "core-development/index.html",
    "revision": "ed78acf86e636043c92ebac3e833d999"
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
    "revision": "379043e50cee12ee0a7bc7e3ad58f925"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "5541e3b4a0aa7ded45d63ba0b37149ec"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "05a0a7097960cbfb1c162e14c8096d17"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "60f5f3934de13c1e61dfc593e2468768"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "2decd6f409f1272f897c2570b1589dfd"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "ab8a75a2eb2e15c1064a2fdd4de2460b"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "0bbaf374f09b8152d6f2b3381780d2c1"
  },
  {
    "url": "de/index.html",
    "revision": "7d4224496dc37fd0ff44ed61114d258f"
  },
  {
    "url": "de/links/index.html",
    "revision": "5bb3afb39a6203450c248860399fe462"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "85555645a2d9e672e7a4eb04e03beaa0"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "8906eb4be89c5515d05439122c973174"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "25f9bfa74202a0c7344241cac23d16ad"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "a0699692f97a41ceab606b61478090b5"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "5de6f160f6d3c8800785130f2a559476"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "53a0072fb6d88c517ab09ed08cb84867"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "450ea41dd3f304ab2edc0771ec2d2454"
  },
  {
    "url": "de/setup/index.html",
    "revision": "9db54eee72a1a11170b1a980acf23675"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "1feba1251dc0646285ee26d7f5acc06c"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "c59072448cab6b74598b489a956beea7"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "226b16225938424eed90d39804f495d5"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "aad88195a09e5937707daf887f4c8e6f"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "bdb7a42f1b9a09cc4a3d00d56cad6714"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "b6aa71905ad6d68d1120fbd617234544"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "b00c966e8986e3028b59635fee08347a"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "e976f2c19692522f8422f6d4bdaebe25"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "1c9c9a0bcdfa08d695360a80b050d893"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "fd74e94d45db389631c99ea95790ec1b"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "2b5d9bac1346558ac1505299968045ad"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "45af6cea173a0b97813a48a09617c452"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "75b515b2a92e36b2a27aa9493a2bf533"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "cfde3a2b4377cf2382833571c28f4cb3"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "d3ecb597036432e5b3325670fe9183a3"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "a0e9517f9f11de892a971021aa4b0677"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "c0d664cacbc2542a026fc4a064533159"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "9008e58c6a92022d721e3e84cd48b380"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "ccc8586e69032a156fc17af2c7f4a7ff"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "2c8b7e35d35022d6a40ecc0b022a7f62"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "b979241ba072d75f6c218d4c1fa86b04"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "bf6e3171f1dd21975f907b8997a6da86"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "5b16128f9c28c4d5cedff6825346cb07"
  },
  {
    "url": "de/usage/index.html",
    "revision": "fc31c5cd8eaac6bca151ef7559826905"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "ed513391dae631eed19b9a8f422f960e"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "a78b10ce50b80d27a651dd4adb5cef3b"
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
    "revision": "dc7db0efe05a5ee2302567e2bd2fe871"
  },
  {
    "url": "links/index.html",
    "revision": "5f69eb2415464cdd26279f63b8f710b5"
  },
  {
    "url": "satsetup/index.html",
    "revision": "a17b5a6e44ce7cd0ce13ffaac704288e"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "e0fc3634e84b2f966037d3a1bf6194fd"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "4429c8214adf0a20e01896865ea27f22"
  },
  {
    "url": "setup/docker.html",
    "revision": "9cb8534452b3cd960a937fc22aae7ee5"
  },
  {
    "url": "setup/image-install.html",
    "revision": "f55e250d8df4b35341dbbc6f04fe57d7"
  },
  {
    "url": "setup/index.html",
    "revision": "257af435813ca9230a85272fcf84eb1f"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "db10facce066cc290d4510e6bb1c227e"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "95d04a4afc2dd9f373063075be608a5c"
  },
  {
    "url": "setup/requirements.html",
    "revision": "075e6823437310f1b965f5b27a658150"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "da9b4a47f1bb1450ed3c6a4b839d97c0"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "bb2ef1ca93987552b9af3744d2196e13"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "983fb4c784109a6ad2037e157f10b4b4"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "cfd449fbe45fea4e6ae3d82c58487e39"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "793fcbc26bb618920554c4bfca8e225b"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "2f39ea3a974c8f5177d984b0789bc194"
  },
  {
    "url": "skill-development/index.html",
    "revision": "041da087aee2daa6825b6e44751209da"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "f743d052e822a66ed0a57f948f0a5112"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "692e402e2a248fca36688a58bb5f569f"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "1f9e48d5d0bc9ef74f08c4bb423b61e3"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "2aebda4f2900ab077e4125c529e78b16"
  },
  {
    "url": "sponsors/index.html",
    "revision": "1ec2ccdcdea03b88b84e3989f38de5e1"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "9ae4e53085248fd53223e135d3cbd5cd"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "c88e39389a11480201d8655e9715598e"
  },
  {
    "url": "troubleshooting/satellite.html",
    "revision": "390f1fce46f4f9aa93d2a500e70bebc2"
  },
  {
    "url": "usage/index.html",
    "revision": "c5a36b9a7d5f130ff8c1ad9bcf55e3e0"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "19a2aff0c7e8865293c3259c9d000101"
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

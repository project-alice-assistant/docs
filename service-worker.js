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
    "revision": "0c49653013337b1e209b3e2b8d6ab8b5"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "ff968ebef2841ca40e070a7e98c49213"
  },
  {
    "url": "about-alice/index.html",
    "revision": "d3112c4de1eaca52e65802b026e280a3"
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
    "url": "assets/js/15.f349ae96.js",
    "revision": "cc535bd0ec24aeeb10b16f110371f939"
  },
  {
    "url": "assets/js/16.8ea210c5.js",
    "revision": "d193c42f2358fc71af1e5be4e3238d3e"
  },
  {
    "url": "assets/js/17.327857da.js",
    "revision": "86361993349b9468344833f4c58013c5"
  },
  {
    "url": "assets/js/18.70964998.js",
    "revision": "89437ce3d4561c18147c3443a51f6fe6"
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
    "url": "assets/js/23.b3b187a7.js",
    "revision": "800e44d8a1cf39647390433d49d3b230"
  },
  {
    "url": "assets/js/24.6e742946.js",
    "revision": "bb6c865b001766412b2a0a358134cd8e"
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
    "url": "assets/js/32.35bf30de.js",
    "revision": "2316356ac03a4569e55cf1175f15465d"
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
    "url": "assets/js/35.7cb8af2f.js",
    "revision": "2125c05971b81918b68456807bd06890"
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
    "url": "assets/js/40.5463a69f.js",
    "revision": "a6a3fdbe917bc46fb8bd683fd24495d5"
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
    "url": "assets/js/5.f0f5001d.js",
    "revision": "bb94a916ca74999ed7070370290c4866"
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
    "url": "assets/js/60.741b0ffd.js",
    "revision": "831128a85cb33fe1c924ed830f9fe150"
  },
  {
    "url": "assets/js/61.ff7ad7d5.js",
    "revision": "e9a6f28cbfc8b2881ec0e90789cfd762"
  },
  {
    "url": "assets/js/62.6b3873c9.js",
    "revision": "8421478325eef13b8c9e5eb19fc27ee9"
  },
  {
    "url": "assets/js/63.5024bfd3.js",
    "revision": "5077c5260066dfcc88256d97113bb429"
  },
  {
    "url": "assets/js/64.407ad0da.js",
    "revision": "ed84dd667b1dcb0ef99ca6d8b4d4baba"
  },
  {
    "url": "assets/js/65.8d0c693a.js",
    "revision": "a8ac3573cfe6cd21f3d3583f798e2b71"
  },
  {
    "url": "assets/js/66.7e8d396a.js",
    "revision": "3fe4b773deff9ff8a62825919be4da62"
  },
  {
    "url": "assets/js/67.34985fef.js",
    "revision": "baafe246ac573389c3d812d7e97b2f3f"
  },
  {
    "url": "assets/js/68.35927fe1.js",
    "revision": "5b74352820c5133fb16c81568f9b6ee8"
  },
  {
    "url": "assets/js/69.96555766.js",
    "revision": "b7364476e67c59beae62e515f6fe615b"
  },
  {
    "url": "assets/js/7.c80fb0f3.js",
    "revision": "b75b1732051ba9ba05f89a62cb801da9"
  },
  {
    "url": "assets/js/70.1adb344d.js",
    "revision": "9418b8002815ce951a8be90c883dd008"
  },
  {
    "url": "assets/js/71.6bdde835.js",
    "revision": "db7dc2844a5cf6266e66b1dd46bf902f"
  },
  {
    "url": "assets/js/72.b8f83750.js",
    "revision": "5b71bc4b6c88ed0031ddbb43ef9cdfa9"
  },
  {
    "url": "assets/js/73.bbd679d5.js",
    "revision": "dd6a5820239a8bdeb560b4959770e35a"
  },
  {
    "url": "assets/js/74.2bb8cfad.js",
    "revision": "ae6c834fff51215ce8de99eaa385a311"
  },
  {
    "url": "assets/js/75.d040a45c.js",
    "revision": "09a13387f06e9c4103a23d6b55d82d2f"
  },
  {
    "url": "assets/js/76.c2ceac95.js",
    "revision": "8e4bb5939b2df7ed6cd381914f991c94"
  },
  {
    "url": "assets/js/77.416517b2.js",
    "revision": "b72a099d89a8e52e526f609d1ce9f6bd"
  },
  {
    "url": "assets/js/78.3c7cd876.js",
    "revision": "a3b45c5ef9ff3b3a35383611c581daac"
  },
  {
    "url": "assets/js/79.4d5cffb4.js",
    "revision": "aa5c77807526f9aea1ae267dc9de3bf5"
  },
  {
    "url": "assets/js/8.8f8690ae.js",
    "revision": "a6a3a440251728722d4da1f38dc0c943"
  },
  {
    "url": "assets/js/80.21446293.js",
    "revision": "55a3a5d51202f450c62d5631da569c3b"
  },
  {
    "url": "assets/js/81.0cb2005e.js",
    "revision": "ebabd29dc5be62f3b06ddaa8848a1a9e"
  },
  {
    "url": "assets/js/82.f4313ec2.js",
    "revision": "4ddf8571d54d3371d37a4f6d248e2e46"
  },
  {
    "url": "assets/js/83.0dedd77d.js",
    "revision": "a731b312ecf8cb40778f26548559a521"
  },
  {
    "url": "assets/js/84.44e5ddf1.js",
    "revision": "4826abe9b2078d5e3baded97b31a3a9b"
  },
  {
    "url": "assets/js/85.800fc0e3.js",
    "revision": "557e634780089d121f0b35bff36925fb"
  },
  {
    "url": "assets/js/86.c46b3bc8.js",
    "revision": "ae8204ed1b281e9e1762e6cad6b0867c"
  },
  {
    "url": "assets/js/87.ac267888.js",
    "revision": "bf2e817fea414e4cd0c950403ac58721"
  },
  {
    "url": "assets/js/88.f530b26e.js",
    "revision": "565ae32ccab759c49436deaccd3f45bd"
  },
  {
    "url": "assets/js/89.d3be8f57.js",
    "revision": "a1493d9f3af815514855ed327e7838b5"
  },
  {
    "url": "assets/js/9.31a4a25f.js",
    "revision": "5a1acec84b02736f15718e042201ccda"
  },
  {
    "url": "assets/js/90.8971dbbc.js",
    "revision": "1e4f51ba84ccc6143ffb08e31af50fdb"
  },
  {
    "url": "assets/js/app.ab63f75b.js",
    "revision": "19d35eca6afa2df875bdbf8c3bcd116e"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "29bf316aa9b8e8b231a0673fab02f0cc"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "faa09875494e7eaa0b16e4b9025a381a"
  },
  {
    "url": "community-made/index.html",
    "revision": "a22d6f391fbb764842369dc339a5e56e"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "e3a3a1a090a80c5ebbbf65edb7866873"
  },
  {
    "url": "contribute/index.html",
    "revision": "ea43e760421534a2672d477cc9cbf977"
  },
  {
    "url": "core-development/index.html",
    "revision": "cfaf2e1a26dc5076dbe14f168a8163b1"
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
    "revision": "05e52807531c115dec34b107627a72f9"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "426c98915cb00f2429c9a9101137ec6d"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "1c0f0f5ed29e55e30af1b8b525d210d4"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "b7336def04836c847a11fd72f4ff4416"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "a4d152e2615a3ac1d5083fc269362bc4"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "8c4781ee72b7c231112254a86ab078fb"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "8f399a22634e119cda9b38a6771c171b"
  },
  {
    "url": "de/index.html",
    "revision": "f076ae6ee39e309e08082499a105dc35"
  },
  {
    "url": "de/links/index.html",
    "revision": "bb856979ac1b36dec60896a103df09ce"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "6e40ec416bb188cc59baa1f6cc4f196a"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "0d19fac06473386d6cc8da7987074828"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "56733fa3d81fa898ef9713dd6506f539"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "7b5729efa7a203a7c33520b935d930d3"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "d906e07d220f0cbe025f04509a483cf3"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "2c43ee5bd5b4b2db6305977e032d0dbe"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "2d472a2766880386ed1697e3f90bac20"
  },
  {
    "url": "de/setup/index.html",
    "revision": "ecee582f84a5ad82c97b655f9753dbd6"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "83c458b5a26de637fb117a0dcb417dcb"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "63959cb78d01ee1523b4345c752bcd3e"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "36f68b03f6f40102a784bc7bf9e237a0"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "291ff069192d0ee4d0e6422d6ab296a8"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "5145c84f77d313664ab32eced4f18e4e"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "700fbe510db7b1c605143a93701cee78"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "f7acddbfc622356224a4cba338c2e34f"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "c4bffc196ed6c4be67ad8e04a8ed17fa"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "4856e07b77644fbdb8d8789f82f1c75f"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "8f7df4e586ebed7b44f20222ca16056b"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "8a33e58b4a0d3eee00e605992f22c6cf"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "ff4c78ec68479dc3c6ace97a7f4762e3"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "7c4b54ec8914f3840a1218572be68429"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "c3c65c46d13ecb102ded51d9c6ae8d50"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "b442ba740d37bbf94b0c333dd2eb61ed"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "a946df42c1a6a16bfc9b5a628f38b4c6"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "241c7a9b47eaa38708322ba9b28bb3b3"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "a89ddee5c1f474c52508dc1fe9a24bf6"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "3954fe0e5f10c3c59243fa977965f1d4"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "ad5b0faa0a8cb8fb116f7064ecd39cac"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "6c6c8214beaf0a3b77aa822ff2999dfa"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "620f528f00ebe06273060f63c5374fba"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "cf458f120823b6a10add0322cb925cae"
  },
  {
    "url": "de/usage/index.html",
    "revision": "daf4810e8ee4968f0417e6168476fa2b"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "9d9f6ed6d6417747dff81c1ec099caa3"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "294362cf5c90ee9b3fadcb955aff583d"
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
    "revision": "34c6d917127592acd21f7b6282e150d6"
  },
  {
    "url": "links/index.html",
    "revision": "545622cd1b6a78a50d61dbdecb70bc3f"
  },
  {
    "url": "satsetup/index.html",
    "revision": "476559d3ac8e40887632e057ea4af5dd"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "df9becddc998e160d3ce32ff8f10a5f9"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "6b291e0b93504999dc74f4a2c3310dac"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "8582032422b7a464693922fe129fca7b"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "e62eb004d1b88c4a2a9629858df89ae7"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "edbbbeab3a9e3ed010370d839529af6f"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "28c65685c1b89d86426bd47e28c3fe21"
  },
  {
    "url": "setup/docker.html",
    "revision": "b68ad560ed8ac2b6f8ae99a5e98e4c76"
  },
  {
    "url": "setup/image-install.html",
    "revision": "f4172f4a25d9193a8f75b5d471157ccb"
  },
  {
    "url": "setup/index.html",
    "revision": "a604b8c88349bfaefdde31162d42dc87"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "7c769514fe04666489374c3024ba91b8"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "04ca3c343412be29d90b19b802a81f30"
  },
  {
    "url": "setup/requirements.html",
    "revision": "ad4235771fe9402acdb58137aba49b9c"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "568f5d1fdfe7dc80b8f08223ec437e81"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "f9c6b9e3250af33d1513286d02fc4389"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "04ef0ef91b12f6f7a4a63c21db85baa6"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "7d88cbc25ff766e017a45f2cdbb4a2b0"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "5b92f465045c883767059da257f77f52"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "1bd22c073d359b167ff2206edae2ff26"
  },
  {
    "url": "skill-development/index.html",
    "revision": "f45d1ada6db4c462cea07acfe64ddcf4"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "3dc601912aa3cf501e0c17c8fbaffb11"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "8c18db85001b3ad2f114afce9144d606"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "1fdf4beb909d2a132543aba9790b5762"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "e34c3103a432e0ff856403aba535fd4c"
  },
  {
    "url": "sponsors/index.html",
    "revision": "dd60bafbec8c5d163891cc9125b7147d"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "b1c07accc86f91f34c6fd7e68bbb1252"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "bdbccf81a2458e5edfc59e8b5159d13b"
  },
  {
    "url": "usage/index.html",
    "revision": "b474a3ca5e96a7a7c1b3582571dad845"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "c8110856ee598d11309a79882ccd97cf"
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

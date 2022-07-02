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
    "revision": "21da992d2a1ccf331d5d65bd64f1d797"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "2b5f13a9bcb40b4047d7afdeb9643155"
  },
  {
    "url": "about-alice/index.html",
    "revision": "2d6ce06c20513100329f7c7125677059"
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
    "url": "assets/js/68.a2576c10.js",
    "revision": "24021b4519de30b996a2a8c1b07c43db"
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
    "url": "assets/js/app.d14b8616.js",
    "revision": "314ee40b2427aa9b56f0f7bdc87fc2e4"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "9c4f6c03bdf37b226741df701c4b20b4"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "ec2fa3f9d012eae0e595ee72a690cb63"
  },
  {
    "url": "community-made/index.html",
    "revision": "80e965c364f75ae430f8407a6f9e9b7c"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "513bf914924629e2218dd59c000701b0"
  },
  {
    "url": "contribute/index.html",
    "revision": "c521ec7c199f24a396a9b95a1812a126"
  },
  {
    "url": "core-development/index.html",
    "revision": "a4f0659087c7a0307cb39887a813452d"
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
    "revision": "214f03cf23aa0531dbf4fd86e3eac1f4"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "5e13a4c58abb44b68396dc99b94df8f3"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "bcb7c2cc78356e303700131161b6d284"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "8f7ea014983d7d377438d73f9e0393a9"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "b5e6388a725141c2b132eb2b2a84b050"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "428bcd0a16f6ef911a10d57ee5bca486"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "fdb7cf365265b008d722abfd8a254adb"
  },
  {
    "url": "de/index.html",
    "revision": "0fc77b33d84052dcfec9946865982eb8"
  },
  {
    "url": "de/links/index.html",
    "revision": "1fab47884af8e796343f13666fc61c28"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "e53bc6b545e77c83d6d3f5cab4de3c35"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "0ff8982edd94c87f114bce65fcb6442a"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "d198a1672ba2da120e0e4f26a84d4b08"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "216f9eb65e1513b876afbbfd51691683"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "5672170523c1b45c9d606dc9aee3f8fe"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "21cea0038100a85f0a98a96a4b2becf0"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "c971591dfb00bf99383234a18a2f4ea2"
  },
  {
    "url": "de/setup/index.html",
    "revision": "096759ab926c7077455231f7d7d1667a"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "443d9a032694d67613d72aa13f251101"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "78b74985da5a4f9dd3508e4af9edaced"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "a2ce69333ff6c7bae3aab15767224d0b"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "325e0a41ecb466b79b042c3d06175dc8"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "9428f197b8fabc03fbd8496ba37d7715"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "0927d900605f69047440f0a1dfbf86fe"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "a78ba5a975e1020e0d2456f1e0a13f21"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "cf3117c98ae2b1af72198cbffff464ea"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "42f85aae978cd7b21132dfe6624f5c06"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "ffc4d983688b84f1af3b466d0b2b41fe"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "0ca806fcd9f9a05834c9a3b1dd0c7937"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "9b92c141ecd918f21db58bb3be4a318b"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "548ae35e949dbd6cfd312a27f89eb958"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "85fcb88a972adf8956cc46f2952c7397"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "8513e63d8c4bee39187a67e706f050d4"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "d2a0e676b3e3c8177d1df7f90410b743"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "3ba94629bb400e48cef6bc560181e454"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "bd122f69514c06795fccfda585c10ca6"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "3fa5f24e033433ded9536ba0895598d5"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "9eec9e12f436f16ae4ec408ef711d325"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "e46d611844521cddbd54108dd2fd2214"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "1aca76f6d01dcf38d362e98aee7e02f6"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "de8868f592aaa13a2cb0b87cd73a9658"
  },
  {
    "url": "de/usage/index.html",
    "revision": "b2de94bc21e841d9dfb777de9e8db552"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "a75a465d2445a75d1a06f8fe0013dcd3"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "f77500cefad587b47870dd317295c83b"
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
    "revision": "f9efe1236a2f94790f87145867b8d7c5"
  },
  {
    "url": "links/index.html",
    "revision": "b6bf3f15d4e57415688bd9f5f834f472"
  },
  {
    "url": "satsetup/index.html",
    "revision": "5132f3dc952827286590880526cc4af7"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "28a0e031358ab61f47551bcdfd0871ba"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "8e6a079caa5c1d38b1b06f49d769c0af"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "19a47b9f7b18db785635d74172833fa5"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "4cb6fd6df0e79b06d2ae077e65f36f45"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "b349164ac6f491a8d988da4e71ef69e1"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "3c350ff03f9c1ea814149f5e6602f029"
  },
  {
    "url": "setup/docker.html",
    "revision": "32242b6a034e7b6e9d3692851238a40d"
  },
  {
    "url": "setup/image-install.html",
    "revision": "9e919dc4dad5d2e11e132bb8448460d5"
  },
  {
    "url": "setup/index.html",
    "revision": "6f74f3578e8a0047abde6320155cf66a"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "4c68465d5dfb50a5b651226252b35a41"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "002aac46a0c1540dbc1a2e37c20d7af5"
  },
  {
    "url": "setup/requirements.html",
    "revision": "1db9d18963fbabea50e9c60b63032aa6"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "bccbc896e38ef70dbedd07991fa8d32e"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "8fa8d9458614ec4d9d50c67f1419aae3"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "9dd43d9c5935fcddd1284ec68ef4dbac"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "b6eb79052fb7e4ecaab2f8f9f812dc45"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "8f2346ee63a5bd68d73356ecc53c5e6d"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "4045da2551f3fb358fbb58caf2e25e8e"
  },
  {
    "url": "skill-development/index.html",
    "revision": "a8eabfeac26d11853c2d7cdf0c3c6b0e"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "2957d47f40f164f0f7c5db137c044bb6"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "544dc20d2c5eb106580eff2932e72739"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "d42b5457ab003d29196b77f4a5be12d7"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "5dbd27eac23bd9e72776628cb4c16346"
  },
  {
    "url": "sponsors/index.html",
    "revision": "01c378412cbf477025812569bdf99bdc"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "3150af0ac5dbefc70e8081f976023702"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "8152271a415a8d2a80bdd1d58910313c"
  },
  {
    "url": "usage/index.html",
    "revision": "dfd0f1e039725ed048399f1c82c05185"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "c7cd52ca56686d8e0485712dafbac1ed"
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

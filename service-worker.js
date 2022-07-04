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
    "revision": "6003322f019476ab29e30694f620e2ba"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "4c5bc9e91d9325eee0c0a18ffca1f04d"
  },
  {
    "url": "about-alice/index.html",
    "revision": "71c0550b3579a808efe90f2fb411cbcb"
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
    "url": "assets/js/38.b938aa1a.js",
    "revision": "33b916a08882277ea02335245d30db41"
  },
  {
    "url": "assets/js/39.1639c1e0.js",
    "revision": "d1b8a906de191aef93c7dbaf6cd726e6"
  },
  {
    "url": "assets/js/4.b542adea.js",
    "revision": "64affd0b6455c58884915a2decb1a97e"
  },
  {
    "url": "assets/js/40.f9a13893.js",
    "revision": "342917ce3bb1c3e2bc124dc0c4587015"
  },
  {
    "url": "assets/js/41.126f72ab.js",
    "revision": "16146c54e81e40c5c592a105e4849fab"
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
    "url": "assets/js/60.741b0ffd.js",
    "revision": "831128a85cb33fe1c924ed830f9fe150"
  },
  {
    "url": "assets/js/61.ff7ad7d5.js",
    "revision": "e9a6f28cbfc8b2881ec0e90789cfd762"
  },
  {
    "url": "assets/js/62.2ef4d444.js",
    "revision": "08d6cced9e970904e0aa23e2b010b4e5"
  },
  {
    "url": "assets/js/63.dba014ba.js",
    "revision": "8a01b3ab9e8a840b046188d05db8ea74"
  },
  {
    "url": "assets/js/64.ba2b16dd.js",
    "revision": "23d556faca042042008dfa86fc1176cf"
  },
  {
    "url": "assets/js/65.10765a33.js",
    "revision": "8967d5220336178e5a828006a68900d7"
  },
  {
    "url": "assets/js/66.b0cfc538.js",
    "revision": "2d6ed24d4efa8c7425ff29bf425c6d0e"
  },
  {
    "url": "assets/js/67.2cefe9d5.js",
    "revision": "bdddef47e0db48d0dc90f535496efcc0"
  },
  {
    "url": "assets/js/68.ed32561e.js",
    "revision": "fe9bf66e203b27a1ed7fc399e6a838d8"
  },
  {
    "url": "assets/js/69.eb8e6c7c.js",
    "revision": "56640fd3f1d62de9de07841adf4e80b4"
  },
  {
    "url": "assets/js/7.c80fb0f3.js",
    "revision": "b75b1732051ba9ba05f89a62cb801da9"
  },
  {
    "url": "assets/js/70.8601936a.js",
    "revision": "3d847149360bd65ef033f65328c4828b"
  },
  {
    "url": "assets/js/71.5574e47f.js",
    "revision": "ffc987109aef4aa111475a2dc83b2c84"
  },
  {
    "url": "assets/js/72.5763a086.js",
    "revision": "54604d0a5c49f0c7e6986ecb72d9cf6e"
  },
  {
    "url": "assets/js/73.26f296e7.js",
    "revision": "285f40da771a05afb0f62e3424a67eb1"
  },
  {
    "url": "assets/js/74.bef95d81.js",
    "revision": "1f65cb91e9040280729fd38acf5d8496"
  },
  {
    "url": "assets/js/75.44330d6a.js",
    "revision": "7a9da814f62d591abf0c1c58fc789ec8"
  },
  {
    "url": "assets/js/76.842be333.js",
    "revision": "e3cca329c0d8f69cde1256a8b9cf675c"
  },
  {
    "url": "assets/js/77.f96271f1.js",
    "revision": "cb60e261c67bcb38dcdd01e38b3d7193"
  },
  {
    "url": "assets/js/78.31f7ba74.js",
    "revision": "83f873b28181ec265fd127df60e3660c"
  },
  {
    "url": "assets/js/79.8d2f8d36.js",
    "revision": "bc1cca8984ecdac015dbade98d96af35"
  },
  {
    "url": "assets/js/8.8f8690ae.js",
    "revision": "a6a3a440251728722d4da1f38dc0c943"
  },
  {
    "url": "assets/js/80.2a385332.js",
    "revision": "d1ffc55fd640f420e424281bd2158f43"
  },
  {
    "url": "assets/js/81.04585ce7.js",
    "revision": "e71d13233d991a7d2a6828abe1aab3be"
  },
  {
    "url": "assets/js/82.3a40144b.js",
    "revision": "634de32b5f90efa38024437e50912f84"
  },
  {
    "url": "assets/js/83.4118816e.js",
    "revision": "ab21d4058e601aadec4563b74f90b10d"
  },
  {
    "url": "assets/js/84.b7304ee8.js",
    "revision": "346ca08636ea2d87034664c5af6d5f38"
  },
  {
    "url": "assets/js/85.365eceb0.js",
    "revision": "62f0ef99b29b265f0aee96becf77f0b4"
  },
  {
    "url": "assets/js/86.977febe1.js",
    "revision": "9ba4826cf1fc20910ec930bd20b62358"
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
    "url": "assets/js/app.3cfc6b65.js",
    "revision": "5279f17179d4d22df609fc122df18cc5"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "b58b49f10e7ce0ce587f8c9f9bcf7c43"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "effdf8b8d8ff4ce5e378b49099895e95"
  },
  {
    "url": "community-made/index.html",
    "revision": "adc011f18b0a6f1e0069ba179f2ccee2"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "1702b36caefe1ca8b833074b20140c03"
  },
  {
    "url": "contribute/index.html",
    "revision": "f362e79119864f11f333a16bee82389a"
  },
  {
    "url": "core-development/index.html",
    "revision": "88d704ab1efb5de80a3c9d040cf22a0f"
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
    "revision": "165a94c0cdfe7c730d59d20bdea1fadd"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "39e9ec3861f1e43a3ed21a13bc68b1fa"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "c5bc35357c855ccd4db7e476035341a1"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "31b9c9f2a44702991d0f73cabc95bb55"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "00dd54fe98d26085faaa5bc8fe5969a3"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "09ab2e04a24ccb040200c8b0fd89a46d"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "d9fcea12382162ecc9b6f1ecabd56c7e"
  },
  {
    "url": "de/index.html",
    "revision": "1a9a3c10f0e7207c27d2a5f1ec6a6a86"
  },
  {
    "url": "de/links/index.html",
    "revision": "385db9ca4609cd39dbb3a03d2c2f521f"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "0fe0b55629d14db4d048a8accba0c1f1"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "60063a485bc8baeb82819b13762a06b8"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "f7a6b594fabb6c814ed160c462c2ec20"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "1aeaad20310b192c3508d14ee0298c0f"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "26b32a5bb510e3e926cdbeab9ef98c1a"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "04b00a499774a2b0f9a864fdfc23c5e9"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "08e327f5cd7890d86e825c7e58281259"
  },
  {
    "url": "de/setup/index.html",
    "revision": "6780002206656cdf4b5935950be8b393"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "eddc6fbc4a610fe7afdc49b056429352"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "efffeff44157fba7ebf9c1b0bc9821c3"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "89bce45e19a0e331227e880b6b42aebc"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "87fd72c59f157c129bbbd6eaba12bfe5"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "a5b48eba2ae566fae5fe5f4fd4ef9763"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "38252c50f1a51b45950bfedbd9c1f51a"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "1733ec4ed93cb1ffd2be0db6ef129981"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "542ec33e46335750f6711177ed087aae"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "4b7506596ef34aa022b284d3d26c7a06"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "2a3b6df3522b3453f04321b3a333fdd5"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "84cb8fd8060194f2e990550a93330857"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "ed08845c944c24c9e4192805cbfbeedc"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "7bacc7fe041f7e65213ab5a4e216f1fd"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "c496398ebcf935ac26ccd07785f9ce93"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "f6809559b44290f987f7a20c1823f0f1"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "fe315d6139c211fa3c471e5a19cd35c4"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "2f193fe7852e8a97ec1117441743d1e2"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "2d80bb10274bb64012c2f5f8a086b7bf"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "357d9ab46368615bfbf2ff1643832201"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "6580c453c07f3b0d07b76b179a188943"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "c2ab6bd300d514320073f1b72bb2a5cd"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "37ba8a27c6e0e3cf2bcdf080b78531d3"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "4290aaf985fad03eda8f9639700b20ea"
  },
  {
    "url": "de/usage/index.html",
    "revision": "ac1400353238e8896874eb11e7f469bd"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "ca6042be240d66afb840e3977eb8822a"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "e72635937580dc094c11662573258dcf"
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
    "revision": "f4e482b502483629e8421af29abe5cd7"
  },
  {
    "url": "links/index.html",
    "revision": "cbe920b6cdf1a29b915c66ef0d64e472"
  },
  {
    "url": "satsetup/index.html",
    "revision": "6cef792fef0ca71e6ed157af97ec5ff6"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "2dd7dbedcfd3a722b84c9a6307e56ef2"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "04ff9d239b4c6177f140ca7d430a68fe"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "4c475d4bad5d5551dbf15eb1b182bfd5"
  },
  {
    "url": "setup/docker.html",
    "revision": "833e09b741843ed107bc1edb30ee4242"
  },
  {
    "url": "setup/image-install.html",
    "revision": "804e5e64edeac8ef4f19551c7a8ddb2f"
  },
  {
    "url": "setup/index.html",
    "revision": "58a404cc780fb312806b87009d6b8b6e"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "d28e64f00ee3c79733781080798f10ce"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "472a32e9d93b028336c306b6aecb2994"
  },
  {
    "url": "setup/requirements.html",
    "revision": "c63d021980e36007180d4e8f1c368d02"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "c4210ef52927755ef9f57e70c8c98b51"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "dca89e2a00d04797b8487802be61df98"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "7d506fd9e74d4d1d85ac40237375b456"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "e732542621ca4ccf336c3772550efeeb"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "917e8738a2fbc894cf138fc95fdc1054"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "28d837cf0e986a684e691641a6392b38"
  },
  {
    "url": "skill-development/index.html",
    "revision": "655bf05bae82035d7d6c6df8c4aa7979"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "934dd3398106fb01461d562fa1813a74"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "137626d5136ee6ed93165d5303df45c5"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "8d89e83709e6c1479f41b1f1602787da"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "34104512e162de6ca3f5f72b82f12471"
  },
  {
    "url": "sponsors/index.html",
    "revision": "7680ed5f1d44e3f79c9f0928bb31ee10"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "9199be5204838c53ad0c6e678d08c1b1"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "d82bb2e1882f935d2fbcc449cd0f8220"
  },
  {
    "url": "usage/index.html",
    "revision": "3f48fa6eee629f886a130e187ea58a5b"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "b150f33b2e504cc41c1f625ff906cc0f"
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

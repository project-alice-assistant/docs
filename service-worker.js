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
    "revision": "27f23c0fcca460948ba3b7515148572a"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "f512b5cd8a43cb9e26b5fe5c4d8327b2"
  },
  {
    "url": "about-alice/index.html",
    "revision": "db7f85ed04f9ffe1a7ec4dd3bbee0f40"
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
    "url": "assets/js/10.6b906bb8.js",
    "revision": "6839c05692460f4c8c6f56ba7d049987"
  },
  {
    "url": "assets/js/11.e9f87453.js",
    "revision": "98433b8948eb4a5fc0995cdecee94a07"
  },
  {
    "url": "assets/js/12.c3a6f81d.js",
    "revision": "ebb956d1f7b2ddede84b4e27618956fe"
  },
  {
    "url": "assets/js/13.aadce52f.js",
    "revision": "c9b32f57762cdd083918dabbf6b76642"
  },
  {
    "url": "assets/js/14.6e5fdcb2.js",
    "revision": "e104319bc7fc1dfb8a427832268f5d2b"
  },
  {
    "url": "assets/js/15.0a408238.js",
    "revision": "1c0b4bb62290b5a424ad14cc03fd4713"
  },
  {
    "url": "assets/js/16.fde6b6f6.js",
    "revision": "91a945dfeeafb820a899a17a7cb180ea"
  },
  {
    "url": "assets/js/17.12a1e604.js",
    "revision": "dc0087aac6491c83819917521ecfc492"
  },
  {
    "url": "assets/js/18.3eb1872b.js",
    "revision": "3011bf18fe0a3ed850e36ed39630225c"
  },
  {
    "url": "assets/js/19.54f48b91.js",
    "revision": "a017346212a24ddc79dccc17e5eaa3c6"
  },
  {
    "url": "assets/js/2.5875d6b8.js",
    "revision": "5581c96235f4a410a3a55a7d8022d83c"
  },
  {
    "url": "assets/js/20.974e641e.js",
    "revision": "116313e942625e01f89b30751713aee1"
  },
  {
    "url": "assets/js/21.658c35d3.js",
    "revision": "f941c9c0f4be2f7f031a31f5a02528cf"
  },
  {
    "url": "assets/js/22.44f4888c.js",
    "revision": "8493446dcbef3690ed2d38dd965146c0"
  },
  {
    "url": "assets/js/23.a9e71158.js",
    "revision": "0ed3650f4c943702a71126604cad0c1b"
  },
  {
    "url": "assets/js/24.b944749f.js",
    "revision": "42cdc0855fe6f831811e3fdc83dab338"
  },
  {
    "url": "assets/js/25.53f9f61b.js",
    "revision": "0e078a9a8de50f1bf4b1761fb82262c8"
  },
  {
    "url": "assets/js/26.ddd5daa2.js",
    "revision": "651aab4fac0868a820207e57c8d0886a"
  },
  {
    "url": "assets/js/27.1a96701f.js",
    "revision": "98b850901625d5f4c11514207c47041d"
  },
  {
    "url": "assets/js/28.f5cca944.js",
    "revision": "317a0bc509aecf9444100e00dd0269b2"
  },
  {
    "url": "assets/js/29.134637f8.js",
    "revision": "a338e8899ed41c4d39bf4b5602a9f699"
  },
  {
    "url": "assets/js/3.12c0b63d.js",
    "revision": "33a2a80d655a2b2521e3ec8f27949b01"
  },
  {
    "url": "assets/js/30.f4aca51b.js",
    "revision": "cc0a3f275e5ad30dd0b19afbbdb1ce10"
  },
  {
    "url": "assets/js/31.d2d40240.js",
    "revision": "e7cc0dcead82d86c8241134e7299802f"
  },
  {
    "url": "assets/js/32.e15d5f05.js",
    "revision": "ba09dc4d74a996eb62c2358337854798"
  },
  {
    "url": "assets/js/33.4cf65d50.js",
    "revision": "8a6927fcc9cdfaa1dad5245285c48ba6"
  },
  {
    "url": "assets/js/34.6a311e18.js",
    "revision": "80f0d36cc840995c76308f20b63989fe"
  },
  {
    "url": "assets/js/35.dc0a5cd7.js",
    "revision": "0f8c8925c8faa21ad03d475ff3e63bfd"
  },
  {
    "url": "assets/js/36.2e2be37d.js",
    "revision": "04fb2fe8df21a442d922e27bb86ce3e7"
  },
  {
    "url": "assets/js/37.4fbe62b3.js",
    "revision": "57b918bf71909712ba225c1627c8a955"
  },
  {
    "url": "assets/js/38.4ad96a18.js",
    "revision": "e016a503d7e4e59d890ba4ff2173d9ec"
  },
  {
    "url": "assets/js/39.82bacdb9.js",
    "revision": "941528df19ed362e56e07b7d0419498c"
  },
  {
    "url": "assets/js/4.698bc580.js",
    "revision": "10c3e7ddae13fdd267a94c40a21c87dd"
  },
  {
    "url": "assets/js/40.55fa4219.js",
    "revision": "514e2f9dfc815e1653c7c59610683daf"
  },
  {
    "url": "assets/js/41.9ac11bff.js",
    "revision": "b5c378ad358119c3292e7a8fd2ca4e41"
  },
  {
    "url": "assets/js/42.33fa46f7.js",
    "revision": "4937bc935366f7a98dbb68da313dbee2"
  },
  {
    "url": "assets/js/43.9d249534.js",
    "revision": "6ae05e7c25ec026a41de900e3e7750ce"
  },
  {
    "url": "assets/js/44.b87f2d6b.js",
    "revision": "b536b9eefbff58c67e1ef03200a48f6a"
  },
  {
    "url": "assets/js/45.5dcb6e51.js",
    "revision": "1f8ef35567192cc30e03cde503717c7f"
  },
  {
    "url": "assets/js/46.c57b8b64.js",
    "revision": "440a662054550d842f358cb798034ecb"
  },
  {
    "url": "assets/js/47.adb6de34.js",
    "revision": "13dea19f9db502bc105e8ccc4b31bdc1"
  },
  {
    "url": "assets/js/48.3660c5dd.js",
    "revision": "3376ea509c88a1530c2ecdecd8628391"
  },
  {
    "url": "assets/js/49.b202a37c.js",
    "revision": "1e0bfc8346cfb185337f51b7bfb24ac8"
  },
  {
    "url": "assets/js/5.61e28bb8.js",
    "revision": "a092cd6dc3500e5524402633a5bd40a6"
  },
  {
    "url": "assets/js/50.0b19511f.js",
    "revision": "c9092050e5753bfae750f25f87c9c259"
  },
  {
    "url": "assets/js/51.cb571f82.js",
    "revision": "5038c4dae5f3c762b1660481d773662b"
  },
  {
    "url": "assets/js/52.0add033a.js",
    "revision": "8edc0a0e722928d0117c02b3a91c444e"
  },
  {
    "url": "assets/js/53.3720d472.js",
    "revision": "a8f291c4d943857cef2b324b39f000a6"
  },
  {
    "url": "assets/js/54.55a46a58.js",
    "revision": "0882481feb3400b17561539993cd0622"
  },
  {
    "url": "assets/js/55.995b2dcf.js",
    "revision": "52099bb115e6b10273dc91faa1f6301f"
  },
  {
    "url": "assets/js/56.fee44b16.js",
    "revision": "c0eadd42ad116e3879d22176ef6bc33a"
  },
  {
    "url": "assets/js/57.c0d22873.js",
    "revision": "1d53ee927bbebf2985725fb5792c297e"
  },
  {
    "url": "assets/js/58.b2d60291.js",
    "revision": "2db9432fac78546a83a23930e60e321a"
  },
  {
    "url": "assets/js/59.efc21cb4.js",
    "revision": "4439a6022c8877c826f77da58b8c7178"
  },
  {
    "url": "assets/js/6.c3835b2d.js",
    "revision": "1f6672588c4849eb9fb46f50cc29370c"
  },
  {
    "url": "assets/js/60.63bdde6e.js",
    "revision": "06444ca605362ab79aaabcd062240dff"
  },
  {
    "url": "assets/js/61.050f1925.js",
    "revision": "6e370dc867d85c1170141b7693f5d0c2"
  },
  {
    "url": "assets/js/62.e6ca455e.js",
    "revision": "a78c65acf8d6ed54631b7c0abd835848"
  },
  {
    "url": "assets/js/63.bdc28a80.js",
    "revision": "0b8d5063cb5345bc35a9f9a0e2a4aaad"
  },
  {
    "url": "assets/js/64.7cef906e.js",
    "revision": "460842f033889592a288f80d80597bac"
  },
  {
    "url": "assets/js/65.e1b0d81f.js",
    "revision": "a4242c78feed04513213e07aa66e7efa"
  },
  {
    "url": "assets/js/66.55ea8719.js",
    "revision": "e523c2a4ef34c779bcea9d558c655595"
  },
  {
    "url": "assets/js/67.20843837.js",
    "revision": "eaadf1339380b41d3244b94bddfb5610"
  },
  {
    "url": "assets/js/68.6d0c94f9.js",
    "revision": "be7febd1e189c4099948c61e1daab4a3"
  },
  {
    "url": "assets/js/69.b80d74ba.js",
    "revision": "a1e066e05d526ddb44884bb6f817a182"
  },
  {
    "url": "assets/js/7.49804f43.js",
    "revision": "920847c1216dacbde26d82f5dd16e848"
  },
  {
    "url": "assets/js/70.23460252.js",
    "revision": "c4d9609a6117dd0c144a0235294850a7"
  },
  {
    "url": "assets/js/71.1ca466ed.js",
    "revision": "3334edd30d2b6189f63ab612f063a8f2"
  },
  {
    "url": "assets/js/72.9d0808f5.js",
    "revision": "3fff3f95f2280b2f48dfeb7b21cd44db"
  },
  {
    "url": "assets/js/73.77405d05.js",
    "revision": "11c066e3d9bc653bf1f121b88540e35d"
  },
  {
    "url": "assets/js/74.66f79ded.js",
    "revision": "b77c341a514121ce097470c708d02b76"
  },
  {
    "url": "assets/js/75.1ab017ae.js",
    "revision": "0c607047bcb93ca332aa1c318b4b7ebd"
  },
  {
    "url": "assets/js/76.beaf61ad.js",
    "revision": "1fe1d97959537f8d3c11eba5c33efc22"
  },
  {
    "url": "assets/js/77.2d7aab6f.js",
    "revision": "4424c75e01fff2d56be6f566392d0637"
  },
  {
    "url": "assets/js/78.002df823.js",
    "revision": "d44aa0ac7d2fc81cc18b990f04cba25a"
  },
  {
    "url": "assets/js/79.a469ebba.js",
    "revision": "547f0dac39f8db260971de8219dca22b"
  },
  {
    "url": "assets/js/8.17231946.js",
    "revision": "c7919db601b6345cc79d7caab1cc4d23"
  },
  {
    "url": "assets/js/80.362a513c.js",
    "revision": "222b4aa5b74030b3da9a0eac84b89d53"
  },
  {
    "url": "assets/js/81.bf4f0732.js",
    "revision": "c94671667b53687d00e50e813fe48b0c"
  },
  {
    "url": "assets/js/82.a2e9b7f7.js",
    "revision": "02f6f5d7264159ac2bc9dcbe37a48e07"
  },
  {
    "url": "assets/js/83.ea61cabf.js",
    "revision": "3767cbdce2a8d1a5c3b96d27d34fe7de"
  },
  {
    "url": "assets/js/84.d259d8c5.js",
    "revision": "d7d1ac35c2d8a982ef54976a6f40eb5c"
  },
  {
    "url": "assets/js/85.335a5e47.js",
    "revision": "52bede8b31728ef0940a1cb0487fd824"
  },
  {
    "url": "assets/js/86.b339f6c0.js",
    "revision": "2f97695e67324988f1ea676bd5340e12"
  },
  {
    "url": "assets/js/87.b20c6cdd.js",
    "revision": "0c5e579b6cb4c54486b027802617c7cd"
  },
  {
    "url": "assets/js/88.a11bc5f9.js",
    "revision": "406a95e452dbc18a54cd0cbd03668fa6"
  },
  {
    "url": "assets/js/89.36263fae.js",
    "revision": "e1cd7103369ec1a2ffd735687ea42487"
  },
  {
    "url": "assets/js/9.7a0154e3.js",
    "revision": "2d992b08148d51c7cf6ec69f1dac8f15"
  },
  {
    "url": "assets/js/90.610b50a4.js",
    "revision": "0886c9972126d5313c5b9e3871150c4d"
  },
  {
    "url": "assets/js/app.aa50b9cd.js",
    "revision": "73f1b1561bc8d004a95de5b05360852c"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "3a47e74576269877a6a5cef8ac99a5ff"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "318d521f3712907d62e33bdb28ed9740"
  },
  {
    "url": "community-made/index.html",
    "revision": "c9e0a8481a365336befe5444c8291b9c"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "3edde92ac4ded8d7f0dfec0c31a8b832"
  },
  {
    "url": "contribute/index.html",
    "revision": "0a8bec7e7568356cb7458bef464d9204"
  },
  {
    "url": "core-development/index.html",
    "revision": "6828bb48b3ac25ffda57c6244f659eb8"
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
    "revision": "b2510b3fbe421fe2b2f59d6acdbf61f2"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "4289494aa1fef96cab7b018dc6155029"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "80ab5a3627ebb1e29471d0eea1dae22c"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "ab41e56c8498c327319e4b8f0954bc7f"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "79ef2c96d7391641fee616ffff7eb571"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "8c2b96c535012cd6d2eb1805b1501883"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "b5220fa4e6f9643cac3124c451435fe9"
  },
  {
    "url": "de/index.html",
    "revision": "0c3d1691f24537722aeb36311b6b3f6f"
  },
  {
    "url": "de/links/index.html",
    "revision": "408ef5b626c6d55a3837cab1820d1b4a"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "370adeac943bc6afba7899a6c5bbe0d9"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "19e065e1aecc083b215619e7d793e7be"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "761847863937449c906308d78936abde"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "c06be91e036ab75024b75c23cb91be19"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "74a08853fd1a73d01cfeb0371c2633de"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "d00fa6e9a966291c8e96ee0c4fad3c26"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "4cd9ebc7dd0ed647bef491800e75c2f7"
  },
  {
    "url": "de/setup/index.html",
    "revision": "f805b4c774222fe2403c5dcb375e5573"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "635352963a11b5532f571c4c84bab80b"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "28d5dc335038c95fa83f5f42ca1ec3df"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "1f2d0564e37b600ee546f99a79b2d338"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "a9d5fcf0af2115c4299cbeaa16baf0fa"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "4f7ed4ac607a0d778322858f32eb9489"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "c179cc86bd72f1e2ad0e987bafba2564"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "e4ba87d4354c97710983ba3d0fd54f48"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "859362449f40f1e62c0d8c8d7f80547e"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "386fe379df2eb372137249ef0e902f75"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "bea1ed2fcceaf6319d11a97e849d4027"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "26a7143ae1cb043636ccef63dc9b0925"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "65ac713ecdfa0d372e873036d9d20e4e"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "f80e58e0df0a42f2517629c75a125e97"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "fe1e2997150783dd281805f07ddf2017"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "92360017c70598da2c573029137ccc8b"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "9eb8c073d23176568418e9ff67ada74b"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "a844fbbd4753f791f5ff995406e552a0"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "5197b8e46cd9577cde754e2d360e2732"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "dcdda2ce4fedd20887ddf428d74014e7"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "580c1961ddb71118783c19ade2b4ff48"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "162287f39892f757df2f40c864709879"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "aee7578c58dc4224fe657cd9faafcd0a"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "17c84a6aaa08755262911286b13f6319"
  },
  {
    "url": "de/usage/index.html",
    "revision": "8a2a22ebebcc9c559b97e02af4ceaa21"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "f9a8a2834a4ae8dd45b2111eb159e183"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "405917d1c46888e8bee49b129c061bf8"
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
    "revision": "dcae4327e6dd5636fb26be5e2bf5bef2"
  },
  {
    "url": "links/index.html",
    "revision": "6b48f36722d70ef30221fb1bb50568ce"
  },
  {
    "url": "satsetup/index.html",
    "revision": "ff1158393af87c765ae99f077e889582"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "b7ec884fbe535eed344f656cf4a70b1c"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "b6e230d79d6f815ec62a9cab02d7c103"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "21acccafa9555de180e1f9ff9cdd92df"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "15e28afabf0b5293c4684504549c41ab"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "ff2777d6f011967710a6e780d347c70a"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "3c0e898575a9e12521e24e683734b53e"
  },
  {
    "url": "setup/docker.html",
    "revision": "1707d3ba57e23603699747f962421083"
  },
  {
    "url": "setup/image-install.html",
    "revision": "2b392b1fa51f51fa80e641b68a8ca6d5"
  },
  {
    "url": "setup/index.html",
    "revision": "b08acda648a1c6c494bec06fcb9bb2e9"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "e583e7a1ef3865d848536593ff8c491d"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "bf6f5b606f038561c3ab87cee4903538"
  },
  {
    "url": "setup/requirements.html",
    "revision": "1debf07809b2caf1074ad09487e76253"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "50657d019a86d0fd7309e81700eeadc4"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "dc55a3db55a2a1b81b0cd2064fda580e"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "e18146cd81ce579ede4609632d6ff4d6"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "4313291622e1299be2f359043dcfa8b1"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "9ba5b1f6e58946096cb9c98091a2479c"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "9daf3a676266657ce69e2eccd4b13fe2"
  },
  {
    "url": "skill-development/index.html",
    "revision": "243438807d77670087165aaf1228dc0d"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "c1c85f89005ec97e28f21286fc533553"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "bea0575d90fe04a83c3d11eefcd4f644"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "ef50e4be4a50ebfcf57f7e7eeeb5bb22"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "249da9bd9e9f8231cc09fd6e9e21cbe4"
  },
  {
    "url": "sponsors/index.html",
    "revision": "6371d39a3f796840e7de624972955e66"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "e2a933a0d3649d44f14800e1c5a1c2e0"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "4a997e0c4bbca6145271504a0882e407"
  },
  {
    "url": "usage/index.html",
    "revision": "c9b8cab57c7d14cb259ba4efd5a33270"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "458e7a3b7d7026d550f48d5883970173"
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

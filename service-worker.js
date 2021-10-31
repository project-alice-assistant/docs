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
    "revision": "511c45c7b7a743a4b486559557223a17"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "6be04cd4faf5041bf0f6ee8a062ca73a"
  },
  {
    "url": "about-alice/index.html",
    "revision": "c0e2e814416e166582ba644d2e799c7a"
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
    "url": "assets/js/10.8b218d0d.js",
    "revision": "1c13372713bd4e56e97bad554fe4002b"
  },
  {
    "url": "assets/js/11.b50f925d.js",
    "revision": "6c20224ca88988357913178d3fdf1464"
  },
  {
    "url": "assets/js/12.f37231e0.js",
    "revision": "793cb001141f32238e7f2d3072e1d80e"
  },
  {
    "url": "assets/js/13.580d6d39.js",
    "revision": "6b65bb13fefe65bf85caed7cf57cd725"
  },
  {
    "url": "assets/js/14.6d175e13.js",
    "revision": "7b0aff4e51d99567dfe88aefbfb9a011"
  },
  {
    "url": "assets/js/15.e93447e1.js",
    "revision": "a6f72eb9adbf2838b9914e55a963dc5e"
  },
  {
    "url": "assets/js/16.dea1b076.js",
    "revision": "ce830e0802a58f5f4312a8bce965b64f"
  },
  {
    "url": "assets/js/17.e7438dde.js",
    "revision": "37bc5c00ecdfcb200f4f6bca4d93bbe8"
  },
  {
    "url": "assets/js/18.14e658a5.js",
    "revision": "c9e802c8ea17baab635a10c94b94ef24"
  },
  {
    "url": "assets/js/19.c2356d68.js",
    "revision": "44247274f928826dbad343a880b90e8a"
  },
  {
    "url": "assets/js/2.67e5d0fc.js",
    "revision": "4d3d3ef928070e6daf697acb3476370e"
  },
  {
    "url": "assets/js/20.d7dff3d7.js",
    "revision": "957207fe702940c11faa2f8df587a334"
  },
  {
    "url": "assets/js/21.01a6275c.js",
    "revision": "dee2f64b3e55ebc2afdf78cc3e6f8fc3"
  },
  {
    "url": "assets/js/22.b70e8d67.js",
    "revision": "06e809e3c0bea86f7dba1b8127892834"
  },
  {
    "url": "assets/js/23.3e7b106a.js",
    "revision": "61aec694978e0a48ec7bae2d834aa622"
  },
  {
    "url": "assets/js/24.d00e7d56.js",
    "revision": "da5fcf6641d210e7298858f7e7c7e0fb"
  },
  {
    "url": "assets/js/25.836c2679.js",
    "revision": "e4eaf68f2ee1bc54576bb39edca16ff3"
  },
  {
    "url": "assets/js/26.0447f190.js",
    "revision": "6c710cbf6367cd5d86c947ca77ccd6eb"
  },
  {
    "url": "assets/js/27.cbccdb79.js",
    "revision": "714027b1794313c193e4eeaddb4ad263"
  },
  {
    "url": "assets/js/28.45a27a5e.js",
    "revision": "d2d5efa3cab7ce4a91b4176061b10a83"
  },
  {
    "url": "assets/js/29.157b1766.js",
    "revision": "cbe1fff638e4515f7b95e0f3d8c4543f"
  },
  {
    "url": "assets/js/3.c9742a30.js",
    "revision": "92eda2f58cebf364befe4654dca58594"
  },
  {
    "url": "assets/js/30.0eb8c78c.js",
    "revision": "d90d58881f244e18d1330d2be9b4e0a2"
  },
  {
    "url": "assets/js/31.407a1466.js",
    "revision": "c1d538aaa209da76cb9b165cf216c576"
  },
  {
    "url": "assets/js/32.2a9dded3.js",
    "revision": "674f08ac8894a73416a9e2ff1079b4e7"
  },
  {
    "url": "assets/js/33.66344fe6.js",
    "revision": "f55949f0dbe71efa71014ade0e886ab1"
  },
  {
    "url": "assets/js/34.53436eb7.js",
    "revision": "48af828286f53bb300844259b12384ea"
  },
  {
    "url": "assets/js/35.b469aaa5.js",
    "revision": "c22b3a933e85641fd1be30d1fb9ae17f"
  },
  {
    "url": "assets/js/36.627b77d8.js",
    "revision": "b6d4a233e0eaa507beb6e76b0b8640ae"
  },
  {
    "url": "assets/js/37.0661f197.js",
    "revision": "84028f04baeac0de0f8adfa5715e284d"
  },
  {
    "url": "assets/js/38.8f1ed990.js",
    "revision": "02bf917858a836ad147ec22d644bcf6a"
  },
  {
    "url": "assets/js/39.c36305d4.js",
    "revision": "2c3d0c3c536514d18fa428c8b07b5b1a"
  },
  {
    "url": "assets/js/4.d336f3dc.js",
    "revision": "710b823b011a74a7dce129c4d98729e7"
  },
  {
    "url": "assets/js/40.d015ea83.js",
    "revision": "08ef9ff7be2af684f9f6e160467d73dc"
  },
  {
    "url": "assets/js/41.d0b0a4e4.js",
    "revision": "aec1a6838c8fca1795eb5d30a8500184"
  },
  {
    "url": "assets/js/42.b39fe5a9.js",
    "revision": "6b103019c5d061db5ea7545b61cfc13c"
  },
  {
    "url": "assets/js/43.e499994a.js",
    "revision": "6c44123ee0c2248f5b43c0855303fbfa"
  },
  {
    "url": "assets/js/44.33045235.js",
    "revision": "51a5a68956561afec21a9ed7561509fc"
  },
  {
    "url": "assets/js/45.807fc676.js",
    "revision": "8564ce1c19f2147ca2f039e476117b34"
  },
  {
    "url": "assets/js/46.2eeadc45.js",
    "revision": "813c6011001303754656e2cae8a1bc6d"
  },
  {
    "url": "assets/js/47.c03ad40f.js",
    "revision": "94611e8f6a37d55e5c5ce4fa4d5444cd"
  },
  {
    "url": "assets/js/48.90fa83ac.js",
    "revision": "51d716635c6097cd526d1e3baa8185f6"
  },
  {
    "url": "assets/js/49.a6474975.js",
    "revision": "d486660f118f1e73a462c262ac9bef18"
  },
  {
    "url": "assets/js/5.179a2a62.js",
    "revision": "209ae1a121c3e5a345f2e1f462897b3f"
  },
  {
    "url": "assets/js/50.fed2d934.js",
    "revision": "0e6009b007c3d1460026b285e9d6e897"
  },
  {
    "url": "assets/js/51.534dd6f0.js",
    "revision": "892cd38627e0bbd348209e3c0f851b03"
  },
  {
    "url": "assets/js/52.11b44db0.js",
    "revision": "375691d3b588f436f44b07366297e858"
  },
  {
    "url": "assets/js/53.0adc3c0a.js",
    "revision": "743d1ac0a2e4a94fadec65ef92f65125"
  },
  {
    "url": "assets/js/54.26f7c74e.js",
    "revision": "b60d9c76c782dc3233c01e7d670a6792"
  },
  {
    "url": "assets/js/55.48985700.js",
    "revision": "381c9804b500fdda09dd6c700ce593f4"
  },
  {
    "url": "assets/js/56.111a68bc.js",
    "revision": "f4326daed59bcf1c5623ffe73ec67e32"
  },
  {
    "url": "assets/js/57.370ce709.js",
    "revision": "8714b88bcb6b2be6d32bde260d59720e"
  },
  {
    "url": "assets/js/58.66ab04af.js",
    "revision": "41488fa3a79fb349307b59a06807a3e0"
  },
  {
    "url": "assets/js/59.d432c87c.js",
    "revision": "d7219b419fc302a8781c0f99ac1ae5df"
  },
  {
    "url": "assets/js/6.cbe0ccea.js",
    "revision": "75e5d1b1098a58b7e7be47887e3d1e30"
  },
  {
    "url": "assets/js/60.d7792260.js",
    "revision": "1e7860893035f87265b2427e5b48b703"
  },
  {
    "url": "assets/js/61.f9b46050.js",
    "revision": "b8e806d8e2d9d579d316e256a2fb548a"
  },
  {
    "url": "assets/js/62.098f587e.js",
    "revision": "81357cab4ed237949d600c53efd0de9c"
  },
  {
    "url": "assets/js/63.ce32f839.js",
    "revision": "3f7494b49c2097bb904f99240d4f6f01"
  },
  {
    "url": "assets/js/64.cecc2658.js",
    "revision": "fceb014d695864c8508f9a3e47073f45"
  },
  {
    "url": "assets/js/65.db849578.js",
    "revision": "68bef01821173969e3f354eaad5bb867"
  },
  {
    "url": "assets/js/66.ba2ff1f8.js",
    "revision": "3ee0dd4dea80db91d2db0356a5c2f3bc"
  },
  {
    "url": "assets/js/67.31c5d0df.js",
    "revision": "e3b506c16928b0ce3c0e37bdab21e8ec"
  },
  {
    "url": "assets/js/68.bb2aa377.js",
    "revision": "328c1fcab9a81e25a819fb952b2c47c9"
  },
  {
    "url": "assets/js/69.400e9f46.js",
    "revision": "ac0ca5f72c68540999587222246aba14"
  },
  {
    "url": "assets/js/7.00952f7d.js",
    "revision": "e93d4535652ab2120ab17b564fc8a3bb"
  },
  {
    "url": "assets/js/70.73c29d5f.js",
    "revision": "7819abcc2083fd170a63d7a95616c958"
  },
  {
    "url": "assets/js/71.cfcb0447.js",
    "revision": "a93719888a15da6c14fa62ff3144fb0b"
  },
  {
    "url": "assets/js/72.610df67a.js",
    "revision": "e7313a485bbc2c614b53b4dc6c1bced8"
  },
  {
    "url": "assets/js/73.06252fd0.js",
    "revision": "0edcf7030fe6c0efbbeb0bb21cecbbdd"
  },
  {
    "url": "assets/js/74.161bbe0b.js",
    "revision": "d028470abc2befa7d8a3cb3cfa0366ce"
  },
  {
    "url": "assets/js/75.a5129aee.js",
    "revision": "fc7802b66dfc9792ab8543bb51072f08"
  },
  {
    "url": "assets/js/76.6b0538ee.js",
    "revision": "54fb71127e4bf0aeb94983f1d8e066aa"
  },
  {
    "url": "assets/js/77.8cce03ea.js",
    "revision": "78eda14a45cf397d0f80615765a0c114"
  },
  {
    "url": "assets/js/78.2d56409b.js",
    "revision": "30c638464f25eaacbaff4ae19a1276e7"
  },
  {
    "url": "assets/js/79.be13b6b6.js",
    "revision": "651085932569da19592fde9c049dfb8d"
  },
  {
    "url": "assets/js/8.c05cdb5c.js",
    "revision": "da28d5e320cd74663ec8a4d5004e59c4"
  },
  {
    "url": "assets/js/80.dd03f961.js",
    "revision": "c056a848259ee3aaa539fe3dcf6eb35f"
  },
  {
    "url": "assets/js/81.c02d5bf2.js",
    "revision": "e7cc2191347f871b8ecc9674a147fbdd"
  },
  {
    "url": "assets/js/82.f0c83a47.js",
    "revision": "d578b013c93345120a0a0751784419fa"
  },
  {
    "url": "assets/js/83.073e471e.js",
    "revision": "f50b82ab099c62f0c09f12ed14d995f0"
  },
  {
    "url": "assets/js/84.61f2f57a.js",
    "revision": "c50f783d7404086eca277e63605d32ca"
  },
  {
    "url": "assets/js/85.ccc0f35a.js",
    "revision": "4af3a7141e0f0dffa9df96c5c823bda6"
  },
  {
    "url": "assets/js/86.fab29456.js",
    "revision": "5bac566ed1e34366e4242c47afc784b8"
  },
  {
    "url": "assets/js/87.ec28f7b5.js",
    "revision": "c4e0fe2ff5b94067c2ac0a0a6bf4589d"
  },
  {
    "url": "assets/js/9.faf2ed14.js",
    "revision": "c5abf76cf5a2c603542ff62cdc106582"
  },
  {
    "url": "assets/js/app.d610ec43.js",
    "revision": "b713f4da839594e2e8ffea3d9823e944"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "5725c1dc7631737fbb7aa233785f9ee8"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "1d6c4c056448b5cc8bb0655d167eace9"
  },
  {
    "url": "community-made/index.html",
    "revision": "cf35d77ba3403d119b2133a7fe62c10b"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "eee479386e7ab0d5613e32ad2f776f36"
  },
  {
    "url": "contribute/index.html",
    "revision": "e8077f0ad970615d412b9509fdee07db"
  },
  {
    "url": "core-development/index.html",
    "revision": "ee6bcc815d1b8a7460bda8fcb6978462"
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
    "revision": "444a97b23d95831f1ebcbd1f5582cfc3"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "7b8386802b8d16d793b2b69560b154d9"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "4b069b354bf95f622820bd22592686c5"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "d852aea8f9afd5dfecf9426cb710a8cc"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "84e72284b15a97c0f3fcd1ed128929e9"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "8c27a5b08b872c29184f8964996789bf"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "4040950f6b0637de7477cb60e9254b03"
  },
  {
    "url": "de/index.html",
    "revision": "d32617f7e363c0bdb52b1d3c275c4dbb"
  },
  {
    "url": "de/links/index.html",
    "revision": "1219706eeb1f9b18a420bdf10346561a"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "1556f60b3316058ffd53fc9d560c22e3"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "12110e422c7c0c447a5367b4023b9316"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "e2d1c27671b3666307f3225cb4613f9a"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "6bf569e48d9d92315a4a068a9a463a3f"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "53c8ac7ce7f15c4285b8c62e31837e15"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "81d15bdec20c30762d3a19d9f996f6b6"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "f9faff7092dfa918ea82602d24ef4c84"
  },
  {
    "url": "de/setup/index.html",
    "revision": "b75f02e0a5a11a9cb3f50056410c7844"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "5a1fdcacc84ef4795f453cd83bb01adc"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "6281e45613fa8645870c9c756330f69a"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "56bee4cf1ea17ddef9310ed16f921442"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "24be21fc7c7de9b2c1619a433d1fc0ee"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "bc69bb68396698e5da97e436a98580c4"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "58ce7088697a96e78f98f2c601fe2c62"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "188538d41fe40a9329d6ea568d1e0653"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "c8e27f69d5bbf14df6267e4dadee2df0"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "e95d3b9a52c5b9b19f7b1d7c00372b7a"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "d57d17a038168999b0f725d5d2ba5bcd"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "b0761c647ccf3e633609ca7b04949abd"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "b58044842b2b124ffaf1d6cda2626b5a"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "b22cdc4888acedeedc0558fd2cbd05f3"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "5b69e43721b103a5bc5e25d7f354335e"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "efddaebd7179a5df4cbf560dab72a263"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "78c0f21c2c820e51cddb71c979154826"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "f4c158d9db03c2cd3fb42bfe8439ef38"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "caa0244f08bf22a596edc465c9c8adce"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "cbb205b9a905a05abcb05c79cb2b3380"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "2aad723312b30489cc29623e86daf4e5"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "8effca8e9cc44523791fd1ef99ad60c1"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "a638d3a64707e9cdd23eceaf65576a79"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "ae3e327ab77bfcedce252e747243a324"
  },
  {
    "url": "de/usage/index.html",
    "revision": "e1c5448347b05cb7a5a6c066019e2d1d"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "5069841b19328491bb2f8ab7ccc902d9"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "f3848b0424313c628ace971c5413d0e6"
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
    "revision": "cb719ca5381baeac3811832c412a40df"
  },
  {
    "url": "links/index.html",
    "revision": "228961ed088fc92f2356d9f0c579d050"
  },
  {
    "url": "satsetup/index.html",
    "revision": "fd23ca79b4957726892d29b1482173eb"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "ac495ff855da9e440e3d910c5934a0e1"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "f7c9d959c90b48705fe23ca1f9eb17e6"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "a1f40b41a40ed1b569de6ec375cb8106"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "ef6108d54df45d007506e5592617b66e"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "a4c7cea820f33e414d18df7dd2c6f6ef"
  },
  {
    "url": "setup/docker.html",
    "revision": "d9efc06f542cd7d5b19699e7591c2499"
  },
  {
    "url": "setup/image-install.html",
    "revision": "1aa6d8311ef0042829af719243b3395e"
  },
  {
    "url": "setup/index.html",
    "revision": "913c5c9ae70abac1a01e3d676b56bedf"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "1bb2cd0372a541c4702e1b6a12f9f9d0"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "65a80d89fe08b031abc9e27f09c65f7b"
  },
  {
    "url": "setup/requirements.html",
    "revision": "3f7692fd19c3e7440b5ea5b6021ef09c"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "905a3356576bac4efe390863a7356c8b"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "7af83fb0bd8f5ec09631a2a07f34edba"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "dcff60339bc0008815621cd9df71ee17"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "e86563f39e58d9f2b825d9c2ffa1e946"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "dd047798c1bf865f8a5c1cb008dac94f"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "8e487868928739fd4adb5d6a5edafe9d"
  },
  {
    "url": "skill-development/index.html",
    "revision": "6a7baee349a19388ac5a0319bdeeb4c7"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "2de392bb7ca286631c85f87ab8139c12"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "4180e8933cd165010b8abd66bd3b865c"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "3727da958a05ea332095273c13904c07"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "7d432e525f1762c0199f93ba8ba6d8d1"
  },
  {
    "url": "sponsors/index.html",
    "revision": "1cb9bc16929cb1956eb2be123fdf3428"
  },
  {
    "url": "usage/index.html",
    "revision": "3cc92f27b3e47be0c5a7bd13c6097d12"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "4604c51a3a53ab69b94fdff54ac715db"
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

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
    "revision": "be450e38665b09fad323484f0bf2e778"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "2fd2b8cdb76176943f483f63b416f29d"
  },
  {
    "url": "about-alice/index.html",
    "revision": "3accf15dcf35a4b9bac7b96097329dff"
  },
  {
    "url": "assets/css/0.styles.5704c330.css",
    "revision": "7ef8c07b40454fe735770d21bce59aa0"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.4c14399a.js",
    "revision": "752cc2efbae1dbf9049fd6e13cd81a50"
  },
  {
    "url": "assets/js/11.1596e5c0.js",
    "revision": "c9e034871ecbd6a6b17323ef4aa9d46a"
  },
  {
    "url": "assets/js/12.b864e056.js",
    "revision": "30c66ce2bcbd75af5c54ec16090f0ebe"
  },
  {
    "url": "assets/js/13.597a1db2.js",
    "revision": "e502515af6fb3dd5da0ad5dc752fd3d2"
  },
  {
    "url": "assets/js/14.a950578d.js",
    "revision": "0f673828f5370c10bc2949d186402707"
  },
  {
    "url": "assets/js/15.f50d1495.js",
    "revision": "f484597d302c872d1be84dc29009b6e6"
  },
  {
    "url": "assets/js/16.9d9c32f2.js",
    "revision": "ab360706503b8b419aaf9d2034ce95cc"
  },
  {
    "url": "assets/js/17.0c7baefc.js",
    "revision": "277c0cb17df13c9e4d769a836f9366e4"
  },
  {
    "url": "assets/js/18.c22e2077.js",
    "revision": "f07f607b9de65514b71672f370522345"
  },
  {
    "url": "assets/js/19.f4af632c.js",
    "revision": "46a9d3fdb662ec896099110ea63d50db"
  },
  {
    "url": "assets/js/2.09656052.js",
    "revision": "2d8a77d6bb03e0576133142b6bde8645"
  },
  {
    "url": "assets/js/20.fe3f47bf.js",
    "revision": "9f411b4ef5096e3f256266c292905df3"
  },
  {
    "url": "assets/js/21.47417a5c.js",
    "revision": "e7bc5165e940328ce72b7e75369e4f5c"
  },
  {
    "url": "assets/js/22.b50dc196.js",
    "revision": "4b33685be9648a7061b65ec3874057d8"
  },
  {
    "url": "assets/js/23.6fed163f.js",
    "revision": "3d7a99f2ebc52753ea6d400e7424e5a7"
  },
  {
    "url": "assets/js/24.9c708912.js",
    "revision": "c3d632165cc22c86866e46f1948ce10d"
  },
  {
    "url": "assets/js/25.82a51196.js",
    "revision": "4dfca3fe8137a66c1d9bd271130752aa"
  },
  {
    "url": "assets/js/26.da10f47e.js",
    "revision": "f22c8fe7eb47abfcfcf519f222968427"
  },
  {
    "url": "assets/js/27.54f9e0d7.js",
    "revision": "d6f286487a3568d6da9ed39ce5220fd4"
  },
  {
    "url": "assets/js/28.d643634a.js",
    "revision": "c67aced7ace59ee98c817d7f4bf4a699"
  },
  {
    "url": "assets/js/29.b711ae2d.js",
    "revision": "408cb6705d4c77125484d975c7e62ce7"
  },
  {
    "url": "assets/js/3.8a7fc4c5.js",
    "revision": "55b183e9b7539ff43e9a46af9a74159a"
  },
  {
    "url": "assets/js/30.33f81d20.js",
    "revision": "18db43bb9ed0662e4d9513f216dcf675"
  },
  {
    "url": "assets/js/31.66a2a883.js",
    "revision": "1782c152fbe5b9a8d209aea551cc5169"
  },
  {
    "url": "assets/js/32.8bc3ff95.js",
    "revision": "f360d6eae5f97c8e7d81fdf9e00894f3"
  },
  {
    "url": "assets/js/33.a4341dad.js",
    "revision": "600f6331d8794724f743c52113f9866e"
  },
  {
    "url": "assets/js/34.e61f93c9.js",
    "revision": "2b21585997fc0df0bc29628e7b4645ff"
  },
  {
    "url": "assets/js/35.5932148f.js",
    "revision": "04b4fb8b1c3fac9302dbaa2743624b56"
  },
  {
    "url": "assets/js/36.1d9e6b49.js",
    "revision": "46f31d891d774692d26be91252bdc7f5"
  },
  {
    "url": "assets/js/37.ffa7cdac.js",
    "revision": "61d242e0f43622f792a328beaea540d7"
  },
  {
    "url": "assets/js/38.e7209772.js",
    "revision": "2c96c662b1d09823630c9ac77f54b7cf"
  },
  {
    "url": "assets/js/39.d214560d.js",
    "revision": "24cdfa92ca415ae3525053e743ae521f"
  },
  {
    "url": "assets/js/4.308e8b15.js",
    "revision": "7fe0f44e121a2bf8afafa4f66c764ea6"
  },
  {
    "url": "assets/js/40.7d7b6455.js",
    "revision": "920469e0da734673691fcb074d149cb9"
  },
  {
    "url": "assets/js/41.22f1628e.js",
    "revision": "6d4b5e6fdeb662ef8e0da4cd0558fe87"
  },
  {
    "url": "assets/js/42.c15787ac.js",
    "revision": "296c6e97ed7987cea29d3a21f35b18bf"
  },
  {
    "url": "assets/js/43.73d858f6.js",
    "revision": "e297da2915a5be2ec689fcf8f5933273"
  },
  {
    "url": "assets/js/44.58702129.js",
    "revision": "2147f2d2c41671c578964628e596882f"
  },
  {
    "url": "assets/js/45.b84e01e0.js",
    "revision": "359f2f7fdffe6c2cc75ec11631b81cde"
  },
  {
    "url": "assets/js/46.4a731dcc.js",
    "revision": "910fac6a2b4ad0d1688b2d949ed821fa"
  },
  {
    "url": "assets/js/47.311a4857.js",
    "revision": "a14230e9e2c0d061b34d9684af20e303"
  },
  {
    "url": "assets/js/48.519b7827.js",
    "revision": "cf227120da4a307ec9ed97eb8077a516"
  },
  {
    "url": "assets/js/49.e2a51b36.js",
    "revision": "dda225b4489a1a6e8010adc04a26f36b"
  },
  {
    "url": "assets/js/5.1411d3c0.js",
    "revision": "0099e02eabad2d0e75d0beb6a31842b6"
  },
  {
    "url": "assets/js/50.a93d23d7.js",
    "revision": "024ac95a0215eb717518cae7f0227576"
  },
  {
    "url": "assets/js/51.138163f0.js",
    "revision": "a0edd26ca36c8ed5438af6e2a3cbede6"
  },
  {
    "url": "assets/js/52.3a54cb0f.js",
    "revision": "7be7e79671eef750c1ce1df77bf70c00"
  },
  {
    "url": "assets/js/53.a64f9b29.js",
    "revision": "cfe5fa2bf79f46b0a90285cfa65bb63b"
  },
  {
    "url": "assets/js/54.a662fc24.js",
    "revision": "dca47d8802a34e239117a8a7b6edfffe"
  },
  {
    "url": "assets/js/55.3c2eb78b.js",
    "revision": "71b78b30cc74e54ae0d22a02709c8ddd"
  },
  {
    "url": "assets/js/56.47d7dc3c.js",
    "revision": "97c26978593798c08a0219a2ce4aee09"
  },
  {
    "url": "assets/js/57.782234f1.js",
    "revision": "c67b64c420780d25cdbc8353ad5c726c"
  },
  {
    "url": "assets/js/58.83d77ac1.js",
    "revision": "a94048e4b0f6c4225acd37705728261a"
  },
  {
    "url": "assets/js/59.c1ef7d68.js",
    "revision": "a0b3eb5499888bf6917a5cd943f78d39"
  },
  {
    "url": "assets/js/6.63d59d20.js",
    "revision": "32c48424a36935737ce31043c3b665ab"
  },
  {
    "url": "assets/js/60.c1b2adae.js",
    "revision": "d140bc3cc5e6b849fa91ac947c2e14f3"
  },
  {
    "url": "assets/js/61.6b12a7b1.js",
    "revision": "fb52a246ab52e0c750f6c4ae3de87415"
  },
  {
    "url": "assets/js/62.107a4cab.js",
    "revision": "d0edaa7af7f2df86b4d2463f3162b500"
  },
  {
    "url": "assets/js/63.5cbedda2.js",
    "revision": "57cc8d177b41d16e1e734b2eab9316e3"
  },
  {
    "url": "assets/js/64.2443ea00.js",
    "revision": "d27c880bbd5bab32fd6ef9af95ce9afe"
  },
  {
    "url": "assets/js/65.adfeb33c.js",
    "revision": "b9ded198931714acc1067602eb676063"
  },
  {
    "url": "assets/js/66.37b8b7d7.js",
    "revision": "35893a905c0feeaf5d50b9afa81c0cb5"
  },
  {
    "url": "assets/js/67.98ec0164.js",
    "revision": "4c932573255f9f7dcc5e561db6759b07"
  },
  {
    "url": "assets/js/68.9f5a60b0.js",
    "revision": "a5d9f36fa6f997b0422037036742b9ae"
  },
  {
    "url": "assets/js/69.eddcfbce.js",
    "revision": "7465e579667706a19816dfc71e47d737"
  },
  {
    "url": "assets/js/7.0e24214b.js",
    "revision": "7150feac5e9e3c6c5e4dbd0de906aac2"
  },
  {
    "url": "assets/js/70.8d3dd2d2.js",
    "revision": "e4ac8b7c0f002a9f7843f10b479ceda0"
  },
  {
    "url": "assets/js/71.626b27f3.js",
    "revision": "bd273605b116fe87d38ef297c78cd90f"
  },
  {
    "url": "assets/js/72.b3c5d130.js",
    "revision": "fc8044bacc8781bec9ed7aadcf62368c"
  },
  {
    "url": "assets/js/73.20736bee.js",
    "revision": "b6bfd4b3189dcb7cc02e04ad9f54bc87"
  },
  {
    "url": "assets/js/74.57951b71.js",
    "revision": "67af69420a33315b3c2788384c5aa6c6"
  },
  {
    "url": "assets/js/75.2836b249.js",
    "revision": "fa7ca28ee3c6b161735d2f2fefa9516a"
  },
  {
    "url": "assets/js/76.88876aec.js",
    "revision": "9ba5e87b47d3dd4e158e9915157e0661"
  },
  {
    "url": "assets/js/77.114894c7.js",
    "revision": "236fb884e217f3c397f747177aef0a4c"
  },
  {
    "url": "assets/js/78.16c49fbb.js",
    "revision": "4fefff2dbc73470a66916577e3a0ef3a"
  },
  {
    "url": "assets/js/79.56f474fb.js",
    "revision": "ea85f0d0ff2a3a676829d0d657d9b6e7"
  },
  {
    "url": "assets/js/8.4964cf68.js",
    "revision": "07ef56dbfffdb9515fbe2bbf19dfd83d"
  },
  {
    "url": "assets/js/80.c0ad2c7f.js",
    "revision": "19cade4235111aab2fcbee1db0f4f277"
  },
  {
    "url": "assets/js/81.769f26ac.js",
    "revision": "f1fe03e26c6ac4b79c2f9f4af97eaf33"
  },
  {
    "url": "assets/js/82.d6aa85be.js",
    "revision": "155a7684e31b6429eff56dc149ad2950"
  },
  {
    "url": "assets/js/83.b249c9ee.js",
    "revision": "c22d094e2813f3a231b1db846341aa56"
  },
  {
    "url": "assets/js/84.42825485.js",
    "revision": "f2dc4e2c913f4bf01a7aa8c62b9ac066"
  },
  {
    "url": "assets/js/85.a4b6e340.js",
    "revision": "896cd370e0f82955587abf8814872b0c"
  },
  {
    "url": "assets/js/86.92e42b69.js",
    "revision": "158e5c23d5660580db244b38c8ce1e36"
  },
  {
    "url": "assets/js/87.57107773.js",
    "revision": "866e1f271fcd438d349499dcea08ed52"
  },
  {
    "url": "assets/js/9.b67165a5.js",
    "revision": "3791e1dd3970d38652faa91056b5da09"
  },
  {
    "url": "assets/js/app.f1b1ed64.js",
    "revision": "667d54aaa26ece083d9d059b19e8e246"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "e1a7b90f20070e73c7ef27c25cd3bdb5"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "2d722f11b132970e24b46988d1dd5faa"
  },
  {
    "url": "community-made/index.html",
    "revision": "2bd1e4d24466b62045ca9ae742ee8e90"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "8de91601d05b9189c111f106da2ecb38"
  },
  {
    "url": "contribute/index.html",
    "revision": "a981792f1b4c49e621ae736ea1b1340f"
  },
  {
    "url": "core-development/index.html",
    "revision": "7d8c3e70f37bb7a04da46e6f515e8c97"
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
    "revision": "0721e3ffea9790539e5e4a3ec524413f"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "fb79bf4a1da31c3f9152b7d08145f90f"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "87e4c7a7cf2fc91aa0d30c963fbe2ac5"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "85b783c7d239d64ca405fbe6de5f931e"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "70d359d4129ec69223262e55bbf518a1"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "5f524140b5bc636b1696269379a09572"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "eed7f5e6b094542369ec67ee84cfbcca"
  },
  {
    "url": "de/index.html",
    "revision": "a541f570800c20b295ead4539947b565"
  },
  {
    "url": "de/links/index.html",
    "revision": "23ae917ac3c081208f3c2cf0785cef6d"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "273c4ce164991fb2ec5ac332b89d9db0"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "1ef6f9bb8f980168d76eba0b78a729b5"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "b385e4e533c40b3b3b9e688397b00f04"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "247fc12031f62f5ead187431e0617a8a"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "ad81ca27ab968d693ebd913f224938c8"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "52405f385e23caf8c4f8e2b3897a111f"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "364526554d1aea0a3b1d18b1e87a3f06"
  },
  {
    "url": "de/setup/index.html",
    "revision": "52b9bbca3956bb0841a3223f5651e754"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "825a619ac6e9e3fd19e0cd68adb16c60"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "1de6efb15590d9f1ed8162bc81c57aef"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "9c46275d032b8f4203a649d2d7460b97"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "e6e1fff5d1f1bf88fd751275abea3ab5"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "8e94431548f54cfd23fd7a854f027c60"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "53fe84300279149ea5894ee389a912ea"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "3763fade83398bc13b14e6df006a2e90"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "372bb248c7b461e3abab7c4a2c987a83"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "e5ddc4f8abc17dc724e882a8ff6d4995"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "639547ebba5912666edccf2a0faf0bc1"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "683fa7b327f654ed67adbb50337c47b6"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "8d42be7858d7262381f8798d3a144133"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "b25548bd8bfd50ca14b41a35c25afd7b"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "2c04e8b743705054e9428be518a289e9"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "6887045c80af52142a9fcceaa30cb31f"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "d03407c5c04a1da3635e4f410f038bd3"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "e18e716d7de58fda7d3b7d90215cb67c"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "42dc68a462d110a18131edc99c441591"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "642c584eb65d392dd831eaeaa96d8432"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "75008f2056c0d710da5314389f1f35e4"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "69b1e733de23b9bbae3fde4fb428cab0"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "c84e19f8f915f3edce63ad42cdecfa50"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "98d90d31ce3440d6e09476e3115474c5"
  },
  {
    "url": "de/usage/index.html",
    "revision": "f9312182e33c2e82aee10304d52fb363"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "7db201156cfea846e95aed1d77ef024e"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "a832d4ae596c06d9d5b37091c8f45d8c"
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
    "url": "images/zhdark.svg",
    "revision": "a12cdf871f9789efd33b9976bd260caf"
  },
  {
    "url": "index.html",
    "revision": "a83218c10e9b955ff84bd1e334e555ce"
  },
  {
    "url": "links/index.html",
    "revision": "a01211b6e8003d3b09fbd39167d24d59"
  },
  {
    "url": "satsetup/index.html",
    "revision": "c34d6ea833f22e3d730b772a5daecbb4"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "6b02308338f904ea6c77a395d01a157f"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "1948e7594f17eee60e0891a1045051ff"
  },
  {
    "url": "setup/docker.html",
    "revision": "8e29b7fa88387ae1cf2762c66795b9bd"
  },
  {
    "url": "setup/image-install.html",
    "revision": "9b420eeed4707ec05603b72eb0c9aec5"
  },
  {
    "url": "setup/index.html",
    "revision": "efd9dbb6c63831e208e865a2352728a2"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "1d1db4fa10103de4dcf76b765525a8ce"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "72945e6854be9356bec66541b5cf2f03"
  },
  {
    "url": "setup/requirements.html",
    "revision": "47b32209c436282d2f4d26bd853eb866"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "2528cdf66b1a41886416ab49b3cd65e6"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "18fd48c7ac509f0c01b4f1c73b6092f3"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "857e8a4deb97048be2e146a3df42cc6d"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "d36c1e8f66db04512320b8c5b8045457"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "e328cd68199732c98d39fbb90bfa8161"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "87e45bb42de86bdc5b35db26b57f1257"
  },
  {
    "url": "skill-development/index.html",
    "revision": "0fc0aa4ac11db1a653831b4938611ffb"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "6525f16be7f37649ce184aac77c8e38f"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "9df27d8168d3c6e5d32ea0fb567f3675"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "72d5bfa5da5d7e1dcfb78e91d6893334"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "be7ab7d7d2854db6b80f358bcf32f94b"
  },
  {
    "url": "sponsors/index.html",
    "revision": "3080f5fc88e9821b6195244b1c1030c1"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "92292c38d601d63adf283bd0fc8c5590"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "a5dff7ac2ba7c3a6c4ce24d4dfe5ee42"
  },
  {
    "url": "troubleshooting/satellite.html",
    "revision": "2e4fff9b9ad196bd798159dc8c426abb"
  },
  {
    "url": "usage/index.html",
    "revision": "abee267865f27ce48ee7e1bbd32eb436"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "6f811a351a510570a359ce5d9e579f10"
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

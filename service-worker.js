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
    "revision": "735f19f549efe658d6e14e640a39214a"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "8fe1a7778d628c6cb599e91286fba44f"
  },
  {
    "url": "about-alice/index.html",
    "revision": "79bafa4d1ac39484dbcc3f1b2e92cf2f"
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
    "url": "assets/js/10.1274ed09.js",
    "revision": "ea3bc30c03d7c0eb38250d6f2e9828c2"
  },
  {
    "url": "assets/js/11.5ba1f671.js",
    "revision": "69b60718e16e7cb74f5b3f522050bd18"
  },
  {
    "url": "assets/js/12.31ab7aa6.js",
    "revision": "fdff754f494bb65323f10534b44263a5"
  },
  {
    "url": "assets/js/13.987d546d.js",
    "revision": "40e63f3a5cb27451a8a3145f26200ff4"
  },
  {
    "url": "assets/js/14.d206c431.js",
    "revision": "244706c2b227fef82af5b5b347429a16"
  },
  {
    "url": "assets/js/15.f47d53c9.js",
    "revision": "530a25ae8dafdc5a9c3cd7e146a3196c"
  },
  {
    "url": "assets/js/16.3be3f291.js",
    "revision": "f869127e4470d40c9669d8a5480d064e"
  },
  {
    "url": "assets/js/17.08e7cf18.js",
    "revision": "3b1849a35cca649b5a1c612c2480cc6f"
  },
  {
    "url": "assets/js/18.71058927.js",
    "revision": "1340b40ced8307b50f3b360f32818b6a"
  },
  {
    "url": "assets/js/19.f3a9883c.js",
    "revision": "6ea622d4155a2ccf7ba23705911b6bfd"
  },
  {
    "url": "assets/js/2.0af9af49.js",
    "revision": "037a730700637d446af70182b410b3da"
  },
  {
    "url": "assets/js/20.33b6dd84.js",
    "revision": "74cd8c5a83a0d8b5a75414f1e014e36b"
  },
  {
    "url": "assets/js/21.ef324de2.js",
    "revision": "8615f2a1e306f619f20b18bda9c3c0e9"
  },
  {
    "url": "assets/js/22.a427e314.js",
    "revision": "ca8313413168be8916610cda3546216a"
  },
  {
    "url": "assets/js/23.4459a2c7.js",
    "revision": "88ef85a715d853608a7d0e68fc801178"
  },
  {
    "url": "assets/js/24.59cec527.js",
    "revision": "98434a6b1fbd0d06b52905ab504cc861"
  },
  {
    "url": "assets/js/25.65312840.js",
    "revision": "3e260763570ac994e2849c361e760162"
  },
  {
    "url": "assets/js/26.de1b8dd0.js",
    "revision": "5bb4bd6f17447a75235177cf32a04e07"
  },
  {
    "url": "assets/js/27.6c2ab17a.js",
    "revision": "14c2d52339af748616c3fc13f044f063"
  },
  {
    "url": "assets/js/28.c3393041.js",
    "revision": "0c9071b7f1953697c62b12d1c111606a"
  },
  {
    "url": "assets/js/29.79f723dd.js",
    "revision": "c37451e548996d3caa49a0974cb01b4a"
  },
  {
    "url": "assets/js/3.baf9fd22.js",
    "revision": "63545a2e98073a0772b9e7a51119dfb7"
  },
  {
    "url": "assets/js/30.ebaecebf.js",
    "revision": "ca7a60a8b3bf7cf5bb1c83e0e6a76589"
  },
  {
    "url": "assets/js/31.96a89512.js",
    "revision": "17b0e643bd0d555d9f53d11beb6bfea6"
  },
  {
    "url": "assets/js/32.0d888fb9.js",
    "revision": "acaa02742c38ba48e58d47599dfb3bb2"
  },
  {
    "url": "assets/js/33.9ed5b994.js",
    "revision": "9249e68ca876330d43396ad44731853e"
  },
  {
    "url": "assets/js/34.5973ec0e.js",
    "revision": "b5fcbca230d62b08f38317bea207efb5"
  },
  {
    "url": "assets/js/35.c33d2cd6.js",
    "revision": "3de7a11664dd438620a6b972f1907e54"
  },
  {
    "url": "assets/js/36.6df9a6c2.js",
    "revision": "abb620ef776a2b14ed1c4f46f0ade3ed"
  },
  {
    "url": "assets/js/37.8307d12f.js",
    "revision": "cf8ace2104818d0cc78a43ad12c904fd"
  },
  {
    "url": "assets/js/38.66286174.js",
    "revision": "460239169d8bcbe24e0895b6b39f0662"
  },
  {
    "url": "assets/js/39.4a79b3f4.js",
    "revision": "8479b20b82ddc510662995f09f938cce"
  },
  {
    "url": "assets/js/4.2c0b8262.js",
    "revision": "436a4036080a41e7cae4a13cc1641233"
  },
  {
    "url": "assets/js/40.70767070.js",
    "revision": "855f1ea7e4863e72edbf70536ea6afb0"
  },
  {
    "url": "assets/js/41.9d648778.js",
    "revision": "c803cda6611fd671bed715631cecbc07"
  },
  {
    "url": "assets/js/42.81c502fc.js",
    "revision": "7640d929c84c3a3896c05492a554a02a"
  },
  {
    "url": "assets/js/43.8afabef4.js",
    "revision": "ce9c6a3da030ef2b631a505899fde550"
  },
  {
    "url": "assets/js/44.57f0ed0f.js",
    "revision": "6ad04c7959affba875d6fe66cff7b038"
  },
  {
    "url": "assets/js/45.b6410dbe.js",
    "revision": "fd73ece186f6bb73c82889bb7f4dcb83"
  },
  {
    "url": "assets/js/46.66d4b948.js",
    "revision": "af0f73583e8433f247a78bf374c66ed1"
  },
  {
    "url": "assets/js/47.cb0c15bb.js",
    "revision": "0964e173b179980098967d883eb518fe"
  },
  {
    "url": "assets/js/48.b2c14183.js",
    "revision": "e0bee3634cddce046de4f1405bf2503c"
  },
  {
    "url": "assets/js/49.a9ef342c.js",
    "revision": "691710d18e4834d0b7b8328fcd3bc12f"
  },
  {
    "url": "assets/js/5.6535a665.js",
    "revision": "71005f055d7350fc6c6643c297b41c3d"
  },
  {
    "url": "assets/js/50.6ecabc00.js",
    "revision": "22713651ee29f6e2c41c539f802bc011"
  },
  {
    "url": "assets/js/51.65ac70d4.js",
    "revision": "906ad1386ef1c4aa9dcd4df9f4629352"
  },
  {
    "url": "assets/js/52.eb1278b6.js",
    "revision": "767b403b38b7cd3f87613e0445118966"
  },
  {
    "url": "assets/js/53.44f71456.js",
    "revision": "fbf018ae84d78c1862c8ef4d0e3064fa"
  },
  {
    "url": "assets/js/54.477b4173.js",
    "revision": "b29f1ebd9c4cad3024c3fd984b38496d"
  },
  {
    "url": "assets/js/55.c0990bb4.js",
    "revision": "4119f38c3ef83a27efc532280d2af2f3"
  },
  {
    "url": "assets/js/56.5eae6adf.js",
    "revision": "0e621666baf5032bb3057ea40d57d99e"
  },
  {
    "url": "assets/js/57.3d75bea0.js",
    "revision": "0e67dc8f8e825b97161d118594fbcc1d"
  },
  {
    "url": "assets/js/58.9d229cac.js",
    "revision": "cbdb0af69a402769f30936623eb3f180"
  },
  {
    "url": "assets/js/59.82e7a949.js",
    "revision": "68da7181a2a936785cc8728301e7d8e1"
  },
  {
    "url": "assets/js/6.c9114ef8.js",
    "revision": "c934851f6b6884a2c6e871e229b6a515"
  },
  {
    "url": "assets/js/60.bfcb20a6.js",
    "revision": "17b88f3aa710c44ebdb16e4a7b92f52b"
  },
  {
    "url": "assets/js/61.201302d2.js",
    "revision": "82d245f2926297e2b299c92ef0077963"
  },
  {
    "url": "assets/js/62.28b861f1.js",
    "revision": "f910fdb4e89faca73b18b92e2d0dbfb7"
  },
  {
    "url": "assets/js/63.74470dd7.js",
    "revision": "9c1e3287c4956e14b1d1e97dde332f0e"
  },
  {
    "url": "assets/js/64.4fb10e00.js",
    "revision": "755e3b5c6b8c1bac7296d67d84868904"
  },
  {
    "url": "assets/js/65.03d395ca.js",
    "revision": "113099a5c10f770a5c24f3f40510dae7"
  },
  {
    "url": "assets/js/66.d08b9b95.js",
    "revision": "261a530699cf9de72b05d6b606cd3add"
  },
  {
    "url": "assets/js/67.de001922.js",
    "revision": "f56e87583f8f612d765e54b3cb0176ca"
  },
  {
    "url": "assets/js/68.823bc593.js",
    "revision": "cd0ed6a30fb2ece089c69ae0bf4203f3"
  },
  {
    "url": "assets/js/69.5ac749cb.js",
    "revision": "181cce9c7a282039501d468c82628972"
  },
  {
    "url": "assets/js/7.d63a7fb4.js",
    "revision": "d6e26ef8b29bbec15ebe0a46a2160096"
  },
  {
    "url": "assets/js/70.da0a7e99.js",
    "revision": "1a03100604a7d50591e89a8bfa9aa3d1"
  },
  {
    "url": "assets/js/71.8684e886.js",
    "revision": "2cbcd9701c9fef3909976e26c53cdc4d"
  },
  {
    "url": "assets/js/72.a786e774.js",
    "revision": "f21838722f26b49ea6653b6910bdb142"
  },
  {
    "url": "assets/js/73.8df507c4.js",
    "revision": "4c3e361bdcd16f5ee35012edea86ee37"
  },
  {
    "url": "assets/js/74.fa8c5b8f.js",
    "revision": "a279cd81676225342270b7693bb609bc"
  },
  {
    "url": "assets/js/75.2e9c2843.js",
    "revision": "e7bff3c71d1fff5913e5c99e071bd392"
  },
  {
    "url": "assets/js/76.b434ec99.js",
    "revision": "c99b92f0511c9ca40a7d728ceb3bffed"
  },
  {
    "url": "assets/js/77.c0c840d7.js",
    "revision": "06b7e40cbf484c352cb1a0eabd4eeb65"
  },
  {
    "url": "assets/js/78.b208e4b5.js",
    "revision": "2bf08a8169615f671aa0d7cf10896e66"
  },
  {
    "url": "assets/js/79.02c0fe24.js",
    "revision": "98e900675f089d11e18635b030ded188"
  },
  {
    "url": "assets/js/8.909ee7a3.js",
    "revision": "9a60f01407d6947ceda0be96c3297fa2"
  },
  {
    "url": "assets/js/80.6f5b8c23.js",
    "revision": "8eedfd9cc5f04be3243b4a8c67e40923"
  },
  {
    "url": "assets/js/81.11687d2d.js",
    "revision": "c9420584d4cf720c8ee823a13b13fe1e"
  },
  {
    "url": "assets/js/82.369e71b1.js",
    "revision": "6325244d47908b46656537423e547d88"
  },
  {
    "url": "assets/js/83.b7505177.js",
    "revision": "d64b8f78c3c3ee5d85b3b95193d696f0"
  },
  {
    "url": "assets/js/84.82adf36e.js",
    "revision": "e802062f68b3c68606623844784e4b00"
  },
  {
    "url": "assets/js/85.35ecf74b.js",
    "revision": "1a5d03ad1bc81ccb00945aa33487f123"
  },
  {
    "url": "assets/js/86.cf47ce95.js",
    "revision": "3d86fb905aa88de091e50c9a0533e9e1"
  },
  {
    "url": "assets/js/87.de96fd5a.js",
    "revision": "bdb2fe5c8be7faf8941ce2552f002b3c"
  },
  {
    "url": "assets/js/88.0879e535.js",
    "revision": "ab698cf35604617545c6b5bce5f650c7"
  },
  {
    "url": "assets/js/89.b892e1fa.js",
    "revision": "44ab17328cf430ff0178cebd5d3f017b"
  },
  {
    "url": "assets/js/9.b27a0006.js",
    "revision": "5a3c26310a5422179c2ba32bea4a2561"
  },
  {
    "url": "assets/js/90.f39f1e15.js",
    "revision": "26491344395efe1344237976cf7d119f"
  },
  {
    "url": "assets/js/app.7dc75591.js",
    "revision": "5922d5f6e9814ac2fcc0cfc77bf8952c"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "278539c93b2f14eaa8845d8407dcf95a"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "73b6b630d9980bead1a126687ea75b2d"
  },
  {
    "url": "community-made/index.html",
    "revision": "c05564ae7fc59f0abc6366ca84a67a5e"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "2b1eab6e26f3e5891908ab9aed682fe8"
  },
  {
    "url": "contribute/index.html",
    "revision": "c83633e0966a7cff642f455abc480ca0"
  },
  {
    "url": "core-development/index.html",
    "revision": "08f7d0067c962317b33cada7eade9d15"
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
    "revision": "c740f7a41a1b4f5925b638c14bf2197c"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "4bc0377487666aacd986207e88a83605"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "16e0e67b8d43ffdf467213eebd793c3d"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "d9f93597a5ef4e9095f7611e3a54083c"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "a846ba32ad645466a6564d8aab5b975b"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "55fb8a2ad99dbcd558a374e8a1f114bb"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "94f807de17ca3ab06d53cea84b2e51e8"
  },
  {
    "url": "de/index.html",
    "revision": "b426e13ff7d9fb7333d8c99627765445"
  },
  {
    "url": "de/links/index.html",
    "revision": "d6ca281d17762b234e90a7decb4a1d04"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "651dc39c206a6cb0edccbb34fdb4cc1b"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "5b6fe63b0fad0507f97091f5d873f32a"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "1ec1e0a78ecd369bdea9f90790f946f9"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "446599df8b19bb939b9400953e6e186d"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "88bf6299b6865142aa9e0b14a45d8d98"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "b896673e93e027c6aa931b8f28f13d1b"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "4a326951d32fbf4be991d7d08cf3478b"
  },
  {
    "url": "de/setup/index.html",
    "revision": "2e05f694f7ae6b7136d4cc5c40f40e62"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "55995e8e9df1db49f13db841efd1c2a5"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "d2d7ec600c3ba19980ed17b91803d840"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "682d82fa88f4a4fd2828ec6b6e29ef96"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "f0fe4767195e33d448369f367ac1e8d7"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "6d1c1a5d81ccd8daa77d2921fcbccb35"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "b1299a2bac3a0cf573d51d6aa77bcb3a"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "a8ab3f05503ba4484cc42585a486fcea"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "d61561ae2f6a6c32648c497f259cadec"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "2044839ad49d01e90aacacd41ae30344"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "237904db35009e7362c6d79b91f64b34"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "9308489615fd5cba68baaf3f84fd0c38"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "d611e36fbb7018ac00d33f0fe67845c6"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "14a5131208b5ee486513d499eff9923b"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "cd424713320a0161fb0d8a36269b5d80"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "ec80f09941ddcd9bf6a869a7db272c14"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "d4c654d0deff23c5d8d0a84395f0a41e"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "ba070b5dbd7840ad620ef221d6a4974b"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "67484610d1829477cb5e79b593195cc0"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "00ad87164bca0fcd647d96c3250ac89b"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "5a029f26606b6f5dededc934ac56f365"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "3b3b78e7da68990d1b2c278bd8da5e3b"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "eae6da8af0c681e6ea59a241c706fbca"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "6ee8f818845cf4a755659e81a5d339ae"
  },
  {
    "url": "de/usage/index.html",
    "revision": "09e2338a158f8a4a976842453ba2a13e"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "93b63bed93a4a2451a3bafcbe0c4e566"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "495698d3a39c190bae6bdf689144c502"
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
    "revision": "318bbba9bab13399103539a61d9a803d"
  },
  {
    "url": "links/index.html",
    "revision": "8fbe9f4f74dcd9456c4d6faea712d587"
  },
  {
    "url": "satsetup/index.html",
    "revision": "a5489d7bccecdd778b65b272fe802a81"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "f594a0d68d7774b25c48f20743420a4b"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "3737eddccf7495289193d95c80a97484"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "44f3b5531512f4c9ce33a82168cdf628"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "6f358f9ed67b6f0d1b09a0f82360046b"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "1e878306d8cd960b9603209cf40849dc"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "02ca1d850dfd951016530a048d5666b2"
  },
  {
    "url": "setup/docker.html",
    "revision": "341953c81cdd4fd48ecd267fe5e04da8"
  },
  {
    "url": "setup/image-install.html",
    "revision": "8c6a317888245ba64216ad2a3a0e2ec6"
  },
  {
    "url": "setup/index.html",
    "revision": "3b96add31acd1852405c999be7e8fed9"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "b9f95cb8b4571ea0c4d2c4e3733988bf"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "493a6ed6bf21da99a95d550a153bb833"
  },
  {
    "url": "setup/requirements.html",
    "revision": "20bf47d40d768d587687181c24c85ef5"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "a7033751290ebccebb23ebaee203a135"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "87ba6d059eda0eb57e37f6180210cc4a"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "108416489975c3e8e5448d1af96e32d5"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "b4027c0027f62d5a56210726be30751e"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "d726d74e2a6544d8471f3c930ff1b3a7"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "9667f91c29ea20450bfa071e003f06e5"
  },
  {
    "url": "skill-development/index.html",
    "revision": "c2099e44a3ff7760867de32d28dfac46"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "59a6aaeb8c85e2a124060e06d9baea2c"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "236b91d50f80724be51eb6e389fae2c7"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "abc301d89ba4edc36478fc343c870d8b"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "4f9a79f7c3fbd182a5acf6050bdd2e02"
  },
  {
    "url": "sponsors/index.html",
    "revision": "9b43fbb23a64e1e53ba4ec92edd2a466"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "bba24e4be4125f9905d81d198c6b66d0"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "9bdd7ed07cd95d33b64311abe0057e2d"
  },
  {
    "url": "usage/index.html",
    "revision": "62920b91f97e6a4a27e0f61591f800c6"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "b5b108e94f0f83b0700b6ccc349e6069"
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

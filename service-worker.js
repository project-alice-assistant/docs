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
    "revision": "a5c5360bf363bcd560090eb216491034"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "a43f31892cc97178893e7d10b6cfef3e"
  },
  {
    "url": "about-alice/index.html",
    "revision": "0b65c03d368315ece40643a7060f3210"
  },
  {
    "url": "assets/css/0.styles.cf949116.css",
    "revision": "bb9fe9ac43662e5f0143be2ac25984cd"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.9146b40b.js",
    "revision": "ffca0b1279f1d2b1c6ec1f085d5fb2e6"
  },
  {
    "url": "assets/js/11.3734a2f2.js",
    "revision": "2871bae121c194040d9b1b51f8e77996"
  },
  {
    "url": "assets/js/12.58cb0ff3.js",
    "revision": "ce5f11090952006b472f4d32936c9289"
  },
  {
    "url": "assets/js/13.41b53e4f.js",
    "revision": "6ce3cb1bd2cd3c44daebab90f01d1997"
  },
  {
    "url": "assets/js/14.43422507.js",
    "revision": "f8dc61aaf0774ef80ea4db560f626119"
  },
  {
    "url": "assets/js/15.dcdadd88.js",
    "revision": "bc59611c86cbce86890f7cfc4bf0b239"
  },
  {
    "url": "assets/js/16.c3ff5550.js",
    "revision": "6ab76ad0b88510d049e248792d0daf6a"
  },
  {
    "url": "assets/js/17.a3a2dd14.js",
    "revision": "a85802ea80937157bd89d56fa1f27de3"
  },
  {
    "url": "assets/js/18.d6d0b455.js",
    "revision": "aeb0c67bcda41b65a4cfa94cd1db32b2"
  },
  {
    "url": "assets/js/19.b9b0e03e.js",
    "revision": "52f6fbc5aad87125e31347b1ac8340cb"
  },
  {
    "url": "assets/js/2.2fe67e2d.js",
    "revision": "de9cf06e592b29dc5bec825649ce2acf"
  },
  {
    "url": "assets/js/20.2b269d29.js",
    "revision": "c82b1afb604a78652d1ddb14db074339"
  },
  {
    "url": "assets/js/21.a0901bf2.js",
    "revision": "7078e5d471df2f2fc8c51e465b2e9d69"
  },
  {
    "url": "assets/js/22.83d160c2.js",
    "revision": "6164d1633e552296bcfca3b36b2abb34"
  },
  {
    "url": "assets/js/23.0e7f208d.js",
    "revision": "5f229b98c0f06211d889d4fdbb258c2b"
  },
  {
    "url": "assets/js/24.63c4f448.js",
    "revision": "368002423ad3c77013667ffc55f2878b"
  },
  {
    "url": "assets/js/25.58857370.js",
    "revision": "84424d23618df55f609cc53c92b948d0"
  },
  {
    "url": "assets/js/26.6b89c030.js",
    "revision": "8cef5ee68e7a4002ec82c1364aae7552"
  },
  {
    "url": "assets/js/27.cbc5c293.js",
    "revision": "7ad3c3f60396ad7b2eaa41978110c157"
  },
  {
    "url": "assets/js/28.8d27c0b9.js",
    "revision": "e8dd82d068c778f244d0acc12c9f3f0e"
  },
  {
    "url": "assets/js/29.affaacc9.js",
    "revision": "16a85e31227bae81fe5ce7916c6382a2"
  },
  {
    "url": "assets/js/3.577750f2.js",
    "revision": "c00ddd6f28b88f9aabfec986d82164c6"
  },
  {
    "url": "assets/js/30.ad0e732c.js",
    "revision": "27eaa8e57e4422a6edbeb04374a86233"
  },
  {
    "url": "assets/js/31.40e1baed.js",
    "revision": "b5aff55a43321a14dca8459f0feee2d9"
  },
  {
    "url": "assets/js/32.9584e242.js",
    "revision": "98e19b3e0befdefb14972cb175db46d1"
  },
  {
    "url": "assets/js/33.c560b0f9.js",
    "revision": "53e9fc20c0250039e149f4fff317fc76"
  },
  {
    "url": "assets/js/34.bc45c15d.js",
    "revision": "3642a4c3213cca02268ef9b9d9750428"
  },
  {
    "url": "assets/js/35.3dc74fcc.js",
    "revision": "8be8cab15a4df28ad95a79d16d2c0d8e"
  },
  {
    "url": "assets/js/36.a0d766e5.js",
    "revision": "1204c6ec07906aaad1b0b550aba96039"
  },
  {
    "url": "assets/js/37.90f9ac1d.js",
    "revision": "b4235cdadccf6cb60b2be25b7fc43a53"
  },
  {
    "url": "assets/js/38.0c817675.js",
    "revision": "a40b39214a8945fdde3a3ee26cbfc322"
  },
  {
    "url": "assets/js/39.e02499c4.js",
    "revision": "f33bebf71520f64f15c4c1e0aa9973f2"
  },
  {
    "url": "assets/js/4.48bbcb5b.js",
    "revision": "f00bb6a131b77b15b80b873c03073825"
  },
  {
    "url": "assets/js/40.3ce67363.js",
    "revision": "cba677e92cfffeebfbda120bd0fa0982"
  },
  {
    "url": "assets/js/41.42c250f7.js",
    "revision": "7cec3b20c4f3e565d6f31aa2d93fe6d7"
  },
  {
    "url": "assets/js/42.b0a06b75.js",
    "revision": "29a1c6032d2049bd449fd1a45fd69b43"
  },
  {
    "url": "assets/js/43.785ab457.js",
    "revision": "364fc167a1f206da91278ad530a72182"
  },
  {
    "url": "assets/js/44.f77bc412.js",
    "revision": "8828b94bcec3c0507f402a597fccb856"
  },
  {
    "url": "assets/js/45.69f76adf.js",
    "revision": "3af6044e91efde86174bfa5bb18a8fdd"
  },
  {
    "url": "assets/js/46.40e50e66.js",
    "revision": "2373980e5cbb978741a656e0d88ec905"
  },
  {
    "url": "assets/js/47.a2fc062f.js",
    "revision": "22335ee29617f8919657b7edb40f556f"
  },
  {
    "url": "assets/js/48.66af2d4e.js",
    "revision": "b475f10e04b6f6373d27263830a111b7"
  },
  {
    "url": "assets/js/49.d101f03a.js",
    "revision": "31edfca3dc3e9fbf1d7f7a8f3aa920d4"
  },
  {
    "url": "assets/js/5.a8fc5396.js",
    "revision": "8b8d611ed48874afe203dec5d807656a"
  },
  {
    "url": "assets/js/50.8ea21e69.js",
    "revision": "9be6d487a17d2793de16cb0ba3eccec5"
  },
  {
    "url": "assets/js/51.37023368.js",
    "revision": "c1693afedfc88b4328e98e15eb4eca26"
  },
  {
    "url": "assets/js/52.90138de6.js",
    "revision": "2b874c52017c9c4b2f46bc48b718399d"
  },
  {
    "url": "assets/js/53.ef861fd1.js",
    "revision": "dcdd36c21993d41d4106acf35c17ab62"
  },
  {
    "url": "assets/js/54.0a7a5a5e.js",
    "revision": "63d8ececee47d73d8d722bf8c93f1e3f"
  },
  {
    "url": "assets/js/55.e2a4c1b0.js",
    "revision": "a29e958bcb8ec17b4b3b88e3e00570c3"
  },
  {
    "url": "assets/js/56.5d50130b.js",
    "revision": "c69883384fc12730e286a720506950f5"
  },
  {
    "url": "assets/js/57.f0b8cbf1.js",
    "revision": "f6a4cb0c353b8050e37d27f8f4902a42"
  },
  {
    "url": "assets/js/58.6c79c54c.js",
    "revision": "ca15d13a4367c9e021cf6be5b6c05700"
  },
  {
    "url": "assets/js/59.a34daa3b.js",
    "revision": "255a39da15cfe760b337f776b8d71f85"
  },
  {
    "url": "assets/js/6.d7100685.js",
    "revision": "e176e2ce1d41ca0cde21273040cd1fb3"
  },
  {
    "url": "assets/js/60.b5c3c730.js",
    "revision": "106c5dfe5fbc26bdbaf843ff038425de"
  },
  {
    "url": "assets/js/61.85963da3.js",
    "revision": "e00fb3419e47e03ffa3d601fd7054a5c"
  },
  {
    "url": "assets/js/62.9ba56430.js",
    "revision": "bcc5109309e7b6fabf6923938bd78239"
  },
  {
    "url": "assets/js/63.c3d637e8.js",
    "revision": "85fb3ba631daabfb665cc8b4e82a471b"
  },
  {
    "url": "assets/js/64.6fe20139.js",
    "revision": "5f80b5bf319a41ea1cbc5a6c42f0ea04"
  },
  {
    "url": "assets/js/65.410d9f0a.js",
    "revision": "27d983c09105214f84364c1ce4e52375"
  },
  {
    "url": "assets/js/66.916ed7e0.js",
    "revision": "518a5033a0c2c88a5ebde3b7bb9852f7"
  },
  {
    "url": "assets/js/67.ee11ef7c.js",
    "revision": "0f5277ca71eb707cbd556de7781a03f4"
  },
  {
    "url": "assets/js/68.648f40bc.js",
    "revision": "ae97be6fbc3eb922ccba50f7032e1020"
  },
  {
    "url": "assets/js/69.dd757cd9.js",
    "revision": "8dff37ef095c2639f9a634928deee4d0"
  },
  {
    "url": "assets/js/7.d8fbe474.js",
    "revision": "16695003abb073938af61b04d4d69f34"
  },
  {
    "url": "assets/js/70.fece0074.js",
    "revision": "2b56c9d9fd2850e7de44c0cb56aa398e"
  },
  {
    "url": "assets/js/71.0e511921.js",
    "revision": "983aa3bbfeffbbe7dbd99516fd73c663"
  },
  {
    "url": "assets/js/72.42df3e41.js",
    "revision": "f02180c17a73d9aa860d783668b37c2c"
  },
  {
    "url": "assets/js/73.0126ae09.js",
    "revision": "a95fc8ef4c0cf5b7542be6e85d4ff30c"
  },
  {
    "url": "assets/js/74.0b01e263.js",
    "revision": "5f96a69362e9a8e24cf09f8c0e0c5f52"
  },
  {
    "url": "assets/js/75.3db3bab4.js",
    "revision": "3b970f1a49f8678e610db779dac9d56d"
  },
  {
    "url": "assets/js/76.8b71c6f7.js",
    "revision": "444f07d8aa7dea4b8aeeee11f220cfb7"
  },
  {
    "url": "assets/js/77.eb79270a.js",
    "revision": "9717e069046148343e593923be0d9e9f"
  },
  {
    "url": "assets/js/78.0bd9faa3.js",
    "revision": "f24867c58922bb29f83451d108762376"
  },
  {
    "url": "assets/js/79.a15ecf35.js",
    "revision": "ffccb807be1a43307c7fc1e757f0b21f"
  },
  {
    "url": "assets/js/8.b2af3836.js",
    "revision": "3ae989112c31e72abd8476b55966e07c"
  },
  {
    "url": "assets/js/80.b0eb8088.js",
    "revision": "5289c450f0a13fa3e7842098438fe9a2"
  },
  {
    "url": "assets/js/81.5a21d650.js",
    "revision": "a6d746d5d8303b429687a60af8373b6e"
  },
  {
    "url": "assets/js/82.5ac6c471.js",
    "revision": "7da19229a69d143cb9627bfca0d58f9e"
  },
  {
    "url": "assets/js/83.9ba86c66.js",
    "revision": "1335803891cdf3da172901885cb060dc"
  },
  {
    "url": "assets/js/84.55c988ce.js",
    "revision": "85ca2f6f575c69f68f2920c10720fa58"
  },
  {
    "url": "assets/js/85.ea4187dd.js",
    "revision": "3931824c80b78f3fe98a138055148d18"
  },
  {
    "url": "assets/js/86.c01a7530.js",
    "revision": "19039fdbe5a2ca2218284c512ed178f3"
  },
  {
    "url": "assets/js/87.58da5c86.js",
    "revision": "abc9c48999eafc9034b361ac554101f4"
  },
  {
    "url": "assets/js/88.f358622d.js",
    "revision": "5885ae3d8508683f1115d40a3e9f7f34"
  },
  {
    "url": "assets/js/89.16d7201f.js",
    "revision": "ad08886fc2de3ec335f127777201710a"
  },
  {
    "url": "assets/js/9.d0c8d246.js",
    "revision": "68c24e43200aaac2738b5babbff41fa0"
  },
  {
    "url": "assets/js/90.efca64fa.js",
    "revision": "f55202d874304a7d7b9a0f7aa2dc6b14"
  },
  {
    "url": "assets/js/91.8acfecf0.js",
    "revision": "49325b242860f7de2fa255504e02dd35"
  },
  {
    "url": "assets/js/92.e709239e.js",
    "revision": "4f71750b214c0aff323fb4b3bd1cb83c"
  },
  {
    "url": "assets/js/93.c124831b.js",
    "revision": "2ea15200d4c0c2d4e8dbcbb090db1be0"
  },
  {
    "url": "assets/js/app.45400aff.js",
    "revision": "f48a3f8521ee3978148358773c2d2782"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "73b316bfeda62e562b227ef231440e38"
  },
  {
    "url": "community-made/index.html",
    "revision": "793b5e98ea125d91abb6a8e6ce41e184"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "22b302b4421c59d708e3dc8e4e582a6d"
  },
  {
    "url": "contribute/index.html",
    "revision": "4a8324b30debd12b044242e21eeac959"
  },
  {
    "url": "core-development/index.html",
    "revision": "8e016f760554944378ddd2d66754ff96"
  },
  {
    "url": "css/disclaimer.css",
    "revision": "844a197e89836e6672dab3c8e86e6e55"
  },
  {
    "url": "css/landingPage.css",
    "revision": "206725d352402d40d1c0461584058566"
  },
  {
    "url": "css/speechbubbles.css",
    "revision": "67e52265c4cfe9ae61192f7bd43632d4"
  },
  {
    "url": "de/about-alice/GLOSSARY.html",
    "revision": "a6395be08fb57f6cb47557f037f6cc6d"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "d13974fde63e2b8bbc6f721e81c46f43"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "043800dd2c3e2a7536e2c6b93b431f5a"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "f661d543bd3ac3462186d94695ac834e"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "3efedbf741f5545479cf3de9febb5cf2"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "336ef8fe84b5c8ade56e4fc3f5566df4"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "884aa07d425e21cc2ad00b2a8f25bc05"
  },
  {
    "url": "de/index.html",
    "revision": "c3b673ba3e3881000517190ed778c2f1"
  },
  {
    "url": "de/links/index.html",
    "revision": "7089c34ba4838f2695c5361556f2f613"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "aa1a4386af575ec2af41199124869716"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "57da58b60348cff42d1f8655560b79a1"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "5dec24691b87dada5ff5f3df85d61b13"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "1f5a5a68b5ee8b49916561fb0fd18a80"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "92e038461dc0f2717b61288567c9b530"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "027cca348df96877f1f2fe9bfb989432"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "8a58933e1429e88d4eb065894ce572ac"
  },
  {
    "url": "de/setup/index.html",
    "revision": "9ef5b46d12a7e6a13e289c1a49f3f376"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "e5bfd9155c9631226686150523aae6e6"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "68c1186b49f53bbc44d4e532f905ab31"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "16c9664f8c20793e8417123208b2822e"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "ff96bc2141fecfc92624904a4f906fff"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "d7b163096c5056a11dbbc02e675f6ff9"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "5a44d3a8e7cc87647d94eb8473183363"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "e5de10fb149a3f132feeea7ab1428d77"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "f2e12f8aac69515d45ef50914b31fa0c"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "440a186ef9479ccad09e21c9db027a94"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "6d5bc89adaba59c44b68f3e8bd015a11"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "a9581d1ef9ef67dd07ba4745c342dcc0"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "8bb6a14e0bb2599a61cd82fa662191d2"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "195c26b289f750ec043d64f0f64338b8"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "9cc70ce9b65d310f3ffeb85491d6dabf"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "988dc23149d63b18b027dce7ad227412"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "bbe804d29cf131c7de4d91131e44373b"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "41929cf2f3542286d6834576e37c0b39"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "c583ce79b7f25b3483d3b25e386afc50"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "9e4b133fe03591b0befb7cc25e1c8b91"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "c1ba58cd4d55d9b096c2a3c9e9893d86"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "97190932d29f4c72e410276806cc607d"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "ef9ce405d310f2078ba740bd6ef4844e"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "1bf3e41b50f827c2cda5e37d20e2f518"
  },
  {
    "url": "de/usage/index.html",
    "revision": "8fa567d82b0ec5deb87ed1e266052472"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "5de41f25b72c9061e7de8d6112d4d2e8"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "c8c6453a8dab7544b1cf8773126e6e1d"
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
    "url": "index.html",
    "revision": "98daa3887d83fb87f230d8818fe9cfb3"
  },
  {
    "url": "links/index.html",
    "revision": "5e00dd34d019e475d067d14eeef31a45"
  },
  {
    "url": "satsetup/index.html",
    "revision": "8bf4d8207f6fd514778e90bfc7936bf2"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "526cea1070043607a5f1e6910ec86503"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "016785eadc804d4f4c498d8d699c0c08"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "d558ad501d41ec9ff24344b9e9666a7e"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "99934dc08138788e53af481c0378b6f8"
  },
  {
    "url": "setup/docker.html",
    "revision": "e42b9b078ad00a2784f41075525b6fd2"
  },
  {
    "url": "setup/image-install.html",
    "revision": "4c8f1d956ad31ee623606c9ea2593052"
  },
  {
    "url": "setup/index.html",
    "revision": "f27f5403e05d1f053018ee34bec9f280"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "b2e0555324f6ee582c242c5c3329158b"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "df29ec2d7445965c91ab9905c3516334"
  },
  {
    "url": "setup/requirements.html",
    "revision": "9f938c6b91d53614a9aaf490958b4110"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "1a47ea75f367c2a33f93f94d1dd8f45e"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "4a56373bfd128f74966268e12c64d5eb"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "8d62e133681030228d7901a7a40bc6b6"
  },
  {
    "url": "skill-development/builtin-intents.html",
    "revision": "40762aefc6666d9d8047170c5bc4fc7b"
  },
  {
    "url": "skill-development/builtin-slots.html",
    "revision": "92253e89e950b9a043e2e7fa2cdc9530"
  },
  {
    "url": "skill-development/database-access.html",
    "revision": "3815a975d927e2800827995d00b74e80"
  },
  {
    "url": "skill-development/dialog-template.html",
    "revision": "c5548840876d0bfbc8e3d85e4d94b478"
  },
  {
    "url": "skill-development/events.html",
    "revision": "86394f59faa6c06ddcfc82acaf796759"
  },
  {
    "url": "skill-development/index.html",
    "revision": "5d3b641ee49fe6977b6a76a61cfcc4da"
  },
  {
    "url": "skill-development/logging.html",
    "revision": "72ed93e13b5a168b816239944e271265"
  },
  {
    "url": "skill-development/missing-slot-info.html",
    "revision": "3671f63b17f529187a9fdcce33a28c26"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "615205c2438d2e26a57bae5c82b85699"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "e27977c53cd8e1e75f8b21ff568e384b"
  },
  {
    "url": "skill-development/room-configuration.html",
    "revision": "c9d1d05786e88af7d510e34cea08e509"
  },
  {
    "url": "skill-development/skill-configuration-file.html",
    "revision": "6f540da6c93df8b884e716e3d8f26170"
  },
  {
    "url": "skill-development/skill-download-suggestion.html",
    "revision": "d065a902bdae1eb2cb2e834e7a82caec"
  },
  {
    "url": "skill-development/talk-file.html",
    "revision": "6e353888b7b1e8f75a9d77cc240a748b"
  },
  {
    "url": "skill-development/widgets.html",
    "revision": "122d2ba3cf7474f9dcc22d6d81e08ea9"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "572b312b754791922131a9f22cce6a88"
  },
  {
    "url": "sponsors/index.html",
    "revision": "6d501bd2486a008911c8a7d2a00bd20d"
  },
  {
    "url": "usage/index.html",
    "revision": "013c031c98b695c5c8c135dc9f867041"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "b4fbb2066c859a8dfb536671f2ced06b"
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

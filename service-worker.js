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
    "revision": "2749d7a2b9f75a5ab15d5c63ba2bf22d"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "238a2738245037ca78d7470a9d249be2"
  },
  {
    "url": "about-alice/index.html",
    "revision": "12527df0b198966fb698a1debb383dfe"
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
    "url": "assets/js/10.62a2ba49.js",
    "revision": "9d68f7a7d82701c9885d1028e475855c"
  },
  {
    "url": "assets/js/11.640e088b.js",
    "revision": "2d3a6a3b4178cd4b70a654b91ac97f59"
  },
  {
    "url": "assets/js/12.03f08cdc.js",
    "revision": "06b7cdcb24dea1131ccf1d1e24faf030"
  },
  {
    "url": "assets/js/13.c1b3ee2e.js",
    "revision": "b02fc08cb7b5d35427f0bed1b9cef856"
  },
  {
    "url": "assets/js/14.98f6c838.js",
    "revision": "992f135f1e179b222f236fd04aded2fa"
  },
  {
    "url": "assets/js/15.9dff089b.js",
    "revision": "edc0e1a3c3cf01583da58ddf280e7a2f"
  },
  {
    "url": "assets/js/16.bdce3915.js",
    "revision": "8f8241782fd4590dec80f5c37c9aa1c6"
  },
  {
    "url": "assets/js/17.d96269dd.js",
    "revision": "377c03443d483b8b0d720c4771b8f737"
  },
  {
    "url": "assets/js/18.3c90cd1e.js",
    "revision": "ddb4377f2d9d973a69050a6967bb1d19"
  },
  {
    "url": "assets/js/19.cda5d53c.js",
    "revision": "602f2bb8fa3ee689f40b803e2dbfce13"
  },
  {
    "url": "assets/js/2.7618d9b8.js",
    "revision": "4d4a0bec184b02e03c1d11c1c81e5db6"
  },
  {
    "url": "assets/js/20.48ee452a.js",
    "revision": "39a9e0fd67ff080578655edef6e1d485"
  },
  {
    "url": "assets/js/21.c2a3f9b5.js",
    "revision": "87fce5becb4972a16d7d0c98407b0b6c"
  },
  {
    "url": "assets/js/22.8f02fbae.js",
    "revision": "bda884fe5e14173635a0a553bfe2b919"
  },
  {
    "url": "assets/js/23.948345f3.js",
    "revision": "b839f358a956f7d0a999c8b69b5b9cca"
  },
  {
    "url": "assets/js/24.3320e9b5.js",
    "revision": "fb13bf57c5fb09f923d5e545dcb02bce"
  },
  {
    "url": "assets/js/25.13ee95ec.js",
    "revision": "ef5be9b4f8a76d7e012dea72775621de"
  },
  {
    "url": "assets/js/26.de6288be.js",
    "revision": "5deff4c8b720bab7d62007abb940a9b0"
  },
  {
    "url": "assets/js/27.7b49c818.js",
    "revision": "6253026d4dfe9467d83c0514c8a4d4da"
  },
  {
    "url": "assets/js/28.88865872.js",
    "revision": "41bea3c518261ec580f3f622f74013da"
  },
  {
    "url": "assets/js/29.93ed6ad2.js",
    "revision": "a82a6a01d7b32fb36932cbb8cc71de06"
  },
  {
    "url": "assets/js/3.1e6cb6f7.js",
    "revision": "17d3fa7f9d6c41017d617fd7cfe00a20"
  },
  {
    "url": "assets/js/30.75e2fe6d.js",
    "revision": "b2cbd6a61592347b67e4e59b9999720c"
  },
  {
    "url": "assets/js/31.356f5be3.js",
    "revision": "0eb33edaa53ae7615103ab90641dec9d"
  },
  {
    "url": "assets/js/32.3ab56b3a.js",
    "revision": "0a99f756bc84b9e1ccfcdab02a025365"
  },
  {
    "url": "assets/js/33.53a829e3.js",
    "revision": "ed245e1eed37b2ecf8587014b726fd26"
  },
  {
    "url": "assets/js/34.31bc62e3.js",
    "revision": "73b331deb5ce80f321347e3d7bb6d7b6"
  },
  {
    "url": "assets/js/35.6de71710.js",
    "revision": "3f81bc4ed06179de0a43848ef8f1d685"
  },
  {
    "url": "assets/js/36.874a71ec.js",
    "revision": "0e1e757f22d9e2e2dddf51e8c35cea45"
  },
  {
    "url": "assets/js/37.d2666781.js",
    "revision": "b9825fc706a158fe42018a03a049e6e2"
  },
  {
    "url": "assets/js/38.68e9fd35.js",
    "revision": "c6a85fc95599db2d6717c23cd59b4637"
  },
  {
    "url": "assets/js/39.62f276d4.js",
    "revision": "f33a601db78cbd04f5d84ada4ef4d332"
  },
  {
    "url": "assets/js/4.6d6c5390.js",
    "revision": "8c0b6a0a580ef540f27482b1572e4c26"
  },
  {
    "url": "assets/js/40.09c472bb.js",
    "revision": "204097936322f975f8ee4cab8e7c8e3e"
  },
  {
    "url": "assets/js/41.e27294f4.js",
    "revision": "525b8344efc29e5140f87f4e330288eb"
  },
  {
    "url": "assets/js/42.692d6cb9.js",
    "revision": "5a559d55a09555634d6c2c57619b9e9f"
  },
  {
    "url": "assets/js/43.360b7f46.js",
    "revision": "757fec20b130a1f957a9ef4d0a327d36"
  },
  {
    "url": "assets/js/44.56261539.js",
    "revision": "ab51bf332dc84a1a6526de1589e339c5"
  },
  {
    "url": "assets/js/45.ab0d6453.js",
    "revision": "ba77572f202f33b78278fe62fb5074d3"
  },
  {
    "url": "assets/js/46.09e82ab7.js",
    "revision": "a319f536306cafb3fe0bcdb07febbe35"
  },
  {
    "url": "assets/js/47.bd243bbc.js",
    "revision": "3bb9a0f2fcf956e319e0014e2de1df37"
  },
  {
    "url": "assets/js/48.b0512dd8.js",
    "revision": "eb62a88e0a25e05df0e43cf04ebf8e04"
  },
  {
    "url": "assets/js/49.6418558a.js",
    "revision": "526e9bb5c24aad4b21baf362c4517c90"
  },
  {
    "url": "assets/js/5.575cb635.js",
    "revision": "c5c9a2f80381a488cadba2a5c3538542"
  },
  {
    "url": "assets/js/50.c88c9abc.js",
    "revision": "6b2950973ab6a0e6d1f3843a026a64cb"
  },
  {
    "url": "assets/js/51.8cae1364.js",
    "revision": "d1dd9e773dd321821d8eff5750be30cd"
  },
  {
    "url": "assets/js/52.3b301239.js",
    "revision": "3ff2c3c84fb4162c36fcf2913ab7f4a4"
  },
  {
    "url": "assets/js/53.f2e52566.js",
    "revision": "8072854eecc12841d79efd087ccea40d"
  },
  {
    "url": "assets/js/54.c0214e19.js",
    "revision": "d558782d4becf9d5bd169b4eb210d5bd"
  },
  {
    "url": "assets/js/55.c3f54cb2.js",
    "revision": "a61b11b03d8ca95af9d7c2faaef703e3"
  },
  {
    "url": "assets/js/56.39a1a85b.js",
    "revision": "d045e34a3838b6f0e9902c57a8997fc6"
  },
  {
    "url": "assets/js/57.614e2665.js",
    "revision": "609d385ac6b6587b1e4a9e39c0151524"
  },
  {
    "url": "assets/js/58.18ea7d11.js",
    "revision": "ad7cfa148f69bbf3c52b2de86fb63b3f"
  },
  {
    "url": "assets/js/59.7ee29556.js",
    "revision": "f5a30bc9229fbfad2bbf648081309d35"
  },
  {
    "url": "assets/js/6.331cba85.js",
    "revision": "5bad5c8265c21f674b4532da4d5de6a8"
  },
  {
    "url": "assets/js/60.5f75e059.js",
    "revision": "6ed1fee6595e50e4ebd6ba8f892f47e3"
  },
  {
    "url": "assets/js/61.85d28e0c.js",
    "revision": "e225777745af2f050797c0f212ea85c9"
  },
  {
    "url": "assets/js/62.5870af76.js",
    "revision": "77ae14c7ed901e7c9707173021ae8ea0"
  },
  {
    "url": "assets/js/63.0e648f9b.js",
    "revision": "2594e3d9fecc74e3851e37f300b56da9"
  },
  {
    "url": "assets/js/64.86d73d7e.js",
    "revision": "79fd1727cdf95c9501fce0271b650d15"
  },
  {
    "url": "assets/js/65.1a37cd4b.js",
    "revision": "f17f18413aab5ed8da4c81509cc50eba"
  },
  {
    "url": "assets/js/66.a62affcb.js",
    "revision": "6cdd49ddac019b32a9405676e9b066a1"
  },
  {
    "url": "assets/js/67.f1b2b5f8.js",
    "revision": "d68201d7dbeb946593e2a62be0404a93"
  },
  {
    "url": "assets/js/68.db6bc0f4.js",
    "revision": "2ba8c18035cbd226e4093a083d3f331e"
  },
  {
    "url": "assets/js/69.cd946d81.js",
    "revision": "80beef87d904eba8346509facc5a3882"
  },
  {
    "url": "assets/js/7.6cb00d9d.js",
    "revision": "82c7eee19ca3c8f8ce5a3471ac55eed9"
  },
  {
    "url": "assets/js/70.e8213af9.js",
    "revision": "d7fb8e24a0ec7136307f7f7bbce475c2"
  },
  {
    "url": "assets/js/71.34cba492.js",
    "revision": "1a86da32c93af222883340609c3e75d6"
  },
  {
    "url": "assets/js/72.03b459f4.js",
    "revision": "7fad5162e2bc50f0448c7d3919496dde"
  },
  {
    "url": "assets/js/73.5749def3.js",
    "revision": "d4e856de78d1ac3349d2b93de420fbbd"
  },
  {
    "url": "assets/js/74.e2f06566.js",
    "revision": "5e6a1167b7a119aeef18c47c90ab59d4"
  },
  {
    "url": "assets/js/75.77aa17c1.js",
    "revision": "c66aa1578ca17ed9120bbdfe37e6df0b"
  },
  {
    "url": "assets/js/76.4c9f46d7.js",
    "revision": "9a95934cf028b79880e4cdc886660499"
  },
  {
    "url": "assets/js/77.9e7aeb51.js",
    "revision": "8f51150752134dedc34424d0f090bc1d"
  },
  {
    "url": "assets/js/78.f80fb40e.js",
    "revision": "85fbb576c18d1eca26cddd196a82d9ec"
  },
  {
    "url": "assets/js/79.dce7d163.js",
    "revision": "3a3a788803411853a9c19f94b03ed989"
  },
  {
    "url": "assets/js/8.18c7f2dd.js",
    "revision": "7e8564fe21196e605e3ea7eac4f40429"
  },
  {
    "url": "assets/js/80.dbc5ab0c.js",
    "revision": "ac4f348bfa7948225c4c6e5d032a1f8e"
  },
  {
    "url": "assets/js/81.f200575c.js",
    "revision": "700891e2e4975b23558392f40c20e29d"
  },
  {
    "url": "assets/js/82.9550869f.js",
    "revision": "44d31a2c5e1ba989d8e591df47540a18"
  },
  {
    "url": "assets/js/83.9415959a.js",
    "revision": "0a71dbe0a9ce93c13ab57e547f73bb28"
  },
  {
    "url": "assets/js/84.6740a101.js",
    "revision": "0dc4a088889512e23b03f3b2fe015bc2"
  },
  {
    "url": "assets/js/85.0ff27d57.js",
    "revision": "f423f40355f782683b9353c14ed67d75"
  },
  {
    "url": "assets/js/86.92be6c13.js",
    "revision": "80a41db00e0bc78f6ba2e73140ee69d8"
  },
  {
    "url": "assets/js/87.27fb0e05.js",
    "revision": "e047e26c06996a6bd1fe13a8d18fa1fd"
  },
  {
    "url": "assets/js/88.32303b4b.js",
    "revision": "dcca9d7e90b79a3450acc3a2f68b33eb"
  },
  {
    "url": "assets/js/89.b6f23756.js",
    "revision": "922e1d7d0dd728cd02217559cf41ecad"
  },
  {
    "url": "assets/js/9.cc4efd27.js",
    "revision": "86657ba587722c0fccf207719a406d56"
  },
  {
    "url": "assets/js/90.7a985b83.js",
    "revision": "b5342459cd45ede803398967bcf2ce51"
  },
  {
    "url": "assets/js/app.80e568e5.js",
    "revision": "d401a39ec5edb94002b3dd2ac74500a2"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "14b6691b5c6d7650263c3e3996e9e7cd"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "1541f63f604b3ed8e8c7cc5282570010"
  },
  {
    "url": "community-made/index.html",
    "revision": "ab14b32aa6c857e0b84731200ebdecd3"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "1a7f35ffa1fc9ab3c0df0779ce003ed3"
  },
  {
    "url": "contribute/index.html",
    "revision": "88f50910cd11db095d0a9c644115d1cf"
  },
  {
    "url": "core-development/index.html",
    "revision": "b677f34f452ebb4f8f3bc96cf346eeec"
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
    "revision": "e0e1dfae334bbe4247039ebe6b539bea"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "c5b7809372cfd8e9386b42a40a742b95"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "965c9244c3eb678eca6bd7222e3b1784"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "9bf005fe732916362730f89fff6554bf"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "18abb9afda35f065bdaf2480a7b03ae7"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "3f3ea685058c0b7db885a8b8fbd29537"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "3fa88f44ae19bf9a11e66c6a278fa30a"
  },
  {
    "url": "de/index.html",
    "revision": "681f7d68dc98b61bb6abc40ebb1722c4"
  },
  {
    "url": "de/links/index.html",
    "revision": "46680f484c1a602d7c0f3038bf34171b"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "b051a49156f24e285e89c43f0b206b2d"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "fc9d70ef62b5bae35c0cac171b11cddd"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "fae74d666eaad910e77ad2844cd4aceb"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "f4a64f500b00e2b1dfd461681b42eee4"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "0f8f68f969b21fad09a107b033fbad9d"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "18ce4e4eb1a2172d15a85fd149faa01f"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "91b9bae3594ebd6410603c5e3aafa94a"
  },
  {
    "url": "de/setup/index.html",
    "revision": "a91f22a1ca53a202b71268021bc66c79"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "6fba72f56d974bcc14b7d5ef39d2a375"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "e2950a6f1e3ecc8e31814448b8ccf11e"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "831f03937cd0fcf9e7c62c533f10375c"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "9c56adb2dbdaa9e0aa6e9b8426fccada"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "0ab03ec52d559d06835361b2e84b4e18"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "c10d38d1d50c6b27f65fd28d69fd1ce0"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "aaa059cbe7da947c7617460a9babfc66"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "93ed448a5b1b5b2e9192f9580f43f636"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "89cee25cfd830ee4e6058227559baf7d"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "fb041b05ada3756894cd10e97dbf3f55"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "dc52245aa0fd66c76c2412a101ba1360"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "64bc05aad011e25a5abbf85c2e075d65"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "df23abe25064deafbf8291275daedafc"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "18460758d4e6a4b88fad666624d8e5dc"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "f7cae25fbe41de532b9f03f8deb963df"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "1b1a672b6482533abb1bd1a37999ba89"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "2b5255c74afa63befc7b34475a4e2450"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "ba078e01b5756d9be8b488c72c4465b8"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "bf5b8c27def03e01e8d23d60adae4ab3"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "3e9f9684dfe4eb7cca1e8f4b66431656"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "600950b2be31290609a37831a5d0178b"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "7c63d8281fa53755305e645edba819db"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "35474ca2b4e20a753893ee7245e72560"
  },
  {
    "url": "de/usage/index.html",
    "revision": "99160f93b8287ce748c2d58927d4c72f"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "b867ea2e63fe0c5751147924dc94cfb2"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "049d29c751110dea2bfe4bb8272e09d6"
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
    "revision": "e03addaba8ecae61a40123abb69b1ca9"
  },
  {
    "url": "links/index.html",
    "revision": "bb753396cb0b78d3a3124689786a6923"
  },
  {
    "url": "satsetup/index.html",
    "revision": "eb406ce7c79a079e23b81172cabd4c29"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "b86623c5ac0a52fcf86451aa23bc0930"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "a0417babbe3d7b04d9460c36deaa0c6e"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "81d055653fdf14edd7a4e8020e8470f2"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "ccfa231ac51461417ce06b4fe5f6acbc"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "4f6c0a7197c7197504d47c74a45e1f5d"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "a6ab50e4560eda6fe9b20826cc35f487"
  },
  {
    "url": "setup/docker.html",
    "revision": "003c94929c4e4d3f58b3dec8bbad5141"
  },
  {
    "url": "setup/image-install.html",
    "revision": "2112d16b83ba54e6d38c45fe88ff9c10"
  },
  {
    "url": "setup/index.html",
    "revision": "b444b719eb1a9bc49c712929211c7546"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "24ab2b5dc242aba04aa558d055e5c134"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "acb90c822c6c9d32d35fa652967d2280"
  },
  {
    "url": "setup/requirements.html",
    "revision": "360d3e6c07bfe312c94172079e8bbd17"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "ae9fe302e6d62651b1f02cf0c4b1c765"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "684c3a1d93d3df84b749a680c66808f2"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "ae2571394b988bafe26bb44861d27894"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "02e4610b1a6b637f1f07849f2064d9c8"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "e5f50cad260239b05fda7262cd800227"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "580c852c7860ade8ac0608864fb72825"
  },
  {
    "url": "skill-development/index.html",
    "revision": "ebaa8b69eebd6b1d740a74e5783b6680"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "bae5a2eabdfa20cf5f71ac063d45eda9"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "d3284a4bb49864d693108343cb28c212"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "6b57a2cbdd69aa40dea058c867f9f47c"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "08457f0869dcda6d5b76c1b9ee4c019c"
  },
  {
    "url": "sponsors/index.html",
    "revision": "9a244bd41aef61bea097e27fa33072d0"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "d0af024ec95bec6d1e68941d76f02feb"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "82a4e94aebe9d0576fcb97391816c4ea"
  },
  {
    "url": "usage/index.html",
    "revision": "c3f5af87040f37104d7110fe671dfb3c"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "0a55d8bba4ffe9e9315dfd89751e5418"
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

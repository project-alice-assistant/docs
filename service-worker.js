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
    "revision": "57da7b93ae8c39ecde1eaceb5a039e74"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "3044f70ba3a68acef02fb2beed22d6f7"
  },
  {
    "url": "about-alice/index.html",
    "revision": "4d7c61be66431e5aee90aa7351b9b4ba"
  },
  {
    "url": "assets/css/0.styles.cb822780.css",
    "revision": "4ee3ab852c1c58be7b873cc812f25a78"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.d93e2270.js",
    "revision": "bc80ef2c50ea0159c66079e7fe027ca1"
  },
  {
    "url": "assets/js/11.7054790f.js",
    "revision": "f76e2f872f43709c1f3f7e84bc924fa0"
  },
  {
    "url": "assets/js/12.ed5e81d0.js",
    "revision": "20f853d4096d9c4e110c207181d82f95"
  },
  {
    "url": "assets/js/13.7d18ca85.js",
    "revision": "0a6a13ab43ef68fcb79c36b19a6f69c2"
  },
  {
    "url": "assets/js/14.c1577da4.js",
    "revision": "3643f497b5f26a3d4e3487219918f237"
  },
  {
    "url": "assets/js/15.f30a157d.js",
    "revision": "5d5789a4941f4f612afd0111f4c38ef8"
  },
  {
    "url": "assets/js/16.a1dd82bb.js",
    "revision": "1b1fcdcbad04023e563523b58d045ff7"
  },
  {
    "url": "assets/js/17.bcd384db.js",
    "revision": "060357edcbdf14856042343cb848f2b8"
  },
  {
    "url": "assets/js/18.4926e34a.js",
    "revision": "bf645ca3e9f1496c00820306fae73a60"
  },
  {
    "url": "assets/js/19.d23c275f.js",
    "revision": "4220ea8efaf5e4d8e0f66a8ce3e1a6a0"
  },
  {
    "url": "assets/js/2.4a7a461e.js",
    "revision": "903c278f18e1be855cad211496a68545"
  },
  {
    "url": "assets/js/20.6add65df.js",
    "revision": "4732846e0bf12c2361a1a6e1c61e6a67"
  },
  {
    "url": "assets/js/21.1e69b7ba.js",
    "revision": "72d4729977120aa186b581d7a2aa31cf"
  },
  {
    "url": "assets/js/22.79970c56.js",
    "revision": "b023021393229e52ccd6831e1289e28c"
  },
  {
    "url": "assets/js/23.1a4a9ae5.js",
    "revision": "37002e7fb7320f4dec8a8c7ed5b020ff"
  },
  {
    "url": "assets/js/24.edbea61a.js",
    "revision": "60e34489c42c4f9478f486aa6bd10597"
  },
  {
    "url": "assets/js/25.b0b375fe.js",
    "revision": "cda82961e7a3d9087f479f93f39dbb2a"
  },
  {
    "url": "assets/js/26.8fdd3c1e.js",
    "revision": "2f510575840ad6232423a5ab3f2ffd0e"
  },
  {
    "url": "assets/js/27.8e59f996.js",
    "revision": "f97dba988559de9bef8866e287b2258c"
  },
  {
    "url": "assets/js/28.ced54ac9.js",
    "revision": "1826eff8da851cbf1b38501d3973c6d4"
  },
  {
    "url": "assets/js/29.ad0a5631.js",
    "revision": "9b7cf6bbd28c92b4b74f482139f5b76b"
  },
  {
    "url": "assets/js/3.5911db7f.js",
    "revision": "25744bccc69d9792cf8b789c0644a9df"
  },
  {
    "url": "assets/js/30.e6978804.js",
    "revision": "7686865631e348b7ece96efe7563e256"
  },
  {
    "url": "assets/js/31.d64a0bc7.js",
    "revision": "74b511298dc226b7ea911b21858a25ee"
  },
  {
    "url": "assets/js/32.3feb3bda.js",
    "revision": "8ecb2f413f6d48d117755074a04f0ee5"
  },
  {
    "url": "assets/js/33.8eead436.js",
    "revision": "ab754d87828728589d3b9385fbc86df8"
  },
  {
    "url": "assets/js/34.35b85160.js",
    "revision": "6c3fa8006cf232f255733025d3aaf158"
  },
  {
    "url": "assets/js/35.c5e28198.js",
    "revision": "ffcad2cefaaf7d14efaa369c0c65ed0e"
  },
  {
    "url": "assets/js/36.cedd8c16.js",
    "revision": "d612f9fa7ef1bc58f444023d408ab4bd"
  },
  {
    "url": "assets/js/37.7101ffea.js",
    "revision": "85eeaccbb9e79562a842a8c2627ad084"
  },
  {
    "url": "assets/js/38.1e11d00f.js",
    "revision": "280ff0f7cdc6dec04d81e10f1d21840a"
  },
  {
    "url": "assets/js/39.1cfd1e73.js",
    "revision": "58a34dd2bc3da10e898b2e32c5d1de42"
  },
  {
    "url": "assets/js/4.495f8c31.js",
    "revision": "8e20fd89fe3877e7300cfad6dc2a2098"
  },
  {
    "url": "assets/js/40.d9416e5b.js",
    "revision": "b4d995b459bfab9844d5fcaed7f45bd7"
  },
  {
    "url": "assets/js/41.042a820b.js",
    "revision": "ad5b0e7375ad5f3bcd778fbd6dbf67b8"
  },
  {
    "url": "assets/js/42.e3617e12.js",
    "revision": "ec8bdc4b71bd2f754ea1be8ab76d75ce"
  },
  {
    "url": "assets/js/43.a6b571a3.js",
    "revision": "92f54c8beaa3070a60976391a9e89d1a"
  },
  {
    "url": "assets/js/44.38cac691.js",
    "revision": "35e4c690ce95a54cfb07b86de639555b"
  },
  {
    "url": "assets/js/45.84417ba7.js",
    "revision": "b65c1fb90c43217260fd54ba46b8c036"
  },
  {
    "url": "assets/js/46.6bbba251.js",
    "revision": "8d5f90d9db21131addea2f6ed6f755a2"
  },
  {
    "url": "assets/js/47.b1efca6a.js",
    "revision": "d9560774515f2a20b6470a0602fa361c"
  },
  {
    "url": "assets/js/48.c11830f1.js",
    "revision": "8528ad849c58dd00a8bda91615ca89b5"
  },
  {
    "url": "assets/js/49.3eff9790.js",
    "revision": "c1f713a24289379ad7313f8cc5324f74"
  },
  {
    "url": "assets/js/5.15038fb9.js",
    "revision": "59a9e6a17fcaac9603d27171e01bf597"
  },
  {
    "url": "assets/js/50.3beddae3.js",
    "revision": "e0fa11bad85b2d154d1d5be974e39664"
  },
  {
    "url": "assets/js/51.2928c9d6.js",
    "revision": "41e0771f720b60191a0b89f37b656034"
  },
  {
    "url": "assets/js/52.b324247a.js",
    "revision": "d3be8c640309a0109ad1e60861cf2f7e"
  },
  {
    "url": "assets/js/53.0294b816.js",
    "revision": "bb2f2a33a2e1a6e5c2f8386d58d28ec3"
  },
  {
    "url": "assets/js/54.34089730.js",
    "revision": "08e709a40372bb9277c145873b5cdae2"
  },
  {
    "url": "assets/js/55.38d45a7f.js",
    "revision": "9559bff27887beffff960a456592443c"
  },
  {
    "url": "assets/js/56.4e755d39.js",
    "revision": "e8b8e1d9861063a889b6ef46694524e8"
  },
  {
    "url": "assets/js/57.f2e3a7b0.js",
    "revision": "b7a4a79a836def49aba15ed443071a16"
  },
  {
    "url": "assets/js/58.5b32aa14.js",
    "revision": "c64ef00ffe05f643758b9ecbd17023aa"
  },
  {
    "url": "assets/js/59.87d7ac5c.js",
    "revision": "0feb7f11f794b900047de75693d2172e"
  },
  {
    "url": "assets/js/6.9b8d30e0.js",
    "revision": "ffaed4d10ee1a3102cff1c22a33bf867"
  },
  {
    "url": "assets/js/60.651c5aea.js",
    "revision": "9cc3b995158c3ce11bf5ea14172ad15e"
  },
  {
    "url": "assets/js/61.b6cd52fa.js",
    "revision": "4317f690f4da2280fa23cb697a72b0b9"
  },
  {
    "url": "assets/js/62.7caf4520.js",
    "revision": "a125d0f864e9411b0bf63d17b1cd7e02"
  },
  {
    "url": "assets/js/63.8eda0dc1.js",
    "revision": "d256a7651e8087994608e37e45993a2c"
  },
  {
    "url": "assets/js/64.d091172b.js",
    "revision": "a34dd2393db32eaf2f5d2e397cd40047"
  },
  {
    "url": "assets/js/65.f476cf86.js",
    "revision": "2742801359cf8115a28f115f08a85900"
  },
  {
    "url": "assets/js/66.93b55a86.js",
    "revision": "1cb2920aa67ba4cf84e3da99ba083efa"
  },
  {
    "url": "assets/js/67.999876f4.js",
    "revision": "1b6ccc00c5f142139f46eba81839566f"
  },
  {
    "url": "assets/js/68.dfe753db.js",
    "revision": "69e58bd5f8effb5ce9c7c002ddd2f450"
  },
  {
    "url": "assets/js/69.940d15ff.js",
    "revision": "2060ed8f3b5c9e2987d5a93b99ca5d51"
  },
  {
    "url": "assets/js/7.7832df48.js",
    "revision": "16589014eb396ec1749857491f299499"
  },
  {
    "url": "assets/js/70.523c446c.js",
    "revision": "c7ed0a8b5b5621089327eff4349c6fb9"
  },
  {
    "url": "assets/js/71.25e5190b.js",
    "revision": "739e85e1080e5dbf3c20cef2542d3b3b"
  },
  {
    "url": "assets/js/72.ba4a82dc.js",
    "revision": "647dbb497365925924fb848e00cb7de8"
  },
  {
    "url": "assets/js/73.0cb59d82.js",
    "revision": "c4eaff3f86a6f2448d026b84e4f463d1"
  },
  {
    "url": "assets/js/74.8853084c.js",
    "revision": "507257e122bdc1c7ea109406cc8eb658"
  },
  {
    "url": "assets/js/75.a9613f5a.js",
    "revision": "1d8adcf7afafeeaed0dedda2d2db1ec2"
  },
  {
    "url": "assets/js/76.9a56b6a5.js",
    "revision": "b44e5ebce606f8f77eef418dba388461"
  },
  {
    "url": "assets/js/77.0188c266.js",
    "revision": "efcf4492c7f82a9dbb75ea321424e948"
  },
  {
    "url": "assets/js/78.4d796a9b.js",
    "revision": "2c0b6524e3228758cfecef91d759b578"
  },
  {
    "url": "assets/js/79.7a2c969e.js",
    "revision": "c38aa41e1bf180382e876fc78f8f7405"
  },
  {
    "url": "assets/js/8.20e1289f.js",
    "revision": "1570d1a3b919b6de86d67e6331216dba"
  },
  {
    "url": "assets/js/80.11ce910c.js",
    "revision": "b31d482fe2c977d1175f2f4ba0d5100a"
  },
  {
    "url": "assets/js/81.9c03bad3.js",
    "revision": "f61af86ad4ecf7b86a058448d279da55"
  },
  {
    "url": "assets/js/82.8fd5fdca.js",
    "revision": "ccfdf6a0d3e8a7cb40ab37f1905a5163"
  },
  {
    "url": "assets/js/83.17928be9.js",
    "revision": "5ceb70751b43037e304d86ef4a5b7651"
  },
  {
    "url": "assets/js/84.164b9b1a.js",
    "revision": "f00b4f58fcf61ca8faeaf00964b07471"
  },
  {
    "url": "assets/js/85.0a1fc424.js",
    "revision": "4a8b0a34358bd1a0856babccca1175a3"
  },
  {
    "url": "assets/js/86.5fdf0097.js",
    "revision": "f568611683059eae050bf628fb97ef94"
  },
  {
    "url": "assets/js/87.0dd84981.js",
    "revision": "52099322abdb6bce95396ddf54905275"
  },
  {
    "url": "assets/js/88.259d3f09.js",
    "revision": "c56cbe9733956f19e1696cff76c3d004"
  },
  {
    "url": "assets/js/89.16075fde.js",
    "revision": "ecb7d38c59fbd97574f8cd350e5d9fca"
  },
  {
    "url": "assets/js/9.9f0d7db0.js",
    "revision": "ee3e5e4fdf1c8763135bf9b6eb6cab87"
  },
  {
    "url": "assets/js/90.afc2cb76.js",
    "revision": "121226811132818775e4bbbb19104bb3"
  },
  {
    "url": "assets/js/91.2531c6e3.js",
    "revision": "8231eb1404238ec1557b148992afe083"
  },
  {
    "url": "assets/js/92.0baf2f0e.js",
    "revision": "a81aa0f851cc9b1b80dc491440f2b9d7"
  },
  {
    "url": "assets/js/93.c0707482.js",
    "revision": "c0b7278005bdebd8a5f813cc8ff91bf2"
  },
  {
    "url": "assets/js/app.1a2712f1.js",
    "revision": "a0ef2fcd909a5bdfe1f6355c281637f2"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "5fcfe569c076eb240cd30d2dab356df1"
  },
  {
    "url": "community-made/index.html",
    "revision": "a87f27b5e51fcf162337299057c90e7e"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "6f889b96db25a6d24676558dae819290"
  },
  {
    "url": "contribute/index.html",
    "revision": "d702c1631e81710b847f1835e10e0641"
  },
  {
    "url": "core-development/index.html",
    "revision": "353580c0c47da7a712638b561438ab5e"
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
    "revision": "2b30b8dfa1ebeae08330f93617f957a8"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "ac0f05679a869d5ba5de04b7bb0f84bd"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "9f305b7e4b28123c7b6cbb3e8fbfac0d"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "3f32f8e3d718460f6891f4f86be53053"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "c5a22ab870cee29fe4b8b6c37b4dcf0d"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "26fef9cb0b7e0c0a43a4579e64008411"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "a823c23ec022d434ba5c24d14c58ac17"
  },
  {
    "url": "de/index.html",
    "revision": "f9cd5a7ae567342860fb99da00b0e5aa"
  },
  {
    "url": "de/links/index.html",
    "revision": "1e9d193e3140bf73e2773aedcf0b9dd3"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "9568823f46df1f36c57e4ed1d1477939"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "d88ae7bcf79e0823b13fc24989e71b82"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "91f8d5b412896dc32c48d512353c3036"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "20e6f4529d3d9917e0c473fa1f957a70"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "cc9882a95eda8f017384fb9d84c04890"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "c73a2a2712545b45de39ef8bea02ce05"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "f1057cc40bf6b22ae36e077958c748c8"
  },
  {
    "url": "de/setup/index.html",
    "revision": "fc8ca7744fab78c998fd7dd9978ba56d"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "42fe5457aa8168a6bdc25fceaddb5335"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "5ee472229bce7ddd460c5acffe3f0260"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "410a2971d32631dd510c406cd06039f8"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "d3a292a9fd2d6240409f2b8a66d43b89"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "0e7aeaf639aefa3839a8c6d4112bcd1b"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "69f2ae8d54462a9f068a9c12a59d6db0"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "2d0abdfe17ff5fc26fc6c603c289481a"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "e10be924d49332df821da2b078678afb"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "757ff1caaa969328601fcb1ca2a213e2"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "11f2b8c31e3ab17b7e240fcafeff2540"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "5e60a39005eb1fb0c3c44c94de59f271"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "ae7594553495f717d6630e1121d480e1"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "4e5e36cbedb1de14eebc05b4acd7a103"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "b0ef6f61e56178d8dd00e4b7d573e0c5"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "a163827958536abedfbab0aece877e8d"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "288aacf6189ed24323085d140bff0003"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "1e071be23f7eefb494ee335a46a8ec23"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "91cc10c8823f64144312ed49e2db23e8"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "08ec926977880f7cc845a1f0a5b298cc"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "372452e058f213cf17c7facd0ad076d2"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "cd3a3c76a62131cba72d581bc6b7c1df"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "80200d16f41da49c51a7809e01574bf9"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "23dffaa39a840953fdd70851507cb711"
  },
  {
    "url": "de/usage/index.html",
    "revision": "f183ceaadcc7f1577a24a99016772f05"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "c38dc1b91b5afdd255e78413dde57b60"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "fc627c1623a78ea4e7eec20c76312a19"
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
    "revision": "3042ebcd29dba4354987de22707a298c"
  },
  {
    "url": "links/index.html",
    "revision": "c68a787002a365f4a4710af48106d6c1"
  },
  {
    "url": "satsetup/index.html",
    "revision": "a4273faa5c5d1f1d7fbd326ee09471d5"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "d4893914f3dd6e9546e2b078c8d976ed"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "8bc5fc84c79ea3bb5604a9f1133fd167"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "d0e0700ec4231f1dcd856564db569262"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "3175a2b5492f47ac85bbf10422ec77a6"
  },
  {
    "url": "setup/docker.html",
    "revision": "ffdb9ea224fdfb04dcfe946eb3ba8414"
  },
  {
    "url": "setup/image-install.html",
    "revision": "33f8a478461fb90a226667d2799ec215"
  },
  {
    "url": "setup/index.html",
    "revision": "f309226930110c8e4399a55aeafc6b99"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "d879c871d434e723b63931eb68dc28e7"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "c14816a95eae9cbe0d2020c0a3a00a9f"
  },
  {
    "url": "setup/requirements.html",
    "revision": "554b558620b1f93a95b67980c1a4215a"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "a86fb6fa143cb3d66792fe3c7c5598e7"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "7adb64b1eec6b42e2055f2c174853cf3"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "eb5a4b2093b7bd1347ce38a4a1d8ed09"
  },
  {
    "url": "skill-development/builtin-intents.html",
    "revision": "bbe3016a9e397f8bc1ec469aca6f2d36"
  },
  {
    "url": "skill-development/builtin-slots.html",
    "revision": "0be79363f9f9339887cf27d3af8cbfc0"
  },
  {
    "url": "skill-development/database-access.html",
    "revision": "49a1fc3b23952198e65c6e2880d00372"
  },
  {
    "url": "skill-development/dialog-template.html",
    "revision": "5042a401d9004a2bdf67038c4e9cdd3a"
  },
  {
    "url": "skill-development/events.html",
    "revision": "4fe3be7eec78852342f768f3a01fe28b"
  },
  {
    "url": "skill-development/index.html",
    "revision": "6b06328e5b4658be9535f63091aa24b3"
  },
  {
    "url": "skill-development/logging.html",
    "revision": "12c4e37aa883b4ba665b769d92dcae75"
  },
  {
    "url": "skill-development/missing-slot-info.html",
    "revision": "7a49415fcfb6baef6e1b2c7d19283e1c"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "5b6831bfd49f64f9ac7d67273cdae9dc"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "0728551e584dd270fc753720a0425061"
  },
  {
    "url": "skill-development/room-configuration.html",
    "revision": "4fee45d51933795ef1e741623826c72d"
  },
  {
    "url": "skill-development/skill-configuration-file.html",
    "revision": "032e81cdc121484b4f19a1fe8c518e8a"
  },
  {
    "url": "skill-development/skill-download-suggestion.html",
    "revision": "4198222ae55e913a4ec49dcde23d4276"
  },
  {
    "url": "skill-development/talk-file.html",
    "revision": "e98ff23d0f33979323b558e4e71e5dd5"
  },
  {
    "url": "skill-development/widgets.html",
    "revision": "62a9522f2a67e4d4cfc5ec26774cd546"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "808ba5a624c9a4451b73698707f67240"
  },
  {
    "url": "sponsors/index.html",
    "revision": "c65f731c0518049a731c1aea3568e4a3"
  },
  {
    "url": "usage/index.html",
    "revision": "f6dc3fa39ffa18e3605b53a43aae58ec"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "2f076d2332f5cee888f767ae395ba2a8"
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

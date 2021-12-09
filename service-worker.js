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
    "revision": "2a225314cc6b483ccf2864257748a9cf"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "9abed324ae72853a647bff01ec5e1386"
  },
  {
    "url": "about-alice/index.html",
    "revision": "0aa27214547b5bacec24644669a2155c"
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
    "url": "assets/js/10.f388ef5a.js",
    "revision": "c3cb9a9bc7b8509cdbcf4e0b26ab16e5"
  },
  {
    "url": "assets/js/11.1b04b754.js",
    "revision": "4311d29a580bac38e841057f308d00b0"
  },
  {
    "url": "assets/js/12.683a48ef.js",
    "revision": "5792403638da7f3fef1f3850f7eba2b2"
  },
  {
    "url": "assets/js/13.9b55a5ee.js",
    "revision": "3d272934fa83e92636f8a29e35831941"
  },
  {
    "url": "assets/js/14.0464f894.js",
    "revision": "65ed398feb2e6c25ec0a18cef20459f0"
  },
  {
    "url": "assets/js/15.4fdb7aa0.js",
    "revision": "b276e692754cd1e3b6160bb2d67e51b8"
  },
  {
    "url": "assets/js/16.a0ccdb45.js",
    "revision": "39d4f774f5e5d2bc260017156f276356"
  },
  {
    "url": "assets/js/17.32524eb8.js",
    "revision": "38b737118496322116668825e2f45302"
  },
  {
    "url": "assets/js/18.1aca43ae.js",
    "revision": "0ca6fd4a067e597b52f139efa790f141"
  },
  {
    "url": "assets/js/19.d057d1e7.js",
    "revision": "18e21220efe2aac4e46374cff11e0b72"
  },
  {
    "url": "assets/js/2.059c5ea2.js",
    "revision": "4c4c94dd0c3428d498cd64fa8c82dfeb"
  },
  {
    "url": "assets/js/20.0ea867c8.js",
    "revision": "843fb978c7be8adaf8a9fdc189d7d395"
  },
  {
    "url": "assets/js/21.15fe76eb.js",
    "revision": "134a9b5bbc266aad1245e2c90efa98d9"
  },
  {
    "url": "assets/js/22.2e8b6f97.js",
    "revision": "e0d4ff74b659d25280f89f29fc989c0b"
  },
  {
    "url": "assets/js/23.58782fc6.js",
    "revision": "65edf0c8a4d3a4ea9f078e09ff644dc0"
  },
  {
    "url": "assets/js/24.5b6c268f.js",
    "revision": "01104530301d31f4ed09f93f10f0441d"
  },
  {
    "url": "assets/js/25.f6e0a1eb.js",
    "revision": "27ae77ca6202f7300456a60bf47e5cda"
  },
  {
    "url": "assets/js/26.d2a6e832.js",
    "revision": "a8f0d01e12d2b6043291e7e33b77efb2"
  },
  {
    "url": "assets/js/27.23387132.js",
    "revision": "9038baa931bed610e889b2e6d58b81d7"
  },
  {
    "url": "assets/js/28.0e73a49c.js",
    "revision": "fa642954ac656a874a3a0de87d305bd2"
  },
  {
    "url": "assets/js/29.6c4edd11.js",
    "revision": "00def451d39155b272b63ed8dc8222cc"
  },
  {
    "url": "assets/js/3.5a8ffe93.js",
    "revision": "b1afda933a312caad26805c12690737f"
  },
  {
    "url": "assets/js/30.a83824ef.js",
    "revision": "42aecca3687fc7b5ff8a2ebcb92646e4"
  },
  {
    "url": "assets/js/31.c8c4bc30.js",
    "revision": "f7d93a2a4b4cbfd516e88e52ec1869e5"
  },
  {
    "url": "assets/js/32.8fbad7a6.js",
    "revision": "258cad04d32ba531b60531624d61123d"
  },
  {
    "url": "assets/js/33.e0edd6cb.js",
    "revision": "9bac39a7c7eafe345c27c0b99634957a"
  },
  {
    "url": "assets/js/34.7f694622.js",
    "revision": "6c6932286fa57c66c016bd16072b0b99"
  },
  {
    "url": "assets/js/35.ad99ec03.js",
    "revision": "c00d4f127993b6b02a5cff9d36b1d5f3"
  },
  {
    "url": "assets/js/36.381eda7f.js",
    "revision": "a70cb6848d4ae91cab02a3df6eb61122"
  },
  {
    "url": "assets/js/37.2509e86d.js",
    "revision": "efb96718f31548ef010adef7e8f577c6"
  },
  {
    "url": "assets/js/38.fd794b83.js",
    "revision": "0e4c86d882ef509763661e6ca452418f"
  },
  {
    "url": "assets/js/39.839c9a25.js",
    "revision": "9a7092694cd29daf4667f715394e854f"
  },
  {
    "url": "assets/js/4.6153756a.js",
    "revision": "1515feb3ac62f2a6a2be61c4ee43ee4f"
  },
  {
    "url": "assets/js/40.662fe1c5.js",
    "revision": "788c4a292590851b6d75ed01329715ae"
  },
  {
    "url": "assets/js/41.35d97cff.js",
    "revision": "10e096e1134238a5314bf1a7a3f9eab5"
  },
  {
    "url": "assets/js/42.d23b1a5e.js",
    "revision": "f8949a014d8588a045db0e3b4aa3efa1"
  },
  {
    "url": "assets/js/43.c16371ae.js",
    "revision": "ba4cc6851b835851db7027a4caa3c1d6"
  },
  {
    "url": "assets/js/44.4454243f.js",
    "revision": "8c722e47a9fe823a9b452e3af7dc79f0"
  },
  {
    "url": "assets/js/45.ced07161.js",
    "revision": "3d14bce21ba398cc836f69435e6d2a65"
  },
  {
    "url": "assets/js/46.d22e3cc6.js",
    "revision": "bd600d8554fce444a0c4c18aff985663"
  },
  {
    "url": "assets/js/47.1719ee18.js",
    "revision": "5ebaabecfb6d84c1fcbcade51664f2a6"
  },
  {
    "url": "assets/js/48.ec38e914.js",
    "revision": "afd50c1124759340a8b919efa88f4d8a"
  },
  {
    "url": "assets/js/49.4816a627.js",
    "revision": "8ae8e8c20fd42ae47d1af22780605f62"
  },
  {
    "url": "assets/js/5.87276e10.js",
    "revision": "aa53b09e26a5f77a2bf4066fc458a9b8"
  },
  {
    "url": "assets/js/50.0f05edb2.js",
    "revision": "63df34212289acc9798971acd2d940bb"
  },
  {
    "url": "assets/js/51.aca845df.js",
    "revision": "cbe3c6934e91a9cdb8c2ca81764d7ae1"
  },
  {
    "url": "assets/js/52.18135214.js",
    "revision": "f60732c2076ef6e87bf52d19cafcddf3"
  },
  {
    "url": "assets/js/53.df85001a.js",
    "revision": "0e68b4a723e9bdda66cc5db4fd6df7d1"
  },
  {
    "url": "assets/js/54.24d1905e.js",
    "revision": "d901eb9c321e2806345199d07926a115"
  },
  {
    "url": "assets/js/55.6e0fe8a4.js",
    "revision": "4efc50a81ba268448612f36345219cb4"
  },
  {
    "url": "assets/js/56.12c782f5.js",
    "revision": "14a2381f17eb899edd4e44d73d247274"
  },
  {
    "url": "assets/js/57.60a56f08.js",
    "revision": "62974ef18c71eaef916e1e1f14139cf8"
  },
  {
    "url": "assets/js/58.dac329c5.js",
    "revision": "d9000e4548437cc8f0d7bdfd158abbff"
  },
  {
    "url": "assets/js/59.739e924e.js",
    "revision": "8e58f9fb1567b41fabd64ccae8bb976f"
  },
  {
    "url": "assets/js/6.cb37a884.js",
    "revision": "ccc592a5df7b58181deeaf8b8ea04c0c"
  },
  {
    "url": "assets/js/60.14d71241.js",
    "revision": "dca07da7b712fb339f09917772a8903d"
  },
  {
    "url": "assets/js/61.17b7db59.js",
    "revision": "fc59afe4eb548b210e993115bf98ebd3"
  },
  {
    "url": "assets/js/62.c13414dd.js",
    "revision": "e78a89d854e7cac61f3e2d2abbf198e9"
  },
  {
    "url": "assets/js/63.34500680.js",
    "revision": "35f4651f4139baca563af52c377f2395"
  },
  {
    "url": "assets/js/64.f2186994.js",
    "revision": "2984ad9090663b69bea364a43c8aa0c4"
  },
  {
    "url": "assets/js/65.4b6c13fb.js",
    "revision": "71443fc50e6c5a7e9574b4133ef98451"
  },
  {
    "url": "assets/js/66.f3c243a9.js",
    "revision": "3f5a7c7f05a2af1851980e71974928b6"
  },
  {
    "url": "assets/js/67.bf38f772.js",
    "revision": "6b1afe805a750acc76834401cd43aa1c"
  },
  {
    "url": "assets/js/68.e9e2bbac.js",
    "revision": "5baee83578fd30d8394532c88884109b"
  },
  {
    "url": "assets/js/69.ea435adb.js",
    "revision": "1e60931eb5648a59e69e0389fde11d54"
  },
  {
    "url": "assets/js/7.5cad6a35.js",
    "revision": "86bdf6a45baacb9e1017d5325064e971"
  },
  {
    "url": "assets/js/70.ce289a88.js",
    "revision": "68378b2c6af6ea0f7bd256a5de3e3e87"
  },
  {
    "url": "assets/js/71.7344202d.js",
    "revision": "fd3f6768e44977fbaeab178f1c66181b"
  },
  {
    "url": "assets/js/72.83a20739.js",
    "revision": "377884ccbc5731e26956d87a38998ca8"
  },
  {
    "url": "assets/js/73.8afffdd8.js",
    "revision": "1d38211ccc9dba187d24414667cf7e36"
  },
  {
    "url": "assets/js/74.f56e37ab.js",
    "revision": "8e206199f6f358f4948f57d25ca41619"
  },
  {
    "url": "assets/js/75.49adf6d0.js",
    "revision": "bb5eb6406682abeb0740f10d1488e8c4"
  },
  {
    "url": "assets/js/76.a154cd35.js",
    "revision": "a0878b11be07fcccfc4c9661b4d9d6a2"
  },
  {
    "url": "assets/js/77.81757d8c.js",
    "revision": "12804d8092e10686465dc7153c4e6d55"
  },
  {
    "url": "assets/js/78.58fcc4b0.js",
    "revision": "bcf387a263974ef93aa386330da141ee"
  },
  {
    "url": "assets/js/79.51850458.js",
    "revision": "2d0b5c6d0cf90139d2a03616bed09114"
  },
  {
    "url": "assets/js/8.620bc751.js",
    "revision": "fb1f0d6a2a8134d262f346adfeed1960"
  },
  {
    "url": "assets/js/80.9af43938.js",
    "revision": "e537e80540acce0e1e721320feec981b"
  },
  {
    "url": "assets/js/81.61ace015.js",
    "revision": "9d59465a97e53330add25bc77d523867"
  },
  {
    "url": "assets/js/82.0ffff6f4.js",
    "revision": "725496c57691c95fc3538f4ccc771949"
  },
  {
    "url": "assets/js/83.a81aca77.js",
    "revision": "029da96c28e3893790e83beaf7106521"
  },
  {
    "url": "assets/js/84.80999854.js",
    "revision": "d5ff7d5132c5d2e9289c865da43d2396"
  },
  {
    "url": "assets/js/85.7165220e.js",
    "revision": "aa30ee3b868ec192dabfc3d1d6391862"
  },
  {
    "url": "assets/js/86.45ff8e8b.js",
    "revision": "c6aa1f999b63676aad916cf49802e338"
  },
  {
    "url": "assets/js/87.b5a5b67d.js",
    "revision": "86babfe2f7726e6542c0a479df8edc09"
  },
  {
    "url": "assets/js/9.fcbd5a30.js",
    "revision": "a1310ed9874a43c805bba6de3269d8eb"
  },
  {
    "url": "assets/js/app.3e4be1bc.js",
    "revision": "734c0db0954a4b8639e1dd87f1adca2f"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "d56df59c5c9725b0c6106f2c2e8a5967"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "30e7ec0e5cc7c073e96367af0c6f01c3"
  },
  {
    "url": "community-made/index.html",
    "revision": "44a296e3de0e235e3d93a92f9a4e006d"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "6a49061f1a83329c50e7c06678589a58"
  },
  {
    "url": "contribute/index.html",
    "revision": "f781a0899f09c32431db6440f331bbab"
  },
  {
    "url": "core-development/index.html",
    "revision": "145cf4c93229af5635eb8b0059c25fec"
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
    "revision": "14e62690c9fc4f0dcbdfe6250f3e1fa5"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "80251cd864a5eb35d68930987a55f45d"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "3022fe1df0ac829fa9cab7203dbd0bc2"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "c2aeaea50acc9c05619494cb29f205ea"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "fd78347b0ae8b4d4a255d73d4569e893"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "5560160e817e9ecb98aebc97b6fb2ab3"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "46ae3e1f353b6dadd4fdd948b4cceff1"
  },
  {
    "url": "de/index.html",
    "revision": "c14e9eba574b5d82e1dadd6f63f9d980"
  },
  {
    "url": "de/links/index.html",
    "revision": "f6857e5dec6982ed42672e48696a6a8a"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "1b93ece0d43dbff0493f382eb58aaf5d"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "e278ea53f979230abe3b919e7baf884e"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "19adc87a1126b16ccbf64c0fc4d1744f"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "2d35071fd0cca2f1691b4808aefde427"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "0939f99e858aac768d4de26f54fc1079"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "0ee4abd8e39808c0ad10433527ac8ef4"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "fd256547514b6b9dfd488f0bf735d7ee"
  },
  {
    "url": "de/setup/index.html",
    "revision": "518d1a5fd2c9cc8cadab6a2278808e08"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "2358b7c208ca5f4fc18096f51f8c0962"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "58b7676e8403962a79d65326dd9a4f61"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "6d71daf3fb63120896abbe3779a33683"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "a2487b04df9ad4cb57bb692e1c2ec0b6"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "5aa8fc4ff633161b2f0cff5d193f4a7a"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "5307a5003c2d10730fbd8a010b41d521"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "cc0bc2feb604f1b0820895e87d19b1c9"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "b89197b097493a994a2550e83d0a1427"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "89584910578647b67c54ec0a6ced3d3c"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "e9fdfc5c4dcc92bd45391b3d073c9584"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "ffb87a0b31a82155832b0a0544147768"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "b76b36485c95e9a0dc92b4b13ba7cecc"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "300a0db1afa5f61f2cb7c5acb4e0a606"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "2c1acf61aeb9ea660f4f995a987205fe"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "464fb647f00ba33a110c43dedb545dd9"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "8c0970382cc0fbfd331b1eee70095dcd"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "bc21e74b2e35e706edbc1c522c9744a8"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "8a976f8dfa4ad0dc651dde29e540b002"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "b28ee79ba9bc49d6ee14c467050a2b00"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "9baa277c5fea8bd4921611b6277b4c35"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "04ea8efb1ee03e7df1cec7aaf2594da6"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "3c473a88262b0ee518c60f8f5d23382a"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "33ab3ec5774cb68b0d72358442f68005"
  },
  {
    "url": "de/usage/index.html",
    "revision": "ce92b93b242fb4d51705df762bbf42a6"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "16fbf9ea1b6fb51b9db37c010b7ad46f"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "fdf980599f7a43709c18d773238a3501"
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
    "revision": "3ae56467fdba1da2777132a7e0def38b"
  },
  {
    "url": "links/index.html",
    "revision": "1130221a5003078386a93bf14627e813"
  },
  {
    "url": "satsetup/index.html",
    "revision": "423f756a831dec1902638883c963059e"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "227d2cd235bdc614f9bbbd1a7b1eb0af"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "6a68ac9c43e1c3d84b5c3a67595ab208"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "a603b0a73f54037434fc102a9fe43698"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "d9ca6d884e9fb9cd9552d44b08c057a2"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "4567b7fb755229b9cb149b42ef04a34d"
  },
  {
    "url": "setup/docker.html",
    "revision": "78cedd203ee3151eee66cbf3fceb312b"
  },
  {
    "url": "setup/image-install.html",
    "revision": "a87ce05c40bbd14f665b8707f235079f"
  },
  {
    "url": "setup/index.html",
    "revision": "b396d457b8f92794b9504cb3eaace7e7"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "f7586ab7c98bf40ba67ca1e703151383"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "27434f5be3ba9cb69bb1bc96eb249983"
  },
  {
    "url": "setup/requirements.html",
    "revision": "61cf609dd0f775952274ceeca57716f9"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "c40f0102e324c96c197423fbc5faaeec"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "fd3706a7177f823b8c7a4d996e35e17f"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "d5cadb0b450d67370de218d8819e4dc9"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "8e6ae65dcc6bfefdd315eed9406683a3"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "d6641490913f634e17080f53cfbe6351"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "68f2cb782e41370d998fe258032ece04"
  },
  {
    "url": "skill-development/index.html",
    "revision": "8201a96899cb8562bda6464745c80bae"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "599554ac14e9bf6e89f0434786d9b025"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "8431234357a43f2b21869632e38914ee"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "08e22031b63af41f36826228936aba40"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "ea2bb6fe1ffb9eebe0ba3168a3dde294"
  },
  {
    "url": "sponsors/index.html",
    "revision": "65ae441968de3f73db3096d2adbcdfac"
  },
  {
    "url": "usage/index.html",
    "revision": "bf1526b8afe24c33db8d26180868bfbc"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "33254155f25017be1830f44f8cd010ed"
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

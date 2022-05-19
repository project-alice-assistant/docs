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
    "revision": "9e77d888ea7c6868e5419b2d9b454909"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "9c9c5c62a9469a774191f70e49e6190f"
  },
  {
    "url": "about-alice/index.html",
    "revision": "be4eb7495c04d0980966886935aca66e"
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
    "url": "assets/js/10.1f11753a.js",
    "revision": "4bb2c25fc1a375540bea34b101746d58"
  },
  {
    "url": "assets/js/11.e072adf8.js",
    "revision": "d5ab3d311f51424a2764d3d69169a994"
  },
  {
    "url": "assets/js/12.cdf16adb.js",
    "revision": "45bb49cc7b9b8a2e1d7e21f19badaf33"
  },
  {
    "url": "assets/js/13.022dcb01.js",
    "revision": "df1dc5cf9de5b77220a974d5afe926ac"
  },
  {
    "url": "assets/js/14.2ae09f10.js",
    "revision": "351e43b21022327018f46ffd184a1ece"
  },
  {
    "url": "assets/js/15.2adb1d94.js",
    "revision": "7d61041b193d94aa23df2b5bcfa07b47"
  },
  {
    "url": "assets/js/16.57d1fa4a.js",
    "revision": "6d90bc427e92131210507b7a75fc6f22"
  },
  {
    "url": "assets/js/17.7ff40f60.js",
    "revision": "4036160b3832f5e6f178c1bc5ec6cd55"
  },
  {
    "url": "assets/js/18.e35d3d48.js",
    "revision": "161963866a27af7a738e43c69f513421"
  },
  {
    "url": "assets/js/19.d613ece0.js",
    "revision": "ef696fbe9079ddaf5ffe36e6761197a6"
  },
  {
    "url": "assets/js/2.252f785a.js",
    "revision": "08499677c4e83b5837a634858fe2e6c6"
  },
  {
    "url": "assets/js/20.617dcd1d.js",
    "revision": "b9c39a19b3a67a669da71ae08a820732"
  },
  {
    "url": "assets/js/21.43f9d046.js",
    "revision": "2c9264460c56ae45f4b1ae93ee15eae9"
  },
  {
    "url": "assets/js/22.1b58333d.js",
    "revision": "883fc368256c271186d877caa892b7b5"
  },
  {
    "url": "assets/js/23.30896a60.js",
    "revision": "0a695f359b7b71f92ce1ffe8c4d056ce"
  },
  {
    "url": "assets/js/24.c04e74fa.js",
    "revision": "e9b81efadf40fd4241dec6a30f3ca117"
  },
  {
    "url": "assets/js/25.7f2ba04d.js",
    "revision": "c360015c4ddea0d3b417c1d24b3d7c1e"
  },
  {
    "url": "assets/js/26.6f5e9a8c.js",
    "revision": "2bf99b41f4e79430c70befd4f9414362"
  },
  {
    "url": "assets/js/27.6a7efa4d.js",
    "revision": "47a4006370e1218056adf457c10c5078"
  },
  {
    "url": "assets/js/28.0471263f.js",
    "revision": "f0bb95c35094473ffda015ba31045904"
  },
  {
    "url": "assets/js/29.b720df43.js",
    "revision": "a0c37fcd9977a7aa69e2fd4fb5cfd0cf"
  },
  {
    "url": "assets/js/3.18ca703b.js",
    "revision": "33f597ae4cbe72a7688a66baea1ab6f8"
  },
  {
    "url": "assets/js/30.cc1de90f.js",
    "revision": "2b13145c9aa478408b1e3e8c892a1d86"
  },
  {
    "url": "assets/js/31.ad55e505.js",
    "revision": "69a69b546043bd1a2729e05bf15458bd"
  },
  {
    "url": "assets/js/32.db34bd2e.js",
    "revision": "5869f89ea4e699e41253ecce47b6b696"
  },
  {
    "url": "assets/js/33.33356641.js",
    "revision": "71ca87d71d109ab3bd52c4613d1f658e"
  },
  {
    "url": "assets/js/34.7a23a232.js",
    "revision": "b68d926962d7effb49f68f95dadbd660"
  },
  {
    "url": "assets/js/35.d39e0255.js",
    "revision": "9c95b40a9734ed43718fde0c809efb27"
  },
  {
    "url": "assets/js/36.9929a1d1.js",
    "revision": "321d282849256953b27ec3a00b9006ad"
  },
  {
    "url": "assets/js/37.a53c25be.js",
    "revision": "b31269f444dfce4fc7d904be4fcb75e8"
  },
  {
    "url": "assets/js/38.0a90312e.js",
    "revision": "5ac8f360c8c7deea26d2e71a87d26c64"
  },
  {
    "url": "assets/js/39.56bcad66.js",
    "revision": "083ea5b4889981ed1c656439236d0cda"
  },
  {
    "url": "assets/js/4.568f134e.js",
    "revision": "e2f9c1fc74e7603197d2d66a5739002e"
  },
  {
    "url": "assets/js/40.b27824c3.js",
    "revision": "13bec34cd0a138c8f77228b64bcfcd30"
  },
  {
    "url": "assets/js/41.b68eb743.js",
    "revision": "ba99d5f27e60dbedf2c2705f319a053c"
  },
  {
    "url": "assets/js/42.62c14045.js",
    "revision": "af578af06afe64a69aab5a78a2e509cc"
  },
  {
    "url": "assets/js/43.c903348f.js",
    "revision": "d07e2590d8ccc405c45dbdcf81840006"
  },
  {
    "url": "assets/js/44.c01cac2c.js",
    "revision": "ab03fd5f31098aaf905bb9ca89d40b6a"
  },
  {
    "url": "assets/js/45.1273fb56.js",
    "revision": "0e122f8b781414a71c0a65a92c8505a9"
  },
  {
    "url": "assets/js/46.86ee77a8.js",
    "revision": "b0ccac382c6b5b4e4b56b151691add0b"
  },
  {
    "url": "assets/js/47.ba3e3b59.js",
    "revision": "2a519deb28ec00120bba3824cc7d4a08"
  },
  {
    "url": "assets/js/48.0442da87.js",
    "revision": "51230ac883c806a2a512634a6dfd1a62"
  },
  {
    "url": "assets/js/49.b2815026.js",
    "revision": "213b4327affbe0a20831361b3de82d09"
  },
  {
    "url": "assets/js/5.8919c1ad.js",
    "revision": "ce15216f57687e353d4f573538a85162"
  },
  {
    "url": "assets/js/50.c2c780be.js",
    "revision": "5422fd86186217f09a2d54d0e6105146"
  },
  {
    "url": "assets/js/51.47fb840d.js",
    "revision": "02fceaa277865aa3358bdf29848b92e1"
  },
  {
    "url": "assets/js/52.b6de6bb4.js",
    "revision": "226b1154a9f09eb1e2bd6b231d505750"
  },
  {
    "url": "assets/js/53.2dcec64a.js",
    "revision": "aeec93b6dacbef931c5fa921246208d3"
  },
  {
    "url": "assets/js/54.8e87c3b1.js",
    "revision": "cecb7f3d91481792a0f6fd88a33885d0"
  },
  {
    "url": "assets/js/55.b3bf374f.js",
    "revision": "278e27b1b7fcbd85c4bc803fc762ef09"
  },
  {
    "url": "assets/js/56.6bca7a69.js",
    "revision": "8129256c5053f765917e89a1dd09eebd"
  },
  {
    "url": "assets/js/57.5b1643cf.js",
    "revision": "b32f14692e75a3222cf23b289fe4fdcf"
  },
  {
    "url": "assets/js/58.380285c2.js",
    "revision": "bf3339b74f0306a228e4af2b39e6a726"
  },
  {
    "url": "assets/js/59.ae463143.js",
    "revision": "609a420c640c5ebe24d2acfca292c65e"
  },
  {
    "url": "assets/js/6.7f8658b5.js",
    "revision": "0f2e25696cc1d0f0663b3358cecdd7d4"
  },
  {
    "url": "assets/js/60.9fba2b0d.js",
    "revision": "648853d4928f157f791e6f024eae9777"
  },
  {
    "url": "assets/js/61.1a600ef3.js",
    "revision": "4a58d944ef30da83735c62c0fc1d912c"
  },
  {
    "url": "assets/js/62.3eb91fa0.js",
    "revision": "98c21ec02ee9631463c2594e984f3282"
  },
  {
    "url": "assets/js/63.b99baf7b.js",
    "revision": "e59ed30c8b444f153cea76a258231c60"
  },
  {
    "url": "assets/js/64.7f00b5ce.js",
    "revision": "50db3f71d982ad71dcdbae46f07017fb"
  },
  {
    "url": "assets/js/65.51f24131.js",
    "revision": "e1ae57e4bfd439535bce9b696b0ddc9f"
  },
  {
    "url": "assets/js/66.f0f6e6d8.js",
    "revision": "a365f840e0e276c20cbf7dd641dea817"
  },
  {
    "url": "assets/js/67.a6707208.js",
    "revision": "989f3a16073a59bce54d79198821075c"
  },
  {
    "url": "assets/js/68.887d0a3a.js",
    "revision": "8e6810d2ce38570b6219124ede9ad865"
  },
  {
    "url": "assets/js/69.178fbfb3.js",
    "revision": "6cd8c841b633dea6329d7070193cc893"
  },
  {
    "url": "assets/js/7.10ec17d7.js",
    "revision": "5a15ddf2ee8541179e5d3882a818d71c"
  },
  {
    "url": "assets/js/70.5671f322.js",
    "revision": "421cfb052311538cca3689be694d5ab7"
  },
  {
    "url": "assets/js/71.c0f7b4c3.js",
    "revision": "da2315851d505e4c86ca6f63857c45d3"
  },
  {
    "url": "assets/js/72.42724541.js",
    "revision": "3e6967876597b6c677f798e0101dec39"
  },
  {
    "url": "assets/js/73.52e13818.js",
    "revision": "abce31a60b400e5d82031a5142f3d12b"
  },
  {
    "url": "assets/js/74.d0e941ac.js",
    "revision": "a60fc3e4bc3847519bfa0f9704bb7938"
  },
  {
    "url": "assets/js/75.6305ba14.js",
    "revision": "e344ffe8a9a0465ea70c28028874b3c9"
  },
  {
    "url": "assets/js/76.2a3ce89d.js",
    "revision": "8b5605390dab287c1e374abaf8ba874f"
  },
  {
    "url": "assets/js/77.8acf8e11.js",
    "revision": "ce0fde7a87b8f388e3e547e962d1a42b"
  },
  {
    "url": "assets/js/78.792dcb90.js",
    "revision": "893df0be9e421d649464eccacca8bedb"
  },
  {
    "url": "assets/js/79.7e8ffc48.js",
    "revision": "b18fed28a81e799cf1d6e472f5470bc7"
  },
  {
    "url": "assets/js/8.f1185eda.js",
    "revision": "bb44794c8e2a616fb0995aa2dbb51b95"
  },
  {
    "url": "assets/js/80.d0308888.js",
    "revision": "a56a08fbe540fdb19e09ee81f23b4a37"
  },
  {
    "url": "assets/js/81.ac06380a.js",
    "revision": "b7e58d40969beb9826d6d5550c082bb8"
  },
  {
    "url": "assets/js/82.83d16d5c.js",
    "revision": "f304d276e5a4b20a84cdeefad0c03bcf"
  },
  {
    "url": "assets/js/83.edc51422.js",
    "revision": "23c93e2dbf6c2c1ed934a4c79eb0b481"
  },
  {
    "url": "assets/js/84.2c76360e.js",
    "revision": "af40967aa273ab7f25a4fff412923933"
  },
  {
    "url": "assets/js/85.7068e40e.js",
    "revision": "6005b41439a2a65d065fdec8a3808717"
  },
  {
    "url": "assets/js/86.446dba5f.js",
    "revision": "62ec2ab4a5babbeef09ce7681b2a669e"
  },
  {
    "url": "assets/js/87.be420ad5.js",
    "revision": "f62fd6ee218b47317d65a4c01bbc5295"
  },
  {
    "url": "assets/js/88.d53ffaea.js",
    "revision": "c9c1d3fc0b1deda316aae427608d66c9"
  },
  {
    "url": "assets/js/89.fa3ed401.js",
    "revision": "725e49fd11c03a45b302563cc9e560b8"
  },
  {
    "url": "assets/js/9.5408df0e.js",
    "revision": "c2c4f990226379c59f2d6e64de1b9e06"
  },
  {
    "url": "assets/js/90.d8514cdb.js",
    "revision": "ff79966fcebc1416962962cb8272d20a"
  },
  {
    "url": "assets/js/app.3fa5ac5c.js",
    "revision": "10ee3845efec87090cffded288cafe50"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "d96c1db28a9e2d80229387eccc5c8c83"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "e1ba06140441cd3f835379db3d07340d"
  },
  {
    "url": "community-made/index.html",
    "revision": "8c945e9829fbd262f9a9cd0e2f8c28bd"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "8c7a3a55e00eabfad10a8f5f1dca2855"
  },
  {
    "url": "contribute/index.html",
    "revision": "0784324f0821262e4363d8c856bfcff3"
  },
  {
    "url": "core-development/index.html",
    "revision": "1c04520d39704c95536ae2c5285bf747"
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
    "revision": "610511c11cd9f42634607830e58625fa"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "69b6191ed3518e33e7a4dfe58b6494b4"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "06a98aa6b39a9660d5ef60a343c5c69b"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "8ea9221f295ffd619aa03bc2777343d8"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "753671230a285759f2ad164e8bfc7b4c"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "1d8f3add92cd17090c9ef2fb9d339ceb"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "b37e279ced0ed2eae76bff6f527d7ddf"
  },
  {
    "url": "de/index.html",
    "revision": "23c4a2d89a56b96421eeb01d857375af"
  },
  {
    "url": "de/links/index.html",
    "revision": "271e4d809be2aab9a8321057b87891de"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "ac06711f6c732492f80151b088c62f91"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "c50e48b89caeee885ee927bdc104e524"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "1a1d1b9629aebf05486435b350447c82"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "ff5fa92f6bbe059d2b4e6fe4d324768c"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "40c8e9707cc91e9f57f650bf7c98ac8b"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "6815ef59193693f1c2c9ea9689a1f3f1"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "b3baa6b9df91a94250e0b37e2c9d4f9e"
  },
  {
    "url": "de/setup/index.html",
    "revision": "a354c0b46411c6ce94e014275ef5cc33"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "bc3d50868810522ffd3e9e7b0f554ee3"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "94a9ee74208a73ee622d219f17abc590"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "74d2d4c6929021e090f521dd57a5b4cb"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "086359a08323bd60cea8fb4400e58b7b"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "9984fd4748d72e6fb9c64a3f42a78270"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "29f1c0ad1781485d20900418721bae4c"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "0ef1cbbc40613d757e1bd33364d0f3e8"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "5ef8b52eeb381edec08fc06e0d12a6d6"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "abe1e28b507148e97bad5173959ef923"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "d22fd6888a41a15361fdd674468f9e06"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "ccc9b30a0bba1568d2f6381435bcfb76"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "5c08812d5ad825b2d45df4b998b8ebf1"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "85e1988cf58bcdef4834b0dfc6405ba9"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "2ce8f93e96d8d2ac01e9b531997913fa"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "e98948966eb6954d44e3a919a320cea3"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "74fe975a5af6d5f3c17902d13d2ec49d"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "63eef52f1c2c34f94a34e6268e33275d"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "e878230d069167218c6f7c580ac5547c"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "ea151c6402ff82b45fd3b396c39e7218"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "11ab8c89d847d5d8c7019e6b72661057"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "6982e29bee837fcb48c4922ad6bf8393"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "b53b5936322fca899a558903c77d6d9b"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "1b5e4974d580bc732a749263d4da4675"
  },
  {
    "url": "de/usage/index.html",
    "revision": "8258d411cdb4d1bc430d0c03cc557aaa"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "b2da931984b337f2da2de69a1b882088"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "e8e2aa175d92ac39f96af0d6f62ee68b"
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
    "revision": "072310adddb466a6c7ee0efd583ed7e8"
  },
  {
    "url": "links/index.html",
    "revision": "f4b3660bac0c915cc97f5b93ea5218a5"
  },
  {
    "url": "satsetup/index.html",
    "revision": "3e23d2716022e95330c5e95879bb6598"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "ee034fba045683c6e96ee7680447992c"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "876e03405ce4d6f86a75032aa6ee6701"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "3b5d1ea6f4ab0805cb1d5c8c018c6780"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "1d6402fe5fa8ecf9a6fac7f8aa83bca3"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "1b589ba2e12b424fa74a03ccb9ef61ef"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "2a4d5cd962794f73fa4b54285948fd3a"
  },
  {
    "url": "setup/docker.html",
    "revision": "3fd9f73232067e41ba7e0ec4dc98da91"
  },
  {
    "url": "setup/image-install.html",
    "revision": "6959213dcbe001c5bc505aecbfa9c7ac"
  },
  {
    "url": "setup/index.html",
    "revision": "4ee4eb092d47ac055fb945e9e9808379"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "00e15e90e03c1f17fee491cd959d1b77"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "d1f680d1e922583796ce22383cc3f203"
  },
  {
    "url": "setup/requirements.html",
    "revision": "d0efab93c4223b2d58a9a2519798cac7"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "2d7cddd7e66a875d56e71234df694d83"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "c3a055416cd35adab9f72367f35ab40f"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "bb35e7cbbab13d0d9fad325ffa08146b"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "7ff3acd5744b638238ffc26d3215dc47"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "ebaa09c5d3f12c717c168f0d21bcf37c"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "8f8950bd869c028f7ac68cd0f7d55760"
  },
  {
    "url": "skill-development/index.html",
    "revision": "76297a4114f2279b643d5ed4be2ba419"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "ce5291110758f868b4559b595353cf7f"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "5620d843a40440c401da7d0725adb104"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "24884f4bf09d22bc9bd530d635ca0808"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "68ddafaeefdea7c9dfc567084d580ba5"
  },
  {
    "url": "sponsors/index.html",
    "revision": "c8356d82aa8d0163c4bf93030490e7cd"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "be110514946e0d925283372e320d2417"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "939698ac0308c9eaaf13ffe7e81fbccf"
  },
  {
    "url": "usage/index.html",
    "revision": "60005a178bf5b6e510a6274d3ec1afad"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "f38bb3bff90be14faecc33d045b13ddf"
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

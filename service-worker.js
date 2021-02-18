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
    "revision": "babd6d1df950838734072b46466b7492"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "b9fe445a71414e33f467510a8776e41b"
  },
  {
    "url": "about-alice/index.html",
    "revision": "cadb57ca163713b67eb09e2c39b4864e"
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
    "url": "assets/js/10.4a9e08bd.js",
    "revision": "db850e2eabd9477e1dadeea4c2a8f587"
  },
  {
    "url": "assets/js/11.3457596e.js",
    "revision": "2489c536c7b0b39853a07920979efb44"
  },
  {
    "url": "assets/js/12.7278ed76.js",
    "revision": "aa23d2c160999273e1a66b4b9b93fe70"
  },
  {
    "url": "assets/js/13.9d8accea.js",
    "revision": "d8c953e947a764b0375c4b11a3ff9333"
  },
  {
    "url": "assets/js/14.d442425d.js",
    "revision": "657631c97e35005397ba8b04d50b1d98"
  },
  {
    "url": "assets/js/15.e766783d.js",
    "revision": "e06ab1c089d70bb1d4059f137fb061b7"
  },
  {
    "url": "assets/js/16.510f95b8.js",
    "revision": "1befa490691be4886964c4368f9a2a15"
  },
  {
    "url": "assets/js/17.5d54c1f5.js",
    "revision": "0a4f52605ef5e26b46ad2ae0389afc2b"
  },
  {
    "url": "assets/js/18.c36a0edd.js",
    "revision": "39661cd5fcfad7f46aa72abdc671a3c5"
  },
  {
    "url": "assets/js/19.6cf30c31.js",
    "revision": "aa7a1aff9e291e33b66dcab073ad9744"
  },
  {
    "url": "assets/js/2.983873c3.js",
    "revision": "1451314a017d4ad9e58b6b660ae449d3"
  },
  {
    "url": "assets/js/20.16064f8b.js",
    "revision": "19f4def22fba4686ecafcb1db8553fee"
  },
  {
    "url": "assets/js/21.1bc86167.js",
    "revision": "c4dc5290a0cec550de7bd495b89affbe"
  },
  {
    "url": "assets/js/22.7c07c9ec.js",
    "revision": "2d0fc51bfb1772df2fd66226bd0082ba"
  },
  {
    "url": "assets/js/23.11af77a9.js",
    "revision": "9e443fda9de590ac082c7590b93d7d4e"
  },
  {
    "url": "assets/js/24.a556fc43.js",
    "revision": "5b8d0d9a29744a7af59fa8a9a07ea198"
  },
  {
    "url": "assets/js/25.e37f11f5.js",
    "revision": "570404bba034c471983e91d675e2c22d"
  },
  {
    "url": "assets/js/26.a0091370.js",
    "revision": "43303c63f38882564bb2ef3726ed8a7f"
  },
  {
    "url": "assets/js/27.0c2dcc25.js",
    "revision": "a8c02757dc447b51e145033e603fc89f"
  },
  {
    "url": "assets/js/28.cdf2279b.js",
    "revision": "dd75ec09fa81d0a57e205bd1c1114f7e"
  },
  {
    "url": "assets/js/29.d016b525.js",
    "revision": "f36d58c1d698556dfede1f0cac2d11f4"
  },
  {
    "url": "assets/js/3.61960346.js",
    "revision": "8d28f0b019bf71c18ba25ed1f36ec4fe"
  },
  {
    "url": "assets/js/30.fe6b7b76.js",
    "revision": "7b094451f925ff10e51ea54452d66545"
  },
  {
    "url": "assets/js/31.810822d0.js",
    "revision": "da4bca96a88e0bcde079c7156b80e2bb"
  },
  {
    "url": "assets/js/32.0ad34a82.js",
    "revision": "dc7984d2fcd94d88a6a4f45d46de1fc6"
  },
  {
    "url": "assets/js/33.0c98ceeb.js",
    "revision": "bd5fb00dd07e59ebb2009b0ada5cce3c"
  },
  {
    "url": "assets/js/34.de8fcd6e.js",
    "revision": "bd71ed90bebe3ac7eb46cbeb358e6284"
  },
  {
    "url": "assets/js/35.9ca3eff4.js",
    "revision": "76502bfe6d01320ec45351efaf351ee1"
  },
  {
    "url": "assets/js/36.5a233a69.js",
    "revision": "e940589da21a9b83495ba861e968af32"
  },
  {
    "url": "assets/js/37.9290d3c3.js",
    "revision": "81cc7b00bcc3c287f72fbf34c38fc70d"
  },
  {
    "url": "assets/js/38.73281db1.js",
    "revision": "70f36aa4c558fff20087943ecdddcf9e"
  },
  {
    "url": "assets/js/39.ee25ca09.js",
    "revision": "b3f8b5b034b70c4835fc100bde37751a"
  },
  {
    "url": "assets/js/4.be53b2dc.js",
    "revision": "f5d6eedf2fc984e1cab181452e1e87b1"
  },
  {
    "url": "assets/js/40.9c1c4bd6.js",
    "revision": "5eed0a666d46f244d0ab2456658dd648"
  },
  {
    "url": "assets/js/41.6640b42c.js",
    "revision": "ab7ecbfb26b918f140a312f001b7e22f"
  },
  {
    "url": "assets/js/42.0424fe65.js",
    "revision": "4092b620bb9a0fd6ab134a92430c7da9"
  },
  {
    "url": "assets/js/43.b6563a53.js",
    "revision": "78cb403a01886eef715e9aa20ac00d79"
  },
  {
    "url": "assets/js/44.fbf4d1b9.js",
    "revision": "7c60e02a0525f055bc9d32fdf141697b"
  },
  {
    "url": "assets/js/45.8d4ba7d4.js",
    "revision": "86a49a87799999405aefa0e61acfddee"
  },
  {
    "url": "assets/js/46.c6bfab83.js",
    "revision": "45a48fcdce7483de5640f1c995c7f726"
  },
  {
    "url": "assets/js/47.ebfd8a89.js",
    "revision": "4ff117d7e2ebbdf029c907da836493fc"
  },
  {
    "url": "assets/js/48.1f974858.js",
    "revision": "6a43d36df848ad3d573540db1d2a39f4"
  },
  {
    "url": "assets/js/49.9c72b519.js",
    "revision": "1e6c8cea139cdafa3f91db5e89d2e78d"
  },
  {
    "url": "assets/js/5.1b611e60.js",
    "revision": "db78724ed63e3c171b6f44294ce180bc"
  },
  {
    "url": "assets/js/50.7859c2e4.js",
    "revision": "d100de35dbba26f2bc990227ef3b2120"
  },
  {
    "url": "assets/js/51.13b94321.js",
    "revision": "c9eaedb5e27682279761632f267da62f"
  },
  {
    "url": "assets/js/52.cdc49f14.js",
    "revision": "e1a62d40274bde9d3f71b306757ff756"
  },
  {
    "url": "assets/js/53.13c6b25e.js",
    "revision": "cc5fe0918e15ba079b92705bec000bd5"
  },
  {
    "url": "assets/js/54.40f73383.js",
    "revision": "2f971101621f144afaa2273f6456398d"
  },
  {
    "url": "assets/js/55.17f96076.js",
    "revision": "e2ce49199437186020b621497069a795"
  },
  {
    "url": "assets/js/56.935444ab.js",
    "revision": "5e0c7568c944d4d353711f468a888c58"
  },
  {
    "url": "assets/js/57.1f0b8345.js",
    "revision": "8f8c1a1a2bfa33abaf50f0d87f906f83"
  },
  {
    "url": "assets/js/58.024c1643.js",
    "revision": "1f4e337030bc20849d108d177de0843c"
  },
  {
    "url": "assets/js/59.927dfbba.js",
    "revision": "0cb67addcd77b4e47a6f6959906cc43d"
  },
  {
    "url": "assets/js/6.35a74c49.js",
    "revision": "f1f5fd0dd39c0922dbcd161077123f5d"
  },
  {
    "url": "assets/js/60.c83a44af.js",
    "revision": "403991e9ab764b70886c169f65fe1ac0"
  },
  {
    "url": "assets/js/61.14a75482.js",
    "revision": "782bc15cbacd9366636c6abb7e086345"
  },
  {
    "url": "assets/js/62.53c004f0.js",
    "revision": "337d16bc1ae12e0182cca41c4c069bec"
  },
  {
    "url": "assets/js/63.7257a0d4.js",
    "revision": "e7be303b7e8cb8c3828dcc1157f02592"
  },
  {
    "url": "assets/js/64.9163b0f6.js",
    "revision": "335716b997bd3aed726628ee3874c792"
  },
  {
    "url": "assets/js/65.1745b7a9.js",
    "revision": "a3cf9e1cd1b242549b5c1fe57c0f83d6"
  },
  {
    "url": "assets/js/66.fa2df10e.js",
    "revision": "5226f9521d63f242a52becf48420421c"
  },
  {
    "url": "assets/js/67.19978ee8.js",
    "revision": "05c1d9c416b0870e42dab0558c8c32d6"
  },
  {
    "url": "assets/js/68.b7fdac9e.js",
    "revision": "99ac04b4cb8ab484efdbdee75f986473"
  },
  {
    "url": "assets/js/69.039f65a5.js",
    "revision": "6fc804786a86018b279562298d0c038a"
  },
  {
    "url": "assets/js/7.76ce1147.js",
    "revision": "2c4a3fafc474042b2560717a20b78678"
  },
  {
    "url": "assets/js/70.212049a6.js",
    "revision": "9a8af709e265950e653a465755cef314"
  },
  {
    "url": "assets/js/71.fe2ce9b6.js",
    "revision": "75b03cd345aaed204b1a1b302994004d"
  },
  {
    "url": "assets/js/72.afdb6533.js",
    "revision": "f9655c14ebb03fa0fe2f80bac93afb01"
  },
  {
    "url": "assets/js/73.0cd73c58.js",
    "revision": "d0348ae42e7efb2c88bcbe3acd6a5715"
  },
  {
    "url": "assets/js/74.bf73daea.js",
    "revision": "8cfbb33660b82aa6c65779f7a5103b73"
  },
  {
    "url": "assets/js/75.2b4ad0bd.js",
    "revision": "9a5944507420685ac3816291069b15f9"
  },
  {
    "url": "assets/js/76.377b0614.js",
    "revision": "cf7751956e68ead4329c70f7ab32da92"
  },
  {
    "url": "assets/js/77.cc9913b0.js",
    "revision": "986b2da3e5648dba50ab159b0ede1a9d"
  },
  {
    "url": "assets/js/78.d44fcbae.js",
    "revision": "ae317c0449cb0190c31320ac04fd9f89"
  },
  {
    "url": "assets/js/79.16883cd8.js",
    "revision": "2a8c698cc10f8a50391539bea026706a"
  },
  {
    "url": "assets/js/8.ede7ee97.js",
    "revision": "76cba7b057de012b8d5274b5161e4288"
  },
  {
    "url": "assets/js/80.8ee5edb7.js",
    "revision": "bb9f169e5114f227716b8d74653f970d"
  },
  {
    "url": "assets/js/81.a4f69686.js",
    "revision": "8b61e185b74292963cbe0552896379ff"
  },
  {
    "url": "assets/js/82.deb44756.js",
    "revision": "bc4b232a750a32a1dfadb7f0be8e68ef"
  },
  {
    "url": "assets/js/83.f1340126.js",
    "revision": "31998697e12de3a3df03d38d8ae4d055"
  },
  {
    "url": "assets/js/84.3b182597.js",
    "revision": "2ad69bfb85388fc440457f7cc53e5714"
  },
  {
    "url": "assets/js/85.e202fbef.js",
    "revision": "6a93bfec4625faa7d258c5c31613a991"
  },
  {
    "url": "assets/js/9.e2e7307c.js",
    "revision": "c79b4b7fcb9dd04b710a2c31ba38ffa6"
  },
  {
    "url": "assets/js/app.bf05f9ca.js",
    "revision": "44a4a82a9e031aa4502470d38a4a61d6"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "5c36589545cb9e0949fd235e13964ee0"
  },
  {
    "url": "community-made/index.html",
    "revision": "7c2c6dfbbdf9e5c67332a49939219cb3"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "b14e353fd313cd8edf33c95d957a3179"
  },
  {
    "url": "contribute/index.html",
    "revision": "3873f68017f878f411dd138ef0c89c45"
  },
  {
    "url": "core-development/index.html",
    "revision": "e1e9bd07ac6e48b52040579ebd01140f"
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
    "revision": "2323f509b858371f53f1cafeb30237c2"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "f5c4bde774049873669a25d5af9459dc"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "7b5113e56d04a67a26bab518c5346135"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "bdb8b10a2194af7a87bdcb92bea24edd"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "963681dca43f61f3f6ceaea4fdaa2efd"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "78b8599c772fafcfe4966e28a5b114d0"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "9d32de9a221e01cbbfccae3caf9af859"
  },
  {
    "url": "de/index.html",
    "revision": "466fd048d0540b956534b9834ff4ce5d"
  },
  {
    "url": "de/links/index.html",
    "revision": "fc189c5a3e65922be8c98f857c2b6828"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "c6591d6eb7647369d583438cce50974c"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "46543a70b298d8b95194d29cb6f60bcf"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "2654df6879ec489199e0ca99c7c1114d"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "7aa18bb1dca7271dbe06492f19da82c1"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "55ca9416bbeab574a4d76db75dbc4554"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "20094ce056c9fc74aa1b6e683ab2ca4b"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "e78bf1de039304dabeb0218079e65022"
  },
  {
    "url": "de/setup/index.html",
    "revision": "93257dd20ddc4e73d9861f71a4101083"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "23de67ba30ad9822e7bb8c5b9c8dc8fb"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "7d2135452f5b599259d6ddbebcac6750"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "751396003016be83788cb0d06f4b135b"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "612416ecb1ffd57a10ceefbdfc633879"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "29da3b7b92828c9e17285caff773aa10"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "493228f7dfe0d93ca4a49d162a8a9aca"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "e7bdd01c76e901ded7f6723a7079c2c8"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "7659e4773b129d9fa50a3e566a669e72"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "ff0e3903baf8a37f7a41d38df5545882"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "3a66b661c438ab506db2b0555ddaa566"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "bafb0970f73663b846af1d6cf68a77b1"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "c9d325faf6dc154a7c4fed5174888f58"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "1d9358d283d675981d8f93acf07cdfa5"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "b0bd02c49d186112ddb84ec8cc0d6695"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "73f6bae04eca611d80468096371bcdda"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "478d9de6fb86891e7da4ff04c18c95e2"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "422147709c5d9752d780058a74bfdb9a"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "1180c1e700298b6ecafd850af5099d67"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "e4ccb51151b417c7b70c4772de46d669"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "3e678bf501134da4320fcf991d893fce"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "2d6649d7168681b12dc9e8a444072d3c"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "2ccf325f0ee9f45c1de16b3dfa19b3fa"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "2b281ae5add1b06734201c2a0b68b4eb"
  },
  {
    "url": "de/usage/index.html",
    "revision": "c99d8d071b1cfdea300514150e90a052"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "bb516623e214003972f5019a6cb6d17a"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "44fee43ffb432509bbb1a52f391c0d01"
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
    "revision": "1c25d36e0b6d9262a7c47764fb69e5c8"
  },
  {
    "url": "links/index.html",
    "revision": "5eba26cd90d2c86bca4fe91fe6bbeb82"
  },
  {
    "url": "satsetup/index.html",
    "revision": "15183d4191c73a2ffb355ce441a01c94"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "52c46c93a9aa727d0ef7948fdd38670f"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "02a18730f9bb0e0f3925f986472f88ee"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "47c3cc662a03a3bcfbb34232be0bb182"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "182f726ab4583dad3b1b9411273ff3ce"
  },
  {
    "url": "setup/docker.html",
    "revision": "280603fcefa5ee52af616498e71884c8"
  },
  {
    "url": "setup/image-install.html",
    "revision": "7d156a9efd685793f93e1e21f60d9fd7"
  },
  {
    "url": "setup/index.html",
    "revision": "dc66dfaeec61d67aee3f595a0b9769e7"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "2153ccf20c1feddc4c56d815db9c0f00"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "79ddc7ae51c4cb775eca288db7101468"
  },
  {
    "url": "setup/requirements.html",
    "revision": "627e75998d9cce01dc90471add2f6eda"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "33a9c7d05b6208f8ed2fca09cc2108ea"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "9ee74f2fd533ae8d4c58c40393a065b7"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "ea6545b6a5e103d75122130d37fc0596"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "56b59462493e71105546994004939c26"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "126502ef8ac919f40e9cc5563927e160"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "f529018b7c2894dc433ad8860bbcd714"
  },
  {
    "url": "skill-development/index.html",
    "revision": "6804b99b1bc3cde1b1129e1c2733fb7f"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "ec269ff1ab87a4ae1d03d1c6279b2b41"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "45b145c85e1aea16cdca05b4136dc6c0"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "dfed02512179befab2327f8d405047c5"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "00d49b3f2afdaf4578ff53ae1cbaba5b"
  },
  {
    "url": "sponsors/index.html",
    "revision": "90a9a0617bc0775aadab97a3bed76624"
  },
  {
    "url": "usage/index.html",
    "revision": "80058eaffc1e0749b0436daa8fc6611b"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "81d4ef69c67897a8d20cc0c263f96dc6"
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

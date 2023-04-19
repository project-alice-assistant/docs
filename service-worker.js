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
    "revision": "f803a0d2d6aabbec4b24aab2676ccfa4"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "6589f76d769a7585a325208034f58ef5"
  },
  {
    "url": "about-alice/index.html",
    "revision": "8cd00076886c75adedddecd5ee7280d8"
  },
  {
    "url": "assets/css/0.styles.848a560d.css",
    "revision": "409f21b556e3c708ca668a821a1720d9"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.4b1daab7.js",
    "revision": "6c590834b7236569a72161e2ad8abbe8"
  },
  {
    "url": "assets/js/11.54079879.js",
    "revision": "ee864048855ba7fc732f6b2939328445"
  },
  {
    "url": "assets/js/12.cb3e9aa5.js",
    "revision": "5163f9aa25372b03a480b9b227b00d0c"
  },
  {
    "url": "assets/js/13.76df7afc.js",
    "revision": "bae102a0aaac8242dffe8811fbaf38d7"
  },
  {
    "url": "assets/js/14.3be7664b.js",
    "revision": "70dbdc9c55e34485cdaf681f3c6387d2"
  },
  {
    "url": "assets/js/15.742890d7.js",
    "revision": "cba77c24194d7ce5b5564a2645708208"
  },
  {
    "url": "assets/js/16.5180c5a8.js",
    "revision": "a6b447a573cdbeaa1495e829e4740120"
  },
  {
    "url": "assets/js/17.680a6936.js",
    "revision": "a4947af5dabd728744611d79956a4aa6"
  },
  {
    "url": "assets/js/18.8045aeac.js",
    "revision": "fb86bf43d46c48694d4169d6b8e708a1"
  },
  {
    "url": "assets/js/19.a16e956c.js",
    "revision": "b00a99f53a70b2d279ab9409c53fee14"
  },
  {
    "url": "assets/js/2.346e3e05.js",
    "revision": "8d31f68c67f810873a9241fd0fbda3a7"
  },
  {
    "url": "assets/js/20.63f0a1b5.js",
    "revision": "68021e9757a0a0f6f123142a8347156f"
  },
  {
    "url": "assets/js/21.8c91d2a1.js",
    "revision": "ddf1a391d478704c4dc926b42d6e6c90"
  },
  {
    "url": "assets/js/22.4097c1e1.js",
    "revision": "3450426d230f3ed482185d5c67133158"
  },
  {
    "url": "assets/js/23.0d811440.js",
    "revision": "8079b696805e7efe5e98606596d44d4b"
  },
  {
    "url": "assets/js/24.259f1879.js",
    "revision": "7b37ab207a67afd72e9f4bd7cba5914f"
  },
  {
    "url": "assets/js/25.b38b3745.js",
    "revision": "c508adf4dc0589b2f6721eae39b20751"
  },
  {
    "url": "assets/js/26.a6f80b90.js",
    "revision": "9733257d0162afd48b7cf354e66226c8"
  },
  {
    "url": "assets/js/27.333855ae.js",
    "revision": "16d57f375c316fffcff999f5336d66c6"
  },
  {
    "url": "assets/js/28.26a1add7.js",
    "revision": "b0b80bb9d08c9dafb1d2491eb6c59ac9"
  },
  {
    "url": "assets/js/29.8b83cfc9.js",
    "revision": "9b9d4f37ab311cd38df43f0af74a1b3a"
  },
  {
    "url": "assets/js/3.7e34a9b3.js",
    "revision": "af676851bd4bee1b2023be94472e223e"
  },
  {
    "url": "assets/js/30.23eb3694.js",
    "revision": "f2f6cb53c09fa362c4254cb30d7a334e"
  },
  {
    "url": "assets/js/31.75b2a13b.js",
    "revision": "8ae44537c96497303527a0be08773ac9"
  },
  {
    "url": "assets/js/32.32b139d5.js",
    "revision": "bd8099a716c7ed0c2ada92a5288ba424"
  },
  {
    "url": "assets/js/33.2533c54d.js",
    "revision": "df9f251907286f5009773287d3234b9c"
  },
  {
    "url": "assets/js/34.f6fa010c.js",
    "revision": "2a85e58c9e1e60ff36bf8f4a8d51b415"
  },
  {
    "url": "assets/js/35.3eb3e1fd.js",
    "revision": "62a9db923abf133a32791ce432293dae"
  },
  {
    "url": "assets/js/36.7f0fd9b0.js",
    "revision": "c42e934110d08213579f2140a9612974"
  },
  {
    "url": "assets/js/37.abfdb3ed.js",
    "revision": "0e3972c7385da0cfd61895ddc71923d7"
  },
  {
    "url": "assets/js/38.7457b20c.js",
    "revision": "21bcaf1aeb79d913ab37866a835de34e"
  },
  {
    "url": "assets/js/39.ebef12d1.js",
    "revision": "357eb118b4a9d22750af0555a2dccaf1"
  },
  {
    "url": "assets/js/4.dfb231ac.js",
    "revision": "9845d86b6017792c5947a9ca56f44a53"
  },
  {
    "url": "assets/js/40.c2a82a18.js",
    "revision": "0db37b73d0ada0247b8ac243df428e04"
  },
  {
    "url": "assets/js/41.23469341.js",
    "revision": "f6afd10c8b1e1da6c68d6a4d15a5199f"
  },
  {
    "url": "assets/js/42.b435bf3c.js",
    "revision": "d2be8b34c0eb1e3a02da08ed14e7133b"
  },
  {
    "url": "assets/js/43.5fa9eee7.js",
    "revision": "6ffc821e88c70510e90dfed3edef6ccf"
  },
  {
    "url": "assets/js/44.fedf58c8.js",
    "revision": "3b7c5d8959d2cc8fa72fcaddb7210a29"
  },
  {
    "url": "assets/js/45.cee20629.js",
    "revision": "5db58dfced74962667ce9f7542c6d592"
  },
  {
    "url": "assets/js/46.31e5aca6.js",
    "revision": "a24ac390e192d7ad2a4ff5f135e00ccc"
  },
  {
    "url": "assets/js/47.d451af3d.js",
    "revision": "bac356b29dc14571c4b3dec4cdbb6d65"
  },
  {
    "url": "assets/js/48.bfc33442.js",
    "revision": "11eaec99de520a96be1a9f5dbd35d60d"
  },
  {
    "url": "assets/js/49.9e1f2af1.js",
    "revision": "a4dbc4ae13b4b7894d69fc4ca64aba9f"
  },
  {
    "url": "assets/js/5.11e36d9f.js",
    "revision": "92b2c0bd6772c201703a4f33b5e29f9a"
  },
  {
    "url": "assets/js/50.fa985321.js",
    "revision": "b37a964fc054401204c4e5711a8d3a42"
  },
  {
    "url": "assets/js/51.de4186f8.js",
    "revision": "9c04248117cc8456d04f744dd5f0fcac"
  },
  {
    "url": "assets/js/52.3068644a.js",
    "revision": "04729644dc89198b795dceff119c1d09"
  },
  {
    "url": "assets/js/53.50a2b0a3.js",
    "revision": "d3891ac891da98046cd8b014b7ca33b2"
  },
  {
    "url": "assets/js/54.84f7deda.js",
    "revision": "6c87dd9d813979acf1a73fc59ba47987"
  },
  {
    "url": "assets/js/55.aa1a6f53.js",
    "revision": "23f6825c6c173d7638930321584e59ff"
  },
  {
    "url": "assets/js/56.416de1fb.js",
    "revision": "7bd431a8365b146b42cfe42eff35f78a"
  },
  {
    "url": "assets/js/57.66b59b89.js",
    "revision": "c0f1b1416d1264fd77e6aac51317c844"
  },
  {
    "url": "assets/js/58.ce069b69.js",
    "revision": "678ed1a9e64f4bef48ed275e9f4985ce"
  },
  {
    "url": "assets/js/59.3799e4f3.js",
    "revision": "2a8c7e1cfab4efead67c3f87611ff453"
  },
  {
    "url": "assets/js/6.a664c164.js",
    "revision": "f28d26ae7c1c386f057ec08ca7077446"
  },
  {
    "url": "assets/js/60.d3671edf.js",
    "revision": "53cfd46d6955b5ab1bb2940ec4b85a67"
  },
  {
    "url": "assets/js/61.f068a68f.js",
    "revision": "b63e3dce484d143b98cf1c2a4b3056f0"
  },
  {
    "url": "assets/js/62.185fe344.js",
    "revision": "cd079d0d3bb46b2394381876d5c8b8b5"
  },
  {
    "url": "assets/js/63.486a148c.js",
    "revision": "ae36d117bc05e96e031d31759e31b63b"
  },
  {
    "url": "assets/js/64.55494dcc.js",
    "revision": "d7dabbfcf9d79e3f64d4ed004ca5dc0d"
  },
  {
    "url": "assets/js/65.4bcd4028.js",
    "revision": "8620112c9c4507727f1aa0148e156c5f"
  },
  {
    "url": "assets/js/66.53af8983.js",
    "revision": "dfba63ce79d4646ba638d135b08c25f9"
  },
  {
    "url": "assets/js/67.e1bba92f.js",
    "revision": "8d9b104f8215fb48c9515149b84bea69"
  },
  {
    "url": "assets/js/68.a669b387.js",
    "revision": "fa49689f7ca11771acc75403cadee8d5"
  },
  {
    "url": "assets/js/69.60aee69d.js",
    "revision": "a9b854f695e1f87870844bf17a19c515"
  },
  {
    "url": "assets/js/7.7fd7ff38.js",
    "revision": "6b978b858f73d322a2ba27f6bd16b879"
  },
  {
    "url": "assets/js/70.e6f6ae40.js",
    "revision": "b5eb7be4f9e995d5a21117d17c1f67cb"
  },
  {
    "url": "assets/js/71.9660dc4f.js",
    "revision": "715d85eea13be2cdc687f037877f6e5e"
  },
  {
    "url": "assets/js/72.153d1fe8.js",
    "revision": "5e8bd62bd2e97a556ea1ad8a15ca3672"
  },
  {
    "url": "assets/js/73.d2c9cc2e.js",
    "revision": "0af84f43187926a6bca577b3088c22ec"
  },
  {
    "url": "assets/js/74.6cce837f.js",
    "revision": "143a7a28a6ced5c9b1611792d8e411d4"
  },
  {
    "url": "assets/js/75.168fd3d5.js",
    "revision": "e0fd367a7e73e12fcb77bd45c9937139"
  },
  {
    "url": "assets/js/76.51f47d24.js",
    "revision": "ee7eabf39727723b000828c8e4dabace"
  },
  {
    "url": "assets/js/77.0edfe5b3.js",
    "revision": "fb1e4f6ec3fbe1c64e3db094961c287c"
  },
  {
    "url": "assets/js/78.3e814e78.js",
    "revision": "4aa43a68c0fa2eab5ef117c77144890d"
  },
  {
    "url": "assets/js/79.091fb060.js",
    "revision": "49ef1d8780fc50b133adb2f16679b4af"
  },
  {
    "url": "assets/js/8.f5cb8fa4.js",
    "revision": "b4da01f0916a5c516f387dcecbf5d059"
  },
  {
    "url": "assets/js/80.71c030b4.js",
    "revision": "eb821fd4ceeb2edda890f9f8095447fd"
  },
  {
    "url": "assets/js/81.b4f39d12.js",
    "revision": "7b9627c196e56cb940b3b8d25295e20a"
  },
  {
    "url": "assets/js/82.996af862.js",
    "revision": "517e1ff7040df537d7e660d4da3d7316"
  },
  {
    "url": "assets/js/83.be9b1804.js",
    "revision": "c85fefee2c13171e699f4952f614c91e"
  },
  {
    "url": "assets/js/84.06360a1e.js",
    "revision": "8ff602fcb03cf936af60d699f8ae1ae7"
  },
  {
    "url": "assets/js/85.74e2a965.js",
    "revision": "ceccf88825c17bf6e77b72904bb4eac5"
  },
  {
    "url": "assets/js/86.57b49c22.js",
    "revision": "49e0a29a3c9589b1fb9c63784b802185"
  },
  {
    "url": "assets/js/87.b2a43044.js",
    "revision": "42f97dfc456a41a3ac7bffae33c71d69"
  },
  {
    "url": "assets/js/9.fb711f95.js",
    "revision": "a42a34b8411b96d047efa4a9a2185977"
  },
  {
    "url": "assets/js/app.f9702f6f.js",
    "revision": "8b5c882e5212ab2c7b9f90b7c0436370"
  },
  {
    "url": "community-made/frequent-questions-and-answer.html",
    "revision": "3f588c45a04bebd1a489d0f3a9f431d5"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "9a8c60603786166e1e6fa0b7317dd86e"
  },
  {
    "url": "community-made/index.html",
    "revision": "9ee4c5ad1310b5935583030f6cf44246"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "a77e643078a561889fe88491795a68b9"
  },
  {
    "url": "contribute/index.html",
    "revision": "380b2459e5db9e39c7c4ac9c05550145"
  },
  {
    "url": "core-development/index.html",
    "revision": "37c4c2f1e1711b2b5015c9a7ebd60a18"
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
    "revision": "577f8c9d79ea85e1076ab8e092bbc01f"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "8efa0b8dc1fdb778fb49b70420107e38"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "58a4b79ddd9948c231123f24113b861f"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "fd52597c0f141f9910177719191d0b02"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "3b5401038f43c379038280ef0500e33a"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "60f18c3686adb53bc451f18b2209dfd8"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "33b617ec6e9fae21e2d98405812acdea"
  },
  {
    "url": "de/index.html",
    "revision": "aa9fba710a0e599e3ae7f0b32e541753"
  },
  {
    "url": "de/links/index.html",
    "revision": "895c9cdbb4133c70957a617505e9c2f0"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "185505e48b57302a2a36d9399d88af55"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "44448392517d25a8b9206258e4d4192a"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "c18c1ded7b30f91df58cbe935961c08c"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "eab652d605813c644bc2068c71292c7a"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "19a4e203323b2e3bb31dcffaedac89c4"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "9e15c866451f87453c731605913d03ff"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "16efa93e3e71dc7a886525998ae18bdf"
  },
  {
    "url": "de/setup/index.html",
    "revision": "140d7f3462d12a40c0cc51cd20d65670"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "642ba114d2653e854ffbc816a5df517b"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "a82d3d2b28b95cce891895e301c164e6"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "5868ce74375f0cd70153bbf06c8a11cb"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "dde940e8413a9467e7f0e26c225e2701"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "24bdbd847ed174b3a7ff49cd57c05d88"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "e527232cf6d45aea305543da3a0a30b5"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "e5c43885aaa116783511e581794302ae"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "fe6c5309ca884d2212d6d31b8b1d29e5"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "c6c9307bc586f55a32a8feaef14eb0ea"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "4d6184e2a00657082a265a9db839e1f9"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "4b11656cdc42b15b9ec096ec2e4d6b2e"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "4c94129d62f8832a0d66782fb95d5098"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "e82f9df09b0c76e860f19110d2566e53"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "24c74eca21fa11e4a004eb38c1f5e37e"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "50c6e93abf18ca6f057b55aa6b56e660"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "8b46cd4263ca5fcb632639024d4b2381"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "18b6ff628be673cd24c4ef126605a598"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "ed3ac52e4689e8713f911a015e5695e1"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "80aa48d4b505a75aedefe4d60c553510"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "97aab9a3c2e6529eca4632f441800e8c"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "b7f9d2c17aed8596eac2bf22b5106360"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "5a64b25b9353cbefcad47ed28c8c16fe"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "11a3fa244ab7c9d5687057f42ab5c4f4"
  },
  {
    "url": "de/usage/index.html",
    "revision": "ae6b78990d96da045505cda8de313a0b"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "e8f7b4560d63111d26b005779ecb3aba"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "ac81000f595191960457a3f0b6f60643"
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
    "revision": "520407979f90439b8d2c41c15029d165"
  },
  {
    "url": "links/index.html",
    "revision": "d4dbaaed5597d4997b6c3da4793a7790"
  },
  {
    "url": "satsetup/index.html",
    "revision": "4f5fea2f0546b029879520b93f583895"
  },
  {
    "url": "setup/alice-cli.html",
    "revision": "b91fb44ec7ddead219853229c82321f8"
  },
  {
    "url": "setup/developer-install.html",
    "revision": "57a9ff78d57f913df8d74867e1c464c8"
  },
  {
    "url": "setup/docker.html",
    "revision": "995675b977d0a4c9937777da4a4128b1"
  },
  {
    "url": "setup/image-install.html",
    "revision": "df71209b9b1536c8be87800c2f0b9b9e"
  },
  {
    "url": "setup/index.html",
    "revision": "2f4ce6defa05ba5c919e84b3c5da1c95"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "2a4c0000a7acc3c847ccc91e83bc614b"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "c63e55856ed5311dc1a42814d8305945"
  },
  {
    "url": "setup/requirements.html",
    "revision": "c34c246521a750eaee96f85c302d5b6d"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "380e6e4f77b77cf756546469b29dc86e"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "fa876b4d53071ff581466d4b6be447a2"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "48b79783f72da6154612fbc47c5960ac"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "6681940b4776135680b98d06a5018fc4"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "abe2e22ba05dca659a8c8f2bc104fccf"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "e5989c283c4f6d073d1e4136ab3ae065"
  },
  {
    "url": "skill-development/index.html",
    "revision": "4dc22b7e4bae6d837d563c3b801e3d0d"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "469da889898b5375688903f08b634e3a"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "98cbe74130fc5a395ca53e32de05c6e9"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "28bfa5b45a2873a3f9745e7ba836072e"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "ba53bd8d7988eff8097ad297c1b44426"
  },
  {
    "url": "sponsors/index.html",
    "revision": "73a29d1de61af31ba3b418c3581e6704"
  },
  {
    "url": "troubleshooting/index.html",
    "revision": "b74a308ea6fd8eaabcec6362860164ae"
  },
  {
    "url": "troubleshooting/main-unit.html",
    "revision": "5bffa399789fea7d5a9836179cd694e8"
  },
  {
    "url": "troubleshooting/satellite.html",
    "revision": "84f5b7fa46936e4104870c2ac28f5834"
  },
  {
    "url": "usage/index.html",
    "revision": "5dd5ee555c5512408a95ba10411d532d"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "f6a1a3a48bbaec9a139345e7abe29d81"
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

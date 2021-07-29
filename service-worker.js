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
    "revision": "3ae258e9b4be457739ea866ec229f0f4"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "b3f474ef786d40e66fbfa077b2676599"
  },
  {
    "url": "about-alice/index.html",
    "revision": "178a0ff05e3386565ed4d577110e094f"
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
    "url": "assets/js/10.a58d7591.js",
    "revision": "eb98d0f92b106a6c90a7a3bed4ad77a6"
  },
  {
    "url": "assets/js/11.28e32aae.js",
    "revision": "885c567493706f4fdc7eef7671b7d5f5"
  },
  {
    "url": "assets/js/12.c12fc3d5.js",
    "revision": "a2b58ebf2e14928587f51a1de0458022"
  },
  {
    "url": "assets/js/13.554554f9.js",
    "revision": "ab0b6b224612d2a4dd6082c1e33a78a7"
  },
  {
    "url": "assets/js/14.5318ea74.js",
    "revision": "e021035138538d4b86c8435ea10398a3"
  },
  {
    "url": "assets/js/15.e26a2d30.js",
    "revision": "75f554070b39bef21ef525da2b70cb69"
  },
  {
    "url": "assets/js/16.d9c04b38.js",
    "revision": "eb9c42057423864b3be69091778c85ec"
  },
  {
    "url": "assets/js/17.358e40cb.js",
    "revision": "e30cb1b07d3a53d826c7815755b99dc3"
  },
  {
    "url": "assets/js/18.d5360c4e.js",
    "revision": "8439c6ec2fd04b78724385e34474ca31"
  },
  {
    "url": "assets/js/19.eb4cf1cc.js",
    "revision": "26951747db9f9da78153b42b4a79a6c8"
  },
  {
    "url": "assets/js/2.121e53d5.js",
    "revision": "b7da99316aed9ae4a8b5a509db4ef410"
  },
  {
    "url": "assets/js/20.e7531f2e.js",
    "revision": "6a66a81866489a186d486d893c037d27"
  },
  {
    "url": "assets/js/21.63440649.js",
    "revision": "6a2a41f04b58f84947abb73eae86f7d2"
  },
  {
    "url": "assets/js/22.723c4eb7.js",
    "revision": "a37009c8a2b133b9ed6155f6265cb707"
  },
  {
    "url": "assets/js/23.9f51f4e9.js",
    "revision": "75c64ca3d9737fd1c70937dc1dbd734e"
  },
  {
    "url": "assets/js/24.a541ea9e.js",
    "revision": "f08affc4394ec2deae5744e65971efd2"
  },
  {
    "url": "assets/js/25.dcaf8596.js",
    "revision": "ac3ce64ef1aa7ac2f999ed9089030dcf"
  },
  {
    "url": "assets/js/26.9b063e72.js",
    "revision": "eca5ea9932ad764467e1888f01de8190"
  },
  {
    "url": "assets/js/27.6fb07f79.js",
    "revision": "8bd4baa9e29ed77ac72669132c8eaeb4"
  },
  {
    "url": "assets/js/28.d1abe1d0.js",
    "revision": "1e9864d210abe416cdc30c23f8f2b7b0"
  },
  {
    "url": "assets/js/29.96dd6947.js",
    "revision": "0251572e256b5e09d6c3b2016568309c"
  },
  {
    "url": "assets/js/3.1d7c79dd.js",
    "revision": "da634e5859de4babec4a9feab21f3310"
  },
  {
    "url": "assets/js/30.9d808de8.js",
    "revision": "a807704ccf2cdfcf842bb15b369ebc6c"
  },
  {
    "url": "assets/js/31.1ea537f0.js",
    "revision": "6059de253014bcb0aada0d04ce10138b"
  },
  {
    "url": "assets/js/32.aa1f7842.js",
    "revision": "c8d0d53794c2c8e2ec67436064f65339"
  },
  {
    "url": "assets/js/33.bfaf7fe7.js",
    "revision": "54de8ea378620fef7ffe128fd974db32"
  },
  {
    "url": "assets/js/34.2f0504a7.js",
    "revision": "33b23b502943e4cc1b3785f05fc17a8b"
  },
  {
    "url": "assets/js/35.1237378b.js",
    "revision": "75173c4bf0e53f43277ce4c6b5fb410f"
  },
  {
    "url": "assets/js/36.802d7909.js",
    "revision": "6e903fa485f430bc6a7e0f0de1e98b0f"
  },
  {
    "url": "assets/js/37.468b2632.js",
    "revision": "79033aa5d12c6e26e7337a7c937afbde"
  },
  {
    "url": "assets/js/38.e526adbd.js",
    "revision": "ad81673167631b710a6418348bfa9c6c"
  },
  {
    "url": "assets/js/39.5054edb3.js",
    "revision": "dd19b6e3cf1bed903891b22b40b700a8"
  },
  {
    "url": "assets/js/4.0c455947.js",
    "revision": "3101b4fe6bc69c8c85f96f22972e04d9"
  },
  {
    "url": "assets/js/40.6ba26e99.js",
    "revision": "5b43c203ccd59f8faf28d8a9fbe10d34"
  },
  {
    "url": "assets/js/41.19c764a3.js",
    "revision": "7f0c4780da0a77f992206256d12ae8f9"
  },
  {
    "url": "assets/js/42.2b4aeb0b.js",
    "revision": "110e2b5cefc7c90ccb634ed0406636f9"
  },
  {
    "url": "assets/js/43.30a6dc4f.js",
    "revision": "93e27ce30bb403cbdd42c767f4ae24db"
  },
  {
    "url": "assets/js/44.6dc1cf1a.js",
    "revision": "282647ef414cbe820995b01dc3841996"
  },
  {
    "url": "assets/js/45.822bfb5e.js",
    "revision": "83c77b5d48484ababb5f53c34005b908"
  },
  {
    "url": "assets/js/46.01817fa0.js",
    "revision": "c6247d0daa05bae39ddfe5287d2c5512"
  },
  {
    "url": "assets/js/47.6c1ac0bc.js",
    "revision": "2e79c681d958fd418bb2d038ce76b8ae"
  },
  {
    "url": "assets/js/48.48036c1a.js",
    "revision": "ccff2a2c8081091cd5ce2897cbd695f5"
  },
  {
    "url": "assets/js/49.16ce44a0.js",
    "revision": "44f39d5a7354c19f2575ce73fcb22c66"
  },
  {
    "url": "assets/js/5.236295cf.js",
    "revision": "d6750092f7fc96b96e31bab03ef63a38"
  },
  {
    "url": "assets/js/50.01c52f65.js",
    "revision": "61f58a50be1602ba3b5eef3eaddfe9e3"
  },
  {
    "url": "assets/js/51.a7e98ff7.js",
    "revision": "cac3957b54ec15600d748a56873926a8"
  },
  {
    "url": "assets/js/52.b5aed1bd.js",
    "revision": "77d788432ea1a403c0ad8c5c148bc7f3"
  },
  {
    "url": "assets/js/53.fc6531df.js",
    "revision": "02fe17852f93cb9f7039045303b1132d"
  },
  {
    "url": "assets/js/54.f1ac5871.js",
    "revision": "dc0fdfa793856394f2e4356c904230a0"
  },
  {
    "url": "assets/js/55.6bd52121.js",
    "revision": "8a54fcac34c3c3ff633999f47a1880a2"
  },
  {
    "url": "assets/js/56.63738f82.js",
    "revision": "f26f79ace3b5117bd07318e4f662f435"
  },
  {
    "url": "assets/js/57.6b49ca43.js",
    "revision": "c9b203022a36b61037066a36e4a7f78d"
  },
  {
    "url": "assets/js/58.292b1b99.js",
    "revision": "46f096c1f088f0aabb0a57f0689317a6"
  },
  {
    "url": "assets/js/59.e14e8bd1.js",
    "revision": "1b708ab6b4bb33a8803ced2408b9f69a"
  },
  {
    "url": "assets/js/6.59c3ec02.js",
    "revision": "531571781535d6f4875144bbdd4ef322"
  },
  {
    "url": "assets/js/60.8a3e10a5.js",
    "revision": "b87ecc9cee27ffb45039414012864ad8"
  },
  {
    "url": "assets/js/61.3af8b3aa.js",
    "revision": "4ea93986ee79ab79fd96e4f652564aec"
  },
  {
    "url": "assets/js/62.bd41c43a.js",
    "revision": "bf6417d18a72b53270c2a6459dde763d"
  },
  {
    "url": "assets/js/63.b1d77ab5.js",
    "revision": "9598ca4bd48553fab9e902e427a86e23"
  },
  {
    "url": "assets/js/64.c9ab11f2.js",
    "revision": "d6baad07a80afc62cfb0e864d567476b"
  },
  {
    "url": "assets/js/65.4dc489bb.js",
    "revision": "5f2df2bb62c408eb1baee221e436d98e"
  },
  {
    "url": "assets/js/66.4396a8f1.js",
    "revision": "3921b2978bc16e6f930295e035e7377e"
  },
  {
    "url": "assets/js/67.29e13a99.js",
    "revision": "361bf7b1ce838db7540be0cb8fb48bb5"
  },
  {
    "url": "assets/js/68.1f4cfb29.js",
    "revision": "1ad38ade231bc8e6f32e4dfd1000efc9"
  },
  {
    "url": "assets/js/69.9dedd432.js",
    "revision": "de687c8c93b9674b19a18eb7cdac5b56"
  },
  {
    "url": "assets/js/7.7011ea24.js",
    "revision": "1362b2d9fec6c342590916dbe07a95bd"
  },
  {
    "url": "assets/js/70.6986b37c.js",
    "revision": "dd69fcd71417a847b62e4ed468455d54"
  },
  {
    "url": "assets/js/71.c3b377ee.js",
    "revision": "a3f04460563b6bf3fb12859d50d31e9d"
  },
  {
    "url": "assets/js/72.bf045cc6.js",
    "revision": "1420e6b912559eef8fd7563b9fdab139"
  },
  {
    "url": "assets/js/73.881b2ed2.js",
    "revision": "f160fcd2ff1be59b87a09af2a5a19d9b"
  },
  {
    "url": "assets/js/74.ddb22def.js",
    "revision": "1a2baf73cb4ce382b66d0130ab502fa9"
  },
  {
    "url": "assets/js/75.27fd8cdf.js",
    "revision": "ae981749c23f28c0842ff4044de302d2"
  },
  {
    "url": "assets/js/76.359663c2.js",
    "revision": "269f4180121c965ae0dc6d018a0ced7c"
  },
  {
    "url": "assets/js/77.4e75a9e1.js",
    "revision": "872645748b831b4cfcd719a534a2c55a"
  },
  {
    "url": "assets/js/78.495a467c.js",
    "revision": "f0a33251a5bac5d482939cbb6550c3ea"
  },
  {
    "url": "assets/js/79.b7fbab9b.js",
    "revision": "670eaf958fc00d711899c4df2867bb2c"
  },
  {
    "url": "assets/js/8.7bc97df1.js",
    "revision": "6a07b3a034e362d0f7b01bd93329e06e"
  },
  {
    "url": "assets/js/80.ec5b49c6.js",
    "revision": "09615830edb43400769327b811473361"
  },
  {
    "url": "assets/js/81.6fe672bc.js",
    "revision": "05a2644238992a86547579d0825091ab"
  },
  {
    "url": "assets/js/82.8539d2ea.js",
    "revision": "5ec729fc76432fc5d6355bbc5a706016"
  },
  {
    "url": "assets/js/83.4e388d6b.js",
    "revision": "06c01a9e50dc3025dc76f3d3cefc3147"
  },
  {
    "url": "assets/js/84.e5c635ed.js",
    "revision": "767bec7e19301d51e18cdb8eb0d68cc6"
  },
  {
    "url": "assets/js/85.1adfebf8.js",
    "revision": "039af611a0a20530c904289137678bbb"
  },
  {
    "url": "assets/js/86.e224defd.js",
    "revision": "cd39a44360c9777621da1ee34b17e337"
  },
  {
    "url": "assets/js/9.efd60b87.js",
    "revision": "697b07b743aa99f6963fc7d0405d85eb"
  },
  {
    "url": "assets/js/app.b689c180.js",
    "revision": "f218b96068f6d802f961d21def7da109"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "613f550233870aaadf55357cbb856686"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "7b418784f5ade60cfb07864279934718"
  },
  {
    "url": "community-made/index.html",
    "revision": "dfce0d36fee242351253002c2c813cfe"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "262fbd91e54974ada95bf624b0725b74"
  },
  {
    "url": "contribute/index.html",
    "revision": "66d71b8b15b5c7dee757e29eda6440e5"
  },
  {
    "url": "core-development/index.html",
    "revision": "a1e5c342c4892e88d9761f587802802e"
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
    "revision": "31bc147bf16bc02424fcf89b1e8490bf"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "870d420e354694ad391c4fc7d8388a9b"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "1f4e94e738a9edfa6ee55706205ff723"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "5463653a7b5e2d0dfa2fa6a7b1256cf7"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "0f26761e2e551a931e4ea7266e548a05"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "e36bea456faaae3dba6ab68c646e4bcd"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "4d216d7e5c726b9ef8f09f3ba9bad516"
  },
  {
    "url": "de/index.html",
    "revision": "b8552d44a23510bfcbaa9cc7973930df"
  },
  {
    "url": "de/links/index.html",
    "revision": "0654980e591b05efc0763b4db2c3ed78"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "3941f1e72d928d2cf8b4c9e0fd00a34e"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "b3b45a0e7451d5116056b686e5fd9721"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "41aded0ac65736bb03e70fad25da25dd"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "2c5a6ea62c687574ad3095cc94cb0b4e"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "1ffd64a1af0b7ce15886e597f1cdb39d"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "9baac2f6afdcc97ee36b24ac78586280"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "ba78ed3da2e3150e01a823217cad3500"
  },
  {
    "url": "de/setup/index.html",
    "revision": "266baaab06872c2b2b0a7926c0bdf4f4"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "3d8c69348e6d339c8660d1d4bd465fb5"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "3405f508cf93e2f6bde537f65b9b5af4"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "31f48edde3811da0a793ba398c2db095"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "abd3482878ab65174444b16522adf1c9"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "bc31b3cf87069d191f9366b2d7834484"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "7bc7d742cfbdab9cd2f57ca2f9e2a29e"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "9c181606a611719ab7abf2bc9c04d2ba"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "57a1a6466903c108b10dfd2a2102cd23"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "f5c8d0ed820d7e5e66820343e5851e74"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "d5b3b54e30490000613c0481c252f377"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "fa0d0bab18d8e0e474973b664f5e4d32"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "d7b50d8ffe4e565b05a9222bbf46cbba"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "0135bbca92f3fa68ff435c780f222081"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "8c38a8c20a84ee6877c4160613119163"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "6a51d6a602a6a4cd32de6197067a7b19"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "8b1d3a7146c74984cd9dd0730743dbbb"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "056c167fa7784863776f61f16f571642"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "16c36145b13a9ec3420decf898160ad3"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "222a2d242fae99c5c0982bf8dffd24c4"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "7f06402099547c9d6910a6055c3b4c47"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "35a9ddc7f5a43e1dfb439af377e22098"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "c87bd8354a1c69ea10c0974f83c62fa1"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "1530a92ad55e4c62cd93b8edfe012e9d"
  },
  {
    "url": "de/usage/index.html",
    "revision": "ed5fd88ddcc578559b33658c011d8980"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "52183dcaddb6a5fc962389fceacba80f"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "4c4e69c58a4fdd007d1a63bbbbb8ccb0"
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
    "revision": "8c0789b14378b3c9f8b99e616cb91c14"
  },
  {
    "url": "links/index.html",
    "revision": "8be74153e151c1e9fcbf3f9718718a36"
  },
  {
    "url": "satsetup/index.html",
    "revision": "e1270ba39b75c833495998616505be4e"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "4d72373ca0feec7e2ddf0504b67dd94c"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "56ba2e680d806d04bfeef6cd10460d1b"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "b925a5c55ca79654e70a36f119a38e19"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "437e86253290651bcfb2cc756d2a85ac"
  },
  {
    "url": "setup/docker.html",
    "revision": "69f1340255d1495ea14cf05b6fcc8893"
  },
  {
    "url": "setup/image-install.html",
    "revision": "1eec528ec6a0ed2cf2ef59a3d0657902"
  },
  {
    "url": "setup/index.html",
    "revision": "0d6697e5eaa5e76814b37a68013ebdac"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "4d6e1340afe95af17ddc02d6aae52ea9"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "72d0a2330fe8e848800d7df093e66c82"
  },
  {
    "url": "setup/requirements.html",
    "revision": "ee03444a22edd2972fb62e2641198b4b"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "69314e9f400203a1064d4aebc35de1d6"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "38bc12d3047bf90780745cd9a4a969f5"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "15fe1dcffad8d949872fcb640e120f25"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "2c6f6f069380fa41468dab4c107513b2"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "733f391c814067bac16198d4316dd545"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "fda799c23055e8d9335da010a10804a4"
  },
  {
    "url": "skill-development/index.html",
    "revision": "ff26482cc150d0d5c1ced443c09d55f9"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "9165726c6759a60ff0e29d2649023a77"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "393efe68b866482748c40b8387038653"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "22b5462ec349d67673d66ab622f0f79f"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "6d6ee3ca1e00c02a9fca6af5866670a1"
  },
  {
    "url": "sponsors/index.html",
    "revision": "1fa566088dfe82255c2a105f2d113a73"
  },
  {
    "url": "usage/index.html",
    "revision": "6eb68dacf46afaf8bce16c168ec078ff"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "bed18037493f659604a6904563e6a797"
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

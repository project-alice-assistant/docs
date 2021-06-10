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
    "revision": "ee1e72f63a7401aa11d2a65bbff31885"
  },
  {
    "url": "about-alice/GLOSSARY.html",
    "revision": "a856848db90c2c4b530e28900016bdd7"
  },
  {
    "url": "about-alice/index.html",
    "revision": "486c496101a283705c0f065164743379"
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
    "url": "assets/js/10.84e28875.js",
    "revision": "472e0348fc0f7bf8e596b703aa36d60b"
  },
  {
    "url": "assets/js/11.b7ff638a.js",
    "revision": "da251b597d64207a448c56320481f10f"
  },
  {
    "url": "assets/js/12.251270c0.js",
    "revision": "7be20da5c4a29167066e0312e54769d5"
  },
  {
    "url": "assets/js/13.1019245a.js",
    "revision": "fe9a124bc381d0969d65b2ea967aa713"
  },
  {
    "url": "assets/js/14.e18d281e.js",
    "revision": "c094b2a69c696e471579c6027939fa9b"
  },
  {
    "url": "assets/js/15.76dd3d1a.js",
    "revision": "1fcc0e75b6708a65be43c9e3f9cd7b95"
  },
  {
    "url": "assets/js/16.b033c4ec.js",
    "revision": "08dd5094034247544d313f6f6475b237"
  },
  {
    "url": "assets/js/17.7b266290.js",
    "revision": "23b6bb99d5b49355398ac7bb9d7fd898"
  },
  {
    "url": "assets/js/18.b612d451.js",
    "revision": "24d4384f60325b5dae7fdd2b9c4d1bac"
  },
  {
    "url": "assets/js/19.f28755dc.js",
    "revision": "d4111d4ef2d98514b05b037a9061c2b2"
  },
  {
    "url": "assets/js/2.f66bfe7f.js",
    "revision": "e386524b0120a923e033a39fb553ff1e"
  },
  {
    "url": "assets/js/20.3193c35c.js",
    "revision": "452cbd84ca92f83d3c9df2580b9f1993"
  },
  {
    "url": "assets/js/21.2121fbc4.js",
    "revision": "820e75e884f5dbe515f06b77d4e85b3c"
  },
  {
    "url": "assets/js/22.2b91dc8c.js",
    "revision": "c1462c908ac75d05fda7c112f76bf2b4"
  },
  {
    "url": "assets/js/23.966d541a.js",
    "revision": "1b9a92bd67275bbfaacf92f3ce0b3366"
  },
  {
    "url": "assets/js/24.b30b2573.js",
    "revision": "73a2b77bcf69d11b99f3c9d17fc01dfa"
  },
  {
    "url": "assets/js/25.697a9bf5.js",
    "revision": "8f87ece827a6c26f74cc7d2d13d85515"
  },
  {
    "url": "assets/js/26.8657ff92.js",
    "revision": "3bcc2ea2d500539b848042e3d9e59e2d"
  },
  {
    "url": "assets/js/27.99cbd7de.js",
    "revision": "1b8506ec8c33ca66a440cb49294eaf90"
  },
  {
    "url": "assets/js/28.1c737a3c.js",
    "revision": "ddad8146d4599e1a3a25b8200c8912d4"
  },
  {
    "url": "assets/js/29.e7e38b19.js",
    "revision": "88c900fe886f93eaa372a5fcf1de0c41"
  },
  {
    "url": "assets/js/3.a5b8ed79.js",
    "revision": "ba2620c59eedb08d9d8fa9cec69bf5b9"
  },
  {
    "url": "assets/js/30.c2c855ce.js",
    "revision": "ed2e4630836196c17803037dce484d9e"
  },
  {
    "url": "assets/js/31.4219d6a5.js",
    "revision": "1cfef9b20dcf8f6e3735142a9b38c552"
  },
  {
    "url": "assets/js/32.ed71f522.js",
    "revision": "336d446a9a2d5544ee3c640ae6a92664"
  },
  {
    "url": "assets/js/33.042c54c8.js",
    "revision": "b359ae0d2ef3d638dd2cf8111d3b9574"
  },
  {
    "url": "assets/js/34.3c145794.js",
    "revision": "ea33cc873c75721115789e9737b7429f"
  },
  {
    "url": "assets/js/35.a511e637.js",
    "revision": "9850ce246555229999bc23197a10d2e5"
  },
  {
    "url": "assets/js/36.2c56a098.js",
    "revision": "29ed420196160fe8a1ecbc2b40fb3b77"
  },
  {
    "url": "assets/js/37.f1716799.js",
    "revision": "0934ed48ca9ac713726d35e80750c4ec"
  },
  {
    "url": "assets/js/38.404d3fd7.js",
    "revision": "da152d29f93277b480fb133acaf638bf"
  },
  {
    "url": "assets/js/39.c5758429.js",
    "revision": "3c60fecd7e1f419cb53bc3317208e5e2"
  },
  {
    "url": "assets/js/4.220f7797.js",
    "revision": "11afbd9cb98f8469c5f88d6d17b0afb0"
  },
  {
    "url": "assets/js/40.958a8e38.js",
    "revision": "35a7be51ec4e2eb38da5bf25c3ff581e"
  },
  {
    "url": "assets/js/41.151a2fe0.js",
    "revision": "9e41f826660368866ad8ad85e2f984cc"
  },
  {
    "url": "assets/js/42.f3b4849c.js",
    "revision": "7357bf486f35fc275e8045016615108e"
  },
  {
    "url": "assets/js/43.46c86a4f.js",
    "revision": "1609d8797cc5a4ac97e0a73354a1affa"
  },
  {
    "url": "assets/js/44.893d08b1.js",
    "revision": "77514da57d35941ed4aba8ad29baf72e"
  },
  {
    "url": "assets/js/45.3d705a25.js",
    "revision": "79eeb17e4f9bf2ea4b48f0338ee8a3ce"
  },
  {
    "url": "assets/js/46.6fb1d976.js",
    "revision": "c5775fc6a88a4fd57589b76b12e53265"
  },
  {
    "url": "assets/js/47.a4493f84.js",
    "revision": "9e85ef2395992744db396b7ef50bb784"
  },
  {
    "url": "assets/js/48.3458e20a.js",
    "revision": "a4e1f98e8d872d1272b464eb2cce7040"
  },
  {
    "url": "assets/js/49.790f975a.js",
    "revision": "70b5cf7676576b245efe62cbbfbdb10c"
  },
  {
    "url": "assets/js/5.db8ca564.js",
    "revision": "79bfeb070dfa9fcd45bc2fe8c752a23b"
  },
  {
    "url": "assets/js/50.93b97f8a.js",
    "revision": "5dae4e8616e1206785397ae49c61c9ea"
  },
  {
    "url": "assets/js/51.caa938ba.js",
    "revision": "a005b6294b8f9a8212cae07c44642ea4"
  },
  {
    "url": "assets/js/52.6063fff2.js",
    "revision": "f77e47d14a33ef3a924642a22b99d945"
  },
  {
    "url": "assets/js/53.85af4428.js",
    "revision": "32c56bd39ca52e2fad1b374db728b61c"
  },
  {
    "url": "assets/js/54.16a19ec5.js",
    "revision": "d6373384f61e05d9a32a2fe641ed528f"
  },
  {
    "url": "assets/js/55.6bce8f48.js",
    "revision": "7b2f2ed1479d4ccd95b6a901839cd064"
  },
  {
    "url": "assets/js/56.fdaecef7.js",
    "revision": "cbf1550ce7280cfe298c6823ded12896"
  },
  {
    "url": "assets/js/57.59f668b8.js",
    "revision": "b75c1464a4f790f6630a35590dcb89e2"
  },
  {
    "url": "assets/js/58.54b6c2b4.js",
    "revision": "30c252e71c09824538600fc9b21f5b4f"
  },
  {
    "url": "assets/js/59.61062406.js",
    "revision": "dbfc12de95f0a8ce0018e6ce2da5d80f"
  },
  {
    "url": "assets/js/6.9ce82044.js",
    "revision": "727d6263bf06d8367885107e31b63bda"
  },
  {
    "url": "assets/js/60.2bdb9600.js",
    "revision": "f676b1476d5a250ec65a09f1146d277c"
  },
  {
    "url": "assets/js/61.9c07fd7d.js",
    "revision": "6e82a1c89919eca47921390df1b37b4c"
  },
  {
    "url": "assets/js/62.382f23e3.js",
    "revision": "b40d1adb91f0df3af9724b3a1def217c"
  },
  {
    "url": "assets/js/63.63a85d6b.js",
    "revision": "ec89739808e14543f1fdb1574fb61354"
  },
  {
    "url": "assets/js/64.62c167f2.js",
    "revision": "786dc213c7cd948231636682a3a218b2"
  },
  {
    "url": "assets/js/65.044d1709.js",
    "revision": "3eb493341d0e9b33049556a92c9768f9"
  },
  {
    "url": "assets/js/66.f53ebe99.js",
    "revision": "777ac7fa66804e882e2200f82cd43c8b"
  },
  {
    "url": "assets/js/67.dc98eec9.js",
    "revision": "1d889763b0200f16398be9ce0d7c6685"
  },
  {
    "url": "assets/js/68.40099752.js",
    "revision": "be64a0edb6a38ba037c682b696498f6f"
  },
  {
    "url": "assets/js/69.05e561b5.js",
    "revision": "f763f357f2a20e18c71c4713a4bc7565"
  },
  {
    "url": "assets/js/7.09c86162.js",
    "revision": "8c41789645e5df6ac8560fc6d1f76b76"
  },
  {
    "url": "assets/js/70.24e91d7a.js",
    "revision": "862d98fd289bb02a3a84ceba643a497b"
  },
  {
    "url": "assets/js/71.5a2209dd.js",
    "revision": "6e5ad4e3ab69e3e1be890e9380754557"
  },
  {
    "url": "assets/js/72.7c4471db.js",
    "revision": "7419ee094cbae89cb0eef4414fc8c3a5"
  },
  {
    "url": "assets/js/73.3530ec7d.js",
    "revision": "a8ab0d140f272718c5378f88e21bb8b6"
  },
  {
    "url": "assets/js/74.917f69bb.js",
    "revision": "112ba6f72c41b88f9d61ba9792b3a586"
  },
  {
    "url": "assets/js/75.4e571621.js",
    "revision": "034d164a0f5a540eeb34adc215f4aab0"
  },
  {
    "url": "assets/js/76.5706e215.js",
    "revision": "8d9f375d962385697fe68eee2ebbc0d8"
  },
  {
    "url": "assets/js/77.f8c7b1b4.js",
    "revision": "9e8c9a876a38189d2994444ee84d880f"
  },
  {
    "url": "assets/js/78.cd4a99fb.js",
    "revision": "17e70513fc2c0ae501392614c6cf184a"
  },
  {
    "url": "assets/js/79.07bcf57b.js",
    "revision": "94c4785a9cbe4c7dd6be4c1577bbbc89"
  },
  {
    "url": "assets/js/8.ede7ee97.js",
    "revision": "76cba7b057de012b8d5274b5161e4288"
  },
  {
    "url": "assets/js/80.86feea3c.js",
    "revision": "699400a37a1d446a01598ae9de6b9ad9"
  },
  {
    "url": "assets/js/81.7e19f976.js",
    "revision": "f92a02ce532a5a2f3c21362575780305"
  },
  {
    "url": "assets/js/82.73eaa90b.js",
    "revision": "6e745696143c21c6c3a5b550462395fb"
  },
  {
    "url": "assets/js/83.c3463dd3.js",
    "revision": "aa0bc0a9458c1ed63d6622d2259dc758"
  },
  {
    "url": "assets/js/84.88875813.js",
    "revision": "e3f8e10e5d565a2419bf1ef3fd834083"
  },
  {
    "url": "assets/js/85.e078ab0b.js",
    "revision": "9b6f8196cfab3ea06dd95ff69af2df77"
  },
  {
    "url": "assets/js/86.f1545449.js",
    "revision": "fa241a636c5b02487f25150281e632bb"
  },
  {
    "url": "assets/js/9.b931a0ce.js",
    "revision": "a3ec1ddd2c0cfed8b3d6f25dd84ac0f5"
  },
  {
    "url": "assets/js/app.ccb6fdef.js",
    "revision": "032301222be6c85ac2d9652e8cf96d0c"
  },
  {
    "url": "community-made/frequent-quesetions-and-answer.html",
    "revision": "62a261f82d905c5b4e02ce5cf94ebbfc"
  },
  {
    "url": "community-made/getting-started-pycharm.html",
    "revision": "b883be9fffa366c16e01c20cf39e9f2a"
  },
  {
    "url": "community-made/index.html",
    "revision": "cd7c1c7c92f4c4aaf06a89a7a712265e"
  },
  {
    "url": "contribute/code-guidelines.html",
    "revision": "edf3a776b5f5cbca520af52afc1e8e8d"
  },
  {
    "url": "contribute/index.html",
    "revision": "7ca8eede47181ec1e04591e32c1a3c94"
  },
  {
    "url": "core-development/index.html",
    "revision": "0e634ba86294be5bd19db6bc6d3bcde2"
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
    "revision": "4dbbd0e60b463127d7559d6184c9ce0e"
  },
  {
    "url": "de/about-alice/index.html",
    "revision": "908844ac2e848324760319002a52355c"
  },
  {
    "url": "de/community-made/getting-started-pycharm.html",
    "revision": "61c717941960a225659335dfca1a092b"
  },
  {
    "url": "de/community-made/index.html",
    "revision": "1266f1c1e21796c2648436464067e0dc"
  },
  {
    "url": "de/contribute/code-guidelines.html",
    "revision": "11df73137a7361faf341fa2efd3c00fd"
  },
  {
    "url": "de/contribute/index.html",
    "revision": "0d91e5ad707bf7f90506b4301655e469"
  },
  {
    "url": "de/core-development/index.html",
    "revision": "0deda0cdd19acabe4603762405b577c4"
  },
  {
    "url": "de/index.html",
    "revision": "44297cc9dbbd9d2b8ac4e5b8061e8013"
  },
  {
    "url": "de/links/index.html",
    "revision": "9136561666b36c4bd90dec6dd88f3ea4"
  },
  {
    "url": "de/satsetup/index.html",
    "revision": "c0df59685d69713ddea0f04120df801a"
  },
  {
    "url": "de/satsetup/manual-install.html",
    "revision": "33f45124dfbf23ee6c4b1eaa1d1ef2cb"
  },
  {
    "url": "de/satsetup/preinstalled.html",
    "revision": "a49ca65b9d9654c14a36586bd3b4c54e"
  },
  {
    "url": "de/satsetup/troubleshooting.html",
    "revision": "59b162f9ed55f6a033ad09f40eaa536f"
  },
  {
    "url": "de/satsetup/updateToB1.html",
    "revision": "198057bcee98e3df60b6f128a0704feb"
  },
  {
    "url": "de/setup/docker.html",
    "revision": "6d846dd1ee0e6424d0bdf398d71e3d73"
  },
  {
    "url": "de/setup/image-install.html",
    "revision": "03a87cd4497a99c91810e4cb28a111f4"
  },
  {
    "url": "de/setup/index.html",
    "revision": "b4ddc885e095191ff5f7342c11f96582"
  },
  {
    "url": "de/setup/manual-install.html",
    "revision": "0b1e7452faeb57194aca83b0b7378527"
  },
  {
    "url": "de/setup/preinstalled.html",
    "revision": "9f8696c7933d0154c2772fe58c07b789"
  },
  {
    "url": "de/setup/requirements.html",
    "revision": "a80a30648c95bd8f802dd2b45ee3364d"
  },
  {
    "url": "de/setup/room-configuration.html",
    "revision": "170e0e85819d551b2d2660a8097240c8"
  },
  {
    "url": "de/setup/troubleshooting.html",
    "revision": "1f0ce878fbd5b85ae58a21fdc0891bae"
  },
  {
    "url": "de/setup/wakeword.html",
    "revision": "03568abf0d25504fb8a315a275f3684b"
  },
  {
    "url": "de/skill-development/builtin-intents.html",
    "revision": "c47347b61b91627fcb48af4c3fafff9e"
  },
  {
    "url": "de/skill-development/builtin-slots.html",
    "revision": "45ca1cbf9c5639559bc48a93af7df586"
  },
  {
    "url": "de/skill-development/database-access.html",
    "revision": "9e57cfc4e3840c28739d481b116d4160"
  },
  {
    "url": "de/skill-development/dialog-template.html",
    "revision": "fd7dbb1fd41994e3e3eee19ed20e0c42"
  },
  {
    "url": "de/skill-development/events.html",
    "revision": "3ec4b5153c4984fb90984cf9777d83d1"
  },
  {
    "url": "de/skill-development/index.html",
    "revision": "23bd074cea8532795497a1284c3fed23"
  },
  {
    "url": "de/skill-development/logging.html",
    "revision": "ae7a274819a8ef24d3f4b2d36333f326"
  },
  {
    "url": "de/skill-development/missing-slot-info.html",
    "revision": "ddc89f0f196bde5e3159108420b28f2d"
  },
  {
    "url": "de/skill-development/new-language-support.html",
    "revision": "598c91d02aeeb6973c6b47b7ae9d47b1"
  },
  {
    "url": "de/skill-development/publishing-to-skill-store.html",
    "revision": "58c1f6fb24aa771ab8293af500a48151"
  },
  {
    "url": "de/skill-development/room-configuration.html",
    "revision": "776fb9077796bac51369cbc478ee1f8e"
  },
  {
    "url": "de/skill-development/skill-configuration-file.html",
    "revision": "7c4cf6fdb4063fc45e9ba476ee059674"
  },
  {
    "url": "de/skill-development/skill-download-suggestion.html",
    "revision": "9cfdee6c35e6d6e8fa55abd0c7faab4a"
  },
  {
    "url": "de/skill-development/talk-file.html",
    "revision": "f8fc05b8a3a012fc7b33bcb4e043b562"
  },
  {
    "url": "de/skill-development/widgets.html",
    "revision": "4fba34ff0f13535deb9a92a69813173f"
  },
  {
    "url": "de/skill-development/your-first-skill.html",
    "revision": "dac165485fc1f6b7d11955e4bee68e37"
  },
  {
    "url": "de/sponsors/index.html",
    "revision": "b0e4fe56150d9c0ed45c5746c9b16da7"
  },
  {
    "url": "de/usage/index.html",
    "revision": "18d6809f76f0d4a06f58614cd59c8b68"
  },
  {
    "url": "de/usage/web-interface.html",
    "revision": "bf7a0dbe55fc69a3e3aa27af7dddc77e"
  },
  {
    "url": "GLOSSARY.html",
    "revision": "31f8777b3e4baf85edc82b1c33a5d526"
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
    "revision": "d20ef3316ed1190a3adbdafd7510ca9d"
  },
  {
    "url": "links/index.html",
    "revision": "d403a3183c4a2722829f1c070d56b274"
  },
  {
    "url": "satsetup/index.html",
    "revision": "8914677c78ae9b2024218122ce355ca3"
  },
  {
    "url": "satsetup/manual-install.html",
    "revision": "5641fdeddd7d6d86e0ee426305d3b9f1"
  },
  {
    "url": "satsetup/preinstalled.html",
    "revision": "1431df23263962afe1a4f747b4760aa3"
  },
  {
    "url": "satsetup/troubleshooting.html",
    "revision": "cc72c2258c5a4007c1f69b93dccc361a"
  },
  {
    "url": "satsetup/updateToB1.html",
    "revision": "313f682931ed6e995fc1227cf61af587"
  },
  {
    "url": "setup/docker.html",
    "revision": "85f333943f859d3a7ceede1bb86c3b0c"
  },
  {
    "url": "setup/image-install.html",
    "revision": "fdd056aac837a8d041665517fcf1944a"
  },
  {
    "url": "setup/index.html",
    "revision": "5a0aff1841b1823223080d3d81a811f8"
  },
  {
    "url": "setup/manual-install.html",
    "revision": "5fa3666241957b277cd3133041e9392d"
  },
  {
    "url": "setup/preinstalled.html",
    "revision": "7a3f282201e351548846377ecd470969"
  },
  {
    "url": "setup/requirements.html",
    "revision": "bce34630f0002959276abd9a1ff55588"
  },
  {
    "url": "setup/room-configuration.html",
    "revision": "f1095d82f19679a97e66214dfed04649"
  },
  {
    "url": "setup/troubleshooting.html",
    "revision": "8eb3bdb74fdb79088ed489e0a2dca126"
  },
  {
    "url": "setup/wakeword.html",
    "revision": "183762834698eb6c047d87f30ee63b4d"
  },
  {
    "url": "skill-development/down-the-rabbit-hole.html",
    "revision": "1063578c6f914a097ceea81ba94f804b"
  },
  {
    "url": "skill-development/files-in-depth.html",
    "revision": "f739257bb004f90da3c69c182d4a47d6"
  },
  {
    "url": "skill-development/going-further.html",
    "revision": "afe54f7a5f84476aaa6d9cb75988e53f"
  },
  {
    "url": "skill-development/index.html",
    "revision": "f2b2fefce65bfc0557d8d493c14d2eb6"
  },
  {
    "url": "skill-development/new-language-support.html",
    "revision": "df5352afda9477b25e9483e966bde9b6"
  },
  {
    "url": "skill-development/publishing-to-skill-store.html",
    "revision": "6158911ceb3f7485268b2da45827d5ac"
  },
  {
    "url": "skill-development/work-made-for-you.html",
    "revision": "5dd3adb66949fe35fb7cebc8171f754a"
  },
  {
    "url": "skill-development/your-first-skill.html",
    "revision": "62716cd4f0174a93cf75df801755bab7"
  },
  {
    "url": "sponsors/index.html",
    "revision": "b04ee7786932cb6616e0963794e6c881"
  },
  {
    "url": "usage/index.html",
    "revision": "3716d299f701528c7439819f83e646e1"
  },
  {
    "url": "usage/web-interface.html",
    "revision": "1f6d50e15e19f29410e0cee7a6b878a8"
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

(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{364:function(e,t,o){"use strict";o.r(t);var a=o(8),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("This is an alpha release! It is subject to major changes and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!")])]),e._v(" "),o("ul",[o("li",[e._v("Download our prefabricated Raspbian buster image:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSatellite/releases/tag/v1.0.0-a1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Direct download"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("This image has nothing more than Project Alice and its dependencies as well as Hermes Led Control")]),e._v(" "),o("li",[e._v("If you wonder what's check the "),o("a",{attrs:{href:"preinstalled"}},[e._v("Preinstalled Packages Section")])])])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("You need the AliceSatellite Skill installed and running on your main unit!")])]),e._v(" "),o("ul",[o("li",[e._v("Flash the image to your SD card")]),e._v(" "),o("li",[o("strong",[e._v("do not place any wpa_supplicant.conf or ssh file in /boot")])]),e._v(" "),o("li",[o("strong",[e._v("do not boot your raspberry before doing this next point!!")])]),e._v(" "),o("li",[o("strong",[e._v("Edit the /boot/ProjectAliceSatellite.yaml file")]),e._v(". If there's no ProjectAliceSatellite.yaml file on the /boot partition, grab the latest from sources: "),o("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSatellite/blob/master/ProjectAliceSatellite.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProjectAliceSatellite.yaml"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Configure it according to your information and needs. All configurations have a little explanation, but most should be self-explanatory.")]),e._v(" "),o("li",[e._v("Make sure to have a space after the colons:\n"),o("ul",[o("li",[e._v("Wrong: "),o("code",[e._v("forceRewrite:yes")])]),e._v(" "),o("li",[e._v("Correct: "),o("code",[e._v("forceRewrite: yes")])])])]),e._v(" "),o("li",[e._v("If the option value contains any special characters, enclose the whole with double quotes:\n"),o("ul",[o("li",[e._v("Wrong: "),o("code",[e._v("mqttPassword: a:%qJi")])]),e._v(" "),o("li",[e._v("Correct: "),o("code",[e._v('mqttPassword: "a:%qJi"')])])])]),e._v(" "),o("li",[e._v("Save it, unplug your sd, plug it in your raspberry pi.")]),e._v(" "),o("li",[e._v('Ask Alice to "Add a new satellite"')]),e._v(" "),o("li",[e._v("Power up your satellite")]),e._v(" "),o("li",[e._v("Alice should boot by herself and connect to your Wi-Fi, update, configure and start. This may take a while")]),e._v(" "),o("li",[e._v('If Alice times out for the satellite addition, after 5 minutes, she\'ll tell you. In that case ask her again to "Add a satellite". If you are using respeakers per exemple, the satellite setup might take more than 5 minutes.')]),e._v(" "),o("li",[e._v("The SSH User is "),o("code",[e._v("pi")]),e._v(" and the password is "),o("code",[e._v("umbrella")])])]),e._v(" "),o("p",[e._v("If everything goes fine, Alice will confirm the addition of the satellite and automatically configure it to connect to the correct Mqtt server. She will also automatically upload the hotword and wakeword resources to the new device.")]),e._v(" "),o("h4",{attrs:{id:"having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[e._v("#")]),e._v(" Having issues with Alice? She doesn't hear you? Doesn't seem to start?")]),e._v(" "),o("p",[e._v("Have a look at our "),o("a",{attrs:{href:"troubleshooting"}},[e._v("Troubleshooting guide")]),e._v("!")])])}),[],!1,null,null,null);t.default=i.exports}}]);
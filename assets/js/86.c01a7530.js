(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{567:function(e,t,s){"use strict";s.r(t);var a=s(24),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"what-s-this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-this"}},[e._v("#")]),e._v(" What's this?")]),e._v(" "),s("p",[e._v("Ever got frustrated because something you ask your assistant isn't understood? What if I told you that Alice can try to find a "),s("Term",{attrs:{term:"skill"}}),e._v(" on our skillstore that could fulfill your request?")],1),e._v(" "),s("h1",{attrs:{id:"lang-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lang-sample"}},[e._v("#")]),e._v(" lang.sample")]),e._v(" "),s("p",[e._v("There's no black magic behind this, simply a little work for the "),s("Term",{attrs:{term:"skill"}}),e._v(" dev to make it work!\nWhen a new version of your skill is published, our store is updated automagically. During this process, it also looks for files, in the "),s("code",[e._v("dialogTemplate")]),e._v(" directory, with the "),s("code",[e._v(".sample")]),e._v(" extension. The file is name after whatever language is contains, example "),s("code",[e._v("en.sample")]),e._v(" or "),s("code",[e._v("de.sample")]),e._v(".")],1),e._v(" "),s("p",[e._v("The structure of the file is really simple! It's a json file that contains a list... Let's check an example, for the "),s("code",[e._v("DateDayTimeYear")]),e._v(" "),s("Term",{attrs:{term:"skill"}})],1),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"what time is it"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"what\'s the date"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"what is the year"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"what is the day"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tell me the time"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tell me the date"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"time"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"date"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("This file is named "),s("code",[e._v("en.sample")]),e._v(" and is placed in "),s("code",[e._v("dialogTemplate")]),e._v(". Its content defines, or try to guess, the most common ways a lambda user would ask or say to trigger your skill. There aren't many rules about this file but keep these in mind:")]),e._v(" "),s("ul",[s("li",[e._v("Politeness forms are removed, so don't add "),s("code",[e._v("please")]),e._v(" or "),s("code",[e._v("could you")]),e._v(" or stuff like that.")]),e._v(" "),s("li",[e._v("The file is limited to 10 samples.")]),e._v(" "),s("li",[e._v("Do not use punctuations.")]),e._v(" "),s("li",[e._v("Try to think out of the box and find casual samples, like, everyday usage forms.")]),e._v(" "),s("li",[e._v("Do not cover "),s("code",[e._v("disabledByDefault")]),e._v(" intents, or answer intents such as "),s("code",[e._v("yes/no")]),e._v(".")]),e._v(" "),s("li",[e._v("Think about it as "),s("code",[e._v("What do I definitely want my skill to react to?")])])]),e._v(" "),s("h1",{attrs:{id:"speakablename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#speakablename"}},[e._v("#")]),e._v(" speakableName")]),e._v(" "),s("p",[e._v("That's the last required bit. In the install file, make sure you have a property called "),s("code",[e._v("speakableName")]),e._v(". As you know by now, "),s("Term",{attrs:{term:"skill"}}),e._v(" names are PascalCase, so let's say, not really speakable for a "),s("Term",{attrs:{term:"tts"}}),e._v(" engine. This property defines the name Alice will speak when she proposes users to download your "),s("Term",{attrs:{term:"skill"}}),e._v(". In the case of our "),s("code",[e._v("DateDayTimeYear")]),e._v(" "),s("Term",{attrs:{term:"skill"}}),e._v(" the speakableName is set to "),s("code",[e._v("date time functions")]),e._v(", which is speakable for Alice, at least better than "),s("code",[e._v("DateDayTimeYear")])],1),e._v(" "),s("h1",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("Very easy, wasn't it? Making your skill compatible with auto suggestions is a good idea, it will make the user experience much better over time. Imagine a time when hundreds of skills are available, Alice will never again tell you she doesn't understand something, but will always have a skill to propose for your request!")])])}),[],!1,null,null,null);t.default=n.exports}}]);
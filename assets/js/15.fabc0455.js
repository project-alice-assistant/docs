(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{215:function(e,t,s){"use strict";s.r(t);var o=s(28),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("p",[e._v("Yes, nobody and nothing's perfect but we try hard to be as close as perfect as possible. But hey, let's face it, it's a ton of code and it can go wrong, or maybe you made something wrong, or you're using hardware we've never tested, or.... Ok, I stop.... Let's find a solution to your problem! Keep in mind that the first boot can take up to 15 minutes of silence depending on your settings, hardware and all! "),s("strong",[e._v("Do not unplug your device")]),e._v(" if nothing happens, you might cut Alice in the middle of her training!")]),e._v(" "),s("p",[e._v("First thing we want to do is SSH to your device. Find out your device's IP and ssh to it using whatever you have. On Windows "),s("a",{attrs:{href:"https://www.9bis.net/kitty/#!pages/download.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kitty"),s("OutboundLink")],1),e._v(" is a good solution, on other platforms your can simply connect through your terminal.")]),e._v(" "),s("p",[e._v("There are many things we can check, this is one path I'm giving you, but it's not the only one!")]),e._v(" "),s("p",[e._v("First, let's check if the Project Alice service is up and running:")]),e._v(" "),s("p",[s("code",[e._v("sudo systemctl status ProjectAlice")])]),e._v(" "),s("p",[e._v("You should get some info about the service. If you check it for a while you'll notice that it either continues with normal operations in which case you have to wait for it to start, or you'll notice it crashes and restarts all the time or even says that the service is dead.")]),e._v(" "),s("p",[e._v("If the service is dead or restarts all the time, let's debug it! Stop Project Alice. First pres CTRL+C to stop the systemctl command and in your terminal type")]),e._v(" "),s("p",[s("code",[e._v("sudo systemctl stop ProjectAlice")])]),e._v(" "),s("p",[e._v("Let's start it manually to have a better vision of the logs. In your ssh terminal type")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/pi/ProjectAlice\n./venv/bin/python main.py\n")])])]),s("p",[e._v("This will manually start ProjectAlice printing out every details and stopping if any unrecoverable error arises. Check for these errors and report them if any on "),s("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),s("OutboundLink")],1),e._v(". Read the logs carefully, they always give hint if something's missing, a setting not set, something wrong.")]),e._v(" "),s("p",[e._v("If there's no errors and Alice seems to start fine, the last log line, on first boot, should be something like")]),e._v(" "),s("p",[s("code",[e._v("Starting Alice Core")])]),e._v(" "),s("p",[e._v("And you should hear her welcoming you and asking for the first user creation.")]),e._v(" "),s("h4",{attrs:{id:"the-logs-says-she-is-asking-for-a-new-user-but-i-don-t-hear-anthing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-logs-says-she-is-asking-for-a-new-user-but-i-don-t-hear-anthing"}},[e._v("#")]),e._v(" The logs says she is asking for a new user, but I don't hear anthing")]),e._v(" "),s("p",[e._v("Common audio problem? Stop Alice with CTRL+c and let's see if your audio device is installed using")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("aplay -l\narecord -l\n")])])]),s("p",[e._v("Those commands should return first the device used to play audio and second to record audio. If your device is not listed, there's a problem!")]),e._v(" "),s("p",[e._v("WIP")])])}),[],!1,null,null,null);t.default=n.exports}}]);
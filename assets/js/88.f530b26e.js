(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{390:function(e,t,o){"use strict";o.r(t);var s=o(8),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Keep in mind that the first boot can take up to 15 minutes of silence depending on your settings, hardware and all! "),o("strong",[e._v("Do not unplug your device")]),e._v(" if nothing happens, you might cut Alice in the middle of her training!")]),e._v(" "),o("p",[e._v("First thing we want to do is SSH to your device. Find out your device's IP and ssh to it using whatever you have. On Windows, the terminal now supports SSH "),o("a",{attrs:{href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Terminal"),o("OutboundLink")],1),e._v(" or you can use "),o("a",{attrs:{href:"https://www.9bis.net/kitty/#!pages/download.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kitty"),o("OutboundLink")],1),e._v(", on other platforms your can simply connect through your terminal.")]),e._v(" "),o("p",[e._v("There are many things we can check, this is one path I'm giving you, but it's not the only one!")]),e._v(" "),o("p",[e._v("First, let's check if the Project Alice service is up and running:")]),e._v(" "),o("p",[o("code",[e._v("sudo systemctl status ProjectAlice")])]),e._v(" "),o("p",[e._v("You should get some info about the service. If you check it for a while you'll notice that it either continues with normal operations in which case you have to wait for it to start, or you'll notice it crashes and restarts all the time or even says that the service is dead.")]),e._v(" "),o("p",[e._v("If the service is dead or restarts all the time, let's debug it! Stop Project Alice. First pres CTRL+C to stop the systemctl command and in your terminal type.")]),e._v(" "),o("p",[o("code",[e._v("sudo systemctl stop ProjectAlice")])]),e._v(" "),o("p",[e._v("Let's start it manually to have a better vision of the logs. In your ssh terminal type")]),e._v(" "),o("div",{staticClass:"language-shell script extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/pi/ProjectAlice\n./venv/bin/python main.py\n")])])]),o("p",[e._v("This will manually start ProjectAlice printing out every detail and stopping if any unrecoverable error arises. Read the logs carefully, they always give hint if something's missing, a setting not set, something wrong.")]),e._v(" "),o("p",[e._v("If there isn't any error and Alice seems to start fine, the last log line, on first boot, should be something like")]),e._v(" "),o("p",[o("code",[e._v("[Project Alice] Started in 7.23 seconds")])]),e._v(" "),o("p",[e._v("And you should hear a little chime.")]),e._v(" "),o("p",[e._v("If you see errors, if she shuts down or reboots by herself in a loop, time for some reporting 🦖")]),e._v(" "),o("h2",{attrs:{id:"auto-bug-report"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#auto-bug-report"}},[e._v("#")]),e._v(" Auto bug report")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("GitHub")]),e._v(" "),o("p",[e._v("You need an account on GitHub to use this feature as well as a GitHub API token")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",target:"_blank",rel:"noopener noreferrer"}},[e._v("API Token"),o("OutboundLink")],1)])])]),e._v(" "),o("h3",{attrs:{id:"alice-is-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alice-is-started"}},[e._v("#")]),e._v(" Alice is started")]),e._v(" "),o("p",[e._v("Open you web console and go into admin then settings and make sure the GitHub username as well as the API token are inserted. Stop Alice with "),o("code",[e._v("sudo systemctl stop ProjectAlice")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"alice-doesn-t-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alice-doesn-t-start"}},[e._v("#")]),e._v(" Alice doesn't start")]),e._v(" "),o("p",[e._v("SSH to your device and edit Alice's config file: "),o("code",[e._v("nano ~/ProjectAlice/config.json")]),e._v(". Search for "),o("code",[e._v("githubToken")]),e._v(" and insert your GitHub API token and search for "),o("code",[e._v("githubUsername")]),e._v(" and insert your GitHub username.")]),e._v(" "),o("h3",{attrs:{id:"tell-alice-to-report-the-bugs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tell-alice-to-report-the-bugs"}},[e._v("#")]),e._v(" Tell Alice to report the bugs")]),e._v(" "),o("p",[e._v("This is a one command operation that can also be made through AliceCLI. The reason for no configuration or simpler way to do it, is that everything can fail, and reporting can also fail. But not a command entered willingly by a user...")]),e._v(" "),o("ul",[o("li",[e._v("If you don't start Alice manually, SSH to your device and stop her with "),o("code",[e._v("sudo systemctl stop ProjectAlice")]),e._v(".")]),e._v(" "),o("li",[e._v("Create the bug report flag by typing: "),o("code",[e._v("touch ~/ProjectAlice/alice.bugreport")]),e._v(".")]),e._v(" "),o("li",[e._v("Start Alice with "),o("code",[e._v("cd ~/ProjectAlice && ./venv/bin/python main.py")]),e._v(".")])]),e._v(" "),o("p",[e._v("Around line 5, you should see the BugReporterManager saying: "),o("code",[e._v("[BugReportManager] Flag file detected, recording errors for this run")])]),e._v(" "),o("p",[e._v("The whole logs will be automatically sent to our "),o("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub issues"),o("OutboundLink")],1),e._v(" when Alice "),o("strong",[e._v("goes down")]),e._v(". Which means, if she's running, you need to stop her with "),o("code",[e._v("CTRL+C")]),e._v(" so the report is sent to us.")]),e._v(" "),o("p",[e._v("Towards the end of the logs, you'll see something like "),o("code",[e._v("[BugReportManager] Created new issue: https://github.com/project-alice-assistant/ProjectAlice/issues/599")]),e._v(" which means the report was made, and you can find the issue at the given link")]),e._v(" "),o("ul",[o("li",[e._v("If you want to have Alice run automatically again, type "),o("code",[e._v("sudo systemctl start ProjectAlice")]),e._v(".")])]),e._v(" "),o("p",[o("em",[e._v("The report flag file is automatically deleted everytime Alice goes down")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{325:function(e,t,o){"use strict";o.r(t);var i=o(8),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"pycharm-from-jetbrains"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pycharm-from-jetbrains"}},[e._v("#")]),e._v(" Pycharm from Jetbrains")]),e._v(" "),o("p",[e._v("Have you just started with Alice and all excited with the possibilities you could unlock by creating your own "),o("Term",{attrs:{term:"skill",show:"skills"}}),e._v("? But uncertain where to start? Well you've come to the right place. Alice is written in the Python language. The team behind Alice do most of their Python magic and more using an IDE called Pycharm. For that reason and because it's a great program we will focus on getting Pycharm setup for you. That way getting help in the discord will also be easier. So let's get started.")],1),e._v(" "),o("p",[e._v("What we will cover in the below!!")]),e._v(" "),o("ul",[o("li",[e._v("Where to get Pycharm")]),e._v(" "),o("li",[e._v("Basics of GitHub")]),e._v(" "),o("li",[e._v("Setting up Pycharm directories")]),e._v(" "),o("li",[e._v("Check dependencies are set")]),e._v(" "),o("li",[e._v("Changing branches")]),e._v(" "),o("li",[e._v("Quality control settings")]),e._v(" "),o("li",[e._v("Updating your repositories")]),e._v(" "),o("li",[e._v("Some handy Alice commands when skill making")])]),e._v(" "),o("p",[e._v("Yes I understand there are a quite a few steps in this process but for the most of it you'll only have to do it once. Then you'll have the re assurance that you've done all you can to meet the "),o("RouterLink",{attrs:{to:"/de/contribute/code-guidelines.html"}},[e._v("Alice code guidelines")]),e._v(". Which by the way is something you should read as well...")],1),e._v(" "),o("h2",{attrs:{id:"download-and-install-pycharm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-and-install-pycharm"}},[e._v("#")]),e._v(" Download and install Pycharm")]),e._v(" "),o("p",[e._v("First lets download Pycharm, The community version is free and a great starting point. Get that from here: "),o("a",{attrs:{href:"https://www.jetbrains.com/Pycharm/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jetbrains.com/Pycharm/download"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"a-bit-about-github"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-bit-about-github"}},[e._v("#")]),e._v(" A bit about GitHub.")]),e._v(" "),o("p",[e._v("Great, so now Pycharm is downloaded and installed lets set up a few things to make it easier in the long run. If you haven't already get yourself a GitHub account. You can read about it here "),o("a",{attrs:{href:"https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration"),o("OutboundLink")],1),e._v(" or jump straight to the signup page here: "),o("a",{attrs:{href:"https://GitHub.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://GitHub.com/"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The below steps aren't vital to code in Pycharm, but it certainly worth doing to have the version control ability and in the future push and pull to your repository.")]),e._v(" "),o("p",[e._v("GitHub if you don't know, is on a basic level a storage spot for developers with a tonne of features but mainly \"version control\" is what you're going to want from it for now.\nGitHub once setup allows you to push and pull files between repositories without missing latest updates and writing conflicting code with other developers. That way code sharing and file changes are controlled across\nrepositories (repo's for short).")]),e._v(" "),o("p",[e._v("So when you create a new "),o("Term",{attrs:{term:"skill"}}),e._v(" via the Alice dev-mode "),o("Term",{attrs:{term:"interface"}}),e._v(" and upload it to GitHub, it will initially create the required framework for the "),o("Term",{attrs:{term:"skill"}}),e._v(". It will then place the new "),o("Term",{attrs:{term:"skill"}}),e._v(" in your ProjectAlice/skills/ directory on your PI and store it on GitHub as a repository.\nNow when you edit/modify the "),o("Term",{attrs:{term:"skill"}}),e._v(" and "),o("code",[e._v("ctrl + s")]),e._v(' to save it, it will save the changes ONLY to your PI and the GitHub copy will stay the same. When you feel you have the code at a point that you want to save it on GitHub as well, then in Pycharm you can click the green downwards pointing arrow (top right of the Pycharm screen) and "commit" the changes.')],1),e._v(" "),o("img",{attrs:{src:"/images/Push_Pull.png",alt:"push and pull arrow"}}),e._v(" "),o("p",[e._v('Committing the changes in simple terms, is geek talk for saving. 😃\nIt tells GitHub you\'ve modified code, and you want to store it on GitHub. Once committed, you then click the blue "update project" arrow (or '),o("code",[e._v("ctrl + shift + k")]),e._v(' also called push which does similar). Pycharm will then "push" your commit (modified files) to your GitHub repo. By pushing to origin, you will now have a backup of your files on GitHub which at a later stage you can share with who ever or create a "pull request" (PR) to the ProjectAlice team, so the '),o("Term",{attrs:{term:"skill"}}),e._v(" can be reviewed for merging/adding in the Alice store so everyone can enjoy using it.")],1),e._v(" "),o("h2",{attrs:{id:"setup-pycharm-directories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-pycharm-directories"}},[e._v("#")]),e._v(" Setup Pycharm directories")]),e._v(" "),o("h3",{attrs:{id:"option-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-1"}},[e._v("#")]),e._v(" Option 1")]),e._v(" "),o("p",[e._v("This option is a safe way to start out with Pycharm it also gets you familiar with GitHub version control.")]),e._v(" "),o("p",[o("Term",{attrs:{term:"",show:""}}),e._v(" Warning\nUnless you use Pycharm professional, going with this option will mean you either have to copy your "),o("Term",{attrs:{term:"skill"}}),e._v(" folder\nto Alice each time you want to test something. Alternatively push the updates to your repository, and then on your Pi.\n"),o("Term",{attrs:{term:"",show:""}})],1),e._v(" "),o("p",[o("code",[e._v("cd ProjectAlice/skills/<your skill name>")])]),e._v(" "),o("p",[o("code",[e._v("git pull")])]),e._v(" "),o("p",[o("code",[e._v("sudo systemctl restart ProjectAlice")])]),e._v(" "),o("ul",[o("li",[e._v("Sign in to GitHub. Go to "),o("a",{attrs:{href:"https://GitHub.com/project-alice-assistant/ProjectAlice",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProjectAlice"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v('In the top right of that page, click on "fork" to basically clone a copy of ProjectAlice to your own GitHub account.')]),e._v(" "),o("li",[e._v("Now create a folder on your Desktop somewhere. Let's say for now it's going to be Documents/GitHubProjectAlice for example.")]),e._v(" "),o("li",[e._v("Now open Pycharm")]),e._v(" "),o("li",[e._v('In the menu along the top of Pycharm click on "VCS" then "get from version control"')])]),e._v(" "),o("img",{attrs:{src:"/images/cloning.png",alt:"Clone screen"}}),e._v(" "),o("ul",[o("li",[e._v('In the window that opens click on "GitHub" from the menu on the left. '),o("em",[e._v("You should see in the list that appears your ProjectAlice fork you just forked")]),e._v(".")]),e._v(" "),o("li",[e._v('Click that and direct it to the "Documents/GitHubProjectAlice" folder you just created.')]),e._v(" "),o("li",[e._v("Make the path -> Documents/GitHubProjectAlice/ProjectAlice so that it clones into a folder called ProjectAlice.")]),e._v(" "),o("li",[e._v('When Pycharm pops up a window choose "this window".')])]),e._v(" "),o("p",[e._v('Then once done click VCS again and then "get from version control" then "GitHub " again and select your '),o("Term",{attrs:{term:"skill"}}),e._v('. Make the path now go to Documents/GitHubProjectAlice/skills/ .... when asked by Pycharm choose "attach".')],1),e._v(" "),o("p",[e._v("Now you should have Pycharm displaying ProjectAlice and all her files and your "),o("Term",{attrs:{term:"skill"}}),e._v(" showing up in the ProjectAlice/skills directory. (note this is all local files and nothing to do with your Pi for now)")],1),e._v(" "),o("h3",{attrs:{id:"option-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-2"}},[e._v("#")]),e._v(" Option 2")]),e._v(" "),o("p",[o("strong",[e._v("Auto login to your pi and set up a sshfs connection to trick Pycharm")])]),e._v(" "),o("p",[e._v("This below optional method will allow you to load your PI's ProjectAlice files directly into Pycharm. Therefore, allowing you to modify the files on your PI directly. However, this raises the chances of you breaking Alice so only recommended once you feel a little more comfortable with how things work.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Follow these steps "),o("a",{attrs:{href:"https://www.tecmint.com/ssh-passwordless-login-using-ssh-keygen-in-5-easy-steps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.tecmint.com/ssh-passwordless-login-using-ssh-keygen-in-5-easy-steps/"),o("OutboundLink")],1),e._v(" to set up auto login to your pi ( no need to keep typing password)")])]),e._v(" "),o("li",[o("p",[e._v('Create a folder on your desktop computer in the home directory called something like "Development"')])]),e._v(" "),o("li",[o("p",[e._v("Then type this command on your desktop terminal >>")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sshfs -o reconnect -o nonempty pi@192.168.1.4:/home/pi/ProjectAlice /home/bob/Development/Alice")])])])])]),e._v(" "),o("p",[e._v("(obviously change the IP to your pi's IP and the second path to your new development folders path)")]),e._v(" "),o("p",[e._v("What this will do is gain access to your PI via your windows/linux desktop by creating a folder  in the Development folder and show the contents of your PI's's ProjectAlice folder. In doing so Pycharm will think the Development/Alice folder is an actual folder on your desktop and therefore in Pycharm you can now view and modify ProjectAlice files via Pycharm directly 😃")]),e._v(" "),o("h2",{attrs:{id:"pycharm-dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pycharm-dependencies"}},[e._v("#")]),e._v(" Pycharm dependencies")]),e._v(" "),o("p",[e._v("Now you have the directories loaded in Pycharm. Go to Pycharm settings ( "),o("code",[e._v("ctrl + shift + s")]),e._v(" )")]),e._v(" "),o("img",{attrs:{src:"/images/dependencies.png",alt:"Dependencies"}}),e._v(" "),o("ul",[o("li",[e._v('Then in the menu on the left. Click "project-alice-assistant/ProjectAlice".')]),e._v(" "),o("li",[e._v('Then click "project dependencies"')]),e._v(" "),o("li",[e._v("Now click your "),o("Term",{attrs:{term:"skill"}}),e._v(" to highlight it")],1),e._v(" "),o("li",[e._v('Then put a tick in "ProjectAlice" tick box to tell Pycharm your '),o("Term",{attrs:{term:"skill"}}),e._v(" depends on the files from the\nProjectAlice files")],1)]),e._v(" "),o("h2",{attrs:{id:"changing-branches"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changing-branches"}},[e._v("#")]),e._v(" Changing branches")]),e._v(" "),o("p",[e._v("The latest branch in Alice as of writing this is b3. You may want to set your Pycharm to B3 branch, so you stay up to date with the latest changes.")]),e._v(" "),o("p",[e._v("In Pycharm click your way through this")]),e._v(" "),o("p",[o("code",[e._v("VCS -> Git -> branches-> repositories ->ProjectAlice -> local branches -> 1.0.0-b3 -> checkout")]),e._v(".")]),e._v(" "),o("p",[e._v("That should cause Pycharm to move to the b3 branch.\nYou'll only need to do this once also unless you start playing with branches, but I don't advise that for now until your use to that side of things.")]),e._v(" "),o("p",[e._v("That should be enough for the moment to get Pycharm setup as far as main directories go. Next we need to set up SonarCloud, sk-package, and Pycharm settings so that your code is as compatible as possible with Alice.")]),e._v(" "),o("h2",{attrs:{id:"quality-control-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quality-control-settings"}},[e._v("#")]),e._v(" Quality control settings")]),e._v(" "),o("p",[o("strong",[e._v("First let's now set up the ProjectAlice-Sk package")])]),e._v(" "),o("ul",[o("li",[e._v("Fork the sk repo from "),o("a",{attrs:{href:"https://GitHub.com/project-alice-assistant/ProjectAliceSkillKit",target:"_blank",rel:"noopener noreferrer"}},[e._v("SkillKit"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v('In Pycharm click into "VCS" menu then "GitHub" (just like earlier)')]),e._v(" "),o("li",[e._v("Select your sk fork and download it to GitHubProjectAlice/ProjectAlice/SkPackage ( or similar)")]),e._v(" "),o("li",[e._v('Choose "attach" when prompted.')]),e._v(" "),o("li",[e._v('Now go to "run " menu in Pycharm (along top of screen)')]),e._v(" "),o("li",[e._v('Then choose "debug configuration"')]),e._v(" "),o("li",[e._v("click the + sign to make a new script.")]),e._v(" "),o("li",[e._v('Call it something like "Alice Validation "')]),e._v(" "),o("li",[e._v('Then to the right of that screen ... for the field "script path " enter the local path to the ProjectAliceSkillKit.py file')]),e._v(" "),o("li",[e._v('In the field "parameters" add')])]),e._v(" "),o("p",[o("code",[e._v("validate --paths /home/bob/Documents/GitHubProjectAlice/ProjectAlice/skills")])]),e._v(" "),o("p",[e._v("(Change the path to suit your path to the "),o("Term",{attrs:{term:"skill",show:"skills"}}),e._v(" directory.)")],1),e._v(" "),o("ul",[o("li",[e._v('Put a tick in the box , "run with python console"')]),e._v(" "),o("li",[e._v("Click apply.")])]),e._v(" "),o("p",[e._v("Now when in Pycharm and you click the run icon (top right of screen) with the Alice Validation script selected, Pycharm will loop through every "),o("Term",{attrs:{term:"skill"}}),e._v(" you have listed in the "),o("Term",{attrs:{term:"skill",show:"skills"}}),e._v(" folder and do a validation on it. It will print the results out in the console of Pycharm.")],1),e._v(" "),o("p",[e._v("As an added bonus let's also add the sk schema files to Pycharm so that you get instant feedback on quality of your "),o("code",[e._v(".install")]),e._v(" file and json files etc. Note that this does NOT check everything that the Sk package does, so you still need to do the above. This will just tell you if you've got a syntax wrong as you modify the file.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Go to this page "),o("a",{attrs:{href:"https://GitHub.com/project-alice-assistant/ProjectAliceSkillKit/tree/master/ProjectAliceSK/validate/src/schemas",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schema Files"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Take a look at that list. You will see different schema files for different file types. We will now go through installing just one of those types into Pycharm, and you can do all the rest on your own.")])]),e._v(" "),o("li",[o("p",[e._v('Let\'s pick on the install-schema.json file. click it to open that code then click the "Raw" button to the right.')])]),e._v(" "),o("li",[o("p",[e._v("Copy the URL")])]),e._v(" "),o("li",[o("p",[e._v("Come back to Pycharm and go to your "),o("Term",{attrs:{term:"skill"}}),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Double-click the installation file for your "),o("Term",{attrs:{term:"skill"}}),e._v(" to open it in the editor")],1)]),e._v(" "),o("li",[o("p",[e._v('Now at the very bottom right of your Pycharm do you see a "no schema" button ? click that to open the schema\nconfiguration screen.')])])]),e._v(" "),o("img",{attrs:{src:"/images/schemapath.png",alt:"schema"}}),e._v(" "),o("p",[e._v("Note this image shows JSON ProjectAlice talks.... you'll likely have JSON No schema")]),e._v(" "),o("ul",[o("li",[e._v('Then click "new schema mapping"')]),e._v(" "),o("li",[e._v('For name field type in something like "Alice install"')]),e._v(" "),o("li",[e._v("For URL field paste the URL of the Raw file you just copied")]),e._v(" "),o("li",[e._v("On the right-hand side of that screen click the + to add new mapping")]),e._v(" "),o("li",[e._v("Type *.install\nthat should now apply that schema to any of the "),o("code",[e._v("blah.install")]),e._v(" files in the future.")]),e._v(" "),o("li",[e._v("Click Apply")]),e._v(" "),o("li",[e._v("Do the same with the other schema's but obviously change the mappings to something that will capture that file type\nlike *talks/en.json should capture all talk json files of en language")])]),e._v(" "),o("p",[o("strong",[e._v("Secondly set up SonarCloud")])]),e._v(" "),o("p",[e._v("SonarLint (SonarCloud, sonarQube) is a great tool for making sure your code complies with Alice. It will warn you in Pycharm when you call a variable "),o("code",[e._v("Thisis_myVariable")]),e._v(" instead of the Alice way which is "),o("code",[e._v("thisIsMyVariable")]),e._v(" and of course many other checks. It's a must-have plugin so let's go add that now.")]),e._v(" "),o("p",[e._v("Pycharm has a Sonarcloud plugin that can check your code to make sure it is following our guidelines!")]),e._v(" "),o("ul",[o("li",[e._v("Create an account on "),o("a",{attrs:{href:"https://sonarcloud.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SonarCloud"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Contact us to add you as a "),o("Term",{attrs:{term:"skill"}}),e._v(" dev, in order for you to generate your access token")],1),e._v(" "),o("li",[e._v("Once you've been added in our "),o("Term",{attrs:{term:"skill"}}),e._v(" dev group, go to your SonarCloud profile, under security, and generate a new access token.")],1),e._v(" "),o("li",[e._v("In Pycharm open your settings")]),e._v(" "),o("li",[e._v("Go to "),o("code",[e._v("Plugins")])]),e._v(" "),o("li",[e._v("Search and install "),o("code",[e._v("SonarLint")])])]),e._v(" "),o("img",{attrs:{src:"/images/sonarlint.png",alt:"SonarLint"}}),e._v(" "),o("ul",[o("li",[e._v("Under "),o("code",[e._v("Tools")]),e._v(" select "),o("code",[e._v("SonarLint")]),e._v(" and click on the "),o("code",[e._v("+")]),e._v(" to add a new connection")])]),e._v(" "),o("img",{attrs:{src:"/images/sonarlintalice.png",alt:"SonarLint"}}),e._v(" "),o("ul",[o("li",[e._v("Name it "),o("code",[e._v("ProjectAlice")]),e._v(" and choose "),o("code",[e._v("SonarCloud")]),e._v(", then click on next")])]),e._v(" "),o("img",{attrs:{src:"/images/sonarlintserver.png",alt:"SonarLint"}}),e._v(" "),o("ul",[o("li",[e._v("Enter your SonarCloud token, and you're good to go!")])]),e._v(" "),o("h2",{attrs:{id:"updating-your-repository"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-your-repository"}},[e._v("#")]),e._v(" Updating your repository")]),e._v(" "),o("p",[e._v("Let's touch a little more on GitHub repos and keeping them  up to date")]),e._v(" "),o("p",[e._v("Alice is always evolving. As such the files in Alice are always changing. So that you have the latest files we want to get into the habit of pushing and pulling the Upstream repo.")]),e._v(" "),o("p",[e._v("\"Wooah back up buddy\" I hear you saying.... that's a new word. what's upstream ?")]),e._v(" "),o("p",[e._v('Well your repository as far as GitHub is concerned is called "origin". Whereas the repository you forked from is called "upstream" so in this case the upstream for your ProjectAlice files will be. '),o("a",{attrs:{href:"https://GitHub.com/project-alice-assistant/ProjectAlice",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://GitHub.com/project-alice-assistant/ProjectAlice"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Knowing that, let's add that url to your Pycharm, so we can receive updates.")]),e._v(" "),o("ul",[o("li",[e._v('Click "VCS" then "Git" then "remotes"')]),e._v(" "),o("li",[e._v('You should see in the list ProjectAlice "origin"')]),e._v(" "),o("li",[e._v("Click your remote repo in this screen to highlight it")]),e._v(" "),o("li",[e._v("Now click the + sign")]),e._v(" "),o("li",[e._v('In the window that opens. For the "name" field, add "upstream" <<- has to be that nothing else will work.')]),e._v(" "),o("li",[e._v('In the url field add " '),o("a",{attrs:{href:"https://GitHub.com/project-alice-assistant/ProjectAlice",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://GitHub.com/project-alice-assistant/ProjectAlice"),o("OutboundLink")],1),e._v(' "')]),e._v(" "),o("li",[e._v("Click save")]),e._v(" "),o("li",[e._v('Now click "VCS" again and then "git" then "fetch" this will update head and branches etc')]),e._v(" "),o("li",[e._v('Next click "VCS" again then "pull"')]),e._v(" "),o("li",[e._v("In the window that opens starting from the left drop down box ....")])]),e._v(" "),o("img",{attrs:{src:"/images/Pull.png",alt:"Pull from Alice"}}),e._v(" "),o("ul",[o("li",[e._v("Choose ProjectAlice")]),e._v(" "),o("li",[e._v('Choose "pull"')]),e._v(" "),o("li",[e._v('Choose "upstream"')]),e._v(" "),o("li",[e._v('Choose "b3 branch"')]),e._v(" "),o("li",[e._v("Click pull")])]),e._v(" "),o("p",[e._v('it will now "pull" all the latest changes that the Alice team have pushed recently into your local files on your computer. Pycharm is now  up-to-date. However, your "origin" (your repo) isn\'t up-to-date with your Pycharms local files now. So now do a ctl+shift+k to "push" updated files to your origin repo. This process of pull and push will become second nature to you eventually. 😃')]),e._v(" "),o("h2",{attrs:{id:"handy-alice-commands-when-testing-a"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#handy-alice-commands-when-testing-a"}},[e._v("#")]),e._v(" Handy Alice commands when testing a "),o("Term",{attrs:{term:"skill"}})],1),e._v(" "),o("p",[e._v("When making a "),o("Term",{attrs:{term:"skill"}}),e._v(" you'll often not get it right the first time and frequently use print statements. These don't show in syslog. So to be able to view these statements along with being able to see clearly what's happening when you run Alice you may want to start her manually.")],1),e._v(" "),o("p",[e._v("To do that:")]),e._v(" "),o("p",[o("code",[e._v("sudo systemctl stop ProjectAlice")])]),e._v(" "),o("p",[o("code",[e._v("cd ProjectAlice")])]),e._v(" "),o("p",[o("code",[e._v("./venv/bin/python main.py")])]),e._v(" "),o("p",[e._v("You'll then get to see in the terminal any print statements you put in your code.... along with easy to read console messages and comes with colour")]),e._v(" "),o("p",[e._v("Hope that has helped. Enjoy your coding adventures.")]),e._v(" "),o("p",[o("em",[e._v("By LazzaAU")])])])}),[],!1,null,null,null);t.default=a.exports}}]);
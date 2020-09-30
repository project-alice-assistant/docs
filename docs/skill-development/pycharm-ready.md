---
sidebarDepth: 1
title: Getting started with a IDE
---

# Pycharm from Jetbrains

Have you just started with Alice and all excited with the possibilities you could unlock by creating your own skills ?. But uncertain where to start?. Well you've come to the right place. Alice is written in the Python language. The team behind Alice do most of their Python magic and more using a IDE called Pycharm. For that reason and because it's a great program we will focus on getting Pycharm setup for you. That way getting help in the discord will also be easier. So let's get started.  
What we will cover in the below
- Where to get Pycharm
- Basics of Github
- Setting up Pycharm directories
- Check dependencies are set
- Changing branches
- Quality control settings
- Updating your repositories
- Some handy Alice commands when skill making


### Download and install Pycharm

- First of all lets download Pycharm, The community version is free and a great starting point. get that from here <https://www.jetbrains.com/pycharm/download>

### Now onto Github before going back to Pycharm...
Great, so now Pycharm is downloaded and installed let's setup a few things to make it easier in the long run. If you haven't already get yourself a Github account. You can read about it here <https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration> or jump straight to the signup page here <https://github.com/>

The below steps arn't vital to code in Pycharm, but it certainly worth doing to have the version control ability 
and in the future push and pull to your respository.

Github if you dont know, is on a basic level a storage spot for developers with a tonne of features but mainly 
"version control" is what your going to want from it for now.
Github once setup allows you to push and pull files between respositores without missing latest updates
and writing conflicting code with other developers. That way code sharing and file changes are controlled across
repositories (repo's for short).

So when you create a new skill via the Alice devmode screen and upload it to github, it will initially create
the required framework for the skill. It will then place the new skill in your ProjectAlice/skills/ directory
on your PI AND store it on Github as a respository. Now when you edit/modify the skill on your PI and ctrl+s to 
save it, it will save the changes ONLY to your PI and the Github copy will stay the same.
When you feel you have the code at a point that you want to save it on Github as well, then in Pycharm 
you can click the green downwards pointing arrow (top right of the pycharm screen) and "commit" the changes. 

<img src="/images/gitpushnpull.png" alt="push and pull arrow">

Commiting the changes is in simple terms, geek talk for saving 
it tells github you have modified code and you want to store it on Github.
Once commited you then click the blue "update project" arrow (or ctrl+shift+k also called push which does similar). 
Pycharm will then "push" your commit (modified files) to your Github repo.
By pushing to origin, you will now have a backup of your files on Github which at a later stage you can share with
who ever or create a "pull request" (PR) to the ProjectAlice team so the skill can be reviewed for merging 
in the Alice store so everyone can enjoy using it.

### Setup Pycharm directories (Option 1)
This option is a safe way to start out with pycharm and also gets you familiar with github version control
NOTE:
unless you use pycharm professional, going with this option will mean you either have to copy your skill folder
to Alice each time you want to test something or alternatively push the updates to your respository
and then on your Pi

```cd ProjectAlice/skills/<your skillname>```

``` git pull```

then restart alice

- Sign into github.. go to https://github.com/project-alice-assistant/ProjectAlice .
In the top right of that page, click on "fork" to basically clone a copy of Projectalice to your own Github account

- now create a folder on your Desktop somewhere. Let's say for now it's going to be Documents/GitHubProjectAlice for example.
- Now open Pycharm
- In the menu along the top of Pycharm click on "VCS" then "get from version control" 
- In the window that opens click on "Github" from the left hand menu.
*You should see in the list that appears your projectAlice fork you just forked*.
- Click that and direct it to the "Documents/GitHubProjectAlice" folder you just created.
make the path -> Documents/GitHubProjectAlice/ProjectAlice so that it clones into a folder called ProjectAlice.
 - When pycharm pops up a window choose "this window"

Then once done click VCS again and then "get from version control" then "github " again and select your skill.
Make the path now go to Documents/GitHubProjectAlice/skills/ .... when asked by pycharm choose "attach"

Now you should have Pycharm displaying ProjectAlice and all her files and your skill showing up in the
 projectAlice/skills directory. (note this is all local files and nothing to do with your Pi for now)

### Option 2

### **Auto login to your pi and setup a sshfs connection to trick Pycharm** 

This below optional method will allow you to load your PI's projectAlice files directly into Pycharm. Therefore 
allowing you to modify the files on your PI directly. However this raises the chances of you breaking alice
 so only recommeded once you feel a litle more comfortable with how things work.  
 
1.Follow these steps https://www.tecmint.com/ssh-passwordless-login-using-ssh-keygen-in-5-easy-steps/ to setup auto login to your pi ( no need to keep typing password)

2. Create a folder on your desktop computer in the home directory called something like "Development"

3. Then type this command on your desktop terminal >>

 - sshfs -o reconnect -o nonempty pi@192.168.1.4:/home/pi/ProjectAlice /home/bob/Development/Alice

(obviously change the IP to your pi's IP and the second path to your new development folders path)

What this will do is gain access to your PI via your windows/linux desktop by creating a folder 
in the Development folder and show the contents of your PI's's ProjectAlice folder. 
In doing so Pycharm will think the Development/Alice folder is a actual folder on your desktop and therefore
in Pycharm you can now view and modify ProjectAlice files via Pycharm directly :slight_smile:

### Pycharm dependencies
Now that you have the directories loaded in Pycharm. Go to Pycharm settings ( ctrl + shift +s )
- Then in the left hand menu click "project-alice-assistant/ProjectAlice"
- then click "project dependencies"
- Now click your skill to highlight it
- Then put a tick in "ProjectAlice" tick box to tell Pycharm your skill depends on the files from the
 ProjectAlice files

### Change to b3 branch
The latest branch in Alice as of writing this is b3. You may want to set your Pycharm to B3 branch so you stay
 upto date with the latest changes

In Pycharm click your way through this

 ```VCS -> Git -> branches-> respositories ->ProjectAlice -> localbranches -> 1.0.0-b3 -> checkout```. 

That should cause Pycharm to move to the b3 branch.
You'll only need to do this once also unless you start playing with branches but i dont advise that for 
now until your use to that side of things. 

That should be enough for the moment to get pycharm setup as far as main directories go. 
next we need to set up SonarCloud, sk-package, and Pycharm settings so that your code is as compatble as possible
 with Alice.

### Quality control settings

**First let's now setup the ProjectAlice-Sk package**

- Fork the sk repo from https://github.com/project-alice-assistant/ProjectAliceSkillKit
- In Pycharm click into "VCS" menu then "github" (just like earlier) 
- Select your sk fork and download it to GitHubProjectAlice/ProjectAlice/SkPackage ( or similar) 
- choose "attach" when prompted. 
- Now go to "run " menu in Pycharm (along top of screen)
- Then choose "debug configuration" 
- click the + sign to make a new script.
- Call it something like "Alice Validation "
- Then to the right of that screen ... for the field "script path " enter the local path to the ProjectAliceSkillKit.py file
- In the field "parameters" add 

```validate --paths /home/lazza/Documents/GitHubProjectAlice/ProjectAlice/skills```

(Change the path to suit your path to the skills directory.)
- Put a tick in the box , "run with python console"
- Click apply.

Now when in pycharm and you click the run icon (top right of screen) with the Alice Validation script selected, 
pycharm will loop through every skill you have listed in the skills folder and do a validation on it.
It will print the results out in the console of pycharm.

As a added bonus let's also add the sk schema files to Pycharm so that you get instant feedback on quality of your
install file and json files etc. Note that this does NOT check everything that the Sk package does so you still need
to do the above. This will just tell you if you've got a syntax wrong as you modify the file.

- go to this page https://github.com/project-alice-assistant/ProjectAliceSkillKit/tree/master/ProjectAliceSK/validate/src/schemas
- take a look at that list. You will see different schema files for different file types. We will now go through installing
just one of those types into pycharm and you can do all the rest on your own.

- Lets pick on the install-schema.json file. click it to open that code then click the "Raw" button to the right.
- Copy the URL
- Come back to pycharm and go to your skill.
- Double click the install file for your skill to open it inthe editor
- Now at the very bottom right of your Pycharm do you see a "no schema" button ? click that to open the schema 
configuration screen 
- Then click "new schema mapping"
- For name field type in something like "Alice install"
- for URL field paste the URL of the Raw file you just copied
- On the right hand side of that screen click the + to add new mapping
- type *.install
that should now apply that schema to any of the blah.install files inthe future.
- click Apply
- Do the same with the other schema's but obviously change the mappings to something that will capture that file type
like *talks/en.json should capture all talk json files of en language

**secondly set up SonarCloud**

SonarLint (sonarcloud, sonarQube) is a great tool for making sure your code complies with Alice.
it will warn you in Pycharm when you call a variable Thisis_myVariable instead of the Psycho way which is thisIsMyVariable
 and of course many many other checks. It's a must have plugin so let's go add that now.

Pycharm has a Sonarcloud plugin that can check your code to make sure it is following our guidelines!

- Create an account on [SonarCloud](https://sonarcloud.io/)
- Contact us to add you as a skill dev, in order for you to generate your access token
- Once you've been added in our skill dev group, go to your SonarCloud profile, under security, and generate a new access token.
- In Pycharm open your settings
- Go to `Plugins`
- Search and install `SonarLint`

<img src="/images/sonarlint.png" alt="SonarLint">

- Under `Tools` select `SonarLint` and click on the `+` to add a new connection

<img src="/images/sonarlintalice.png" alt="SonarLint">

- Name it `ProjectAlice` and choose `SonarCloud`, then click on next

<img src="/images/sonarlintserver.png" alt="SonarLint">

- Enter your SonarCloud token and you are good to go!
That's all good but now lets set it up n Pycharm so it's reported as we code.

- Go to Pycharm settings ( ctrl + alt + s )
- Click on "pluggins" from the left menu
- Search for "sonarlint" and install it

Once installed and While in Pycharm settings screen

- Scroll down to "tools" In the left hand list and select "sonarlint" 
- Click the + sign and call it "ProjectAlice" 
- For the url put the url to "your" sonarcloud. 
- Click next and from there work your way through the screens
- Then in tools > sonarlint >> project settings"  
- Click "choose from list" and select your skill from your sonar cloud account.
- Click apply


**lastly the easy one... pycharm respository settings..**

 The following will apply Pycharm settings that are also for the most part Psycho friendly such as 
 line spacing requirements etc . If you wish to install that then suggest you fork my repository https://github.com/LazzaAU/PycharmSettings 
 ( which is originally a fork of Psychos settings but modified slightly to suit my colour preferences) 
 - once forked copy the URL of your forked version
 - then in pycharm click "file"  then "manage IDE settings" then " settings repository"
 - paste in the url of your fork then click "merge" 
 - then ctrl+alt+s to bring up the main pycharm settings screen.
 - go to version control then github.
 - if you see my github account name listed in there single click it then click the - to remove it
 - then click the + sign and add your own github account details


### Updating your repo's
Let's touch a little more on Github repos and keeping them upto date

Alice is always evolving. As such the files in Alice are always changing.
So that you have the latest files we want to get into the habit of pushing and pulling the Upstream repo
I hear you say "wait" thats a new word. whats upstream ?

Well your respository as far as github is concerned is called "origin". where as the repository you forked from is called "upstream"
so in this case the upstream for your ProjectAlice files will be https://github.com/project-alice-assistant/ProjectAlice

Knowing that. lets add that url to your Pycharm so we can recieve updates.
- Click "VCS" then "remotes"
- You should see in the list ProjectAlice "origin" ( thats your remote repo)
- Click your remote repo in this screen to highlight it
- now click the + sign
- In the window that opens for name add "upstream" <<- has to be that nothing else will work
- In the url field add " https://github.com/project-alice-assistant/ProjectAlice "
- click save

- Now click "VCS" again and then "git" then "fetch" this will update head and branches etc 
- Next click "VCS" again then "pull"
- in the window that opens starting from the left drop down box ....
- choose ProjectAlice
- choose "pull"
- choose "upstream"
- choose "b3 branch"
- and click pull
``
it will now "pull" all the latest changes Psycho has pushed to your local files on your computer so pycharm is now upto date.
However your "origin" ( your repo) isn't upto date with your Pycharms local files now. 
So now do a ctl+shift+k to "push" updated files to your origin repo.
This process of pull and push will become second nature to you eventually :)

`and all the updated files from your git repository will be installed on Alice ( another way to do it rather than copy and paste the folder :)

### Handy alice commands when testing a skill:

When making a skill you'll never get it write the first time and often have to use print statements. These dont show in syslog
So to be able to view these statements along with being able to see clearly what's happening when you run alice you may want to start her manually

To do that:

```sudo systemctl stop ProjectAlice```

```cd ProjectAlice```

```./venv/bin/python3.7 main.py```

You'll then get to see in the terminal any print statements you put in your code.... along with easy to read console messages and comes with colour 
:slight_smile: 
 
Hope that has helped. Enjoy your coding adventures

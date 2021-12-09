---
title: 'Troubleshooting'
sidebarDepth: 3
---

Yes, nobody and nothing's perfect, but we try hard to be as close as perfect as possible. But hey, let's face it, it's a ton of code and it can go wrong, or maybe you made something wrong, or you're using hardware we've never tested, or.... Ok, I stop.... Let's find a solution to your problem! Keep in mind that the first boot can take up to 15 minutes of silence depending on your settings, hardware and all! **Do not unplug your device** if nothing happens, you might cut Alice in the middle of her training!

First thing we want to do is SSH to your device. Find out your device's IP and ssh to it using whatever you have. On Windows [Kitty](https://www.9bis.net/kitty/#!pages/download.md) is a good solution, on other platforms your can simply connect through your terminal.

There are many things we can check, this is one path I'm giving you, but it's not the only one!

First, let's check if the Project Alice service is up and running:

`sudo systemctl status ProjectAlice`

You should get some info about the service. If you check it for a while you'll notice that it either continues with normal operations in which case you have to wait for it to start, or you'll notice it crashes and restarts all the time or even says that the service is dead.

If the service is dead or restarts all the time, let's debug it! Stop Project Alice. First pres CTRL+C to stop the systemctl command and in your terminal type.

`sudo systemctl stop ProjectAlice`

Let's start it manually to have a better vision of the logs. In your ssh terminal type

```shell script
cd /home/pi/ProjectAlice
./venv/bin/python main.py
```

This will manually start ProjectAlice printing out every details and stopping if any unrecoverable error arises. Read the logs carefully, they always give hint if something's missing, a setting not set, something wrong.

If there're no errors and Alice seems to start fine, the last log line, on first boot, should be something like

`[Project Alice]                     Started in 7.23 seconds`

And you should hear a little chime.

If you see errors, if she shuts down or reboots by herself in a loop, time for some reporting 🦖

## Auto bug report

```tip Github
You need an account on Github to use this feature as weell as a Github API token
- [https://github.com](https://github.com)
- [API Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
```

### Alice is started
Open you web console and go into admin then settings and make sure the Github username as well as the API token are inserted. Stop Alice with `sudo systemctl stop ProjectAlice`

### Alice doesn't start
SSH to your device and edit Alice's config file: `nano ~/ProjectAlice/config.json`. Search for `githubToken` and insert your Github API token and seearch for `githubUsername` and insert your github username

### Tell Alice to report the bugs
This is a one command operation that can also be made through AliceCLI. The reason for no configuration or simplier way to do it, is that everything can fail, and reporting can also fail. But not a command entered willingly by a user...

- SSH to your device and type: `touch ~/ProjectAlice/alice.bugreport`
- Start Alice with `cd ~/ProjectAlice && ./venv/bin/python main.py`

Around line 5, you should see the BugReporterManagere saying: `[BugReportManager]                  Flag file detected, recording errors for this run`

The whole logs will be automatically sent to our [Github issues](https://github.com/project-alice-assistant/ProjectAlice/issues) when Alice **goes down**. Which means, if she's running, you need to stop her with `CTRL+C` so the report is seent to us.

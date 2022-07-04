---
title: 'Troubleshooting'
sidebarDepth: 3
---

Yes, nobody and nothing's perfect, but we try hard to be as close as perfect as possible. But hey, let's face it, it's a ton of code, and it can go wrong, or maybe you made something wrong, or you're using hardware we've never tested, or.... Ok, I stop.... Let's find a solution to your problem! Keep in mind that the first boot can take up to 15 minutes of silence depending on your settings, hardware and all! **Do not unplug your device** if nothing happens, you might cut Alice in the middle of her training!

First thing we want to do is SSH to your device. Find out your device's IP and ssh to it using whatever you have. On Windows, the terminal now supports SSH [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701) or you can use [Kitty](https://www.9bis.net/kitty/#!pages/download.md), on other platforms your can simply connect through your terminal.

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

This will manually start ProjectAlice printing out every detail and stopping if any unrecoverable error arises. Read the logs carefully, they always give hint if something's missing, a setting not set, something wrong.

If there are no errors and Alice seems to start fine, the last log line, on first boot, should be something like

`[Project Alice]                     Started in 7.23 seconds`

And you should hear a little chime.

If you see errors, if she shuts down or reboots by herself in a loop, time for some reporting 🦖

## Auto bug report

::: tip GitHub
You need an account on GitHub to use this feature as well as a GitHub API token
- [https://github.com](https://github.com)
- [API Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
:::

### Alice is started
Open you web console and go into admin then settings and make sure the GitHub username as well as the API token are inserted. Stop Alice with `sudo systemctl stop ProjectAlice`.

### Alice doesn't start
SSH to your device and edit Alice's config file: `nano ~/ProjectAlice/config.json`. Search for `githubToken` and insert your GitHub API token and search for `githubUsername` and insert your GitHub username.

### Tell Alice to report the bugs
This is a one command operation that can also be made through AliceCLI. The reason for no configuration or simpler way to do it, is that everything can fail, and reporting can also fail. But not a command entered willingly by a user...

- If you don't start Alice manually, SSH to your device and stop her with `sudo systemctl stop ProjectAlice`.
- Create the bug report flag by typing: `touch ~/ProjectAlice/alice.bugreport`.
- Start Alice with `cd ~/ProjectAlice && ./venv/bin/python main.py`.

Around line 5, you should see the BugReporterManager saying: `[BugReportManager]                  Flag file detected, recording errors for this run`

The whole logs will be automatically sent to our [GitHub issues](https://github.com/project-alice-assistant/ProjectAlice/issues) when Alice **goes down**. Which means, if she's running, you need to stop her with `CTRL+C` so the report is sent to us.

Towards the end of the logs, you'll see something like `[BugReportManager]                  Created new issue: https://github.com/project-alice-assistant/ProjectAlice/issues/599` which means the report was made, and you can find the issue at the given link

- If you want to have Alice run automatically again, type `sudo systemctl start ProjectAlice`.

*The report flag file is automatically deleted everytime Alice goes down*

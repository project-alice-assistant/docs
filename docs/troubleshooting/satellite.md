---
title: 'Satellite'
sidebarDepth: 3
---

Yes, nobody and nothing's perfect, but we try hard to be as close as perfect as possible. But hey, let's face it, it's a ton of code, and it can go wrong, or maybe you made something wrong, or you're using hardware we've never tested, or.... Ok, I stop.... Let's find a solution to your problem! Keep in mind that the first boot can take up to 15 minutes on your settings, hardware and all! **Do not unplug your device** if nothing happens, you might cut Alice in the middle of her installing!

First thing we want to do is SSH to your device. Find out your device's IP and ssh to it using whatever you have. You can simply connect through your terminal.

There are many things we can check, this is one path I'm giving you, but it's not the only one!

First, let's check if the Project Alice service is up and running:

`sudo systemctl status ProjectAlice`

You should get some info about the service. If you check it for a while you'll notice that it either continues with normal operations in which case you have to wait for it to start, or you'll notice it crashes and restarts all the time or even says that the service is dead.

If the service is dead or restarts all the time, let's debug it! Stop Project Alice. First pres CTRL+C to stop the systemctl command and in your terminal type

`sudo systemctl stop ProjectAlice`

Let's start it manually to have a better vision of the logs. In your ssh terminal type

```shell script
cd /home/pi/ProjectAlice
./venv/bin/python main.py
```

This will manually start ProjectAlice printing out every detail and stopping if any unrecoverable error arises. Check for these errors and report them if any on [GitHub](https://github.com/project-alice-assistant/ProjectAliceSatellite/issues/new). Read the logs carefully, they always give hint if something's missing, a setting not set, something wrong.

If there are no error and Alice seems to start fine, the last log line, on first boot, should be something like

`This satellite is not yet registered for Project Alice. Searching for main unit`

#### The logs say "This satellite is not yet registered for Project Alice. Searching for main unit" but nothing happens
At this point, you should ask alice to "Add a new satellite"

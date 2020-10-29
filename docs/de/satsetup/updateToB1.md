---
title: 'Update Satellite to B1'
sidebarDepth: 3
---

::: warning
The alpha and beta releases are subject to major changes. The target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!
:::

# Updating to B1 branch or above from A1
- [See Satellite setup](https://docs.projectalice.io/satsetup/) if you don't already have A1 installed

First double check your satellite is operational on A1

Then in the command line do the following

- ```sudo systemctl stop ProjectAlice```
- ```git stash```
- ```git checkout 1.0.0-b1```
- ```sudo apt-get install portaudio19-dev```
- ```./venv/bin/pip install importlib_metadata```
- ```./venv/bin/pip install webrtcva```
- ```./venv/bin/pip install wheel```
- ```./venv/bin/pip install pyaudio```
- ```sudo systemctl start ProjectAlice```

To check there are no errors ...

- ```tail -f /var/log/syslog```

If no errors

- ```git stash clear```


If everything goes fine, and you have a satellite displayed in My Home. The satellite icon should now be green showing it's connected.


#### Having issues with Alice? She doesn't hear you? Doesn't seem to start?
Have a look at our [Troubleshooting guide](https://docs.projectalice.io/satsetup/troubleshooting.html)!

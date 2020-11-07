---
title: Main unit manual setup
sidebarDepth: 3
tags:
- install
- setup
- main unit
---

As of october 2020, manually installing is the prefered way, new versions coming out very fast, it's very consuming to create a new image everytime we update the sources. It's only a few simple steps from a running Rasppberry Pi OS to a running Alice. I guess I should also cover the Rasppberry Pi OS installation, just to be sure...


## Install Rasppberry Pi OS
- Download Rasppberry Pi OS, Lite version is **recommended**
- Insert your 8 gig SD card into your computer and burn the Raspberry Pi OS image onto it
   - What means *burn the image*? Get rid of those matches, and have a look [here](https://www.raspberrypi.org/documentation/installation/installing-images/)
- When your SD is flashed, unplug it and replug it, your computer should detect, among others, a new partition called `boot`
- With your favorite text editor, create a new file on that partition. It is important, on Windows, that you do not right click and create a new text file! Open your text editor (hmmm [*notepad++*](https://notepad-plus-plus.org/) and do save it. Name the file `ssh`, **without any extension**. For Windows users, select `all types` instead of the default selected `Normal text file (.txt)`
- Once saved, keep your ssh file open, and paste the following content into it
  ```
  country=CH
  ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
  update_config=1
  
  network={
      ssid=""
      scan_ssid=1
      psk=""
      key_mgmt=WPA-PSK
  }
  ```
- Of course, take care to change the country code to match yours as well as add your WLAN ssid and password
- Now, don't save, but choose `Save under` and save that file in the `boot` partition as well, but name it `wpa_supplicant.conf`, still as `all types` for Windows users.
- Good, now unplug your SD card, plug it into your raspberry pi and power it. Let it a few seconds to boot.


## Configure your PI

- Connect to your pi through ssh. For windows users I recommand [kitty](http://www.9bis.net/kitty/#!index.md)
- By default, the user is `pi`, and the password is `raspberry`
- Update your system
  - `sudo apt-get update`
  - `sudo apt-get dist-upgrade -y`
- Open the configuration tool
  - `sudo raspi-config`
- Set the network name to `ProjectAlice`
- Set your locales
- **Change the default user password**
- Reboot

## Install Git and clone Alice

- We need a few things to get Alice up now
- Install `git`: `sudo apt-get install git -y`
- Clone Alice:
```
cd
git clone https://github.com/project-alice-assistant/ProjectAlice.git
```

## Start Alice
- Copy the basic configuration on their place for first boot: `sudo cp  ~/ProjectAlice/ProjectAlice.yaml /boot/ProjectAlice.yaml`
- We need to configure a few things for her to start nicely: `sudo nano /boot/ProjectAlice.yaml`
- Set that file parameters to your liking and setup.
- You know what? We're done! Let's start her up!
```
cd ~/ProjectAlice
python3 main.py
```
- This will start her, do some reboots and stuff. Once she loads, she'll start her own service, and you won't see any output on the console anymore. If you want to follow what's going on after she rebooted, type `tail -f /var/log/syslog`, and you will see what she's doing.
- Once you hear a ding, she's up!
- No ding? => Have a look at our [Troubleshooting guide](troubleshooting)!


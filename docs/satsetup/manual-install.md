---
title: 'Manual install'
sidebarDepth: 3
---

# Satellite setup

::: warning
This is an alpha release! It is subject to major changes, and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!
:::

::: tip
This guide is intended for users that wish to manually install Alice Satellite without downloading our image.
:::

- Download and burn Rasppberry Pi OS Lite: [https://www.raspberrypi.org/downloads/raspberry-pi-os/](https://www.raspberrypi.org/downloads/raspberry-pi-os/)
- Start it headless by placing 2 files on the boot partition of your sd card:
   - Create a file called `ssh`, without extension and completely empty
   - Create a file called `wpa_supplicant.conf`, with the following content:
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
  - Make sure to fit the information (`country, ssid and psk`) with your wifi settings
- Plug your SD card in your device and start it
- Update your system: `sudo apt-get update && sudo apt-get dist-upgrade -y`
- Update your preferences: `sudo raspiconfig`
- Make sure you have python 3.7 at least. If not (stretch), compile it from sources:
  ```
  sudo apt install -y libffi-dev libbz2-dev liblzma-dev libsqlite3-dev libncurses5-dev libgdbm-dev zlib1g-dev libreadline-dev libssl-dev tk-dev build-essential libncursesw5-dev libc6-dev openssl
  wget https://www.python.org/ftp/python/3.7.7/Python-3.7.7.tar.xz
  tar xf Python-3.7.7.tar.xz
  cd Python-3.7.7
  sudo ./configure
  sudo make -j -l4
  sudo make altinstall
  cd ..
  rm -rf Python-3.7.7.tar.xz
  ```
- Install git: `sudo apt-get install git`
- Clone Alice Satellite: `git clone https://github.com/project-alice-assistant/ProjectAliceSatellite ~/ProjectAlice`
- Create a virtual environment: `cd ~/ProjectAlice && python3.7 -m venv venv`
- Upgrade pip:
  ```
  cd ~/ProjectAlice
  ./venv/bin/pip install --upgrade pip
  ```
- Copy the init yaml file and edit it: `sudo cp ~/ProjectAlice/ProjectAlice.yaml /boot/ProjectAliceSatellite.yaml && sudo nano /boot/ProjectAliceSatellite.yaml`
- Make your configurations
- Start Alice manually with `./venv/bin/python main.py`

#### Having issues with Alice? She doesn't hear you? Doesn't seem to start?
Have a look at our [Troubleshooting guide](troubleshooting)!

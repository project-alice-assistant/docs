---
title: Install with AliceCli
sidebarDepth: 3
tags:
- cli
- command line
- install
- setup
---

# Alice cli

Alice Command Line Interpreter is a tool designed to be run from any device, connect to Alice and let you execute actions on it. While it offers a menu, most of the options are also usable with direct commands. Use `alice --help` to get a list of the supported commands.

::: warning
You need to run Python 3.8 at least!
:::

## Install the command line tool.

**On your main computer, not on the device where Alice will be installed**, install [AliceCli](https://pypi.org/project/projectalice-cli/) from Pypi:

`pip3.8 install projectalice-cli`

::: tip
AliceCli is intended to run on a separate device **not on Alice's device!!**, like per example, your main computer.

On Windows, it is recommended to run it on [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701)
:::

## Use the command line tool.

Once installed, you'll have access to a new command in your terminal: `alice`. Open your favourite terminal and type `alice`and you should be presented a menu with quite a few options!

```
Project Alice CLI version x.x.x

? Please select an option  (Use arrow keys)
 ❯ Discover devices on network
   Connect to a device
   ---------------
   Prepare your SD card
   Change device's password
   Set device's name
   Install your sound device
   Sound test
   Install Alice
   ---------------
   Start Alice
   Restart Alice
   Stop Alice
   Enable Alice service
   Disable Alice service
   ---------------
   Update Alice
   Update system
   Upgrade system
   Reboot device
   Uninstall your sound device
   Enable bug report for next session
   Check Alice logs
   Check system logs
   Exit
```

### Project Alice CLI version x.x.x
Depending on if a new version is available, this message will let you know how to update the CLI to the latest version!

### Discover devices on network
This will search for devices on your network whose names contain either `alice` or `raspberry`.

### Connect to a device
If you know the ip of your device, you can directly connect to it

### Prepare SD card
This will prepare you SD card. Make sure it is plugged in your computer. It will assist you to download the latest Raspberry OS Buster image, flash your SD card and make the initial setup for your Raspberry Pi to boot correctly and connect to your Wlan.

### Change device's password
This is important, even if you think it isn't, you should change the default `raspberry` password to something only you know.

### Set device's name
By defaults, your device is named `ProjectAlice`. This lets you change this to whatever pleases you. 

### Install your sound device
One critical and very error-prone part is the sound device installation. We recommend you run Alice with a Respeaker, so the CLI only supports them for now, but the Alice installation process proposes more devices that she **try** to install for you.  

### Sound test
Let's you test your sound device with a typical `left-right` audio

### Install Alice
This will install Alice with your guidance. You'll need to answer a few questions for the first settings and the CLI will deploy Alice on the connected device.

### Start Alice
Once installed, Alice is automatically started with `systemctl`. If you need to start her, you can with this

### Restart Alice
Restarts Alice with `systemctl`

### Stop Alice
Stops Alice with `systemctl`

### Enable Alice service
After installation, Alice's systemcl service is enabled by default, and she boots when your device boots. In case you disabled it, you can enable it here

### Disable Alice service
This disables Alice's service, so she doesn't automatically start on system boot.

### Update Alice
This updates Alice to the latest available version depending on your settings

### Update system
Performs a `sudo apt-get update`

### Upgrade system
Performs a `sudo apt-get upgrade -y`

### Reboot device
Reboots the device

### Uninstall your sound device
Uninstalls your Respeaker sound device, which you always should first if trying to reinstall it.

### Enable bug report for next session
Turns on auto bug reporting for the next time Alice starts

### Check Alice logs
Displays and follows Alice logs

### Check system logs
Displays and follows system logs

## Cool, now what?
Ok, unpack your SD card and plug it to your computer. Open your terminal and type `alice` to start the CLI. Choose `Prepare your SD card` and let the CLI guide you. Once it is flashed, remove your SD card, plug it in your Raspberry Pi and power it on. Let it a good minute to boot first time after flashing.

Your Raspberry should have booted, and we are ready to communicate with it. No need to manually discover a device or connect, it's automatic!

- Choose `change device's password` and set your own password.
- As you did not manually connect, the CLI will discover the devices on your network and let you chose to which one you want to connect. Thee one you want to connect to should be called `ProjectAlice`.
- Chose `Set device's name`. Why? Because it is now called `ProjectAlice`, as stated in the last point. What if you install satellite? You won't be able to distinguish which is who. So to avoid any risks, just rename it to `ProjectAliceMainUnit`
- If you use a Respeaker
  - Choose `Install your sound device` and follow the CLI's instructions
  - Choose `Sound test` to make sure it installed correctly
    - If not, report on our discord server
- Choose `Install Alice`
  - If Alice is already installed the CLI will ask you if you want to reinstall
  - Otherwise, follow the instructions given by the CLI.
- Once done, open `Check Alice logs` and check her logs. She does **a lot** on her first start, like downloading missing parts, updating, training, installing skills etc. It takes time. She will, on herself, encounter a few errors and restart maybe 2/3 times to fix those. If the logs, after a while, continuously state `restarting alice`, we have a problem, and you should report to our Discord server
- If the logs say `Start in xxx seeconds` then we are good to go, and she should already greet you with some instructions about the admin user!
- Enjoy!

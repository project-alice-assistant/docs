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

Install [AliceCli](https://pypi.org/project/projectalice-cli/) from Pypi:

`pip3.8 install projectalice-cli`

::: tip
AliceCli is intended to run on a separate device **not on Alice's device!!**, like per example, your main computer.
:::

Once installed, you'll have access to a new command in your terminal: `alice`. Open your favourite terminal and type `alice`and you should be presented a menu with quite a few options!

```
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

Leave the first options for later, we don't need them yet. You want to start at the second section of the menu, with first `Prepare your SD card`. The whole setup is then self-explanatory. Once the process is done, you can unplug your SD card from your computer and plug it in the device where Alice will run.

Now that the SD is plugged in Alice's device, power the device and let it boot. You can manually try to connect to it, but using any other menu option while not connected will automatically help you discover, and connect to the device! The password is saved for a faster SSH connection.

`Change device's password` is something meant for the lazy ones like me. Why bother doing it, I'm anyway only local, blablabla.... Do it, it's your security!

`Change device name` will set the device name to whatever you want, by default `ProjectAlice`

As of now, the `Install your sound device` only works with respeakers, so if you are
 using something else, don't worry, Alice will take care of it when initializing.

If you installed your sound device, you can use `Sound test` to check if all is well

`Install Alice` will offer you a few options to do the basic grunt work and will start Alice's initialization.

Once installed, Alice is automatically started on device's boot. You can follow the installation, AliceCli does return the logs dynamically over ssh.

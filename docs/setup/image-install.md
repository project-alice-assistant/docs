---
title: Install with our pre-made image
sidebarDepth: 3
tags:
- image
- prefabricated
- install
- setup
---

::: warning
The last image we created for now is Beta 2! Did you check the [alice CLI install](alice-cli) for an updated Alice? We will resume image creation when version 1 is released.
:::

- Download our prefabricated Raspbian image:
   - [Direct download](https://github.com/project-alice-assistant/ProjectAlice/releases/tag/v1.0.0-b1)
   - This image has nothing more than Project Alice and a few dependencies.
   - If you wonder what's inside, check the [Preinstalled Packages Section](preinstalled)
- Extract the image from the 7zip archive

::: tip
Use [7zip](https://www.7-zip.org/), it's open source, fast, has one of the best compression ratio and comes with nice features
:::

- Flash the image to your SD card
- **do not place any wpa_supplicant.conf or ssh file in /boot**
- **do not boot your raspberry before doing this next point!!**
- **Edit the /boot/ProjectAlice.yaml file**. If there's no ProjectAlice.yaml file on the /boot partition, grab the latest from sources: [ProjectAlice.yaml](https://github.com/project-alice-assistant/ProjectAlice/blob/master/ProjectAlice.yaml)
- Configure it according to your information and needs. All configurations have a little explanation, but most should be self-explanatory.
- Make sure to have a space after the colons:
   - Wrong: `forceRewrite:yes`
   - Correct: `forceRewrite: yes`
- If the option value contains any special characters, enclose the whole value with double quotes:
   - Wrong: `mqttPassword: a:%qJi`
   - Correct: `mqttPassword: "a:%qJi"`
- Save it, unplug your SD card, plug it into your raspberry pi and power it up.
- Alice should boot by herself and connect to your Wi-Fi, update, configure and start. This may take a while, **so do not unplug until she has spoken to you!**
- If you have enabled the interface (by default), you can check what's going on by browsing to `http://x.x.x.x:5000`, replace with the Project Alice device's IP address.
- The SSH User is `pi`, and the password is `umbrella`

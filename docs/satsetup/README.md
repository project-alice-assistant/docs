---
title: 'Satellite setup'
sidebarDepth: 3
---

::: tip
You need the AliceSatellite Skill installed and running on your main unit!
:::

Basically, to install your satellites, you just have to do exactly the same as you did for your main unit but chose `Install Alice Satellite` using the CLI:

[Installing with the CLI](https://docs.projectalice.io/setup/alice-cli.html#use-the-command-line-tool)

Once you have the satellite installed, it will automatically boot and try to connect to whatever main device is in "add" mode. To make your Alice main unit add a new Satellite, first make sure you have the `AliceSatellite` skill installed. Then, all you need to do is simply ask her to "add a new satellite"! And you are done!

::: tip
If the main unit times out finding the satellite, unplug it, ask Alice to add a new satellite and power up your satellite.
:::

If everything goes fine, Alice will confirm the addition of the satellite and automatically configure it to connect to the correct Mqtt server. She will also automatically upload the hotword and wakeword resources to the new device.

#### Having issues with Alice? She doesn't hear you? Doesn't seem to start?
Have a look at our [Troubleshooting guide](../troubleshooting/satellite.md)!

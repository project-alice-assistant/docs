# Satellite setup

::: warning
This is an alpha release! It is subject to major changes and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!
:::


- Download our prefabricated Raspbian buster image:
   - [Direct download](https://github.com/project-alice-assistant/ProjectAliceSatellite/releases/tag/v1.0.0-a1)
   - This image has nothing more than Project Alice and its dependencies as well as Hermes Led Control
   - If you wonder what's check the [Preinstalled Packages Section](preinstalled)

::: tip
You need the AliceSatellite installed and running on your main unit!
:::

- Flash the image to your SD card
- **do not place any wpa_supplicant.conf or ssh file in /boot**
- **do not boot your raspberry before doing this next point!!**
- **Edit the /boot/ProjectAlice.yaml file**. If there's no ProjectAlice.yaml file on the /boot partition, grab the latest from sources: [ProjectAliceSatellite.yaml](https://github.com/project-alice-assistant/ProjectAliceSatellite/blob/master/ProjectAliceSatellite.yaml)
- Configure it according to your information and needs. All configuration have a little explanation but most should be self explanatory.
- Make sure to have a space after the colons:
   - Wrong: `forceRewrite:yes`
   - Correct: `forceRewrite: yes`
- If the option value contains any special characters, enclose the whole with double quotes:
   - Wrong: `mqttPassword: a:%qJi`
   - Correct: `mqttPassword: "a:%qJi"`
- Save it, unplug your sd, plug it in your raspberry pi and power it up.
- Alice should boot by herself and connect to your wifi, update, configure and start. This may take a while
- Ask Alice to "Add a new satellite"
- The SSH User is `pi` and the password is `umbrella`

If everything goes fine, Alice will confirm the addition of the satellite and automatically configure it to connect to the correct Mqtt server. She will also automatically upload the hotword and wakeword resources to the new device.

#### Having issues with Alice? She doesn't hear you? Doesn't seem to start?
Have a look at our [Troubleshooting guide](troubleshooting)!

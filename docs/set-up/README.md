# Set Up

::: warning
This is an alpha release! It is subject to major changes and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!
:::


- Download our prefabricated Raspbian buster image:
   - [Direct download](https://github.com/project-alice-assistant/ProjectAlice/releases/tag/v1.0.0-a5)
 - This image has nothing more than Python 3.7 pre installed along with Project Alice and its dependencies
 - The SSH User is `pi` and the password is `umbrella`
 - If you wonder what's check the [Preinstalled Packages Section](preinstalled)
- Flash the image to your SD card
- **do not place any wpa_supplicant.conf or ssh file in /boot**
- **do not boot your raspberry before doing this next point!!**
- ** Edit the /boot/ProjectAlice.yaml file**
- Configure it according to your informations and needs
- Save it, unplug your sd, plug it in your raspberry pi and power it up.
- Alice should boot by herself and connect to your wifi, update, configure and start. This may take a while, so do not unplug until she has spoken to you! If you haven enabled the interface, you can check what's going on by browsing to `http://x.x.x.x:5000`, replace with the Project Alice device's IP adress.

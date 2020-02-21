# Set Up

::: warning
This is an alpha release! It is subject to major changes and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!
:::


- Download our prefabricated Raspbian stretch image:
   - [Direct download](https://github.com/project-alice-assistant/ProjectAlice/releases/tag/v1.0.0-a4)
   - MD5 checksum for Stretch: `BA8C5A8605A25C931F9FE436A0B79631` filesize: `1,969,706,757`
   - MD5 checksum for Buster: `2283BD8F974628C511AC9394F97F8EAB` filesize: `1,655,875,086`
 - This image has nothing more than Python 3.7 pre installed along with Project Alice and its dependencies
 - The SSH User is `pi` and the password is `umbrella`
 - If you wonder what's check the [Preinstalled Packages Section](preinstalled)
- Flash the image to your SD card
- **do not place any wpa_supplicant.conf or ssh file in /boot**
- **Copy the file called "ProjectAlice.yaml" in /home/pi/ProjectAlice to the /boot partition**
- **Edit that file**
```
sudo cp ~/ProjectAlice/ProjectAlice.yaml /boot/ProjectAlice.yaml
sudo nano /boot/ProjectAlice.yaml
```
- Configure it according to your informations and needs
- Save it, unplug your sd, plug it in your raspberry pi and power it up.
- Alice should boot by herself and connect to your wifi, update, configure and start. This may take a while, so do not unplug until she has spoken to you! If you haven enabled the interface, you can check what's going on by browsing to `http://x.x.x.x:5000`, replace with the Project Alice device's IP adress.

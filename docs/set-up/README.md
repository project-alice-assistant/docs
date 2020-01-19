# Set Up

::: warning
This is an alpha release! It is subject to major changes and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!
:::

There are for now 2 install methods and the fastest is the image download + flashing. The other one is a manual download and install.

## The Flashing method
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
- Alice should boot by herself and connect to your wifi, update, configure and start. This may take a while, so do not unplug until she has spoken to you! If you haven enabled the interface, you can check what's going on by browsing to http://x.x.x.x:5000, replace with the Project Alice device's IP adress.

------------------


## The Installer method

This method has been long used but still requires some fixing and fiddling. It takes much more time especially because it needs to compile python 3.7. 
::: warning
The installer wasn't updated for month and will be replaced soon.
:::

- Flash your sd card with latest raspbian stretch lite. You don't need the desktop! Buster is not yet supported but shall soon
- Setup the ssh and the wifi connection: https://www.raspberrypi.org/forums/viewtopic.php?t=191252
- Plug your microphone and speakers. If you do use devices such as respeakers, matrix or others, they are supported
- SSH to your device. For windows users, I do recommend Kitty, a Putty brother with auto reconnection and login: http://www.9bis.net/kitty/?page=Download
- Setup your raspberry: `sudo raspi-config`: Change the password, set your timezone, expand your main partition, enable SPI and I2C, force the audio on 3.5mm jack if needed.
- Install git: `sudo aptitude install -y git`
- Git clone the installer to /home/pi `https://github.com/project-alice-assistant/ProjectAliceInstaller`
- run install.sh
(- Get the latest Project Alice installer: `wget modules.projectalice.ch/Installer -O ~/painstaller.sh
- Make it executable: `sudo chmod +x painstaller.sh`
- Run it! `sudo ./painstaller.sh`)

The installer will guide you through the install process. Note that for now, the installer only support main unit installing and we are working on a better, more polished experience. Installing will take time! We are installing many different things and especially Python 3.7. You do not need to optimize it when the question comes! For the time being, do no install snips-google-asr as it is deprecated by Snips and will most likely be removed. We are working on oour own solution.

While the installer is working, take a tour to [https://console.snips.ai](https://console.snips.ai), create yourself an (new) account. Keep the login, password and username in mind, Alice needs to know them! If you intend to use Google Wavenet or Amazon Polly for a better voice experience, you will need to create accounts on the respective websites and enable the apis.

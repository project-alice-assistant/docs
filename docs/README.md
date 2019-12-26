<link rel="stylesheet" href="/css/landingPage.css">

<h1 align="center" class="aliceBanner">
  <img width="90%" alt="Project Alice Logo" src="/images/projectalice_banner.svg">
</h1>

<p align="center" class="badges">
  <a href="LICENSE" target="_blank"><img src="/images/badges/license.svg" alt="License" /></a>
  <a href="https://discord.gg/Jfcj355" target="_blank"><img alt="Discord" src="/images/badges/Discord.svg"></a>
</p>
<p align="center" class="badges">
  <a href="https://github.com/project-alice-assistant/ProjectAlice/actions" target="_blank"><img alt="unit tests" src="/images/badges/UnitTests.svg"></a>
  <a href="https://coveralls.io/github/project-alice-assistant/ProjectAlice?branch=HEAD" target="_blank"><img alt="Coverage Status" src="/images/badges/Coverage.svg"></a>
  <a href="https://codeclimate.com/github/project-alice-assistant/ProjectAlice/maintainability" target="_blank"><img alt="Maintainability" src="/images/badges/CodeClimate.svg"></a>
  <a href="https://app.codacy.com/manual/ProjectAlice/ProjectAlice/dashboard" target="_blank"><img alt="Codacy Badge" src="/images/badges/Codacy.svg"></a>
</p>

<p align="justify">
Project Alice is a smart voice home assistant that is completely modular and extensible. It was first built around Snips therefore runs entirely offline and never sends or shares your voice interactions with anyone, Project Alice <strong>guarantees</strong> your privacy in your home or wherever you’re using Project Alice.

However, as an option, Project Alice can be configured to use some online alternatives and fall backs (for example, using Amazon or Google’s Text to Speech engines). Since the Project Alice team strongly believe that decisions about your privacy should be made by you and you alone, these options are all disabled by default.
</p>

## How does it work
It works by simply installing Project Alice on your device. It was meant to run on a Raspberry Pi 3, but it runs on the second version as well. Our installer takes care of everything so you don't need to mess with drivers, packages, versions, pip, sudo, python or whatever.
Project Alice comes with 5 pre installed modules but you can extend this by adding others which you can find on [https://github.com/project-alice-assistant/ProjectAliceSkills](https://github.com/project-alice-assistant/ProjectAliceSkills)
Voice recognition works on a hotword basis. Your device is constantly listening to its surrounding, waiting for a hotword to be spoken. When that hotword is spotted, your device will start listening to what you tell it, trying to transpose that sound you produce with your mouth into a written text. Once the capture is done, the device will try to understand what you just said, through a Natural Language Understanding process and will return its conclusion to Project Alice that will take care of giving you the information or execute the action you asked

## Is this free
Yes it is free. It is published under GPLv3 which means you have to open source your modifications and return it to the community. We do not make any money with this, this is entirely done on our spare time and is subject to constant evolution. We sometimes get thirsty, or sometimes burn our hardware hard testing the next gen stuff we try to add, so we **[do appreciate donations](https://paypal.me/Psychokiller1888)**

## Is Snips involved in this
**NO**. Snips has nothing to do with this and are not responsible for any support or guidance towards this project. Although, I am very close to the Snips team as a Snips Supermaker. **Please do not contact Snips for Project Alice support**

## Is this legal
Yes, of course. We use different libraries that are open source as well. As Psycho has a very close relation with Snips, we made sure everything we did implement in Alice is respectful and approved by Snips.

## Copyright
Project Alice ships under GPLv3, it means you are free to use and redistribute our code but are not allowed to use any part of it under a closed license. Give the community back what you've been given!
Regarding third party tools, scripts, material we use, I took care to mention original creators in files and respect their copyright. If something has slept under my supervision know that it was in no case intended and is the result of a mistake and I ask you to contact me directly to solve the issue asap.

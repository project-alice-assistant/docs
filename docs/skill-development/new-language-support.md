---
title: Adding a new language support
sidebarDepth: 4
tags:
- language support
- translate
---

# Intro
We currently natively support the following languages:
- English
- French
- German
- Italian
- Polish

This means those languages are available as a configuration, and the **entire** system can run with them.

Beside these languages, we provide support for nearly all languages in the world, for skills only, for as long as you do not set Alice as offline only. We can use Google Translate free services to obtain a good result when sending the request to our NLU.

You can add easily add a new language support for either the entire system or some skills or both

::: warning
Alice is a friend of yours, she's familiar and not impersonal. She uses the familiar "you" and not the formal "you". In french she uses "tu" and not "vous", in german "du" and not "Sie" etc etc
:::

## What means "Adding a new language support"
We speak of translation, but it's not really a translation, it's basically adding the language support. It's of no use to translate word for word what's in the files. It's really about creating a new language support for the skill. Don't just translate, but add new ways of saying, remove those that are not used in your language, turn utterances around, make it lively. Same goes for the talk files, just use your imagination to make Alice sound natural in your language!

## How to add a new language support
You will need a [Github](https://github.com) account to translate skills or the system. Once you have your account and are logged in, simply [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the skill you want to translate. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github) your fork on your computer and do the translation.

Commit your changes every now and then and [Push](https://help.github.com/en/github/using-git/pushing-commits-to-a-remote-repository) them on your repository. When translated, do not forget to increment the version number in the `.install`file. Once everything is done, and you successfully ran the [basic verifications](../skill-development/publishing-to-skill-store.md), you can create a [Pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) which we will review and merge if possible and otherwise inform you of what's still needed.


The sections [talk files](../skill-development/talk-file.md) and [dialog templates](../skill-development/dialog-template.md) provide further information about the files that need to be translated.

## Adding a new system language support
If you feel like adding a new system language support, we strongly encourage you to first get in touch with us. It's easy to add a new language support, but requires some Alice knowledge to better grasp the context in which the language strings are used. Again, it's not about translating, it's about adding a new language. Make it feel real, lively, familiar! There are quite a few files to translate, let's list them!

### Basic skills

- AliceCore
- ContextSensitive
- DateDayTimeYear
- RedQueen
- Telemetry

Skills can have language files in the following directories:
- talks
- dialogTemplate
- widgets
- devices

Don't forget to:

- Add yourself in the maintainers in the install file
- Add your language code as supported in the install file

### System

- ProjectAlice/system/manager/LanguageManager/strings.json
- ProjectAlice/system/manager/TalkManager/talks
- ProjectAlice/system/manager/WebUIManager/*.json

Once these files are made, please contact us so that we can add the language as supported on the core side!

## Translating a skill via the Alice Web Interface
As of version 1.0.0 we introduce the developers mode in the web interface. While you can create skills from scratch with its help, it makes translating existing skills even easier!

To get started, make sure you have the dev mode enabled in your admin settings. Only then the "devmode" in your menu:
<img src="https://user-images.githubusercontent.com/41761223/149407452-d94e4e79-27c4-4d84-9ee0-f4e7604f5c81.png" alt="badges demo">

Once you enter the devmodes page, you will see all your installed skills. Currently you can't translate a skill you havn't installed and you can't install a skill that isn't in your language. (This will change! For now - please change your active language to english as all skills require an english version.)

Select the skill you want to translate by clicking on the coq in
... WIP testing image upload II

---
title: 'Adding a new language support'
sidebarDepth: 4
---

# Intro
We currently natively support the following languages:
- English
- French
- German
- Italian

This means those languages are available as a configuration and the **entire** system can run with them.

Beside these languages, we provide support for nearly all languages in the world, for skills only, for as long as you do not set Alice as offline only. We can use Google Translate free services to obtain a good result when sending the request to our NLU.

You can add easily add a new language support for either the entire system or some skills or both

::: warning
Alice is a friend of yours, she's familiar and not impersonal. She uses the familiar "you" and not the formal "you". In french she uses "tu" and not "vous", in german "du" and not "Sie" etc etc
:::

## What means "Adding a new language support"
We speak of translation but it's not really a translation, it's basically adding the language support. It's of no use to translate word for word what's in the files. It's really about creating a new language support for the skill. Don't just translate, but add new ways of saying, remove those that are not used in your language, turn utterances around, make it lively. Same goes for the talk files, just use your imagination to make Alice sound natural in your language!

## How to add a new language support
You will need a [Github](https://github.com) account to translate skills or the system. Once you have your account and are logged in, simply [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the skill you want to translate. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github) your fork on your computer and do the translation.

Commit your changes every now and then and [Push](https://help.github.com/en/github/using-git/pushing-commits-to-a-remote-repository) them on your repository. When translated, do not forget to increment the version number in the `.install`file. Once everything is done and you successfully ran the [basic verifications](../skill-development/publishing-to-skill-store.md), you can create a [Pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) which we will review and merge if possible and otherwise inform you of what's still needed. 


The sections [talk files](../skill-development/talk-file.md) and [dialog templates](../skill-development/dialog-template.md) provide further information about the files that need to be translated.

## Adding a new system language support
If you feel like you want to add support for another language, please contact us on Discord and we'll explain what it means to translate the system. There are a few files that need to be created and some configurations to be added. It's not a huge work, but certainly takes some time. It is best if you are already using Alice, so you know the context of the strings you are going to translate.

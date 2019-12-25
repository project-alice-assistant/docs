---
sidebarDepth: 1
title: Introduction to Skill Development
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Introduction to Skill Development

Alice Skills are the voice applications that provide different functionality for users. To create a Skill requires at least basic technical experience, a Alice installation, and an idea of what your Skill will do, and how people will use it.

::: tip
Explore the fundamental building blocks of a Skill, and the knowledge required
to create meaningful and engaging voice interactions.
:::


## Technical Requirements

### Python programming language

Skills for Alice are written using the [Python programming language](https://www.python.org/). A simple Skill can be a great way for new developers to try Python out in a real project, whilst experienced programmers will quickly see the powerful possibilities available in a well crafted Skill.

If you aren't familiar with the basics of Python, check out our [list of Python tutorials and resources](python-resources) to get you started. If you've programmed in other object-oriented languages, like Javascript or C\#, then you'll be able to pick it up, but if you're totally new to programming, you might want to look at an [introductory programming course](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11).

### Github account

Skills are hosted on [Github](https://github.com), so you will need to create an account there if you don't already have one. It is good to have an basic understanding of the [Git basics](https://git-scm.com/video/get-going) and [GitHub basics](https://guides.github.com/activities/hello-world/).

### Running Alice

To test your Skill out, you will need to [set up a Alice device](../set-up). Currently Alice can be installed on devices running debian stretch/buster. Alice also comes with a number of helpful tools to create new Skills, and validate them. If you aren't yet familiar with how Alice works, check out the [overview of Alice components]() to understand the many technologies that come together to provide an intelligent voice assistant.

## What makes a good Skill?

### Fulfilling a need the user has

Good Skills meet one or more of the user's needs. Popular Skills are popular because people use them frequently - for instance, to set alarms, reminders, or to identify the time in other time zones. On the other hand, a Skill that, say, recites π to 100 digits might be pretty cool, but when was the last time you needed to know π to 100 digits? Contrast that with the last time you set a reminder on your phone.

### Having an easy to use voice interface

Just like a web page with a thoughtfully-designed interface is much more pleasant to use, a Skill with a well designed voice interface is a delight, not a chore, to use. You should anticipate the task the user is trying to accomplish, and how to make that as straightforward as possible.

If you have an idea for a Skill, it's a great idea to join our [Discord Chat](https://discordapp.com/invite/Jfcj355), specifically the `skills` channel, and share what your plans are. You'll be able to get constructive and helpful feedback on your Skill from an experienced community.

## Skill terminology

You'll notice some new terms as you start to develop Skills.

* **utterance** - An utterance is a phrase spoken by the User, after the User says the Wake Word.
* **intent** - An intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots.
* **slot** - A slot is an argument to an intent that gives a voice assistant more information about that request.

Consider a weather skill. It might have e.g. an intent `GetWeather` with the following utterances (slots are marked in red):
<div class="userSpeech male">what's the weather like in <strong style="color:#fe205b">Toronto</strong>?</div>
<div class="userSpeech male">Tell me the weather in <strong style="color:#fe205b">Toronto</strong> please?</div>


If you encounter anything else you're not familiar with, checkout the [Alice Glossary](../glossary).


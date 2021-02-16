---
title: 'Introduction to Skill Development'
sidebarDepth: 2
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Intro

Alice's :skill:skills: are the voice applications that provide different functionality for users. To create a Skill requires at least basic technical experience, an Alice installation, an idea of what your :skill:Skill: will do, and how people will use it.

::: tip
Explore the fundamental building blocks of a :skills:Skill:, and the knowledge required
to create meaningful and engaging voice interactions.
:::


## Technical Requirements

### Python programming language

Skills for Alice are written using the [Python programming language](https://www.python.org/). A simple Skill can be a great way for new developers to try Python out in a real project, whilst experienced programmers will quickly see the powerful possibilities available in a well crafted :skill:Skill:.

If you aren't familiar with the basics of Python, check one of the many great tutorials online to get you started. If you've programmed in other object-oriented languages, like Java or C\#, then you'll be able to pick it up, but if you're totally new to programming, you might want to look at an [introductory programming course](https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11).

::: warning
It is **required** that you read **and understand** our [Code guidelines](../contribute/code-guidelines.md)
:::

For a quick jump into setting your IDE for Alice, read the following community made documentation: [Getting started with Pycharm](./community-made/getting-started-pycharm.md).

### Github account

Skills are hosted on [Github](https://github.com), so you will need to create an account there if you don't already have one. It is good to have a basic understanding of the [Git basics](https://git-scm.com/video/get-going) and [GitHub basics](https://guides.github.com/activities/hello-world/).

### Running Alice

To test your Skill out, you will need to [set up an Alice device](../setup). Currently, Alice can be installed on devices running debian stretch/buster. Alice also comes with a number of helpful tools to create new Skills, and validate them. If you aren't yet familiar with how Alice works, check out the [overview of Alice components]() to understand the many technologies that come together to provide an intelligent voice assistant.

## What makes a good Skill?

### Fulfilling a need the user has

Good Skills meet one or more of the user's needs. Popular Skills are popular because people use them frequently - for instance, to set alarms, reminders, or to identify the time in other time zones. On the other hand, a Skill that, say, recites π to 100 digits might be pretty cool, but when was the last time you needed to know π to 100 digits? Contrast that with the last time you set a reminder on your phone.

### Having an easy to use voice interface

Just like a web page with a thoughtfully-designed interface is much more pleasant to use, a Skill with a well-designed voice interface is a delight, not a chore, to use. You should anticipate the task the user is trying to accomplish, and how to make that as straightforward as possible.

If you have an idea for a Skill, it's a great idea to join our [Discord Chat](https://discordapp.com/invite/Jfcj355), specifically the `skills` channel, and share what your plans are. You'll be able to get constructive and helpful feedback on your Skill from an experienced community.

### Alice's idiom

This part is important, to provide the smoothest experience possible to the end user. Let's set the example:

- You have a house
- The house has 3 :location:rooms: Living room, kitchen, bedroom.
- Every :location:rooms: have an Alice :satellite:Satellite:
- Every :location:rooms: have some smart lights installed.
- Bedroom and kitchen :location:rooms: have roof windows.

Now, you are standing in the living room and ask Alice

<div class="userSpeech male">Turn the lights on please</div>

As a user, you expect Alice to turn the lights on **in the living room** right? Without explicitly specifying it. Your skill must follow this rule.

Now, while still standing in the living room:
<div class="userSpeech female">Close the windows</div>

There's no windows in the living room, as a user, you know it. Your skill must close **all the available windows** as the user did not specify which ones!

In the contrary:
<div class="userSpeech female">Close the windows in the living room</div>

Alice should respond that there's no windows in the living room.

Or:
<div class="userSpeech male">Close the windows in the bedroom</div>

Alice should close the windows in the bedroom **only**, as explicitly specified

This set of rules is relatively simple, and must be followed by every skills!

## Skill terminology

Make sure to check our [Alice Glossary](../about-alice/GLOSSARY.md) to understand all the terms used in relation with skills.

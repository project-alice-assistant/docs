---
title: 'Skill download suggestion'
sidebarDepth: 3
tags:
- suggestion
- auto download
- download
---

# What's this?

Ever got frustrated because something you ask your assistant isn't understood? What if I told you that Alice can try to find a :skill: on our skillstore that could fulfill your request?


# lang.sample

There's no black magic behind this, simply a little work for the :skill: dev to make it work!
When a new version of your skill is published, our store is updated automagically. During this process, it also looks for files, in the `dialogTemplate` directory, with the `.sample` extension. The file is name after whatever language is contains, example `en.sample` or `de.sample`.

The structure of the file is really simple! It's a json file that contains a list... Let's check an example, for the `DateDayTimeYear` :skill:

```json
[
	"what time is it",
	"what's the date",
	"what is the year",
	"what is the day",
	"tell me the time",
	"tell me the date",
	"time",
	"date"
]
```

This file is named `en.sample` and is placed in `dialogTemplate`. Its content defines, or try to guess, the most common ways a lambda user would ask or say to trigger your skill. There aren't many rules about this file but keep these in mind:

- Politeness forms are removed, so don't add `please` or `could you` or stuff like that.
- The file is limited to 10 samples.
- Do not use punctuations.
- Try to think out of the box and find casual samples, like, everyday usage forms.
- Do not cover `disabledByDefault` intents, or answer intents such as `yes/no`.
- Think about it as `What do I definitely want my skill to react to?`

# speakableName

That's the last required bit. In the install file, make sure you have a property called `speakableName`. As you know by now, :skill: names are PascalCase, so let's say, not really speakable for a :tts: engine. This property defines the name Alice will speak when she proposes users to download your :skill:. In the case of our `DateDayTimeYear` :skill: the speakableName is set to `date time functions`, which is speakable for Alice, at least better than `DateDayTimeYear`

# Conclusion

Very easy, wasn't it? Making your skill compatible with auto suggestions is a good idea, it will make the user experience much better over time. Imagine a time when hundreds of skills are available, Alice will never again tell you she doesn't understand something, but will always have a skill to propose for your request!

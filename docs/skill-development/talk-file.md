---
title: 'Talk file'
sidebarDepth: 3
---

# Intro

Inside a skill directory, there is a `talks` sub directory containing `.json` files. The files are named after the language code they contain. These files are used by Alice to respond to your requests and should by all mean contain at least 2 different ways of answering, optimal would be 5 ways, so she doesn't always answer the same.


We have different ways of defining those text strings. First of all, this is a `json` object. The `keys` **are never to be translated**!


::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended to use our [Talk file Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/talk-schema.json)
:::


## Structure
### Example 1 - A list of strings
Let's take this example:

```json
{
	"busy": [
		"Sorry, but I'm busy at the moment, please wait",
		"Wait a second, I'm busy at the moment",
		"Please wait, I'm kindda busy right now"
	]
}
```

In this example, the `key` is `busy` and that `key` is used by skills to retrieve the text to be spoken and contains a list of 3 different strings, 3 different ways for Alice to choose from when answering. The choice is random, you cannot influence it, but it feels more natural if Alice doesn't always answer the same for the same question. This example is the very basic way of defining answers for a skill and is not the preferred way for skills.


### Example 2 - A dictionary of strings
Let's take a look at another example:

```json
{
	"confirmAddition": {
		"default": [
			"Ok, I have added this device",
			"I added this new device"
		]
	}
}
```

In this example the `key` is `confirmAddition` but defines a dictionary this time. This dictionary is only defining the `default` way of answering and is not respectful of users that might have the option `use short answers` or `night mode` enabled. In this case, a random `default` string will be picked by Alice to answer. To respect the `use short answers` or `night mode` users, we can define the same as the following:

```json
{
	"confirmAddition": {
		"default": [
			"Ok, I have added this device",
			"I added this new device"
		],
		"short": [
			"Ok!",
			"Done!"
		]
	}
}
```

In the case a user prefers a short answer or has turned on `night mode`, Alice will pick a random answer from the `short` list. Otherwise, she will randomly pick from the `default` list.

## Variables
The time you will need variables in your answers will come very fast. Imagine answering for the weather, you cannot make 100 strings declaration for each possible temperatures! Two solutions exist.

### Unindexed variables
This is ok to use in case your string only contains one variable but should be avoided in case of more, simply because some languages maybe have to inverse the position of the variable

```json
{
	"langSwitch": {
		"default": [
			"Ok, let's talk in {} then!",
			"Sure, I can talk in {}",
			"No problem, I'm switching to {}"
		],
		"short": [
			"Ok",
			"Yep"
		]
	}
}
```

As you can see, default strings all have a `{}` weirdness... Well, this is your variable! Alice will replace that by the content you tell her. In this example, you could ask her to speak in finnish and she'd answer, randomly, with `Ok, let's talk in finnish then!` 

### Indexed variables
This is better as we define what goes where, as sometimes languages don't use the same order. Or sometimes a different way of saying inverts the order of the variables.

```json
{
	"noDevice": {
		"default": [
			"Sorry, no {0} in room {1}",
			"I can't, room {1} doesn't have any {0}"
		]
	}
}
```

By reading this you notice that our curly braces now contain a number. They are the same variable as before but are indexed. If you take the first example, it could translate to `Sorry, no satellite in room kitchen` and the second would translate to `I can't, room kitchen doesn't have any satellite`

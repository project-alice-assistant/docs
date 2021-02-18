---
title: Files in depth
sidebarDepth: 3
tags:
- getting started
- skill files
- dialog template
- sample
- talk file
- structure
- slot
- utterance
- intent
- config
---

# Let's go further

Shall we? Don't be scared, I'm just going to show you the content of some files and explain what they do and how they work.

## Talk files

::: tip Pro tip
If you want your assistant to feel natural, be natural. Write her answers how you speak, be friendly, use slang, provide multiple ways of answering
:::

These files are used by Alice to respond to your requests and should by all mean contain at least 2 different ways of answering, optimal would be 5 at least, so she doesn't always answer the same.

We have different ways of defining those text strings.


### Structure

::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended to use our [Talk file Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/talk-schema.json)
:::

#### Example 1 - A list of strings
Let's take this example:

```json
{
	"busy": [
		"Sorry, but I'm busy at the moment, please wait.",
		"Wait a second, I'm busy at the moment.",
		"Please wait, I'm kinda busy right now."
	]
}
```

In this example, the `key` is `busy` and that `key` is used by skills to retrieve the text to be spoken. It contains a list of 3 different strings, 3 different ways for Alice to choose from when answering. The choice is random, you cannot influence it, but it feels more natural if Alice doesn't always answer the same for the same question. This example is the very basic way of defining answers for a skill and is not the preferred way for skills.


#### Example 2 - A dictionary of strings
Let's take a look at another example, the preferred way:

```json
{
	"confirmAddition": {
		"default": [
			"Ok, I have added this device.",
			"I added this new device.",
            "Sure, I just added it!"
		]
	}
}
```

In this example the `key` is `confirmAddition` but defines a dictionary this time. This dictionary is only defining the `default` way of answering and is not respectful of users that might have the option `use short answers` or `night mode` enabled. In this case, a random `default` string will be picked by Alice to answer. To respect the `use short answers` or `night mode` users, we can define the same as the following:

```json
{
	"confirmAddition": {
		"default": [
			"Ok, I have added this device!",
			"I added this new device!"
		],
		"short": [
			"Ok!",
			"Done!"
		]
	}
}
```

In the case a user prefers a short answer or has turned on `night mode`, Alice will pick a random answer from the `short` list. Otherwise, she will randomly pick from the `default` list.

### Variables
The time you will need variables in your answers will come very fast. Imagine answering for the weather, you cannot make 100 strings declaration for each possible temperatures! Two solutions exist.

#### Unindexed variables
This is ok to use in case your string only contains one variable but should be avoided in case of more, simply because some languages may have to inverse the position of the variables.

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

As you can see, default strings all have a `{}` weirdness... We call them `curly braces`. Well, this is your variable! Alice will replace that by the content you tell her. In this example, you could ask her to speak in finnish, and she'd answer, randomly, with `Ok, let's talk in finnish then!`

#### Indexed variables
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

By reading this you notice that our `curly braces` now contain a number. They are the same variable as before but are indexed. If you take the first example, it could translate to `Sorry, no satellite in room kitchen` and the second would translate to `I can't, room kitchen doesn't have any satellite`. You surely have noticed that the room, and the device type variable are reversed in both examples.

::: tip Pro tip
Use punctuation for your strings! Even at the end of answers, just because it's correct, but also because most TTS do respect them and will speak more naturally if punctuated correctly. Talk files also support  [SSML markup](https://en.wikipedia.org/wiki/Speech_Synthesis_Markup_Language). The `<speak>` and `breath` effects are auto injected, you shouldn't add them! If the TTS engine the user is using doesn't support SSML, Alice will automatically remove the tags.
:::

## Dialog templates

This is the "pièce of resistance", the beef! This defines your :intent:intents:, :utterance:utterances: and your :slot:slots: in a readable way. Alice will then use this file to train the :NLU: and :ASR: components!


::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended using our [Dialogue Template Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/dialog-schema.json)
:::


### A basic file
A basic template look fairly simple, without any defined slot or intent

```json
{
	"skill": "HelloWorld",
	"description": "This is my first skill",
	"slotTypes": [],
	"intents": []
}
```

Four mandatory fields:
- `skill`: the name of your skill
- `description`: the description of your skill, what users will be able to read before installing
- `slotTypes`: a list of slot definition, in this case empty
- `intents`: a list of intent definition, in this case empty

And that's it! Every skill must ship with at least this. In this example, it would be a skill without any interaction User -> Alice


### Let's define an intent
Ok, say we want the user to be able to say hello to Alice, we need to add an intent to our dialog template:

```json
{
	"skill": "HelloWorld",
	"description": "This is my first skill",
	"slotTypes": [],
	"intents": [
		{
			"name": "HelloWorld_Hello",
			"description": "The user says hello",
			"enabledByDefault": true,
			"utterances": [
				"hello alice",
				"hi alice",
				"konitchiwa alice",
				"hey alice",
				"aloha alice"
			],
			"slots": []
		}	
	]
}
```

- This just defined an `intent` named `HelloWorld_Hello`. By standards, your intent names should always be prefixed with the skill name to avoid collisions with other skills.

- There's then the `description` of that intent, what it does.

- Comes `enabledByDefault` that can be either `true` or `false`. An intent that is enabled by default can be caught at any time. If disabled, it will only be caught if your script previously activates it. It makes sense to disable intents like "YesOrNo" per example, and only activate it when needed.

- Next comes the `utterances` field, which are the ways of indicating your intent you teach to Alice. She will understand that you are using the `intent` `HelloWorld_Hello` if you say one of the four provided sentences. It is really important that you add up to at least 15 to 20 different ways of saying for a good training. The NLU then has enough data to start allowing small differences but still guess the correct intent at an acceptable percentage. **Do not** use punctuation signs and adding capital letters is of no use.

- The last filed is `slots` and is empty in the example.


### Add some variable to our utterances, aka `slots`
Imagine a shopping skill, and an intent to add an item to your shopping list. For sure, you won't define 10'000 utterances with all possible items to say. For that you will use `slots`

```json
{
	"skill": "HelloWorld",
	"description": "This is my first skill",
	"slotTypes": [
		{
			"name": "Item",
			"matchingStrictness": null,
			"automaticallyExtensible": true,
			"useSynonyms": true,
			"values": [
				{
					"value": "wheat"
				},
				{
					"value": "hawaiian pizza",
					"synonyms": [
						"hawaii pizza",
						"pizza hawaii"
					]
				}
			]
		}
	],
	"intents": [
		{
			"name": "HelloWorld_AddItem",
			"description": "The user adds item to his shopping list",
			"enabledByDefault": true,
			"utterances": [
				"add {hawaii pizza:=>Item} to my shopping list",
				"add {wheat:=>Item} to my shopping list please",
				"please add {wheat:=>Item} to my shopping list",
				"can you please add {hawaiian pizza:=>Item} to my shopping list"
			],
			"slots": [
				{
					"name": "shopItem",
					"description": null,
					"required": false,
					"type": "Item",
					"missingQuestion": ""
				}
			]
		}	
	]
}
``` 

### Slots declaration
Ok, we went a little higher in our file and added a `slot definition` to our `slotTypes`

```json
{
	"name": "Item",
	"matchingStrictness": null,
	"automaticallyExtensible": true,
	"useSynonyms": true,
	"values": [
		{
			"value": "wheat"
		},
		{
			"value": "hawaiian pizza",
			"synonyms": [
				"hawaii pizza",
				"pizza hawaii"
			]
		}
	]
}
```

- `name`: This is the slot type, that should NEVER be translated
- `matchingStrictness`: This is a float, from 0 to 1 or null on how strict the NLU will be on catching the word if small differences are detected.
- `automaticallyExtensible`: This allows or forbids, an automatic attempt at catching other words that are not defined in your values.
- `useSynonyms`: Allows or forbids the use of synonyms
- `values`: Defines your slot possible values
    - The first one is defined without synonym and the value would be `wheat`
    - The second one is defined with synonyms. The raw value would be `hawaiian pizze` even if you say `hawaii pizza`, `hawaiian pizza`or `pizza hawaii`. This `synonyms` field only works if `useSynonyms` is set to `true`

  That's it for our definition! We have some [Prebuilt](./builtin-slots.md) slots available. Always check if your slot does not already exist before implementing yours!

  Now let's move to our `intent`:


### Utterances
```json
{
	"name": "HelloWorld_AddItem",
	"description": "The user adds item to his shopping list",
	"enabledByDefault": true,
	"utterances": [
		"add {hawaii pizza:=>Item} to my shopping list",
		"add {wheat:=>Item} to my shopping list please",
		"please add {wheat:=>Item} to my shopping list",
		"can you please add {hawaiian pizza:=>Item} to my shopping list"
	],
	"slots": [
		{
			"name": "shopItem",
			"description": null,
			"required": false,
			"type": "Item",
			"missingQuestion": ""
		}
	]
}
```

Take a look at the `utterances`. You surely see that weird syntax made of curly braces `{hawaii pizza:=>Item}`. This is our slot! In this case you taught alice that `hawaii pizza` is of slot type `Item`, the one you defined just before! It is important to know that slots you use in your intents are first defined, but the value is also declared in the slot definition.


### Slot definition
We also have now defined the `intent slot` itself:

```json
{
	"name": "ShopItem",
	"description": null,
	"required": false,
	"type": "Item"
}
```

- `name`: This is the name of the slot that is returned to your script and **should never be translated**
- `description`: If you want to add a description of what that slot is
- `required`: Leave it at false, or you'll lose the ability to have Alice random texts!
- `type`: **Also never to be translated**, this defines of what type that slot is and refers to the `slot definition` on top of the file

## Skill configuration file

At some point, your skill will need some user dependant configuration, per example an api key, a threshold, login or a password. This is where skill configuration files come in the game!

As a dev you have to provide a skill configuration **template** file. Based on this file, when Project Alice installs your skill, a **config** file will be automatically created with your default provided values. If you happen to update your config template, let's say, to drop a login and password field in favour of an api key field, Project Alice will detect it and update the configuration file accordingly.

::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended using our [Config file Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/config-schema.json)
:::

### The template file

The name of the file **must be** `config.json.template`. Let's take a look at our HelloWorld skill that requires some configuration from the user:

```json
{
	"login": {
		"defaultValue": "",
		"dataType": "string",
		"isSensitive": false,
		"description": "Login for the HelloWorld database",
		"beforeUpdate": "tryConnection",
		"onUpdate": "reconnect"
	},
	"password": {
		"defaultValue": "",
		"dataType": "string",
		"isSensitive": true,
		"description": "Password for the HelloWorld database",
		"beforeUpdate": "tryConnection",
		"onUpdate": "reconnect"
	},
	"autoConnect": {
		"defaultValue": true,
		"dataType": "boolean",
		"isSensitive": false,
		"description": "Check this is you want HelloWorld to automatically connect to the database"
	},
	"retries": {
		"defaultValue": 3,
		"dataType": "integer",
		"isSensitive": false,
		"description": "How many times should the skill retry to connect in case of failure before giving up"
	},
	"databaseToUse": {
		"defaultValue": "HelloWorld",
		"dataType": "list",
		"isSensitive": false,
		"values": ["HelloWord", "ByeByeWorld", "HelloKitty"],
		"description": "Choose which database to connect to"
	},
	"language": {
		"defaultValue": "en",
		"dataType": "list",
		"isSensitive": false,
		"values": {"English": "en", "Français": "fr", "Deutsch":  "de"},
		"description": "Choose what language to use"
	},
	"maxTries": {
		"defaultValue": 3,
		"dataType": "range",
		"min": 1,
		"max": 5,
		"step": 1,
		"isSensitive": false,
		"description": "How many times should a user be allowed to fail authentication"
	},
	"notes": {
		"defaultValue": "",
		"dataType": "longstring",
		"isSensitive": false,
		"description": "Anything you would like to add?"
	}
}
```

With the above example you have the full overview of what is supported. As you might have understood, we define each config by a name, this is the name you will use then in code to get the set value. We can then define a default value to use, a datatype and in case of lists, a list of value.

In our example:
- **login** is a string, the text will be visible to the user.
- **password** is a string, the text won't be visible thanks to the "isSensitive" option.
- **autoConnect** is a boolean, true or false, or on or off. This will display a checkbox.
- **retries** is an integer. An integer is a full number, such as 1, 5, 9563, with no trailing decimals.
- **databaseToUse** is a list of type list. It means it will display a dropdown field containing the defined values.
- **language** is a list of type dictionary. The difference with the above list, is that it will display the key (in this case "English" / "Français" / "Deutsch") in a dropdown field, but the value selected will be "en" or "fr" or "de". Useful when you have values to set that are not natural, the language example shows it well enough, it is nicer to display the full language name for the user to choose than a list with language codes.
- **maxTries** is a slider. It needs to have a default value, a minimum allowed value, a maximum allowed value and a step which defines the increment by which the value is modified by each slider step. This setting cannot be made sensitive.
- **notes** is a textarea, a text input that handles multiple lines.

So we have, as setting types:
- string
- longstring
- boolean
- integer
- list
- range

There are three more options you can add to any configuration!

- `"isSensitive": true|false`: If true, the setting's value won't be shown, but replaced with * as passwords do per exemple. Cannot be applied to **range** configuration.

- `"display": "hidden"`: Hides the configuration field for the user. What's the use then? Well, imagine a skill that requires an API key but to retrieve this api key, one needs his login and password. I'd make "login" and "password" visible configurations, so the user can fill them, and the api key be hidden. My skill would use the login and password fields to automatically retrieve the api key and set it for next uses. The user doesn't need to change or see that api configuration.

- `"beforeUpdate": "checkValue"`: Replace "checkValue" with any method name in your skill and that method will be triggered **before** the value update passes. The method **must** return a boolean.

- `"onUpdate": "reconnect"`: Replace "reconnect" with any method name in your skill and that method will be triggered every time the user updates that configuration field.


### The generated config file
When Alice loads her configuration she also loads all her active skills configurations. If there's a config template file available but no config file (config.json), she'll auto generate that said file! That file is git ignored so it cannot be pushed on your repository, keeping your personal data safe. This is how the template example would look like:

```json
{
  "login": "",
  "password": "",
  "autoConnect": true,
  "retries": 3,
  "databaseToUse": "HelloWorld",
  "language": "en",
  "maxTries": 3,
  "notes": ""
}
```

### Using the settings in my skill
Now that you have created your template, it's time to use those settings in your skill! Happy you, it's **very** easy!

```python
configValue = self.getConfig('login')
```

That all! This will grab the **login** setting value, for your skill!

Another way to access the settings, for another skill per example:
```python
configValue = self.ConfigManager.getSkillConfigByName('skillName', 'configName')
```

This will grab the setting **configName** from the skill **skillName**

And if you don't have access to self, in a class method per example:
```python
configValue = SuperManager.getInstance().configManager.getSkillConfigByName('skillName', 'configName')
```

I let you guess what it does.... Same as above!

### Update a config value
If for some reason you need to programmatically update a setting value, say the api key is not valid anymore, you can do it easily!

```python
self.updateConfig('configName', 'configNewValue')
```

or

```python
self.ConfigManager.updateSkillConfigurationFile('skillName', 'configName', 'configNewValue')
```

or

```python
SuperManager.getInstance().configManager.updateSkillConfigurationFile('skillName', 'configName', 'configNewValue')
```


## En.sample

Ever got frustrated because something you ask your assistant isn't understood? What if I told you that Alice can **try** to find a :skill: on our skills store that could fulfill your request?

There's no black magic behind this, simply a little work for the :skill: dev to make it work!
When a new version of your skill is published, our store is updated automagically. During this process, it also looks for files, in the `dialogTemplate` directory, with the `.sample` extension. The file is named after whatever language is contains, example `en.sample` or `de.sample`.

### Example

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

This file is named `en.sample` and is placed in `dialogTemplate` directory. Its content defines, or tries to guess, the most common ways a lambda user would ask or say to trigger your skill.

### Rules

There aren't many rules about this file but keep these in mind:

- Politeness forms are removed, so don't add `please` or `could you` or stuff like that.
- The file is limited to 10 samples.
- Do not use punctuations.
- Try to think out of the box and find casual samples, like, everyday usage forms.
- Do not cover `disabledByDefault` intents, or answer intents such as `yes/no`.
- Think about it as `What do I definitely want my skill to react to?`

::: tip Pro tip
Remember `speakableName` from the install file? Well, this is why it exists! Alice will use that `speakableName` to propose your skill to download.
:::

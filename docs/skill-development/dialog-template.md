---
sidebarDepth: 4
title: Dialog template file
---

# Dialog template file
This is the "pièce of resistance", the beef! This defines your intents, utterances and your slots in a readable way. Alice will then use this file to train the NLU and ASR components!


::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended to use our [Dialogue Template Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/dialog-schema.json)
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
Imagine a shopping skill and an intent to add an item to your shopping list. For sure you won't define 10'000 utterances with all possible items to say. For that you will use `slots`

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

#### Slots declaration
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


#### Utterances
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


#### Slot definition
We also have now defined the `intent slot` itself:

```json
{
	"name": "ShopItem",
	"description": null,
	"required": false,
	"type": "Item",
	"missingQuestion": ""
}
```

- `name`: This is the name of the slot that is returned to your script and **should never be translated**
- `description`: If you want to add a description of what that slot is
- `required`: Leave it at false, or you'll loose the ability to have Alice random texts!
- `type`: **Also never to be translated**, this defines of what type that slot is and refers to the `slot definition` on top of the file
- `missingQuestion`: Defines what Alice would say if the slot is marked as `required` but is missing. To be left empty. 

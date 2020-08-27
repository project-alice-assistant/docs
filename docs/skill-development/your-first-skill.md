---
sidebarDepth: 2
Title: Your first skill
---

# Your first skill
Ready to create your first skill? See how easy it is to get a new skill up and
running, then we will step through the basic anatomy of a Alice skill.

::: warning
This describes functions that are not fully implemented yet
- the talk directory has a different structure right now, but will be changed to the one described here
:::

## Prerequisites

If you haven't already, check out our [Introduction to Skill Development](./). This walk through assumes you:

* Know some basic knowledge of [Python programming](https://www.python.org/),
* have an account on [Github.com](https://github.com), and
* have a working version of ProjectAlice.

## Understand the flow of your skill

It's a good idea to start by writing down how your skill will work, including

* What words will the user speak to activate the skill?
* What will Alice speak in response?
* What data will you need to deliver the skill?
* Will you need any additional packages or dependencies?

Once you've given these some thought, you can get started.


## Structure of a skill

If we now navigate to our new skill, we can see that it created the following structure

```text
.
├─ dialogTemplate
│  └─ en.json
├─ talks
│  └─ en
│     └─ talk.json
├─ HelloWorldSkill.install
├─ HelloWorldSkill.py
└─ README.md
```

We will look at each of these in turn.


### `Talks` directory

The `talks` directories contains a subdirectory for each spoken language the skill supports. The subdirectories are named using the [ISO639-1 Language Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the language. For example, German is 'de', and English is 'en'.

There will be a subdirectory for each language you selected when creating the skill using the skill Kit.

Each of these subdirectories can include two files. The first one is called `talk.json` and the second one `engine.py`.
The `engine.py` is intended for more complex use cases where a simple string is not enough for the answer and is not created by default. That's why we will only describe how to create the `talk.json` file here, while more information on the topic can be found in the chapter [Talks](./your-first-skill.md).


The File created by the skill Kit does only contain some dummy answers that show the structure of the file:
```json
{
	"dummy": [
        "example sentence",
        "another example sentence"
    ]
}
```

When instructed to use a particular dialog, Alice will choose one of these sentences at random. This is closer to natural speech. That is, many similar phrases mean the same thing.


### `DialogTemplate` directory

Each skill defines one or more Intents. Intents are defined in the `dialogTemplate` directory. The `dialogTemplate` directory is organized by language as well, however there is just one json file for each language like `en.json` for english.

We will learn about Intents in more detail shortly.


### HelloWorldSkill.py

The `HelloWorldSkill.py` file is where most of the skill is defined using Python code. We will learn more about the contents of this file in the next section.

Let's take a look:

#### Importing libraries

```python
from core.base.model.AliceSkill import AliceSkill
from core.dialog.model.DialogSession import DialogSession
from core.util.Decorators import IntentHandler
```

This section of code imports the required _libraries_. Some libraries will be required on every skill, and your skill may need to import additional libraries.

#### Class definition

The `class` definition extends the `AliceSkill` class:

```python
class HelloWorldSkill(AliceSkill):
```

The class should be named logically, for example "TimeSkill", "WeatherSkill", "NewsSkill", "IPaddressSkill". If you would like guidance on what to call your skill, please join the [skills Channel on our Discord chat](https://discord.gg/MgJNR9c).

Inside the class, methods are then defined.

#### \_\_init\_\_\(\)

This method is the _constructor_. It is called when the skill is first constructed. It is often used to declare state variables or perform setup actions. You don't have to include the constructor.

An example `__init__` method might be:

```python
def __init__(self):
    super().__init__()
    self._offline = True
```

#### Intent handlers

Previously the `__init__` function was used to register intents, however our new `@IntentHandler` decorator is a cleaner way to achieve this.
In our current HelloWorldSkill this could be implemented in the following way

```python
@IntentHandler('HelloWorldIntent')
def helloWorldIntent(self, session: DialogSession):
    self.endDialog(session.sessionId, self.randomTalk(text='helloWorld'))
```

The function receives two _parameters_:

* `self` - a reference to the HelloWorldSkill object itself
* `session` - an `DialogSession` object, that includes information like the `slots` an intent was called with

The intent handler then calls the `self.endDialog()` method passing the session to end and the answer to say. In this case the type of the answer is `helloWorld`


### HelloWorldSkill.install

This file defines what is required to get the skill up and running. It includes parameters like the `version number`, a `description`, `supported languages` and `conditions` for your skill to be started.

::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended to use our [Install file Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/install-schema.json)
:::

Let's take a look at a basic install file:

```json
{
	"name": "HelloWorldSkill",
	"version": "1.0.1",
	"icon": "fab fa-battle-net",
	"category": "entertainment"
	"author": "MyGithubUsername",
	"maintainers": [
		"Psycho",
		"Jierka",
		"maxbachmann"
	],
	"desc": "This is my first skill for Project Alice",
	"aliceMinVersion": "1.0.0-a4",
	"systemRequirements": [],
	"pipRequirements": [],
	"conditions": {
		"lang": [
			"en",
			"fr",
			"de"
		]
	}
}
```

#### `name`
Defines the name of the skill. Everything should carry the same name and yes, it is case sensitive!

#### `version`
Defines the current version of your skill, in a 3 positions versioning system, like X.X.X. The first position is used for major releases, the second is used for improved or added functions to current release and the third one is commonly used for hotfixes.

#### `icon`
This is the icon that will be displayed for your skill on the skill store. It supports [any free Font Awesome icons](https://fontawesome.com/icons?d=gallery&m=free)

#### `category`
Defines a category your skill belongs to. This helps categorize your skill to better search results on the store. Available categories:
- weather
- information
- entertainment
- music
- game
- kid
- automation
- assistance
- security
- planning
- shopping
- organisation
- household
- health


#### `author`
This is you! Make sure to use the same github username!

#### `maintainers`
We believe in sharing, and people helping you should also be rewarded for their input. If you improve a skill that isn't yours, add yourself into the maintainers list!

#### `desc`
A description of what your skill does

#### `aliceMinVersion`
The minimum ALICE version other users must be running for this skill to be usable. This is useful if your skill is using alpha or beta functions not yet available to everyone

#### `systemRequirements`
Whatever you add here will be installed using `apt install`

#### `pipRequirements`
Whatever you add here will be installed using `pip install --no-cache`

#### `conditions`
This is where you define conditions for your skill to run. Let's say your skill is only english, german users won't be able to use it. There's quite a few conditions you can use:

|        Key          | Description                                                                                                                                                  |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| lang                | Define the languages that are supported. User running languages not listed here won't be able to use your skill                                              |
| online              | If set to true, your skill will only be usable for users not enforcing offline only for Alice                                                                |
| skill               | This lists other skills needed for your to run. The skill must be installed and activated! In case the skill is missing, it will be automatically downloaded |
| notSkill            | Add any skills here that are known to conflict with yours. If any of the listed skills are detected, your skill won't install                                |
| asrArbitraryCapture | If set to true, the user must use an ASR that is able to capture any text spoken to it and not only intent trained text                                      |
| activeManager       | List managers here that need to be active for your skill to run. This only concerns managers that can be deactivated, such as `InterfaceManager`             |


### README.md

The README file contains human readable information about your skill.


### instruction.md

You skill requires some extra steps to run, like activating an API, setting up another system, modifying the hardware of that awesome remote? Well, put all these instructions into a file named "instructions.md". The content of this file is accessible on the interface on the skills page, and will automatically pop up whenever the skill is installed and/or updated.


## What have we learned

You have now successfully created a new skill and have an understanding of the basic components that make up an Alice skill. Next we will dive into each component in more detail.

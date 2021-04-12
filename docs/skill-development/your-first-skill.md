---
Title: Your first skill
sidebarDepth: 3
tags:
- first skill
- skill
- introduction
- development
---

# Your first skill
Ready to create your first :skill:skill:? See how easy it is to get a new :skill:skill: up and
running, then we will step through the basic anatomy of an Alice :skill:skill:.

## Prerequisites

If you haven't already, check out our [Introduction to Skill Development](./). This walk through assumes you:

* Know some basic knowledge of [Python programming](https://www.python.org/)
* Have an account on [Github.com](https://github.com)
* Have a working version of ProjectAlice

## Understand the flow of your :skill:skill:

It is always a good idea to start by writing down what you have in mind, the purpose of your :skill:skill:. Think about the following points

* What words will the user speak to activate the :skill:skill:?
* What will Alice speak in response?
* What data will you need to deliver the :skill:skill:?
* Will you need any additional packages or dependencies?

Once you've given these some thought, you can get started.


## Using Alice's :interface:

Open up your Alice :interface: and go to the **dev** part. If the **dev** navigation button isn't showing make sure to:

* Be logged in the :interface:
* Enable `dev mode` in your settings

The page presented is rather self-explanatory, just fill the fields with the required information. Once you've hit the `Create` button, the :skill:skill: basic structure will be created for you. You'll find the freshly created :skill:skill: in Project Alice's :skill:skill: directory.

This :interface: uses ProjectAlice-SK which we'll discuss next and that provides more advanced tools for you to publish a perfect :skill:skill:. Although you created the :skill:skill: from the :interface:, it is recommended that you still use projectalice-sk to validate your :skill:skill:. 

## Using ProjectAlice-SK

You can download the Skill Kit from [pypi](https://pypi.org/project/projectalice-sk/) or by installing it directly using

```
pip install projectalice-sk
```

This tool is maintained by us and provides the same workflow as Alice's :interface:.

Once installed, you can start it for different modes:

* Create a new :skill:skill:, with `projectalice-sk create`
* Validate a :skill:skill:, which verifies the files, with `projectalice-sk validate`

Let's create our first :skill:skill:! Type `projectalice-sk create` and hit enter.

- Enter your Github username
- Enter a :skill:skill: name, for this example it's going to be `HelloWorld`
- Enter a speakable name. This is the same as the :skill:skill: name, but in a human-readable and speakable way: `Hello world`
- Enter a description for our test :skill:skill:: `My first skill for Alice!`
- Choose a category in the list, by using the down and up arrows, and Enter to select
- Choose the languages your :skill:skill: will support. English is mandatory. Use the up and down arrows and space to select or deselect a language. Hit Enter once your selection is made. For the sake of this example, we are going to select only `en`.
- Answer `No` to all the following questions. We will come back to them later.

## Structure of a skill

Let's take a look at what files were created.

```text
.
├─ .github
│  └─ workflows
│     └─ test.yml
│  └─ PULL_REQUEST_TEMPLATE.md
├─ dialogTemplate
│  ├─ en.json
│  └─ en.sample
├─ talks
│  └─ en.json
├─ .editorconfig
├─ .gitignore
├─ .gitlab-ci.yml
├─ HelloWorld.install
├─ HelloWorld.py
├─ LICENSE
├─ mypy.ini
├─ README.md
└─ sonar-project.properties
```

### `You don't care` directories and files explained

- .github: Contains a template for pull requests that other users could open on your :skill:skill: as well as a Github workflow that validates your :skill:skill: everytime your push modifications
- .editorconfig: It's a file that tells your editor, if compliant to that norm, some of our code guidelines
- .gitignore: A file that tells Git what files should be ignored and not pushed online when you commit your changes
- .gitlab-ci.yml: Once published, your :skill:skill: is automatically mirrored on Gitlab. This file contains a workflow that validates and tests your :skill:skill:
- LICENSE: The default licence file
- mypy.ini: A file needed for mypy to run Python syntax check on your :skill:skill:
- sonar-project.properties: A file that tells SonarCloud how to run the code quality checks as well as the code coverage


### `Talks` directory

The `talks` directories contains a file for each spoken language the :skill:skill: supports, named using the [ISO639-1 Language Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the language. For example, German is 'de', and English is 'en'.


The File created by the :skill:skill: Kit does only contain some dummy answers that show the structure of the file:
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

Each :skill:skill: defines one or more :intent:intents:. :intent:Intents: are defined in the `dialogTemplate` directory. The `dialogTemplate` directory is organized by language as well, one json file for each language like `en.json` for english.

We will learn about :intent:intents: in more detail shortly.


### HelloWorld.py

The `HelloWorld.py` file is where most of the :skill:skill: is defined using Python code.

Let's take a look at it:

#### Importing libraries

```python
from core.base.model.AliceSkill import AliceSkill
from core.dialog.model.DialogSession import DialogSession
from core.util.Decorators import IntentHandler
```

This section of code imports the required _libraries_. Some libraries will be required on every :skill:skill:, and your :skill:skill: may need to import additional libraries.

#### Class definition

The `class` definition extends the `AliceSkill` class:

```python
class Helloworld(AliceSkill):
```

The class should be named logically, for example "Time", "Weather", "News", "IPAddress". If you would like guidance on what to call your :skill:skill:, please join the [skills Channel on our Discord chat](https://discord.gg/MgJNR9c). It is **vital** that the class wears the **same name as the file it is in**, and the file wears the same name as the :skill:skill: directory.

#### :intent:Intent: handlers

By default, the :skill:skill: file uses our `@IntentHandler` decorator that allows easy :intent: coding. By default, you don't need to use the `__init__` function, but can for more advanced use cases.

The default file has two :intent:intents: defined, `MyIntentName` and `MySecondIntentName`

```python
	@IntentHandler('MyIntentName')
	def testIntent(self, session: DialogSession, **_kwargs):
		pass

	@IntentHandler('MySecondIntentName')
	def secondTestIntent(self, session: DialogSession, **_kwargs):
		pass
```

The functions receive two _parameters_:

* `self` - a reference to the HelloWorld object itself
* `session` - a `DialogSession` object, that includes information like the `:slot:slots:` an :intent: was called with.


### HelloWorld.install

This file defines what is required to get the :skill:skill: up and running. It includes parameters like the `version number`, a `description`, `supported languages` and `conditions` for your :skill:skill: to be started.

::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended using our [Install file Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/install-schema.json)
:::

Let's take a look at a basic install file:

```json
{
  "name": "Helloworld",
  "speakableName": "Hello world",
  "version": "0.0.1",
  "icon": "fab fa-battle-net",
  "category": "information",
  "author": "Psycho",
  "maintainers": [],
  "desc": "My first skill for alice!",
  "aliceMinVersion": "1.0.0-b3",
  "pipRequirements": [],
  "systemRequirements": [],
  "conditions": {
	"lang": [
	  "en"
	]
  }
}
```

#### `name`
Defines the name of the :skill:skill:. Everything should carry the same name and yes, it is case-sensitive!

#### `speakablename`
The name of the :skill:skill: in a human-readable and speakable form.

#### `version`
Defines the current version of your :skill:skill:, in a 3 positions versioning system, like X.X.X. The first position is used for major releases, the second is used for improved or added functions to current release, and the third one is commonly used for hotfixes.

#### `icon`
This is the icon that will be displayed for your :skill:skill: on the :skill:skill: store. It supports [any free Font Awesome icons](https://fontawesome.com/icons?d=gallery&m=free)

#### `category`
Defines a category your :skill:skill: belongs to. This helps categorize your :skill:skill: to better search results on the store. Available categories:

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
We believe in sharing, and people helping you should also be rewarded for their input. If you improve a :skill:skill: that isn't yours, add yourself into the maintainers list!

#### `desc`
A description of what your :skill:skill: does

#### `aliceMinVersion`
The minimum Alice version users must be running for this :skill:skill: to be usable. This is useful if your :skill:skill: is using alpha or beta functions not yet available to everyone

#### `pipRequirements`
Whatever you add here will be installed using `pip install --no-cache`

#### `systemRequirements`
Whatever you add here will be installed using `apt install`

#### `script`
By specifying a shell script name here, the script will be run after installation. The script must be placed in your :skill:skill: root directory. It is very useful for a :skill:skill: that needs to git clone a repo per example!

#### `conditions`
This is where you define conditions for your :skill:skill: to run. Let's say your :skill:skill: is only english, german users won't be able to use it. There's quite a few conditions you can use:

|        Key          | Description                                                                                                                                                  |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| lang                | Define the languages that are supported. User running languages not listed here won't be able to use your :skill:skill:                                              |
| online              | If set to true, your :skill:skill: will only be usable for users not enforcing offline only for Alice                                                                |
| skill               | This lists other :skill:skills: needed for your to run. The :skill:skill: must be installed and activated! In case the :skill:skill: is missing, it will be automatically downloaded |
| notSkill            | Add any :skill:skills: here that are known to conflict with yours. If any of the listed :skill:skills: are detected, your :skill:skill: won't install                                |
| asrArbitraryCapture | If set to true, the user must use an :ASR: that is able to capture any text spoken to it and not only :intent: trained text                                      |
| activeManager       | List managers here that need to be active for your :skill:skill: to run. This only concerns managers that can be deactivated, such as `InterfaceManager`             |


### README.md

The README file contains human-readable information about your :skill:skill:.

## What have we learned

You have now successfully created a new :skill:skill: and have an understanding of the basic components that make up an Alice :skill:skill:. Next we will dive into each component in more detail.


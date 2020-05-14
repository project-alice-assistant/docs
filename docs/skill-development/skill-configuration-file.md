---
sidebarDepth: 2
title: Skill configuration file
---

# Skill configuration file
At some point, your skill will need some user dependant configuration, per example an api key, a threshold, login or a password. This is where skill configuration files come in the game!

As a dev you have to provide a skill configuration **template** file. Based on this file, when Project Alice installs your skill, a **config** file will be automatically created with your default provided values. If you happen to update your config template, let's say, to drop a login and password field in favour of an api key field, Project Alice will detect it and update the configuration file accordingly.

::: tip Pro tip
If you are using an IDE able to handle json schema, it is highly recommended to use our [Config file Schema](https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/config-schema.json)
:::

## The template file

The name of the file **must be** `config.json.template`. Let's take a look at our HelloWorld skill that requires some configuration from the user:

```json
{
	"login": {
		"defaultValue": "",
		"dataType": "string",
		"isSensitive": false,
		"description": "Login for the HelloWorld database"
	},
	"password": {
		"defaultValue": "",
		"dataType": "string",
		"isSensitive": true,
		"description": "Password for the HelloWorld database"
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
	}
}
```

With the above example you have the full overview of what is supported. As you might have understood, we define each config by a name, this is the name you will use then in code to get the set value. We can then define a default value to use, a datatype and in case of lists, a list of value.

In our example:
- **login** is a string, the text will be visible to the user.
- **autoConnect** is a boolean, true or false, or on or off. This will display a checkbox.
- **retries** is an integer. An integer is a full number, such as 1, 5, 9563, with no trailing decimals.
- **databaseToUse** is a list of type list. It means it will display a dropdown field containing the defined values.
- **language** is a list of type dictionary. The difference with the above list, is that it will display the key (in this case "English" / "Français" / "Deutsch") in a dropdown field, but the value selected will be "en" or "fr" or "de". Useful when you have values to set that are not natural, the language example shows it well enough, it is nicer to display the full language name for the user to choose than a list with language codes.
- **maxTries** is a slider. It needs to have a default value, a minimum allowed value, a maximum allowed value and a step which defines the increment by which the value is modified by each slider step. This setting cannot be made sensitive.

There are three more options you can add to **any** configuration!

- `"isSensitive": true|false`: If true, the setting's value won't be shown, but replaced with * as passwords do per exemple. Cannot be applied to **range** configuration.

- `"display": "hidden"`: Hides the configuration field for the user. What's the use then? Well, imagine a skill that requires an API key but to retrieve this api key, one needs his login and password. I'd make "login" and "password" visible configurations, so the user can fill them, and the api key be hidden. My skill would use the login and password fields to automatically retrieve the api key and set it for next uses. The user doesn't need to change or see that api configuration.

- `"beforeUpdate": "checkValue"`: Replace "checkValue" with any method name in your skill and that method will be triggered **before** the value update passes. The method **must** return a boolean.

- `"onUpdate": "reconnect"`: Replace "reconnect" with any method name in your skill and that method will be triggered every time the user updates that configuration field.


## The generated config file
When Alice loads her configuration she also loads all her active skills configurations. If there's a config template file available but no config file (config.json), she'll auto generate that said file! That file is git ignored so it cannot be pushed on your repository, keeping your personal data safe. This is how the template example would look like:

```json
{
  "login": "",
  "password": "",
  "autoConnect": true,
  "retries": 3,
  "databaseToUse": "HelloWorld",
  "language": "en"
}
```

## Using the settings in my skill
Now that you have created your template, it's time to use those settings in your skill! Happy you, it's **very** easy!

```python
configValue = self.getConfig('login')
```

That all! This will grab the **login** setting value!

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


## Accessing system settings from my skill
Beside your skill settings, you can also access Alice's settings from within your skill!

Again, we have the same three methods as above:

```python
configValue = self.getAliceConfig('configName')
```

or

```python
configValue = self.ConfigManager.getAliceConfigByName('configName')
```

or

```python
configValue = SuperManager.getInstance().configManager.getAliceConfigByName('configName')
```


## Update a config value
If for some reason you need to programmatically update a setting value, say the api key is not valid anymore, you can it easily!

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

Aaaand of course, same goes for Alice's settings!

```python
self.updateAliceConfig('configName', 'configNewValue')
```

or

```python
self.ConfigManager.updateAliceConfiguration('configName', 'configNewValue')
```

or

```python
SuperManager.getInstance().configManager.updateAliceConfiguration('configName', 'configNewValue')
```


## What we learned
We learned to create a skill configuration template file and which different data types this file can contain. We also learned how to access those settings from within your skill as well as how to access Alice's settings! Oh, and also how to update those settings programmatically! No more excuses for hardcoded variables in your skills!

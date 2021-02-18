---
title: Down the rabbit hole
sidebarDepth: 4
tags:
- database
- logging
- missing slot
- built-in intents
- built-in slots
- events
---

# Intro
Now that you've discovered the structure of a skill, and seen some files a bit more in-depth, there's a lot more for you to discover! 

## Logging

To track events and data within your skill we can use logging. If you are new to programming, this is a way to output a message that can tell you the state of your skill at a particular point in time, details about an error that has occurred, or simply noting that a program reached a particular point in the code.

::: tip
Logging is useful during skill development, as well as to help end-users diagnose problems in the future.
:::

### Basic Usage

A logger is available through the `AliceSkill` base class. This means that you can use it within a skill without needing to import the `logging` package.

Here is a quick example of an `info` level message used in a skill. We will learn more about different levels shortly.

```python
from core.base.model.AliceSkill import AliceSkill
from core.dialog.model.DialogSession import DialogSession
from core.util.Decorators import IntentHandler

class HelloWorldskill(AliceSkill):


	@IntentHandler('HelloWorldIntent')
	def helloWorldIntent(self, session: DialogSession, **_kwargs):
		"""
			skills can log useful information.
			These will appear in the Web Interface and the logs file.
		"""
		self.logInfo("This is an info level log message.")
		self.endDialog(session.sessionId, self.randomTalk(text='helloWorld'))
```

### Logging Levels

There are five types of log messages available that are used for different purposes.

#### Debug

```python
self.logDebug
```

Debug messages are used for information that will help to diagnose problems. These are particularly useful if there is anything that has the potential to break in the future. They will only show if debug is set to true in the settings.


#### Info

```python
self.logInfo
```

Info messages provide general information when the skill is running as expected. These messages will always be logged so are useful when actively developing a skill, but should be used sparingly once a skill is published for other people to use.

#### Warning

```python
self.logWarning
```

Warning messages are used to indicate that something has gone wrong, but the skill will continue to function.
It is possible to output a stack trace when needed using:

```python
self.logWarning(msg='warning message', printStack=True):
```


#### Error

```python
self.logError
```

Error messages indicate that a serious problem has occurred and the skill will not be able to function.
They will always output a stack trace.


#### Critical

```python
self.logCritical
```

Critical error messages indicate that a very serious problem has occurred, and the skill will not be able to function.
They will always output a stack trace.

#### Fatal

```python
self.logFatal
```

`logFatal` is an unrecoverable error that forces Alice to shut down. It is not recommended using in skills!


### Where do these messages get logged?

Log messages from a skill are displayed in the ProjectAlice Web Interface so that a User can see in real-time what is happening in the skill. They are also written to the `logs` file located at: `~/ProjectAlice/var/logs`

### Plurals
The nightmare for perfectionists... What's more annoying than a log line saying `Loaded 1 devices`? That's why we implemented a pluralizer... With every type of log messages, you can pass a second argument, `plural` with a list of words, in your log line, that need to be automatically added with an `s`

```python
self.logInfo(f'Loaded {myDeviceCount} device in {roomCount} room.', plural=['device', 'room'])
```

Note that you should use the non plural form, Alice will add the required `s`'s if needed. The pluralization only works with digits and not with written number.


### Styling your logs

Logs support a similar to markdown syntax. You can output bold text, underlined, dimmed and even colored text! These formatted logs will only show on stdout and on the interface. Here's how you can style your logs:

#### Bold:
`**My bold text**`

#### Underlined:

`__My underlined text__`
#### Dimmed:

`--My dimmed text--`

#### Colored:
`![red](My colored text)`

Available colors are: red, green, yellow, blue, grey


### Using the logger outside the skill class

As the logger is provided by the skill class, it is only available within that scope. If you need to log messages from outside of this class, you can import the logger manually.

```python
from core.util.model.Logger import Logger
```

This can then be used outside your skill's class. Extending our first example:

```python
from core.base.model.AliceSkill import AliceSkill
from core.dialog.model.DialogSession import DialogSession
from core.util.Decorators import IntentHandler
from core.util.model.Logger import Logger

Logger().logInfo(
	"This is a logged info level message outside of the skill class scope"
)

def my_special_function():
	Logger().logInfo("Another usage of logging.")

class HelloWorldskill(AliceSkill):
	@IntentHandler('HelloWorldIntent')
	def helloWorldIntent(self, session: DialogSession, **_kwargs):
		"""
			skills can log useful information.
			These will appear in the Web Interface and the logs file.
		"""
		self.logInfo("This is an info level log message.")
		self.endDialog(session.sessionId, self.randomTalk(text='helloWorld'))
		my_special_function()
```

::: warning
When you want to print stack traces when logging outside of the skill's class it might be required to provide
a different depth for the stack trace to the Logger class, since the default depth of the stack trace is 4.
```python
Logger(depth=6).logError('log message with stack trace')
```
:::


## Database access

Alice comes with a built-in SQLite database and offers a service provider for accessing the database.
There are methods for creating, modifying and deleting a table built right into the skill constructor 
and there are methods available for adding, removing, modifying and of course reading the content of the database.

### Setting up the database

Define the DB in your program as a dictionary and prepare the name of the database as a variable as best practice:
```python
    _TABLENAME = 'MyReminders'
    _DATABASE = {
        _TABLENAME: [
            'message TEXT NOT NULL',
            'timestamp INTEGER NOT NULL'
        ]
    }
```

Include the database definition into the constructor of your skill:
```python
    def __init__(self):
        super().__init__(databaseSchema=self._DATABASE)
```
Now your database will be set up with the first load of your skill.
If you later on decide to change the structure of your database, Alice will take care of that as well - just update the `self._DATABASE` variable and Alice will add or remove the correct fields on reload of the skill.

### Writing to your database
Adding an entry to your database is as easy as defining the new entry as dictionary and calling the DatabaseManager:
```python
self.databaseInsert(tableName=self._TABLENAME, values={'message': yourMessage, 'timestamp': yourTimestamp})
```

The query will be automatically generated from the values that correspond to the `column names: value`

### Reading from your database
If you want to read entries, you have to know a bit of SQL for the selection criteria.
With `myMessage` as a local python variable you can make the following call, to read a database entry with the message stored in `myMessage`:
```python
self.databaseFetch(
            tableName=self._TABLENAME,
            query='SELECT * FROM :__table__ WHERE message = :tmpMessage',
            values={'tmpMessage': myMessage},
            method='all'
        )
```
As for the method, you can choose between `all` and `one`. The difference is that `all` returns a list of entries, and `one`, well, one entry? 

### Delete from your database
Again some SQL Syntax has to be known.
In this example we delete all entries that are already in the past by comparing them to the python variable `myTimestamp`:
```python
self.DatabaseManager.delete(
                tableName='MyReminders',
                query='DELETE FROM :__table__ WHERE timestamp < :tmpTimestamp',
                values={'tmpTimestamp': myTimestamp},
                callerName=self.name)
```

## Events
Project Alice is driven by :event:events:. What are events you might ask, or what do we mean with it? Ever heard of "action -> reaction"? That's exactly it! When something happens, something occurs! Events are by convention prefixed with "on", like "onStormyWeather" or "onDoorOpened".

We provide a load of pre-made system events you can override in your skills. Lemme try to list them all, more are added on regular bases though!

### Core events

::: tip Description
Core events report what's happening under the hood, what the system is doing
:::

#### def onStart(self)
Triggered when Alice is starting the skills

####  def onStop(self)
Triggered when Alice is stopping the skill. The skill is typically stopped when Alice reboots, or after and update

####  def onBooted(self)
Triggered when everything has started. Comes after `onStart`

####  def onHotword(self, siteId: str, user: str = constants.UNKNOWN_USER)
Triggered when a hotword is heard. A `hotword` is a `universal wakeword` that doesn't identify a user

####  def onWakeword(self, siteId: str, user: str = constants.UNKNOWN_USER)
Triggered when a wakeword is heard. A `wakeword` is a `hotword` that identifies a user

####  def onHotwordToggleOn(self, siteId: str)
Triggered when the hotword triggers itself on again. Typically, the hotword is turned off once it's been heard, until the dialog is over.

####  def onHotwordToggleOff(self, siteId: str)
Triggered when the hotword goes off. Typically, the hotword is turned off once it's been heard.

####  def onSessionStarted(self, session)
Triggered when a session is started

####  def onStartListening(self, session)
Triggered when Alice starts listening to you, right after the hotword was caught

####  def onCaptured(self, session)
Triggered when Alice captured what you said, when you finished talking to her

####  def onPartialTextCaptured(self, session, text: str, likelihood: float, seconds: float):
Triggered every time the ASR spits out a part of the utterance it is actively trying to capture.

####  def onUserCancel(self, session)
Triggered when the user cancels a dialog. This ends the session and doesn't trigger onIntentParsed!

####  def onSessionTimeout(self, session)
Triggered when a session times out

####  def onIntentNotRecognized(self, session)
Triggered when the NLU couldn't understand the intent or your saying. Typically occurs after onCaptured

####  def onSessionError(self, session)
Triggered if the session ends with an error

####  def onSessionEnded(self, session)
Triggered when the session ends

####  def onSay(self, session)
Triggered when Alice starts to say something

####  def onSayFinished(self, session)
Triggered when Alice has finished speaking

####  def onSessionQueued(self, session)
Triggered when a new session is queued due to the fact there is already one on going

####  def onMessage(self, session)
Triggered when a subscribed MQTT message is received

####  def onSkillInstalled(self, **kwargs)
Triggered when a skill has installed. Info about what skill can be extracted from kwargs

####  def onSkillUpdated(self, **kwargs)
Triggered when a skill has updated. Info about what skill can be extracted from kwargs

####  def onSkillInstallFailed(self, **kwargs)
Triggered when a skill failed installing

####  def onInternetConnected(self)
Triggered when internet connection is back, after a failure. Won't trigger on boot!

####  def onInternetLost(self)
Triggered when internet connection is lost.

####  def onBroadcastingForNewDeviceStart(self, session)
Triggered when Alice starts broadcasting her IP for new devices to discover

####  def onBroadcastingForNewDeviceStop(self)
Triggered when Alice stops broadcasting her IP for new devices to discover. Typically happens when a new device was added

####  def onAuthenticated(self, session)
Triggered when a user successfully authenticated through his pin code

####  def onAuthenticationFailed(self, session)
Triggered when a user failed authentication with his pin code

####  def onAudioFrame(self, message)
Triggered when audio frame are coming in through MQTT. **Can be very consuming!**

####  def onDeviceConnecting(self)
Triggered when a device is trying to connect to Alice's network

####  def onDeviceDisconnecting(self)
Triggered when a device is disconnecting from Alice's network

####  def onVadUp(self, **kwargs):
Triggered when voice activity is heard

####  def onVadDown(self, **kwargs):
Triggered when voice activity has stopped

####  def onNluTrained(self, **kwargs):
Triggered when the NLU has finished training

####  def onSnipsAssistantInstalled(self, **kwargs):
Triggered when the assistant.json file has installed after training

####  def onSnipsAssistantFailedTraining(self, **kwargs):
Triggered when the assistant.json file failed training


### User states
::: tip Description
User states events report a change of state for a user. Example: "Hey Alice? I'm going bed!" would trigger "onGoingBed" and change the user state accordingly
:::

####  def onGoingBed(self)
Triggered when a user tells Alice he's going bed

####  def onSleep(self)
Triggered when a user tells Alice good night

####  def onWakeup(self)
Triggered when a user tells Alice good morning

####  def onLeavingHome(self)
Triggered when a user tells Alice he's leaving home

####  def onReturningHome(self)
Triggered when a user tells Alice he's returned home

####  def onEating(self)
Triggered when a user tells Alice he's eating

####  def onWatchingTV(self)
Triggered when a user tells Alice he's watching TV

####  def onCooking(self)
Triggered when a user tells Alice he's cooking

####  def onMakeup(self)
Triggered when a user tells Alice he's putting makeup

####  def onContextSensitiveDelete(self, sessionId: str)
Triggered when the user asks, in a context sensitive scenario, to delete or forget something. Example:
<div class="userSpeech female">What's my favorite color?</div>
<div class="aliceSpeech">blue</div>
<div class="userSpeech female">Forget this!</div>
<div class="aliceSpeech">ok</div>


####  def onContextSensitiveEdit(self, sessionId: str)
Triggered when the user asks, in a context sensitive scenario, to change something. Example:
<div class="userSpeech male">What's my favorite color?</div>
<div class="aliceSpeech">blue</div>
<div class="userSpeech male">Change this please</div>
<div class="aliceSpeech">Sure, so tell me, what's your new favorite color?</div>
<div class="userSpeech male">green</div>
<div class="aliceSpeech">ok</div>


### Timed events
::: tip Description
When Alice starts, the following events are scheduled. Alice does calculate for them to start at the correct time so it reflects real life clock.
Thus onFullHour doesn't mean Alice was running an hour on the first round, as if Alice start at 9:47, onFullMinute would trigger at 9:48:00,
onFiveMinutes at 9:50:00, onFullHour and all the others at precisely 10:00:00
:::


####  def onFullMinute(self)
Triggered every real time full minute.

####  def onFiveMinute(self)
Triggered every real time five minutes. Example: 10:15, 10:35; 12:55

####  def onQuarterHour(self)
Triggered every real time fifteen minutes. Example: 10:15, 7:30; 12:00

####  def onFullHour(self)
Triggered every real time hour.


### Telemetry reports
::: tip Description
Alice comes with a telemetry manager skill can use to store weather data. The following events reflect these reports
:::

####  def onUVIndexAlert(self, deviceList: list)
Triggered when a device reports a UV index out of the limit set by the user

####  def onRaining(self, deviceList: list)
Triggered when a device reports rain

####  def onTooMuchRain(self, deviceList: list)
Triggered when a device reports a rain level above the limit set by the user

####  def onWindy(self, deviceList: list)
Triggered when a device reports a wind strength above the limit set by the user

####  def onFreezing(self, deviceList: list)
Triggered when a device reports temperature below 0°C

####  def onTemperatureHighAlert(self, deviceList: list)
Triggered when a device reports a temperature above the limit set by the user

####  def onTemperatureLowAlert(self, deviceList: list)
Triggered when a device reports a temperature under the limit set by the user

####  def onCO2Alert(self, deviceList: list)
Triggered when a device reports a CO2 level above the limit set by the user

####  def onHumidityHighAlert(self, deviceList: list)
Triggered when a device reports a humidity level above the limit set by the user

####  def onHumidityLowAlert(self, deviceList: list)
Triggered when a device reports a humidity level under the limit set by the user

####  def onNoiseAlert(self, deviceList: list)
Triggered when a device reports a sound level above the limit set by the user

####  def onPressureHighAlert(self, deviceList: list)
Triggered when a device reports an atmospheric pressure level above the limit set by the user

####  def onPressureLowAlert(self, deviceList: list)
Triggered when a device reports an atmospheric pressure level under the limit set by the user

## Missing slot info

Sometimes you need more information than what the user provided...

### Study case

Let's take an intent with a few slots, highlighted in the example.

<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech female">Yes?</div>
<div class="userSpeech male">Can you book me a flight from <strong class="slotWord">Geneva</strong> to <strong class="slotWord">New York</strong> for <strong class="slotWord">tuesday 23 third of april around midday</strong> please?</div>
<div class="aliceSpeech female">Of course, let me check that!</div>

For this example (and also in reality) a flight can only be booked if

- The user has the intention to book a ticket, which requires the `intent` to be correctly detected
- The user provided the following information, aka `slots`:
    - `origin`: Where the user wants to depart from
    - `destination`: Where the user wants to travel to
    - `date`: A date and possibly a time at which the user wants to leave


### The potential problem
Now, let's imagine the following:

<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech female">Yes?</div>
<div class="userSpeech male">Can you book me a flight from <strong class="slotWord">Geneva</strong> please?</div>

The problem is that the user did not provide a `destination` or a `date`, for which Alice will have to query the user for details.

### The bad solution
You could use the classic `intent` decorators with 4 separate methods, which is not recommended but written here to demonstrate:

```python
@IntentHandler('AnswerFrom')
def answerFrom(self, session: DialogSession):
	pass


@IntentHandler('AnswerTo')
def answerTo(self, session: DialogSession):
	pass
	
	
@IntentHandler('AnswerDate')
def answerDate(self, session: DialogSession):
	pass


@IntentHandler('BookFlight')
def bookFlight(self, session: DialogSession):
	pass
```

Well, not that effective, is it? lots of writing only to declare the methods, imagine the work in each of the methods to finally get to book the ticket.


### The good solution
This is what I call the `Fill the glass` method, because we come always at the same method until everything is filled.

```python
@IntentHandler('AnswerFrom')
@IntentHandler('AnswerTo')
@IntentHandler('AnswerDate')
@IntentHandler('BookFlight')
def bookFlight(self, session: DialogSession):
	if 'From' not in session.slots:
		self.continueDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='WhereFrom'),
			intentFilter=['AnswerFrom'],
			slot='From'
		)
		return
	elif 'To' not in session.slots:
		self.continueDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='WhereTo'),
			intentFilter=['AnswerTo']
		)
		return
	elif 'Date' not in session.slots:
		self.continueDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='WhatDate'),
			intentFilter=['AnswerDate']
		)
		return

	# If we got here, we are sure to have all three required information!
	# So we can continue and proceed to the booking!
```

What we did here is link our 4 `intents` to the same method `bookFlight` and we check if all our slots are filled. If not, we ask the user for the information and limit the NLU on the intent that interests us using `intentFilter`. In the first if condition I even mentioned the `slot` the NLU should focus on extracting!

As the answer will come back to the same method, the checks will naturally continue until all three are False and we can proceed to the booking!

Make sure to read [builtin intents](../skill-development/builtin-intents.md) to understand dialogue state or you will end up having collisions with other skills!

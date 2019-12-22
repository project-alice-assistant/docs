# Events
Project Alice is driven by events. What are events you might ask, or what do we mean with it? Ever heard of "action -> reaction"? That's exactly it! When something happens, something occurs! Events are by convention prefixed with "on", like "onStormyWeather" or "onDoorOpened".

We provide a load of pre-made system events you can override in your skills. Lemme try to list them all, more are added on regular bases though!

## Core events

`Core events report what's happening under the hood, what the system is doing`

##### def onStart(self)
Triggered when Alice is starting the skills

#####  def onStop(self)
Triggered when Alice is stopping the skill. The skill is typically stopped when Alice reboots, or after and update

#####  def onBooted(self)
Triggered when everything has started. Comes after `onStart`

#####  def onHotword(self, siteId: str, user: str = constants.UNKNOWN_USER)
Triggered when a hotword is heard. A `hotword` is a `universal wakeword` that doesn't identify a user

#####  def onWakeword(self, siteId: str, user: str = constants.UNKNOWN_USER)
Triggered when a wakeword is heard. A `wakeword` is a `hotword` that identifies a user

#####  def onHotwordToggleOn(self, siteId: str)
Triggered when the hotword triggers itself on again. Typically, the hotword is turned off once it's been heard, until the dialog is over.

#####  def onSessionStarted(self, session)
Triggered when a session is started

#####  def onStartListening(self, session)
Triggered when Alice starts listening to you, right after the hotword was caught

#####  def onCaptured(self, session)
Triggered when Alice captured what you said, when you finished talking to her

#####  def onIntentParsed(self, session)
Triggered when Alice has parsed your intend. Typically occurs after onCaptured

#####  def onUserCancel(self, session)
Triggered when the user cancels a dialog. This ends the session and doesn't trigger onIntentParsed!

#####  def onSessionTimeout(self, session)
Triggered when a session times out

#####  def onIntentNotRecognized(self, session)
Triggered when the NLU couldn't understand the intent or your saying. Typically occurs after onCaptured

#####  def onSessionError(self, session)
Triggered if the session ends with an error

#####  def onSessionEnded(self, session)
Triggered when the session ends

#####  def onSay(self, session)
Triggered when Alice starts to say something

#####  def onSayFinished(self, session)
Triggered when Alice has finished speaking

#####  def onSessionQueued(self, session)
Triggered when a new session is queued due to the fact there is already one on going

#####  def onMessage(self, session)
Triggered when a subscribed MQTT message is received

#####  def onSkillInstalled(self, **kwargs)
Triggered when a skill has installed. Info about what skill can be extracted from kwargs

#####  def onSkillUpdated(self, **kwargs)
Triggered when a skill has updated. Info about what skill can be extracted from kwargs

#####  def onSkillInstallFailed(self, **kwargs)
Triggered when a skill failed installing

#####  def onInternetConnected(self)
Triggered when internet connection is back, after a failure. Won't trigger on boot!

#####  def onInternetLost(self)
Triggered when internet connection is lost.

#####  def onBroadcastingForNewDeviceStart(self, session)
Triggered when Alice starts broadcasting her IP for new devices to discover

#####  def onBroadcastingForNewDeviceStop(self)
Triggered when Alice stops broadcasting her IP for new devices to discover. Typically happens when a new device was added

#####  def onAuthenticated(self, session)
Triggered when a user successfully authenticated through his pin code

#####  def onAuthenticationFailed(self, session)
Triggered when a user failed authentication with his pin code

#####  def onAudioFrame(self, message)
Triggered when audio frame are coming in through MQTT. **Can be very consuming!**

## User states
`User states events report a change of state for a user. Example: "Hey Alice? I'm going bed!" would trigger "onGoingBed" and change the user state accordingly`

#####  def onGoingBed(self)
Triggered when a user tells Alice he's going bed

#####  def onSleep(self)
Triggered when a user tells Alice good night

#####  def onWakeup(self)
Triggered when a user tells Alice good morning

#####  def onLeavingHome(self)
Triggered when a user tells Alice he's leaving home

#####  def onReturningHome(self)
Triggered when a user tells Alice he's returned home

#####  def onEating(self)
Triggered when a user tells Alice he's eating

#####  def onWatchingTV(self)
Triggered when a user tells Alice he's watching TV

#####  def onCooking(self)
Triggered when a user tells Alice he's cooking

#####  def onMakeup(self)
Triggered when a user tells Alice he's putting makeup












#####  def onContextSensitiveDelete(self, sessionId: str)
Triggered when the user asks, in a context sensitive scenario, to delete or forget something. Example:
```
User: What's my favorite color?
Alice: blue
User: Forget this! <-- Context sensitive command
Alice: ok
```

#####  def onContextSensitiveEdit(self, sessionId: str)
Triggered when the user asks, in a context sensitive scenario, to change something. Example:
```
User: What's my favorite color?
Alice: blue
User: Change this please <-- Context sensitive command
Alice: Sure, so tell me, what's your new favorite color?
```






## Timed events
```
When Alice starts, the following events are scheduled. Alice does calculate for them to start at the correct time so it reflects real life clock.
Thus onFullHour doesn't mean Alice was running an hour on the first round, as if Alice start at 9:47, onFullMinute would trigger at 9:48:00,
onFiveMinutes at 9:50:00, onFullHour and all the others at precisely 10:00:00
```

#####  def onFullMinute(self)
Triggered every real time full minute.

#####  def onFiveMinute(self)
Triggered every real time five minutes. Example: 10:15, 10:35; 12:55

#####  def onQuarterHour(self)
Triggered every real time fifteen minutes. Example: 10:15, 7:30; 12:00

#####  def onFullHour(self)
Triggered every real time hour.



#####  def onDeviceConnecting(self)
Triggered when a device is trying to connect to Alice's network

#####  def onDeviceDisconnecting(self)
Triggered when a device is disconnecting from Alice's network


## Telemetry reports
`Alice comes with a telemetry manager skill can use to store weather data. The following events reflect these reports`

#####  def onUVIndexAlert(self, deviceList: list)
Triggered when a device reports a UV index out of the limit set by the user

#####  def onRaining(self, deviceList: list)
Triggered when a device reports rain

#####  def onTooMuchRain(self, deviceList: list)
Triggered when a device reports a rain level above the limit set by the user

#####  def onWindy(self, deviceList: list)
Triggered when a device reports a wind strength above the limit set by the user

#####  def onFreezing(self, deviceList: list)
Triggered when a device reports temperature below 0°C

#####  def onTemperatureHighAlert(self, deviceList: list)
Triggered when a device reports a temperature above the limit set by the user

#####  def onTemperatureLowAlert(self, deviceList: list)
Triggered when a device reports a temperature under the limit set by the user

#####  def onCO2Alert(self, deviceList: list)
Triggered when a device reports a CO2 level above the limit set by the user

#####  def onHumidityHighAlert(self, deviceList: list)
Triggered when a device reports a humidity level above the limit set by the user

#####  def onHumidityLowAlert(self, deviceList: list)
Triggered when a device reports a humidity level under the limit set by the user

#####  def onNoiseAlert(self, deviceList: list)
Triggered when a device reports a sound level above the limit set by the user

#####  def onPressureHighAlert(self, deviceList: list)
Triggered when a device reports an atmospheric pressure level above the limit set by the user

#####  def onPressureLowAlert(self, deviceList: list)
Triggered when a device reports an atmospheric pressure level under the limit set by the user

### Snips *(deprecated)*

#####  def onSnipsAssistantDownloaded(self, **kwargs)
Triggered when a Snips assistant package was successfully downloaded

#####  def onSnipsAssistantDownloadFailed(self, **kwargs)
Triggered when a Snips assistant package failed downloading

#####  def onSnipsAssistantInstalled(self, **kwargs)
Triggered when a Snips assistant package successfully installed

#####  def onSnipsAssistantFailedInstalling(self, **kwargs)
Triggered when a Snips assistant package failed installing

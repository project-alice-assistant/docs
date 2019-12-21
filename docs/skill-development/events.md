# Events
Project Alice is driven by events. What are events you might ask, or what do we mean with it? Ever heard of "action -> reaction"? That's exactly it! When something happens, something occurs! Events are by convention prefixed with "on", like "onStormyWeather" or "onDoorOpened".

We provide a load of pre-made system events you can override in your skills. Lemme try to list them all, more are added on regular bases though!

#### def onStart(self)
Triggered when Alice is starting the skills

####  def onStop(self)
Triggered when Alice is stopping the skill. The skill is typically stopped when Alice reboots, or after and update

####  def onBooted(self)
Triggered when everything has started. Comes after `onStart`

####  def onSkillInstalled(self, **kwargs)
Triggered when a skill has installed. Info about what skill can be extracted from kwargs

####  def onSkillUpdated(self, **kwargs)
Triggered when a skill has updated. Info about what skill can be extracted from kwargs

####  def onInternetConnected(self)
Triggered when internet connection is back, after a failure. Won't trigger on boot!

####  def onInternetLost(self)
Triggered when internet connection is lost.

####  def onHotword(self, siteId: str, user: str = constants.UNKNOWN_USER)
Triggered when a hotword is heard

####  def onHotwordToggleOn(self, siteId: str)
Triggered when the hotword triggers itself on again. Typically, the hotword is turned off once it's been heard, until the dialog is over.

####  def onSessionStarted(self, session)
Triggered when a session is started

####  def onStartListening(self, session)
Triggered when Alice starts listening to you, right after the hotword was caught

####  def onCaptured(self, session)
Triggered when Alice captured what you said, when you finished talking to her

####  def onIntentParsed(self, session)
Triggered when Alice has parsed your intend. Typically occurs after onCaptured

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

####  def onSleep(self)
Triggered when a user tells Alice good night

####  def onWakeup(self)
Triggered when a user tells Alice good morning

####  def onGoingBed(self)
Triggered when a user tells Alice he's going bed

####  def onLeavingHome(self)
Triggered when a user tells Alice he's leaving home

####  def onReturningHome(self)
Triggered when a user tells Alice he's returned home

####  def onEating(self)
Triggered when a user tells Alice he's eating

####  def onWatchingTV(self)
####  def onCooking(self)
####  def onMakeup(self)
####  def onContextSensitiveDelete(self, sessionId: str)
####  def onContextSensitiveEdit(self, sessionId: str)
####  def onFullMinute(self)
####  def onFiveMinute(self)
####  def onQuarterHour(self)
####  def onFullHour(self)
####  def onCancel(self)
####  def onASRCaptured(self)
####  def onWakeword(self, siteId: str, user: str = constants.UNKNOWN_USER)
####  def onMotionDetected(self)
####  def onMotionStopped(self)
####  def onButtonPressed(self)
####  def onButtonReleased(self)
####  def onDeviceConnecting(self)
####  def onDeviceDisconnecting(self)
####  def onUVIndexAlert(self, deviceList: list)
####  def onRaining(self, deviceList: list)
####  def onTooMuchRain(self, deviceList: list)
####  def onWindy(self, deviceList: list)
####  def onFreezing(self, deviceList: list)
####  def onTemperatureHighAlert(self, deviceList: list)
####  def onTemperatureLowAlert(self, deviceList: list)
####  def onCO2Alert(self, deviceList: list)
####  def onHumidityHighAlert(self, deviceList: list)
####  def onHumidityLowAlert(self, deviceList: list)
####  def onNoiseAlert(self, deviceList: list)
####  def onPressureHighAlert(self, deviceList: list)
####  def onPressureLowAlert(self, deviceList: list)
####  def onBroadcastingForNewDeviceStart(self, session)
####  def onBroadcastingForNewDeviceStop(self)
####  def onSnipsAssistantDownloaded(self, **kwargs)
####  def onSnipsAssistantDownloadFailed(self, **kwargs)
####  def onAuthenticated(self, session)
####  def onAuthenticationFailed(self, session)
####  def onAudioFrame(self, message)
####  def onSnipsAssistantInstalled(self, **kwargs)
####  def onSnipsAssistantFailedInstalling(self, **kwargs)
####  def onSkillInstallFailed(self, **kwargs)

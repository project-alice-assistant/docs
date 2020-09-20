---
title: Glossary of terms
---

<link rel="stylesheet" href="/css/speechbubbles.css">


# Glossary of terms
::: tip
Use our Glossary to learn more about the specialist terms that we use in natural language processing generally, and more specifically with Alice software and hardware.
:::

* **Wakeword** - The wakeword is the phrase you use to tell Alice you're about to issue a command. A wakeword is personal and linked to a specific user in Alice's world.
* **Hotword** - Same as wakeword but Alice won't recognize the user based on it.
* **Skill** - When Alice hears the wakeword and then an Utterance, Alice will try to find a skill that matches the Utterance. The skill might fetch some data, or play some audio, or speak, or display some information. If Alice can't find a skill that matches the utterance, she will tell you she doesn't understand.
* **Utterance** - An utterance is a phrase spoken by a user, after the user says the wakeword.
* **Intent** - An intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots.
* **Slot** - A slot is an argument to an intent that gives a voice assistant more information about that request.

Consider a weather skill. It might have e.g. an intent `GetWeather` with the following utterances (slots are marked in red):
<div class="userSpeech male">what's the weather like in <strong class="slotWord">Toronto</strong>?</div>
<div class="userSpeech male">Tell me the weather in <strong class="slotWord">Toronto</strong> please?</div>

* **ASR** - *Automatic Speech Recognition* is a component that allows to capture human speech and turn it into text.
* **NLU** - *Natural Language Understanding* is a component that allows to extract intents and slots for the text detected by the ASR
* **TTS** -- *Text To Speech* is a component that turns text into an audio file, a voice.
* **Event** - An event is something that happened and Alice broadcasted to all of her managers and skills. An event name always starts with `on`. An exemple of event could be `onUserDetected`, `onWakeup` or `onRaining`. A complete list of events can by found [here](../skill-development/events.md)

Are we missing a word? Let us know, or add it yourself below.

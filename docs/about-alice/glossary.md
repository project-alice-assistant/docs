---
title: Glossary of terms
---

<link rel="stylesheet" href="/css/speechbubbles.css">


# Glossary of terms
::: tip
Use our Glossary to learn more about the specialist terms that we use in natural language processing generally, and more specifically with Alice software and hardware.
:::

* **Wake Word** - the Wake Word is the phrase you use to tell Alice you're about to issue a command
* **Skill** - when Alice hears the Wake Word and then an Utterance,  Alice will try to find a Skill that matches the Utterance. The Skill might fetch some data, or play some audio, or speak, or display some information. If Alice can't find a Skill that matches the Utterance, she will tell you she doesn't understand.
* **utterance** - An utterance is a phrase spoken by the User, after the User says the Wake Word.
* **intent** - An intent represents an action that fulfills a user’s spoken request. Intents can optionally have arguments called slots.
* **slot** - A slot is an argument to an intent that gives a voice assistant more information about that request.

Consider a weather skill. It might have e.g. an intent `GetWeather` with the following utterances (slots are marked in red):
<div class="userSpeech male">what's the weather like in <strong style="color:#fe205b">Toronto</strong>?</div>
<div class="userSpeech male">Tell me the weather in <strong style="color:#fe205b">Toronto</strong> please?</div>

Are we missing a word? Let us know, or add it yourself below.
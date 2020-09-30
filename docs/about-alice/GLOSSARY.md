---
title: 'Glossary'
sidebarDepth: 3
terms:
    hotword: 'the phrase you speak to wake Alice, to make her listen to you.'
    wakeword: "the phrase you speak to wake Alice, to make her listen to you. Same as :hotword: but in Alice's world, the wakeword is linked to a specific user she knows and can identify."
    skill: "an aptitude for Alice to do something with what you asked her, the :utterance: she captured/heard. Alice comes with 5 basic skills but more can be installed."
    utterance: "a phrase spoken by the user, after saying the :hotword: or a :wakeword:."
    intent: "after catching an :utterance: Alice's :NLU: turns it into an intent which represents the action the user asked her to do."
    slot: 'a variable in an :intent:. An :intent: can have as many slots as needed.'
    ASR: "Automatic Speech Recognition is a component used to capture human speech and turn it into text."
    NLU: "Natural Language Understanding is a component used to extract :intent:intents: and :slot:slots: for the text detected by the :ASR:."
    TTS: "Text To Speech is a component used to turn text into an audio file, a voice."
    event: 'An event is something that happened and Alice broadcasts to all of her managers and :skill:skills:. An event name always starts with "on". examples of events would be "onUserDetected", "onWakeup" or "onRaining".'
    main-unit: "the main unit runs the heavy stuff, it's the machine on which Alice is installed."
    satellite: "satellites need less resources than the :main-unit:, making them less expensive, they provide at least a microphone and speaker in your other :location:locations: to interact with Alice."
    location: "is a place in space, can be a room in your house, but your house can also be a location, or your garden."
    manager: "they are the core engines for Alice and all have specific tasks, from loading and managing :skill:skills: to store telemetry data."
    session: "could be a synonym of 'dialog'. A session starts by a :hotword: or a :wakeword: and Alice starting to listen. The session ends by itself at the end of the dialog exchange, after as many :utterance:utterances: capture and :intent:intents: treatment as needed, or by timing out."
    interface: "Alice's interface is a web server she is running internally, on device, that allows you to access many function on a graphical environment. The interface can be deactivated. By defaults, the interface runs on 'http://ALICE_IP:5000'."
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Glossary

<Glossary :terms="$frontmatter.terms" />

## Examples

### Skills 
:skill:Skills:
A complete list of skills can be found directly on your Alice's :interface: or online [here](https://store.projectalice.io).

### Events
:event:Events:
A complete list of events can be found [here](../skill-development/events.md).

### Hotword example
:hotword:Hotword:
<div class="userSpeech male">Hey Snips!</div>

### Wakeword example
:wakeword:Wakeword:
<div class="userSpeech female">Hey Alice?</div>

### Intent example
:intent:Intent:
<div class="userSpeech male">Turn the lights on please</div>

### Slot example (slots are highlighted)
:slot:Slot:
<div class="userSpeech female">Turn <strong class="slotWord">on</strong> the lights in the <strong class="slotWord">kitchen</strong></div>

### Session example
:session:Session:
<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech">Yes?</div>
<div class="userSpeech male">What's the temperature <strong class="slotWord">outside?</strong></div>
<div class="aliceSpeech male">It's currently 19°C outside</div>

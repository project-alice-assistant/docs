---
title: 'Not in use'
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

.

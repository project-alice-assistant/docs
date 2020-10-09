---
title: 'Glossar'
sidebarDepth: 3
terms:
    Hotword: 'Das Kommando, das du verwendest um Alice aufzuwecken, damit sie dir zuhört. Zum Beispiel "Hey Snips"'
    Wakeword: 'Das Kommando, das du verwendest um Alice aufzuwecken, damit sie dir zuhört. Eigentlich das gleiche wie :Hotword: aber in der Welt von Alice ist das Wakeword mit einem speziellen Nutzer verbunden, den sie daran identifiziert. Zum Beispiel "Hey Alice"'
    Skill: "Ein Programm für Alice, damit sie weiß was sie tun soll, wenn sie eine :Utterance: hört. Alice hat 5 vorinstallierte Skills, aber du kannst viele weitere herunterladen oder erstellen."
    Utterance: "Ein Kommando des Nutzers das nach dem :Hotword: oder :Wakeword: folgt. Es sagt Alice welcher :Skill: mit welchen Informationen ausgeführt werden soll."
    Intent: "Nachdem Alice eine :Utterance: erfasst hat, wandelt das :NLU: Modul diese in einen Intent um. Dieser repräsentiert die genaue Anfrage mit allen notwendigen Informationen"
    Slot: 'Eine Variable in einem :Intent:. Ein :Intent: kann so viele Slots haben wir notwendig.'
    ASR: '"Automatic Speech Recognition", die automatische Spracherkennung ist eine Komponente zum interpretieren der Mikrofonaufnahme um diese in Text umzuwandeln.'
    NLU: '"Natural Language Understanding", das Verstehen natürlicher Sprache, ist die Komponente, die aus einem vom :ASR: erzeugten Fließtext :Intent:Intents: und :Slot:Slots: extrahiert.'
    TTS: '"Text To Speech", Text zu Sprache, ist die Komponente, welche aus dem Rückgabetext eine Audiodatei zur Sprachausgabe erstellt.'
    Event: 'Ein Event wird ausgelöst und von Alice an alle :Manager: und :Skill:Skills: weitergeleitet. Der Name eines Events fängt immer mit "on" an. Zum Beispiel "onUserDetected", "onWakeup" oder "onRaining".'
    Haupteinheit: "Die Haupteinheit(main unit) verarbeitet die schweren Aufgaben, sie ist die Maschine, auf der Alice installiert wird."
    Satellite: "Satelliten benötigen weniger Leistung als die :Haupteinheit:, da sie alle rechenintensiven Aufgaben zur :Haupteinheit: weiterleiten. Dadurch können sie kostengünstiger sein. Sie benötigen mindestens ein Mikrofon und einen Lautsprecher und machen damit Alice in anderen :Location:Locations: verfügbar."
    Location: "Eine Location/Lokation ist ein Ort. Dabei kann es sich um einen Raum in deinem Haus handeln, das komplette Haus, den Garten, oder sogar einen virtuellen Ort ohne physisches Gegenstück."
    Manager: "Sie sind das Kernstück von Alice. Jeder Manager hat eine spezifische Aufgabe, vom Laden der Konfiguration, über die Verwaltung der :Skill:Skills: bis hin zum Speichern von Telemetriedaten"
    Session: 'Die Session kann als Synonym for einen "Dialog" verwendet werden. Eine Session startet mit dem :Hotword: oder :Wakeword: ab dem Alice dir zuhört. Die Session beendet sich entweder am Ende des Dialogs, nachdem Alice einen :Intent: erreicht hat, nach dem keine weitere Kommunikation notwendig ist, oder nachdem zu lange keine Eingabe erfolgt ist mittels "Timeout".'
    Interface: 'Das Interface von Alice ist ein Web-Server der lokal, bei Alice auf dem Gerät läuft. Er ist sofern du dein Netzwerk nicht extra dafür auslegst NICHT aus dem Internet erreichbar. Über das Interface hast du Zugriff auf viele Funktionen in einer grafischen Oberfläche. Das Interface kann auch ausgeschaltet werden oder auf einem anderen Port laufen. Im Normalfall erreichst du das Interface über "http://ALICE_IP:5000".'
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Glossar

<Glossary :terms="$frontmatter.terms" />

## Beispiele

### Skills 
:Skill:Skills:
Eine komplette Liste aller Skills ist online verfügbar: [Hier](https://store.projectalice.io). Auch über das Interface kannst du auf alle Skills zugreiffen, die in deiner Sprache verfügbar sind.

### Events
:Event:Events:
Eine komplette Liste aller Events findest du [hier](../skill-development/events.md).

### Hotword Beispiel
:Hotword:
<div class="userSpeech male">Hey Snips!</div>

### Wakeword Beispiel
:Wakeword:
<div class="userSpeech female">Hey Alice?</div>

### Intent Bespiel
:Intent:
<div class="userSpeech male">Schalte bitte das Licht ein</div>

### Slot Beispiel (hervorgehoben)
:Slot:
<div class="userSpeech female">Schalte das Licht in der <strong class="slotWord">Küche</strong> bitte <strong class="slotWord">an</strong></div>

### Session Beispiel
:Session:
<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech">Ja?</div>
<div class="userSpeech male">Wie ist die Temperatur <strong class="slotWord">draußen?</strong></div>
<div class="aliceSpeech female">Aktuell sind es 19°C</div>

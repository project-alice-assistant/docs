---
title: 'Web Interface'
sidebarDepth: 3
tags:
- web
- interface
---

# Zugriff

Das Alice web :Interface: ist über den Port 5000 zu erreichen (Einstellbar in der Konfiguration) und der Zugriff kann entweder über die IP oder den Hostnamen erfolgen. Zum Beispiel:

http://192.168.1.101:5000/

# Home
Diese Seite kannst du dir selbst mit :Widget:Widgets: gestalten. Wie überall im web Interface findest du dafür rechts oben eine Toolbar - mit einem Klick auf den Stift startet der Bearbeitungsmodus und dir werden die weiteren Werkzeuge angezeigt.

Im Bearbeitungsmodus kannst du Widgets verschieben, skalieren und sortieren.
Die Tools die dir zur Verfügung stehen sind:
- Ein Wechsel in den Theatermodus: Toolbar und Menüleiste verschwinden - die komplette Fläche steht für deine gewünschten Infromationen zur Verfügung, perfekt auch für kleine Bildschirme wie zum Beispiel den [offiziellen Raspberry Pi 7" Touchscreen*](https://amzn.to/384eNo5). Zum Verlassen des Theatermodus muss die Seite neu geladen werden!
- Das Zahnrad zum Starten des Konfigurationsmodus: Anschließend kannst du Detaileinstellungen und auch die Anzeige(Farbe, Transparenz, Schriftgröße..) eines Widgets ändern.
- Das Plus Zeichen zum Hinzufügen eines Widegts: Wird dir nur ein leeres Popup angezeigt, hast du aktuell keine Skills installiert, die auch ein Widget mit sich bringen! Versuche es doch mal mit ISS, Wetter, dem TextinputWidget oder DateTimeYear!
- Das Minus Zeichen zum entfernen eines Widget
- Die Diskette zum Speichern der Änderungen und schließen der Toolbar

# Skills
Hier kannst du deine Skills verwalten. Zunächst siehst du eine Übersicht aller installierten Skills. Du kannst dir zu jedem Skill die möglichen :Intent:Intents: anschauen, Einstellungen verwalten oder die Installations- und Verwendungshinweise ansehen.
Oben rechts in der Toolbar wechselst du zur Installation neuer Skills. Wähle einen Skill aus und klicke erneut oben in der Ecke auf den Download! Alice kümmert sich um den Rest!

# Mein Haus
Hier findet die technische Konfiguration aller Lokationen und Geräte statt. Mehr Informationen erhälst du in der Sektion [Mein Haus](../myHome.md)

# Szenarien
Der Szenarieneditor bringt dir die Mächtigkeit eines Node-Red Editors direkt in Alice. Mehr Informationen erhälst du in der Sektion [Szenarien](../scenarios.md)

# Syslog
Hier findest du alle Loggingnachrichten von Alice. Verhält sich etwas nicht wie du es erwartest? Wirf einen Blick hier hinein!

# AliceWatch
Hier findest du eine Übersicht was Alice von dir verstanden hat, was sie sagen interpretiert, selber sagt, oder einfach nur im Hintergrund verarbeitet.

# Admin
Im Adminbereich musst du dich zunächst einloggen - Alice geleitet dich durch Sprachkommandos durch diesen Prozess. Ansonsten: Gib "admin" oder deinen Benutzernamen mit deiner Tastatur ein. Anschließend erscheint das Zahlenpad mit dem du deine Pin eingeben kannst!
Jetzt kannst du alle Einstellungen rund um Alice tätigen - vergiss nicht ganz unten auf der Seite zu speichern!
Über den zweiten Reiter erreichst du weitere Tools zum Neustarten, neu Trainieren, aktualiseren, sowie der Benutzerverwaltung mit einem neuen Wakeword und dem Feintuning dazu.

# Devmode
Hier kannst du mit Hilfe von Alice einen neuen Skill erstellen. Trage alle Informationen ein und Alice erstellt für dich die notwendigen Verzeichnisse und Dateien - ein direkter Upload auf Github ist auch möglich!

<link rel="stylesheet" href="/css/disclaimer.css">
<div class="amazonDisclaimer">* Mit einem Kauf über die angegebenen Amazon Links unterstützt du Project Alice. Die Empfehlung zu diesen Geräten ist jedoch komplett unabhängig davon. Alle Einnahmen werden transparent gehalten und dienen zunächst dazu aufgelaufene Serverkosten zu decken.</div>

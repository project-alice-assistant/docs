---
title: Installation mit unserem "Plug&Play" Image
sidebarDepth: 3
tags:
- image
- vorgefertigt
- installation
- installieren
- plug&play
- setup
---

::: warning Achtung!
Das zuletzt erstellte Image ist aus Beta 2! Hast du unter [manueller Installation](manual-install) nach einer aktualisierten Version von Alice geschaut? Das nächste "Plug&Play" Image wird es erst wieder ab Version 1 geben.
:::

- Lade unser vorgefertigtes Raspbian OS Image herunter:
   - [Direkter Download](https://github.com/project-alice-assistant/ProjectAlice/releases/tag/v1.0.0-b1)
   - Das Image enthält nur Project Alice und einige Abhängigkeiten.
   - Wenn du dich wunderst was genau drin steckt, wirf einen Blick in die Sektion [vorinstallierte Pakete](preinstalled)
- Extrahiere das Image aus dem 7zip Archiv

::: tip Tip
Verwende [7zip](https://www.7-zip.org/), es ist Open Source, schnell, hat eine der besten Kompressionsraten und kommt mit einigen netten Features
:::

- Spiele das Image auf deine SD Karte
- **Platziere KEINE wpa_supplicant.conf oder ssh Datei in /boot**
- **Starte deinen Raspberry NICHT bevor du die folgenden Schritte ausgeführt hast!!**
- **Bearbeite die Datei /boot/ProjectAlice.yaml**. Wenn es keine ProjectAlice.yaml Datei in der /boot Partition gibt, hol dir die letzte Version hier: [ProjectAlice.yaml](https://github.com/project-alice-assistant/ProjectAlice/blob/master/ProjectAlice.yaml)
- Stelle in der Datei alles so ein, wie du es benötigst. Alle Einstellungen haben eine kurze Erklärung, aber das meiste sollte selbsterklärend sein.
- Stelle sicher dass du ein Leerzeichen nach dem Doppelpunkt hast:
   - Falsch: `forceRewrite:yes`
   - Richtig: `forceRewrite: yes`
- Wenn der Wert Sonderzeichen enthält, schließe ihn mit Anführungszeichen ein:
   - Falsch: `mqttPassword: a:%qJi`
   - Richtig: `mqttPassword: "a:%qJi"`
- Speichern, SD Karte auswerfen und in den Raspberry Pi stecken. Jetzt kannst du den Raspberry anschalten!
- Alice sollte sich selbst starten und mit deinem WLAN verbinden. Sie führt Updates aus, konfiguriert sich und startet danach vollständig. Das kann eine Weile dauern. **Ziehe sie jetzt nicht vom Strom ab bevor sie mit dir gesprochen hat!**
- Wenn du das Interface eingeschaltet hast(standard Einstellung), siehst du was los ist, wenn du `http://x.x.x.x:5000` in deinem Browser aufrufst. Dabei musst du natürlich die IP oder den Hostnamen von deinem Raspberry einfügen.
- Der SSH Benutzername ist `pi`, und das Passwort `umbrella`. **Denke daran dein Passwort nach einer erfolgreichen Installation sofort zu ändern!**

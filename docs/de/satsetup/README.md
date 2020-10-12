---
title: 'Satelliten installieren'
sidebarDepth: 3
---

::: warning Achtung!
Es handelt sich um eine Alpha Version! Es kann jederzeit zu größeren Änderungen in desem Abschnitt kommen. Die Zielgruppe sollte ein grundlegendes Verständnis ihrer Geräte haben, Linux und eventuell Programmierkenntenisse besitzen, sowie Python module installieren können.
:::


- Download unseres vorgefertigten Raspbian Buster image:
   - [Direkter Download](https://github.com/project-alice-assistant/ProjectAliceSatellite/releases/tag/v1.0.0-a1)
   - Diese Image enthält nicht mehr als Project Alice, mit allen Abhängigkeiten, sowie Hermes Led Control
   - Einen Einblick erhälst du in der [Sektion Vorinstallierte Pakete](preinstalled)

::: tip Tip
Du benötigst den Skill AliceSatellite auf deiner Haupteinheit installiert!
:::

- Flashe das image auf deine SD card
- **Platziere keine wpa_supplicant.conf oder ssh Datei in /boot**
- **Starte deinen Raspberry NICHT bevor die folgenden Schritte ausgeführt hast!!**
- **Bearbeite die /boot/ProjectAliceSatellite.yaml Datei**. Wenn es keine ProjectAliceSatellite.yaml auf deiner /boot Partition geben sollte, schnapp dir hier die neuste Version: [ProjectAliceSatellite.yaml](https://github.com/project-alice-assistant/ProjectAliceSatellite/blob/master/ProjectAliceSatellite.yaml)
- Konfiguriere sie entsprechend deiner Informationen und Bedürfnisse. Alle Konfigurationen haben eine kurze Erklärung, das meiste sollte aber selbsterklärend sein.
- Gehe sicher, dass du überall ein Leerzeichen nach den Doppelpunkten hast:
   - Falsch: `forceRewrite:yes`
   - Richtig: `forceRewrite: yes`
- Wenn der Wert Sonderzeichen enthält, schließe den kompletten Wert mit Anführungszeichen ein:
   - Falsch: `mqttPassword: a:%qJi`
   - Richtig: `mqttPassword: "a:%qJi"`
- Speichern, SD Karte abziehen und in den Raspberry Pi einstecken.
- Frage Alice: "Füge einen neuen Satelliten _im Wohnzimmer_ hinzu"
- Starte jetzt deinen Satelliten
- Alice sollte sich selbst starten, mit deinem WLAN verbinden, Updates installieren, die Konfiguration einrichten und hochfahren. Das kann eine Weile dauern.
- Wenn Alice auch nach 5 Minuten noch keinen Satelliten gefunden hat, wird sie dir das mitteilen. In dem Fall frag sie einfach nochmal, "Füge einen Satelliten hinzu". Je nach Hardware, kann die Installation auch mal über 5 Minuten benötigen.
- Der SSH Benutzername ist `pi` und das Passwort ist `umbrella`. **Ändere das Kennwort nach einer erfolgreichen Installation ab!**

Wenn alles funktioniert hat, bestätigt dir Alice das erfolgreiche Hinzufügen eines neuen Satelliten! Alice kümmert sich darum, dass dein Hotword und Wakeword, genau wie auf der Haupteinheit, auch auf dem Satelliten verfügbar ist.

#### Hast du ein Problem mit Alice? Sie hört dich nicht? Sie scheint nichtmal zu starten?
Wirf einen Blick in unseren [Troubleshooting Guide](troubleshooting)!

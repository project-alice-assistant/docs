---
title: Manuelle Installation der Haupteinheit
sidebarDepth: 3
tags:
- Installation
- Einrichtung
- Haupteinheit
---

Stand Oktober 2020 ist die manuelle Installation der bevorzugte Weg. Da aktuell neue Versionen sehr schnell veröffentlicht werden, ist es zu zeitaufwändig jedes Mal ein neues Image zu erstellen. Es sind nur wenige Schritte von einem funktionierenden Raspberry Pi OS, bis Alice mit der neusten Version bereit ist! Um sicherzugehen, erstmal die Raspberry Pi OS Installation

## Installiere Raspberry Pi OS
- Downloade [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/), die Lite Version wird **empfohlen**
- Stecke deine 8GB+ SD Karte in den Computer und brenne das Raspberry Pi OS image darauf.
   - Was heißt *brenne das image*? Leg die Streichhölzer weg, und schaue [hier](https://tutorials-raspberrypi.de/raspbian-os-auf-eine-sdkarte-bertragen-windows/)
- Wenn deine SD Karte geflashed wurde entferne sie und stecke sie erneut in den PC. Dieser sollte jetzt ein Laufwerk `boot` finden. (Und eventuell darauf Hinweisen, dass weitere Laufwerke erst formatiert werden müssten - jetzt NICHT formatieren!)
- Schnappe dir deinen bevorzugten Text Editor (mhhh... [*notepad++*](https://notepad-plus-plus.org/)) und erstelle eine neue Datei im Laufwerk `boot`. Öffne dazu deinen Texteditor und speichere die Datei mit dem namen `ssh`, **ohne Dateiendung (.txt)**. Unter Windows muss man dafür `All types *.*` auswählen, statt `Normal text file (.txt)`.
- Anschließend erstellst du noch eine Datei mit folgendem Text:
  ```
  country=DE
  ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
  update_config=1
  
  network={
      ssid=""
      scan_ssid=1
      psk=""
      key_mgmt=WPA-PSK
  }
  ```
- Du solltest natürlich deinen eigenen Ländercode eintragen (DE, AT, CH...) und auch deine WLAN SSID und Passwort hinzufügen
- Auch diese Datei speicherst du auf der Partition `boot`, diesmal mit dem Namen `wpa_supplicant.conf`. Auch diesmal ohne Dateiendung, also für Windows Nutzer mit `all types`.
- Fertig! Entferne jetzt deine SD Karte vom Rechner und stecke sie in deinen Raspberry Pi. Gib ihm Strom und etwas Zeit zum Starten.


## Richte deinen PI ein

- Verbinde dich zu deinem PI mittels SSH. Für Windows Nutzer empfehle ich [kitty](http://www.9bis.net/kitty/#!index.md)
- Der standard Benutzername ist `pi`, und das standard Passwort ist `raspberry`
- Update das System
  - `sudo apt-get update`
  - `sudo apt-get dist-upgrade -y`
- Öffne das Konfigurationstool
  - `sudo raspi-config`
- Setze den Netzwerknamen auf `ProjectAlice`
- Stelle deine Sprache, Tastatur und Zeitzone ein
- **Ändere das standard Benutzerpasswort!**
- Neustart

## Installiere Git und clone Alice

We need a few things to get Alice up now
- Installiere `git`: `sudo apt-get install git -y`
- Clone Alice:
```
cd
git clone https://github.com/project-alice-assistant/ProjectAlice.git
```

- Hole dir die allerneuste Entwicklungsversion:
```
cd ~/ProjectAlice
git checkout 1.0.0-b4
git pull
```

## Starte Alice
- Kopiere die Basiskonfiguration an den richtigen Ort für die Ersteinrichtung: `sudo cp  ~/ProjectAlice/ProjectAlice.yaml /boot/ProjectAlice.yaml`
- Bearbeite die Installationseinstellungen: `sudo nano /boot/ProjectAlice.yaml`
- Gehe die Datei Zeile für Zeile durch und Stelle alles nach deinen belieben ein.
- Weißt du was? Wir sind durch! Lass sie uns starten!
```
cd ~/ProjectAlice
python3 main.py
```
- Jetzt ist Geduld angesagt. Es braucht einige Installationen und Neustarts, aber Alice kümmert sich um alles. Anfangs siehst du in der Console noch den Fortschritt, aber sobald Alice ihren Service installiert hat, passiert alles im Hintergrund. Wenn du weiter den Prozess beobachten willst, wirf einen Blick in das Systemlog `tail -f /var/log/syslog`.
- Sobald sie fertig ist, macht sie mit einem "Ding!" auf sich aufmerksam!
- Kein "Ding!"? => Wirf einen Blick in unseren [Troubleshooting guide](troubleshooting)!


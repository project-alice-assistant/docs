---
title: 'Hotword und Wakeword'
sidebarDepth: 3
---

Es gibt zwei Arten von Wakewords für Alice.
Zum einen das :Hotword:, es funktioniert für jeden und ist vorinstalliert. Zum anderen die persönlichen :Wakeword:Wakewords:, and are preinstalled, and the personal :wakeword:wakewords:, that only work for one person and are individually created in runtime.

## Hotword
Aktuell sind die folgenden :Hotword:Hotwords: unterstützt:
- "Hey Snips"
- "Porcupine"/"Bumblebee"/"Blueberry"/"Terminator"

Wir arbeiten an weiteren Lösungen und ersetzen, bzw. erweitern diese Liste sobald weitere :Wakeword:Wakewords: unterstützt sind.

## Wakeword
Das persönliche :Wakeword: wird nach der Erstellung eines neuen Benutzers aufgenommen.
Das kann direkt nach dem ersten Start für den ersten Nutzer sein, oder wann auch immer ein neuer Nutzer später hinzugefügt wird.
Wenn du dich zunächst dazu entscheidest kein :Wakeword: zu erstellen, dann haben wir (aktuell) zwei Wege dies nachträglich zu erledigen.

### Setze alles zurück
Lösche die Erinnerung von Alice und starte nochmal neu mit der Erstellung des Admin-Benutzers.
Dieser Weg wird natürlich nur empfohlen, wenn du gerade erst Alice installiert hast.

```Batchfile
sudo rm ~/ProjectAlice/system/database/data.db
sudo systemctl restart Alice
```

### Erstelle dein Wakeword manuell
Mit dieser Anleitung lernst du deine eigenen Wakewords aufzunehmen, zu schneiden und Alice beizubringen.

1. Nimm dich drei mal auf wenn du "Hey Alice" sagst. Nenne die Dateien 0.wav 1.wav and 2.wav
2. Schneide die Aufnahmen so knapp wie möglich (Eine Millisekunde zuviel abschneiden, ist besser als eine Millisekunde zu wenig!)

::: tip Tip!
Ein kostenloses Tool und unsere Empfehlung wäre zum Beispiel [Audacity](https://www.audacity.de/downloads/)
:::

3. Verschiebe die Datei nach ~/ProjectAlice/trained/hotwords/%username%/. Füge dazu deinen Namen in die Verzeichnisstruktur ein - alles klein geschrieben!
    
4. Erstelle eine Datei "config.json" im selben Verzeichnis und befülle sie mit dem folgenden (Auch hier wieder %username% mit deinem Namen, in Kleinbuchstaben, ersetzen)
    
```json
{
    "num_mel_bins": 13,
    "window_type": "povey",
    "kind": "personal",
    "window_size": 10,
    "cepstral_lifter": 22.0,
    "use_energy": false,
    "energy_floor": 0.0,
    "from_mfcc": 1,
    "dtw_ref": 0.22,
    "raw_energy": true,
    "frame_length_ms": 25.0,
    "frame_shift_ms": 10.0,
    "preemphasis_coefficient": 0.97,
    "to_mfcc": 13,
    "sample_rate": 16000,
    "dither": 0.0,
    "mel_low_freq": 20,
    "shift": 10,
    "num_mfcc": 13,
    "band_radius": 10,
    "hotword_key": "%username%"
}
```
    
5. `sudo nano /etc/snips.toml`
    
6. Bearbeite in der Datei den folgenden Block, damit er den Pfad zu deinem neu aufgenommenen :Wakeword: enthält, gefolgt von der Sensivität. Starte mit ~0.5, das kannst du nachher in der Weboberfläche von Alice genauer ermitteln lassen(Adminbereich). Auch hier natürlich wieder den %username% ersetzen!
    
```
[snips-hotword]
model = ["/home/pi/ProjectAlice/trained/hotwords/snips_hotword=0.53","/home/pi/ProjectAlice/trained/hotwords/%username%=0.48"]
```

7. Starte Alice neu

`sudo systemctl restart ProjectAlice`

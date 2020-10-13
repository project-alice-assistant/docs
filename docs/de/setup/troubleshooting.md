---
title: 'Troubleshooting'
sidebarDepth: 3
---

Ja, nichts und niemand ist perfekt, aber wir geben unser bestes nahe dran zu sein. Aber um ehrlich zu sein, Alice wird größer und größer, da geht auch mal was schief. Oder verwendest du Hardware die wir einfach noch nie getestet haben? Vielleicht ist dir auch nur ein Flüchtigkeitsfehler unterlaufen? Es gibt viele Gründe warum es auf Anhieb mal nicht klappt. Lass uns einfach eine Lösung dafür finden!
Bedenke, der erste Start kann schon mal 15 Minuten dauern. Das hängt von Hardware und Einstellungen ab. Auf jeden Fall: **Ziehe Alice jetzt nicht den Stecker** wenn es so scheint als würde nichts passieren. Vielleicht erwischt du sonst Alice mitten in ihrem Training.

Als erstes solltest du mittels SSH auf dein Gerät zugreifen. Finde die IP von deinem Gerät heraus und verbinde dich mittels ssh. Unter Windows empfehlen wir [Kitty](https://www.9bis.net/kitty/#!pages/download.md), auf anderen Plattformen solltest du direkt per Terminal verbinden können.

Es gibt viele mögliche Wege nach dem Fehler zu suchen, das hier ist nur einer davon.

Als erstes, lass uns einen Blick auf den Project Alice service werfen:

`sudo systemctl status ProjectAlice`

Du solltest einige Informationen zum Service erhalten. Wenn du es eine Weile beobachtetst, solltest du feststellen, dass es entweder durchgängig läuft, dann musst du einfach weiter warten bis Alice fertig gestartet ist. Oder du siehst, dass der Service regelmäßig abstürzt und neu startet. Vielleicht wird dir der Service aber auch als Tot angezeigt.

Sollte der Service Tot sein oder dauernd neustarten, müssen wir tiefer graben. Stoppe Project Alice. Drücke dazu als erstes STRG+C um wieder Eingabebereit zu sein. Dann geb ein:

`sudo systemctl stop ProjectAlice`

Lass uns Alice jetzt manuell starten, dann haben wir einen besseren Einblick in die Logs. Schreibe dazu in deinem SSH terminal:

```shell script
cd /home/pi/ProjectAlice
./venv/bin/python main.py
```

Dadurch wird Alice manuell gestartet und sie gibt dir jede detaillierte Meldung aus. Wenn sie auf einen Fehler stößt, wird dir dieser ausgegeben und Alice stoppt. Suche nach so einem Fehler und erstelle damit ein Issue auf [Github](https://github.com/project-alice-assistant/ProjectAlice/issues/new). Lies dir die Logs sorgfältig durch, wenn doch nur eine Einstellung fehlt, oder eine Abhängigkeit nicht installiert wurde, dann gibt es hierfür normalerweise eindeutige Meldungen!

Wenn es keinen Fehler gibt und es scheint so, als würde Alice ohne Probleme starten, dann sollte die letzte Zeile im Log folgende sein:

`Starting Alice Core`

Gleichzeitig solltest du dann auch ihre Willkommensnachricht hören!

#### Das Log sagt, sie fragt nach einem neuen Nutzer, aber ich höre nichts
Linux Audio Probleme, die sind ja leider bekannt? Stoppe Alice mit STRG+C und wirf einen Blick in deine installierten Audio Geräte:

```shell script
aplay -l
arecord -l
```

Hier sollteste du deine Geräte finden. Das erste Gerät ist dein standard Audio Ausgabegerät, das zweite deine Audio Eingabe. Ist deine Hardware hier nicht gelistet, hast du das  Problem identifiziert! Für eine genaue Lösung, ist die Hardware-Welt leider zu groß..

WIP

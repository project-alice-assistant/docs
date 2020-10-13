(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{417:function(e,t,n){"use strict";n.r(t);var i=n(18),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Achtung!")]),e._v(" "),n("p",[e._v("Das zuletzt erstellte Image ist aus Beta 2! Hast du unter "),n("a",{attrs:{href:"manual-install"}},[e._v("manueller Installation")]),e._v(' nach einer aktualisierten Version von Alice geschaut? Das nächste "Plug&Play" Image wird es erst wieder ab Version 1 geben.')])]),e._v(" "),n("ul",[n("li",[e._v("Lade unser vorgefertigtes Raspbian OS Image herunter:\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/releases/tag/v1.0.0-b1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Direkter Download"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Das Image enthält nur Project Alice und einige Abhängigkeiten.")]),e._v(" "),n("li",[e._v("Wenn du dich wunderst was genau drin steckt, wirf einen Blick in die Sektion "),n("a",{attrs:{href:"preinstalled"}},[e._v("vorinstallierte Pakete")])])])]),e._v(" "),n("li",[e._v("Extrahiere das Image aus dem 7zip Archiv")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),n("p",[e._v("Verwende "),n("a",{attrs:{href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("7zip"),n("OutboundLink")],1),e._v(", es ist Open Source, schnell, hat eine der besten Kompressionsraten und kommt mit einigen netten Features")])]),e._v(" "),n("ul",[n("li",[e._v("Spiele das Image auf deine SD Karte")]),e._v(" "),n("li",[n("strong",[e._v("Platziere KEINE wpa_supplicant.conf oder ssh Datei in /boot")])]),e._v(" "),n("li",[n("strong",[e._v("Starte deinen Raspberry NICHT bevor du die folgenden Schritte ausgeführt hast!!")])]),e._v(" "),n("li",[n("strong",[e._v("Bearbeite die Datei /boot/ProjectAlice.yaml")]),e._v(". Wenn es keine ProjectAlice.yaml Datei in der /boot Partition gibt, hol dir die letzte Version hier: "),n("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/blob/master/ProjectAlice.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProjectAlice.yaml"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Stelle in der Datei alles so ein, wie du es benötigst. Alle Einstellungen haben eine kurze Erjkärung, aber das meiste sollte selbsterklärend sein.")]),e._v(" "),n("li",[e._v("Stelle sicher dass du ein Leerzeichen nach dem Doppelpunkt hast:\n"),n("ul",[n("li",[e._v("Falsch: "),n("code",[e._v("forceRewrite:yes")])]),e._v(" "),n("li",[e._v("Richtig: "),n("code",[e._v("forceRewrite: yes")])])])]),e._v(" "),n("li",[e._v("Wenn der Wert Sonderzeichen enthält, schließe ihn mit Anführungszeichen ein:\n"),n("ul",[n("li",[e._v("Falsch: "),n("code",[e._v("mqttPassword: a:%qJi")])]),e._v(" "),n("li",[e._v("Richtig: "),n("code",[e._v('mqttPassword: "a:%qJi"')])])])]),e._v(" "),n("li",[e._v("Speichern, SD Karte auswerfen und in den Raspberry Pi stecken. Jetzt kannst du den Raspberry anschalten!")]),e._v(" "),n("li",[e._v("Alice sollte sich selbst starten und mit deinem WLAN verbinden. Sie führt Updates aus, konfiguriert sich und startet danach vollständig. Das kann eine Weile dauern. "),n("strong",[e._v("Ziehe sie jetzt nicht vom Strom ab bevor sie mit dir gesprochen hat!")])]),e._v(" "),n("li",[e._v("Wenn du das Interface eingeschaltet hast(standard Einstellung), siehst du was los ist, wenn du "),n("code",[e._v("http://x.x.x.x:5000")]),e._v(" in deinem Browser aufrufst. Dabei musst du natürlich die IP oder den Hostnamen von deinem Raspberry einfügen.")]),e._v(" "),n("li",[e._v("Der SSH Benutzername ist "),n("code",[e._v("pi")]),e._v(", und das Passwort "),n("code",[e._v("umbrella")]),e._v(". "),n("strong",[e._v("Denke daran dein Passwort nach einer erfolgreichen Installation sofort zu ändern!")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
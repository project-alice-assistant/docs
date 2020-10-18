---
title: 'Grundlegende Verwendung'
sidebarDepth: 3
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Sprache
Alice ist ein *Sprachassistent* also haben wir auch versucht die meisten Funktionen mit Sprachunterstützung zu gestalten. Manche Funktionen sind noch in Arbeit, andere erhalten erst später Sprachunterstützung, aber normalerweise machst du alles mit Alice über deine Stimme!

Ein Problem ist, das viele nicht wissen was sie zu ihrem Sprachassistenten sagen können, da sie ja keine physische Person vor sich haben. Und mit einer Maschine reden ist einfach nicht so natürlich. Mit Alice musst du dir keine Sorgen machen - rede einfach mit ihr und frage sie was auch immer du willst! Wenn sie dich nicht versteht, wird sie dich es wissen lassen!
Wenn es schon einen Skill gibt fragt dich Alice ob sie ihn hinzufügen soll - oder wirf doch selber einen Blick auf die :Skill:Skills:!

## Nicht verstanden?

Alice hat dich vielleicht akustisch verstanden, das heißt aber noch nicht, dass sie auch weiß was sie dir antworten soll. Dafür brauchst du erst einen Skill. Solltest du deiner Meinung nach einen Skill haben der dafür Verantwortlich ist, dann war die Confidence/Wahrscheinlichkeit nicht hoch genug. Schlag in Github doch ein paar neue Beispielsätze vor! Kurzfristig kannst du im Adminmenü auch den Schwellwert (probabilityThreshold) reduzieren! 

::: tip Tip!
Manchmal versteht Alice deine Formulierung nicht - sie ahnt zwar schon was du willst, ist sich aber nicht sicher genug. Statt genau den gleichen Satz zu wiederholen, formuliere deine Frage um! Anschließend fragt dich Alice auch, ob sie sich deine vorherige Formulierung für die Zukunft lernen sollst!
:::

### Beispiel

<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech">Ja?</div>
<div class="userSpeech male">Wie ist die temp draußen</div>
<div class="aliceSpeech">Sorry? Ich verstehe dich nicht?</div>
<div class="userSpeech male">Wie ist die temperatur draußen?</div>
<div class="aliceSpeech">Es hat gerade 6°C draußen.</div>
<div class="aliceSpeech">Ist es das was du gemeint hast?</div>
<div class="userSpeech male">Ja</div>
<div class="aliceSpeech">Ok, cool, dann merke ich mir das!</div>
<div class="userSpeech female">Hey Alice?</div>
<div class="aliceSpeech">Ja?</div>
<div class="userSpeech female">Wie ist die temp draußen?</div>
<div class="aliceSpeech">Es hat gerade 6°C draußen.</div>

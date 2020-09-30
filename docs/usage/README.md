---
title: 'Basic usage'
sidebarDepth: 3
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Voice
Alice is a **voice assistant** so technically we've tried to make the most of the functions voice supported. Some functions are still under work, others might get voice support at a later point, but usually you interact with Alice with your voice!

One thing people usually tend to do is being shy or not knowing what to say to a voice assistant, they don't have a physical person in front of them and speaking to a machine doesn't always come natural. With Alice, you don't need to be afraid, just talk to her and ask whatever you want. If she doesn't understand, she'll let you know! The best part of it is that for many of the cases you can add a :skill: to make her understand you!

## Not understood

Alice is able to capture what you say thanks to her :ASR: component and try to decypher it by using her :NLU: component. Once she has what you said, it still doesn't mean she knows what to do with it... First she'll need a :skill: to handle that request. If there's no skill, she won't know what to do and apologize about it. If there's a :skill: that should, in your opinion, handle what you ask her, but she still doesn't, that would mean her confidence score is too low. The confidence score threshold can be set in the admin part of the :interface:.

::: tip
Sometimes Alice doesn't understand something the way you say it. She knows you're asking for the time, but she's not confident about it and thus says she doesn't understand. Instead of saying the same twice, three times or more, or set the confidence score lower, try to slightly change, she might then understand! And you know what? She'll even learn from that after confirming if that's ok!
:::

### Example

What's better than an example?

<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech">That's me!</div>
<div class="userSpeech male">Gimme the temp outside</div>
<div class="aliceSpeech">Sorry? I did not understand...</div>

At that point, instead of naturally say it again the same way, try to change the way you are asking:

<div class="userSpeech male">What's the temperature outside?</div>
<div class="aliceSpeech">It's currently 6°C outside</div>
<div class="aliceSpeech">Is that what you meant before?</div>
<div class="userSpeech male">Yes</div>
<div class="aliceSpeech">Ok, cool, I'll remember that!</div>
<div class="userSpeech female">Hey Alice?</div>
<div class="aliceSpeech">That's me!</div>
<div class="userSpeech female">Gimme the temp outside</div>
<div class="aliceSpeech">It's currently 6°C outside</div>

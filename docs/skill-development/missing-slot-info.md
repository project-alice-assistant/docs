---
sidebarDepth: 3
title: Missing slot information
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Missing slots info

Sometimes you need more information than what the user provided...

## Study case

Let's take an intent with a few slots, highlighted in the example.

<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech female">Yes?</div>
<div class="userSpeech male">Can you book me a flight from <strong class="slotWord">Geneva</strong> to <strong class="slotWord">New York</strong> for <strong class="slotWord">tuesday 23 third of april around midday</strong> please?</div>
<div class="aliceSpeech female">Of course, let me check that!</div>

For this example (and also in reality) a flight can only be booked if

- The user has the intention to book a ticket, which requires the `intent` to be correctly detected
- The user provided the following information, aka `slots`:
  - `origin`: Where the user wants to depart from
  - `destination`: Where the user wants to travel to
  - `date`: A date and possibly a time at which the user wants to leave


## The potential problem
Now, let's imagine the following:

<div class="userSpeech male">Hey Alice?</div>
<div class="aliceSpeech female">Yes?</div>
<div class="userSpeech male">Can you book me a flight from <strong class="slotWord">Geneva</strong> please?</div>

The problem is that the user did not provide a `destination` or a `date`, for which Alice will have to query the user for details.
 
## The bad solution
You could use the classic `intent` decorators with 4 separate methods, which is not recommended but written here to demonstrate:

```python
@IntentHandler('AnswerFrom')
def answerFrom(self, session: DialogSession):
	pass


@IntentHandler('AnswerTo')
def answerTo(self, session: DialogSession):
	pass
	
	
@IntentHandler('AnswerDate')
def answerDate(self, session: DialogSession):
	pass


@IntentHandler('BookFlight')
def bookFlight(self, session: DialogSession):
	pass
```

Well, not that effective is it? lots of writing only to declare the methods, imagine the work in each of the methods to finally get to book the ticket.


## The good solution
This is what I call the `Fill the glass` method, because we come always at the same method until everything is filled.

```python
@IntentHandler('AnswerFrom')
@IntentHandler('AnswerTo')
@IntentHandler('AnswerDate')
@IntentHandler('BookFlight')
def bookFlight(self, session: DialogSession):
	if 'From' not in session.slots:
		self.continueDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='WhereFrom'),
			intentFilter=['AnswerFrom'],
			slot='From'
		)
		return
	elif 'To' not in session.slots:
		self.continueDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='WhereTo'),
			intentFilter=['AnswerTo']
		)
		return
	elif 'Date' not in session.slots:
		self.continueDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='WhatDate'),
			intentFilter=['AnswerDate']
		)
		return

	# If we got here, we are sure to have all three required information!
	# So we can continue and proceed to the booking!
```

What we did here is link our 4 `intents` to the same method `bookFlight` and we check if all our slots are filled. If not, we ask the user for the information and limit the NLU on the intent that interests us using `intentFilter`. In the first if condition I even mentioned the `slot` the NLU should focus on extracting! 

As the answer will come back to the same method, the checks will naturally continue until all three are False and we can proceed to the booking!

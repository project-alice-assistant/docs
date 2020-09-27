---
sidebarDepth: 5
title: Built-in intents
---

<link rel="stylesheet" href="/css/speechbubbles.css">

# Built-in intents

There are intents that are already available for you to use due to the fact the `AliceCore` skill needs to be loaded and run for Alice to start. You should **always check** if the intents you are creating do not already exist. Those intents are usually used for answering to missing information and are **disabled by default**. They take advantage of our built-in slots. Let's list those intents here:


## Listing
- `UserRandomAnswer` The user answers with random words.
  - Type: *Alice/RandomWords*
  - SlotName: *RandomWord*
- `AnswerYesOrNo` User answers yes or no.
  - Type: *Alice/AnswerYesNo*
  - SlotName: *Answer*
  - Note: Did you know you can use `self.Commons.isYes(session)`?
- `AnswerRoom` User answers with a room name.
  - Type: *Alice/Rooms*
  - SlotName: *Room*
- `AnswerName` User answers with a name.
  - Type: *Alice/Name*
  - SlotName: *Name*
- `AnswerNumber` User answers with a name.
  - Type: *snips/number*
  - SlotName: *Number*
- `SpellWord` User answers with a name.
  - Type: *Alice/Letter*
  - SlotName: *Letters*
  - Notes:
    - You can use `self.Commons.isSpelledWord(TheString)` to check if a string is a spelled word
    - You can build a string from *Letters* slots with `string = ''.join([slot.value['value'] for slot in session.slotsAsObjects['Letters']])`
- `AnswerAccessLevel` User answers with access level
  - Type: *Alice/UserAccessLevel*
  - SlotName: *UserAccessLevel*
- `AnswerPercent` User answers with access level
  - Type: *snips/number*
  - SlotName: *Percent*

We will implement more inbuilt intents over time, such as answering with time, dates etc.

## How to use these intents
Now comes the very important part, understanding the problematic behind using those intents and how to overcome those limitations

### The problem
Let's imagine you are building a skill that gives the user the ability to add reminders. At some point, you might want to ask the user if the reminder can be deleted, to which, the user is going to answer with either yes or no:

<div class="aliceSpeech female">Hey, you told me to remind you this: Buy some beer before weekend.</div>
<div class="aliceSpeech female">Can I now delete this reminder?</div>
<div class="userSpeech male"><strong class="slotWord">Yes</strong> thank you</div>
<div class="aliceSpeech female">Ok, deleted</div>

To this point, nothing big or hard. What if I told you that the `AnswerYesOrNo` intent is already used by many skills? So if you have a little chance, your skill might by the first one to catch the intent but what if the `Yes` the user is answering is not meant for your skill? See where I'm going? You need to make sure the `AnswerYesOrNo` is actually meant for your skill at this moment. It is important to understand that Alice doesn't lock a skill while in dialogue. You could hypothetically answer `What time is it` instead of `Yes` and she'd answer you, forgetting about the reminder question.

### The solutions
To solve these collision issues, we have implemented what we call `dialogStates`. You can either do the mapping in the `__init__` method, or you can use the `IntentHandler` decorator for easier cases.

#### The decorator way

First thing, add your method for Alice to ask if the reminder can be safely deleted. I'd imagine this method to be triggered if a reminder was just spoken.

```python
def askDeleteReminder(self, siteId):
	self.ask(
		siteId=siteId,
		text=self.randomTalk(text='CanTheReminderBeDeleted'),
		intentFilter=['AnswerYesOrNo'],
		currentDialogState='askingToDeleteReminder'
	)
```

Two important things here:
- `intentFilter`: This is used to limit the NLU on parsing the user answer on the specified intent. You don't want the user to answer with `What time is it`, but only with yes or no.
- `currentDialogState`: This is the **very** important part! It tells Alice that she is in dialogue with the user and that the `state` or `next turn`, is `askingToDeleteReminder`. You can use literally whatever you want here, as long as you remember what you've declared.

Ok, so the user is going to answer with `Yes!`. Now we need an intent handler to take care of that!

```python
@IntentHandler(intent='AnswerYesOrNo', requiredState='askingToDeleteReminder', isProtected=True)
def answerDeleteReminder(self, session: DialogSession):
	if self.Commons.isYes(session):
		self.endDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='okDeleted')
		)
	else:
		self.endDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='okKeepingIt')
		)
```

The important part here is that our `IntentHandler` decorator took one more important argument, the `requiredState`. This means that your skill supports the `AnswerYesOrNo` intent **only** if the current dialog state is `askingToDeleteReminder`! No more collision with other skills! The argument `isProtected` makes Alice unable to be moody and ignore your answer. It's always a good idea to protect answers in dialogue turns.

#### Manual mapping
We call `mapping` the declaration of intents vs dialog states. Same example as above, but not by using decorators and adding another intent. It is useful when you have a more complex structure of intents or skill.

```python
from core.base.model.AliceSkill import AliceSkill
from core.base.model.Intent import Intent
from core.dialog.model.DialogSession import DialogSession


class Reminder(AliceSkill):
	# Declare our intents
	_INTENT_ANSWER_YES_OR_NO = Intent('AnswerYesOrNo', isProtected=True)
	_INTENT_ANSWER_ROOM = Intent('AnswerRoom', isProtected=True)
	_INTENT_ADD_REMINDER = Intent('NewReminder')


	def __init__(self):
		# Declare the skill's supported intents
		# The two first ones have no direct mapping, the last one directly declares its mapping
		self._INTENTS = [
			self._INTENT_ANSWER_YES_OR_NO,
			self._INTENT_ANSWER_ROOM,
			(self._INTENT_ADD_REMINDER, self.addReminder),
		]

		# Create a mapping for the intent YES_OR_NO
		# Depending on the dialogue state, either answerDeleteReminder or answerReminderIsCorrect will be called
		self._INTENT_ANSWER_YES_OR_NO.dialogMapping = {
			'askingToDeleteReminder': self.answerDeleteReminder,
			'askingIfCorrect': self.answerReminderIsCorrect,
		}
		
		# Create a mapping for the intent AnswerRoom
		self._INTENT_ANSWER_ROOM.dialogMapping = {
			'askingWhereToRemind': self.addReminder
		}

		super().__init__(self._INTENTS)


	# This is called directly by the mapping for intents AddReminder and AnswerRoom on lines 18 and 19
	def addReminder(self, session: DialogSession):
		if 'Room' not in session.slots:
			self.continueDialog(
				sessionId=session.sessionId,
				text=self.randomTalk(text='inWhichRoom'),
				intentFilter=['AnswerRoom'],
				currentDialogState='askingWhereToRemind'
			)
			return

		self.continueDialog(
			sessionId=session.sessionId,
			text=self.randomTalk(text='isItCorrect', replace=[session.slots['reminder']]),
			intentFilter=['AnswerYesOrNo'],
			currentDialogState='askingIfCorrect'
		)


	# This would be called after you've read out loud a reminder
	# It asks if the reminder can be deleted and sets the dialogue state to 'askingToDeleteReminder'
	def askDeleteReminder(self, siteId):
		self.ask(
			siteId=siteId,
			text=self.randomTalk(text='CanTheReminderBeDeleted'),
			intentFilter=['AnswerYesOrNo'],
			currentDialogState='askingToDeleteReminder'
		)


	# This is called by the intent YesOrNo ONLY if the current dialogue state is 'askingToDeleteReminder'
	# As declared in our mapping on line 25
	def answerDeleteReminder(self, session: DialogSession):
		if self.Commons.isYes(session):
			self.endDialog(
				sessionId=session.sessionId,
				text=self.randomTalk(text='okDeleted')
			)
		else:
			self.endDialog(
				sessionId=session.sessionId,
				text=self.randomTalk(text='okKeepingIt')
			)

	# This is called by the intent YesOrNo ONLY if the current dialogue state is 'askingIfCorrect'
	# As declared in our mapping on line 26
	def answerReminderIsCorrect(self, session: DialogSession):
		if self.Commons.isYes(session):
			self.endDialog(
				sessionId=session.sessionId,
				text=self.randomTalk(text='okAdded')
			)
		else:
			self.continueDialog(
				sessionId=session.sessionId,
				text=self.randomTalk(text='sorryWhatIsItThen')
				.....

```

The important parts here are how we declare our mappings. You can add as many routes as you wish, just take a look at [AliceCore skill](https://github.com/project-alice-assistant/skill_AliceCore/blob/master/AliceCore.py). We are still declaring dialogue states the same in `continueDialog`. Keep in mind this manual approach is useful for complex structures, and you should take advantage of the decorator approach first!

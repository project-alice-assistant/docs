---
sidebarDepth: 1
---

# Logging

To track events and data within your skill we can use logging. If you are new to programming, this is a way to output a message that can tell you the state of your skill at a particular point in time, details about an error that has occurred, or simply noting that a program reached a particular point in the code.

::: tip
  Logging is useful during skill development, as well as to help end-users
  diagnose problems in the future.
:::

## Basic Usage

A logger is available through the `AliceSkill` base class. This means that you can use it within a skill without needing to import the `logging` package.

Here is a quick example of an `info` level message used in a skill. We will learn more about different levels shortly.

```python
from core.base.model.AliceSkill import AliceSkill
from core.dialog.model.DialogSession import DialogSession
from core.util.Decorators import IntentHandler

class HelloWorldskill(AliceSkill):


	@IntentHandler('HelloWorldIntent')
	def helloWorldIntent(self, session: DialogSession, **_kwargs):
		"""
			skills can log useful information.
			These will appear in the Web Interface and the logs file.
		"""
		self.logInfo("This is an info level log message.")
		self.endDialog(session.sessionId, self.randomTalk(text='helloWorld'))
```

## Logging Levels

There are five types of log messages available that are used for different purposes.

### Debug

```python
self.logDebug
```

Debug messages are used for information that will help to diagnose problems. These are particularly useful if there is anything that has the potential to break in the future.


### Info

```python
self.logInfo
```

Info messages provide general information when the skill is running as expected. These messages will always be logged so are useful when actively developing a skill, but should be used sparingly once a skill is published for other people to use.

### Warning

```python
self.logWarning
```

Warning messages are used to indicate that something has gone wrong, but the skill will continue to function.
It is possible to output a stack trace when needed using:

```python
self.logWarning(msg='warning message', printStack=True):
```


### Error

```python
self.logError
```

Error messages indicate that a serious problem has occurred and the skill will not be able to function.
They will always output a stack trace.


### Critical

```python
self.logCritical
```

Critical error messages indicate that a very serious problem has occurred and the skill will not be able to function.
They will always output a stack trace.

### Fatal

```python
self.logFatal
```

`logFatal` has the same outcome as `logCritical`, but indicates, that Alice will exit afterwards. This is why in skills you
should only use `logCritical` even though they do the same.



## Where do these messages get logged?

Log messages from a skill are displayed in the ProjectAlice Web Interface so that a User can see in real-time what is happening in the skill. They are also written to the `logs` file located at: `~/ProjectAlice/var/logs`


## Using the logger outside the skill class

As the logger is provided by the skill class, it is only available within that scope. If you need to log messages from outside of this class, you can import the logger manually.

```python
from core.util.model.Logger import Logger
```

This can then be used outside your skill's class. Extending our first example:

```python
from core.base.model.AliceSkill import AliceSkill
from core.dialog.model.DialogSession import DialogSession
from core.util.Decorators import IntentHandler
from core.util.model.Logger import Logger

Logger().logInfo(
	"This is a logged info level message outside of the skill class scope"
)

def my_special_function():
	Logger().logInfo("Another usage of logging.")

class HelloWorldskill(AliceSkill):
	@IntentHandler('HelloWorldIntent')
	def helloWorldIntent(self, session: DialogSession, **_kwargs):
		"""
			skills can log useful information.
			These will appear in the Web Interface and the logs file.
		"""
		self.logInfo("This is an info level log message.")
		self.endDialog(session.sessionId, self.randomTalk(text='helloWorld'))
		my_special_function()
```

::: warning
When you want to print stack traces when logging outside of the skill's class it might be required to provide
a different depth for the stack trace to the Logger class, since the default depth of the stack trace is 4.
```python
Logger(depth=6).logError('log message with stack trace')
```
:::

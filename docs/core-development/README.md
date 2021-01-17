---
title: 'Core development'
sidebarDepth: 3
---

[Getting started with Pycharm](../skill-development/getting-started-with-a-IDE.md)

[Code guidelines](../contribute/code-guidelines.md)

## UI Development
The UI is developed in vue.js as the separate repository: https://github.com/project-alice-assistant/webui

### Global funcitons
There are currently the following global functions that can be called
#### Notifications
##### this.showError(message: str)
Show a floating error message, that will disappear after a few seconds. The message is not stored, only to be used as direct feedback to a user action
##### this.showSuccess(message: str)
Show a floating success message, that will disappear after a few seconds. The message is not stored, only to be used as direct feedback to a user action
##### this.showInfo(message: str)
Show a floating information message, that will disappear after a few seconds. The message is not stored, only to be used as direct feedback to a user action
##### this.checkResponse(response: dict)
Checks the given response object of an axios call. Calls showError or showSuccess depending on the value of response.data['success'] for the message contained in response.data['success'].
Returns the value of respones.data['success']

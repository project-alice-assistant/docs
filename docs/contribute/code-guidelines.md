---
sidebarDepth: 2
---

# Code Guidelines

- **We use tabs and not spaces for indentation**
- We prefix private class variables with an underscore
- We prefix private methods with an underscore
- We use camelCase for variables, not snake_case:
  - `self._myVariableName`
- We use UPPER_CASE for class static vars or final vars:
  - `LIGHT_SPEED = 299792458`
- We use PascalCase for class names
- We use 2 empty lines around methods
- We strong type method variables
- We strong type method returns:
  - Return '-> None' is not mandatory
- We speak English
- We use properties getters and setters, not getters and setters
- We really care for anti patterns: https://docs.quantifiedcode.com/python-anti-patterns/
- We use fstrings and dropped the usage of .format() when possible:
  - `print(f'Hi! my name is {name}')`instead of `print('My name is {}'.format(name)`
- Python 2 is dead
- Init dictionaries and lists with dict() and list() and not with {} and []
- Do never shadow a builtin var or method
- We don't copyright the files themselves. We believe in sharing and the main file contains authors. The project is licensed under GPLv3


## Pycharm settings
To make things easier, I have shared my pycharm settings under a [Github repository](https://github.com/project-alice-assistant/JetbrainsSettings). Simply open pycharm, click **File** in the top left corner and choose **Settings repository** and choose **Overwrite local**


## Reformat your code

Pycharm comes with a powerful inbuilt code formatter which you can use to adapt your code to our guidelines once you have linked your pycharm to our settings repository. Right click on your project and choose **Reformat code**. You'll be presented with a popup to choose some options:

<img src="/images/reformat_code.png" alt="reformat code">


## Check your code

Pycharm comes with an inbuilt code checker. Beside the "per file" instant check (top right corner, green tick if ok) you can run an analysis on your code by right clicking your project and choose **Inspect code**:

<img src="/images/inspect_code.png" alt="inspect code">

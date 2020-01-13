---
sidebarDepth: 2
---

# Widgets
Widgets are little tiles that a user can add to the interface home screen. They provide quick overview or functions to your skills. Think a Philips Hue lamp adding a widget for every lamp the user has connected, allowing the user to click on the widget to toggle the light state. Or a widget for a shopping list displaying what's currently in your list. Or a widget displaying the temperature at your Netatmo devices. Or... Well, you got it I guess?

## Widgets structure
Widgets come embedded with your skill. They are not mandatory but can be a nice addition for users using the interface. You can add more than one widget per skill and the user decides which ones to use. To add a widget you must create the following structure in your existing skill structure, our HelloWorld skills:

```text
.
├─ widgets
│  └─ css
│     └─ common.css
│     └─ HelloWorldWidget.css
│  └─ img
│  └─ js
│     └─ HelloWorldWidget.js
│  └─ lang
│     └─ HelloWorldWidget.json
│  └─ templates
│     └─ HelloWorldWidget.html
│  └─ HelloWorldWidget.py
```

Let's break down this structure!

### css/common.css
This contains any css that is common between the widgets your skill proposes

### css/HelloWorldWidget.css
This is your widget dedicated css file! The default content should be as follow:

```css
.HelloWorldWidget {
	width: 100%;
	height: 100%;
	background-color: #636363;
	color: #d1d1d1;
	padding: 5px;
	box-sizing: border-box;
}

.HelloWorldWidget .icon {
	width: 100%;
	font-size: 1.5em;
}
```

- The first class takes up the whole widget available space and defines the background color
- The second class defines the widget icon

### img
If your widgets uses image files, such as backgrounds, you could place them here, for organisation's sake

### js/HelloWorldWidget.js
The engine of your widget! If you widget is interactive, you can code whatever you want in there! Remember, we use Jquery and Jquery-UI so they are at your disposal for coding you stuff! A basic file should look like:

```js
(function () {})();
```

### lang/HelloWorldWidget.json
This file can be used if your widget displays texts, such as html field labels, buttons or whatever that has text that should be translated. Remember what languages you made your skill compatible with! Your widget should support them too! The structure is the following:

```json
{
	"en": {
		"title": "Hello all"
	},
	"de": {
		"title": "Hallo zusammen"
	},
	"fr": {
		"title": "Hello à tous"
	}
}
```

### templates/HelloWorldWidget.html
This is what is rendered on the home page, it's your widget! A basic widget file looks like:

```html
<div class="HelloWorldWidget" id="HelloWorldWidget">
	<div class="widgetIcons">
		<div class="widgetIcon">
			<i class="fas fa-space-shuttle" aria-hidden="true"></i>
		</div>
	</div>
    <!-- Your widget html code -->
</div>
```

Remember the css classes we defined a little higher? See where they go now?
Also, do you remember the language file? Using automatic translation isn't that hard! Instead of hardcoding your language string, simply replace it by `{{ lang.yourStringIndex }}`. This will automatically be replaced by, if your Alice instance runs in english, by `HelloWorldWidget.json['en']['yourStringIndex']`

### HelloWorldWidget.py
This is what makes your widget be loaded by Alice! A raw widget python file would be:

```python
import sqlite3

from core.base.model.Widget import Widget
from core.base.model.Widget import WidgetSizes


class WorldMap(Widget):

	SIZE = WidgetSizes.w_extralarge_wide
	OPTIONS: dict = dict()

	def __init__(self, data: sqlite3.Row):
		super().__init__(data)

```

Let's take a little look at this!

- SIZE: Defines the size your widget is gonna render, in pixel:
  - w_tiny: 50x50
  - w_tiny_wide: 100x50
  - w_tiny_tall: 50x100
  -
  - w_small: 100x100
  - w_small_wide: 200x100
  - w_small_tall: 100x200
  -
  - w: 200x200
  - w_wide: 300x200
  - w_tall: 200x300
  -
  - w_large: 300x300
  - w_large_wide: 400x300
  - w_large_tall: 300x400
  -
  - w_extralarge: 500x500
  - w_extralarge_wide: 700x500
  - w_extralarge_tall: 500x700

- OPTIONS
  - To be implemented, but will allow widget options

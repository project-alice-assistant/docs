# WIP CONCEPT: Room configuration

Once you want to get the most out of Alice and her skills,
you will have to setup your house with all its rooms and devices.
This can be done in the web interface "Rooms".
The screen will already show you some information. 
Every tile is one device, the tiles are grouped by the room the device is in.
Right after setup you will see Alice in her room.
If you added satellites or other devices with voice commands, they are shown as well.
Every tile offers one main function and shows its custom status. (A lamp is either on or off, and you can toggle this)

### Setting up a new room or new device
First you have to setup your rooms, then your new devices.
##### Choose or add room
Like everywhere in the interface, you can find your tools on the top right of the screen.
The + will be used for adding new rooms and new devices. When pressing the button a popup opens.
In this popup you can:
- choose an existing room 
- create a new room by entering the name in the search bar

As soom as you click on of the existing rooms, or the "Add Room: <YourRoomName>" button, the dialog will advance to the
second screen in the popup:
##### Choose device Type
What you see now is a list of all existing device types. The device types are either built into Alice,
or were added by the skills you installed. For details see #skill-development -> #room-configuration

Clicking a device type will advance to that device types settings.

::: Examples
- A roborock vacuum will ask you for its IP and token
- A TV will ask for its secret
- A light might ask for its specific name, e.g. "ceiling light", "nightstand"...
:::

After you confirm the dialogue with the checkmark in the lower right corner, you return to the overview screen and the
installation routine for the new device is triggered in the background.

Leaving the screen in this state will only create the potentially new room, no device is added!


::: future enhancement
not implemented:
Or you can use the voice interface with the following dialog:
<div class="userSpeech male">"Please add a new room"</div>
<div class="aliceSpeech"> "What room should I add?"</div>
<div class="userSpeech male"> "Kitchen, Bathroom, and living room"</div>
:::

### Assigning a device to more then one room
Every device is always only assigned directly to one room. Links to other rooms can be created.
Still there are a few reasons why you should need a device in more than one room:

- The device should be the standard device of that type of device (always control the living room TV from the kitchen)
- The device is responsible for servicing multiple rooms (what vacuum should clean the kitchen?)

While in the room screen you can choose the "anchor" symbol in the toolbar.
This will activate the linking mode. If you now
[click a device, a popup for the room selection opens and/drag a device to a different room]
a link between that device and the room is created. A link can have room dependent settings. If so, the settings popup should open.

Every linked device will have its own tile with a behavior similar to the main tile, but the tile is marked with the "anchor" symbol.
The status and main function of that linked device MIGHT be room dependent (e.g. clean that room)

::: future enhancement
not implemented:
Per linked device it can be set if it should be a full tile or only a small icon - or hidden. While the TV should be controlled
from the kitchen, it would be more clean, if the TV is not shown in every room as a big tile.
:::

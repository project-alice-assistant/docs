---
title: 'Room configuration'
sidebarDepth: 3
---


::: warning
This is a beta version....
:::

# MyHome

Once you want to get the most out of Alice, and her skills, you will have to set up your house with all its different rooms and devices. Remember, Alice won't share your information, your rooms and devices are safe with her and will never leave your local network!
All the configuration can be done with the web interface "My Home".

Initially this screen will only have one Room "The Hive", and one device "Alice". This is where Alice lives. It might be a bit empty at the moment, but we will address this shortly.
With many of the available skills, comes new device types to fill your home. For now, we will focus on creating more rooms and build your home.

::: tip
Did you know that you can click on most devices and execute one main action? Try clicking the Alice umbrella - it will stop and start Alice from listening to you!
:::

## Editing your home
Like everywhere in the interface, you can find your tools on the top right of the screen. Click on the pencil to enter the editing mode!
The first toolbar groups the tools for the different categories and offers general actions.
From left to right you currently will find:
- The close button, which re closes this menu.
- A curtain icon, which puts your `My home` screen into theatre mode, similar to fullscreen mode
- A map icon, which holds all the tools for adding and configuring locations in your home.
- A plug icon, which holds all the tools for adding and configuring devices


### Setup and configuration of your locations
First you have to set up your :location:locations:, then you can add more devices. Locations can be rooms or areas, they can be stacked, and linked to other locations.
When you click the map icon in the toolbar, you will get the following options:
- A plus sign: This is where you add new locations or remove old ones
- A trash can: For removing existing rooms
- A Gear Icon: For changing room settings such as add synonyms or raising and lowering the order of the locations
- Paint roller: Allows you to color the floor with different selection of coverings
- A hard hat: Here you can add, move and delete walls, windows, stairs and doors
- The couch for adding, moving and deleting furniture and decorations
:::tip
 Clicking just the map icon then clicking the location on the grid, will allow you to move and resize your locations
Also clicking the existing name on the grid will allow you to change the location name
:::

#### Add a location
First we have to add a location.
- Click the plus sign in the location editing toolbar.
- Now you can click anywhere on the empty space of the map in front of you. When you've clicked the grid, a popup will open and ask you for the name of the newly created location.
- When you confirm the popup, you can then click into the grid and drag the cursor to create the sized room you're after.

Whilst the location is highlighted you can move it around by dragging it, resize it by dragging the corners. Note that if you drag the rom close to another it will snap into place.

I would suggest you add a few more rooms from your home by repeating these steps - then adding in the other features is more fun, than it is for a single room!

::: tip
If you want to get rid of "The Hive" you first have to move the Alice main device to a different room!
:::

#### Stylize your rooms (OPTIONAL)
Now that we have created a few rooms, it is time to make them more colorful.
First lets paint the floor:
- Click on the paint roller in the location editing toolbar
- A slide out window should appear where a lot of different floor types can be chosen from
- Click one of them!
- Now click on one of your rooms and that floor covering will be placed on that floor.

Great !! You now have your first floor painted.

Repeat the above steps for the other rooms, before we head over to the walls:

- Now click on the hard hat icon in the location editing toolbar
- Like above, you should see another slide out window appear. In here you can select a wall type
- Click on one of your rooms, and you will find a newly placed wall
- Resize and move the wall around to add divisions between your rooms. Keep empty spaces for doors and windows!
:::tip
to move and resize the walls make sure your still in the build menu (EG: The hard hat icon is still yellow)
:::

Once you have all the walls placed, we will move on to adding in other building features

Finally, when all your rooms are created, you can add in some static decorations:
- Click on the couch icon in the toolbar
- Select your decoration from the slide out window
- Add, move and resize them just like everything else


:::tip
Changes you make get saved auto magically !
:::

That's it, now your home should look a lot nicer than before! Time to add in some functionality!

#### Configure your locations
When you click on the settings icon, (the gears) in the location toolbar, you'll then be able to hover over a room and
click that locations settings icon to configure it.

For now, you only have 2 options that will pop up over the room as soon as you hover over it.

- Firstly:, is another gear/settings icon, click that to add or remove a synonym for that room.
Synonyms will be usable for voice input just like the main name of the room. That way you can
 "play music in the office" or "play music in my workspace" and alice will know it is the same.

- Secondly: You have up and down arrows when you hover a room. These will raise or lower the room on the map.

 *Example of this is:*

You create an outdoor space the entire size of your property. Now lower that by clicking the arrow, so it goes under all the other locations. Your outside area should now surround the house without covering all the rooms up.

Now that you are done with the creation of the home, let's get started with adding in some life!

### Setup and configuration of devices
You already saw your first device when you opened My Home for the first time. The small umbrella is your main device.
When you click it, you will toggle the wakeword and microphone detection on and off. (as indicated by smaller red icons when you click the umbrella)

The menu for devices is much like the menu for locations.
When you click on the plug icon in the toolbar, you will get the following options:
- The plus sign again is for adding new devices and deleting old ones.
- The trash can for removing a device
- The settings tool is for changing the settings of a device such as name and heartbeat rate (if device allows it)
- The chain link is for connecting one device to other locations.
- The broken chain link. This is used to remove an existing link


#### Adding a device
You can add in a new device by clicking the plus icon in the `devices` tool bar.
In the window that appears you can choose the device type from the dropdown menu in that window

:::tip
Are there currently no device types shown? Is there nothing to click in that dropdown?
Make sure to install a few :skill:skills: that provide device types!
:::

Some skills that provide new device types to add in are:
- AliceSatellite: Required to create satellites. Clicking a satellite will toggle the hotword and the icon shows its current state
- Tasmota: Switches, Thermometers, Sensors
- RandomIpDevice: Every device that has an IP address, or even websites you want to check or visit. The icon shows if the device is reachable and a click will open the supplied link.
- HomeAssistant: Bring your HomeAssistant devices over to Alice. Although you can't add the devices manually, the :skill: will import your devices, and you can arrange them in your map! Outside MyHome a lot more functions await in this :skill: !
- Vacuum: Add and control your Vacuum. Link it to the rooms it is responsible for and setup everything that is required. (Currently only for Roborock :( )

By adding a device, you only create an empty dummy for now - to give it life, you have to configure it. Before we do so, let's link it to all the related locations.

#### Creating device links to locations
When you enter the device linking mode by clicking the chainLink, you can link one device to as many locations as you like - (or as many as the device allows).

:::tip
Why would you want to you ask ?

Well in some situations such as the use of your robo vacuum or satellite devices, temperature gauges etc, the actual device as far as Alice initially knows could be situated in your "kitchen". However, the room itself is open and therefore the kitchen also incorporates the "dining room". By linking the "kitchen" satellite to the "dining room". you are able to ask Alice to "Play some random music in the kitchen" or in the "dining room" and she will know exactly where to play it
:::

**So with the chain link clicked,**

1. Click the device you want to link from. A blue arrow will appear...
2. Now click somewhere on the new location you want to link to, or several locations if desired.
3. You should see a confirmation message appear and also see a dotted line to the location showing the link is active
4. Click the chain link again to turn that mode off
(NOTE: you need to also turn the chain link off and back on again before you can select another device to link)

You can see all existing links by the connection lines.

Ok, so now we got devices, and links to rooms - but so far nothing is configured or more than decoration!

To unlink is basically the same process, but you use the broken link icon and a red arrow will appear.


#### Configure devices.
By clicking the settings Icon...
In here you can change the device name and if the device is able to, you can adjust your device heartbeat to Alice.

Every device needs a name. This name can be used by :skill:skills: to address specific devices (e.g. "turn off the spotlight").
 So go ahead and name your device from this settings screen.

:::tip
Make it a friendly name, like pool light or coffee machine. Having a name like gpio12 just ain't going to do anyone any favors.
:::

Currently, your device is unlikely to be paired to Alice. So jump out of the device menu by clicking the close button to hide the menu
Now click your device and if it's not paired then Alice will broadcast out to the network looking for a response from your new device.
Once she finds it she will assign it a unique number and, complete installation and listen for a heartbeat from your device.
This tells Alice it's connected and allows
Alice to determine states and values of what ever the device is broadcasting.

Let's take a look at the satellite provided by AliceSatellite:
It has only a big "Find Device" button, nothing more. Clicking that button is basically just like telling Alice
`Please add a new alice satellite in the living room`
 She will start broadcasting for the new device and trigger the installation. When the installation is successful, the "Find Device" button will not be shown anymore.

Let's take a look at another device type: Roborock by the skill Vacuum:
Just like the satellite, there is a "Find Device" button on the top, but clicking it now, will just give you an error message, because you don't have supplied all the required information first!
To do that, look below the big button. You will find a field for the ip and the token. Only after supplying them, Alice can try to connect to the vacuum. Switching the input field should save automatically in these settings - to be sure, pressing enter will save as well!
But that is not all you can do in the settings for the vacuum. Below the required information for the device, you see a listing of all linked rooms. In case of the Roborock, you need one room id for each room your vacuum discovered, to be able to start the cleaning in that specific area. This is the place where you can save them for Alice.

#### My Home extra's

1. If a device is "offline" it will show by having a broken heart above its icon.
2. The compass - The arrow points to the centre of your map. Clicking that arrow in the centre of the
compass will zoom your map to the centre of your screen.
3. Once a new device is added, click that device for it to "pair" to Alice, so she recognises it in the future.
You should see a pairing message when this occurs.

Note: With some skills like HomeAssistant, there is no pairing needed. It's done automatically

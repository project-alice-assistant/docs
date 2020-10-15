---
title: 'Room configuration'
sidebarDepth: 3
---


::: warning
This is just an beta version....
:::

# MyHome

Once you want to get the most out of Alice and her skills, you will have to setup your house with all its rooms and devices. Remember, Alice won't share your information, your rooms and devices are save with her and will never leave your local network!
All the configuration can be done with the web interface "myHome".

Initially this screen will only have one Room "The Hive" and one device "Alice". This is where Alice lives. It might be a bit trist and too empty, but we will adress this.
With many of the skills come new device types to fill your home. For now we will focus on creating more rooms and built your home.

::: tip
Did you know that you can click on most devices and execute one main action? Try clicking the Alice umbrella - it will stop and start Alice from listening to you!
:::

## Editing your home
Like everywhere in the interface, you can find your tools on the top right of the screen. Click on the pencil to enter the editing mode!
The first toolbar groups the tools for the different categories and offers general actions.
From left to right you currently will find:
- An option to export your setup
- A map icon, which holds all the tools required for changing the layout of your home
- A plug icon, which holds all the tools for adding and configuring devices
- A save icon, for saving all the changes you did to your home

### Setup and configuration of your locations
First you have to setup your :location:locations:, then you can add more devices. Locations can be rooms or areas, they can be stacked, but currently not grouped.
When you click the map icon in the toolbar, you will get the following options:
- A plus sign: This is where you add new locations or remove old ones
- A paint roller to color in the floors
- A hard hat: Here you can add, move and delete walls, windows, stairs and doors
- The couch for adding, moving and deleting furniture and decorations
- The moving tool, to move, resize, delete and sort your locations
- The options tool, for changing the rooms name and adding synonyms

##### Add a location
First of all we have to add a location. Click the plus sign in the location editing tool bar.
Now you can click anywhere on the empty space of the map in front of you. When you click a popup will open and ask you for the name of the newly created location.
When you confirm the popup, the new location will appear and you can move it around by dragging it, resize it by dragging the corner or change the sort order compared to the other rooms by clicking the arrows. (This allows you to have your garden be all around the house, because it was moved to the background!)

I would suggest you add a few more rooms from your home by repeating these steps - then adding in the other features is more fun, than for a single room!

::: tip
If you want to get rid of "TheHive" you first have to move the Alice main device to a different room!
:::

##### Stylize your rooms (OPTIONAL)
Now that we have created a few rooms, it is time to make them more colorful.
First lets paint the floor:
- Click on the paint roller in the location editing toolbar
- hover over the top part of the map where a lot of different floor types will apear for you to choose from
- Click one of them!
- Now that one of the floor tiles has a yellow marker around it, click on one of your rooms
And there you got your first floor painted.

Repeat that for the other rooms, before we head over to the walls:
- Click on the hard hat icon in the location editing toolbar
As long as you don't have any type of window etc. selected in the library at the top of the map, you are in the wall building mode
- Click on one of your rooms, and you will find a newly placed wall
- Resize and move the wall around to add divisions between your rooms. Keep empty spaces for doors and windows!
Once you have all the walls placed, we will move on to adding in other building features
- Select one of the doors or windows in the top of your map - just like you did for the floor colors!
- Add them in just like walls, move them around and resize them to your liking!

::: tip
If you want to delete something, be it a room, decoration or device, you can rightclick it in its adding or moving mode!
:::

Finally, when all your rooms are created, you can add in some static decorations:
- Click on the couch icon in the toolbar
- Select your decoration at the top of the map
- Add, move and resize them just like everything else
- SAVE! by using the shaking disc icon in the main toolbar

:::tip
Whenever you have unsaved changes the disc icon will start shaking! Click it to save and reload the page!
:::

That's it, now your home should look a lot nicer than before! Time to add in some functionality!

##### Configure your locations
When you click on the settings icon in the location toolbar, you can choose the location you want to configure.
For now you have only two options that will popup in a sidebar as soon as you click on a room.
First, you have a little pencil near the locations name. Click it to open a popup where you can change the main name of that location.
And second, you can add synonyms for your locations. Synonyms will be useable for voice input just like the main name of the room. That way you can "play music in the office" or "play music at my workspace" and alice will know it is the same.

(pending feature) Location names and synonyms allow you to add in new names for rooms, that are unique to you! For example include your childs name into the room name (or your name in the synonym for the workshop... ;))!

Now that you are done with the creation of the home, let's get started with adding in some life!

### Setup and configuration of devices
You already saw your first device when you opened myHome for the first time. The small umbrella is your main device. When you click it, you will toggle the wakeword detection on and off. (pending feature: You can see the current state by the shown icon! Has it the bright red colors, Alice can start listening to you, when you call her. Is it gray? Alice is currently sleeping and won't listen to you. Click the icon to wake her up!)

The menu for devices is much like the menu for locations.
When you click on the plug icon in the toolbar, you will get the following options:
- The plus sign again is for adding new devices and deleting old ones.
- The chainlink is for connecting one device to other locations. Sometimes even connecting a device only to the location is in, will unlock new settings!
- The moving tool is again for chaning the postion or resize the device icon
- The options tool is for changing the settings of a device and all the links created for it

#### Adding a device
You can add in a new device by clicking the plus icon in the devices toolbar.
Just like for the locations, you can choose the device type in the dropdown menu on the top of your map

::: tip
Are there currently no device types shown? Is there nothing to click on the top of the map?
Make sure to install a few skills that provide device types!
:::

Some skills that provide new device types to add in are:
- AliceSatellite: Required to create satellites. Clicking a satellite will toggle the hotword and the icon shows its current state
- Tasmota: Switches, Thermometers, Sensors
- RandomIpDevice: Every device that has an ip adress, or even websites you want to check or visit. The icon shows if the device is reachable and a click will open the supplied link.
- HomeAssistant: Bring your HomeAssistant devices over to Alice. Although you can't add the devices manually, the skill will import your devices and you can arrange them in your map! Outside of myHome a whole lot of more functions await in this skill!
- Vacuum: Add and control your Vacuum. Link it to the rooms it is responsible for and setup everything that is required. (Currently only for Roborock :( )

By adding a device, you only create an empty dummy for now - to give it life, you have to configure it. Before we do so, let's link it to all the related locations.

#### Creating device links to locations
When you enter the device linking mode by clicking the connection tool in the devices toolbar, you can link one device to as many locations as you like - or the device allows.
Start by clicking on the device you want to link. You can see the currently active device by the highlight around it. As long as a device is selected, you can add links to rooms just by clicking onto them. If you want to delete a link, just right click on the room while the device is still connected.
You can see all existing links for the currently selected device by the connection lines.

Ok, so now we got devices, and links to rooms - but so far nothing is configured or more than decoration!

#### Configure devices and their links
Let's click on the last icon in the device editing toolbar - the options.
Just like the options for the locations, this will open a sidebar once you click on a device. In addition you will see all the existing links by their connections on the map.
Every device has a name. This name can be used by skills to adress specific devices (e.g. "turn of the spotlight"). You can change this name by the small pencil next to its name. As your device has no name yet, it will only show the pencil at the first position in the sidebar.

The rest of the sidebar is depending on the device type and the current state.
Let's take a look at the satellite provided by AliceSatellite:
It has only a big "Find Device" button, nothing more. Clicking that button is basically just like telling Alice "Please add a new alice satellite in the living room". She will start broadcasting for the new device an trigger the installation. When the installation was sucessfull, the "Find Device" button will not be shown anymore.

Let's take a look at another device type: Roborock by the skill Vacuum:
Just like the satellite, there is a "Find Device" button on the top, but clicking it now, will just give you an error message, because you don't have supplied all the required information first!
To do that, look below the big button. You will find a field for the ip and the token. Only after supplying them, Alice can try to connect to the vacuum. Switiching the input field should save automatically in these settings - to be sure, pressing enter will save as well!
But that is not all you can do in the settings for the vacuum. Below the required information for the device, you see a listing of all linked rooms. In case of the Roborock, you need one room id for each room your vacuum discovered, to be able to start the cleaning in that specific area. This is the place where you can save them for Alice.

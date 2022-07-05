---
title: 'Web Interface'
sidebarDepth: 5
tags:
- web
- interface
---

# Web interface

## What is it?
The web interface is a graphical tool, on your own browser, to access, configure, play, speak and more with Alice and all its devices. But not only... It can be used to display relevant information in widgets in magic mirror mode! Or it can be used to chat with Alice while others are sleeping, directly from your keyboard. The interface is able to play sound, so Alice can talk to you directly through it, on your computer, phone or whatever can display the web page!

## Where to find it

The Alice web :interface: is exposed over port 5000 (configurable in your settings) and can be accessed on the IP or local host name for your Alice host, e.g:

`http://192.168.1.101:5000/`

## Pages and their uses

### First timers
If it's the first time you open the web interface page, you will be presented with a connection page. Enter Alice's main unit ip address as well as the port. The port should be `5000` if you haven't changed it manually. By default, those settings are not remembered, privacy first, but the slider will allow the browser to retain the information.

<!--suppress ALL -->
<img style="width: 500px;" alt="Interface welcome" src="/images/webinterface/001.png">

Once the connection is established, you will be presented with a very scarce page where you can only view information but not really interact as you are not yet logged in. The top left corner indicates the page you are currently on, in this case, you should be on the "Widgets" page, with no widgets installed yet.

<img style="width: 500px;" alt="Interface start" src="/images/webinterface/002.png">

Head to "Login" and enter your username and pin code. Remember the pin code you've set in ProjectAlice.yaml? That one, yes, and as user, if you haven't created your own yet, you can use `admin`. Again as privacy comes first, you'll need to toggle the `Remember me` slider for your browser to auto log you in next time.

<img style="width: 500px;" alt="Interface logged in" src="/images/webinterface/003.png">

Now we are talking! Once connected you gain access to many other pages and tools! Let's round them up and quickly present each of them

### Widgets
This page contains by default one sub-page with a "Bio hazard" icon. Widgets are provided by skills you install, if the developer made some. Widgets are tiles that can visually present you relevant information.

Using the `+` icon, you can add a new page. Because your interface is a web page, you can open it on different devices, so maybe you want a "Kitchen" page for your fridge screen, where you can display timer widgets and some shopping list widgets. And in the living room, you'd like to have a TV program widget? This is what those pages are for!

By clicking on the `pen` icon, you'll be presented with different buttons.

#### Theater mode
Puts the actual widget page as full screen. Exit the mode by pressing `esc`

#### Magic mirror mode
Puts the actual widget page as magic mirror mode. Similar to theater mode, but with a totally black background.. Ext the mode by pressing `esc`

#### Settings
Enables the settings cog on the widgets, allowing you to access their own individual settings and allow dragging/resizing/rotating the widgets on the page.

#### Add widgets
Presents you an overlay with widgets you can add to your page. 

#### Remove widgets
Activate the widget deletion mode.


WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP



## FAQ
### My Google credentials are not showing in the admin tab!
- These credentials are marked as sensitive data and are meant to be hidden! You can always paste your new credentials, and they will overwrite the old ones.

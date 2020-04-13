# WIP CONCEPT: Room configuration

If you develop a skill that introduces a new device type, that skill can provide two types of configs.
- The device configuration (e.g. IP, token, secret)
- The room specific configuration (e.g. roborock room ID)

These configurations will be filled in the room interface.

In addition two methods can be implemented:
- getStatusIcon(room)
- toggleMainFunction(room)


#### Databases:

##### rooms:
- UUID
- name
- synonym


##### devicesTypes:
- type name
- ?synonyms
- config (custom json)
- room config (custom json)
- ?hasMainFunction

##### deviceLinks:
- UUID
- room_UUID
- roomConfig (filled json defined by deviceTypes)
- ?onlyUser (user specific devices?)
- ?AIcreated (future: was that entry created because Alice detected a pattern?)

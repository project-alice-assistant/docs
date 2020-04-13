---
sidebarDepth: 3
title: Database Access
---

# Database Access
Alice comes with a built in SQLite database and offers a service provider for accessing the database.
There are methods for creating, modifying and deleting a table built right into the skill constructor 
and there are methods available for adding, removing, modifying and of course reading the content of the database.

## Setting up the database

Define the DB in your program as a dictionary and prepare the name of the database as a variable as best practice:
```python
    _TABLENAME = 'MyReminders'
    _DATABASE = {
        _TABLENAME: [
            'message TEXT NOT NULL',
            'timestamp INTEGER NOT NULL'
        ]
    }
```

Include the database definition into the constructor of your skill:
```python
    def __init__(self):
        super().__init__(databaseSchema=self._DATABASE)
```
Now your databas will be set up with the first load of your skill.
If you later on decide to change the structure of your database, Alice will take care of that as well - just update the `self._DATABASE` variable and Alice will add or remove the correct fields on reload of the skill.

## Writing to your database
Adding an entry to your database is as easy as defining the new entry as dictonary and calling the DatabaseManager:
```python
self.databaseInsert(tableName=self._TABLENAME, values={'message': yourMessage, 'timestamp': yourTimestamp})
```

## Reading from your database
If you want to read entries, you have to know a bit SQL for the selection criteria.
With `myMessage` as a local python variable you can make the following call, to read a database entry with the message stored in `myMessage`:
```python
self.databaseFetch(
            tableName=self._TABLENAME,
            query='SELECT * FROM :__table__ WHERE message = :tmpMessage',
            values={'tmpMessage': myMessage},
            method='all'
        )
```

## Delete from your database
Again some SQL Syntax has to be known.
In this example we delete all entries that are already in the past by comparing them to the python variable `myTimestamp`:
```python
self.DatabaseManager.delete(
                tableName='MyReminders',
                query='DELETE FROM :__table__ WHERE timestamp < :tmpTimestamp',
                values={'tmpTimestamp': myTimestamp},
                callerName=self.name)
         ```

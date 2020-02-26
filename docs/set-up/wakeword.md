# Wakeword

There are two types of wakewords for Alice.
The global wakewords, that work for everybody, and personal wakewords, that only work for one person.

At the moment following global wakewords are supported:
- "Hey Snips"

This is subject to change and will be replaced when multiple wakeword engines are supported.

The personal wakeword is created after the user is registered for Alice.
This can be right after her start for the first user, or when you add in a new user later on.
When you decide to not add a wakeword at the start, you have two ways to add it later on.

### Reset everything:
Delete all memory of Alice and start over with the user creation of the Admin.
This way is only recommended when you just created your instance of Alice.
```Batchfile
sudo rm ~/ProjectAlice/system/database/data.db
sudo systemctl restart Alice
```
### Create a wakeword manually:
Here you will create your own recordings, cut them on any device and insert them into Alice.

1. Record yourself 3 times saying "Hey Alice"
- name the files 0.wav 1.wav and 2.wav
2. Crop the recording as close as possible (cutting of a millisecond should be better than keeping too much silence)
- a free tool for this could be audacity https://www.audacity.de/downloads/
3. move the files to ~/ProjectAlice/trained/hotwords/<username>/
- add your username into the path, it should always be written in lower case!
4. create a file "config.json" in the same folder with following content (again replace <username> with your name, all lower case)
```json
{
    "num_mel_bins": 13,
    "window_type": "povey",
    "kind": "personal",
    "window_size": 10,
    "cepstral_lifter": 22.0,
    "use_energy": false,
    "energy_floor": 0.0,
    "from_mfcc": 1,
    "dtw_ref": 0.22,
    "raw_energy": true,
    "frame_length_ms": 25.0,
    "frame_shift_ms": 10.0,
    "preemphasis_coefficient": 0.97,
    "to_mfcc": 13,
    "sample_rate": 16000,
    "dither": 0.0,
    "mel_low_freq": 20,
    "shift": 10,
    "num_mfcc": 13,
    "band_radius": 10,
    "hotword_key": "<username>"
}
```
5. sudo nano /etc/snips.toml
6. modify the following block to include the path to your wakeword and the sensitivity. Don't forget to replace <username>!
```
[snips-hotword]
model = ["/home/pi/ProjectAlice/trained/hotwords/snips_hotword=0.53","/home/pi/ProjectAlice/trained/hotwords/<username>=0.48"]
```

7. restart Alice
- sudo systemctl restart Alice

# 0x06. Star Wars API
#### `Algorithm` `API` `JavaScript`
![starwars](https://github.com/samuelselasi/alx-interview/assets/85158665/9d2eee0e-a0d3-480a-a36c-30a3027de4c5)

## Requirements
### General
* Allowed editors: vi, vim, emacs
* All your files will be interpreted on Ubuntu 20.04 LTS using node (version 10.14.x)
* All your files should end with a new line
* The first line of all your files should be exactly #!/usr/bin/node
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
* All your files must be executable
* The length of your files will be tested using wc
* You are not allowed to use var

### More Info
#### Install Node 10
```
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
#### Install `semi-standard`
[Documentation](https://github.com/standard/semistandard)
```
$ sudo npm install semistandard --global
```

#### Install `request` module and use it
[Documentation](https://github.com/request/request)
```
$ sudo npm install request --global
$ export NODE_PATH=/usr/lib/node_modules
```

## Tasks

[0. Star Wars Characters](./0-starwars_characters.js)

Write a script that prints all characters of a Star Wars movie:

* The first positional argument passed is the `Movie ID` - example: `3 = “Return of the Jedi”`
* Display one character name per line **in the same order as the `“characters”` list in the `/films/` endpoint**
* You must use the [Star wars API](https://swapi-api.alx-tools.com/)
* You must use the `request` module
```
alexa@ubuntu:~/0x06$ ./0-starwars_characters.js 3
Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Obi-Wan Kenobi
Chewbacca
Han Solo
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Palpatine
Boba Fett
Lando Calrissian
Ackbar
Mon Mothma
Arvel Crynyd
Wicket Systri Warrick
Nien Nunb
Bib Fortuna
alexa@ubuntu:~/0x06$
```
Author - Joseph LARYEA nORTEY
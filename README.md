[comment]: # (Begin README.md)

# Pok&eacute;ROM

<!--
My Quote
========
There isn't a problem when you don't why it's not working,
there's a problem when you don't know why it is working.
-->

**Table of Contents**
<!-- TOC -->

- [Pok&eacute;ROM](#pokeacuterom)
  - [About](#about)
  - [Setup Information](#setup-information)
  - [IMPORTANT!](#important)
  - [Commands](#commands)
  - [Browser Compatibility](#browser-compatibility)
  - [Notes](#notes)

<!-- /TOC -->

## About

This repository is a full-stack web-application. It uses the MEAN stack (MongoDB, Express.JS, Angular 2, Node.JS).

It is exactly what it sounds like, a website that has all of the core Pok&eacute;mon ROMs.

This app is deployed to [heroku][Heroku] at [https://pokerom-broccolini.herokuapp.com][PokeROM Website], and uses [MongoDB Atlas][MongoDB Atlas Cloud] as a cloud database.

## Setup Information

> See [PokeROM-Setup][PokeROM Setup Repo] for more information on how to run this app on your machine.

## IMPORTANT!

Run the `client/state_js_fix.py` file with **Python 3** to fix the `aot compiler` when using `ng serve --aot`.

Download Python 3 here: [https://www.python.org/downloads/](https://www.python.org/downloads/)

## Commands

```bash
# Windows

# Using Git Bash
cd /c/MongoDB/bin && ./mongod --dbpath=../data # mongod
cd /c/MongoDB/bin && ./mongo # mongo shell
cd ~/Projects/PokeROM && npm run dev # api
cd ~/Projects/PokeROM/client && ng serve --open # angular website
cd ~/Projects/PokeROM && git status # git

/c/MongoDB/bin/mongo ~/Projects/PokeROM/database/pkmn-roms.js # load data

/c/MongoDB/bin/mongo "mongodb+srv://pokerom-cluster-voflm.gcp.mongodb.net/pkmn-roms" --username broccolini33188 --password Sullivan # prod mongo shell

# Using Command Prompt
CD C:\MongoDB\bin && mongod.exe --dbpath=..\data REM mongod
CD C:\MongoDB\bin && mongo.exe REM mongo shell
CD %USERPROFILE%\Projects\PokeROM && npm run dev REM api
CD %USERPROFILE%\Projects\PokeROM\client && ng serve --open REM angular website
CD %USERPROFILE%\Projects\PokeROM && git status REM git

C:\MongoDB\bin\mongo.exe %USERPROFILE%\Projects\PokeROM\database\pkmn-roms.js REM load data

C:\MongoDB\bin\mongo.exe "mongodb+srv://pokerom-cluster-voflm.gcp.mongodb.net/pkmn-roms" --username broccolini33188 --password Sullivan REM prod mongo shell

# OSX
~/mongodb/bin/mongod # mongod
~/mongodb/bin/mongo # mongo shell
cd ~/Projects/PokeROM && npm run dev # api
cd ~/Projects/PokeROM/client && ng serve --open # angular website
cd ~/Projects/PokeROM && git status # git

~/mongodb/bin/mongo ~/Projects/PokeROM/database/pkmn-roms.js # load data

~/mongodb/bin/mongo "mongodb+srv://pokerom-cluster-voflm.gcp.mongodb.net/pkmn-roms" --username broccolini33188 --password Sullivan # prod mongo shell

# to kill mongod process
# ----------------------
# $ sudo lsof -iTCP -sTCP:LISTEN -n -P
# $ sudo kill <mongod_command_pid>

# MongoDB Compass
mongodb+srv://broccolini33188:Sullivan@pokerom-cluster-voflm.gcp.mongodb.net/test

# Heroku
heroku config:set PROD_MONGODB=mongodb+srv://broccolini33188:Sullivan@pokerom-cluster-voflm.gcp.mongodb.net/pkmn-roms?retryWrites=true&w=majority

heroku logs --tail
git push heroku master

# clear build cache
heroku plugins:install heroku-repo
heroku repo:purge_cache -a pokerom-broccolini
git commit --allow-empty -am "Purge cache"
heroku git:remote -a pokerom-broccolini
git push heroku master
```

> Source Code Pro Fonts: [download][Source Code Pro Fonts Download]

## Browser Compatibility

|   Browser       | Chrome    | Opera    | Safari      | Firefox    | Edge    | IE           |
|-----------------|-----------|----------|-------------|------------|---------|--------------|
| **Min Version** | Chrome 58 | Opera 44 | Safari 10.1 | Firefox 54 | Edge 16 | Incompatible |

## Notes

1. If on Windows, install and use **[Git Bash](https://git-scm.com/ "Git SCM")**.
2. Languages Used:
  * HTML
  * CSS
  * JavaScript
  * SCSS
  * TypeScript
  * JSON
  * YAML
  * Shell/Bash
  * Batch
  * Python
  * SVG
  * Markdown

--------

> _**Enjoy!**_

[Heroku]: <https://www.heroku.com/> "Heroku Website"
[PokeROM Website]: <https://pokerom-broccolini.herokuapp.com> "https://pokerom-broccolini.herokuapp.com"
[MongoDB Atlas Cloud]: <https://cloud.mongodb.com> "MongoDB Atlas Cloud Document DB"
[PokeROM Setup Repo]: <https://github.com/bag33188/PokeROM-Setup> "PokeROM-Setup Github Repository"
[Source Code Pro Fonts Download]: <https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106790&authkey=AGxEetnlDbFwcBA> "Source Code Pro Fonts Download (Direct Download)"

[comment]: # "End README.md"

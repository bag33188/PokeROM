[comment]: # (Begin README.md)

# Pok&eacute;ROM

<!--
My Quote
========
There isn't a problem when you don't why it's not working,
there's a problem when you don't know why it is working.
-->

<!-- jQuery('#your_element_id_here').css('font-size'); -->

**Table of Contents**
<!-- TOC -->

- [Pok&eacute;ROM](#pokeacuterom)
  - [About](#about)
  - [Setup Information](#setup-information)
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

## Commands

```bash
# Windows

# Using Git Bash
cd /c/MongoDB/bin && ./mongod.exe --dbpath=../data
cd /c/MongoDB/bin && ./mongo.exe
cd ~/Projects/PokeROM && npm run dev
cd ~/Projects/PokeROM/client && ng serve --open
cd ~/Projects/PokeROM && git status

/c/MongoDB/bin/mongo ~/Projects/PokeROM/database/pkmn-roms.js

/c/MongoDB/bin/mongo "mongodb+srv://pokerom-ng2of.gcp.mongodb.net/pkmn-roms" --username bag33188 --password Sullivan

# Not using git Bash
CD C:\MongoDB\bin && mongod.exe --dbpath=..\data
CD C:\MongoDB\bin && mongo.exe
CD %USERPROFILE%\Projects\PokeROM && npm run dev
CD %USERPROFILE%\Projects\PokeROM\client && ng serve --open
CD %USERPROFILE%\Projects\PokeROM && git status

C:\MongoDB\bin\mongo.exe %USERPROFILE%\Projects\PokeROM\database\pkmn-roms.js

C:\MongoDB\bin\mongo.exe "mongodb+srv://pokerom-ng2of.gcp.mongodb.net/pkmn-roms" --username bag33188 --password Sullivan

# OSX
~/mongodb/bin/mongod
~/mongodb/bin/mongo
cd ~/Projects/PokeROM && npm run dev
cd ~/Projects/PokeROM/client && ng serve --open
cd ~/Projects/PokeROM && git status

~/mongodb/bin/mongo ~/Projects/PokeROM/database/pkmn-roms.js

~/mongodb/bin/mongo "mongodb+srv://pokerom-cluster-ng2of.mongodb.net/pkmn-roms" --username bag33188 --password Sullivan

# to kill mongod process
# ----------------------
# $ sudo lsof -iTCP -sTCP:LISTEN -n -P
# $ sudo kill <mongod_command_pid>

# Heroku
heroku config:set PROD_MONGODB=mongodb+srv://bag33188:Sullivan@pokerom-ng2of.gcp.mongodb.net/pkmn-roms?retryWrites=true&w=majority&ssl=true

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

1. If on Windows, install Git Bash.
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

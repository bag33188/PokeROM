[comment]: # 'Begin README.md'

# Pok&eacute;ROM

**Table of Contents**

<!-- TOC -->

- [Pok&eacute;ROM](#pokeacuterom)
  - [About](#about)
  - [IMPORTANT!](#important)
  - [Commands](#commands)
    - [Heroku](#heroku)
    - [Angular](#angular)
    - [ExpressJS](#expressjs)
    - [MongoDB](#mongodb)
  - [Browser Compatibility](#browser-compatibility)
  - [Notes](#notes)

<!-- /TOC -->

## About

This repository is a full-stack web-application. It uses the MEAN stack (MongoDB, Express.JS, Angular 2, Node.JS).

It is exactly what it sounds like, a website that has all of the core Pok&eacute;mon ROMs.

This app is deployed to [heroku][heroku] at [https://pokerom-broccolini.herokuapp.com][pokerom website], and uses [MongoDB Atlas][mongodb atlas cloud] as a cloud database.

## IMPORTANT!

Run this command: `cd client && npm run fix-aot-bug`.

This will fix an issue with Angular's AOT Compiler when using `ng serve --aot`.

**You will need Python 3 installed and added to your path!**

Download Python 3 here: [https://www.python.org/downloads/](https://www.python.org/downloads/)

## Commands

### Angular

```bash
npx ivy-ngcc # compile to ivy
npm run client # run dev server
```

### ExpressJS

```bash
npm run api # run dev api
npm run pack # package application
```

### MongoDB

```bash
npm run db-win # run dev db on windows
npm run db-osx # run dev db on mac
npm run db-shell # run dev db shell
npm run db-prod # run prod db shell
npm run load-data # load default data set into local db

# to kill mongod process
# ----------------------
sudo lsof -iTCP -sTCP:LISTEN -n -P
sudo kill <mongod_command_pid>
```

## Browser Compatibility

| Browser         | Chrome    | Opera    | Safari      | Firefox    | Edge    | IE           |
| --------------- | --------- | -------- | ----------- | ---------- | ------- | ------------ |
| **Min Version** | Chrome 58 | Opera 44 | Safari 10.1 | Firefox 54 | Edge 16 | Incompatible |

## Notes

1. If on Windows, install and use **[Git Bash](https://git-scm.com/ 'Git SCM')**.
2. Languages Used:

    - HTML
    - CSS
    - JavaScript
    - SCSS
    - TypeScript
    - JSON
    - YAML
    - XML
    - Shell/Bash
    - Batch
    - Python (3)
    - Ruby
    - SVG
    - Markdown

3. Source Code Pro Fonts: [download][source code pro fonts download]

[heroku]: https://www.heroku.com/ 'Heroku Website'
[pokerom website]: https://pokerom-broccolini.herokuapp.com 'https://pokerom-broccolini.herokuapp.com'
[mongodb atlas cloud]: https://cloud.mongodb.com 'MongoDB Atlas Cloud Document DB'
[pokerom setup repo]: https://github.com/bag33188/PokeROM-Setup 'PokeROM-Setup Github Repository'
[source code pro fonts download]: https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106790&authkey=AGxEetnlDbFwcBA 'Source Code Pro Fonts Download (Direct Download)'

---

> _**Enjoy!**_

[comment]: # 'End README.md'

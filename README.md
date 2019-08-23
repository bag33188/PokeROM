[comment]: # 'Begin README.md'

# Pok&eacute;ROM

**Table of Contents**

<!-- TOC -->

- [Pok&eacute;ROM](#pokeacuterom)
  - [About](#about)
  - [IMPORTANT!](#important)
  - [Commands](#commands)
    - [Angular](#angular)
    - [ExpressJS](#expressjs)
    - [MongoDB](#mongodb)
  - [Browser Compatibility](#browser-compatibility)
  - [Notes](#notes)

<!-- /TOC -->

## About

This repository is a full-stack web-application. It uses the MEAN stack (MongoDB, Express.JS, Angular 2, Node.JS).

It is exactly what it sounds like, a website that has all of the core Pok&eacute;mon ROMs.

This app is deployed at [pokerom.dev](http://pokerom.dev).

## IMPORTANT!

Run this command: `cd client && npm run fix-aot-bug`.

This will fix an issue with Angular's AOT Compiler when using `ng serve --aot`.

**You will need Python 3 installed and added to your path!**

Download Python 3 here: [https://www.python.org/downloads/][python3-download]

## Commands

### Angular

```shell script
npx ivy-ngcc # compile to ivy
npm run client # run dev server
```

### ExpressJS

```shell script
npm run api # run dev api
npm run pack # package application
```

### MongoDB

```shell script
npm run db-win # run dev db on windows
npm run db-osx # run dev db on mac
npm run db-shell # run dev db shell
npm run db-prod # run prod db shell
npm run load-data # load data into db (production only)

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

1. If on Windows, install and use **[Git Bash][git-scm]**.
2. Languages Used (_14 total_):

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

3. Source Code Pro Fonts: [download][source-code-pro-fonts-download]

[python3-download]: <https://www.python.org/downloads/> 'Download Python 3'
[git-scm]: <https://git-scm.com> 'Git Version Control Website'
[source-code-pro-fonts-download]: <https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106790&authkey=AGxEetnlDbFwcBA> 'Source Code Pro Fonts Download (Direct Download)'

---

> _**Enjoy!**_

[comment]: # 'End README.md'

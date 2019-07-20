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
  - [Visual Studio Code](#visual-studio-code)
    - [Code Workspace File](#code-workspace-file)
    - [Extensions](#extensions)
  - [Diagrams](#diagrams)
  - [Browser Compatibility](#browser-compatibility)
  - [Notes](#notes)

<!-- /TOC -->

## About

This repository is a full-stack web-application. It uses the MEAN stack (MongoDB, Express.JS, Angular 2, Node.JS).

It is exactly what it sounds like, a website that has all of the core Pok&eacute;mon ROMs.

This app is deployed to [heroku](https://www.heroku.com/ "Heroku Website") at [https://pokerom-broccolini.herokuapp.com](https://pokerom-broccolini.herokuapp.com "https://pokerom-broccolini.herokuapp.com"), and uses [MongoDB Atlas](https://cloud.mongodb.com "MongoDB Atlas Cloud Document DB") as a cloud database.

## Setup Information

> See [PokeROM-Setup](https://github.com/bag33188/PokeROM-Setup "PokeROM-Setup Github Repository") for more information on how to run this app on your machine.

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

# Heroku
heroku config:set PROD_MONGODB=mongodb+srv://bag33188:Sullivan@pokerom-ng2of.gcp.mongodb.net/pkmn-roms?retryWrites=true&w=majority&ssl=true

heroku logs --tail
git push heroku master

# clear build cache
heroku plugins:install heroku-repo
heroku repo:purge_cache -a pokerom-broccolini
git commit --allow-empty -m "Purge cache"
git push heroku master
```

## Visual Studio Code

Download Link: [https://code.visualstudio.com/download](https://code.visualstudio.com/download "VC Code Download Link").

### Code Workspace File

**File Name**: `pokerom.code-workspace`

**Data**:
```json
{
  "folders": [
    {
      "name": "PokeROM",
      "path": "."
    }
  ],
  "settings": {
    "files.exclude": {
      "**/.git": true,
      "**/.svn": true,
      "**/.hg": true,
      "**/CVS": true,
      "**/.DS_Store": true,
      "**/Thumbs.db": true,
      "**/_MACOSX": true,
      "*.code-workspace": false
    },
    "editor.wordWrap": "on",
    "editor.lineNumbers": "on",
    "editor.autoClosingBrackets": "always",
    "editor.highlightActiveIndentGuide": true,
    "editor.tabSize": 2,
    "editor.fontFamily": "Source Code Pro", // Consolas, 'Courier New', monospace
    "workbench.colorTheme": "Default Dark+", // "Sublime Material Theme - Dark",
    "workbench.iconTheme": "material-icon-theme",
    "sasslint.configFile": "C:\\Users\\<username>\\Projects\\PokeROM\\client\\.sass-lint.yml",
    // "sassLint.configFile": "/Users/<username>/Projects/PokeROM/client/.sass-lint.yml"
    "sasslint.enable": true,
    "sasslint.resolvePathsRelativeToConfig": true,
    "prettier.endOfLine": "lf",
    "files.eol": "\n",
    "workbench.settings.editor": "json",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    // "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    "peacock.affectActivityBar": true,
    "peacock.affectStatusBar": true,
    "peacock.affectTitleBar": false,
    "peacock.keepBadgeColor": false,
    "peacock.keepForegroundColor": false,
    "editor.autoIndent": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": false
    },
    "editor.codeLens": false,
    "editor.cursorBlinking": "solid",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.cursorStyle": "line",
    "editor.fontLigatures": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": false,
    "editor.formatOnSave": true,
    "editor.minimap.enabled": false,
    "editor.renderWhitespace": "none",
    "editor.tabCompletion": "on",
    "peacock.favoriteColors": [
      {
        "name": "Angular Red",
        "value": "#b52e31"
      },
      {
        "name": "Auth0 Orange",
        "value": "#eb5424"
      },
      {
        "name": "Azure Blue",
        "value": "#007fff"
      },
      {
        "name": "Gatsby Purple",
        "value": "#639"
      },
      {
        "name": "JavaScript Yellow",
        "value": "#f9e64f"
      },
      {
        "name": "Mandalorian Blue",
        "value": "#1857a4"
      },
      {
        "name": "Node Green",
        "value": "#215732"
      },
      {
        "name": "React Blue",
        "value": "#00b3e6"
      },
      {
        "name": "Something Different",
        "value": "#832561"
      },
      {
        "name": "Vue Green",
        "value": "#42b883"
      }
    ]
  }
}
```

> Source Code Pro Fonts: [download](https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106790&authkey=AGxEetnlDbFwcBA "Source Code Pro Fonts Download (Direct Download)")

### Extensions

* [Bracket Pair Colorizer 2][]
* [EditorConfig for VS Code][]
* [heroku-cli][]
* [Live Server][]
* [Markdown TOC][]
* [Material Icon Theme][]
* [Prettier - Code formatter][]
* [Sass][]
* [Sass Lint][]
* [TSLint][]
* [Sublime Material Theme Dark][]
* [Angular Essentials][]

[Bracket Pair Colorizer 2]: <https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2> "Bracket Pair Colorizer 2 VS Code Extension"
[EditorConfig for VS Code]: <https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig> "EditorConfig for VS Code VS Code Extension"
[heroku-cli]: <https://marketplace.visualstudio.com/items?itemName=pkosta2005.heroku-command> "Live Server VS Code Extension"
[Live Server]: <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer> "Live Server VS Code Extension"
[Markdown TOC]: <https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc> "Markdown TOC Extension"
[Material Icon Theme]: <https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme> "Material Icon Theme VS Code Extension"
[Prettier - Code formatter]: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode> "Prettier - Code formatter VS Code Extension"
[Sass]: <https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented> "Sass VS Code Extension"
[Sass Lint]: <https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint> "Sass Lint VS Code Extension"
[TSLint]: <https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin> "TSLint VC Code Extension"
[Sublime Material Theme Dark]: <https://marketplace.visualstudio.com/items?itemName=jprestidge.theme-material-theme> "Sublime Material Theme Dark VS Code Extension"
[Angular Essentials]: <https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials> "Angular Essentials VS Code Extension"

## Diagrams

To open the `.drawio` files, use the [draw.io](https://about.draw.io/integrations/#integrations_offline "draw.io desktop integrations") app.

## Browser Compatibility

|   Browser       | Chrome    | Opera    | Safari      | Firefox    | Edge    | IE            |
|-----------------|-----------|----------|-------------|------------|---------|---------------|
| **Min Version** | Chrome 58 | Opera 44 | Safari 10.1 | Firefox 54 | Edge 16 | Incompatibile |

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

[comment]: # "End README.md"

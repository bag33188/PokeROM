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
  - [Setup Information](#setup-information)
  - [Commands](#commands)
  - [Visual Studio Code](#visual-studio-code)
    - [Code Workspace File](#code-workspace-file)
    - [Extensions](#extensions)

<!-- /TOC -->

## Setup Information

> See [PokeROM-Setup](https://github.com/bag33188/PokeROM-Setup "PokeROM-Setup Github Repository") for more information on how to run this app on your machine.

## Commands

```bash
# Windows

# Using Git Bash
cd C:/MongoDB/bin && ./mongod.exe --dbpath=../data
cd C:/MongoDB/bin && ./mongo.exe
cd ~/WebstormProjects/PokeROM && npm run app
cd ~/WebstormProjects/PokeROM/client && ng serve
cd ~/WebstormProjects/PokeROM

C:/MongoDB/bin/mongo ~/WebstormProjects/PokeROM/database/pkmn-roms.js

C:/MongoDB/bin/mongo "mongodb+srv://pokerom-cluster-ng2of.mongodb.net/pkmn-roms" --username bag33188

# Not using git Bash
CD C:\WebstormProjects\bin && mongod.exe --dbpath=..\data
CD C:\WebstormProjects\bin && mongo.exe
CD %USERPROFILE%\WebstormProjects\PokeROM && npm run app
CD %USERPROFILE%\WebstormProjects\PokeROM\client && ng serve
CD %USERPROFILE%\WebstormProjects\PokeROM

C:\MongoDB\bin\mongo.exe %USERPROFILE%\WebstormProjects\PokeROM\database\pkmn-roms.js

C:\MongoDB\bin\mongo.exe "mongodb+srv://pokerom-cluster-ng2of.mongodb.net/pkmn-roms" --username bag33188

# OSX
~/mongodb/bin/mongod
~/mongodb/bin/mongo
cd ~/Projects/PokeROM && npm run app
cd ~/Projects/PokeROM/client && ng serve
cd ~/Projects/PokeROM

~/mongodb/bin/mongo ~/Projects/PokeROM/database/pkmn-roms.js

~/mongodb/bin/mongo "mongodb+srv://pokerom-cluster-ng2of.mongodb.net/pkmn-roms" --username bag33188
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
    "workbench.colorTheme": "Default Dark+",
    "workbench.iconTheme": "material-icon-theme",
    "sasslint.configFile": "C:\\Users\\bglat\\Projects\\PokeROM\\client\\.sass-lint.yml",
    "sasslint.enable": true,
    "sasslint.resolvePathsRelativeToConfig": true,
    "prettier.endOfLine": "lf",
    "files.eol": "\n",
    "workbench.settings.editor": "json",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
    // "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
  }
}
```

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

[comment]: # "End README.md"

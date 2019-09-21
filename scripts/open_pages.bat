@ECHO OFF

:: =================
:: Open Pages Script
:: =================

REM.||(
  Windows Batchfile
  -----------------
  This script cannot be run on a Unix machine.
  Batch is a scripting language invented for DOS.
  It has no compatibility with OSX or Linux.
  This file can only be run on a Windows machine.
)

:OPEN_PAGES
  REM VPS Control Panel
  START "" https://vpspanel.web-hosting.com/control.php?_v=84y2q2y2d4s254b4m523c4
  REM WHM
  START "" https://server1.pokerom.dev:2087
  REM cPanel
  START "" https://server1.pokerom.dev:2083
  REM Namecheap
  START "" https://www.namecheap.com/
  REM Webdisk
  START "" https://pokerom.dev:2078
  REM Private Email
  START "" https://privateemail.com/appsuite/#!!&app=io.ox/mail&folder=default0/INBOX
  REM Official PokeROM Website
  START "" https://www.pokerom.dev
  REM Go up one directory
  CD ..
EXIT /B 0

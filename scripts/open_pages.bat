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

:: RUN THIS PROGRAM IN COMMAND PROMPT (cmd.exe) ONLY!

:OPEN_PAGES
  REM VPS Control Panel
  START "VPS Control Panel" chrome.exe "https://vpspanel.web-hosting.com/control.php?_v=84y2q2y2d4s254b4m523c4"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM WHM
  START "WHM" chrome.exe "https://server1.pokerom.dev:2087"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM cPanel
  START "cPanel" chrome.exe "https://server1.pokerom.dev:2083"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM Namecheap
  START "Namecheap" chrome.exe "https://ap.www.namecheap.com/domains/domaincontrolpanel/pokerom.dev/domain"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM PM2
  START "PM2" chrome.exe "https://app.pm2.io/#/r/8udbwnn9hvtz59p"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM Github
  START "Github" chrome.exe "https://github.com/bag33188/PokeROM"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM Private Email
  START "Private Email" chrome.exe "https://privateemail.com/appsuite/#!!&app=io.ox/mail&folder=default0/INBOX"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM Official PokeROM Website
  START "Official PokeROM Website" chrome.exe "https://www.pokerom.dev"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM Go up one directory
  CD ..
EXIT /B 0

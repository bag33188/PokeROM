@ECHO OFF

:: =================
:: Open Repos Script
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

:OPEN_REPOS
  REM Main PokeROM Github Repository
  START "Main PokeROM Github Repository" chrome.exe "https://github.com/bag33188/PokeROM"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM Website Loading Bar NPM Package repository
  START "Website Loading Bar NPM Package repository" chrome.exe "https://github.com/bag33188/progressive-loading-bar"
  REM Sleep for 1 second
  TIMEOUT /T 1
  REM Go up one directory
  CD ..
EXIT /B 0

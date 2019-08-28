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

:OPEN_REPOS
  REM Main PokeROM Github Repository
  START "" https://github.com/bag33188/PokeROM
  REM Bcrypt.JS Password Hash Generator repository
  START "" https://github.com/bag33188/pw-hash-gen
  REM Website Loading Bar NPM Package repository
  START "" https://github.com/bag33188/progressive-loading-bar
  REM Go up one directory
  CD ..
EXIT /B 0

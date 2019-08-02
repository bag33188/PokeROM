@ECHO OFF

:: ====================
:: Open Websites Script
:: ====================

REM.||(
  Windows Batchfile
  -----------------
  This script cannot be run on a Unix machine.
  Batch is a scripting language invented for DOS.
  It has no compatibility with OSX or Linux.
  This file can only be run on a Windows machine.
)

REM :: MPWC&_};(U9@'@7qE5^^3>+g\V(^nBzL*4Mu^f+&>WPhEe9v#4W:xq~DT7+RL-+zd:phx]4=

:OPEN_SITES
  REM PokeROM Github page
  START "" https://github.com/bag33188/PokeROM
  REM PokeROM Setup Github page
  START "" https://github.com/bag33188/PokeROM-Setup
  REM PokeROM Website (Heroku App)
  START "" https://pokerom-broccolini.herokuapp.com
  REM MongoDB Atlas Cloud
  START "" https://cloud.mongodb.com
  REM Go up one directory
  CD ..
EXIT /B 0

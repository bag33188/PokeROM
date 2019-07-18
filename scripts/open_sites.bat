@ECHO OFF

:OPEN_SITES
  REM PokeROM Github page
  START "" https://github.com/bag33188/PokeROM
  REM PokeROM Setup Github page
  START "" https://github.com/bag33188/PokeROM-Setup
  REM PokeROM Website (Heroku App)
  START "" https://pokerom-broccolini.herokuapp.com
  REM MongoDB Atlas Cloud
  START "" https://cloud.mongodb.com
  :: Go up one directory
  CD ..
EXIT /B 0

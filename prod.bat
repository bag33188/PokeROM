@ECHO OFF

:PRODUCTION
  CD client
  ECHO Doing production build...
  ECHO.
  rem ng build --prod
  CD ..\public
  ECHO Deleting files
  ECHO.
  IF EXIST *.js (
    DEL *.js
  )
  IF EXIST *.css (
    DEL *.css
  )
  IF EXIST .\assets (
    RMDIR /Q /S assets
  )
  IF EXIST *.html (
    DEL *.html
  )
  IF EXIST *.txt (
    DEL *.txt
  )
  IF EXIST *.ico (
    DEL *.ico
  )
  CD ..
  ECHO Moving files...
  ECHO.
  MOVE client\dist\pokerom\*.js public
  MOVE client\dist\pokerom\*.css public
  MOVE client\dist\pokerom\*.html public
  MOVE client\dist\pokerom\*.ico public
  MOVE client\dist\pokerom\*.txt public
  MOVE client\dist\pokerom\assets public
  ECHO Deleting dist folder...
  ECHO.
  RMDIR /Q /S client\dist
  git status
  SET /P files="Which files do you want to add? "
  git add %files%
  SET /P commit_msg="Enter commit message: "
  git commit -m %commit_msg%
  git push
  PAUSE
EXIT /B 0

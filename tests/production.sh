#!/bin/bash

cd ../client
ng build --prod && (
  cd ../public
  if [ test -f "*.html" ]; then
    rm *.html
  fi
  if [ test -f "*.css" ]; then
    rm *.css
  fi
  if [ test -f "*.js" ]; then
    rm *.js
  fi
  if [ test -f "*.ico" ]; then
    rm *.ico
  fi
  if [ test -f "*.txt" ]; then
    rm *.txt
  fi
  if [ -d "$DIRECTORY" ]; then
    rm -rf assets
  fi
  mv ../client/dist/pokerom/*.* ./
  mv ../client/dist/pokerom/assets ./
  cd ..
  while [ true ]
  do
    git status
    read -p "Add files: " files
    git add $files
    read -p "Commit Message: " cm
    git commit -m "$cm"
    read -p "Done? (y/n) " isDone
    if [[ isDone == 'y' ]]; then
      break
    else
      continue
    fi
  done
  git push
) && read -p

#!/bin/bash

cd ../client
ng build --prod && (
  cd ../public
  if [ -f "*.html" ]; then
    rm *.html
  fi
  if [ -f "*.css" ]; then
    rm *.css
  fi
  if [ -f "*.js" ]; then
    rm *.js
  fi
  if [ -f "*.ico" ]; then
    rm *.ico
  fi
  if [ -f "*.txt" ]; then
    rm *.txt
  fi
  if [ -d "assets" ]; then
    rm -rf assets
  fi
  mv ../client/dist/pokerom/*.* ./
  mv ../client/dist/pokerom/assets ./
  cd ..
  rm -rf client/dist
  while [ true ]
  do
    git status
    read -p "Add files: " files
    git add $files
    read -p "Commit Message: " cm
    git commit -m "$cm"
    read -p "Done? (y/n) " is_done
    if [[ $is_done == 'y' ]]; then
      break
    else
      continue
    fi
  done
  git push
) && read -n 1 -s -r -p "Press any key to exit" && echo -e "\r\n"

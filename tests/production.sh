#!/bin/bash

production() {
  cd ../client
  ng build --prod && (
    cd ../public
    rm *html
    rm *css
    rm *js
    rm *map
    rm *ico
    rm *txt
    rm -rf assets
    mv ../client/dist/pokerom/*.* ./
    mv ../client/dist/pokerom/assets ./
    cd ..
    rm -rf client/dist
    while [ true ]
    do
      git status
      read -p "Add files: " files
      git add $files
      read -p "Commit Message: " commit_msg
      git commit -m "$commit_msg"
      read -p "Done? (y/n) " is_done
      if [[ $is_done == 'y' ]]; then
        break
      else
        continue
      fi
    done
    git push
    git push heroku master
  ) && echo -e "\r\n" && read -n 1 -s -r -p "Press any key to exit" && echo -e "\r\n" 
}
production

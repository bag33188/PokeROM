#!/usr/bin/env bash

# =================
# Production Script
# =================

<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./production.sh

set current permissions
$ cd scripts
$ chmod 755 ./production.sh
--MULTILINE-COMMENT--

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
    rm *bak
    rm *bak1
    rm *json
    rm *xml
    rm -rf assets
    mv ../client/dist/pokerom/*.* ./
    mv ../client/dist/pokerom/assets ./
    if [[ "$OSTYPE" == "darwin"* ]]; then
      python3 ../scripts/move_script_tags.py
      python3 ../scripts/insert_comment.py
      python3 ../scripts/add_browserconfig.py
    else
      python ../scripts/move_script_tags.py
      python ../scripts/insert_comment.py
      python ../scripts/add_browserconfig.py
    fi
    cd ..
    rm -rf client/dist
    valid=0
    while [[ true ]]; do
      git status
      read -p "Add files: " files
      git add ${files}
      read -p "Commit Message: " commit_msg
      git commit -m "$commit_msg"
      while [[ true ]]; do
        read -p "Done? (y/n) " is_done
        if [[ ${is_done} == 'y' ]]; then
          valid=1
          break
        elif [[ ${is_done} == 'n' ]]; then
          valid=2
          break
        else
          echo "Invalid option"
          continue
        fi
      done
      case ${valid} in
        1 )
          break ;;
        2 )
          continue ;;
        * )
          continue ;;
     esac
    done
    git push
    git push heroku master
  ) && printf "\r\n" && read -n 1 -s -r -p "Done! Press any key to exit" && echo -e "\r\n"
}

production

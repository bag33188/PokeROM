#!/usr/bin/env bash

# =================
# Production Script
# =================

# shellcheck disable=SC2188
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
  cd ../client || return
  ng build --prod && (
    cd ../public
    rm -rf assets
    # shellcheck disable=SC2035
    rm *
    mv ../client/dist/pokerom/*.* ./
    mv ../client/dist/pokerom/assets ./
    printf "\n"
    if [[ "$OSTYPE" == "darwin"* ]]; then
      python3 ../scripts/move_script_tags.py
      python3 ../scripts/insert_comment.py
    else
      python ../scripts/move_script_tags.py
      python ../scripts/insert_comment.py
    fi
    cd ..
    rm -rf client/dist
    valid=0
    while true; do
      git status
      read -r -p "Add files: " files
      git add "${files}"
      read -r -p "Commit Message: " commit_msg
      git commit -m "$commit_msg"
      while true; do
        read -r -p "Done? (y/n) " is_done
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
  ) && echo -e "\r\n" && read -n 1 -s -r -p "Done! Press any key to exit" && echo -e "\r\n"
}

production

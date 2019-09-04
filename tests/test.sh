#!/usr/bin/bash

# ===========
# Test Script
# ===========

<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./test.sh

set current permissions
$ cd scripts
$ chmod 755 ./test.sh
--MULTILINE-COMMENT--

test() {
  echo -e "Endpoints\n---------\n\n1. Natures\n2. Options\n3. Ratings\n4. Roms\n5. Users\n6. Version\n7. Exit\n\n"
  while true; do
    read -r -p 'Which endpoint collection would you like to test? ' endpoint
    if [[ $endpoint == 1 ]]; then
      bash ./natures.sh
    elif [[ $endpoint == 2 ]]; then
      bash ./options.sh
    elif [[ $endpoint == 3 ]]; then
      bash ./ratings.sh
    elif [[ $endpoint == 4 ]]; then
      bash ./roms.sh
    elif [[ $endpoint == 5 ]]; then
      bash ./users.sh
    elif [[ $endpoint == 6 ]]; then
      bash ./version.sh
    elif [[ $endpoint == 7 ]]; then
      break
    else
      echo 'Invalid option.'
      continue
    fi
  done
  cd ..
  printf "\n"
}

test

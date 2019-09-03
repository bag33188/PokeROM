#!/usr/bin/bash

test() {
  echo -e "Endpoints\n---------\n\n1. Natures\n2. Options\n3. Ratings\n4. Roms\n5. Users\n6. Version\n\n"
  read -r -p 'Which endpoint collection would you like to test? ' endpoint
  if [[ $endpoint == 1 ]]; then
    bash ./natures.sh
    cd ..
  elif [[ $endpoint == 2 ]]; then
    bash ./options.sh
    cd ..
  elif [[ $endpoint == 3 ]]; then
    bash ./ratings.sh
    cd ..
  elif [[ $endpoint == 4 ]]; then
    bash ./roms.sh
    cd ..
  elif [[ $endpoint == 5 ]]; then
    bash ./users.sh
    cd ..
  elif [[ $endpoint == 6 ]]; then
    bash ./version.sh
    cd ..
  fi
  printf "\n"
}

test

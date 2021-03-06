#!/bin/bash

# ====================
# Options Backend test
# ====================

<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./options.sh

set current permissions
$ cd scripts
$ chmod 755 ./options.sh
--MULTILINE-COMMENT--

options_test() {
  echo "Testing the /options endpoint..."
  printf "\r\n"
  options() {
    echo "Testing OPTIONS: /options"
    printf "\r\n"
    curl -i -v -X OPTIONS "http://localhost:8080/options"
    printf "\r\n\r\n"
  }
  options
}

options_test

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

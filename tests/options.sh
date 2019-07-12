#!/bin/bash

# ====================
# Options Backend test
# ====================

<< --MULTILINE-COMMENT--
permissions (unix)
------------------

add to current permissions
$ chmod +x ./options.sh

set current permissions
$ chmod 755 ./options.sh
--MULTILINE-COMMENT--

optionsTest() {
  echo "Testing the /options endpoint..."
  printf "\r\n"
  options() {
    echo "Testing OPTIONS: /options"
    printf "\r\n"
    curl -i -v -X OPTIONS "http://localhost:5000/options"
    printf "\r\n\r\n"
  }
  options
}
optionsTest

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

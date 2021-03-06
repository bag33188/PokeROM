#!/bin/bash

# ================
# Version API test
# ================

<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./version.sh

set current permissions
$ cd scripts
$ chmod 755 ./version.sh
--MULTILINE-COMMENT--

version_test() {
  echo "Testing the /api/version endpoint..."
  printf "\r\n"
  get() {
    echo "Testing GET: /api/version"
    printf "\r\n"
    curl -i -X GET "http://localhost:8080/api/version" -H  "accept: application/json"
    printf "\r\n\r\n"
  }
  get
}

version_test

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

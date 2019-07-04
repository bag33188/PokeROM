#!/bin/bash

# ================
# Version API test
# ================

<< --MULTILINE-COMMENT--
permissions (unix)
------------------

add to current permissions
$ chmod +x ./version.sh

set current permissions
$ chmod 755 ./version.sh
--MULTILINE-COMMENT--

versionTest() {
  echo "Testing the /api/version endpoint..."
  printf "\r\n"
  get() {
    echo "Testing GET: /api/version"
    printf "\r\n"
    curl -i -X GET "http://localhost:5000/api/version" -H  "accept: application/json"
    printf "\r\n\r\n"
  }
  get
}
versionTest

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

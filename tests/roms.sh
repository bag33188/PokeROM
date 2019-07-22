#!/bin/bash

# ==============
# ROMs API tests
# ==============

<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./roms.sh

set current permissions
$ cd scripts
$ chmod 755 ./roms.sh
--MULTILINE-COMMENT--

rom_tests() {
  echo "Testing the /api/roms endpoints..."
  printf "\r\n"
  while [ true ]
  do 
    echo -e "What would you like to test?\r\n\r\n1: GET /api/roms\r\n2: GET /api/roms/:id\r\n3: POST /api/roms\r\n4: PUT /api/roms/:id\r\n5: PATCH /api/roms/:id\r\n6: DELETE /api/roms/:id\r\n7: DELETE /api/roms\r\n8: HEAD /api/roms\r\n9: HEAD /api/roms/:id\r\n10: OPTIONS /api/roms\r\n11: POST /api/roms/core\r\n12: Exit\r\n\r\n"
    read -p 'Enter option here: ' rqst
    printf "\r\n"
    if [[ $rqst == '12' ]]; then 
      break
    fi
    read -p "Enter JSON Web Token: " jwt
    printf "\r\n"
    get() {
      get_all() {
        echo "Testing GET: /api/roms"
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/roms" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '1' ]]; then
        get_all
      fi
      get_single() {
        echo "Testing GET: /api/roms/:id"
        printf "\r\n"
        read -p "Enter ROM ID: " id
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '2' ]]; then
        get_single
      fi
    }
    if [[ $rqst == '1' || $rqst == '2' ]]; then
      get
    fi
    post() {
      echo "Testing POST: /api/roms"
      printf "\r\n"
      read -p "Enter ROM Data (escape quotes): " data
      printf "\r\n"
      curl -i -X POST "http://localhost:5000/api/roms" -H  "accept: application/json" -H  "Authorization: $jwt" -H  "Content-Type: application/json" -d "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '3' ]]; then
      post
    fi
    put() {
      echo "Testing PUT: /api/roms/:id"
      printf "\r\n"
      read -p "Enter ROM ID: " id
      printf "\r\n"
      read -p "Enter ROM Data (escape quotes): " data
      printf "\r\n"
      curl -i -X PUT "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt" -H  "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '4' ]]; then
      put
    fi
    patch() {
      echo "Testing PATCH: /api/roms/:id"
      printf "\r\n"
      read -p "Enter ROM ID: " id
      printf "\r\n"
      read -p "Enter Partial ROM Data (escape quotes): " data
      printf "\r\n"
      curl -i -X PATCH "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt" -H  "Content-Type: application/json" -d "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '5' ]]; then
      patch
    fi
    delete() {
      delete_single() {
        echo "Testing DELETE: /api/roms/:id"
        printf "\r\n"
        read -p "Enter ROM ID: " id
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '6' ]]; then
        delete_single
      fi
      delete_all() {
        echo "Testing DELETE: /api/roms"
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/roms" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '7' ]]; then
        delete_all
      fi
    }
    if [[ $rqst == '6' || $rqst == '7' ]]; then
      delete
    fi
    head() {
      head_all() {
        echo "Testing HEAD: /api/roms"
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '8' ]]; then
        head_all
      fi
      head_single() {
        echo "Testing HEAD: /api/roms/:id"
        printf "\r\n"
        read -p 'Enter ROM ID: ' id
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
    if [[ $rqst == '9' ]]; then
        head_single
      fi
    }
    if [[ $rqst == '8' || $rqst == '9' ]]; then
      head
    fi
    options() {
      echo "Testing OPTIONS: /api/roms"
      printf "\r\n"
      curl -i -X OPTIONS "http://localhost:5000/api/roms" -H  "accept: application/json"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '10' ]]; then
      options
    fi
    post_core() {
      echo "Testing POST /api/roms/core"
      printf "\r\n"
      curl -i -X POST "http://localhost:5000/api/roms/core" -H  "accept: application/json" -H  "Authorization: $jwt"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '11' ]]; then
      post_core
    fi
    read -p 'Press enter to continue'
    printf "\r\n"
    continue
  done
}
rom_tests

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

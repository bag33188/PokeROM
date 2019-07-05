#!/bin/bash

# ==============
# ROMs API tests
# ==============

<< --MULTILINE-COMMENT--
permissions (unix)
------------------

add to current permissions
$ chmod +x ./roms.sh

set current permissions
$ chmod 755 ./roms.sh
--MULTILINE-COMMENT--

romTests() {
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
      getAll() {
        echo "Testing GET: /api/roms"
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/roms" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '1' ]]; then
        getAll
      fi
      getSingle() {
        echo "Testing GET: /api/roms/:id"
        printf "\r\n"
        read -p "Enter ROM ID: " id
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '2' ]]; then
        getSingle
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
      deleteSingle() {
        echo "Testing DELETE: /api/roms/:id"
        printf "\r\n"
        read -p "Enter ROM ID: " id
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '6' ]]; then
        deleteSingle
      fi
      deleteAll() {
        echo "Testing DELETE: /api/roms"
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/roms" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '7' ]]; then
        deleteAll
      fi
    }
    if [[ $rqst == '6' || $rqst == '7' ]]; then
      delete
    fi
    head() {
      headAll() {
        echo "Testing HEAD: /api/roms"
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '8' ]]; then
        headAll
      fi
      headSingle() {
        echo "Testing HEAD: /api/roms/:id"
        printf "\r\n"
        read -p 'Enter ROM ID: ' id
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/roms/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
    if [[ $rqst == '9' ]]; then
        headSingle
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
    postCore() {
      echo "Testing POST /api/roms/core"
      printf "\r\n"
      curl -i -X POST "http://localhost:5000/api/roms/core" -H  "accept: application/json" -H  "Authorization: $jwt"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '11' ]]; then
      postCore
    fi
    read -p 'Press enter to continue'
    printf "\r\n"
    continue
  done
}
romTests

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

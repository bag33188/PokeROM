#!/bin/bash

# =================
# Natures API tests
# =================

<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./natures.sh

set current permissions
$ cd scripts
$ chmod 755 ./natures.sh
--MULTILINE-COMMENT--

nature_tests() {
  echo "Testing the /api/natures endpoints..."
  printf "\r\n"
  while [ true ]
  do
    echo -e "What would you like to test?\r\n\r\n1: GET /api/natures\r\n2: GET /api/natures/:id\r\n3: POST /api/natures\r\n4: PUT /api/natures/:id\r\n5: PATCH /api/natures/:id\r\n6: DELETE /api/natures/:id\r\n7: DELETE /api/natures\r\n8: HEAD /api/natures\r\n9: HEAD /api/natures/:id\r\n10: POST /api/natures/all\r\n11: Exit\r\n\r\n"
    read -p 'Enter option here: ' rqst
    printf "\r\n"
    if [[ $rqst == '11' ]]; then
      break
    fi
    get() {
      get_all() {
        echo "Testing GET: /api/natures"
        printf "\r\n"
        curl -i -X GET "http://localhost:8080/api/natures" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '1' ]]; then
        get_all
      fi
      get_single() {
        echo "Testing GET: /api/natures/:id"
        printf "\r\n"
        read -p "Enter Nature ID: " id
        printf "\r\n"
        curl -i -X GET "http://localhost:8080/api/natures/$id" -H  "accept: application/json"
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
      echo "Testing POST: /api/natures"
      printf "\r\n"
      read -p "Enter Nature Data (escape quotes): " data
      printf "\r\n"
      curl -i -X POST "http://localhost:8080/api/natures" -H  "accept: application/json" -H  "Content-Type: application/json" -d "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '3' ]]; then
      post
    fi
    put() {
      echo "Testing PUT: /api/natures/:id"
      printf "\r\n"
      read -p "Enter Nature ID: " id
      printf "\r\n"
      read -p "Enter Nature Data (escape quotes): " data
      printf "\r\n"
      curl -i -X PUT "http://localhost:8080/api/natures/$id" -H  "accept: application/json" -H  "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '4' ]]; then
      put
    fi
    patch() {
      echo "Testing PATCH: /api/natures/:id"
      printf "\r\n"
      read -p "Enter Nature ID: " id
      printf "\r\n"
      read -p "Enter Partial Nature Data (escape quotes): " data
      printf "\r\n"
      curl -i -X PATCH "http://localhost:8080/api/natures/$id" -H  "accept: application/json" -H  "Content-Type: application/json" -d "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '5' ]]; then
      patch
    fi
    delete() {
      delete_single() {
        echo "Testing DELETE: /api/natures/:id"
        printf "\r\n"
        read -p "Enter Nature ID: " id
        printf "\r\n"
        curl -i -X DELETE "http://localhost:8080/api/natures/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '6' ]]; then
        delete_single
      fi
      delete_all() {
        echo "Testing DELETE: /api/natures"
        printf "\r\n"
        curl -i -X DELETE "http://localhost:8080/api/natures" -H  "accept: application/json"
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
        echo "Testing HEAD: /api/natures"
        printf "\r\n"
        curl -i --head "http://localhost:8080/api/natures/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '8' ]]; then
        head_all
      fi
      head_single() {
        echo "Testing HEAD: /api/natures/:id"
        printf "\r\n"
        read -p 'Enter Nature ID: ' id
        printf "\r\n"
        curl -i --head "http://localhost:8080/api/natures/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '9' ]]; then
        head_single
      fi
    }
    if [[ $rqst == '8' || $rqst == '9' ]]; then
      head
    fi
    post_all() {
      echo "Testing POST: /api/natures/all"
      printf "\r\n"
      curl -i -X POST "http://localhost:8080/api/natures" -H  "accept: application/json"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '10' ]]; then
      post_all
    fi
    read -p 'Press enter to continue'
    printf "\r\n"
    continue
  done
}

nature_tests

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

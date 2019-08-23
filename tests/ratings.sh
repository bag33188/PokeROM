#!/bin/bash

# =================
# Ratings API tests
# =================

<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./ratings.sh

set current permissions
$ cd scripts
$ chmod 755 ./ratings.sh
--MULTILINE-COMMENT--

rating_tests() {
  echo "Testing the /api/ratings endpoints..."
  printf "\r\n"
  while [ true ]
  do
    echo -e "What would you like to test?\r\n\r\n1: GET /api/ratings\r\n2: GET /api/ratings/:id\r\n3: POST /api/ratings\r\n4: DELETE /api/ratings/:id\r\n5: DELETE /api/ratings\r\n6: HEAD /api/ratings\r\n7: HEAD /api/ratings/:id\r\n8: Exit\r\n\r\n"
    read -p 'Enter option here: ' rqst
    printf "\r\n"
    if [[ $rqst == '8' ]]; then
      break
    fi
    get() {
      get_all() {
        echo "Testing GET: /api/ratings"
        printf "\r\n"
        curl -i -X GET "http://localhost:50000/api/ratings" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '1' ]]; then
        get_all
      fi
      get_single() {
        echo "Testing GET: /api/ratings/:id"
        printf "\r\n"
        read -p "Enter Rating ID: " id
        printf "\r\n"
        curl -i -X GET "http://localhost:50000/api/ratings/$id" -H  "accept: application/json"
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
      echo "Testing POST: /api/ratings"
      printf "\r\n"
      read -p "Enter Rating Data (escape quotes): " data
      printf "\r\n"
      curl -i -X POST "http://localhost:50000/api/ratings" -H  "accept: application/json" -H  "Content-Type: application/json" -d "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '3' ]]; then
      post
    fi
    delete() {
      delete_single() {
        echo "Testing DELETE: /api/ratings/:id"
        printf "\r\n"
        read -p "Enter Rating ID: " id
        printf "\r\n"
        curl -i -X DELETE "http://localhost:50000/api/ratings/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '4' ]]; then
        delete_single
      fi
      delete_all() {
        echo "Testing DELETE: /api/ratings"
        printf "\r\n"
        curl -i -X DELETE "http://localhost:50000/api/ratings" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '5' ]]; then
        delete_all
      fi
    }
    if [[ $rqst == '4' || $rqst == '5' ]]; then
      delete
    fi
    head() {
      head_all() {
        echo "Testing HEAD: /api/ratings"
        printf "\r\n"
        curl -i --head "http://localhost:50000/api/ratings/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '6' ]]; then
        head_all
      fi
      head_single() {
        echo "Testing HEAD: /api/ratings/:id"
        printf "\r\n"
        read -p 'Enter Rating ID: ' id
        printf "\r\n"
        curl -i --head "http://localhost:50000/api/ratings/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '7' ]]; then
        head_single
      fi
    }
    if [[ $rqst == '6' || $rqst == '7' ]]; then
      head
    fi
    read -p 'Press enter to continue'
    printf "\r\n"
    continue
  done
}

rating_tests

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

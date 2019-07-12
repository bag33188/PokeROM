#!/bin/bash

# =================
# Natures API tests
# =================

<< --MULTILINE-COMMENT--
permissions (unix)
------------------

add to current permissions
$ chmod +x ./natures.sh

set current permissions
$ chmod 755 ./natures.sh
--MULTILINE-COMMENT--

natureTests() {
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
      getAll() {
        echo "Testing GET: /api/natures"
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/natures" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '1' ]]; then
        getAll
      fi
      getSingle() {
        echo "Testing GET: /api/natures/:id"
        printf "\r\n"
        read -p "Enter Nature ID: " id
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/natures/$id" -H  "accept: application/json"
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
      echo "Testing POST: /api/natures"
      printf "\r\n"
      read -p "Enter Nature Data (escape quotes): " data
      printf "\r\n"
      curl -i -X POST "http://localhost:5000/api/natures" -H  "accept: application/json" -H  "Content-Type: application/json" -d "$data"
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
      curl -i -X PUT "http://localhost:5000/api/natures/$id" -H  "accept: application/json" -H  "$data"
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
      curl -i -X PATCH "http://localhost:5000/api/natures/$id" -H  "accept: application/json" -H  "Content-Type: application/json" -d "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '5' ]]; then
      patch
    fi
    delete() {
      deleteSingle() {
        echo "Testing DELETE: /api/natures/:id"
        printf "\r\n"
        read -p "Enter Nature ID: " id
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/natures/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '6' ]]; then
        deleteSingle
      fi
      deleteAll() {
        echo "Testing DELETE: /api/natures"
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/natures" -H  "accept: application/json"
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
        echo "Testing HEAD: /api/natures"
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/natures/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '8' ]]; then
        headAll
      fi
      headSingle() {
        echo "Testing HEAD: /api/natures/:id"
        printf "\r\n"
        read -p 'Enter Nature ID: ' id
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/natures/$id" -H  "accept: application/json"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '9' ]]; then
        headSingle
      fi
    }
    if [[ $rqst == '8' || $rqst == '9' ]]; then
      head
    fi
    postAll() {
      echo "Testing POST: /api/natures/all"
      printf "\r\n"
      curl -i -X POST "http://localhost:5000/api/natures" -H  "accept: application/json"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '10' ]]; then
      postAll
    fi
    read -p 'Press enter to continue'
    printf "\r\n"
    continue
  done
}
natureTests

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

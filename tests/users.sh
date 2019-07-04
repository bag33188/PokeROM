#!/bin/bash

# ===============
# Users API tests
# ===============

<< --MULTILINE-COMMENT--
permissions (unix)
------------------

add to current permissions
$ chmod +x ./users.sh

set current permissions
$ chmod 755 ./users.sh
--MULTILINE-COMMENT--

userTests() {
  echo "Testing the /api/users endpoints..."
  printf "\r\n"
  while [ true ]
  do
    echo -e "What would you like to test?\r\n\r\n1: GET /api/users\r\n2: GET /api/users/:id\r\n3: POST /api/users\r\n4: POST /api/users/register\r\n5: POST /api/users/authenticate\r\n6: PUT /api/users/:id\r\n7: PATCH /api/users/:id\r\n8: DELETE /api/users/:id\r\n9: DELETE /api/users\r\n10: HEAD /api/users\r\n11: HEAD /api/users/:id\r\n12: Exit\r\n\r\n"
    read -p 'Enter option here: ' rqst
    printf "\r\n"
    if [[ $rqst == '12' ]]; then
      break
    fi
    read -p "Enter JSON Web Token: " jwt
    printf "\r\n"
    get() {
      getAll() {
        echo "Testing GET: /api/users"
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/users" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '1' ]]; then
        getAll
      fi
      getSingle() {
        echo "Testing GET: /api/users/:id"
        printf "\r\n"
        read -p "Enter User ID: " id
        printf "\r\n"
        curl -i -X GET "http://localhost:5000/api/users/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
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
      postUser() {
        echo "Testing POST: /api/users"
        printf "\r\n"
        read -p "Enter User Data (escape quotes): " data
        printf "\r\n"
        curl -i -X POST "http://localhost:5000/api/users" -H  "accept: application/json" -H  "Authorization: $jwt" -H  "Content-Type: application/json" -d "$data"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '3' ]]; then
        postUser
      fi
      registerUser() {
        echo "Testing POST: /api/users/register"
        printf "\r\n"
        read -p "Enter New User Data (escape quotes): " data
        printf "\r\n"
        curl -i -X POST "http://localhost:5000/api/users/register" -H  "accept: application/json" -H "Content-Type: application/json" -d "$data"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '4' ]]; then
        registerUser
      fi
      authenticateUser() {
       echo "Testing POST: /api/users/authenticate"
        printf "\r\n"
        read -p "Enter Existing User Data (escape quotes): " data
        printf "\r\n"
        curl -i -X POST "http://localhost:5000/api/users/authenticate" -H  "accept: application/json" -H  "Authorization: $jwt" -H  "Content-Type: application/json" -d "$data"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '5' ]]; then
        authenticateUser
      fi
    }
    if [[ $rqst == '3' || $rqst == '4' || $rqst == '5' ]]; then
      post
    fi
    put() {
      echo "Testing PUT: /api/users/:id"
      printf "\r\n"
      read -p "Enter User ID: " id
      printf "\r\n"
      read -p "Enter User Data (escape quotes): " data
      printf "\r\n"
      curl -i -X PUT "http://localhost:5000/api/users/$id" -H  "accept: application/json" -H  "Authorization: $jwt" -H  "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '6' ]]; then
      put
    fi
    patch() {
      echo "Testing PATCH: /api/users/:id"
      printf "\r\n"
      read -p "Enter User ID: " id
      printf "\r\n"
      read -p "Enter Partial User Data (escape quotes): " data
      printf "\r\n"
      curl -i -X PATCH "http://localhost:5000/api/users/$id" -H  "accept: application/json" -H  "Authorization: $jwt" -H  "Content-Type: application/json" -d "$data"
      printf "\r\n\r\n"
    }
    if [[ $rqst == '7' ]]; then
      patch
    fi
    delete() {
      deleteSingle() {
        echo "Testing DELETE: /api/users/:id"
        printf "\r\n"
        read -p "Enter User ID: " id
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/users/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '8' ]]; then
        deleteSingle
      fi
      deleteAll() {
        echo "Testing DELETE: /api/users"
        printf "\r\n"
        curl -i -X DELETE "http://localhost:5000/api/users" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '9' ]]; then
        deleteAll
      fi
    }
    if [[ $rqst == '8' || $rqst == '9' ]]; then
      delete
    fi
    head() {
      headAll() {
        echo "Testing HEAD: /api/users"
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/users/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '10' ]]; then
        headAll
      fi
      headSingle() {
        echo "Testing HEAD: /api/users/:id"
        printf "\r\n"
        read -p 'Enter User ID: ' id
        printf "\r\n"
        curl -i --head "http://localhost:5000/api/users/$id" -H  "accept: application/json" -H  "Authorization: $jwt"
        printf "\r\n\r\n"
      }
      if [[ $rqst == '11' ]]; then
        headSingle
      fi
    }
    if [[ $rqst == '10' || $rqst == '11' ]]; then
      head
    fi
    read -p 'Press enter to continue'
    printf "\r\n"
    continue
  done
}
userTests

read -n 1 -s -r -p "Press any key to exit"
echo -e "\r\n"

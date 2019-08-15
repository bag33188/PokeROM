#!/usr/bin/env bash

# ===============
# Database Script
# ===============

# shellcheck disable=SC2188
<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./db.sh

set current permissions
$ cd scripts
$ chmod 755 ./db.sh
--MULTILINE-COMMENT--

db() {

  cd ..

  db_win() {
    mongod --dbpath=C:/MongoDB/data
  }

  db_osx() {
    mongod
  }

  db_linux() {
    mongod
  }

  run_db() {
    case "$OSTYPE" in
      darwin* )
        db_osx ;;
      linux* )
        db_linux ;;
      msys* )
        db_win ;;
      * )
        echo "unknown: $OSTYPE" ;;
      esac
  }

  run_db
}

db

#!/usr/bin/env bash

# ====================
#  Database-Dev Script
# ====================

# shellcheck disable=SC2188
<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./db_dev.sh

set current permissions
$ cd scripts
$ chmod 755 ./db_dev.sh
--MULTILINE-COMMENT--

db_dev() {
  cd .. || return
  command="mongo pkmn_roms"
  case $OSTYPE in
    darwin* )  eval "${command}" ;;
    linux* )   eval "${command}";;
    msys* )    eval "winpty ${command}" ;;
    * )        echo "Unknown OS: $OSTYPE" ;;
  esac
}

db_dev

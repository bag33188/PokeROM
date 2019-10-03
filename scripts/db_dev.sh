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
  command="mongo pkmn-roms"
  case $OSTYPE in
    darwin*)  ${command} ;;
    linux*)   ${command} ;;
    msys*)    winpty ${command} ;;
    *)        echo "unknown: $OSTYPE" ;;
  esac
}

db_dev

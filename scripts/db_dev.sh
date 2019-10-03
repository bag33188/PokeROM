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

# winpty

db_dev() {
  cd .. || return
   case "$OSTYPE" in
    darwin*)  mongo pkmn-roms ;;
    linux*)   mongo pkmn-roms ;;
    msys*)    winpty mongo pkmn-roms ;;
    *)        echo "unknown: $OSTYPE" ;;
  esac
}

db_dev

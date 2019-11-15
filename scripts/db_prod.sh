#!/usr/bin/env bash

# =====================
#  Database-Prod Script
# =====================

# shellcheck disable=SC2188
<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./db_prod.sh

set current permissions
$ cd scripts
$ chmod 755 ./db_prod.sh
--MULTILINE-COMMENT--

db_prod() {
  cd .. || return
  command="mongo pkmn-roms --username admin --password 123456 --authenticationDatabase admin --host server1.pokerom.dev:44380" # --tls --tlsCertificateKeyFile database/mongodb.pem --tlsCAFile database/mongodb.crt
  case $OSTYPE in
    darwin* )  eval "${command}" ;;
    linux* )   eval "${command}" ;;
    msys* )    eval "winpty \"${command}\"" ;;
    * )        echo "Unknown OS: $OSTYPE" ;;
  esac
}

db_prod

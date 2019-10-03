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

# winpty

db_prod() {
  cd .. || return
   case "$OSTYPE" in
    darwin*)  mongo pkmn-roms --username admin --password 123456 --authenticationDatabase admin --host server1.pokerom.dev:44380 --tls --tlsCertificateKeyFile database/mongodb.pem --tlsCAFile database/mongodb.crt ;;
    linux*)   mongo pkmn-roms --username admin --password 123456 --authenticationDatabase admin --host server1.pokerom.dev:44380 --tls --tlsCertificateKeyFile database/mongodb.pem --tlsCAFile database/mongodb.crt ;;
    msys*)    winpty mongo pkmn-roms --username admin --password 123456 --authenticationDatabase admin --host server1.pokerom.dev:44380 --tls --tlsCertificateKeyFile database/mongodb.pem --tlsCAFile database/mongodb.crt ;;
    *)        echo "unknown: $OSTYPE" ;;
  esac
}

db_prod

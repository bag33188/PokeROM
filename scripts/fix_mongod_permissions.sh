#!/usr/bin/env bash

# ==============================
#  Fix Mongod Permissions Script
# ==============================

# shellcheck disable=SC2188
<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./fix_mongod_permissions.sh

set current permissions
$ cd scripts
$ chmod 755 ./fix_mongod_permissions.sh
--MULTILINE-COMMENT--

fix_mongod_permissions() {
  cd .. || return
  chown mongod:mongod /tmp/mongodb-44380.sock
  chown -R mongod:mongod /var/lib/mongo
}

fix_mongod_permissions

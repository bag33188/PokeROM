#!/usr/bin/env bash

fix_mongod_permissions() {
  cd .. || return
  chown mongod:mongod /tmp/mongodb-44380.sock
  chown -R mongod:mongod /var/lib/mongo
}

fix_mongod_permissions

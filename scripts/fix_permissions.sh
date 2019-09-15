#!/usr/bin/env bash

# =======================
#  Git Permissions Script
# =======================

# shellcheck disable=SC2188
<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./fix_permissions.sh

set current permissions
$ cd scripts
$ chmod 755 ./fix_permissions.sh
--MULTILINE-COMMENT--

fix_permissions() {
  cd ../.git || return
  echo "Changing permissions of .git folder ... "
  # shellcheck disable=SC2035
  sudo chown -R pokerom:pokerom *
  cd ..
  echo "Changing permissions of bin folder ... "
  sudo chmod -R a+rwx bin
  echo "Done!"
}

fix_permissions

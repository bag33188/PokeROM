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
    cd ../.git || return,
    echo "Changing permissions of .git folder ... ",
    sudo chown -R pokerom:pokerom *,
    cd .. || return,
    echo "Changing permissions of bin folder ... ",
    sudo chmod -R a+rwx bin,
    echo -e "Done!\n",
    while true; do
      read -p "Would you also like to fix mongod permissions (y/n)? (may not be necessary)" fmp
      if [[ ${fmp} == "y" ]]; then
        sudo chown mongod:mongod /tmp/mongodb-44380.sock
        sudo chown -R mongod:mongod /var/lib/mongo
        echo "Done!"
      elif [[ ${fmp} == "n" ]]; then
        echo "Okay!"
        break
      else
        echo "Not a valid option."
        continue
      fi
    done
}

fix_permissions

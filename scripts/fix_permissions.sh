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
  case $OSTYPE in
    darwin* )  python3 fix_permissions.py ;;
    linux* )   python3 fix_permissions.py ;;
    msys* )    python fix_permissions.py ;;
    * )        echo "Unknown OS: ${OSTYPE}" ;;
  esac
}

fix_permissions

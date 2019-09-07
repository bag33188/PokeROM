#!/usr/bin/env bash

# ==================
# Fix AOT Bug Script
# ==================

# shellcheck disable=SC2188
<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./fix_aot_bug.sh

set current permissions
$ cd scripts
$ chmod 755 ./fix_aot_bug.sh
--MULTILINE-COMMENT--

fix_aot_bug() {
  if [[ "$OSTYPE" == "darwin"* || "$OSTYPE" == "linux"* ]]; then
    python3 fix_aot_bug.py
  else
    python fix_aot_bug.py
  fi

  cd ..
}

fix_aot_bug

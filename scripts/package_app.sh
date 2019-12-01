#!/usr/bin/env bash

# ==================
# Package App Script
# ==================

# shellcheck disable=SC2188
<< --MULTILINE-COMMENT--
Permissions (Unix)
------------------

add to current permissions
$ cd scripts
$ chmod +x ./package_app.sh

set current permissions
$ cd scripts
$ chmod 755 ./package_app.sh
--MULTILINE-COMMENT--

package_app() {
    cd ..
    npm pack
    if [[ -d "bin" ]]; then
      rm -R bin
    fi
    mkdir bin
    mv pokerom*.tgz bin/
}

package_app

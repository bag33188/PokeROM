#!/usr/bin/env bash

# ==================
# Package App Script
# ==================

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
    rm ~/Projects/pokerom*.tgz
    mv pokerom*.tgz ~/Projects
}

package_app

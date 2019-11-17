[comment]: # (Begin README.md)

Pok&eacute;ROM
==============

**Table of Contents**

- [PokéROM](#pokeacuterom)
  * [About](#about)
  * [Run Locally](#run-locally)
    + [Linux (Ubuntu)](#linux-ubuntu)
      - [Step 1 - Installing the Dependencies](#step-1---installing-the-dependencies--setup)
      - [Step 2 - Get the PokeROM Repository](#step-2---get-the-pokerom-repository)
      - [Step 3 - Building PokeROM](#step-3---building-pokerom)
        * [Optional Steps](#optional-steps)
          + [Packaging the App](#packaging-the-app)
      - [Step 4 - Running PokeROM](#step-4---running-pokerom)
        * [Terminal Window 1](#terminal-window-1)
        * [Terminal Window 2](#terminal-window-2)
        * [Terminal Window 3](#terminal-window-3)
        * [Terminating Processes](#terminating-processes)
      - [Troubleshooting](#troubleshooting)

## About

This website is a full stack web application. It is a website that contains all of the core Pok&eacute;mon ROMs, 
as well as some ROM hacks.

## Run Locally

To run this website locally, a lot of setup is required, and the process differs for each operating system.

The following guide will show you how to run this app locally on Windows 7/8/8.1/10, macOS Sierra/High Sierra/Mojave, 
and the Ubuntu Linux distro.

If at any point you get stuck or an error occurs, check out the [troubleshooting](#troubleshooting) 
section at the end of this guide.

Let's get started...

### Linux (Ubuntu)

#### Step 1 - Installing the Dependencies + Setup

You will need to install the following:

* git
* MongoDB
* Node.JS and NPM
* Angular CLI
* PHP
* PHP CHI

The following command will install `git`, `PHP`, and `PHP CGI`.

```bash
sudo apt-get install git-all php php-cgi -y
```

Installing `Node.JS` and `MongoDB` require a little more work.

Run the following commands to install `MongoDB`

```bash
# import public key used by package management system
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
# create list file for mongodb
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
# reload local package database
sudo apt-get update
# install latest mongodb version
sudo apt-get install -y mongodb-org
```

Now for `Node.JS` (and `NPM`), run the following commands

```bash
# install curl
sudo apt-get install curl
# download nodejs repo
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
# install nodejs
sudo apt-get install -y nodejs
```

Now that we've installed `Node.JS` and `NPM`, we can install the `Angular CLI` by running the following command:
```bash
npm install @angular/cli
```

> Note: if you get a permissions error, trying adding `sudo` before `npm`

Finally, we will need to increase the maximum limit of file watchers. To do this, run the following command:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

#### Step 2 - Get the PokeROM Repository

For this step, we will be cloning the `PokeROM` git repository.

Simply run the following command:

```bash
cd ~ && mkdir Projects && cd Projects && git clone https://9a2ed485d2f05445b47ea175754aab8922684635@github.com/bag33188/PokeROM.git
```

That command will create new new folder called `Projects` in the home directory and clone the PokeROM
repository inside of that folder.

Now change to the directory created:

```bash
cd PokeROM
```

Then run the following command once inside the `PokeROM` folder:

```bash
npm run add-dev-env
```

#### Step 3 - Building PokeROM

Now that we have the repository on our local machine, we need to do some building.

First, run this command: 

```bash
npm install && cd client && npm install && cd ..
```

That will install all the node dependencies for the backend and the frontend.

Now we just need to make a directory for `MongoDB`. To do that, run this command:

```bash
sudo mkdir -p /data/db && sudo chown -R `id -un` /data/db
```

This will create the directory where `MongoDB` stores all its data in.

Now we just need to compile Angular's components into `Ivy` components. To do this, simple run the following command:

```bash
cd client && npm run ivy && cd ..
```

Finally, we need to import the database for out app.

To do this, we must first run our database with this command: 

```bash
mongod
```

Then, in a separate terminal window, run this command:

```bash
cd ~/Projects/PokeROM && npm run import-db
```

Once that process has completed, you can now stop the `mongod` process by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>
in the window where it is running.

Now just exit out of all terminal windows.

Congratulations! You have now built the PokeROM app successfully.

##### Optional Steps

###### Packaging the App

If you would like to package this app for portable-local deployment, run the following npm script:

```bash
npm run pack
```

This will put a tarball containing the application in the `bin` folder.

###### Adding PokeROM as Environment Variable

If you're tired of `cd`-ing into `~/Projects/PokeROM` all the time, then this step is for you.

Here, we will implement an **environment variable** in our Terminal/Shell for PokeROM.

First, run the following command:

```bash
[ -e ~/.bashrc ] && echo 1 || echo 0
```

If the output you get is `0`, then run this command:

```bash
echo "export pokerom=~/Projects/PokeROM" >> ~/.bashrc
```

If the output you get was `1`, then do the following:

1. Open the `~/.bashrc` file in any text editor of your choice
2. Add this line to the bottom of the file: `export pokerom=~/Projects/PokeROM`
3. Save the file (<kbd>Ctrl</kbd> + <kbd>S</kbd>)

Now just restart the terminal and you should be able to do the following:

```bash
cd $pokerom
```

#### Step 4 - Running PokeROM

Now that we've built our application, we can now start to run it.

Since we only need to build the application once, you can use these steps from here on without worrying about the 
previous steps.

First, open 3 new Terminal windows/tabs.

##### Terminal Window 1

In the first terminal window, run this command:

```bash
cd ~/Projects/PokeROM && npm run db
```

This will get the database up and running.

##### Terminal Window 2

In the second terminal window, run this command:

```bash
cd ~/Projects/PokeROM && npm run api
```

##### Terminal Window 3 

In the third terminal window, run this command:

```bash
cd ~/Projects/PokeROM && npm run client
```

##### Terminating Processes

In order to stop the processes running in the 3 terminal tabs/windows, simple press <kbd>Ctrl</kbd> + <kbd>C</kbd> 
in each window to terminate the running process.

This process will take some time to complete, but when it's done, a browser window will open with the website.

#### Troubleshooting

If you get any **permission errors** with `npm`, simply add `sudo` before `npm` to run the command as _root user_.

If you get an error that says `port 8080 is already in use` when trying to run the _API_, then run the following command:

```bash
sudo pkill node
``` 

If you get an error that says `mongod service already running` when trying to run the _DB_, then run this command:

```bash
sudo pkill mongod
```

For **any other problems**, open up a new issue in the [issues](https://github.com/bag33188/PokeROM/issues) section.

[source-code-pro-fonts-download]: <https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106790&authkey=AGxEetnlDbFwcBA> 'Source Code Pro Fonts Download (Direct Download)'

--------

<!--
# For Windows, XAMPP

# C:/Windows/System32/drivers/etc/hosts (as admin)
127.0.0.1 localhost:8080

# C:/xampp/apache/conf/httpd.conf
Listen 8080

# C:/xampp/apache/conf/extra/httpd-vhosts.conf
<VirtualHost *:5000>
    DocumentRoot "C:\Users\Brock\Projects\PokeROM\www"
    ServerName localhost:8080
    <Directory "C:\Users\Brock\Projects\PokeROM\www">
        Allow from all
        Require all granted
    </Directory>
    ProxyPreserveHost on
    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/
</VirtualHost>

debugging with php:
https://www.jetbrains.com/help/phpstorm/debugging-with-phpstorm-ultimate-guide.html
https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html
edit xdebug in php-cgi php.ini file (and also php-cli php.ini file) [use sudo vim <php.ini_file>]

https://paulshipley.id.au/blog/coding-tips/improve-php-performance-with-fastcgi-on-xampp-for-windows/

install xdebug and all its dependencies: 

# /etc/php/7.2/cli/php.ini
sudo apt-get install php-pear
sudo pecl channel-update pecl.php.net
sudo apt-get install php-dev
sudo pecl install xdebug


put this in /etc/php/7.2/cgi/php.ini below all the [PHP] settings:

; /etc/php/7.2/cgi/php.ini
[xdebug]
; PUT NEXT LINE AS IT IS SHOWN FROM THE TERMINAL WHEN INSTALLING XDEBUG
zend_extension=/usr/lib/php/20170718/xdebug.so
xdebug.remote_enable=1
xdebug.remote_port=9000

Languages & Frameworks > PHP > Debug

Pre-configuration:
3. Start Listeneing (click on the link)

External connections
check `Ignore external connections through unregistered server configurations
uncheck `break at first line in php scripts

Xdebug:
debug port: 9000
uncheck the rest in this section

Edit Configurations > PHP Web Page > php-debug
Server > ...
name: localhost
host: localhost
port: 8080
debugger: Xdebug
uncheck `use path mappings`
check `shared` (if necessary)

debug pre-configuration
click `validate` and validate to make sure everything works correctly

-->

> _**Enjoy!**_

[comment]: # "End README.md"

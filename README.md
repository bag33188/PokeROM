[comment]: # 'Begin README.md'

Pok&eacute;ROM
==============

**Table of Contents**

- [PokéROM](#pokeacuterom)
  * [About](#about)
  * [Run Locally](#run-locally)
    + [Linux (Ubuntu)](#linux-ubuntu)
      - [Step 1 - Installing the Dependencies](#step-1---installing-the-dependencies)
      - [Step 2 - Get the PokeROM Repository](#step-2---get-the-pokerom-repository)
      - [Step 3 - Building PokeROM](#step-3---building-pokerom)
        * [Optional Steps](#optional-steps)
          + [Fixing an Angular AOT Bug](#fixing-an-angular-aot-bug)
          + [Packaging the App](#packaging-the-app)
      - [Step 4 - Running PokeROM](#step-4---running-pokerom)
        * [Terminal Window 1](#terminal-window-1)
        * [Terminal Window 2](#terminal-window-2)
        * [Terminal Window 3](#terminal-window-3)
        * [Terminating Processes](#terminating-processes)
      - [Troubleshooting](#troubleshooting)
  * [Languages Used](#languages-used)

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

#### Step 1 - Installing the Dependencies

You will need to install the following:

* git
* MongoDB
* Node.JS and NPM
* Angular CLI
* Python 3
* Ruby

The following command will install `git`, `ruby`, and `python 3.7`.

```shell script
sudo apt-get install git-all ruby-full python3.7
```

Installing `Node.JS` and `MongoDB` require a little more work.

Run the following commands to install `MongoDB`

```shell script
# import public key used by package managment system
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
# create list file for mongodb
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
# reload local package database
sudo apt-get update
# install latest mongodb version
sudo apt-get install -y mongodb-org
```

Now for `Node.JS` (and `NPM`), run the following commands

```shell script
# install curl
sudo apt-get install curl
# download nodejs repo
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
# install nodejs
sudo apt-get install -y nodejs
```

Now that we've installed `Node.JS` and `NPM`, we can install the `Angular CLI` by running the following command:
```shell script
npm install @angular/cli
```

> Note: if you get a permissions error, trying adding `sudo` before `npm`

#### Step 2 - Get the PokeROM Repository

For this step, we will be cloning the `PokeROM` git repository.

Simply run the following command:

```shell script
cd ~ && mkdir Projects && cd Projects && git clone https://9a2ed485d2f05445b47ea175754aab8922684635@github.com/bag33188/PokeROM.git
```

That command will create new new folder called `Projects` in the home directory and clone the PokeROM
repository inside of that folder.

Now change to the directory created:

```shell script
cd PokeROM
```

#### Step 3 - Building PokeROM

Now that we have the repository on our local machine, we need to do some building.

First, run this command: 

```shell script
npm install && cd client && npm install && cd ..
```

That will install all the node dependencies for the backend and the frontend.

Now we just need to make a directory for `MongoDB`. To do that, run this command:

```shell script
sudo mkdir -p /data/db && sudo chown -R `id -un` /data/db
```

This will create the directory where `MongoDB` stores all its data in.

Now we just need to compile Angular's components into `Ivy` components. To do this, simple run the following command:

```shell script
cd client && npm run ivy && cd ..
```

Finally, we need to import the database for out app.

To do this, we must first run our database with this command: 

```shell script
mongod
```

Then, in a separate terminal window, run this command:

```shell script
cd ~/Projects/PokeROM && npm run import-db
```

Once that process has completed, you can now stop the `mongod` process by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>
in the window where it is running.

Now just exit out of all terminal windows.

Congratulations! You have now built the PokeROM app successfully.

##### Optional Steps

###### Fixing an Angular AOT Bug

Upon testing my Angular application with AOT (ahead of time) compilation, I found a bug that prevents it from 
compiling. 

To fix this bug, run the following command:

```shell script
cd ~/Projects/PokeROM/client && npm run fix-aot-bug
```

###### Packaging the App

If you would like to package this app for portable-local deployment, run the following npm script:

```shell script
npm run pack
```

This will put a tarball containing the application in the `bin` folder.

#### Step 4 - Running PokeROM

Now that we've built our application, we can now start to run it.

Since we only need to build the application once, you can use these steps from here on without worrying about the 
previous steps.

First, open 3 new Terminal windows/tabs.

##### Terminal Window 1

In the first terminal window, run this command:

```shell script
cd ~/Projects/PokeROM && npm run db
```

This will get the database up and running.

##### Terminal Window 2

In the second terminal window, run this command:

```shell script
cd ~/Projects/PokeROM && npm run api
```

##### Terminal Window 3 

In the third terminal window, run this command:

```shell script
cd ~/Projects/PokeROM && npm run client
```

##### Terminating Processes

In order to stop the processes running in the 3 terminal tabs/windows, simple press <kbd>Ctrl</kbd> + <kbd>C</kbd> 
in each window to terminate the running process.

This process will take some time to complete, but when it's done, a browser window will open with the website.

#### Troubleshooting

If you get any **permission errors** with `npm`, simply add `sudo` before `npm` to run the command as _root user_.

If you get an error that says `port 8080 is already in use` when trying to run the _API_, then run the following command:

```shell script
sudo pkill node
``` 

If you get an error that says `mongod service already running` when trying to run the _DB_, then run this command:

```shell script
sudo pkill mongod
```

For **any other problems**, open up a new issue in the [issues](https://github.com/bag33188/PokeROM/issues) section.

[source-code-pro-fonts-download]: <https://onedrive.live.com/download?cid=093DC4D54812866B&resid=93DC4D54812866B%21106790&authkey=AGxEetnlDbFwcBA> 'Source Code Pro Fonts Download (Direct Download)'

## Languages Used

The following programming languages are used in this app (**14 Total**):

* Apache
* Bash/Shell
* Batch
* CSS
* HTML
* JSON
* JavaScript
* Markdown
* PHP
* Python 3
* Ruby
* SCSS/Sass
* SVG
* TypeScript
* XML
* YAML

--------

> _**Enjoy!**_

[comment]: # 'End README.md'

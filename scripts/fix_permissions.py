#!/usr/bin/env python3

"""
This program fixes some permissions issues in a production environment.
"""

import subprocess # import subprocess module

# define primary function
def fix_permissions():
  """
  The purpose of this function is to run a series of bash commands
  to fix the permissions of the `.git` and `bin` folders in production.
  """

  # create commands array constant
  COMMANDS = [
    'cd ../.git || return',
    'echo "Changing permissions of .git folder ... "',
    'sudo chown -R pokerom:pokerom *',
    'cd .. || return',
    'echo "Changing permissions of bin folder ... "',
    'sudo chmod -R a+rwx bin',
    'echo -e "Done!\n"',
    'read -p "Would you also like to fix mongod permissions (y/*)? (may not be necessary)" fmp \n'
    '[[ $fmp = "y" ]] && sudo chown mongod:mongod /tmp/mongodb-44380.sock && sudo chown -R mongod:mongod /var/lib/mongo && echo "Done!" || echo "Okay!"'
  ]

  # join array of commands into one string
  # concat with double ampersand and 2 spaces
  command = ' && '.join(COMMANDS)

  # execute command using bash
  subprocess.call(['bash', '-c', command])

# call function
fix_permissions()

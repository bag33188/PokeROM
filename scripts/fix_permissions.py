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
    'cd ..',
    'echo "Changing permissions of bin folder ... "',
    'sudo chmod -R a+rwx bin',
    'echo "Done!"'
  ]

  # loop through each command in constant array
  for command in COMMANDS:

    # execute command using bash
    subprocess.call(['bash', '-c', command])

# call function
fix_permissions()

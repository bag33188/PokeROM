#!/usr/bin/env python3

"""This program fixes a bug in the Angular AOT Compiler."""

import sys # import system module
import fileinput # import fileinput module

# create fix_state_js function
def fix_state_js():
  """
  The purpose of this function is to fix a major bug in the Angular AOT Compiler.
  This function will backup and then modify the `state.js` file in `./node_modules/@angular/compiler-cli/src/ngtsc/incremental/src`.
  """

  print('Fixing state.js ... ')

  # create exit code var
  exit_code = None

  # encapsulate main functionality in try block
  try:

    # define vars
    filepath = './node_modules/@angular/compiler-cli/src/ngtsc/incremental/src/state.js'
    text_to_search = 'if (this.modifiedResourceFiles === undefined || !this.metadata.has(sf))'
    replacement_text = 'if (this.modifiedResourceFiles === undefined || this.modifiedResourceFiles === null || !this.metadata.has(sf))'
    fix_applied = False

    # open up file stream (read and write) and create backup of file
    with fileinput.FileInput(filepath, inplace=True, backup='.bak') as file:
      # loop through each line in file
      for line in file:
        # apply fix
        if (text_to_search in line):
          # replace text and end line without newline
          print(line.replace(text_to_search, replacement_text), end='')
          # set to true
          fix_applied = True
        # check if fix has already been applied
        elif (replacement_text in line):
          # undo fix
          print(line.replace(replacement_text, text_to_search), end='')
          # set to false
          fix_applied = False
        else:
          # print other lines
          print(line, end='')

    # close the file stream
    fileinput.close()

    # if fix has been applied
    if fix_applied:
      # tell the user that the fix has been applied
      print('Fix applied!')
    else:
      # tell the user that the fix has been undone.
      print('Fix has been undone.')

    # set exit code to 0 (success)
    exit_code = 0

    # successfuly exit app
    sys.exit(exit_code)

  # exception block for catching a file not found error
  except FileNotFoundError:

    print('Error: file not found')

    # set exit code to 1 (error)
    exit_code = 1

    # exit app on error
    sys.exit(exit_code)

  # exception block for catching general errors
  except Exception:

    print('An error occured while trying to apply/undo the fix.')

    # set exit code to 1 (error)
    exit_code = 1

    # exit app on error
    sys.exit(exit_code)

# call function
fix_state_js()
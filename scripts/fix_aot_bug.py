#!/usr/bin/env python3

"""This program fixes a bug in the Angular AOT Compiler."""

import sys # import system module
from fileinput import FileInput # import fileinput module

# create fix_aot_bug function
def fix_aot_bug():
  """
  The purpose of this function is to fix a major bug in the Angular AOT Compiler.
  This function will backup and then modify the `state.js` file in `../client/node_modules/@angular/compiler-cli/src/ngtsc/incremental/src`.
  """

  print('Fixing state.js ... ')

  # create exit code var
  exit_code = None

  # encapsulate main functionality in try block
  try:

    # define filepath constant
    FILEPATH = '../client/node_modules/@angular/compiler-cli/src/ngtsc/incremental/src/state.js'

    # define vars
    text_to_search = 'if (this.modifiedResourceFiles === undefined || !this.metadata.has(sf))'
    replacement_text = 'if (this.modifiedResourceFiles === undefined || this.modifiedResourceFiles === null || !this.metadata.has(sf))'
    fix_applied = False

    # open up file stream (read and write) and create backup of file
    with FileInput(FILEPATH, inplace=True, backup='.bak') as file:

      # loop through each line in file
      for line in file:
        
        # apply fix
        if (text_to_search in line):
          # replace text and end line without newline
          sys.stdout.write(line.replace(text_to_search, replacement_text))

          # set to true
          fix_applied = True

        # check if fix has already been applied
        elif (replacement_text in line):
          # undo fix
          sys.stdout.write(line.replace(replacement_text, text_to_search))
          # set to false
          fix_applied = False

        # otherwise
        else:
          # print other lines
          sys.stdout.write(line)

    # close the file stream
    FileInput().close()

    # if fix has been applied
    if fix_applied:
      # tell the user that the fix has been applied
      print('Fix applied!', end='\n\n')
    else:
      # tell the user that the fix has been undone.
      print('Fix has been undone.', end='\n\n')

    # set exit code to 0 (success)
    exit_code = 0

    # successfully exit app
    sys.exit(exit_code)

  # exception block for catching a file not found error
  except FileNotFoundError:

    print('Error: file not found', end='\n\n')

    # set exit code to 1 (error)
    exit_code = 1

    # exit app on error
    sys.exit(exit_code)

  # exception block for catching general errors
  except Exception as err:

    print(f'An error occurred while trying to apply/undo the fix: {str(err)}', end='\n\n')

    # set exit code to 1 (error)
    exit_code = 1

    # exit app on error
    sys.exit(exit_code)

# call function
fix_aot_bug()

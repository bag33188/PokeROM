#!/usr/bin/env python3

"""This file fixes a bug in the Angular AOT compiler."""

# import fileinput module
import fileinput

# create fix_state_js function
def fix_state_js():
  """
  The purpose of this function is to fix a major bug in the Angular AOT compiler.
  This function will backup and then modify the `state.js` file in `./node_modules/@angular/compiler-cli/src/ngtsc/incremental/src`.
  """

  print('Fixing state.js...')

  # define vars
  filepath = './node_modules/@angular/compiler-cli/src/ngtsc/incremental/src/state.js'
  text_to_search = 'if (this.modifiedResourceFiles === undefined || !this.metadata.has(sf))'
  replacement_text = 'if (this.modifiedResourceFiles === undefined || this.modifiedResourceFiles === null || !this.metadata.has(sf))'
  fixApplied = False

  # open up file for reading and writing; create backup of file
  with fileinput.FileInput(filepath, inplace=True, backup='.bak') as file:
    # loop through each line in file
    for line in file:
      # check if fix is already applied
      if (replacement_text in line):
        # undo fix
        print(line.replace(replacement_text, text_to_search), end='')
        # set to false
        fixApplied = False
      elif (text_to_search in line): # apply fix
        # replace text and end line without newline
        print(line.replace(text_to_search, replacement_text), end='')
        # set to true
        fixApplied = True
      else:
        # print other lines
        print(line, end='')

    # close file stream
    fileinput.close()

  # if fix is applied...
  if fixApplied:
    # tell the user that the fix has been applied
    print('Fix applied!')
  else:
    # otherwise tell user that the fix has been udone
    print('Fix has been undone.')

# call function
fix_state_js()

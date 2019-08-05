#!/usr/bin/env python3

import fileinput

"""
The purpose of this function is to fix a major bug in the Angular AOT compiler.
This function will backup and then modify the `state.js` file in `./node_modules/@angular/compiler-cli/src/ngtsc/incremental/src`.
"""
def fix_state_js():

  print('Fixing state.js...')

  # define vars
  filepath = './node_modules/@angular/compiler-cli/src/ngtsc/incremental/src/state.js'
  text_to_search = 'if (this.modifiedResourceFiles === undefined || !this.metadata.has(sf))'
  replacement_text = 'if (this.modifiedResourceFiles === undefined || this.modifiedResourceFiles === null || !this.metadata.has(sf))'

  # open up file for reading and writing; create backup of file
  with fileinput.FileInput(filepath, inplace=True, backup='.bak') as file:
    # loop through each line in file
    for line in file:
      # replace text and end line with no newline
      print(line.replace(text_to_search, replacement_text), end='')

  print('Done!')

# call function
fix_state_js()

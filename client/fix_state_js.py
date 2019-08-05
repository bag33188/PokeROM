#!/usr/bin/env python3

import fileinput

def fix_state_js():

  print('Fixing state.js...')

  filepath = './node_modules/@angular/compiler-cli/src/ngtsc/incremental/src/state.js'
  text_to_search = 'if (this.modifiedResourceFiles === undefined || !this.metadata.has(sf))'
  replacement_text = 'if (this.modifiedResourceFiles === undefined || this.modifiedResourceFiles === null || !this.metadata.has(sf))'

  with fileinput.FileInput(filepath, inplace=True, backup='.bak') as file:
    for line in file:
      print(line.replace(text_to_search, replacement_text), end='')

  print('Done!')

fix_state_js()

#!/usr/bin/env python3

import fileinput

class AngularBug:

  def __init__(self):
    print('Fixing state.js...')

  @staticmethod
  def fix_state_js():
    filename = './node_modules/@angular/compiler-cli/src/ngtsc/incremental/src/state.js'
    text_to_search = 'if (this.modifiedResourceFiles === undefined || !this.metadata.has(sf))'
    replacement_text = 'if (this.modifiedResourceFiles === undefined || this.modifiedResourceFiles === null || !this.metadata.has(sf))'

    with fileinput.FileInput(filename, inplace=True, backup='.bak') as file:
      for line in file:
        print(line.replace(text_to_search, replacement_text), end='')

    print ('Done!')

AngularBug().fix_state_js()

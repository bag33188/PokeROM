#!/usr/bin/env python3

"""This program adds a manifest.json file into the `../public` folder and links it in the `../public/index.html` file."""

import fileinput # import fileinput module

# define main function
def add_manifest_json():
  """
  This purpose of this function is to write a new file called `manifest.json` (or an existing `manifest.json`)
  and put the necessary data inside of it. Then it links the `manifest.json` file to the `index.html` file.
  """

  print('Adding manifest.json ... ')

  # encapsulate main functionality in try block
  try:

    # store data
    manifest_data = (
                      '{\n'
                      '\t"manifest_version": 2,\n'
                      '\t"name": "PokeROM",\n'
                      '\t"version": "1.0.0",\n'
                      '\t"author": "Broccolini",\n'
                      '\t"description": "A web application that contains all the core Pokemon ROMs as well as some ROM hacks.",\n'
                      '\t"keywords": ["PokeROM", "Pokemon", "ROM", "ROMs", "core"],\n'
                      '\t"developer": {\n'
                      '\t\t"name": "bag33188",\n'
                      '\t\t"url": "https://github.com/bag33188"\n'
                      '\t}\n'
                      '}\n'
                    )

    # create new file or edit existing one
    manifest_json = open('../public/manifest.json', 'w+')

    # write manifest data to file
    manifest_json.write(manifest_data)

    # close file stream
    manifest_json.close()

    # create vars
    filepath = '../public/index.html'
    text_to_search = '<link rel="icon" type="image/x-icon" href="favicon.ico" />'
    replacement_text = '<link rel="icon" type="image/x-icon" href="favicon.ico" />\n<link rel="manifest" href="manifest.json" />'

    # open up index.html file and create backup
    with fileinput.FileInput(filepath, inplace=True, backup='.bak1') as file:

      # loop through each line in file
      for line in file:

        # check for favicon link
        if '<link rel="icon" type="image/x-icon" href="favicon.ico" />' in line:
          # replace text
          print(line.replace(text_to_search, replacement_text), end='')
        else:
          # print other line
          print(line, end='')

    print ('Done!', end='\n\n')

  # catch file not found exception
  except FileNotFoundError:
    print('Error: file not found.', end='\n\n')

  # catch general exception
  except Exception:
    print('An error occurred.', end='\n\n')

# call main function
add_manifest_json()

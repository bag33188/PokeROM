#!/usr/bin/env python3

"""This program adds a manifest.json file into the `../public` folder."""

# define main function
def add_manifest_json():
  """
  This purpose of this function is to write a new file called `manifest.json` (or an existing `manifest.json`)
  and put the necessary data inside of it.
  """

  print('Adding manifest.json ... ')

  # encapsulate main functionality in try block
  try:

    # store data
    manifest_data = (
                      '{\n'
                      '\t"manifest_version": 2,\n'
                      '\t"version": "1.0.0",\n'
                      '\t"name": "PokeROM",\n'
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

    print ('Done!')

  # catch file not found exception
  except FileNotFoundError:
    print('Error: file not found.')

  # catch general exception
  except Exception:
    print('An error occurred.')

# call main function
add_manifest_json()

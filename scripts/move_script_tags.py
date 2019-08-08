#!/usr/bin/env python3

"""This program moves around the script tags in the `public/index.html` file."""

import fileinput # import fileinput module
import re # import regular expression module

# define move_script_tags function
def move_script_tags():
  """
  The purpose of this function is to:
    1. move the script tags from the `public/index.html` from the bottom to the top
    2. add the defer attributes to each one of those script tags
    3. close of the link tag with the main stylesheet attached to it
  """

  print('Moving around script tags in index.html ... ')

  # create vars
  filepath = '../public/index.html'

  # regex for identifying script tags
  script_tag_regex = re.compile(r'(<script src=\"(?:runtime|polyfills-es5|polyfills|main|vendor|scripts)\.(?:#?(?:[\da-fA-F]{2})(?:[\da-fA-F]{2})(?:[\da-fA-F]{2})){3}[\da-fA-F]{2}\.js\"(?:\snomodule)?><\/script>)')

  new_script_tags = ''

  # wrap file I/O logic in try block
  try:

    # the first file I/O operation will store the script tags in a variable

    # open index.html file for reading
    index_file = open(filepath, 'r')

    # loop through each line in file
    for line in index_file:
      # store script tags in var
      script_tags = script_tag_regex.findall(line)
      # if script tags exist in line
      if script_tags:
        # set new script tags to joined array and add defer attr to each script element
        new_script_tags = '\n'.join(script_tags).replace('></script>', ' defer></script>').replace('src="', 'type="text/javascript" src="')

    # close file from reading
    index_file.close()

    # the second file I/O operation will move around the script tags regardless of formatting and close of the link tag

    # use fileinput to open up index.html file and create backup before editing
    with fileinput.FileInput(filepath, inplace=True, backup='.bak') as file:
      # loop through each line in file
      for line in file:
        # store script tags in variable
        script_tags = script_tag_regex.findall(line)
        # do various checks that depend on formatting
        # if the link tag and the closing head tag on the same line
        if ('.css">' in line or '<link rel="stylesheet" href="styles.' in line) and '</head>' in line:
          print(line.replace('.css"></head>', f'.css" />\n{new_script_tags}\n</head>')
                    .replace('rel="stylesheet"', 'rel="stylesheet" type="text/css"'), end='')
        # if the link tag is not on the same line as the head tag
        elif '</head>' in line and ('.css">' not in line or '<link rel="stylesheet" href="styles.' not in line):
          print(line.replace('</head>', f'{new_script_tags}\n</head>'), end='')
        # if the head tag is not on the same line as the link tag (different condition)
        elif ('.css">' in line or '<link rel="stylesheet" href="styles.' in line) and '</head>' not in line:
          print (line.replace('.css">', '.css" />\n').replace('rel="stylesheet"', 'rel="stylesheet" type="text/css"'), end='')
        # check if script tags are in current line
        elif script_tags:
          # remove script tags from bottom of file
          print(line.replace(script_tags[0], '')
                    .replace(script_tags[1], '')
                    .replace(script_tags[2], '')
                    .replace(script_tags[3], '')
                    .replace(script_tags[4], '')
                    .replace(script_tags[5], '')
                , end='')
        # otherwise...
        else:
          # print the other lines
          print(line, end='')

    # close the fileinput stream
    fileinput.close()

    print('Done!')

  # catch file not found error
  except FileNotFoundError:
    print('Error, index.html file not found.')

  # general exception
  except Exception:
    print('An error occured.')

# call function
move_script_tags()

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

  # open index.html file for reading
  index_file = open(filepath, 'r')

  # wrap file i/o logic in try block
  try:
  
    # loop through each line in file
    for line in index_file:
      # store script tags in var
      script_tags = script_tag_regex.findall(line)
      # if script tags exist in line
      if script_tags:
        # set new script tags to joined array and add defer attr to each script element
        new_script_tags = ''.join(script_tags).replace('></script>', ' type="text/javascript" defer="defer"></script>')

    # close file from reading
    index_file.close()

    # use fileinput to open up index.html file and create backup before editing
    with fileinput.FileInput(filepath, inplace=True, backup='.bak') as file:
      # loop through each line in file
      for line in file:
        # store script tags in variable
        script_tags = script_tag_regex.findall(line)
        # find place where ending head tag and unclosed link tag is
        if '.css"></head>' in line:
          # replace previous text with new script tags and closing link tag
          print(line.replace('.css"></head>', f'.css" type="text/css" />{new_script_tags}</head>'), end='')
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

  # catch general exception
  except Exception:
    print('An error occured.')

# call function
move_script_tags()

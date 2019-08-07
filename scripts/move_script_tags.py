#!/usr/bin/env python3

import fileinput # import fileinput module
import re # import regular expression module

# define move_script_tags function
def move_script_tags():

  # create vars
  filepath = '../public/index.html'

  # regex for identifying script tags
  script_tag_regex = re.compile(r'(<script src=\"(?:runtime|polyfills-es5|polyfills|main|vendor|scripts)\.(?:#?(?:[\da-fA-F]{2})(?:[\da-fA-F]{2})(?:[\da-fA-F]{2})){3}[\da-fA-F]{2}\.js\"(?:\snomodule)?><\/script>)')

  new_script_tags = ''

  # open index.html file for reading
  index_file = open(filepath, 'r')

  # loop through each line in file
  for line in index_file:
    # store script tags in var
    script_tags = script_tag_regex.findall(line)
    # if script tags exist in line
    if script_tags:
      # set new script tags to joined array and add defer attr to each script element
      new_script_tags = ''.join(script_tags).replace('></script>', ' defer="defer"></script>')

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
        print(line.replace('.css"></head>', f'.css" />{new_script_tags}</head>'), end='')
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

# call function
move_script_tags()

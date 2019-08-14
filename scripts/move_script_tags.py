#!/usr/bin/env python3

"""This program moves around the script tags in the `public/index.html` file."""

import sys # import system module
import re # import regular expression module
from fileinput import FileInput # import fileinput module


# define move_script_tags function
def move_script_tags():
  """
  The purpose of this function is to:
    1. move the script tags from the `public/index.html` from the bottom to the top
    2. add the defer attributes to each one of those script tags
    3. add the `type="text/javascript"` mime-type attribute to script tags that don't have `type="module"`
    4. close of the link tag with the main stylesheet attached to it and add `type="text/css"`
  """

  print('Moving around script tags in index.html ... ')

  # regex for identifying script tags (constant)
  # use https://regexr.com for testing regular expressions
  SCRIPT_TAG_REGEX = re.compile(r'((?:<script src=\")(?:(?:runtime|polyfills|main|vendor|scripts)(?:-?(?:(?:es(?:(?:201)?[56789]))|(?:latest)))?)(?:\.)(?:(?:#?(?:[\da-fA-F]{2}){3}){3}(?:[\da-fA-F]){2})(?:\.js\")(?:(?:\stype="module")?(?:\snomodule)?)(?:><\/script>))')

  # create vars

  # file path var
  filepath = '../public/index.html'

  # future script tag string from joined script tag strings array
  new_script_tags = ''

  # wrap file I/O logic in try block
  try:

    # the first file I/O operation will store the script tags in a variable

    # open index.html file for reading
    index_file = open(filepath, 'r')

    # loop through each line in file
    for line in index_file:

      # store script tags in list
      script_tags = SCRIPT_TAG_REGEX.findall(line)

      # if script tags exist in line
      if script_tags:

        # add text/javascript mime type if type="module" does not exist in script tag
        for index, script_tag in enumerate(script_tags):
          if 'type="module"' not in script_tag:
            script_tags[index] = script_tag.replace('src="', 'type="text/javascript" src="')

        # set new script tags to joined array and add the defer attr to each script element
        new_script_tags = '\n'.join(script_tags).replace('></script>', ' defer></script>')

    # close file from reading
    index_file.close()

    # the second file I/O operation wil move around the script tags regardless of formatting and close
    # off the stylesheet link tag and add its proper mime type

    # use fileinput to open up index.html file and create backup before editing
    with FileInput(filepath, inplace=True, backup='.bak') as file:

      # loop through each line in file
      for line in file:

        # store script tags in list variable
        script_tags = SCRIPT_TAG_REGEX.findall(line)

        # do various checks that depend on formatting

        # if the link tag and the closing head tag on the same line
        if ('.css">' in line or '<link rel="stylesheet" href="styles.' in line) and '</head>' in line:
          sys.stdout.write(line.replace('.css"></head>', f'.css" />\n\n{new_script_tags}\n</head>')
                               .replace('rel="stylesheet"', 'rel="stylesheet" type="text/css"'))

        # if the link tag is not on the same line as the head tag
        elif '</head>' in line and ('.css">' not in line or '<link rel="stylesheet" href="styles.' not in line):
          sys.stdout.write(line.replace('</head>', f'{new_script_tags}\n</head>'))

        # if the head tag is not on the same line as the link tag (different condition)
        elif ('.css">' in line or '<link rel="stylesheet" href="styles.' in line) and '</head>' not in line:
          sys.stdout.write(line.replace('.css">', '.css" />\n\n')
                               .replace('rel="stylesheet"', 'rel="stylesheet" type="text/css"'))

        # check if script tags are in current line
        elif script_tags:

          # loop thru script tags in bottom of file
          for i in range(len(script_tags)):
            # remove script tags from bottom of file
            line = line.replace(script_tags[i], '')

          # write changes
          sys.stdout.write(line)

        # otherwise...
        else:
          # print the other lines
          sys.stdout.write(line)

    # close the fileinput stream
    FileInput().close()

    print('Done!', end='\n\n')

  # catch file not found error
  except FileNotFoundError:
    print('Error, index.html file not found.', end='\n\n')

  # general exception
  except Exception as e:
    print(f'An error occurred: {str(e)}', end='\n\n')

# call function
move_script_tags()

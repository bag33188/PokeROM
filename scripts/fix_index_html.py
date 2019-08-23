#!/usr/bin/env python3

"""This program does various fixes on the `public/index.html` file."""

import sys # import system module
import re # import regular expression module
from fileinput import FileInput # import fileinput module

class FixIndexHtml:
  """
  This class contains all of the functionality for fixing the `public/index.html` file.
  """

  # create filepath class-property
  filepath = ''

  # define constructor
  def __init__(self, filepath):
    # initialize filepath
    self.filepath = filepath

  # define move_script_tags method
  def move_script_tags(self):
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

    # future script tag string from joined script tag strings array
    new_script_tags = ''

    # wrap file I/O logic in try block
    try:

      # the first file I/O operation will store the script tags in a variable

      # open index.html file for reading
      index_file = open(self.filepath, 'r')

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
          new_script_tags = ('\n'.join(script_tags).replace('></script>', ' defer></script>')
                                                   .replace('type="module" ', '')
                                                   .replace('<script src="', '<script type="module" src="'))

      # close file from reading
      index_file.close()

      # the second file I/O operation wil move around the script tags regardless of formatting and close
      # off the stylesheet link tag and add its proper mime type

      # use fileinput to open up index.html file and create backup before editing
      with FileInput(self.filepath, inplace=True, backup='.bak') as file:

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
            sys.stdout.write(line.replace('.css">', '.css" />\n')
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
      print(f'Error, index.html file not found (looking in `{self.filepath}`.)', end='\n\n')

    # general exception
    except Exception as err:
      print(f'An error occurred:\n{str(err)}', end='\n\n')

  # define insert_comment method
  def insert_comment(self):
    """
    This function inserts a very important comment right below the `<!DOCTYPE html>` declaration in the
    `../public/index.html` file. It will also convert a lowercase `<!doctype html>` to an uppercase `<!DOCTYPE html>`
    if it needs to.
    """

    print('Inserting comment into index.html ... ')

    # use try block in case file is not found
    try:

      # define very important comment constant
      IMPORTANT_COMMENT = '<!-- May the source be with you! -->'

      # define vars
      text_to_search = '<!DOCTYPE html>'
      replacement_text = f'<!DOCTYPE html>\n{IMPORTANT_COMMENT}\n'

      # use fileinput to edit file
      with FileInput(self.filepath, inplace=True, backup='.bak1') as file:

        # loop thru each line in file
        for line in file:

          # add comment
          if text_to_search in line:

            # check if doctype declaration is on its own line
            if len(line.strip()) == 15:
              # if so, strip the line of any trailing and/or leading whitespace/tabs
              line = line.strip()
              # then insert the comment
              sys.stdout.write(line.replace(text_to_search, replacement_text))
            # otherwise
            else:
              # skip string trimming and insert comment
              sys.stdout.write(line.replace(text_to_search, replacement_text))

          # replace declaration and add comment
          elif text_to_search.lower() in line:
            line = line.strip()
            sys.stdout.write(line.replace(text_to_search.lower(), replacement_text))

          # print other lines
          else:
            sys.stdout.write(line)

      # close file stream
      FileInput().close()

      print('Done!', end='\n\n')

    # catch file not found error
    except FileNotFoundError:
      print(f'Error, index.html file not found (looking in `{self.filepath}`.)', end='\n\n')

    # catch general exception
    except Exception as err:
      print(f'An error occurred:\n{str(err)}', end='\n\n')

  # define add_positive_ssl_trusted_logo method
  def add_positive_ssl_trusted_logo(self):
    """
    This method adds the PositiveSSL trusted logo script to the bottom of the
    `../public/index.html` file as a comment.
    """

    print('Inserting PositiveSSL trusted logo as comment ... ')

    # define main const
    POSITIVE_SSL_HTML = (
                          '<!--\n'
                          '  <script type="text/javascript"> //<![CDATA[\n'
                          '  var tlJsHost = ((window.location.protocol == "https:") ? "https://secure.trust-provider.com/" : "http://www.trustlogo.com/");\n'
                          '  document.write(unescape("%3Cscript src=\'" + tlJsHost + "trustlogo/javascript/trustlogo.js\' type=\'text/javascript\'%\\3E%3C/script%\\3E"));\n'
                          '  //]]></script>\n'
                          '  <script language="JavaScript" type="text/javascript">\n'
                          '\tTrustLogo("https://www.positivessl.com/images/seals/positivessl_trust_seal_sm_124x32.png", "POSDV", "none");\n'
                          '  </script>\n'
                          '-->\n'
                        )

    # encapsulate file I/O logic in try-except block in case of errors
    try:

      # use fileinput to edit file
      with FileInput(self.filepath, inplace=True, backup='.bak2') as file:

        # loop thru each line in file
        for line in file:

          # check if line has body
          if '</head>' in line:
            # print the line
            print(line.replace('</head>', f'{POSITIVE_SSL_HTML}</head>'), end='')

          # otherwise...
          else:
            # print other lines
            print(line, end='')

      print('Done!', end='\n\n')

    # catch file not found error
    except FileNotFoundError:
      print(f'Error, index.html file not found (looking in `{self.filepath}`.)', end='\n\n')

    # catch general exception
    except Exception as err:
      print(f'An error occurred:\n{str(err)}', end='\n\n')

# apply fixes to index.html file
index_html = FixIndexHtml('../public/index.html')
index_html.move_script_tags()
index_html.insert_comment()
index_html.add_positive_ssl_trusted_logo()

#!/usr/bin/env python3

"""The purpose of this program is to insert a very important comment into the `../public/index.html` file."""

from fileinput import FileInput # import fileinput module

# define main function
def insert_comment():
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
    filepath = '../public/index.html'
    text_to_search = '<!DOCTYPE html>'
    replacement_text = f'<!DOCTYPE html>\n{IMPORTANT_COMMENT}\n'

    # use fileinput to edit file
    with FileInput(filepath, inplace=True, backup='.bak1') as file:

      # loop thru each line in file
      for index, line in enumerate(file):

        # add comment
        if text_to_search in line:

          # check if doctype declaration is on its own line
          if len(line.strip()) == 15:
            # if so, strip the line of any trailing and/or leading whitespace/tabs
            line = line.strip()
            # then insert the comment
            print(line.replace(text_to_search, replacement_text), end='')
          # otherwise
          else:
            # skip string trimming and insert comment
            print(line.replace(text_to_search, replacement_text), end='')

        # replace declaration and add comment
        elif text_to_search.lower() in line:
          print(line.replace(text_to_search.lower(), replacement_text), end='')

        # print other lines
        else:
          print(line, end='')

    # close file stream
    FileInput().close()

    print('Done!', end='\n\n')

  # catch file not found error
  except FileNotFoundError:
    print('Error: file not found.', end='\n\n')

  # catch general exception
  except Exception as e:
    print(f'An error occurred: {str(e)}', end='\n\n')

# call main function
insert_comment()

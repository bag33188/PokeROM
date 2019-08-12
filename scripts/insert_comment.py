#!/usr/bin/env python3

"""The purpose of this program is to insert a very important comment into the `../public/index.html` file."""

from fileinput import FileInput # import fileinput module

# define main function
def insert_comment():
  """
  This function inserts a comment right below the `<!DOCTYPE html>` declaration in the `../public/index.html` file.
  It will also convert a lowercase `<!doctype html>` to an uppercase `<!DOCTYPE html>` if it needs to.
  """

  print('Inserting comment into index.html ... ')

  # use try block in case file is not found
  try:

    # define vars
    filepath = '../public/index.html'
    text_to_search = '<!DOCTYPE html>'
    replacement_text = '<!DOCTYPE html>\n<!-- May the source be with you! -->\n'

    # use fileinput to edit file
    with FileInput(filepath, inplace=True) as file:

      # loop thru each line in file
      for line in file:

        # add comment
        if text_to_search in line:
          print(line.replace(text_to_search, replacement_text), end='')

        # replace declaration and add comment
        elif text_to_search.lower() in line:
          print(line.replace(text_to_search.lower(), replacement_text), end='')

        # print other lines
        else:
          print(line, end='')

    print('Done!', end='\n\n')

  # catch file not found error
  except FileNotFoundError:
    print('Error: file not found.', end='\n\n')

  # catch general exception
  except Exception:
    print('An error occurred.', end='\n\n')

# call main function
insert_comment()

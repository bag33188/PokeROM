#!/usr/bin/env python3

"""The purpose of this program is to add the `browserconfig.xml` file to the `../public` folder (for mstile)."""

# define main function
def add_browserconfig():
  """
  This function adds the `browserconfig.xml` file to the `../public` folder.
  If such a file already exists, this function will override it.
  """

  print('Adding browserconfig.xml ... ')

  # encapsulate main functionality in try block
  try:

    # create browserconfig multiline string builder
    browserconfig = (
                      '<?xml version="1.0" encoding="utf-8"?>\n'
                      '<browserconfig>\n'
                      '\t<msapplication>\n'
                      '\t\t<tile>\n'
                      '\t\t\t<square150x150logo src="assets/icons/mstile-150x150.png"/>\n'
                      '\t\t\t<TileColor>#ffffff</TileColor>\n'
                      '\t\t</title>\n'
                      '\t</msapplication>\n'
                      '</browserconfig>\n'
                    )

    # create filepath var
    filepath = '../public/browserconfig.xml'

    # create/open file
    file = open(filepath, 'w+')

    # write data to file
    file.write(browserconfig)

    # close file stream
    file.close()

    print('Done!', end='\n\n')

  # catch general exception
  except Exception as e:
    print(f'An error occurred: {str(e)}', end='\n\n')

# call main function
add_browserconfig()

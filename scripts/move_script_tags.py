#!/usr/bin/env python3

import fileinput
import re

def move_script_tags():

  filepath = '../public/index.html'

  script_tag_regex = re.compile(r'(<script src=\"(?:runtime|polyfills-es5|polyfills|main|vendor|scripts)\.(?:#?(?:[\da-fA-F]{2})(?:[\da-fA-F]{2})(?:[\da-fA-F]{2})){3}[\da-fA-F]{2}\.js\"(?:\snomodule)?><\/script>)')

  new_script_tags = ''

  index_file = open(filepath, 'r')

  for line in index_file:
    script_tags = script_tag_regex.findall(line)
    if(script_tags):
      new_script_tags = ''.join(script_tags).replace('></script>', ' defer="defer"></script>')

  index_file.close()

  with fileinput.FileInput(filepath, inplace=True, backup='.bak') as file:
    for line in file:
      script_tags = script_tag_regex.findall(line)
      if ('.css"></head>' in line):
        print(line.replace('.css"></head>', f'.css" />{new_script_tags}</head>'), end='')
      elif (script_tags):
        print(line.replace(script_tags[0], '')
              .replace(script_tags[1], '')
              .replace(script_tags[2], '')
              .replace(script_tags[3], '')
              .replace(script_tags[4], '')
              .replace(script_tags[5], '')
        , end='')
      else:
        print(line, end='')

  fileinput.close()

move_script_tags()

#!/usr/bin/env ruby

=begin
Count Files Git Ruby Script
---------------------------
To run:
  ruby count_files_git.rb

Notes:
  * Must have ruby installed
=end

# define count_files_git function
def count_files_git()
  puts 'Counting files on github ... '
  print "\n"

  # define commands to run in single string
  command = 'cd .. && echo "Number of files: " && git ls-files | wc -l'

  # execute commands to count files on github
  num_files = system(command)

  print "\n"
  puts 'Done!'
end

# call count_files_git function
count_files_git()

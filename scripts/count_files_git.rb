#!/usr/bin/env ruby

=begin
Count Files Git Ruby Script
---------------------------
To run:
  ruby count_files_git.rb
Notes1:
  * Must have ruby installed
=end

# define main function
def count_files_git()
  # execute commands to count files on github
	system('cd .. && git ls-files | wc -l')
end

# call main function
count_files_git()

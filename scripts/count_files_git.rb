#!/usr/bin/env ruby

=begin
Count Files Git Ruby Script
---------------------------
To run:
  ruby count_files_git.rb
Notes1:
  * Must have ruby installed
=end

# define count_files_git function
def count_files_git()
  puts 'Counting files on github ... '
  print "\n"

  print 'Number of files: '
  # execute commands to count files on github
	num_files = system('cd .. && git ls-files | wc -l')

	print "\n"
	puts 'Done!'
end

# call count_files_git function
count_files_git()

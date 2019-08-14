#!/usr/bin/env ruby

def count_files_git()
	system('cd .. && git ls-files | wc -l')
end

count_files_git()

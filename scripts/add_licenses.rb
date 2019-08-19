#!/usr/bin/env ruby

=begin
Add ISC License Ruby Script
---------------------------
To run:
  ruby add_licenses.rb

Notes:
  * Must have ruby installed
=end

require 'date' # import date module

# define class AddLicenses
class AddLicenses

  # create constructor
  def initialize(name)
     print "Adding licenses ... \n"

    # initiate name property (@ = class variable)
    @name = name
  end

  # define isc license method
  def get_isc_license(name)
    # define isc license
    isc_license = "
    ISC LICENSE

    Copyright #{Date.today.year} #{name}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    "
    # remove extra spacing (indents) and first newline
    isc_license = isc_license.gsub '    ', ''
    isc_license = isc_license.sub /\n/, ''

    # return the license text
    return isc_license
  end

  # define mit license method
  def get_mit_license(name)
    # define mit license
    mit_license = "
    MIT LICENSE

    Copyright #{Date.today.year} #{name}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    "

    # remove extra spacing (indents) and first newline
    mit_license = mit_license.gsub '    ', ''
    mit_license = mit_license.sub /\n/, ''

    # return license text
    return mit_license
  end

  # create method for writing license text to file
  def write_file(filepath)
    # create new file or open existing one from filepath parameter
    file = File.open(filepath, 'w')
    # write licenses to file; concat with double new line
    file.write(get_isc_license(@name) + "\n\n" + get_mit_license(@name))
    # close the file stream
    file.close

    puts "Done!\n\n"
  end
end

# instantiate AddLicenses class
licenses = AddLicenses.new 'Broccolini'

# write licenses to file
licenses.write_file('../public/LICENSE')

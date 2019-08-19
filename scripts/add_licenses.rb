#!/usr/bin/env ruby

=begin
Add ISC License Ruby Script
---------------------------
To run:
  ruby add_licenses.rb

Notes:
  * Must have ruby installed
=end

require 'date'

class AddLicenses
  def initialize(name)
    @name = name
  end

  def get_isc_license(name)
    isc_license = "
    ISC LICENSE

    Copyright #{Date.today.year} #{name}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    "
    isc_license = isc_license.gsub '    ', ''
    isc_license = isc_license.sub /\n/, ''
    return isc_license
  end

  def get_mit_license(name)
    mit_license = "
    MIT LICENSE

    Copyright #{Date.today.year} #{name}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    "
    mit_license = mit_license.gsub '    ', ''
    mit_license = mit_license.sub /\n/, ''
    return mit_license
  end

  def write_file(filepath)
    file = File.open(filepath, 'w')
    file.write(get_isc_license(@name) + "\n\n" + get_mit_license(@name))
    file.close
  end
end

licenses = AddLicenses.new 'Broccolini'
licenses.write_file('../public/LICENSE')

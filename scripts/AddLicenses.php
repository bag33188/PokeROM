<?php
  namespace scripts;

  class AddLicenses {

    private static function get_isc_license($name) {
      $isc_license = '' .
        'ISC LICENSE' .
        "\n" .
        "Copyright " . date("Y") . " " .$name .
        "\n" .
        'Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby ' .
        'granted, provided that the above copyright notice and this permission notice appear in all copies.' .
        "\n" .
        'THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ' .
        'ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, ' .
        'DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR ' .
        'PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION ' .
        'WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.';
      return $isc_license;
    }

    private static function get_mit_license($name) {
      $mit_license = '' .
        'MIT LICENSE' .
        "\n" .
        "Copyright " . date("Y") . " " . $name .
        "\n" .
        'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated ' .
        'documentation files (the "Software"), to deal in the Software without restriction, including without limitation ' .
        'the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and' .
        ' to permit persons to whom the Software is furnished to do so, subject to the following conditions:' .
        "\n" .
        'The above copyright notice and this permission notice shall be included in all copies or substantial portions ' .
        'of the Software.' .
        "\n" .
        'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED ' .
        'TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. ' .
        'IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, ' .
        'WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR ' .
        'THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
      return $mit_license;
    }

    public static function write_file($filepath) {
      echo "Adding licenses ... \n";
      if (!defined('NAME')) {
        define('NAME', 'Broccolini');
      }
      $license_data = '' .
        'pokerom' .
        "\n" .
        'ISC' .
        "\n" .
        'MIT' .
        "\n\n" .
        self::get_isc_license(NAME) .
        "\n\n" .
        self::get_mit_license(NAME) .
        "\n";
      $file = fopen($filepath, 'w');
      fwrite($file, $license_data);
      echo "Done!\n\n";
    }
  }

  AddLicenses::write_file('../public/LICENSE');

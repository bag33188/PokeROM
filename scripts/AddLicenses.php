<?php
  namespace scripts;

  // reference Exception and Error namespaces
  use Exception;
  use Error;

  /**
   * Class AddLicenses
   * @package scripts
   */
  class AddLicenses {

    // create name constant (class property)
    const NAME = "Broccolini";

    /**
     * AddLicenses constructor.
     */
    public function __construct()
    {
      // throw error if new instance of this class is created.
      throw new Error("Error: AddLicenses class is not meant to be instantiated.");
    }

    /**
     * @param string $name Copyright owner's name.
     * @return string ISC License.
     */
    private static function get_isc_license($name) {
      // store current year in var
      $current_year = date("Y");
      // create empty-str var for isc license
      $isc_license = "";
      // isc license data
      $isc_license_data = array(
        "ISC LICENSE",
        "\n",
        "Copyright " . $current_year . " " . $name,
        "\n",
        "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby ",
        "granted, provided that the above copyright notice and this permission notice appear in all copies.",
        "\n",
        "THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ",
        "ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, ",
        "DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR ",
        "PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION ",
        "WITH THE USE OR PERFORMANCE OF THIS SOFTWARE."
      );
      // loop thru license data
      for ($i = 0; $i < count($isc_license_data); $i++) {
        // append to str var
        $isc_license .= $isc_license_data[$i];
      }
      // return isc license
      return $isc_license;
    }

    /**
     * @param string $name Copyright owner's name.
     * @return string MIT License.
     */
    private static function get_mit_license($name) {
      // store current year in var
      $current_year = date("Y");
      // create empty-str var for mit license
      $mit_license = "";
      // mit license data
      $mit_license_data = array(
        "MIT LICENSE",
        "\n",
        "Copyright " . $current_year . " " . $name,
        "\n",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated ",
        "documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation ",
        "the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and",
        " to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        "\n",
        "The above copyright notice and this permission notice shall be included in all copies or substantial portions ",
        "of the Software.",
        "\n",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED ",
        "TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. ",
        "IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, ",
        "WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR ",
        "THE USE OR OTHER DEALINGS IN THE SOFTWARE."
      );
      // loop thru license data
      for ($i = 0; $i < count($mit_license_data); $i++) {
        // append to str var
        $mit_license .= $mit_license_data[$i];
      }
      // return mit license
      return $mit_license;
    }

    /**
     * @param string $filepath File path to write LICENSE file.
     * @return void Nothing.
     */
    public static function write_file($filepath) {
      // encapsulate main logic in try catch (in case of errors)
      try {
        echo "Adding licenses ... \n";
        // create licenses var (empty str)
        $licenses = "";
        // store license data in var
        $license_data = array(
          "pokerom",
          "\n",
          "ISC",
          "\n",
          "MIT",
          "\n\n",
          // get isc license (pass in name const)
          self::get_isc_license(self::NAME),
          "\n\n",
          // get mit license (pass in name const)
          self::get_mit_license(self::NAME),
          "\n"
        );
        // loop thru license data
        foreach ($license_data as $data) {
          // append to str
          $licenses .= $data;
        }
        // open new file for writing
        $file = fopen($filepath, "w");
        // write licenses text to new file
        fwrite($file, $licenses);
        echo "Done!\n\n";
      } catch (Exception $e) {
        // catch any exceptions
        echo $e->getMessage();
        // stop script
        die(1);
      }
    }
  }

  /**
   * @return void Nothing.
   */
  function main() {
    // define filepath const if not already defined
    if (!defined("FILEPATH")) {
      define("FILEPATH", "../public/LICENSE");
    }
    // call `write_file` method from `AddLicenses` class (passing in `FILEPATH` constant)
    AddLicenses::write_file(FILEPATH);
  }

  // invoke main method
  main();

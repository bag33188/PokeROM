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
    const APP_NAME = "PokeROM";

    /**
     * AddLicenses constructor.
     */
    public function __construct()
    {
      // throw error if new instance of this class is created.
      throw new Error("Error: The `AddLicenses` class is not meant to be instantiated.");
    }

    /**
     * @return string ISC License.
     */
    private static function get_isc_license() {
      // create isc license var
      $isc_license = NULL;
      // encapsulate main logic in try catch
      try {
        // store file data in vars
        $filename = "../LICENSE";
        $file = fopen($filename, "r");
        $filesize = filesize($filename);
        $content = fread($file, $filesize);
        fclose($file);
        // update isc license var
        $isc_license = "ISC LICENSE\n" . str_replace("\n\n", "\n", $content);
      } catch (Exception $e) {
        // handle any exceptions
        echo "Error:\nCode: " . strval($e->getCode()) . "\nMessage: " . $e->getMessage();
        // kill script
        die(1);
      }
      // return isc license text
      return $isc_license;
    }

    /**
     * @return string MIT License.
     */
    private static function get_mit_license() {
      // create mit license var
      $mit_license = NULL;
      // encapsulate main logic in try catch
      try {
        // store file data in vars
        $filename = "../client/LICENSE";
        $file = fopen($filename, "r");
        $filesize = filesize($filename);
        $content = fread($file, $filesize);
        fclose($file);
        // update mit license var
        $mit_license = "MIT LICENSE\n" . str_replace("\n\n", "\n", $content);
      } catch (Exception $e) {
        // handle any exceptions
        echo "Error:\nCode: " . strval($e->getCode()) . "\nMessage: " . $e->getMessage();
        // kill script
        die(1);
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
          strtolower(self::APP_NAME),
          "\n",
          "ISC",
          "\n",
          "MIT",
          "\n\n",
          // get isc license (pass in name const)
          self::get_isc_license(),
          "\n\n",
          // get mit license (pass in name const)
          self::get_mit_license()
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
        // close file
        fclose($file);
        echo "Done!\n\n";
      } catch (Exception $e) {
        // catch any exceptions
        echo "Error:\nCode: " . strval($e->getCode()) . "\nMessage: " . $e->getMessage();
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
    # AddLicenses::write_file(FILEPATH);
    AddLicenses::write_file(FILEPATH);
  }

  // invoke main method
  main();

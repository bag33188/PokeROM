<?php
  namespace scripts;

  // reference both Error and Exception namespaces
  use Error;
  use Exception;

  /**
   * @param string[] $env_arr Array of Node.JS environment vars.
   * @return void Nothing.
   */
  function env($env_arr) {
    try {
      // define filename const if not already defined
      if (!defined("FILENAME")) {
        define("FILENAME", "../.env");
      }

      // check for errors
      // if file already exists ...
      if (file_exists(FILENAME)) {
        echo "Error: the file `" . FILENAME . "` already exists in the path `/`.\n";
        // kill script
        die(1);
      }
      // if parameter is not a string array ...
      if (!is_array($env_arr)) {
        echo "Error: argument must be of type string array.";
        die(1);
      } else {
        foreach ($env_arr as $item) {
          if (gettype($item) != "string") {
            echo "Error: argument must be of type string array.";
            // stop script
            die(1);
          }
        }
      }

      // open new file for appending/writing
      $file = fopen(FILENAME, "a");

      // check if error opening new file
      if ($file == false) {
        throw new Error("Error opening new file.");
      }

      // loop thru each env var in env array
      foreach ($env_arr as $env_var) {
        // write each env var to file
        fwrite($file, $env_var . "\n");
      }

      // close file
      fclose($file);
    } catch (Exception $e) {
      // catch any exceptions
      echo "Error:\nCode: " . strval($e->getCode()) . "\nMessage: " . $e->getMessage();
      // kill script
      die(1);
    }
  }

<?php
  namespace scripts;
  use Error;

  /**
   * @return void Nothing.
   */
  function add_env_dev() {
    $filename = "../.env";

    if (file_exists($filename)) {
      echo "Error: the file `" . $filename . "` already exists in the path `/`.\n";
      die(1);
    }

    $file = fopen($filename, "a");

    if ($file == false) {
      throw new Error("Error opening new file.");
    }

    $lines = array('NODE_ENV=development', 'PORT=8080');

    foreach ($lines as $line) {
      fwrite($file, $line . "\n");
    }

    fclose($file);
  }

  add_env_dev();


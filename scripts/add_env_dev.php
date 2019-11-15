<?php
  namespace scripts;
  use Error;

  function add_env_dev() {
    $filepath = "../";
    $filename = ".env";

    if (file_exists($filepath . $filename)) {
      echo "Error: the file `" . $filename . "` already exists in the path `" . $filepath . "`.\n";
      die(1);
    }

    $file = fopen($filepath . $filename, "a");

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


<?php

  function add_env_prod() {
    $filepath = "../";
    $filename = ".env";

    if (file_exists($filepath . $filename)) {
      print "Error: the file `" . $filename . "` already exists in the path `" . $filepath . "`.\n";
      die(1);
    }

    $file = fopen($filepath . $filename, "a");

    if ($file == false) {
      throw new Error("Error opening new file.");
    }

    $lines = array('NODE_ENV=production', 'PORT=44300');

    foreach ($lines as $line) {
      fwrite($file, $line . "\n");
    }

    fclose($file);
  }

  add_env_prod();


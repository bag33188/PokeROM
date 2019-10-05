<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <?php
      $filePath = "../docs/swagger-definition.yml";
      $file = fopen($filePath, "r");
      $fileSize = filesize($filePath);
      $fileText = fread($file, $fileSize);
      preg_match("(version: v\d)", $fileText, $version);
      $apiVersion = str_replace("version: ", "", $version[0]);
    ?>
    <meta http-equiv="refresh" content="0;url=/api/docs/<?php echo $apiVersion; ?>" />
    <title>API Docs (Redirect)</title>
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
  </head>
  <body>
    <h1>Redirecting to <?php echo "/api/docs/$apiVersion"; ?> ... </h1>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <?php
      function getApiVersion() {
        $filePath = "../docs/swagger-definition.yml";
        $file = fopen($filePath, "r");
        $fileSize = filesize($filePath);
        $fileText = fread($file, $fileSize);
        $versionExists = preg_match("(version: v\d)", $fileText, $version);
        if ($versionExists == true) {
          $apiVersion = str_replace("version: ", "", $version[0]);
        } else {
          $apiVersion = "v0";
        }
        return $apiVersion;
      }
    ?>
    <meta http-equiv="refresh" content="0;url=/api/docs/<?php echo getApiVersion(); ?>" />
    <title>API Docs (Redirect)</title>
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    <style type="text/css">
      *,
      *::before,
      *::after {
        box-sizing: border-box !important;
      }
      body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>Redirecting to <?php
      echo "<code>/api/docs/" . getApiVersion() . "</code>";
    ?> ... </h1>
  </body>
</html>

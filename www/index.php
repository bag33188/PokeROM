<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <?php
      function getApiVersionData() {
        $filePath = "../docs/swagger-definition.yml";
        $file = fopen($filePath, "r");
        $fileSize = filesize($filePath);
        $fileText = fread($file, $fileSize);
        define("VERSION_REGEX", "/((?:version:)(?:\s)(?:v\d))/i");
        $versionExists = preg_match(VERSION_REGEX, $fileText, $version);
        if ($versionExists == true) {
          $version[0] = str_replace("version: ", "", $version[0]);
          return array(
            (object) array("success" => true, "api_version" => $version[0])
          );
        } else {
          return array(
            (object) array("success" => false, "api_version" => NULL)
          );
        }
      }
      $apiVersionData = getApiVersionData()[0];
    ?>
    <meta http-equiv="refresh" content="0;url=/api/docs/<?php echo $apiVersionData->api_version; ?>/" />
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
    <script type="text/javascript">
      "use strict";
      <?php if ($apiVersionData->success == 1): ?>
        console.log("API Version: <?php echo $apiVersionData->api_version; ?>");
      <?php else: ?>
        console.error("Error getting API version.");
      <?php endif; ?>
    </script>
  </head>
  <body>
    <h1>
      <?php if ($apiVersionData->success == 0) { ?>
        Error redirecting to API Docs (API Version not found).
      <?php } else { ?>
        Redirecting to <code>/api/docs/<?php echo $apiVersionData->api_version; ?></code> ...
      <?php } ?>
    </h1>
  </body>
</html>

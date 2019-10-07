<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <?php
      function getApiVersion() {
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
      $apiVersion = getApiVersion()[0];
    ?>
    <meta http-equiv="refresh" content="0;url=/api/docs/<?php echo $apiVersion->api_version; ?>/" />
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
      console.log("<?php
        echo ($apiVersion->success == 1) ?
          "API Version: " . $apiVersion->api_version :
          "Error getting API version.";
      ?>");
    </script>
  </head>
  <body>
    <h1>Redirecting to <?php
      ($apiVersion->success == 0) ?
        print "<code>ERROR_GETTING_API_VERSION</code>" :
        print "<code>/api/docs/" . $apiVersion->api_version . "/</code>";
    ?> ... </h1>
  </body>
</html>

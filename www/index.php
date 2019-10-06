<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <?php
      /**
       * @return array API Version Data.
       */
      function getApiVersion() {
        // define file data
        $filePath = "../docs/swagger-definition.yml";
        $file = fopen($filePath, "r");
        $fileSize = filesize($filePath);
        $fileText = fread($file, $fileSize);

        // define regular expression for identifying api version in YAML data
        define("VERSION_REGEX", "/((?:versaion:)(?:\s)(?:v\d))/i");

        // match api version from file text to version regexp
        $versionExists = preg_match(VERSION_REGEX, $fileText, $version);

        // if api version exists in YAML data ...
        if ($versionExists == true) {
          // replace version text to extract out api version value
          $apiVersion = str_replace("version: ", "", $version[0]);

          // return php array of object-literal
          # schema
          # ======
          # array(1) {
          # [0]=>
          # object(stdClass)#1 (2) {
          # ["success"]=> bool(true)
          # ["api_version"]=> string(2) "v\d"
          # }
          # }
          return array(
            (object)array("success" => true, "api_version" => $apiVersion)
          );
        } else { // if it doesn't exist ...
          // return php array of object-literal
          # schema
          # ======
          # array(1) {
          # [0]=>
          # object(stdClass)#1 (2) {
          # ["success"]=> bool(false)
          # ["api_version"]=> NULL
          # }
          # }
          return array(
            (object)array("success" => false, "api_version" => NULL)
          );
        }
      }

      // set variable to function to make referencing easier
      $apiVersion = getApiVersion();
    ?>
    <meta http-equiv="refresh" content="1000000;url=/api/docs/<?php
      // loop through api version data
      for ($i = 0; $i < count($apiVersion); $i++) {
        // output the api's version text
        echo $apiVersion[$i]->api_version;
      }
    ?>/" />
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
        // loop thru api version data
        for ($i = 0; $i < sizeof($apiVersion); $i++) {
          // check if api version exists
          echo ($apiVersion[$i]->success == 1) ?
            // if yes, log the api version to console
            "API Version: " . $apiVersion[$i]->api_version :
            // if no, log err msg to console
            "Error getting API version.";
        }
      ?>");
    </script>
  </head>
  <body>
    <h1>Redirecting to <?php
      // loop thru api version data
      foreach ($apiVersion as $versionData) {
        // check if version does not exist
        $apiVersionHTML = ($versionData->success == 0) ?
          // if version is absent, print out error
          print "<code>ERROR_GETTING_API_VERSION</code>" :
          // else print out the api's version along the the rest of the api docs url
          print "<code>/api/docs/" . $versionData->api_version . "/</code>";
      }
    ?> ... </h1>
  </body>
</html>

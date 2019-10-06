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
        $filePath = "../docs/swagger-definition.yml";
        $file = fopen($filePath, "r");
        $fileSize = filesize($filePath);
        $fileText = fread($file, $fileSize);
        $versionExists = preg_match("(version: v\d)", $fileText, $version);
        if ($versionExists == true) {
          $apiVersion = str_replace("version: ", "", $version[0]);
          return array(
            (object)array("success" => true, "api_version" => $apiVersion)
          );
        } else {
          return array(
            (object)array("success" => false, "api_version" => null)
          );
        }
      }
    ?>
    <meta http-equiv="refresh" content="0;url=/api/docs/<?php
      for ($i = 0; $i < count(getApiVersion()); $i++) {
        echo getApiVersion()[$i]->api_version;
      }
    ?>" />
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
        for ($i = 0; $i < sizeof(getApiVersion()); $i ++) {
          echo (getApiVersion()[$i]->success == 1) ?
            "API Version: " . getApiVersion()[$i]->api_version :
            "Error getting API version.";
        }
      ?>");
    </script>
  </head>
  <body>
    <h1>Redirecting to <?php
      foreach (getApiVersion() as $versionData) {
        $apiVersionHTML = ($versionData->success == 0) ?
          print "<code>ERROR_GETTING_API_VERSION</code>" :
          print "<code>/api/docs/" . $versionData->api_version . "</code>";
      }
    ?> ... </h1>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      include "./WWW.php";
      $apiVersionData = WWW::getApiVersionData()[0];
    ?>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
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
        Redirecting to <code>/api/docs/<?php echo $apiVersionData->api_version; ?>/</code> ...
      <?php } ?>
    </h1>
  </body>
</html>

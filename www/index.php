<?php
  include_once "WWW.php";
  $apiVersionData = www\WWW::getApiVersionData();
  $documentTitle = "API Docs (Redirect)";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta http-equiv="refresh" content="0;url=/api/docs/<?= $apiVersionData->api_version; ?>/" />
    <title><?= $documentTitle; ?></title>
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
        console.log("API Version: <?= $apiVersionData->api_version; ?>");
      <?php else: ?>
        console.error("Error getting API version.");
      <?php endif; ?>
    </script>
  </head>
  <body>
    <h1>
      <?php if ($apiVersionData->success == 0): ?>
        Error redirecting to API Docs (API Version not found).
      <?php else: ?>
        Redirecting to <code>/api/docs/<?= $apiVersionData->api_version; ?>/</code> ...
      <?php endif; ?>
    </h1>
  </body>
</html>

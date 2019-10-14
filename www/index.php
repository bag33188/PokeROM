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
      ::after,
      ::before {
        box-sizing: border-box;
      }
      :root {
        --white: #fff;
        --almost-black: #212529;
        --pink: #e83e8c;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: var(--almost-black);
        text-align: left;
        background-color: var(--white);
      }
      h1 {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
      code {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
        "Courier New", monospace;
        font-size: 1em;
      }
      h1 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
      }
      h1 {
        font-size: 2.5rem;
      }
      code {
        font-size: 87.5%;
        color: var(--pink);
        word-break: break-word;
      }
      .p-3 {
        padding: 1rem !important;
      }
      @media print {
        *,
        ::after,
        ::before {
          text-shadow: none !important;
          box-shadow: none !important;
        }
        body {
          min-width: 992px !important;
        }
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
  <body class="p-3">
    <h1>
      <?php if ($apiVersionData->success == 0): ?>
        Error redirecting to API Docs (API Version not found).
      <?php else: ?>
        Redirecting to <code>/api/docs/<?= $apiVersionData->api_version; ?>/</code> ...
      <?php endif; ?>
    </h1>
  </body>
</html>

<?php
  require_once "WWW.php";
  use www\WWW as WWW;
  use www\HTTP;
  $http = new HTTP();
  if ($http->isHTTP()) {
    $http->redirectToHTTPS();
  }
  $apiVersionData = WWW::getApiVersionData();
  $documentTitle = "API Docs (Redirect)";
  $cssColors = array(
    "white" => "fff",
    "black" => "000",
    "gray" => "808080",
    "almost-black" => "212529",
    "pink" => "e83e8c"
  );
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <?php include_once "metadata.inc.php"; ?>
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
        <?php foreach ($cssColors as $colorName => $colorCode): ?>
          --<?= $colorName; ?>: <?= "#" . $colorCode; ?>;
        <?php endforeach; ?>
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
      #container-wrapper {
        text-align: center;
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
    <div id="container-wrapper">
      <h1>
        <?php if ($apiVersionData->success == 0): ?>
          Error redirecting to API Docs (API Version not found).
        <?php else: ?>
          Redirecting to <code>/api/docs/<?= $apiVersionData->api_version; ?>/</code> ...
        <?php endif; ?>
      </h1>
    </div>
  </body>
</html>

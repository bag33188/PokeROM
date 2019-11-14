<?php
  require_once "WWW.php";
  use www\WWW as WWW;
  $www = new WWW();
  $productionMode = $www->isProductionMode();
  $currentUrl = $www->getCurrentUrl();
  $documentTitle = "Pok&eacute;ROM - Credits";
  $homeUrl = ($productionMode) ? "/" : "http://localhost:4200/";
  $me = "Broccolini";
  $creditsData = [
    (object) array("term" => "Front End (Client Side)", "definition" => $me),
    (object) array("term" => "Back End (Server Side)", "definition" => $me),
    (object) array("term" => "Server Admin/Management", "definition" => $me),
    (object) array("term" => "Database Engineering", "definition" => $me),
    (object) array("term" => "Testing", "definition" => $me),
    (object) array("term" => "Logo", "definition" => $me . " and Google"),
    (object) array("term" => "Images", "definition" => "Google"),
    (object) array("term" => "Icons", "definition" => "Fontawesome"),
    (object) array("term" => "Fonts", "definition" => "fontshop.com")
  ];
  $cssColors = array(
    "white" => "fff",
    "almost-black" => "212529",
    "anchor-blue" => "007bff",
    "anchor-hover-blue" => "0056b3",
    "light-gray" => "dee2e6"
  );
  $navData = [
    (object) array("href" => $homeUrl, "target" => "_self", "text" => "Home"),
    (object) array("href" => "./info.html", "target" => "_self", "text" => "Info"),
    (object) array("href" => "./languages.php", "target" => "_self", "text" => "Languages"),
    (object) array("href" => "./resources.html", "target" => "_self", "text" => "Resources"),
    (object) array("href" => $homeUrl . "sitemap.xml", "target" => "_blank", "text" => "Sitemap"),
    (object) array("href" => $homeUrl . "robots.txt", "target" => "_blank", "text" => "Robots")
  ];
  if (!$productionMode) {
    $apiVersion = $www->getApiVersionData()->api_version;
    $navObj = new stdClass();
    $navObj->href = "/api/docs/" . $apiVersion . "/";
    $navObj->target = "_self";
    $navObj->text = "Docs";
    $navData[] = $navObj;
  }
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <?php include_once "metadata.inc.php"; ?>
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
        font-weight: 500;
        line-height: 1.2;
        font-size: 2.5rem;
      }
      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      dl {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      dt {
        font-weight: 700;
      }
      dd {
        margin-bottom: 0.5rem;
        margin-left: 0;
      }
      a {
        color: var(--anchor-blue);
        text-decoration: none;
        background-color: transparent;
      }
      a:hover {
        color: var(--anchor-hover-blue);
        text-decoration: underline;
      }
      hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }
      .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }
      @media (min-width: 576px) {
        .container {
          max-width: 540px;
        }
      }
      @media (min-width: 768px) {
        .container {
          max-width: 720px;
        }
      }
      @media (min-width: 992px) {
        .container {
          max-width: 960px;
        }
      }
      @media (min-width: 1200px) {
        .container {
          max-width: 1140px;
        }
      }
      .border {
        border: 1px solid var(--light-gray) !important;
      }
      .rounded {
        border-radius: 0.25rem !important;
      }
      .mt-2 {
        margin-top: 0.5rem !important;
      }
      .m-4 {
        margin: 1.5rem !important;
      }
      .mt-4 {
        margin-top: 1.5rem !important;
      }
      .p-3 {
        padding: 1rem !important;
      }
      .text-center {
        text-align: center !important;
      }
      @media print {
        *,
        ::after,
        ::before {
          text-shadow: none !important;
          box-shadow: none !important;
        }
        a:not(.btn) {
          text-decoration: underline;
        }
        p {
          orphans: 3;
          widows: 3;
        }
        body {
          min-width: 992px !important;
        }
        .container {
          min-width: 992px !important;
        }
      }
      #nav {
        display: block;
        text-align: center;
        white-space: nowrap;
        margin-bottom: 1rem;
      }
    </style>
    <script type="text/javascript">
      "use strict";

      /**
       * @function
       * @name ready
       * @summary Ready
       * @description Document Ready function (JavaScript)
       * @param {function} callback Callback function.
       * @returns {void} Nothing.
       */
      function ready(callback) {
        if (document.readyState !== 'loading') {
          callback();
        } else if (document.addEventListener) {
          document.addEventListener('DOMContentLoaded', callback);
        } else {
          document.attachEvent('onreadystatechange', () => {
            if (document.readyState === 'complete') callback();
          });
        }
      }

      function insertIntro() {
        const intro = document.getElementById("intro");
        const iEl = document.createElement("i");
        const iElTxt = document.createTextNode("Sigh");
        iEl.append(iElTxt);
        intro.appendChild(iEl);
        const quadDotSpanEl = document.createElement("span");
        const quadDotSpanElTxt = document.createTextNode("....");
        quadDotSpanEl.append(quadDotSpanElTxt);
        intro.appendChild(quadDotSpanEl);
        const brEl = document.createElement("br");
        intro.appendChild(brEl);
        const infoSpanEl = document.createElement("span");
        const infoSpanElTxt = document.createTextNode("I wish there were more people on this list, but unfortunately this project was made solely by me (for legal reasons).");
        infoSpanEl.append(infoSpanElTxt);
        intro.appendChild(infoSpanEl);
      }
      ready(insertIntro);
    </script>
  </head>
  <body class="p-3">
    <noscript>
      <h1>Please enable JavaScript</h1>
    </noscript>
    <div class="container border rounded">
      <h1 class="text-center mt-2">Credits</h1>
      <div class="text-center">
        <p class="m-4" id="intro"><!-- content inserted via JavaScript --></p>
        <dl class="mt-4 text-center">
          <?php for ($i = 0; $i < count($creditsData); $i++): ?>
            <dt><?= $creditsData[$i]->term; ?></dt>
            <dd><?= $creditsData[$i]->definition; ?></dd>
          <?php endfor; ?>
        </dl>
      </div>
      <hr />
      <nav id="nav">
        <?php for ($i = 0; $i < count($navData); $i++): ?>
          <a href="<?= $navData[$i]->href; ?>" target="<?= $navData[$i]->target; ?>">
            <?= $navData[$i]->text . "\n"; ?>
          </a>
          <?php if ($i < sizeof($navData) - 1): ?>
            <span>&nbsp;|&nbsp;</span>
          <?php endif; ?>
        <?php endfor; ?>
      </nav>
    </div>
  </body>
</html>

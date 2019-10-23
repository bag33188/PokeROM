<?php
  require_once "WWW.php";
  require_once "HTTP.php";
  use www\WWW as WWW;
  use www\HTTP;
  $http = new HTTP();
  if ($http->isHTTP() && WWW::isProductionMode()) {
    $http->redirectToHTTPS();
  }
  $languages = WWW::languageData()["languages"];
  $tooltips = WWW::languageData()["tooltips"];
  $currentUrl = WWW::getCurrentUrl();
  $longestLanguage = WWW::findLongestLanguageName($languages, $tooltips);
  $productionMode = WWW::isProductionMode();
  $documentTitle = "Pok&eacute;ROM - Languages Used";
  $cssColors = array(
    "white" => "fff",
    "black" => "000",
    "gray" => "808080",
    "almost-black" => "212529",
    "blue" => "007bff",
    "dark-blue" => "0056b3",
    "light-gray" => "dee2e6"
  );
  $productionMode = strpos($currentUrl, "localhost") ? false : true;
  $homeUrl = ($productionMode) ? "/" : "http://localhost:4200/";
  $navData = [
    (object) array("href" => $homeUrl, "target" => "_self", "text" => "Home"),
    (object) array("href" => "./info.html", "target" => "_self", "text" => "Info"),
    (object) array("href" => "./credits.php", "target" => "_self", "text" => "Credits"),
    (object) array("href" => $homeUrl . "sitemap.xml", "target" => "_blank", "text" => "Sitemap"),
    (object) array("href" => $homeUrl . "robots.txt", "target" => "_blank", "text" => "Robots")
  ];
  if (!$productionMode) {
    $apiVersion = WWW::getApiVersionData()->api_version;
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
      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      ul {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      b {
        font-weight: bolder;
      }
      a {
        color: var(--blue);
        text-decoration: none;
        background-color: transparent;
      }
      a:hover {
        color: var(--dark-blue);
        text-decoration: underline;
      }
      h1 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
        font-size: 2.5rem;
        margin-top: 0;
      }
      .border {
        border: 1px solid var(--light-gray) !important;
      }
      .rounded {
        border-radius: 0.25rem !important;
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
      .m-3 {
        margin: 1rem !important;
      }
      .p-0 {
        padding: 0 !important;
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
      #languages-wrapper {
        display: inline-block;
      }
      #flex-wrapper {
        display: flex;
        justify-content: center;
      }
      #languages {
        list-style-type: lower-greek;
      }
      #nav {
        white-space: nowrap;
        padding-bottom: 1rem;
      }
    </style>
    <script type="text/javascript">
      "use strict";

      /**
       * @function
       * @name ready
       * @summary Ready
       * @description Document Ready function (JavaScript)
       * @param {any} callback Callback function.
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

      /**
       * @function
       * @name setWidthOfLanguagesWrapper
       * @summary Set Width of Languages Wrapper
       * @description Sets the width of the languages wrapper.
       * @returns {void} Nothing.
       */
      function setWidthOfLanguagesWrapper() {
        // cache the element of the languages list with the largest width
        const widestLanguageStr = document.querySelector("li[title='<?= $longestLanguage; ?>']");
        // cache languages wrapper
        const languagesWrapper = document.getElementById("languages-wrapper");
        // set width of wrapper based on largest width of language item in list
        languagesWrapper.style.width = widestLanguageStr.clientWidth.toString() + 'px';
      }

      // use JavaScript document ready function
      ready(setWidthOfLanguagesWrapper);

      <?php if (!$productionMode): ?>
        console.log("<?= "`" . $http->getPageName() . "`"; ?> page being served @ port <?= $http->getPortNumber(); ?>");
      <?php endif; ?>
    </script>
  </head>
  <body class="p-3">
    <noscript>
      <h1>Please enable JavaScript</h1>
    </noscript>
    <div class="container border rounded">
      <h1 class="text-center m-3">Programming Languages Used</h1>
      <div id="flex-wrapper">
        <div id="languages-wrapper" class="text-center">
          <ul class="p-0" id="languages">
            <?php for ($i = 0; $i < count($languages); $i++): ?>
              <li title="<?= $tooltips[$i]; ?>"><?= $languages[$i]; ?></li>
            <?php endfor; ?>
          </ul>
          <div class="text-center">
            <p>
              <b>Total: <?= strval(sizeof($languages)); ?></b>
              <br />
            </p>
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
        </div>
      </div>
    </div>
  </body>
</html>

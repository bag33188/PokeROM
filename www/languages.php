<?php
  require_once "WWW.php";
  use www\WWW as WWW;
  $www = new WWW();
  $productionMode = $www->isProductionMode();
  $languages = WWW::languageData()["languages"];
  $tooltips = WWW::languageData()["tooltips"];
  $currentUrl = $www->getCurrentUrl();
  $longestLanguage = WWW::findLongestLanguageName($languages, $tooltips);
  $homeUrl = ($productionMode) ? "/" : "http://localhost:4200/";
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
  $navData = [
    (object) array("href" => $homeUrl, "target" => "_self", "text" => "Home"),
    (object) array("href" => "./info.html", "target" => "_self", "text" => "Info"),
    (object) array("href" => "./credits.php", "target" => "_self", "text" => "Credits"),
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
    </style>
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    <link rel="stylesheet" type="text/css" href="css/languages.css" />
    <script type="text/javascript" src="js/ready.js"></script>
    <script type="text/javascript">
      "use strict";

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
    </script>
  </head>
  <body class="p-3">
    <noscript>
      <h1>Please enable JavaScript</h1>
    </noscript>
    <div class="container border rounded">
      <h1 class="text-center m-3">Programming Languages Used</h1>
      <div id="flex-wrapper">
        <div class="text-center w-100">
          <div  id="languages-wrapper">
            <ul class="p-0" id="languages">
              <?php for ($i = 0; $i < count($languages); $i++): ?>
                <li title="<?= $tooltips[$i]; ?>"><?= $languages[$i]; ?></li>
              <?php endfor; ?>
            </ul>
            <p class="mb-0">
              <b>Total: <?= strval(sizeof($languages)); ?></b>
            </p>
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
      </div>
    </div>
  </body>
</html>

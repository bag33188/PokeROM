<?php
  include "WWW.php";
  use www\WWW as WWW;
  $languages = WWW::languageData()["languages"];
  $tooltips = WWW::languageData()["tooltips"];
  $currentUrl = WWW::getCurrentUrl();
  $longestLanguage = WWW::findLongestLanguageName($languages, $tooltips);
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
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE-Edge" />
    <title><?= $documentTitle; ?></title>
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    <style type="text/css">
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
      :root {
        <?php foreach($cssColors as $colorName => $colorCode) { ?>
          --<?= $colorName; ?>: <?= "#" . $colorCode; ?>;
        <?php } ?>
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
    </script>
  </head>
  <body class="p-3">
    <noscript>
      <h1>Please enable JavaScript</h1>
    </noscript>
    <div class="container border rounded">
      <h1 class="text-center m-3">Programming Languages Used</h1>
      <div id="flex-wrapper">
        <div id="languages-wrapper">
          <ul class="p-0" id="languages">
            <?php for ($i = 0; $i < count($languages); $i++) { ?>
              <li title="<?= $tooltips[$i]; ?>"><?= $languages[$i]; ?></li>
            <?php } ?>
          </ul>
          <p>
            <b>Total: <?= strval(sizeof($languages)); ?></b>
            <br /><br />
            <a href="<?=
              ($currentUrl == "http://localhost:8080/languages.php") ?
                "http://localhost:4200" : "/";
            ?>" target="_self">Home</a>
          </p>
        </div>
      </div>
    </div>
  </body>
</html>

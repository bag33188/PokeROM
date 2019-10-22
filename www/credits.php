<?php
  require_once "WWW.php";
  use www\WWW as WWW;
  $documentTitle = "Pok&eacute;ROM - Credits";
  $currentUrl = WWW::getCurrentUrl();
  $productionMode = strpos($currentUrl, "localhost") ? false : true;
  $homeUrl = ($productionMode) ? "/" : "http://localhost:4200/";
  $navData = [
    (object) array("href" => $homeUrl, "target" => "_self", "text" => "Home"),
    (object) array("href" => "./info.html", "target" => "_self", "text" => "Info"),
    (object) array("href" => "./languages.php", "target" => "_self", "text" => "Languages"),
    (object) array("href" => $homeUrl . "sitemap.xml", "target" => "_blank", "text" => "Sitemap"),
    (object) array("href" => $homeUrl . "robots.txt", "target" => "_blank", "text" => "Robots")
  ];
  if (strpos($currentUrl, "localhost") !== false) {
    $apiVersion = WWW::getApiVersionData()->api_version;
    $navObj = new stdClass();
    $navObj->href = "/api/docs/" . $apiVersion . "/";
    $navObj->target = "_self";
    $navObj->text = "Docs";
    $navData[] = $navObj;
  }
  $creditsData = [
    (object) array("term" => "Front End (Client Side)", "definition" => "Broccolini"),
    (object) array("term" => "Back End (Server Side)", "definition" => "Broccolini"),
    (object) array("term" => "Server Admin/Management", "definition" => "Broccolini"),
    (object) array("term" => "Testing", "definition" => "Broccolini"),
    (object) array("term" => "Logo", "definition" => "Broccolini and Google"),
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
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <?php include_once "head_tags.inc.php"; ?>
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
      nav {
        display: block;
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
      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }
      h1 {
        margin-top: 0;
        margin-bottom: 0.5rem;
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
      h1 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
      }
      h1 {
        font-size: 2.5rem;
      }
      hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
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
      .mt-3 {
        margin-top: 1rem !important;
      }
      .mb-3 {
        margin-bottom: 1rem !important;
      }
      .m-4 {
        margin: 1.5rem !important;
      }
      .mt-4 {
        margin-top: 1.5rem !important;
      }
      .p-4 {
        padding: 1.5rem !important;
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
      @media (min-width: 768px) {
        .container-small {
          width: 300px;
        }
      }
      @media (min-width: 992px) {
        .container-small {
          width: 500px;
        }
      }
      @media (min-width: 1200px) {
        .container-small {
          width: 700px;
        }
      }

      .container-small {
        max-width: 100%;
      }

      #nav {
        text-align: center;
        margin-bottom: -0.5rem !important;
      }
    </style>
  </head>
  <body>
    <div class="container container-small p-4 border rounded mt-3 mb-3">
      <h1 class="text-center">Credits</h1>
      <div>
        <p class="m-4">Sigh....<br />I wish there were more people on this list, but unfortunately this project was made solely by me.</p>
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

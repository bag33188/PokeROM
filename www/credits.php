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
    <link rel="stylesheet" type="text/css" href="css/credits.css" />
    <script type="text/javascript" src="js/credits.js"></script>
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

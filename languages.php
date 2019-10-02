<!DOCTYPE html>
<html lang="en">
<head>
  <?php
    $metadataKeys = array(
      "charset",
      "viewport",
      "X-UA-Compatible"
    );
    $metadataValues = array(
      $metadataKeys[0] => "UTF-8",
      $metadataKeys[1] => "width=device-width, initial-scale=1.0",
      $metadataKeys[2] => "IE-Edge"
    );
  ?>
  <meta charset="<?php echo $metadataValues[$metadataKeys[0]]; ?>"/>
  <meta name="<?php echo $metadataKeys[1]; ?>" content="<?php echo $metadataValues[$metadataKeys[1]]; ?>"/>
  <meta http-equiv="<?php echo $metadataKeys[2]; ?>" content="<?php echo $metadataValues[$metadataKeys[2]]; ?>"/>
  <title>Languages Used</title>
  <style type="text/css">
    *, *::before, *::after {
      box-sizing: border-box;
    }

    html, body {
      font-family: <?php echo "Verdana, Geneva, sans-serif"; ?>;
    }

    .container {
      margin: 1em auto;
      width: 425px;
    }

    <?php echo ".heading { text-align: center; }\n"; ?>

    .wrapper {
      margin: 0 auto;
      width: 84px;
    }

    #languages {
      padding: 0 !important;
    }
  </style>
  <script type="text/javascript">
    function ready(callback) {
      if (document.readyState != "loading") {
        callback();
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      } else {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState == "complete") callback();
        });
      }
    }

    function insertHeading() {
      const container = document.getElementsByClassName("container")[0];
      const wrapper = document.getElementsByClassName("wrapper")[0];
      const h1 = document.createElement("h1");
      const text = document.createTextNode("<?php echo "Programming Languages Used"; ?>");
      h1.appendChild(text);
      <?php echo "h1.classList.add(\"heading\");\n"; ?>
      container.insertBefore(h1, wrapper);
    }

    ready(insertHeading);
  </script>
</head>
<body>
<div class="container">
  <?php
    function renderContent() {
      $languages = array(
        'Apache',
        'Bash/Shell',
        'Batch',
        'CSS',
        'HTML',
        'JSON',
        'JavaScript',
        'Markdown',
        'PHP',
        'Python 3',
        'Ruby',
        'SCSS/Sass',
        'SVG',
        'TypeScript',
        'XML',
        'YAML'
      );
      sort($languages);
      echo "\t\t<div class=\"wrapper\">\n";
      echo "\t\t\t<ul id=\"languages\">\n";
      for ($i = 0; $i < count($languages); $i++) {
        echo "\t\t\t\t<li>" . $languages[$i] . "</li>\n";
      }
      echo "\t\t\t</ul>\n";
      echo "\t\t\t<p><b>Total: " . strval(sizeof($languages)) . "</b></p>\n";
      echo "\t\t</div>\n";
    }

    renderContent();
  ?>
</div>
</body>
</html>

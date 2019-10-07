<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE-Edge" />
    <title>Pok&eacute;ROM - Languages Used</title>
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    <style type="text/css">
      *, *::before, *::after {
        box-sizing: border-box !important;
      }

      :root {
        --white: #fff;
        --black: #000;
      }

      html, body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: var(--black);
        background-color: var(--white);
      }

      .container {
        margin: 1em auto;
        max-width: 655px;
        border: 1px solid var(--black);
      }

      #heading {
        text-align: center;
      }

      .wrapper {
        margin: 0 auto;
        width: 84px;
      }

      #languages {
        padding: 0 !important;
      }
    </style>
    <script type="text/javascript">
      "use strict";
      let pos = 0;
      const msg = document.title;
      const endChar = " ... ";
      const ml = msg.length;
      const speed = 88;
      function moveTitle() {
        document.title = `${msg.substr(pos, ml)}${endChar}${msg.substr(0, pos)}`;
        pos++;
        if (pos > ml) pos = 0;
        setTimeout(moveTitle, speed);
      }
      moveTitle();
    </script>
  </head>
  <body>
    <?php
      include "./WWW.php";
      $languages = WWW::languageData()[0]->languages;
      $tooltips = WWW::languageData()[0]->tooltips;
      $currentUrl = WWW::getCurrentUrl();
    ?>
    <noscript>
      <h1>Please enable JavaScript</h1>
    </noscript>
    <div class="container">
      <h1 id="heading">Programming Languages Used</h1>
      <div class="wrapper">
        <ul id="languages">
          <?php for ($i = 0; $i < count($languages); $i++) { ?>
            <li title="<?php echo $tooltips[$i]; ?>"><?php echo $languages[$i]; ?></li>
          <?php } ?>
        </ul>
        <p><b>Total: <?php echo strval(sizeof($languages)); ?></b><br /><br /><a href="<?php
          ($currentUrl == "http://localhost:8080/languages.php") ?
            print "http://localhost:4200" :
            print "/";
        ?>" target="_self">Home</a></p>
      </div>
    </div>
  </body>
</html>

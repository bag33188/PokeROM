<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      # ==============
      # BEGIN PHP CODE
      # ==============

      // create metadata associative array
      $metadataValues = array(
        "charset" => "UTF-8",
        "viewport" => "width=device-width, initial-scale=1.0",
        "X-UA-Compatible" => "IE-Edge"
      );

      // get keys from metadata associative array
      $metadataKeys = array_keys($metadataValues);

      # ============
      # END PHP CODE
      # ============
    ?>
    <meta charset="<?php echo $metadataValues[$metadataKeys[0]]; ?>"/>
    <meta name="<?php echo $metadataKeys[1]; ?>" content="<?php echo $metadataValues[$metadataKeys[1]]; ?>"/>
    <meta http-equiv="<?php echo $metadataKeys[2]; ?>" content="<?php echo $metadataValues[$metadataKeys[2]]; ?>"/>
    <title>Languages Used</title>
    <style type="text/css">
      *, *::before, *::after {
        box-sizing: border-box;
      }

      :root {
        --white: #fff;
        --black: #000;
      }

      html, body {
        font-family: <?php echo "Verdana, Geneva, Tahoma, sans-serif"; ?>;
        color: var(--black);
        background-color: var(--white);
      }

      .container {
        margin: 1em auto;
        width: 425px;
        border: 1px solid var(--black);
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
        if (document.readyState !== "loading") {
          callback();
        } else if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", callback);
        } else {
          document.attachEvent("onreadystatechange", () => {
            if (document.readyState === "complete") callback();
          });
        }
      }

      const msg = document.title;
      const speed = 150;
      const endChar = "... ";
      let pos = 0;
      const ml = msg.length;

      function moveTitle() {
        document.title = <?php echo "msg.substr(pos, ml) + endChar + msg.substr(0, pos)"; ?>;
        pos++;
        if (pos > ml) pos = 0;
        window.setTimeout(moveTitle, speed);
      }

      moveTitle();

      function insertHeading() {
        const container = document.getElementsByClassName("container")[0];
        const wrapper = document.getElementsByClassName("wrapper")[0];
        const h1 = document.createElement("h1");
        const text = document.createTextNode("<?php echo "Programming Languages Used"; ?>");
        h1.appendChild(text);
        h1.classList.add("heading");
        container.insertBefore(h1, wrapper);
      }

      ready(insertHeading);
    </script>
  </head>
  <body>
    <noscript>
      <h1>Please enable JavaScript</h1>
    </noscript>
    <div class="container">
      <?php
        # ==============
        # BEGIN PHP CODE
        # ==============

        /*
        * @name renderContent
        * @summary Render Content onto Page
        * @description Renders the programming language HTML content onto the page.
        * @returns {void} Nothing.
        */
        function renderContent() {
          // create associative array with all of coding languages used
          $languages = array(
            'Apache' => 'Apache',
            'Bash/Shell Script' => 'Bash/Shell',
            'Batch File' => 'Batch',
            'Cascade StyleSheet' => 'CSS',
            'Node.JS Environment Notation' => 'ENV',
            'Git SCM' => 'Git',
            'HyperText Markup Language' => 'HTML',
            'JavaScript Object Notation' => 'JSON',
            'JavaScript' => 'JavaScript',
            'Markdown' => 'Markdown',
            'Hypertext Preprocessor' => 'PHP',
            'Python 3' => 'Python 3',
            'Ruby' => 'Ruby',
            'Syntactically Awesome Stylesheets' => 'SCSS/Sass',
            'Scalar Vector Graphics' => 'SVG',
            'TypeScript' => 'TypeScript',
            'eXtensible Markup Language' => 'XML',
            'Yet Another Markup Language' => 'YAML'
          );

          // get keys of array
          $tooltips = array_keys($languages);

          // sort array alphabetically (ascending)
          sort($languages);

          // output html
          echo "\t\t<div class=\"wrapper\">\n";
          echo "\t\t\t<ul id=\"languages\">\n";

          // loop thru languages
          for ($i = 0; $i < count($languages); $i++) {
            // print out html list items
            echo "\t\t\t\t<li title=\"" . $tooltips[$i] . "\">" . $languages[$i] . "</li>\n";
          }

          // output remaining html
          echo "\t\t\t</ul>\n";
          // output total language count
          echo "\t\t\t<p><b>Total: " . strval(sizeof($languages)) . "</b></p>\n";
          echo "\t\t</div>\n";
        }

        // call/invoke function
        renderContent();

        # ============
        # END PHP CODE
        # ============
      ?>
    </div>
  </body>
</html>

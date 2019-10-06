<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE-Edge" />
    <title>Languages Used</title>
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
      let pos = 0;
      const msg = document.title;
      const endChar = "... ";
      const ml = msg.length;
      const speed = 150;
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
    <noscript>
      <h1>Please enable JavaScript</h1>
    </noscript>
    <div class="container">
      <h1 id="heading">Programming Languages Used</h1>
      <div class="wrapper">
        <ul id="languages">
          <?php
            /**
             * @return array List of languages.
             */
            function renderListItems() {
              // create associative array containing all languages and their full names
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

              // sort array alphabetically in ascending order
              sort($languages);

              // loop thru languages array
              for ($i = 0; $i < count($languages); $i++) {
                // if first index
                if ($i == 0) {
                  // output list item with tooltip as title and language as text-content (with single tab)
                  echo "\t<li title=\"" . $tooltips[$i] . "\">" . $languages[$i] . "</li>\n";
                } else { // otherwise ...
                  // output list item with tooltip as title and language as text-content (with triple tab)
                  echo "\t\t\t<li title=\"" . $tooltips[$i] . "\">" . $languages[$i] . "</li>\n";
                }
              }
              return $languages;
            }

            // set variable to function for easier referencing
            $languages = renderListItems();
          ?>
        </ul>
        <p><b>Total: <?php echo strval(sizeof($languages)); /* output total size of languages array */ ?></b></p>
      </div>
    </div>
  </body>
</html>

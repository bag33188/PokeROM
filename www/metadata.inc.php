<?php if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])): ?>
  <?php
    // send 404 not found
    http_response_code(404);
    /**
     * @return string The not found HTML document.
     */
    function html_doc() {
      // store home url based on dev or prod env
      $home_url = (strpos($_SERVER["HTTP_HOST"], "localhost")) ? "http://localhost:4200" : "/";
      // define html doc
      $html_doc = "
        <!DOCTYPE html>
        <html lang='en-US'>
          <head>
            <meta charset='UTF-8' />
            <title>Page Not Found</title>
          </head>
          <body style='font-family: Verdana, Geneva, Tahoma, sans-serif;'>
            <h1 style='text-align: center;'>Error 404: Page Not Found.</h1>
            <nav style='text-align: center;font-size: 1.3em;'><a href='" . $home_url . "' target='_self'>Home</a></nav>
          </body>
        </html>
      ";
      // make sure const is not already defined
      if (!defined("WHITESPACE_NEWLINE_REGEXP")) {
        // define regexp const
        define("WHITESPACE_NEWLINE_REGEXP", "/(\s{2,}|\n)/");
      }
      // clean html doc
      $html_doc = preg_replace(WHITESPACE_NEWLINE_REGEXP, "", $html_doc);
      // return html doc
      return $html_doc;
    }
    // print out html document
    echo html_doc();
    // kill script with exit code 1
    exit(1);
  ?>
<?php else: ?>
  <!-- begin meta tags -->
  <?php
    /**
     * @return void Nothing.
     */
    function print_meta_tags() {
      // create meta tags array
      $meta_tags = array(
        "<meta charset=\"UTF-8\" />",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
        "<meta http-equiv=\"X-UA-Compatible\" content=\"IE-Edge\" />",
        "<meta name=\"author\" content=\"bag33188, broccolini@pokerom.dev\" />",
        "<meta name=\"copyright\" content=\"Copyright (c) 2019 bag33188\" />",
        "<meta name=\"language\" content=\"EN\" />"
      );
      // loop thru meta tags array
      foreach ($meta_tags as $meta_tag) {
        // print out each head meta followed by a newline character
        echo $meta_tag . "\n";
      }
    }
    // call/invoke function
    print_meta_tags();
  ?>
  <!-- end meta tags -->
  <base href="/" />
<?php endif; ?>

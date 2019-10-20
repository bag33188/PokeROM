<?php if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])): ?>
  <?php
    // send 404 not found
    http_response_code(404);
    // store home url based on dev or prod env
    $home_url = ($_SERVER["HTTP_HOST"] == "localhost:8080") ? "http://localhost:4200" : "/";
    // print out html doc
    echo "
      <!DOCTYPE html>
      <html lang='en-US'>
        <head>
          <meta charset='UTF-8' />
          <title>Page Not Found</title>
        </head>
        <body style='font-family: Verdana, Geneva, Tahoma, sans-serif;'>
          <h1 style='text-align: center;'>Error 404: Page Not Found.</h1>
          <p style='text-align: center;font-size: 1.3em;'><a href='" . $home_url . "' target='_self'>Home</a></p>
        </body>
      </html>
    ";
    // kill script with exit code 1
    exit(1); # die(1);
  ?>
<?php else: ?>
  <!-- begin meta tags -->
  <?php
    /**
     * @return void Nothing.
     */
    function print_meta_tags() {
      // create head tags array
      $head_tags = array(
        "<meta charset=\"UTF-8\" />",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
        "<meta http-equiv=\"X-UA-Compatible\" content=\"IE-Edge\" />",
        "<meta name=\"author\" content=\"bag33188, broccolini@pokerom.dev\" />",
        "<meta name=\"copyright\" content=\"Copyright (c) 2019 bag33188\" />",
        "<meta name=\"language\" content=\"EN\" />"
      );
      // loop thru head tags array
      foreach ($head_tags as $head_tag) {
        // print out each head tag followed by a newline character
        echo $head_tag . "\n";
      }
    }
    // call/invoke function
    print_meta_tags();
  ?>
  <!-- end meta tags -->
  <base href="/" />
<?php endif; ?>

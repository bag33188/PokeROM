<?php if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])): ?>
  <?php http_response_code(404); # send 404 on request if not included as file ?>
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

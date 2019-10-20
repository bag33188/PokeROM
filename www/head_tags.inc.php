<?php if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])): ?>
  <?php http_response_code(404); ?>
<?php else: ?>
  <!-- begin meta tags -->
  <?php
    $head_tags = array(
      "<meta charset=\"UTF-8\" />",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
      "<meta http-equiv=\"X-UA-Compatible\" content=\"IE-Edge\" />",
      "<meta name=\"author\" content=\"bag33188, broccolini@pokerom.dev\" />",
      "<meta name=\"copyright\" content=\"Copyright (c) 2019 bag33188\" />",
      "<meta name=\"language\" content=\"EN\" />"
    );
    foreach ($head_tags as $head_tag) {
      echo $head_tag . "\n";
    }
  ?>
  <!-- end meta tags -->
  <base href="/" />
<?php endif; ?>

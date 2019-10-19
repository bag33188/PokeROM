<?php
  $head_tags = array(
    "<meta charset=\"UTF-8\" />",
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
    "<meta http-equiv=\"X-UA-Compatible\" content=\"IE-Edge\" />",
    "<meta name=\"author\" content=\"bag33188, broccolini@pokerom.dev\" />",
    "<meta name=\"copyright\" content=\"Copyright (c) 2019 bag33188\" />",
    "<meta name=\"language\" content=\"EN\" />",
    "<base href=\"/\" />"
  );
  for ($i = 0; $i < count($head_tags); $i++) {
    $head_tag = $head_tags[$i];
    echo $head_tag . "\n";
  }
?>

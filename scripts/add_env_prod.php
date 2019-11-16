<?php
  namespace scripts;

  // include env php file
  include_once "env.inc.php";

  /**
   * @return void Nothing.
   */
  function add_env_prod() {
    // define var containing array of env vars
    $env_vars = array("NODE_ENV=production", "PORT=44300");
    // call env function from included file
    env($env_vars);
  }

  // invoke function
  add_env_prod();


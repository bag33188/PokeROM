<?php
  class Sessions
  {
    public function __construct($printSessions = false)
    {
      if ($printSessions == true) {
        print_r($_SESSION);
      }
    }

    public static function startSession() {
      session_start();
    }

    public static function endSession() {
      session_destroy();
    }

    public static function clearSession() {
      session_unset();
    }
  }

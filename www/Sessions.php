<?php
  class Sessions
  {
    protected $printSessions;

    public function __construct($printSessions = false)
    {
      $this->setPrintSessions($printSessions);
      if ($this->printSessions == true) {
        print_r($_SESSION);
      }
    }

    private function setPrintSessions($printSessions) {
     $this->printSessions = $printSessions;
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

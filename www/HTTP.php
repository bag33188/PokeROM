<?php
  namespace www;
  require_once "WWW.php";
  use www\WWW as WWW;
  // check if file is NOT being included
  if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])) {
    // send 404 response code upon request
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
  }
  class HTTP extends WWW {
    protected $currentUrl;

    public function __construct()
    {
      $this->currentUrl = str_replace($this->getProtocol(), "", self::getCurrentUrl());
    }

    private function getProtocol() {
      if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] === "on") {
        return "https://";
      } else {
        return "http://";
      }
    }

    public function isHTTP() {
      if (strpos($this->getProtocol(), "s")) {
        return false;
      } else {
        return true;
      }
    }

    public function redirectToHTTPS() {
      if ($this->getProtocol() == "http://") {
        $location = $this->getProtocol() . $this->currentUrl;
        header("Location: " . $location);
      } else {
        exit(0);
      }
    }
  }
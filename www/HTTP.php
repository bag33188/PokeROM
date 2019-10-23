<?php
  namespace www;
  use www\WWW as WWW;
  require_once "WWW.php";
  class HTTP extends WWW {
    protected $currentUrl;

    public function __construct()
    {
      parent::__construct();
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
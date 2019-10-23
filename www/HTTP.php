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
    /**
     * @var mixed The current url.
     */
    protected $currentUrl;

    /**
     * HTTP constructor.
     */
    public function __construct()
    {
      $this->currentUrl = str_replace($this->getProtocol(), "", self::getCurrentUrl());
    }

    /**
     * @return string The current HTTP protocol in URL format.
     */
    private function getProtocol() {
      if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] === "on") {
        return "https://";
      } else {
        return "http://";
      }
    }

    /**
     * @return bool If HTTP protocol is being use (or HTTPS).
     */
    public function isHTTP() {
      if (strpos($this->getProtocol(), "s")) {
        return false;
      } else {
        return true;
      }
    }

    /**
     * @return void Nothing.
     */
    public function redirectToHTTPS() {
      if ($this->getProtocol() == "http://") {
        $location = $this->getProtocol() . $this->currentUrl;
        header("Location: " . $location);
      } else {
        exit(0);
      }
    }
  }

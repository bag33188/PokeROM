<?php
  namespace www;
  require_once "WWW.php";
  use www\WWW as WWW;

  // check if file is NOT being included
  if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])) {
    // send 404 response code upon request
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
  }

  /**
   * Class HTTP
   * @package www
   */
  class HTTP extends WWW {
    /**
     * @var mixed The current URL.
     */
    protected $currentURL;
    /**
     * @var mixed The current URI.
     */
    protected $currentURI;

    /**
     * HTTP constructor.
     */
    public function __construct()
    {
      $currentURL = str_replace($this->getProtocol(), "", $this->currentURL);
      $currentURI = self::getCurrentUrl();
      $this->setCurrentURI($currentURI);
      $this->setCurrentURL($currentURL);
    }

    /**
     * @param string $currentURI The current URI to pass in.
     */
    private function setCurrentURI($currentURI) {
      $this->currentURI = $currentURI;
    }

    /**
     * @param string $currentURL The current URL to pass in.
     */
    private function setCurrentURL($currentURL) {
      $this->currentURL = $currentURL;
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
     * @return mixed The HTTP host.
     */
    private function getHTTPHost() {
      $httpHost = $_SERVER["HTTP_HOST"];
      return $httpHost;
    }

    /**
     * @return mixed The request URI.
     */
    private function getRequestURI() {
      $requestURI = $_SERVER["REQUEST_URI"];
      return $requestURI;
    }

    /**
     * @return bool If HTTP protocol is being use (or HTTPS).
     */
    public function isHTTP() {
      if (!strpos($this->getProtocol(), "s")) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * @return string|null The port number being served on localhost.
     */
    public function getPortNumber() {
      if (!self::isProductionMode()) {
        $port = explode(":", $this->getHTTPHost())[1];
        return $port;
      } else {
        return NULL;
      }
    }

    /**
     * @return string|null The page name.
     */
    public function getPageName() {
      if (!self::isProductionMode()) {
        $pageName = preg_replace("/((?:\.?\/)|(?:\.php))/", "", $this->getRequestURI());
        return ucfirst($pageName);
      } else {
        return NULL;
      }
    }

    /**
     * @return void Nothing.
     */
    public function redirectToHTTPS() {
      if ($this->getProtocol() == "http://") {
        $location = $this->getProtocol() . $this->currentURL;
        header("Location: " . $location);
      } else {
        exit(0);
      }
    }
  }

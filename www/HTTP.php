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
      // create constructor vars
      $currentURL = str_replace($this->getProtocol(), "", $this->currentURL);
      $currentURI = self::getCurrentUrl();
      // set global class props using private methods
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
      // check if ssl is being used
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
      // store http host in var
      $httpHost = $_SERVER["HTTP_HOST"];
      return $httpHost;
    }

    /**
     * @return mixed The request URI.
     */
    private function getRequestURI() {
      // store request uri in var
      $requestURI = $_SERVER["REQUEST_URI"];
      return $requestURI;
    }

    /**
     * @return bool If HTTP protocol is being use (or HTTPS).
     */
    private function isHTTP() {
      // set to true if char `s` is in protocol (https), false if not
      $isHttp = (!strpos($this->getProtocol(), "s")) ? true : false;
      return $isHttp;
    }

    /**
     * @return string|null The port number being served on localhost.
     */
    public function getPortNumber() {
      // make sure env is in dev mode
      if (!parent::isProductionMode()) {
        // split http host into array by colon char and grab second item
        $port = explode(":", $this->getHTTPHost())[1];
        return $port;
      } else {
        // return null if prod env
        return NULL;
      }
    }

    /**
     * @return string|null The page name.
     */
    public function getPageName() {
      // make sure env is dev
      if (!parent::isProductionMode()) {
        // make sure const is not already defined
        if (!defined("EXT_REGEXP")) {
          // define regexp const
          define("EXT_REGEXP", "/((?:\.?\/)|(?:\.php))/");
        }
        // store page name in var.
        // detect content in request uri with regexp const and replace with blank string
        $pageName = preg_replace(EXT_REGEXP, "", $this->getRequestURI());
        // capitalize the page name
        return ucfirst($pageName);
      } else {
        // return null if prod env
        return NULL;
      }
    }

    /**
     * @return void Nothing.
     */
    public function redirectToHTTPS() {
      // make sure protocol is not already https
      if ($this->isHTTP() && parent::isProductionMode()) {
        // set location to protocol plus current url
        $location = $this->getProtocol() . $this->currentURL;
        // redirect using headers
        header('HTTP/1.1 301 Moved Permanently');
        header("Location: " . $location);
      }
    }
  }

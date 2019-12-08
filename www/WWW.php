<?php
  namespace www;

  // check if file is NOT being included
  if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])) {
    // send 404 response code upon request
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
  }

  /**
   * Class WWW
   * @package www
   */
  class WWW
  {
    /**
     * @var string|null Current url.
     */
    protected $url;
    const VERSION_REGEX = "/((?:version:)(?:\s)(?:v\d))/i";

    /**
     * WWW constructor.
     */
    function __construct()
    {
      $this->setUrlProp(NULL);
    }

    /**
     * @param string|NULL $url The url to set/append.
     * @param bool $append Whether to set or append to url.
     * @return void Nothing.
     */
    private function setUrlProp($url, $append  = false) {
      if ($append === true) {
        $this->url .= $url;
      } else {
        $this->url = $url;
      }
    }

    /**
     * @return mixed Object array of api version data.
     */
    public static function getApiVersionData()
    {
      $filePath = "../docs/swagger-definition.yml";
      $file = fopen($filePath, "r");
      $fileSize = filesize($filePath);
      $fileText = fread($file, $fileSize);
      $versionExists = preg_match(self::VERSION_REGEX, $fileText, $version);
      if ($versionExists == true) {
        $version = str_replace("version: ", "", $version[0]);
        return array(
          (object) array("success" => true, "api_version" => $version)
        )[0];
      } else {
        return array(
          (object) array("success" => false, "api_version" => NULL)
        )[0];
      }
    }

    /**
     * @return void Nothing.
     */
    private function setCurrentUrl()
    {
      // set url var
      $this->setUrlProp("", false);
      // check if https
      $this->setUrlProp((isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] === "on") ? "https" : "http", true);
      // build rest of url prop's value
      $this->setUrlProp("://", true);
      $this->setUrlProp($_SERVER["HTTP_HOST"], true);
      $this->setUrlProp($_SERVER["REQUEST_URI"], true);
    }

    /**
     * @return string Current URL.
     */
    public function getCurrentUrl() {
      $this->setCurrentUrl();
      $currentUrl = $this->url;
      return $currentUrl;
    }

    /**
     * @return bool If production mode is active.
     */
    public function isProductionMode()
    {
      // get current url (sets url prop)
      $this->setCurrentUrl();
      // store current url
      $currentUrl = $this->url;
      // check if localhost is in current url
      return (strpos($currentUrl, "localhost") !== false) ? false : true;
    }

    /**
     * @return array Array of languages and tooltips.
     */
    public static function languageData()
    {
      // create associative array with languages
      $languages = array(
        "Apache" => "Apache",
        "Bash/Shell Script" => "Bash/Shell",
        "Batch File" => "Batch",
        "Cascade StyleSheet" => "CSS",
        "Node.JS Environment Notation" => "ENV",
        "Git SCM" => "Git",
        "HyperText Markup Language" => "HTML",
        "JavaScript Object Notation" => "JSON",
        "JavaScript" => "JavaScript",
        "Markdown" => "Markdown",
        "Hypertext Preprocessor" => "PHP",
        "Python 3" => "Python",
        "Syntactically Awesome Stylesheets" => "SCSS/Sass",
        "Scalar Vector Graphics" => "SVG",
        "TypeScript" => "TypeScript",
        "eXtensible Markup Language" => "XML",
        "Yet Another Markup Language" => "YAML"
      );
      // get keys of array for storing tooltips
      $tooltips = array_keys($languages);
      // sort the array
      sort($languages);
      // return associative array with languages and tooltips
      return array("languages" => $languages, "tooltips" => $tooltips);
    }
  }

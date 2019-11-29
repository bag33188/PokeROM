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
    public function getApiVersionData()
    {
      $filePath = "../docs/swagger-definition.yml";
      $file = fopen($filePath, "r");
      $fileSize = filesize($filePath);
      $fileText = fread($file, $fileSize);
      if (!defined('VERSION_REGEX')) {
        define("VERSION_REGEX", "/((?:version:)(?:\s)(?:v\d))/i");
      }
      $versionExists = preg_match(VERSION_REGEX, $fileText, $version);
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
     * @param array $languages List of languages.
     * @param array $tooltips List of tooltips.
     * @return mixed|null Longest language Name.
     */
    public static function findLongestLanguageName($languages, $tooltips) {
      // create variable for longest language
      $longestLang = NULL;
      // find longest language in array
      $largestLangStrLen = max(array_map("strlen", $languages));
      // define char regular expression constant
      define("CHAR_REGEXP", "/([^A-Za-z0-9\x20])/i");
      // loop thru languages
      foreach ($languages as $language) {
        // create index var
        $index = array_search($language, $languages);
        // make sure language is longest and if matches regexp
        if (strlen($language) == $largestLangStrLen && !preg_match(CHAR_REGEXP, $language)) {
          // set longest lang var
          $longestLang = $tooltips[$index];
          // break to prevent multiple language settings
          break;
        }
      }
      // return longest language (in terms of length)
      return $longestLang;
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

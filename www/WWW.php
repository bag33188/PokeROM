<?php
  namespace www;

  // import error and exception classes
  use Error;
  use Exception;

  // send 404 response code upon request
  # http_response_code(404);
  header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);

  /**
   * Class WWW
   * @package www
   */
  class WWW
  {
    /**
     * WWW constructor.
     * @throws Error class cannot be instantiated.
     */
    public function __construct()
    {
      throw new Error("Error: WWW class is not meant to be instantiated.");
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
        "Python 3" => "Python 3",
        "Ruby" => "Ruby",
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

    /**
     * @return mixed Object array of api version data.
     * @throws Exception
     */
    public static function getApiVersionData()
    {
      try {
        $filePath = "../docs/swagger-definition.yml";
        $file = fopen($filePath, "r");
        $fileSize = filesize($filePath);
        $fileText = fread($file, $fileSize);
        define("VERSION_REGEX", "/((?:version:)(?:\s)(?:v\d))/i");
        $versionExists = preg_match(VERSION_REGEX, $fileText, $version);
        if ($versionExists == true) {
          $version[0] = str_replace("version: ", "", $version[0]);
          return array(
            (object) array("success" => true, "api_version" => $version[0])
          )[0];
        } else {
          return array(
            (object) array("success" => false, "api_version" => NULL)
          )[0];
        }
      } catch (Exception $e) {
        # print_r($e);
       throw new Exception("Error: file not found.");
      }
    }

    /**
     * @return string Current URL.
     */
    public static function getCurrentUrl()
    {
      $url = "";
      if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] === "on") {
        $url .= "https";
      } else {
        $url .= "http";
      }
      $url .= "://";
      $url .= $_SERVER["HTTP_HOST"];
      $url .= $_SERVER["REQUEST_URI"];
      return $url;
    }

    /**
     * @param array $languages List of languages.
     * @param array $tooltips List of tooltips.
     * @return mixed|null Longest language.
     */
    public static function findLongestLanguageName($languages, $tooltips) {
      $longestLang = NULL;
      $largestLangStrLen = max(array_map("strlen", $languages));
      define("CHAR_REGEXP", "/([^A-Za-z0-9\x20])/i");
      foreach ($languages as $language) {
        $index = array_search($language, $languages);
        if (strlen($language) == $largestLangStrLen && !preg_match(CHAR_REGEXP, $language)) {
          $longestLang = $tooltips[$index];
          break;
        }
      }
      return $longestLang;
    }
  }

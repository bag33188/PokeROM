<?php
  namespace www;

  http_response_code(404);
  # header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);

  class WWW
  {
    public function __construct()
    {
      throw new Exception("Error: WWW class is not meant to be instantiated.");
    }

    public static function languageData()
    {
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
      $tooltips = array_keys($languages);
      sort($languages);
      return array(
        (object) array("languages" => $languages, "tooltips" => $tooltips)
      );
    }

    public static function getApiVersionData()
    {
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
        );
      } else {
        return array(
          (object) array("success" => false, "api_version" => NULL)
        );
      }
    }

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
  }

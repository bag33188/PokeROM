<?php
  namespace scripts;

  // reference Exception and Error namespaces
  use Exception;
  use Error;

  /**
   * Class FixIndexHTML
   * @package scripts
   */
  class FixIndexHTML
  {
    /**
     * @var null|string The file path of `index.html`.
     */
    protected $filepath = NULL;

    /**
     * @var null|string The new script tags (modified).
     */
    protected $new_script_tags = NULL;

    /**
     * @var null|string The current contents of the `index.html` file.
     */
    protected $contents = NULL;

    // create constant regular expression for detecting the script tags.
    const SCRIPT_TAG_REGEXP = "/((?:\x{003C}script src=\")(?:(?:runtime|polyfills(?:-es5)?|main|vendor|scripts)(?:(?:-)?(?:(?:es(?:(?:201)?[56789]))|(?:latest)))?)(?:\.)(?:[\da-fA-F]{20})(?:\.js\")(?:(?:\stype=\"module\")?(?:\snomodule)?(?:\sdefer)?)(?:\x{003E}\x{003C}\/script\x{003E}))/";

    /**
     * FixIndexHTML constructor.
     * @param string $filepath The path to `index.html`.
     */
    public function __construct($filepath)
    {
      // call method to set file path property.
      $this->set_filepath($filepath);
    }

    /**
     * @param string $filepath The file path to `index.html`.
     * @return void Nothing.
     */
    private function set_filepath($filepath)
    {
      // set class prop to method param.
      $this->filepath = $filepath;
    }

    /**
     * @return void Nothing.
     */
    public function read_script_tags()
    {
      // encapsulate main logic in try-catch (in case of errors)
      try {
        // create file variables
        // open file for reading
        $file = fopen($this->filepath, "r");
        $file_size = filesize($this->filepath);
        // set contents prop to text in file
        $this->contents = fread($file, $file_size);
        // output array var with all matching script tags (according to regexp)
        preg_match_all(self::SCRIPT_TAG_REGEXP, $this->contents, $script_tags);
        // override script tags var to first index of original regexp-match array
        $script_tags = $script_tags[0];
        // if script tags exist
        if ($script_tags != null && sizeof($script_tags) > 0) {
          // loop thru script tags (0th index)
          for ($i = 0; $i < count($script_tags); $i++) {
            // if type=module is absent from script tag
            if (strpos($script_tags[$i], "type=\"module\"") === false) {
              // add type=text/javascript
              $script_tags[$i] = str_replace("src=\"", "type=\"text/javascript\" src=\"", $script_tags[$i]);
            }
            // if defer attribute is not present on script tag
            if (strpos($script_tags[$i], "defer") === false) {
              // add the defer attribute
              $script_tags[$i] = str_replace("></script>", " defer></script>", $script_tags[$i]);
            }
          }

          // move type=module to beginning of script tag and join script tags array into string (glued by newline character)
          $glued_script_tags = implode("\n", $script_tags);
          // if no type=module or type=text/javascript is detected, then add it
          $glued_script_tags = str_replace("<script src=\"", "<script type=\"module\" src=\"", $glued_script_tags);
          // set new script tags prop to glued script tags var
          $this->new_script_tags = $glued_script_tags; # str_replace("type=\"module\" ", "", $glued_script_tags);
        }
        // close the file
        fclose($file);
      } catch (Exception $e) {
        // handle any exceptions
        echo $e->getMessage();
        // stop script
        exit(1);
      }
    }

    /**
     * @return void Nothing.
     */
    public function move_script_tags()
    {
      // encapsulate main logic in try-catch (in case of errors)
      try {
        // open file for writing
        $file = fopen($this->filepath, "w");
        // create file lines var by splitting contents by newline char
        $file_lines = explode("\n", $this->contents);
        // output array var with all matching script tags (according to regexp)
        preg_match_all(self::SCRIPT_TAG_REGEXP, $this->contents, $script_tags);
        // create boolean var for checking if script tags exist or not
        $script_tags_exist = ($script_tags != null && sizeof($script_tags) > 0) ? true : false;
        // loop thru each line in file
        foreach ($file_lines as $line) {
          // add in the script tags depending on where the main stylesheet is linked,
          // and do various checks that depend on the formatting of the file
          // if the link tag and the closing head tag on the same line
          if ((strpos($line, ".css\">") !== false || strpos($line, "<link rel=\"stylesheet\" href=\"styles.") !== false) && strpos($line, "</head>") !== false) {
            $updated_link_el_attrs = str_replace("rel=\"stylesheet\"", "rel=\"stylesheet\" type=\"text/css\"", $line);
            $updated_head_tags = str_replace(".css\"></head>", ".css\" />\n \n<!--[if !IE]><!-->\n" . $this->new_script_tags . "\n<!--<![endif]-->\n</head>", $updated_link_el_attrs);
            fwrite($file, $updated_head_tags . "\n");
            // if the link tag is not on the same line as the head tag
          } elseif (strpos($line, "</head>") !== false && (strpos($line, ".css\">") === false || strpos($line, "<link rel=\"stylesheet\" href=\"styles.") === false)) {
            fwrite($file, str_replace("</head>", $this->new_script_tags . "\n</head>", $line) . "\n");
            // if the head tag is not on the same line as the link tag (different condition)
          } elseif ((strpos($line, ".css\">") !== false || strpos($line, "<link rel=\"stylesheet\" href=\"styles.") !== false) and strpos($line, "</head>") === false) {
            $updated_link_el_attrs = str_replace("rel=\"stylesheet\"", "rel=\"stylesheet\" type=\"text/css\"", $line);
            $updated_link_tag_closed = str_replace(".css\">", ".css\" />\n", $updated_link_el_attrs);
            fwrite($file, $updated_link_tag_closed . "\n");
            // check if script tags are in current line
          } elseif ($script_tags_exist === true) {
            foreach ($script_tags[0] as $script_tag) {
              $line = str_replace($script_tag, "", $line);
            }
            fwrite($file, $line . "\n");
          } else {
            // print out every other line (followed by a newline)
            fwrite($file, $line . "\n");
          }
        }
        // close the file
        fclose($file);
      } catch (Exception $e) {
        // handle any exceptions
       echo $e->getMessage();
       // kill the script
       exit(1);
      }
    }

    /**
     * @return void Nothing.
     */
    public function insert_comment()
    {
      // set content before main logic
      $this->set_content();
      // encapsulate main logic in try-catch (in case of errors)
      try {
        // define constant if not already defined
        if (!defined("IMPORTANT_COMMENT")) {
          define("IMPORTANT_COMMENT", "<!-- May the source be with you! -->");
        }
        // create file vars
        // open file for writing
        $file = fopen($this->filepath, "w");
        // create file lines var by splitting contents by newline char
        $file_lines = explode("\n", $this->contents);
        // define search and replace string vars
        $text_to_search = "<!DOCTYPE html>";
        $replacement_text = $text_to_search . "\n" . IMPORTANT_COMMENT . "\n";
        // loop thru each line in file
        foreach ($file_lines as $line) {
          // add comment logic
          if (strpos($line, $text_to_search) !== false) {
            // check if doctype declaration is on its own line
            if (strlen(self::strip($line)) == strlen($text_to_search)) {
              // if so, strip the line of any trailing and/or leading whitespace/tabs
              $line = self::strip($line);
              # then insert the comment
              fwrite($file, str_replace($text_to_search, $replacement_text, $line));
            } else {
              // otherwise just insert the comment
              fwrite($file, str_replace($text_to_search, $replacement_text, $line));
            }
            // replace lowercase doctype declaration with uppercase and add comment
          } elseif (strpos($line, strtolower($text_to_search)) !== false) {
            $line = self::strip($line);
            fwrite($file, str_replace(strtolower($text_to_search), $replacement_text, $line));
          } else {
            // else write every other line
            fwrite($file, $line . "\n");
          }
        }
        // close the file
        fclose($file);
      } catch (Exception $e) {
        // handle any exceptions
        echo $e->getMessage();
        // kill the script
        exit(1);
      }
    }

    /**
     * @return void Nothing.
     */
    private function set_content()
    {
      // encapsulate main logic in try-catch (in case of errors)
      try {
        // set contents prop to text in file
        $this->contents = file_get_contents($this->filepath);
        // replace trailing newlines with blank string
        $this->contents = preg_replace("/\n+$/m", "", $this->contents);
      } catch (Exception $e) {
        // handle any exceptions
        echo $e->getMessage();
        // stop the script
        exit(1);
      }
    }

    /**
     * @param string $string The string to strip whitespace and tabs from.
     * @return string|string[]|null The stripped string.
     */
    private static function strip($string) {
      // define regexp constants if not already defined
      if (!defined("LEFT_TRIM")) {
        define("LEFT_TRIM", "/^[\s\t]+]/");
      }
      if (!defined("RIGHT_TRIM")) {
        define("RIGHT_TRIM", "/[\s\t]+$/");
      }
      // replace left and right leading/trailing whitespace and tabs on string with nothing.
      $stripped_string = preg_replace(LEFT_TRIM, "", preg_replace(RIGHT_TRIM, "", $string));
      // return stripped value
      return $stripped_string;
    }
  }

  /**
   * @return void Nothing.
   */
  function main() {
    // instantiate class and pass in path to `index.html` file
    $fix_index_html = new FixIndexHTML("../public/index.html");
    // begin fixing index.html file ...
    echo "Moving around script tags in index.html ... \n";
    $fix_index_html->read_script_tags();
    $fix_index_html->move_script_tags();
    echo "Done!\n\n";
    echo "Inserting comment into index.html ... \n";
    $fix_index_html->insert_comment();
    echo "Done!\n\n";
    // done!
  }

  // invoke main function
  main();

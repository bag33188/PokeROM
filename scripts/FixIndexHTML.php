<?php
  namespace scripts;
  use Exception;

  class FixIndexHTML
  {
    protected $filepath;
    protected $new_script_tags;
    protected $contents;
    const SCRIPT_TAG_REGEXP = '/((?:\x{003C}script src=")(?:(?:runtime|polyfills(?:-es5)?|main|vendor|scripts)(?:(?:-)?(?:(?:es(?:(?:201)?[56789]))|(?:latest)))?)(?:\.)(?:[\da-fA-F]{20})(?:\.js")(?:(?:\stype="module")?(?:\snomodule)?(?:\sdefer)?)(?:\x{003E}\x{003C}\/script\x{003E}))/';

    public function __construct($filepath)
    {
      $this->set_filepath($filepath);
    }

    private function set_filepath($filepath)
    {
      $this->filepath = $filepath;
    }

    public function read_script_tags()
    {
      try {
        $file = fopen($this->filepath, "r");
        $file_size = filesize($this->filepath);
        $this->contents = fread($file, $file_size);
        preg_match_all(self::SCRIPT_TAG_REGEXP, $this->contents, $script_tags);
        if ($script_tags) {
          for ($i = 0; $i < count($script_tags[0]); $i++) {
            if (is_array($script_tags[0][$i]) === true) {
              $script_tags[0][$i] = implode("\n", $script_tags[0][$i]);
            }
            if (strpos($script_tags[0][$i], 'type="module"') == false) {
              $script_tags[0][$i] = str_replace('src="', 'type="text/javascript" src="', $script_tags[0][$i]);
            }
            if (strpos($script_tags[0][$i], 'defer') == false) {
              $script_tags[0][$i] = str_replace('></script>', ' defer></script>', $script_tags[0][$i]);
            }
          }
          $this->new_script_tags = str_replace('type="module" ', '', str_replace('<script src="', '<script type="module" src="', implode("\n", $script_tags[0])));
        }
        fclose($file);
      } catch (Exception $e) {
        echo $e->getMessage();
        exit(1);
      }
    }

    public function move_script_tags()
    {
      try {
        $file = fopen($this->filepath, "w");
        $file_lines = explode("\n", $this->contents);
        preg_match_all(self::SCRIPT_TAG_REGEXP, $this->contents, $script_tags);
        $script_tags_exist = ($script_tags) ? true : false;
        foreach ($file_lines as $line) {
          if ((strpos($line, '.css">') !== false || strpos($line, '<link rel="stylesheet" href="styles.') !== false) && strpos($line, '</head>') !== false) {
            fwrite($file, str_replace('.css"></head>', '.css" />' . "\n\n<!--[if !IE]><!-->\n" . $this->new_script_tags . "\n<!--<![endif]-->\n</head>", str_replace('rel="stylesheet"', 'rel="stylesheet" type="text/css"', $line)) . "\n");
          } elseif (strpos($line, '</head>') !== false && (strpos($line, '.css">') == false || strpos($line, '<link rel="stylesheet" href="styles.') == false)) {
            fwrite($file, str_replace('</head>', $this->new_script_tags . "\n</head>", $line) . "\n");
          } elseif ((strpos($line, '.css">') !== false || strpos($line, '<link rel="stylesheet" href="styles.') == true) and strpos($line, '</head>') == false) {
            fwrite($file, str_replace('.css">', '.css" />' . "\n", str_replace('rel="stylesheet"', 'rel="stylesheet" type="text/css"', $line)) . "\n");
          } elseif ($script_tags_exist === true) {
            for ($i = 0; $i < count($script_tags[0]); $i++) {
              $line = str_replace($script_tags[0][$i], '', $line);
            }
            fwrite($file, $line . "\n");
          } else {
            fwrite($file, $line . "\n");
          }
        }
        fclose($file);
      } catch (Exception $e) {
       echo $e->getMessage();
       exit(1);
      }
    }

    private function set_content()
    {
      try {
        $this->contents = file_get_contents($this->filepath);
        $this->contents = preg_replace('/\n+$/m', '', $this->contents);
      } catch (Exception $e) {
        echo $e->getMessage();
        exit(1);
      }
    }

    public function insert_comment()
    {
      $this->set_content();
      try {
        if (!defined('IMPORTANT_COMMENT')) {
          define('IMPORTANT_COMMENT', '<!-- May the source be with you! -->');
        }
        $file = fopen($this->filepath, 'w');
        $file_lines = explode("\n", $this->contents);
        $text_to_search = "<!DOCTYPE html>";
        $replacement_text = $text_to_search . "\n" . IMPORTANT_COMMENT . "\n";
        foreach ($file_lines as $line) {
          if (strpos($line, $text_to_search) !== false) {
            if (strlen(preg_replace('/^[\s\t]+]/', '', preg_replace('/[\s\t]+$/', '', $line))) == 15) {
              $line = preg_replace('/^[\s\t]+]/', '', preg_replace('/[\s\t]+$/', '', $line));
              fwrite($file, str_replace($text_to_search, $replacement_text, $line));
            } else {
              fwrite($file, str_replace($text_to_search, $replacement_text, $line));
            }
          } elseif (strpos($line, strtolower($text_to_search)) !== false) {
            $line = preg_replace('/^[\s\t]+]/', '', preg_replace('/[\s\t]+$/', '', $line));
            fwrite($file, str_replace(strtolower($text_to_search), $replacement_text, $line));
          } else {
            fwrite($file, $line . "\n");
          }
        }
        fclose($file);
      } catch (Exception $e) {
        echo $e->getMessage();
        exit(1);
      }
    }
  }

  function init() {
    $fix_index_html = new FixIndexHTML('../public/index.html');
    echo "Moving around script tags in index.html ... \n";
    $fix_index_html->read_script_tags();
    $fix_index_html->move_script_tags();
    echo "Done!\n\n";
    echo "Inserting comment into index.html ... \n";
    $fix_index_html->insert_comment();
    echo "Done!\n\n";
  }

  init();


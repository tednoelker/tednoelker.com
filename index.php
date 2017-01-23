<?php

    class Site {

        // Site settings
        public $cache = false;
        public $version = '3.0.0';


        // Store server path params
        public function __construct($path) {

            $this->root = 'http://' . $_SERVER['SERVER_NAME'];
            $this->server = $_SERVER['DOCUMENT_ROOT'] . $path;

            $this->getRequest($path);

        }


        // Determine what page is being created
        public function getRequest($path) {

            $replace = array($path, '/', 'index', '.html', '.php');
            $uri = str_replace($replace, '', $_SERVER['REQUEST_URI']);
            $request = rtrim($uri, '/');

            $this->routePage($request);

        }


        // Determine if data exists for request
        public function routePage($request) {

            if ($request == '') {
                $this->request = 'about';
            } else {
                $this->request = $request;
            }

            $cache = $this->server . '/cache/' . $this->request . '.html';
            $composer = $this->server . '/pages/' . $this->request . '.html';

            if ($this->cache && file_exists($cache)) {

                include $cache;

            } else {

                $this->meta = json_decode(file_get_contents($this->server . '/data/meta.json'), true);

                if ( !file_exists($composer) ) {
                    header('HTTP/1.0 404 Not Found');
                    $this->request = 'error';
                }

                $this->cachePage($cache, '/assets/php/document.php');

            }

        }


        // Load php and cache html output
        public function cachePage($cache, $page) {

            if ($this->cache) {
                ob_start();
                include $this->server . $page;
                $html = str_replace(array("\r\n","\r","\n","    "), '', ob_get_contents());
                file_put_contents($cache, $html);
                ob_flush();
            } else {
                include $this->server . $page;
            }

        }


    }

    new Site('/ted');

?>

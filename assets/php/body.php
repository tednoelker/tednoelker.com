<body>
    
    <?php include $this->server . '/assets/php/nav.php';
    
    if ($this->request === 'error') {
        
        include $this->server . '/assets/php/error.php';
        
    } else {
        
        include $this->server . '/pages/' . $this->request . '.html'; ?>
        
        <script type="text/javascript" src="<?php echo $this->root; ?>/assets/js/jquery.js"></script>
        <script type="text/javascript" src="<?php echo $this->root; ?>/assets/js/core.js"></script>
        
   <?php } ?>
    
</body>

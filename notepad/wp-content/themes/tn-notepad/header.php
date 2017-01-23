<meta charset="UTF-8" />
<title><?php bloginfo( 'name' ); global $page, $paged; wp_title( '|', true, 'left' ); ?></title>
<?php
if (is_home() || is_front_page() || is_category() || is_tag() ) :
echo '<meta name="description" content="'.get_bloginfo('description').'" />';
else :
$post = $wp_query->post;
$descrip = strip_tags($post->post_excerpt);
echo '<meta name="description" content="'.$descrip.'">';
echo '<meta name="twitter:card" content="summary">';
echo '<meta name="twitter:creator" content="@TedNoelker">';
echo '<meta name="og:title" content="';
wp_title('');
echo '">';
echo '<meta name="og:description" content="'.$descrip.'">';
echo '<meta name="og:image" content="http://ted.noelker.info/images/noted.jpg">';
endif;
?>
<meta name="keywords" content="Ted Noelker, Notepad, blog, web, development, design, html, css, javascript, js, php, wordpress" />
<meta name="author" content="Ted Noelker" />
<meta name="viewport" content="width=device-width" />

<link rel="stylesheet" type="text/css" href="/assets/css/core.css" />
<link rel="stylesheet" type="text/css" href="/assets/css/notepad.css" />
<link rel="stylesheet" type="text/css" href="/assets/css/highlight.css" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<script type="text/javascript" src="/assets/js/jquery.js"></script>  
<script type="text/javascript" src="/assets/js/highlight.js"></script>  
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-33786323-1', 'auto');
  ga('send', 'pageview');
</script>
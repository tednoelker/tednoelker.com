<!DOCTYPE html>
<html lang="en-us">
<head>

<?php get_header(); ?>

</head>

<body>
    <nav>
        <a class="menu" href="http://ted.noelker.info/" data-href="about">About</a>
        <a class="menu" href="http://ted.noelker.info/resume" data-href="resume">Résumé</a>
        <a class="menu" href="http://ted.noelker.info/portfolio" data-href="portfolio">Portfolio</a>
        <a class="menu" href="http://ted.noelker.info/notepad/">Notepad</a>
        <span class="contact">
            <span class="email">ted@noelker.info</span>
            <a class="github profile" href="https://github.com/tednoelker" rel="nofollow" target="_blank"></a>
            <a class="twitter profile" href="https://twitter.com/tednoelker" rel="nofollow" target="_blank"></a>
            <a class="linkedin profile" href="http://www.linkedin.com/in/tednoelker" rel="nofollow" target="_blank"></a>
            <a class="spotify profile" href="https://open.spotify.com/user/121569357/playlist/1kvCRSlI9JnRFiTdRVKm38" rel="nofollow" target="_blank"></a>
        </span>
    </nav>
    <main class="wide">
        
        <header class="n-header gutter">
            <h1 class="n-h1"><a class="n-breadcrumb" href="/notepad/">Notepad</a></h1>
        </header>
        
        <section class="gutter">
            <?php if ( have_posts() ) : ?>
    
                <?php /* Start the Loop */ ?>
                <?php while ( have_posts() ) : the_post(); ?>
                    <?php get_template_part( 'content', get_post_format() ); ?>
                <?php endwhile; ?>
    
            <?php else : ?>
    
                <article>
                    <h2>Nothing found</h2>
                    <p>No results found</p>
                    <?php get_search_form(); ?>
                </article>
    
            <?php endif; ?>
        </section>

    </main>
    <script type="text/javascript" src="/assets/js/core.js"></script>  
</body>
</html>

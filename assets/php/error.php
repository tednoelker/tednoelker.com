<?php $error = json_decode(file_get_contents($this->server . '/data/error.json'), true)['404']; ?>

<main class="wide">
    <section class="error gutter">
        <h1><?php echo $error['display']; ?></h1>
        <h2>404 error</h2>
        <p><?php echo $error['message']; ?></p>
    </section>
</main>

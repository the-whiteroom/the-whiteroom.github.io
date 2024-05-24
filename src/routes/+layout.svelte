<script>
    import Titlebar from "../lib/components/Titlebar.svelte";
    import favicon from '../lib/assets/favicon.png'
</script>

<style>
    :global(body) {
        margin: 0;
        background-image: url("$lib/assets/background.webp");
        background-size: 100%;
    }
    :global(html::-webkit-scrollbar) {
        display: none;
    }
    :global(html) {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>

<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon}>
    </head>
    <Titlebar/>

    <slot />
</html>


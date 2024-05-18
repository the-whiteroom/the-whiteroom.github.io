<script>
    import logo from '$lib/assets/logo.svg';
</script>

<style>
    h1 {
        font-family: "Imprint MT Shadow";
        font-weight: normal;
        font-size: 52px;
        text-align: center;
        margin-bottom: 0px;
        margin-top: 20px;
    }
    .tagline {
        border-bottom: 1px solid black;
        text-align: center;
        margin-top: 0px;
        color: #aeaeae;
        padding-bottom: 30px;
    }
    img {
        position: absolute;
        transform: translate(-50px, 10px);
    }
    a {
        color: black;
        text-decoration: none;
    }
</style>

<header>
    <a href='/'>
        <h1>
            <img src = {logo} alt="Logo"/>
            The Whiteroom
        </h1>
        <p class="tagline">The TTRPG blog that does the math.</p>
    </a>
</header>
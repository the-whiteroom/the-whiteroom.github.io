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
        width: 100%;
    }
    a {
        color: black;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 > img { /* normal image */
        position: absolute;
        transform: translate(-50px, 10px);
    }
    a > img { /* specific screen widths */
        width: 40px;
        display: none;
    }
    @media (max-width: 500px) and  (min-width: 360px){
        h1 {
            margin-top: 0px;
            padding-left: 20px;
            padding-right: 20px;
        }
        a > img {
            margin-top: 20px;
            display: flex;
        }
        h1 > img {display:none;}
    }
</style>

<header>
    <a href='/'>
        <img src = {logo} alt="Logo"/>
        <h1>
            <img src = {logo} alt="Logo"/>
            The Whiteroom
        </h1>
        <p class="tagline">The TTRPG blog that does the math.</p>
    </a>
</header>
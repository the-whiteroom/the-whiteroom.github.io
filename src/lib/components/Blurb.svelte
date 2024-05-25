<style>
    #about-us {
        flex-basis: 200px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    h2 {
        font-size: 26px;
        font-weight: normal;
        font-family: "Imprint MT Shadow", Times, serif;
        text-align: center;
    }
    h2::after {
        content: "";
        display: block;
        border-bottom: 1px solid black;
        margin: 10px 0 0 0;
    }
    p {
        font-size: 18px;
        font-family: 'Times New Roman', Times, serif;
        text-align: center;
    }
    @media (max-width: 954px) { /* on small (er) devices, make the about me appear on top */
        #about-us {
            order: -1;
            width: 100%;
        }
        p {
            text-align: left;
        }
        h2 {
            width: 110px;
            text-align: left;
        }
    }
</style>

<div id="about-us">
    <h2>About us</h2>
    <p>
        We do the math, so you don’t have to.
        <br><br>
        At The Whiteroom, that’s our mantra – to provide a set of easily accessible references about a wide range of TTRPG content.
        Sometimes you just need the cold, hard truth, but the math can be time-consuming or difficult – and that’s where we come in.
        <br><br>
        Go on, have a look around!
    </p>
</div>
<script>
    import Blurb from "../lib/components/Blurb.svelte";
    import Tag from "../lib/components/Tag.svelte";
    import plus from '$lib/assets/plus.svg';
    import Card from "../lib/components/Card.svelte";
    import { cards } from "../lib/stores.js";
    import logo from '$lib/assets/logo.png';

    let tags = {
        "D&D 5e": true,
        "PF2e": true,
        'One D&D': false,
        "Meta": false,
        "Spells": false,
        "Classes": false,
        "Theory": false,
        "Lancer": false,
    }

    $: selected_tags = Object.keys(tags).filter(k => tags[k]);
    $: sorted_cards = [...$cards].sort(function(card_a, card_b){
        let value_a = card_a.tags.filter(value => selected_tags.includes(value)).length;
        let value_b = card_b.tags.filter(value => selected_tags.includes(value)).length;
        if(value_a != value_b){
            return value_b - value_a;
        }
        return card_b.tags.length - card_a.tags.length;
    }).filter(card => card.tags.filter(value => selected_tags.includes(value)).length);

    let search = "";
    let sort;

    $: displayed_cards = sort === "Relevant" ? sorted_cards : $cards;

    let tags_hovered = false;
</script>

<style>
    #articles {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }
    #article-wrapper {
        flex-grow: 1;
        margin-bottom: 100px;
    }
    .tags {
        align-self: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        color: #747474;
    }
    .tags:hover > .plus {
        display: none;
    }
    :global(.tags:not(:hover) > .plus ~ button) {
        opacity: 0;
    }
    #search {
        display: flex;
        font-family: 'Times New Roman', Times, serif;
        font-size: 18px;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
        row-gap: 10px;
        align-content: flex-start;
        margin-bottom: 30px;
        margin-top: 26px;
    }
    input {
        outline: none;
        border: none;
        font-family: 'Times New Roman', Times, serif;
        font-size: 18px;
        background-color: transparent;
        border-bottom: 1px solid black;
    }
    select {
        font-family:'Times New Roman', Times, serif;
        border: none;
        background-color: transparent;
        font-size: 16px;
        outline: none;
    }
    select:focus {
        outline: none;
    }
    main {
        display: flex;
        gap: 50px;
        margin-left: 100px;
        margin-right: 100px;
    }

    @media (max-width: 1054px){ /* on small devices, reduce the wrapping around body */
        main {
            margin-right: 50px;
            margin-left: 50px;
        }
    }
    @media (max-width: 954px) { /* on small (er) devices, make the about me appear on top */
        main{
            flex-direction: column;
            gap: 0px;
        }
    }
    @media (max-width: 703px) { /* make the cards horizontal */
        #articles {
            gap: 20px;
        }
    }
    .plus {
        background-color: transparent;
        margin: none;
        padding: none;
        border: none;
    }
</style>

<svelte:head>
    <title>The Whiteroom</title>
    <meta content="The Whiteroom" property="og:title" />
    <meta content="The TTRPG blog that does the math." property="og:description" />
    <meta content="https://the-whiteroom.github.io/" property="og:url" />
    <meta content="#ffffff" data-react-helmet="true" name="theme-color" />
    <meta content="{logo}" property="og:image" />
    <meta name="description" content="Homepage of The Whiteroom, the TTRPG blog that does the math. A TTRPG optimisation blog with a focus on D&D 5e and Pathfinder 2e."/>
    <meta name="google-site-verification" content="DkejZNsfOfNQupsu3vf2pHlLkzLjsMVWkwgjpBX0NRg" />
</svelte:head>

<main>
    <div id="article-wrapper">
        <div id="search">
            <input bind:value={search} placeholder="Search...">

            <select aria-label="sort" bind:value={sort}>
                <option>Relevant</option>
                <option>Recent</option>
            </select>
            
            {#if sort=="Relevant"}
                <div class="tags">
                    {#each Object.entries(tags) as [name,selected] (name)}
                        {#if selected}
                            <Tag name={name} type="x" on:click={()=>{tags[name]=false;tags=tags;}}/>
                        {/if}
                    {/each}
                    <button class="plus" on:click={()=>tags_hovered=!tags_hovered}>
                        <img src={plus} width="17px" height="17px" alt="+" />
                    </button>
                    {#each Object.entries(tags) as [name,selected] (name)}
                        {#if !selected}
                            <Tag name={name} type="+" force_visibility={tags_hovered} on:click={()=>{tags[name]=true;tags=tags;}}/>
                        {/if}
                    {/each}
                </div>
            {/if}
        </div>
        <div id = "articles">
            {#each displayed_cards as card (card.title)}
                {#if !search
                || card.title.toLowerCase().includes(search.toLowerCase())
                || card.blurb.some(line => line.toLowerCase().includes(search.toLowerCase()))
                || card.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
                }
                    <Card {...card} />
                {/if}
            {/each}
        </div>
    </div>
    <Blurb/>
</main>
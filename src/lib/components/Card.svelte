<script>
    import Tag from "./Tag.svelte";

    export let title;
    export let blurb;
    export let tags;

    const href = title.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().replace(/ /g,'-');
</script>

<style>
    .tags {
        align-self: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        color: #747474;
    }
    .card {
        border: 1px solid black;
        border-radius: 40px;
        width: calc(275px - 2 * 40px);
        height: calc(275px * 1.6 - 20px);
        text-align: center;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        transition: transform 0.1s ease-in-out;
        color: black;
        text-decoration: none;
    }
    .card:hover {
        transform: scale(1.02);
    }
    .card > .preview {
        flex-grow: 1;
    }
    h2 {
        font-weight: normal;
        font-family: "Imprint MT Shadow", Times, serif;
        font-size: 26px;
    }

    @media (max-width: 703px) { /* make the cards horizontal */
        .card{
            height: auto;
            text-align: left;
            width: 100%;
        }
        .card > .preview > h2{
            margin-bottom: 0px;
            margin-top: 10px;
        }
    }
</style>

<a class="card" href={href}>
    <div class="preview">
        <h2>{title}</h2>
        {#each blurb as line, i (i)}
                <p>{line}</p>
        {/each}
    </div>
    <div class="tags">
        {#each tags as tag (tag)}
            <Tag name={tag}/>
        {/each}
    </div>
</a>
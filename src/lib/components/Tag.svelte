<script>
    import x from '$lib/assets/x.svg';
    import plus from '$lib/assets/plus.svg';
    export let name;
    export let type = "";
</script>

<style>
    button {
        border: 1px solid #747474;
        text-align: left;
        display: flex;
        border-radius: 7px;
        padding-left: 3px;
        padding-right: 3px;
        padding-top: 1px;
        padding-bottom: 1px;
        align-items: center;
        background-color: transparent;
    }
    p {
        margin:0;
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
        color: #747474;
    }
    .inactive {
        border: 1px solid #aaa;
    }
    .inactive p {
        color: #aaa;
    }
</style>

<button class={type === "+" ? "inactive" : ""} on:click style={type ? "cursor: pointer" : ""} disabled = {type ? "" : "a"}>
    {#if type === "x"}
        <p>{name}</p>
        <img src={x} width="17px" height="17px" alt="x"/>
    {:else if type === "+"}
        <p>{name}</p>
        <img src={plus} width="17px" height="17px" alt="+"/>
    {:else}
        <p>{name}</p>
    {/if}
</button>
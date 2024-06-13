<script>
	export let data;
	import Tag from '../../lib/components/Tag.svelte';
	import { cards } from "$lib/stores.js";
	import logo from '$lib/assets/logo.png';

	const target_related = 4;
	
	if(!data.related){
		data.related = [];
	}
	//find articles that share tags with this one
	const sorted_cards = [...$cards]
	.sort(function(card_a, card_b){
        let value_a = card_a.tags.filter(value => data.tags.includes(value)).length;
        let value_b = card_b.tags.filter(value => data.tags.includes(value)).length;
        if(value_a != value_b){
            return value_b - value_a;
        }
        return card_b.tags.length - card_a.tags.length;
    }) // sort by number of shared tags
	.filter(card => card.tags.filter(value => data.tags.includes(value)).length) //make sure there are any related tags at all
	.filter(card => !data.related.includes(card.title)) //remove if already occurred in related
	.filter(card => card.title !== data.title); //remove if it's this card

	let search="";

	$: search_results = $cards
	.filter(card => card.title.toLowerCase().includes(search.toLowerCase())
					||card.blurb.some(line => line.toLowerCase().includes(search.toLowerCase()))
					|| card.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())));

	//get the blurb for this article
	let description = "The TTRPG blog that does the math.";
	$cards.forEach(function check(card){
		if(card.title==data.title){
			description = card.blurb + " \nRead more on The Whiteroom, the TTRPG blog that does the math."
		}
	});
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
	main {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
	.article {
		grid-column: 2;
		width: 600px;
	}
	.sidebar{
		padding-top: 25px;
		margin-left: 30px;
		margin-right: 30px;
	}
	a {
		color: black;
		text-decoration: none;
	}
	.article-line{
		width: 160px;
		border-bottom: 1px solid black;
		margin-top: 10px;
	}
	h2 {
		font-family: "Imprint MT Shadow", Times, serif;
		font-weight: normal;
	}
	.article > h2 {
		font-size: 35px;
		margin-top: 25px;
		margin-bottom: 10px;
	}
	:global(h3) {
		font-size: 26px;
		font-family: "Imprint MT Shadow", Times, serif;
		font-weight: normal;
		margin-bottom: 10px;
	}
	:global(h3+p){
		margin-top: 0px;
	}
	input {
		outline: none;
		border: none;
		font-family: "Times New Roman";
		font-size: 18px;
		background-color: transparent;
		border-bottom: 1px solid black;
	}
	:global(ul) {
		list-style-type: circle;
		padding-left: 20px;
		margin-top: 5px;
	}
	.sidebar > h2 {
		font-size: 20px;
		border-bottom: 1px solid black;
		width: 130px;
		margin-bottom: 0px;
	}
	.dropdown-content {
		position:absolute;
		border: 1px solid black;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background: white;
		padding: 3px;
		transform: translateY(-1px);
		margin-right:50px; /* makes it responsive */
	}
	.dropdown-content > a > p {
		margin: 1px;
		position: relative;
	}
	@media (max-width: 852px){
		main {
			display: flex;
			flex-direction: column;
		}
		.article {
			width: auto;
			margin-left: 30px;
			margin-right: 30px;
		}
	}
	.sidebar li + li {
		margin-top: 5px;
	}
</style>

<svelte:head>
	<title>{data.title}</title>
	<meta content="{data.title} - The Whiteroom" property="og:title" />
	<meta content={description} property="og:description" />
	<meta content="https://the-whiteroom.github.io/" property="og:url" />
	<meta content="#ffffff" data-react-helmet="true" name="theme-color" />
	<meta content="{logo}" property="og:image" />
	<meta name="description" content="A blog article on The Whiteroom, the TTRPG blog that does the math. A TTRPG optimisation blog with a focus on D&D 5e and Pathfinder 2e."/>
</svelte:head>

<main>
	<div class="article">
		<h2>{data.title}</h2>
		<div class="tags">
			{#each data.tags as tag (tag)}
				<Tag name={tag}/>
			{/each}
		</div>
		<div class="article-line"></div>
		<svelte:component this={data.content} />
	</div>
	<div class="sidebar">
		<div class="dropdown">
			<input bind:value={search} placeholder="Search...">
			{#if search && search_results.length}
				<div class="dropdown-content">
					{#if search}
						{#each search_results as card (card.title)}
							<a href={card.title.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().replace(/ /g,'-')} on:click={() => search=""}><p>{card.title}</p></a>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
		<h2>Related articles</h2>
		<ul>
			{#each data.related as title (title)}
				<li><a href={title.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().replace(/ /g,'-')}>{title}</a></li>
			{/each}
			{#each sorted_cards.slice(0,target_related - data.related.length) as card (card.title)}
				<li><a href={card.title.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().replace(/ /g,'-')}>{card.title}</a></li>
			{/each}
		</ul>
	</div>
</main>



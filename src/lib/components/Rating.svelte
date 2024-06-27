<script>
    export let content="";
    export let ratings;
    export let bold = true;
    export let stars = true;
    export let override = "";
    // first, split token into some number of (separate) elements, based on the number of ratings
    let colours = [];
    // edge case - number of words is same as number of ratings
    if(content.split(" ").length == ratings.length){
        colours = content.split(" ");
        for(let i=0;i<colours.length-1;i++){
            colours[i]+=' ';
        }
    } else {
        let chunk = Math.ceil(content.length / ratings.length);
        for(let i=0;i<content.length;i+=chunk){
            colours.push(content.slice(i,i+chunk));
        }
    }
</script>

{#each colours as colour,i}<span style="color:{override || ['red','#bf8f00','#538135','#2e75b5'][ratings[i]-1]}; font-weight:{bold?'bold':'normal'};">{colour}</span>{/each}

{#if stars}{#each ratings as rating,i}<span style="color:{override || ['red','#bf8f00','#538135','#2e75b5'][rating-1]}">{'★'.repeat(rating)}</span>{#if i!=ratings.length-1}<span style="font-weight:bold;">/</span>{/if}{/each}{/if}

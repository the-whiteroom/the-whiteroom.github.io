---
title: "Hold Person: An overrated spell"
tags:
- D&D 5e
- Spells
related:
- Misconceptions about action economy
---
<script>
    import { Line } from 'svelte-chartjs';
    import { data, options } from '$lib/data/hold-person.js';
    import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );
</script>
On paper, *Hold Person* seems fantastic. For a single action, you can apply paralysis - the single most debilitating condition in the game - to an enemy of your choice, targeting a decent saving throw. Unfortunately, *Hold Person* has a number of downsides that make it not only bad, but one of the worst spells on offer.

### Only targets one enemy
Lots of the best spells in 5th edition D&D - *Fireball*, *Hypnotic Pattern*, *Web*, and so on - are great because their effect can target not just one enemy, but most or all of the enemies in an encounter. However, *Hold Person* is not one of these spells.

### Only targets one creature type
The average D&D party can expect to face a wide range of foes, from fiends to fey, and from celestials to constructs. While in many games Humanoids are more common than most, *Hold Person* is not just ineffective against 13 of the 14 creature types - it's wholly useless.

### Requires concentration
For any caster, their concentration is one of their most valuable resources, because many concentration spells are very strong, to the point of being bread-and-butter options for every major casting class. Of the classes that have access to *Hold Person*, every single one has much better options available to them (the below is not an exhaustive list):
- Bard: *Sleep*, *Hypnotic Pattern*
- Cleric: *Bless*, *Spirit Guardians*
- Druid: *Fog Cloud*, *Pass Without Trace*, *Spike Growth*, *Conjure Animals*, *Sleet Storm*, *Conjure Woodland Beings*
- Sorcerer: *Web*, *Hypnotic Pattern*, *Sleet Storm*
- Warlock: *Hex*, *Hypnotic Pattern*
- Wizard: *Sleep*, *Web*, *Hypnotic pattern*, *Sleet Storm*

However, *Hold Person* isn't just worse than the good options, it's a poor spell all on its own.

On top of all that, a spell being concentration means that every single time you get hit, you have the chance to lose the spell, which was already a huge problem with *Hold Person* that's only made worse.

### Competes for preparation and actions
Opportunity cost is one of the most important considerations for any caster - is what I'm doing worth it, over what I could have done? The opportunity cost of preparing *Hold Person* is incredibly high, particularly when there's so many other good options available. Preparing or learning *Hold Person*, particularly for classes that don't know many spells like Sorcerer, can be very costly.

Furthermore, actions are important. In 5e, you've only got one per round, so you've got to make the most of it - particularly on your first one or two turns, when the fate of an encounter is typically decided. Spending these actions on a spell as ineffective as Hold Person isn't just bad play, it's actively dangerous.

### Repeated saves
Enemies succeed against Wisdom saving throws around half the time. For single-target save-or-suck spells like *Hold Person* that have no effect on a failed saving throw, this means that 50% of the time you've wasted an entire round for nothing.

By the time your next turn comes up, an enemy will have a less than 25% chance of still being affected by the spell - so if you cast it, hoping to squeeze some Smites in on your next turn, you're out of luck.

Even if you have allies that can capitalise on advantage and automatic critical hits, the odds still aren't great, with enemies having an almost 65% chance of breaking the spell before your allies can take advantage of it. And even if you can can capitalise on it, it's often not great, requiring you to spend limited resources that would be better used elsewhere on Smites, or only working once per round with Sneak Attack, or barely boosting damage at all since most damage comes from modifiers.

Additionally, monsters with Legendary Resistance laugh in the face of save-or-suck spells such as *Hold Person*.

<Line {data} {options}></Line>
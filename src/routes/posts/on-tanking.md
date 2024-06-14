---
title: On tanking
tags:
- D&D 5e
- Theory
related:
- What is a damage dealer, anyway?
- "A weighty decision: Medium vs Heavy Armor"
---
<script>
    import { Line } from 'svelte-chartjs';
    import { data, options } from '$lib/data/tanking.js';
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
The "tank" is one of the most enduring fantasy archetypes ever. The Barbarian, protecting his companions from a mighty foe. The Paladin, an impassable wall holding back the forces of darkness. The Fighter, a whirlwind of steel and death that no enemy may pass unscathed. With how fundamental a part of the genre it is, anyone would reasonably expect that D&D - a game in this genre - would support it.

Except it doesn't. At every turn, D&D goes out of its way to be as brutal as possible to characters who committed the cardinal sin of wanting to save their allies from danger.

### Why are you tanking, again?
It's very easy to avoid damage in 5e. The vast majority of monsters are either totally useless or barely threatening at range, and there's a vast number of debilitating control effects that can render foes unable to harm you - whether that's *Sleet Storm*, *Hypnotic Pattern*, or even simple Repelling Blast.

With that in mind, wading into melee as a 'tank' means that you're not just failing to prevent your allies being damaged - you're taking damage that was never necessary in the first place.

### Melee is absurdly deadly
As if to make up for the relative safety of range, melee in 5e is weirdly deadly.

If we pit various 'tanks' against a monster of CR equal to level, a Medium-difficulty encounter, we can get an idea of how survivable they are - keeping in mind that an average D&D party is expected to be able to survive 6-8 of these 3-4 turn encounters in a row.

<Line {data} {options}/>

As it turns out, no 'tank' can reliably survive more than 2 encounters.

#### Variant Human Barbarian
Realistic Barbarians won't typically invest much in durability, especially if they want to contribute to their party, instead choosing to take feats like Polearm Master, Great Weapon Master, Resilient (Wisdom), Lucky, and Str ASIs, and picking a race like Variant Human, all of which this build does. It is also a Bear Totem barbarian, and does not make Reckless attacks, as they substantially reduce its survivability, despite accuracy boosts of this kind being needed for Barbarians to deal competitive damage.

#### The tankiest possible Barbarian
This character is effectively 'dead weight' - they don't contribute effectively to the party in any way. And yet, they still can't survive melee.

We choose a Hill Dwarf Bear Totem Barbarian X, taking Tough as a starting feat via a background, and putting every ASI in Con then Dex afterwards.

#### Your average Cleric
This Cleric does nothing special at all - it just sits in place and Dodges, dealing damage using *Spirit Guardians* and Telekinetic.

#### An optimised Cleric
Clerics are very dependent on their Concentration, and there are several multiclass dips that make them better at this, such as War Wizard. This particular Cleric takes its first level in Divine Soul Sorcerer, also gaining access to the *Shield* spell.

This character is so durable that we can't even show it on the graph.

#### A durability-focused Paladin
Paladins can be somewhat durable, with their access to heavy armor and the Defense fighting style. However, it's still not enough to keep them alive. This is a Straightclassed Paladin, wearing Plate and holding a shield, taking the Defense fighting style at level 2.
It could be a Variant Human or Earth Genasi and the numbers would remain the same.

### AC is much better than HP
It's quite easy to get very high AC values (~24) in 5e, but weapon users are limited to around 16-21 AC, only reaching the higher ends if they sacrifice their effectiveness completely. When every point of AC exponentially increases your survivability, this is a vast difference.

In contrast, the benefit of HP is linear, and pales in comparison to high AC or the Dodge action.

### Tanks can't draw aggro
The 'tank' as it's now understood has been heavily influenced by MMORPG tanks, which can shrug off massive amounts of damage, and have abilities that force their foes to target them. However, many so-called 'tanks' in 5e have no reason for monsters to target them at all.

The biggest threat on the battlefield isn't the Barbarian swinging his pointy stick at everyone within 5 feet, but the Wizard concentrating on the control spell immobilizing half the battlefield, the Druid commanding 8 velociraptors, or the Cleric turning everything around them into a fine paste with *Spirit Guardians* - it takes an exceptionally stupid monster not to recognise this.

Some martials do have abilities that can sort-of force enemies to target them. Reckless Attack boosts your offensive output, in exchange for making you approximately as durable wet paper - easy pickings for any monster. Ancestral Guardian can, once per round, give a single enemy a pretty good reason to target them, except for the fact that they're giving up resistance to most of the damage types in the game by not going Totem - which is incredibly dangerous when their entire modus operandi is taking damage.

### Opportunity attacks just suck
Opportunity attacks are pitiful. Consuming a reaction, and allowing you to make a single attack only, they're barely a hindrance to an enemy who wants to move past you to get at your allies. The Sentinel feat is a common trap that pretends to fix this, allowing you to lock enemies in melee with yourself (if your opportunity attack lands, which is by no means guaranteed).

Unfortunately, locking enemies in melee with yourself is a very bad idea, because then they have no choice but to target you, and that's damage you cannot survive.
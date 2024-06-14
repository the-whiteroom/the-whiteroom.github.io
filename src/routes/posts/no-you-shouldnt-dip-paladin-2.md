---
title: No, you shouldn't dip Paladin 2
tags:
- D&D 5e
- Theory
related:
- What is a damage dealer, anyway?
- Ranged vs melee
---
<script>
    import { Line } from 'svelte-chartjs';
    import { data, options } from '$lib/data/smite.js';
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
It's no secret that people love Smite. Who wouldn't? It lets you roll more dice, and everybody loves that. You can even get Smite on your fullcasters with only two levels in Paladin - and even better, they can then smite better than any other class, burning their spell slots like wildfire.

Except Smite has a horrible, dark secret. It's not much damage, and it's never worth the cost of your precious spell slots, nor the danger it puts you in.

### Smite is poor nova
In D&D, burst damage is king. While sustained damage is good, killing enemies before they can harm you is a much better use of resources, particularly health.

The graph below compares the nova (burst) damage that a Paladin can do in a turn, once per long rest, to the nova damage that a Fighter can do, once per short rest.

Not only does the fighter do essentially the same damage as the Paladin with a far smaller resource expenditure, the Fighter is even more superior in standard 6-8 encounter days with 3-4 short rests, where the Paladin runs dry on resources.

The fighter can also operate at range, not having to worry about being unable to reach enemies, and not having to deal with the many dangers intrinsic to melee combat.

<Line {data} {options}/>

*The Paladin is a Variant Human, taking Polearm Master at level 1, and then boosting Strength at every opportunity. Great Weapon Master is a decrease to nova DPR, so this Paladin opts to avoid it.*

### Dipping for Smite is even worse
In theory, it sounds like a good idea. Smite scales off slots, so higher-level slots make you better at smiting - and it's true, they do! However, every single one of those high-level slots could have been spent on casting spells - for example, a 3rd-level slot could have been spent on *Fireball* or *Conjure Animals*, dealing far more damage than a Smite. And that's not even getting into the really powerful spells like *Sleet Storm* or *Hypnotic Pattern*, which can decimate an encounter in a single turn.

### Crit-smiting defeats the entire point of burst damage
Burst damage is good because you can kill enemies on-demand, before they can hurt you. Waiting for a rare, one-in-twenty event to occur before you unload a Smite defeats this entirely. While it's a (very small) increase to average DPR over smiting in bursts, this rare event isn't enough to justify this strategy - particularly given that you have no control whatsoever over when you crit.
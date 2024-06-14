---
title: What is a damage dealer, anyway?
tags:
- D&D 5e
- Theory
related:
- Ranged vs melee
- On tanking
- "A weighty decision: Medium vs Heavy Armor"
- "Rogue: if confirmation bias was a class"
---

<script>
    import { Line } from 'svelte-chartjs';
    import { data, options } from '$lib/data/baselines.js';
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

What exactly comprises "good damage" is often debated. However, references called baselines can be used to quickly compare damage, and to objectively determine "good damage" - the point at which a character goes from being able to deal damage, to being a dedicated damage dealer.

### Baselines
Baselines are simple builds that are easy to calculate damage for, and are used as references to get an understanding of how good another build’s damage is. 

One important baseline is the warlock baseline: a subclassless Warlock, prioritizing charisma (16 at level 1, 18 at level 4, 20 at level 8), taking Agonizing Blast, casting Hex every combat, and spamming Eldritch Blast. The importance of this baseline is that the damage (damage die + stat modifier + some form of minor rider) and damage scaling (scaling at levels 5, 11, and 17) it provides is available to almost all characters, making it a great baseline for any character that does damage without that being their main contribution.

Dedicated damage dealers such as fighters are held to a much higher standard, as their sole contribution to a fight is damage. One simple and relatively effective build plan for a dedicated damage dealer is the Sharpshooter and Crossbow Expert feats with a Hand Crossbow and the Archery fighting style (CBE/SS). Reaching DPR values over 40% higher than the Warlock baseline, this is a very useful baseline to compare dedicated damage dealers to. Another build that’s frequently used as an alternative to CBE/SS is the Great Weapon Master and Polearm Master feats alongside a Glaive or Halberd. However, this has some major drawbacks, chiefly that it is harder to calculate DPR for due to the difficulty in estimating the frequency of opportunity attacks, and has poor durability.

<Line {data} {options}></Line>

### Beating the baselines: Why CBE+SS fighter is not the most optimized build
Exceeding the Fighter baseline is trivially achieved, such as by picking a subclass, further feats, or multiclassing. Many dedicated damage dealers will multiclass heavily to avoid dead levels, thereby boosting their damage beyond the Fighter baseline. Some particularly potent options include:
- Gloom Stalker 3-5 (Umbral Sight, Dread Ambusher, *Pass Without Trace*)
- Battle Master 3-4 (Action Surge, Precision Attack)
- Echo Knight 3+ (Manifest Echo to make your melee attacks functionally ranged, Unleash Incarnation, Action Surge)
- Kensei or Shadow Monk 4-6(Focused Aim, Kensei or Shadow features)
- Peace Cleric 1(Emboldening Bond, *Bless*)
- Forge Cleric 1(if you can’t find a magic hand crossbow, also *Bless*)
- Divine Soul Sorcerer 1(Favored by the Gods, *Bless*, defensive spells)
- And many other caster dips


*The above list is paraphrased from Form of Dread.*

### Conclusion
A quantitative definition for “good damage” can be hard to find, but baselines provide a range of useful references to settle a debate stemming from differing perspectives and ideas regarding optimisation once and for all.
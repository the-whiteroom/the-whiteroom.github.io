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
    import { data as baseline_data, options as baseline_options} from '$lib/data/baselines.js';
    import { data as feat_data, options as feat_options} from '$lib/data/martial_feats.js';
    import { data as gloom_data, options as gloom_options} from '$lib/data/gloom stalker.js';
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

Dedicated damage dealers such as fighters are held to a much higher standard, as their primary contribution in combat is damage. One simple and relatively effective build plan for a dedicated damage dealer is the Sharpshooter and Crossbow Expert feats with a Hand Crossbow and the Archery fighting style (CBE/SS). Reaching DPR values over 40% higher than the Warlock baseline, this is a very useful baseline to compare dedicated damage dealers to. Another build that’s frequently used as an alternative to CBE/SS is the Great Weapon Master and Polearm Master feats alongside a Glaive or Halberd. However, this has some major drawbacks, chiefly that it is harder to calculate DPR for due to uncertainty in the frequency of opportunity attacks and kills, and has poor durability.

The Fighter baseline is used because it's the least investment necessary to do more than cantrip damage (see below), and is easily improved upon.

<Line data={baseline_data} options={baseline_options}></Line>

### What isn't a damage dealer?
This is a game where almost every character has some way to deal a little bit of damage, usually around the Warlock baseline. Many characters that aren't (dedicated) damage dealers do almost the same damage, often referred to as 'cantrip damage', since it's roughly the amount of damage a Warlock using cantrips can achieve. However, what sets the damage dealers apart is that they do notably more damage than the vast majority of characters - because merely dealing damage isn't sufficient to be a damage dealer, in the same way that just taking the Defense or Interception fighting style doesn't make one a tank.

Compared to Warlock, which can meaningfully contribute outside of combat (high Charisma, Invocations including Mask of Many Faces/Misty Visions, and spells including Suggestion), and which has far more potent options in combat than Eldritch Blast (such as Hypnotic Pattern), featless Fighters have no niche. Additionally, Eldritch Blast is better than merely attacking, especially when combined with potent invocations like Repelling Blast, Lance of Lethargy, or Grasp of Hadar, or when used synergetically with powerful subclass features like Form of Dread. In this regard, featless fighters are quite literally "just worse Warlocks without spells".

Even some characters that take feats don't quite meet the threshold to be a dedicated damage dealer. For example, Polearm Master and Dueling, a common choice for sword-and-board characters, barely beats the Warlock baseline.

<div style="height: 500px">
  <Line data={feat_data} options={feat_options}></Line>
</div>

### Beating the baselines: Why CBE/SS fighter is not the most optimized build
Exceeding the Fighter baseline is simple. Some ways in which you can do this include picking a subclass, a better class, further feats, or multiclassing. Many dedicated damage dealers will multiclass heavily to avoid dead levels, thereby boosting their damage beyond the Fighter baseline. Some particularly potent options include:
- Gloom Stalker 3-5 (Umbral Sight, Dread Ambusher, *Pass Without Trace*)
- Battle Master 3-4 (Action Surge, Precision Attack)
- Echo Knight 3+ (Manifest Echo to make your melee attacks functionally ranged, Unleash Incarnation, Action Surge)
- Assassin 3-4 (Assassinate)
- Kensei or Shadow Monk 4-6 (Focused Aim, Kensei or Shadow features)
- Peace Cleric 1 (Emboldening Bond, *Bless*)
- Forge Cleric 1 (if you can’t find a magic hand crossbow, also *Bless*)
- Divine Soul Sorcerer 1 (Favored by the Gods, *Bless*, defensive spells)
- Many other caster dips

*The above list is paraphrased from [Form of Dread](https://formofdread.wordpress.com/2022/02/27/quantifying-martial-dpr-reference-sheet/).*

A monoclassed Gloom Stalker Ranger is an example of a dedicated damage dealer. With access to Archery, Crossbow Expert, and Sharpshooter, as well as a number of potent damage spells like *Spike Growth*, *Pass Without Trace*, and *Conjure Animals*, and great subclass features like Dread Ambusher and Stalker's Flurry, even a relatively unoptimised Gloom Stalker beats the Fighter baseline with ease - and provides excellent additional utility through spells like Goodberry.

<div style="height: 400px">
  <Line data={gloom_data} options={gloom_options}></Line>
</div>

Assumptions:
- One casting of *Pass Without Trace* lasts 2 encounters and provides 1 additional turn of value. Actual DPR contribution is significantly greater than shown due to other party members gaining additional turns too. The ranger does not use any other spells.
- The Gloom Stalker does not get on-demand advantage from Umbral Sight. In practice, they will, boosting their DPR further.

Optimised damage dealers will easily beat both the Fighter baseline and the monoclassed Gloom Stalker above, synergetically combining powerful features like Action Surge, Dread Ambusher and Assassinate to create characters that are far more effective than the sum of their parts.

### Conclusion
A quantitative definition for “good damage” can be hard to find, but baselines provide a range of useful references to settle a debate stemming from differing perspectives and ideas regarding optimisation once and for all.
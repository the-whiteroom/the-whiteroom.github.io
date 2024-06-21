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
    import Tanking from '$lib/data/Tanking.svelte';
</script>

The "tank" is one of the most enduring fantasy archetypes ever. The Barbarian, protecting his companions from a mighty foe. The Paladin, an impassable wall holding back the forces of darkness. The Fighter, a whirlwind of steel and death that no enemy may pass unscathed. With how fundamental a part of the genre it is, anyone would reasonably expect that D&D - a game in this genre - would support it.

Except it doesn't. At every turn, D&D goes out of its way to be as brutal as possible to characters who committed the cardinal sin of wanting to save their allies from danger.

### What is tanking?
Put simply, the entire concept of a tank is built upon a principle that doesn't apply to D&D - that if you take damage, your allies take less damage. Tanking is a role, where a character's primary contribution is to do exactly that - take damage, so their allies don't have to. Minor features like the Interception or Protection fighting styles, for example, aren't enough to make a character a tank, because for them to fulfil this role, their primary contribution would have to be tanking.

However, there's two big problems with this - firstly, that you can't survive that damage, and additionally, that you're not preventing your allies from taking damage.

### Why are you tanking, again?
It's very easy to avoid damage in 5e. The vast majority of monsters are either totally useless or barely threatening at range, and there's a vast number of debilitating control effects that can render foes unable to harm you - whether that's *Sleet Storm*, *Hypnotic Pattern*, or even simple Repelling Blast.

With that in mind, wading into melee as a 'tank' means that you're not just failing to prevent your allies being damaged - you're taking damage that was never necessary in the first place.

### Melee is absurdly deadly
As if to make up for the relative safety of range, melee in 5e is weirdly deadly.

If we pit various 'tanks' against a monster of CR equal to level, a Medium-difficulty encounter, we can get an idea of how survivable they are - keeping in mind that an average D&D party is expected to be able to survive 6-8 of these 3-4 turn encounters in a row.

<Tanking level={1}/>

*You can toggle characters by clicking them in the legend.*

As it turns out, no 'tank' can reliably survive more than 2 encounters.

#### Tanky barbarian
This is nearly the most durable Barbarian imaginable. As a monoclassed Hill Dwarf Bear Totem Barbarian, with access to Tough via a background (which isn't even allowed in most games), at level 20 this character can take 690 points of damage before being downed. It puts all its ASIs into CON then DEX.

However, this character is 'dead weight' - meaning that they do not contribute effectively to the party in any way whatsoever, doing nothing but take damage nobody needed to take.

Even with all of that, they barely survive two encounters in melee.

#### Variant Human Barbarian
Realistic Barbarians won't typically invest much in durability, especially if they want to contribute to their party, instead choosing to take mandatory feats like Polearm Master, Great Weapon Master, Resilient (Wisdom), Lucky, and Str ASIs, and picking a race like Variant Human, all of which this build does. This is also a Bear Totem barbarian, and makes Reckless attacks, as Barbarians cannot deal competitive damage without accuracy boosts like Reckless.

#### An average Cleric
As a comparison, a competently built caster is included - in this case, a Cleric. 

Since Clerics are very dependent on their concentration, and there are several multiclass dips that make them better at this, such as War Wizard, almost all well-built Clerics will take one or more of these. This particular Cleric takes its first level in Divine Soul Sorcerer, also gaining access to the *Shield* spell.

Beyond that, the Cleric employs no special tactics - like almost all other casters, it casts a big concentration spell (*Bless* or *Spirit Guardians*, typically), then Dodges.

#### A durability-focused Paladin
It's often claimed that Paladins, with with their access to heavy armor and the Defense fighting style, can fill so-called 'tank' or 'off-tank' roles. However, this still isn't enough to keep them alive. This is a straightclassed Paladin, wearing Plate and holding a shield, taking the Defense fighting style at level 2.

### AC is much better than HP
It's quite easy to get very high AC values (~24) in 5e, but weapon users are limited to around 16-21 AC, only reaching the higher ends if they sacrifice their effectiveness completely. When every point of AC exponentially increases your survivability, this is a vast difference.

In contrast, the benefit of HP is linear, and pales in comparison to high AC or the Dodge action, as the above graph shows.

### Tanks can't draw aggro
The 'tank' as it's now understood has been heavily influenced by MMORPG tanks, which can shrug off massive amounts of damage, and have abilities that force their foes to target them. However, many so-called 'tanks' in 5e have no reason for monsters to target them at all.

The biggest threat on the battlefield isn't the Barbarian swinging his pointy stick at everyone within 5 feet, but the Wizard concentrating on the control spell immobilizing half the battlefield, the Druid commanding 8 velociraptors, or the Cleric turning everything around them into a fine paste with *Spirit Guardians*, and it takes an exceptionally stupid monster not to recognise this.

Some martials do have abilities that can almost force enemies to target them. Reckless Attack boosts your offensive output, in exchange for making you easy pickings for any monster. Ancestral Guardian can, once per round, give a single enemy a pretty good reason to target them, except for the fact that they're giving up resistance to most of the damage types in the game by not going Totem - which is incredibly dangerous when their entire modus operandi is taking damage.

### You can't protect your allies anyway
Even for characters that want to "tank", D&D doesn’t offer a way to do it. Nearly all the options for getting an enemy to attack you rather than just walk past and hit your ally are niche and/or result in very low survivability or damage. The options also often require the enemy to stay within a limited range of you (very hard to control) or fail a saving throw (unreliable), only have a very limited number of uses each day, and critically nearly all of the options only target a single enemy, making it nigh useless in the multi-enemy encounters that should make up most of an adventuring day.
-  Opportunity attacks are pitiful. Consuming a reaction, and allowing you to make a single attack only, they're barely a hindrance to an enemy who wants to move past you to get at your allies.
- The Sentinel feat is a common trap that pretends to fix this, allowing you to lock enemies in melee with yourself (if your opportunity attack lands, which is by no means guaranteed). It also has an extremely high opportunity cost, as taking it means you're sacrificing one of the feats needed to deal competitive damage (CBE/SS/GWM/PAM/Elven Accuracy/Gunner/Primary stat boosts) or one of the feats needed to stay alive (Lucky, Resilient). Unfortunately, locking enemies in melee with yourself is a very bad idea, because then they have no choice but to target you, and that's damage you cannot survive.

### Conclusion
In summary, trying to 'tank' is a pointless endeavour in 5e, achieving nothing but taking damage that nobody needed to take. Characters just don't have good enough incentives for enemies to target them, and the supposedly "squishy" casters are in fact substantially more durable when played well. Furthermore, few characters have the staying power to survive the massive amounts of damage monsters deal.

Protecting your allies isn't impossible though! Using control spells and keeping the enemies away from your party, whether via careful positioning of yourself (i.e. kiting), or by utilizing forced movement effects such as Repelling Blast, are far better ways to defend your party than any "Tanking".
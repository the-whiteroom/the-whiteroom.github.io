---
title: "Rogue: if confirmation bias was a class"
tags:
- D&D 5e
- Classes
related:
- What is a damage dealer, anyway?
- Ranged vs melee
---
<script>
    import { Line } from 'svelte-chartjs';
    import { data, options } from '$lib/data/rogue.js';
    import { data as subclass_data, options as subclass_options } from '$lib/data/rogue_subclasses.js';
    import { data as ea_data, options as ea_options } from '$lib/data/elven accuracy.js';
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

Rogue is best described as a collection of features that feel strong, but aren't. Sneak Attack, Expertise, Cunning Action - almost every feature Rogues get fits this pattern. Falling behind other classes in many ways, Rogues struggle to find a niche - whether that's as a damage dealer, a skill monkey, or a skirmisher.

And yet, anybody who's played Rogue but not crunched the numbers will tell you that Rogues feel like they're contributing effectively. Why is that?

In a lot of ways, this can be attributed to the all-too-human tendency to remember the exceptions, the big events, the time the Rogue rolled high - even crit - on their Sneak attacks, or the time the Paladin did the same with Smite. Neither of these features are actually that much damage, but we never remember the averages, nor all the times they rolled low, so these features anecdotally feel much stronger than they actually are. It's the same reason sustained spells like Conjure Animals or Sleet Storm don't feel as powerful as they are - they aren't flashy. Our brains are simply just hardwired this way.

### Lacking in DPR
Sneak Attack can feel like a lot of damage when you're rolling a lot of dice, but Rogues just aren't effective damage dealers. In a game balanced around resource expenditure, the Rogue is unique in that it's almost totally resourceless. On-demand burst damage, which the Rogue lacks, is far more effective at killing enemies before they can harm the party than sustained damage. Additionally, Rogue's sustained DPR falls below [Fighter Baseline](/what-is-a-damage-dealer-anyway), the absolute bare minimum to be considered a damage dealer.

<div style="height:400px">
    <Line {data} {options}/>
</div>

The Rogue here takes Crossbow Expert then Sharpshooter, and attacks with the latter if it's already landed Sneak Attack this turn, the best possible strategy for Rogues.

One very common mistake is assuming that the Rogue has an external advantage source but the Fighter doesn't - and even with this mistake, the Rogue barely beats the Fighter baseline.

Rogues should generally not be assumed to have an external advantage source, because these are few and far between. With an ally generating advantage (via *Web* or the optional flanking rule, for example), Rogues are free to use their bonus action on Crossbow Expert, but this has a hidden opportunity cost - doing so means that allies aren't concentrating on better spells, or have to enter melee.

However, Rogues find it hard to generate advantage as well. The best way is Steady Aim, but that requires Rogues to sacrifice not only the bonus action attack from Crossbow Expert, but also all their movement. Cunning Action Hide is an alternative, but given that this is contingent on a high Stealth check, having somewhere to hide, and enemies not noticing you if you come out of hiding, it's not great.

To deal with this issue, some subclasses change the rules around Sneak Attack.
- Arcane Trickster can generate advantage without consuming a bonus action via *Find Familiar*, with the caveat that any vaguely intelligent enemy will just shoot the familiar, opportunity attack it, or Ready an attack for when it comes into reach.
- Swashbuckler can generate Sneak Attack without advantage in melee, but also can't easily generate advantage except via Steady Aim, which is tantamount to suicide in melee.
- Phantom can, a very limited number of times per long rest, deal a smaller amount of additional damage to another target with Sneak Attack.

<div style="height:400px">
    <Line data={subclass_data} options={subclass_options}/>
</div>

A number of favorable assumptions are made for the Rogues in the above graph.
- For some reason, the enemies don't shoot the Arcane Trickster's familiar.
- The Phantom uses a bag of rats to trigger Wails From the Grave every turn via Tokens of the Departed and always has a second enemy within range. Additionally, while non-focused damage is less effective than focused damage, Wails From The Grave is counted as if it was to the original target.
- The Swashbuckler can somehow effectively skirmish and not die in a couple turns due to being lightly armored in melee with a d8 hit die.

Even with these favorable assumptions, the Rogues barely meet or beat the Fighter baseline, except Phantom.

Elven Accuracy is a popular choice on Rogues, but it's underwhelming. Only applying when you have advantage, it's less than an 8% increase to your hit chance (14.4% with Sharpshooter). It has no effect when you can't generate advantage. Additionally, it delays feat/ASI progression four levels because it requires you to be an elf.

<div style="height:500px">
    <Line data={ea_data} options={ea_options}/>
</div>

*The above Rogue takes Elven Accuracy at level 4, Crossbow Expert at level 8, and Sharpshooter at level 10.*

### Skills
Rogues are supposed to be good at skill checks - and with the ease at which they reach high modifiers to their skill checks, you'd expect them to be. However, modifiers alone aren't indicative of how good you are - for example, the difference between a +3 and a +6 modifer isn't anywhere near twice as much, it's only 15%. Expertise is often touted as a fantastic boost to skill checks, but in actuality, other classes get comparable (or better) boost to skill checks.

The overwhelming majority of games are run below level 10, when Expertise is a 10-15% boost to 2-4 skills (of eighteen). Expertise is available to other classes too - for example, all Bards get two, Rangers get one, and many subclasses (like Knowledge) get it too. However, Expertise just isn't great.

For example, Guidance (available to Artificers, Clerics, and Druids) is a 12.5% increase to _every single skill_, in comparison to which Expertise's 10-15% boost to a couple skills looks downright pathetic. Magical Guidance, available to Sorcerers, grants a reroll to all skills for the tiny price of a single sorcery point - and a reroll is much better than Expertise, so this applying to all skills is the cherry on top. Races like Reborn and Dhampir also give boosts that far outpace Expertise. Bardic Inspiration is yet another "applies to every skill, gives a better bonus than Expertise" feature.

Reliable Talent feels good too. Never rolling below a 10? Sign me up! However, compared to just rolling a straight d20, it's only around a +3.325 to your average result - even less than Expertise at that level.

Additionally, many skill checks can be bypassed via spells like Suggestion, Knock, or Invisibility.

Furthermore, fourteen of the eighteen skills are based off mental stats, and one off strength, none of which Rogues have any reason to invest in, particularly compared to casters that will naturally have much higher scores in these stats.

### Durability
Rogues _do_ have one resource - their health. It's not great, being a d8, on par with spellcasters like Bard, Cleric, and Warlock, and neither is their AC, being limited to light armor. This caps them at a maximum AC of 17, and many rogues, particularly those that invest in other stats to boost their skill checks, can't afford a super-high Constitution score either. In practice, Rogues need feats like Crossbow Expert and Sharpshooter, so they can't boost their DEX to +5 until very late in the game. When other classes beat 17AC out-of-the-box or with a single-level dip, Rogues are one of the least durable classes in the game. Their lack of access to potent defensive boosters like the *Shield* spell further worsens this.

Rogues get some features that are meant to reduce the damage they take. Uncanny Dodge can, for the cost of a reaction, reduce the damage of a single attack by half. This makes it nearly useless against enemies with Multiattack or against multiple enemies - which is essentially the entire time.

Evasion seems good. However, DEX saves to avoid damage aren't particularly threatening to begin with, especially compared to other Big Three saves like Wisdom and Constitution, and are mostly limited to breath weapons and similar abilities. Slippery Mind would be great, except that any Rogue which survives until level 15 has already taken Resilient (Wisdom).

### Skirmishing
It's often claimed that classes like Rogue or Monk can make up for their low durability by 'skirmishing' - a nebulously defined concept that usually involves running in and out of melee, somehow avoiding opportunity attacks along the way. However, even with Cunning Action, this just isn't possible, and trying to do so massively reduces Rogue's DPR.

In D&D, almost every player character has 30 or 35 feet of speed, and the overwhelming majority of monsters have at least 30 feet of speed. For player characters to effectively skirmish with monsters, they'd need more than 60 feet of movement - 30 to get in, and 30 to get out. No class even comes close to this.

Furthermore, going in and out of a monster's range provides opportunity attacks. Rogues can somewhat avoid this using the Mobile feat, or by being a Swashbuckler, which would almost work if there was only one monster on the battlefield. However, they still need to Dash as a bonus action, which means that their two main ways of generating Sneak Attack (Steady Aim and Cunning Action Hide) aren't available. They could also potentially generate Sneak Attack by having an unfortunate ally sit in melee with the monster, but no class in 5e can survive sitting in melee for that long, and will rapidly be turned into small chunks of ally.

### Poor subclasses
Rogue has the worst subclasses of any class in the game by a wide margin.
- Arcane Trickster is the best Rogue subclass, mainly because it gives Rogues something actually good - spells. The subclass features are underwhelming, but spells are always good, particularly from the best spell list in the game.<ul><li>*Find Familiar* - excellent utility. If you're lucky and your DM doesn't target familiars, the Owl familiar is a good way to generate advantage.</li><li>*Green-Flame Blade* - This would be a great spell for skirmisher Rogues, if skirmishing worked. It doesn't.</li><li>*Haste* - Can be used to get reliable reaction Sneak Attack in specific circumstances. However, these circumstances are very specific, and dropping concentration (which will happen very often for Rogues, which can't afford any kinds of concentration protection) is crippling.</li><li>*Minor Illusion* - Genuinely great utility.</li><li>*Shield* is one of the best spells in the game, and makes Arcane Tricksters more durable than any other Rogue.</li></ul>
- Assassin is fantastic if you can Surprise enemies. However, neither the class nor the subclass provides any way to reliably do this. Consequently, it's an incredibly strong 3-4 level dip on characters that can generate surprise, like Rangers, and otherwise nearly useless.
- Inquisitive gets a bunch of ribbon features and can use Sneak Attack without advantage. Why it would want to do this is a mystery, given that all Rogues can and should generate advantage.
- Likewise, Mastermind gets a bunch of ribbon features. It can also Help as a bonus action, which would actually be pretty good if Rogues didn't have several better abilities competing for their bonus action, like Crossbow Expert, Cunning Action, and Steady Aim.
- Phantom is the best Rogue at dealing damage, because Wails from the Grave allows for an additional half-Sneak Attack every turn using Tokens of the Departed and a bag of rats. However, even with this, it still struggles to meet Fighter Baseline. Bags of rats are also cheesy, and frequently disallowed.
- Scout is supposed to be able to skirmish. However, it's still below the 60ft speed threshold needed to skirmish effectively.
- Soulknife is the only Rogue that's good at skill checks, because Psi-Bolstered Knack is an excellent buff to checks that stacks with literally everything.
- Swashbuckler gets charisma to initiative, which would be good if it actually had an incentive to have high Charisma. Like Scout, this subclass is designed as a skirmisher, but fails in practice.
- Thief is essentially subclassless Rogue. It's baffling that the worst Rogue is the default subclass. At least it can climb walls. The level 17 feature is good, but you have to play Thief for 17 levels to get it.
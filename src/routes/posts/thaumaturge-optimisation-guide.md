---
title: Thaumaturge optimisation guide
tags:
- PF2e
- Classes
related:
---
<script>
    import Rating from '$lib/components/Rating.svelte';
</script>
### Introduction
The thaumaturge is a class with roots in real world practices, especially those we consider superstition and paganism. It is a successor to the 1e Occultist, but also a class with an identity of its own, and it’s a very fun one. The thaumaturge is a wellspring of knowledge gathered from sources of widely varying reputability; They use this collected lore to empower their weaponry with magic and collected items called their Implements and Esoterica to create weaknesses or exploit existing ones in their foes.

Mechanically, the thaumaturge is often defined as a “fifth man” or a “jack of all trades,” at least at face value. They have training in a variety of skills, but no native access to many additional skill feats or permanent skill increases. They have proficiency in the standard martial weapons and a host of damage boosters, but are limited to one handed weapons or unarmed strikes and have poorer base accuracy than most other martials. They have some of the best save progression in the game, but lower than average hit points for a martial and a modest armour class. They can access a variety of actions, but have a tight action economy. They are a class excellent at filling in the gaps missing in a conventional party, but might not be able to hold their own in a specific role if built poorly.

This is a general description that can fit to an extent, but the thaumaturge is a very powerful class with access to powerful bonuses to a variety of skills and actions, as well as better ability to use magical items, and a lot of other fun features on them. They are often compared to the investigator, as they are both martials with a key attribute in a mental stat that are quite good at skills. They both have their differences and similarities and will be discussed towards the end of this guide.

This guide exists to help Pathfinder 2e players, both new and old, make the strongest, and hopefully, most fun, builds they can using this very versatile class. The thaumaturge can flex into a variety of roles using its base abilities to an extent that no other martial can really achieve without archetyping. It also has really fun flavour as a Worker of Wonders, using a mixture of your collected knowledge, various implements and esoterica and belief in your own abilities and the stories others so easily dismiss as fiction to reveal the truth that will vanquish your foes. 
Lastly, I want to give a huge shout out to u/Gazebomimic, author of the excellent Definitive Build Series, who graciously allowed me to use their slick formatting style and excellent generic feat reviews for certain sections of the guide. You can find their Investigator guide [here](https://docs.google.com/document/d/1uamjFPi0PDc3jfm8aQGbDv4tqQ-6xFXP/edit), which also includes links for the other guides they’ve done. As hard as I may try to be objective, this guide is but a humble effort undertaken by one person; if you’d like to check out other sources, try [John R’s thaumaturge guide](https://docs.google.com/document/d/1FUqLoqqgyLsZUSUSrsb5mjJBrpmdyeg5Jy_M_6A-XdY/edit#heading=h.6z4gz2ow25kz) too! Lastly, I’d like to thank Grell and ThomasJFoolery in particular, as well as many others who provided some fantastic insights and reviews for parts of this guide.

Now, let’s see what knowledge we can recall from here…

### Colour grading system
I’ll be using the formatting system that u/Gazebomimic uses for their wonderful Definitive Build series, inspired by older optimisation guides all the way from the 3.5e era. The colours correspond to a set number of stars as displayed below for accessibility purposes.

I use <Rating content="Blue" ratings={[4]} stars={false} bold={false}/> to determine options I think are excellent picks for your build that you can’t go wrong with, especially if you know what you’re doing. These abilities are incredibly powerful and often build-defining. You rarely have a reason to skip these outside of flavour purposes.


<Rating content="Green" ratings={[3]} stars={false} bold={false}/> options are pretty good. You can make pretty good use of them, and they don’t really hinder your capabilities.

<p></p><Rating content="Yellow" ratings={[2]} stars={false} bold={false}/> sort of serves a double purpose. Abilities ranked yellow are either kind of mediocre or effective but only in somewhat niche situations. Take these either if you really like them or are certain those situations will come up often and a higher rated option couldn’t do the same.

<p></p><Rating content="Red" ratings={[1]} stars={false} bold={false}/> is bad. These options are generally just bad. Even if they work in certain situations, those either never come up or are just not that hard to overcome anyway. Only take a red option if you really want to for flavour purposes.

<table>
    <tr style="font-weight: bold">
        <td>Colour</td>
        <td>Stars</td>
        <td>Power rating</td>
    </tr>
    <tr>
        <td><Rating content="Blue" ratings={[4]} stars={false}/></td>
        <td><Rating content="" ratings={[4]}/></td>
        <td><Rating content="Incredibly powerful" ratings={[4]} stars={false}/></td>
    </tr>
    <tr>
        <td><Rating content="Green" ratings={[3]} stars={false}/></td>
        <td><Rating content="" ratings={[3]}/></td>
        <td><Rating content="Pretty good stuff" ratings={[3]} stars={false}/></td>
    </tr>
    <tr>
        <td><Rating content="Yellow" ratings={[2]} stars={false}/></td>
        <td><Rating content="" ratings={[2]}/></td>
        <td><Rating content="Situational/Mediocre" ratings={[2]} stars={false}/></td>
    </tr>
    <tr>
        <td><Rating content="Red" ratings={[1]} stars={false}/></td>
        <td><Rating content="" ratings={[1]}/></td>
        <td><Rating content="Generally avoid" ratings={[1]} stars={false}/></td>
    </tr>
</table>

Additionally, to save my fingers from withering away, I use abbreviations and acronyms for a few class features, abilities etc. that come up often. Here’s a quick guide to them:
- EV - Exploit Vulnerability 
- IV - Intensify Vulnerability
- IE - Implement’s Empowerment
- thaum/turge - short for thaumaturge
- castaturge - a thaumaturge that casts spells frequently
- dexturge/finesseturge - thaumaturge turge builds that rely on dexterity as your secondary and attack attribute/attack attribute for melee specifically.
- RK - Recall Knowledge
- TMI - Trick Magic Item
- MAD - Multiple Attribute Dependent 
- MAP - Multiple Attack Penalty

### Ancestries
While you can get away with ignoring your ancestry’s features in most games, many ancestries offer powerful features that either expand the thaumaturge’s kit or improve the options they already have. I will be going over ancestries I believe to be noteworthy to the thaumaturge and ranking individual feats that I think stand out. It is my hope that I can revisit this section of the guide and provide fully detailed rankings on at least the best options in the near future. 

#### Alternate Ancestry Boosts:
Alternate boost made most ancestral ability boosts irrelevant and centralised ancestral power. The ancestries with the best generalist features -such as elves and halflings- are now amongst the highest rated ancestries for all classes rather than just the ones their base attributes encouraged. Outside of common ancestries, androids, kashrishi and even catfolk represent other universal top-tier choices under alternate boost.

Alternate boost thaumaturges will choose to boost charisma and their choice of dexterity and strength. If you are a strength thaumaturge, you may choose to use this boost to improve your constitution rather than your charisma to improve your staying power, though I generally wouldn’t advise it. There is otherwise little deviation from this array outside of certain spellcasting/skill monkey builds.

#### Default Attribute Boosts:
Attribute arrays with flaws remain relevant because you can get an extra point in a more important stat by using the ancestry’s default array instead of alternate boost, provided the ancestry has a flaw in an attribute your class doesn’t care about.

Thaumaturges, especially melee builds, benefit from ancestries that dump intelligence. You truly have next to no reason to use intelligence when Esoteric Lore and Diverse Lore already exist. It provides no value to most thaums, and so ancestries that have an intelligence flaw are generally solid choices for the class. 

Ranged thaumaturges also do not mind strength flaws. Propulsive weaponry is not easy for thaumaturges to use, and while strength can be nice on a thrown weapon build, the existence of Implement’s Empowerment and Exploit Vulnerability, not to mention the MAD nature of the class do little to justify investment in strength beyond a +0, aside from the armour check penalties, but those can be easily alleviated or just ignored.

A dedicated ranged thaumaturge could try using an attribute array with a constitution flaw, but I wouldn’t recommend it. The weapons you use will generally have middling ranges, which means you’ll have to be closer to enemies, and many battlemaps aren’t very large anyway. There’s also just not a lot of value to constitution flaws since that’s an attribute you’re probably looking to bump with a free boost anyway.

#### Generic Ancestry Feats:
This section is to provide basic evaluations of some generic feat types that many ancestries gain access to. They usually all follow the same format and so they’re ranked here generically.

- <Rating content="Ancestry Battle Forms" ratings={[1]}/> You’re a martial who needs their hands all the time. Don’t.
- **Ancestry Cantrip** These feats usually offer one cantrip of your choice from a specific tradition, usually arcane or primal.<ul>
<li><Rating content="Guidance" ratings={[4]}/> The cantrip of a skill monkey. The thaumaturge does have easy access to status bonuses, but few apply to their skills, save for the lantern, and it isn’t this flexible. It also interacts with the Tome neatly if you really want to use its IV ability.</li>
<li><Rating content="Shield" ratings={[4]}/> Give yourself a bonus to armour class using a single action with the option to use your reaction to reduce up to twenty-five damage at max rank. This is very powerful for the thaumaturge, giving them an easy to use reaction and a circumstance bonus to AC which isn’t very easy for them to access. Somewhat redundant with the Amulet implement.</li>
<li><Rating content="Glass Shield" ratings={[3]}/> Like Shield, but blocks less damage in exchange for damaging the enemy a bit. You don’t have great native spellcasting proficiency, but this is the only way for primal cantrip granters to access a reliable free hand circumstance bonus to AC.</li>
<li><Rating content="Detect Magic, Figment, Light, Telekinetic Hand" ratings={[3]}/> These ubiquitous spells don’t rely on spellcasting proficiency and provide useful utility effects. On the off-chance nobody else in your party has them, they become more valuable.</li>
<li><Rating content="Electric Arc" ratings={[3]}/> Electric arc is the best offensive cantrip. It deals good damage, has a reliable damage type, and uses a basic save instead of a spell attack. An excellent choice for a caster thaumaturge, especially with their high charisma. Other competitive options are Spout and Scatter Scree.</li>
</ul>
- **Ancestry Climbing and the Thaumaturge:** Thaumaturges aren’t generally interested in climb speeds because it requires free hands they simply don’t have. However, ancestries that offer free-hand climbing capabilities, like the tailed goblin, vanara, athamasi kashrishi etc. are very valuable to ranged ‘turges. If you also have a climb speed, it reduces your reliance on strength for the purposes of scaling walls, and also increases your defences by making you harder to reach without ranged attacks, which most foes are weaker at compared to their melee strikes.<ul><li>**Table:** u/gazebomimic has created an excellent table by which climbing heritages and feats can be compared. Take these ratings with a grain of salt, as they do not consider individual class preferences. You can find it [here](https://docs.google.com/spreadsheets/d/1TMTg2Uyi_M3PQsIgzhL9jdkdH0YN4Dzv/edit?usp=sharing&ouid=102437415172085749582&rtpof=true&sd=true).</li></ul>
- <Rating content="Ancestry Damage Resistance" ratings={[2,3]}/> Ancestral damage resistances come in one of two forms: scaling or flat. Scaling resistances equal half your level and are usually heritages. Flat resistances are usually set to five and available at level five. You will eventually outgrow flat resistances and should retrain them once your level hits the teens. Scaling resistances start out worse, but are usually attainable immediately and are always relevant. The best damage types to resist are fire, poison, and void due to their ubiquity. It is also worth mentioning that all fire resistant heritages are technically inferior to the ancestry with the ifrit versatile heritage, which provides the exact same bonuses with a vastly expanded feat pool.
- <Rating content="Ancestry Emotion Resistance" ratings={[2,3]}/> Dozens of ancestries all offer this same feat and heritage: a numeric bonus against emotion effects with the ability to turn a success into critical success. They start out rated green but are made redundant by the thaumaturge’s ninth level Will proficiency increase. At that point, the feat only provides a minor numeric bonus and drops to a yellow rating. You might wish to retrain them at that point. Heritages and some versions of this feat, especially earlier versions that don’t provide a circumstance bonus should be avoided or retrained if you expect your game to reach ninth level.
- <Rating content="Ancestry Flight" ratings={[3,4]}/> Ancestry flight boils down to two options. You either take a feat at 9th level to get the effects of a Fly Spell once per day and then upgrade to a permanent Fly Speed at level 17 with another feat, or you spend your 1st, 5th and 9th level feats to go from a powered leap into permanent flight, usually coupled with a heritage or native ancestry bonus that gives you immunity to fall damage. These feats are incredibly valuable to any class; anyone is able to take advantage of a permanent fly speed. There are some ancestries that don’t fit into either category, but these will likely be corrected when Player Core 2 releases. Currently, all ancestries that gain a fly speed at level 9 are rare, so they may not be available at your table.
- <Rating content="Ancestry Lore" ratings={[1]}/> You have Esoteric Lore, and Diverse Lore. The remaster boosted this feat by making each ancestry lore have the additional lore skill feat added to it. These are <Rating content="yellow" ratings={[2]} bold={false}/> if the game you play in is centred around such an ancestry, or if you are looking for extra skills to pick up, such as if you want to invest in all the face skills while also pushing athletics or stealth, but you should probably be able to get those from a background.
- <Rating content="Ancestry Unarmed Attack" ratings={[2,3,4]}/> The thaumaturge really enjoys free hands to hold implements and esoterica in, and unarmed attacks are a great way to solve that issue, especially once you get your second implement. The thaumaturge can use just about any unarmed attack as well as they do most weapons since lower damage doesn’t mean as much to the ‘turge thanks to IE and EV anyway, but attacks stronger than the basic fist are appreciated. Goblins and leshies are two common ancestries with access to powerful unarmed attacks. The one exception are attacks that provide you with claws or specifically improve attacks made with only your fists (not the generic fists attack, which can be made with any part of the body). It is not likely that your GM will allow you to use such attacks when your hands are full (such as when holding implements or magic items) so they must generally be avoided.
- <Rating content="Ancestry Weapon Expertise" ratings={[1]}/> These feats have been phased out by the remaster, but thaumaturges never needed them because their own weapon proficiencies exceed it.
- <Rating content="Ancestry Unarmed Attack" ratings={[1,2,3]}/> This feat’s rating is as diverse as the weapons themselves are. For the most part, ancestral weapons are not worth the feat it takes to get them. Most have common equivalents that are very similar in power, save for reach weaponry. As of the remaster, these feats also grant access to the weapon’s critical specialisation effect at fifth level. These feats are slightly more valuable than usual to the thaumaturge because without the weapon implement they do not have permanent access to critical specialisation effects.

#### Common Ancestries:
The following ancestries are available in all campaigns.

<Rating content="Dwarf" ratings={[1]}/><br>
Charisma flaw, horrible speed, and very mediocre feats. 10 HP and darkvision don’t mean much, especially now that the leshy and orc are core ancestries. There are certainly ancestries in the uncommon and rare categories worse than this, and you do have some alright feats past level 9, which could bump this to <Rating content="yellow" ratings={[2]} bold={false} stars={false}/>, but as it stands it’s the worst option in the core selection by a mile.

<p></p><Rating content="Elf" ratings={[4]}/><br>
The alternate ability boost rules have made the elf a stand-out in optimisation guides everywhere. With 6 ancestral hitpoints, they are still on the more fragile side, but they have excellent feats and some standout heritages. You will absolutely find something useful here, especially for dexturges.

**Elf Heritages:**
- <Rating content="Ancient" ratings={[4]}/> Choose any multiclass dedication feat and take it. The only reason not to do this is if you are already in a free archetype game.
- <Rating content="Arctic" ratings={[2]}/> Standard ancestry damage resistance. 
- <Rating content="Cavern" ratings={[3]}/> Darkvision is always helpful. If you use versatile heritages, you might prefer picking those up instead.
- <Rating content="Desert" ratings={[3]}/> Standard ancestry damage resistance. 
- <Rating content="Seer" ratings={[3]}/> You get a decent cantrip and a bonus to checks to Identify Magic. The thaumaturge has proficiency with all of these skills but generally poor intelligence and wisdom, so this is a solid bonus.
- <Rating content="Whisper" ratings={[3]}/> The remaster reworked this heritage to reduce the flat checks required to target concealed or hidden creatures. It’s a bit redundant with the Lantern, but still a solid bonus nonetheless.
- <Rating content="Woodland" ratings={[2]}/> You can climb trees better than average and take cover anywhere in the woods. The climb speed is only useful out of combat, but the latter benefit is solid for dexturges if your campaign features the woodlands with frequency.

**1<sup>st</sup> Level Elf Feats**
- <Rating content="Ancestral Linguistics" ratings={[2]}/> Gaining an extra language isn’t very helpful. Gaining every common language is helpful, even if you only “know” it after a delay. There are still campaigns where this will never come up, but it’ll usually matter at least a couple times, especially if you are the party Face.
- <Rating content="Ancestral Longevity" ratings={[1]}/> You have plenty of trained skills and access to the Tome Implement. If you need this feat, your party is doing something very weird with their skills.
- <Rating content="Demonbane Warrior" ratings={[2]}/> This feat is entirely useless if your campaign does not feature demons frequently. It’s entirely possible for you to encounter fiends, but you can’t guarantee them being demons. It’s a decent damage bonus though, so if your campaign features demons in frequency this is a good pick. If you can trigger their sin vulnerabilities, even better. 
- <Rating content="Elemental Wrath" ratings={[2]}/> You get the acid splash cantrip. You can also change the reliable acid damage type to a less reliable damage type.
- <Rating content="Elven Aloofness" ratings={[1]}/> PCs should not be affected by the Coerce activity. If your GM disagrees, such a game may not be for you. Demoralize is very much a for-combat action; Either you or the demoralising foe ought to be defeated in a lot less time than 10 minutes.
- <Rating content="Eleven Lore" ratings={[2]}/> Since you are already trained in the tradition skills, this is effectively two free proficiencies in any skill. You might want to pick this up for some extra Lores.
- <Rating content="Elven Verve" ratings={[2]}/> This feat allows you to shrug off some severe conditions more quickly than usual. While they aren’t common, these conditions are so devastating that protecting yourself against them is at least worth considering, especially with your lower constitution.
- <Rating content="Elven Weapon Familiarity" ratings={[1]}/>All of these weapons are two-handed. Pass.
- <Rating content="Forlorn" ratings={[2,3]}/> Standard ancestry emotion resistance.
- <Rating content="Know Your Own" ratings={[1]}/> This is just a worse Automatic Knowledge that you can access for the price of an ancestry feat. Look at the feat directly below this. Let that inform your decision.
- <Rating content="Nimble Elf" ratings={[4]}/> Gotta go fast. Simple, but fantastic. Every turge will want this. 
- <Rating content="Otherworldly Magic" ratings={[3]}/> Standard ancestry cantrip. Choose Shield.
- <Rating content="Share Thoughts" ratings={[1]}/> Absolutely not. Pick up a scroll if you really want it.
- <Rating content="Unwavering Mein" ratings={[1]}/> The sleep resistance is hilariously situational, and the other benefit is just weird. If an effect lasts a minute, this does practically nothing unless your combat is going for 10+ rounds, and even then, that was just shaving 10% of its duration, if you somehow didn’t already shake it off. Just pick up Forlorn or Elven Verve.
- <Rating content="Wildborn magic" ratings={[3]}/> Standard ancestry cantrip. Choose Guidance or Glass Shield.
- <Rating content="Woodcraft" ratings={[2]}/> You get a few bonuses to survival skill activities that might matter once or twice a campaign.

**5<sup>th</sup> Level Elf Feats**
- <Rating content="Ageless Patience" ratings={[4]}/> Though this is slightly redundant with the Regalia and Tome implements, this only costs a 5th level ancestry feat and applies to many more effects. As you level and increase your modifiers, this basically makes you immune to critical failures. Fantastic out of combat, and still pretty good in there too. 
- <Rating content="Ancestral Suspicion" ratings={[2]}/> Not only is this partially redundant at 9th level, the bonus is situational and also partially redundant with Ageless Patience. Still, being controlled is a very nasty effect, so if it comes up this is a useful pick.
- <Rating content="Elven Instincts" ratings={[4]}/> This feat provides the most powerful and reliable initiative boost of any ancestry feat. It may become slightly redundant if your party makes frequent use of the scout exploration activity.
- <Rating content="Forest Stealth" ratings={[2]}/> Assuming you are in a forest, you can hide with a big bonus from cover. The effect is powerful action compression, but region-locked. You should have a pretty good idea of how frequent forests are in your campaign by this level.
- <Rating content="Martial Experience" ratings={[1]}/> No.
- <Rating content="Wildborn Adept" ratings={[1]}/> Some of these cantrips are nice on a castaturge, but its too high level for its cost, on top of competing with far better options.

**9<sup>th</sup> Level Elf Feats:**
- <Rating content="Brightness Seeker" ratings={[3]}/> You cast augury once per day and gain a bonus against any effects involved in pursuing the course of action you specified. It’s a pretty long cast time, but the bonus lasts even longer, and if the reading says proceeding through the dungeon brings you woe then honestly the bigger bonus is even more incentive to power through anyway. Just make sure you have those Translocate scrolls handy.
- <Rating content="Elf Step" ratings={[4]}/> Just keep kiting. This unfortunately doesn’t work with abilities that include a step, but this has a completely different use case anyway. Melee foes ought to never catch you within their reach
- <Rating content="Expert Longevity" ratings={[2]}/> This feat is interesting. The flexible expert skills don’t matter a whole lot if you already took the Tome, but this effectively enables you to rapidly retrain your skill increases. You and your party are probably already good at whatever’s necessary for the campaign by this level, but there’s certainly some good use for this, especially when it comes to Lores.
- <Rating content="Otherworldly Acumen" ratings={[4]}/> This feat is astonishingly flexible. Gain any second level spell from the same tradition as your cantrip, with the ability to swap it to any other spell during your daily preparations. Some good choices: comprehend language, darkvision, humanoid form, invisibility, mirror image, resist energy, see invisibility, spider climb, water breathing. Leave it on mirror image when you don’t know what is coming. Swap it to one of the others if you expect to need it. You can also check out the sections in Equipment below on scrolls and other spellcasting items for further advice and a link to a useful guide.
- <Rating content="Tree Climber" ratings={[1]}/> You gain a mediocre climb speed. The thaumaturge has no need for this sort of climbing, especially by this level.

**13<sup>th</sup> Level Elf Feats:**
- <Rating content="Avenge Ally" ratings={[3]}/> If an ally is dying, make a strike with the benefits of true strike for one action. This is a fantastic effect, but it does require a dying ally. You may be able to cheese it depending on the definition of ally, but that’s hard to fly. 
- <Rating content="Universal Longevity" ratings={[2]}/> You gain expert level skills on demand once per day. With this much investment into the feat path you could have probably just picked up the Tome instead.
- <Rating content="Wandering Heart" ratings={[2]}/> You swap your elf heritage to one appropriate to the environment. If you chose one of those heritages your campaign is probably themed around a particular terrain, but by this level travelling around the world or other planes is common or about to be common, so this can be somewhat useful; You could probably have just bought a relevant magic item though.

**17<sup>th</sup> Level Elf Feats:**
- <Rating content="Magic Rider" ratings={[2]}/> Most Teleportation effects are uncommon, and if a teleport is relevant to your campaign it’s incredibly likely the GM will just have it work for the purposes of moving the story forward.

<Rating content="Gnome" ratings={[4]}/><br>
Gnomes make excellent dexturges. They have a great ability score array, with native boost to constitution and charisma and a flaw in strength. Their ancestry feats are well suited to a variety of thaumaturge builds, including those who wish to supplement their build with innate spellcasting.

**Gnome Heritages:**
- <Rating content="Chameleon" ratings={[3]}/> A strong bonus to stealth checks; an excellent choice for sneaky dexturges.
- <Rating content="Fey-Touched" ratings={[3]}/> You get a free cantrip from the primal spell list and you can change it once per day. I’d typically just leave it on guidance or Glass Shield unless I had a pressing need for a different cantrip.
- <Rating content="Sensate" ratings={[3]}/> You get scent with a good range and a powerful bonus to detect undetected creatures. Pretty useful with your high perception.
- <Rating content="Umbral" ratings={[3]}/> You get darkvision. Less useful if your game uses versatile heritages.
- <Rating content="Vivacious" ratings={[2]}/> You gain low resistance to void damage and treat your doomed condition as one lower. This can be useful in the right campaigns, especially those with undead. 
- <Rating content="Wellspring" ratings={[3]}/> You can get the Shield cantrip through this heritage, but would otherwise be better served by Fey-Touched for its flexibility.

**1<sup>st</sup> Level Gnome Feats:**
- <Rating content="Animal Accomplice" ratings={[4]}/> You gain a familiar. The thaumaturge can make excellent use of a familiar and has feats to improve its capabilities, so this basically gives you a class feat for the price of an ancestry feat. 
- <Rating content="Animal Elocutionist" ratings={[3]}/>You can talk to animals and gain a small bonus to doing so. This basically gives you access to the largest communications network in the right regions, assuming your GM is willing to play ball..
- <Rating content="Empathetic Plea" ratings={[3]}/> You’re a very hostile person on account of being a martial, but given that the thaumaturge focuses on getting one enemy down at a time, you’ll have plenty of targets for this feat at the start of a combat that isn’t just a solo encounter, and you’ve an excellent diplomacy modifier. You don’t have many native reactions, and they won’t always apply against the targets this one triggers on.
- <Rating content="Fey Fellowship" ratings={[2]}/> In a campaign featuring the fey, this is an excellent bonus against the wily fellows both in and out of combat.
- <Rating content="First World Magic" ratings={[2]}/> Gets you Guidance. You could probably just get this from the Fey Touched heritage, which is why this feat’s rating is lower than normal
- <Rating content="Gnome Obsession" ratings={[3]}/> This feat is pretty good. Get both a scaling lore skill and Assurance in anything you want with a day of downtime. You don’t have as much reliance on lore skills, but if you’ve got an eidolon, a decent intelligence, and/or don’t want to access this through the Tome you can make good use of this.
- <Rating content="Gnome Polyglot" ratings={[2]}/> You learn three new languages. If you’re the party face this might be somewhat useful. 
- <Rating content="Gnome Weapon Familiarity" ratings={[1]}/> If you wanted the flickmace, you took Unconventional Weaponry for it. Decent for Gnomes using Alternate Boost though.
- <Rating content="Grim Insight" ratings={[2]}/> You’ve got really good saving throws, and fear is a common effect. Partially redundant at level 9, but automatically making foes off-guard is really nice.
- <Rating content="Illusion Sense" ratings={[2]}/> You get a bonus against illusions. Could be nice if you’re doing the scout/searcher role with a Lantern.
- <Rating content="Inventive Offensive" ratings={[2]}/> Meh. You can already access plenty of weapons that already have the relevant traits. 
- <Rating content="Life Giving magic" ratings={[2]}/> Casting an innate cantrip gives you temporary hit points. The amount is low and the duration is short. Still, it’s a reaction that gives you more durability. Surprisingly not a great combination with the (Glass) Shield cantrips, since their reactions already reduce far more damage.
- <Rating content="Natural Performer" ratings={[1]}/> Performance isn’t a useful skill and their feats are near useless for someone with your capabilities.
- <Rating content="Razzle Dazzle" ratings={[1]}/> You don’t have any means of blinding or dazzling a creature that would benefit from this feat. If you do, this can a good pick for those effects with a low duration, though you might want to just retrain for it once you get such a reliable feature
- <Rating content="Theoretical Acumen" ratings={[4]}/> There is no class better suited to the use of this ability. You can invest into most of the skills the feat replaces decently, but being able to use your Esoteric Lore modifier for a whole Saving Throw is just fantastic, even if it is just once per day.
- <Rating content="Unexpected Shift" ratings={[3]}/> The thaumaturge is an offensive class and will need to target hostile creatures. Becoming dazzled isn’t ideal, but the defensive bonuses are well worth it if they save your life. If you choose this feat, you’re absolutely picking up Fortuitous Shift.
- <Rating content="Vibrant Display" ratings={[1]}/> Thaumaturges focus on one target at a time. If you are surrounded by multiple foes at once and you don’t have a more reliable means of area control/damage, Run away.

**5<sup>th</sup> Level Gnome Feats:**
- <Rating content="Eclectic Obsession" ratings={[2]}/> This feat allows you to spontaneously gain any lore you want for ten minutes as an action. The benefit of knowing when you critically failed a check by losing this skill is a bit redundant with Unmistakable Lore though. You are unlikely to have high intelligence, but if you do (or have an eidolon) this can be pretty good if something you didn’t prepare for showed up and you really want to know what it is before (or while) you attack it.
- <Rating content="Energised Font" ratings={[1]}/> You only need this feat if you took an archetype and have a focus pool from it. Pretty good if you do.
- <Rating content="Intuitive Illusions" ratings={[1]}/> I would generally not advise that the thaumaturge pick up sustaining spells, especially for combat, but this can deal with that. It also requires you to cast such a spell in the first place, and while you have access to spellcasting items, this is just too situational.
- <Rating content="Natural Illusionist" ratings={[2]}/> Illusion spells’ effectiveness are often reliant on how your GM has NPCs react to them. These spells do scale though,which is nice..
- <Rating content="Vibrant Display" ratings={[1]}/> If you need to disguise your armour, buy a Ring of Discretion.

**9<sup>th</sup> Level Gnome Feats**
- <Rating content="Cautious Curiosity" ratings={[2]}/> You gain disguise magic and silence as once-per-day spells. Disguise magic isn’t very helpful, but silence can bee an automatic success on stealth checks if combined with any form of invisibility.
- <Rating content="First World Adept" ratings={[3]}/> You gain revealing light and invisibility as once-per-day spells. You won’t often land revealing light without a spellcasting archetype but invisibility is a fantastic spell to cast on either yourself or allies.
- <Rating content="Fortuitous Shift" ratings={[4]}/> This is a great improvement to the Unexpected Shift feat. You gain a higher chance to activate the damage reduction, and you are no longer dazzled if it occurs, no longer hindering your offensive capabilities.
- <Rating content="Life Leap" ratings={[2]}/> You could probably just tumble through instead. Can get you out of flanking though, but there are more accessible actions for you to use in those scenarios.
- <Rating content="Vivacious Conduit" ratings={[1]}/> You have better feats to pick than a bit more healing while someone else uses Treat Wounds on you. 

**13<sup>th</sup> Level Gnome Feats:**
- <Rating content="Instinctive Obfuscation" ratings={[3]}/> Impose a powerful flat check on an enemy’s attack against you. Save this for powerful spells or a nasty attack you’ve already identified the foe to have to outright negate their ability. Depending on how you define being attacked, this might apply to saving throw abilities too, which bumps this to <Rating content="Blue" ratings={[4]} bold={false} stars={false}/> for its sheer versatility.

<Rating content="Goblin" ratings={[4]}/><br>
Goblins are fun. A lot of golarion lore posits them as being able to use seemingly mundane items that suddenly work in their possession, if only for a short while, which fits a thaumaturge well enough. A wisdom flaw is annoying but not insurmountable. Invest into stealth and don’t negate your will saves, and you can make use of the default boosts well enough for a hardy finesse ‘turge. Any other build will probably just use alternate boosts, unless you want some extra constitution as a midranger. 

**Goblin Heritages:**
- <Rating content="Charhide" ratings={[3]}/> Standard ancestry damage resistance and easier flat checks to end persistent fire damage. Persistent damage is dangerous and fire damage is common, so the reduction is appreciated.
- <Rating content="Irongut" ratings={[2]}/> You can eat and drink from consumables even while sickened. You also resist harmful toxins, but only if they came from something you ate. It’s also partially redundant with your fortitude mastery at level 15.
- <Rating content="Razortooth" ratings={[3]}/> Standard ancestry unarmed attack.
- <Rating content="Snow" ratings={[2]}/> Standard ancestry damage resistance.
- <Rating content="Tailed" ratings={[3]}/> You can climb without hands. This allows ranged weapon users to climb up a wall and shoot from safety. You’ll still need to make an athletics check to climb, so a decent athletics and some strength is encouraged, at least until you get Tree Climber at level 5. For that reason, it has good synergy with thrown weapons.
- <Rating content="Treedweller" ratings={[2]}/> The treedweller gains a great bonus to stealth while in the woods and to some situational survival actions. If you are in the woods often, this is nice, otherwise, pick something else.
- <Rating content="Unbreakable" ratings={[3]}/> The bonus hit points lose relevance as you level, but this also has some fun follow-up feats which add good durability boosts. If you don’t expect your game to go past level 10, improve its rating by a step.

**1<sup>st</sup> Level Goblin Feats:**
- <Rating content="Bouncy Goblin" ratings={[2]}/> On its own this is whatever, but it has a good follow-up for ranged turges if you reach level 9+.
- <Rating content="Burn It!" ratings={[1]}/> You have no reliable spells or alchemical items with which to use this feat. If you have scroll thaumaturge this can be a nice bonus when you want to chuck a fireball, but it’s too situational.
- <Rating content="City Scavenger" ratings={[1]}/> I like the idea of a goblin using “garbage” for their esoterica, what with one man’s trash being another man’s treasure. That idea doesn’t require this garbage feat, which is treasure to no one.
- <Rating content="Extra Squishy" ratings={[2]}/> Squeezing is infrequent at best. The bonuses against being shoved while squeezing are even more situational.
- <Rating content="Fang Sharpener" ratings={[2]}/> If you are a strength goblin you might like this feat for the free longsword attached to your face, but the tailed goblin might provide better benefits.
- <Rating content="Goblin Scuttle" ratings={[3]}/> This is an excellent feat on any class. Step when an ally moves adjacent to you. Scuttle is fantastic for getting out of an enemy’s reach, getting into position for flanking, or even getting out of a potential flank. Even more solid if you are a melee build and have another melee ally.
- <Rating content="Goblin Song" ratings={[2]}/> You can use performance to reduce an enemy’s will saves and perception checks. You should probably just use the Bon Mot skill feat and invest into diplomacy instead.
- <Rating content="Goblin Weapon Familiarity" ratings={[3]}/> You have two main choices here. The <Rating content="Dogslicer" ratings={[3]} bold={false}/> is a lovely option for melee turges. The thaumaturge can make excellent use of the deception skill and has Divine Disharmony to guarantee the backstabber damage on top of just flanking, which is a nice damage boost on top of having agile and finesse. Very useful if you can get multiple attacks off in a turn. The second weapon of interest is the <Rating content="Big Boom Gun" ratings={[2]} bold={false}/>. Generally, I don’t think thaumaturges can make good use of firearms without heavy investment that takes a few levels for them to really get going. However, especially in games that start at higher levels, the Big Boom Gun is quite interesting on Tome builds. The weapon’s gimmick is that it really hurts the user if you miss or critically miss, but can target any physical damage type and has the highest critical damage of any one handed martial firearm in the game. Most thaumaturges would turn down such a bad trade, but if you use the tome’s IV, you already know whether or not you will hit, like a pseudo Devise a Stratagem. The Big Boom Gun is a solid pick for those builds, especially when combined with Risky Reload, though you might consider retraining for it when you get to that level instead.
- <Rating content="Hard Tail" ratings={[3]}/>You get a tail attack with low damage and no traits, but it technically allows you to trip with no hands as part of the tailed goblin heritage’s benefits. Can be nice for a strength turge, especially with its follow up feats.
- <Rating content="Junk Tinker" ratings={[1]}/> You can save a small amount of money while crafting. Why are you crafting?
- <Rating content="Rough Rider" ratings={[1]}/>You don’t have an animal companion.
- <Rating content="Twitchy" ratings={[3]}/> You gain moderate improvements to your defences against traps and to initiative checks that occasionally receive a massive improvement if an opponent is using deception or stealth for initiative. Unless you are facing those situations, The initiative boost is somewhat redundant with activities like Scouting and feats like Incredible Initiative, but the feat synergizes really well with Lanterns and the thaumaturge struggles with access to circumstance bonuses to their defences. It also just costs a single ancestry feat.
- <Rating content="Very Sneaky" ratings={[3]}/> It’s a bit harder to use for an action intensive build like the thaumaturge, but it’s just in general a strong feat and with the right build you’ll find some use of it. Seeking out cover or concealment at the start of (or before) battle should be a top priority should you choose this feat.

**5<sup>th</sup> Level Goblin Feats:**
- <Rating content="Ankle Bite" ratings={[4]}/> You can bite a creature that grabs you. This feat is a fantastic offensive boost, allowing you an additional chance to get your damage boosters onto an enemy when they grab or restrain you, which is a very common ability most melee foes have.
- <Rating content="Chosen of Lamashtu" ratings={[3]}/> Gain a second heritage bonus.
- <Rating content="Kneecap" ratings={[1]}/> You make a strike that doesn’t deal damage but imposes a movement speed penalty. Wasting your damage for this isn’t a good idea.
- <Rating content="Loud Singer" ratings={[2]}/> Expand the range of Goblin Song and affect more targets.
- <Rating content="Tail Spin" ratings={[4]}/> Bypass the MAP on a trip attempt on two adjacent foes that doesn’t require the use of your hands, and improves your success to a critical success, thus dealing extra damage to the target(s). This feat doesn’t actually increase your MAP past the first penalty since it’s only a single athletics check. A great choice for strength thaumaturges. 
- <Rating content="Torch Goblin" ratings={[2]}/> You don’t have any obvious means of setting yourself on fire. You might be able to convince your GM that the big boom gun counts due to its critical failure effect, in which case this is decent damage and deterrs foes from attempting their maneuvers on you. However, you must still attempt the recovery check as normal, so it might not be worth it if you have to activate this effect more than once a combat. At least your resistance will reduce or outright cancel most of the damage.
- <Rating content="Tree Climber" ratings={[4]}/> The Tree Climber feat gives you a climb speed of ten feet, enabling you to ascend most surfaces without any check. When you do need to make a check, you receive a massive bonus due to your climb speed. In any environment with walls, tailed goblins shouldn’t spend any time on the ground. Let your party trigger the traps and take melee attacks while you rain down fire from the walls: odds are they can take more punishment than you can. Only take this on a tailed goblin; the treedweller requires you to use your hands and provides no additional bonuses.
- <Rating content="Vandal" ratings={[2]}/> You get an extra skill and destroy unattended objects slightly better.

**9<sup>th</sup> Level Goblin Feats:**
- <Rating content="Cave Climber" ratings={[2]}/> If you took Tree Climber, your climb speed now equals your land speed when on trees. If you are in forested environments often, that’s fantastic mobility; Otherwise this feat is useless. Only take this if you are a tailed goblin.
- <Rating content="Cling" ratings={[3]}/> If your enemy moves away, you move with them. This only applies if you have a relevant unarmed attack, like jaws or a tail, because otherwise you don’t have the hands free for it. This can save you actions moving, but it does disable you from using your main unarmed strikes. Nonetheless, you still have your basic unarmed attack available, so you aren’t losing much damage.
- <Rating content="Freeze It!" ratings={[4]}/> A great pick for melee builds. This check doesn’t have the attack trait and applies a powerful debuff against the main defence you’ll target; their AC. A fantastic pick for melee turges who didn’t want to use the native unarmed attacks. 
- <Rating content="Hungry Goblin" ratings={[4]}/> Get a wounding rune on your handwraps and enjoy consistent temporary HP that you can constantly refresh. A powerful durability booster for melee turges.
- <Rating content="Roll With It" ratings={[3]}/> Cancel a critical hit in exchange for allowing the enemy to fling you 30 feet in any direction. The consequence is negligible to ranged characters who would rather be far away, but melee characters are more likely to benefit from it in the first place, but I would rather pick another feat for those characters. You can also use this on a regular hit but the drawbacks are too hefty to recommend. This movement also triggers reactive strikes as it is voluntary movement, so don’t use it if you’d take a hit because of it, which you ought to know with your Recall Knowledge capabilities
- <Rating content="Scalding Spit" ratings={[2]}/> This requires a situational feat and you investing in unarmed attacks without taking a more relevant heritage, unless you took chosen of lamashtu, which actually provides an earlier unarmed attack. If you did, this feat offers some great versatility, but it requires actions to set up and might require continuous set up depending on your recovery checks. If you wanted a switch hitting unarmed attacker, pick the leshy.
- <Rating content="Skittering Scuttle" ratings={[3]}/> Flee or Flank quicker. Look for as many bonuses to your speed as possible, especially if they give you an even number; Remember to watch out for Reactive Strikes.

**13<sup>th</sup> Level Goblin Feats:**
- <Rating content="Unbreakable-er Goblin" ratings={[3]}/> Ten more hit points and immunity to fall damage. Neither one is that impressive by now, but both together are pretty solid. If you took bouncy goblin, you also get to bounce around more when falling, which can provide some extra mobility, and at the very least is just hilarious
- <Rating content="Very, Very Sneaky" ratings={[3]}/> You can hide anywhere and move full speed while sneaking. It’s a fantastic benefit but you may consider waiting a few more levels to pick it up as a skill feat through Legendary Sneak; skill feats are generally less valuable than ancestry feats the higher your level, but this does basically give you the most important effects of Swift and Legendary Sneak.

**17<sup>th</sup> Level Goblin Feats:**
- <Rating content="Reckless Abandon" ratings={[3]}/> There are plenty of uses to near-total damage immunity on your turn, especially when it can be activated as a free action. This can be very useful when it comes to your action economy, enabling you to spend less actions having to avoid certain hazards and threats and just charging recklessly wherever it is you must go.

<Rating content="Halfling" ratings={[4]}/><br>
The Halfling has a decent default ability array. Dexterity and Wisdom are solid scores for the thaumaturge to boost, especially for a ranged build that can safely ignore strength for the most part. There’s not much that isn’t obvious to most players here; You came for Halfling Luck.

**Halfling Heritages:**
- <Rating content="Gutsy" ratings={[1,3]}/> Standard ancestry emotion resistance. Does not provide a circumstance bonus, so useless past level 9.
- <Rating content="Hillock" ratings={[3]}/> You regain extra hit points from medicine checks. Can help your party medic move to another ally faster.
- <Rating content="Jinxed (U)" ratings={[1]}/> Absolutely not.
- <Rating content="Nomadic" ratings={[2]}/> You gain a few more languages that will probably never come up, but it’s nice if you’re a face.
- <Rating content="Observant" ratings={[3]}/> You gain a passive benefit to your perception DC, but not your perception checks. Still useful for Lantern scouts.
- <Rating content="Twilight" ratings={[2]}/> Low-light vision isn’t as helpful as full darkvision. Just take a versatile heritage if those are available.
- <Rating content="Wildwood" ratings={[2]}/> Ignore difficult terrain caused by plants. This can be useful in nature campaigns, but otherwise it’s whatever.

**1<sup>st</sup> Level Halfling Feats:**
- <Rating content="Distracting Shadows" ratings={[3]}/> Use your companions to hide. Assuming your party has another ranged character who you can start combat behind, this is a nice way to make enemies off-guard to your ranged attacks, but you could probably use Divine Disharmony instead
- <Rating content="Folksy Patter" ratings={[3]}/> This becomes increasingly reliable as your party levels up, and you can make good use of it with your high charisma. It’s a great way to let your party know that somebody is lying without tipping off the liar, and functions similarly to telepathy in that capacity, so it’s excellent in games of intrigue and manipulation.
- <Rating content="Halfling Luck" ratings={[4]}/> Every other feat here means nothing compared to Halfling Luck. This can and will save your life.
- <Rating content="Halfling Weapon Familiarity" ratings={[2]}/> The only weapon of note here is the filcher’s fork, which is identical to the starknife but exchanges versatile S for Backstabber. I don’t think that’s enough to pick this over anything else, especially the monstrosity right above it.
- <Rating content="Innocuous" ratings={[2]}/> The intent of the feat seems to be that all you can do is prevent people from realising your attempt to Create a Diversion was a trick on a failure (but not a critical failure). This is meh.
- <Rating content="Prarie Rider" ratings={[1]}/> You don’t need the bonus or more trained skills.
- <Rating content="Sure Feet" ratings={[1]}/> You don’t have the hands to make use of this in combat..
- <Rating content="Titan Slinger" ratings={[2]}/> You can’t make great use of reload weaponry, especially non-firearms, which most slings are. This does work with the bola though, so if you’re a thrown weapon turge it’s a nice pick up, basically giving you a trident with some extra goodies. 
- <Rating content="Unfettered Halfling" ratings={[2]}/> You’re better at resisting and escaping the grabbed, restrained, and immobilised conditions. It’s a success to critical success effect, which usually means getting to take a five foot stride when you get grappled. It’s a bit redundant with your improvement to fortitude saves at level 15, on top of its situational nature, and in all honesty the new monster maneuver design and subsequent changes to their modifiers means that a lot of these foes have very strong athletics, so failure is infrequent.
- <Rating content="Watchful Halfling" ratings={[2]}/> You gain a decent bonus to noticing possession or enchantment. It might be useful, but enchantment effects aren’t very frequent. You can also use Aid to help someone’s save against an effect, but these sort of things generally don’t allow repeat saves, especially if affecting an NPC.

**5<sup>th</sup> Level Halfling Feats:**
- <Rating content="Cultural Adaptability" ratings={[4]}/> This feat is incredibly versatile. Come up with a decent backstory and get some lovely feats. This is especially useful in an ancestry paragon game. 
- <Rating content="Easily Dismissed (U)" ratings={[2]}/> I’m not sure why this even needs to be a feat. I could maybe see it as a skill feat, but the mechanics are wildly different from the idea the feat’s name evokes. I’ve only included it because it felt so weird that it exists in the first place.
- <Rating content="Halfling Ingenuity" ratings={[2]}/> This feature basically nets you the investigator’s keen recollection class feature. It gets more useful the more imaginative you are and the more flexible your GM is.
- <Rating content="Shared Luck" ratings={[4]}/> Use this feat when an ally fails a roll they’re usually good at and the consequences are harsh, such as the rogue critically failing a reflex save or even something like an inventor critically failing on an important crafting check.  It doesn’t even cost a reaction.
- <Rating content="Step Lively" ratings={[2]}/> You can step <i>around</i> a larger creature’s space if they end their movement adjacent to you. This might be useful for breaking flanking or getting into flanking, but most large or larger enemies have reach and are unlikely to be getting all the way up in your face.

**9<sup>th</sup> Level Halfling Feats:**
- <Rating content="Cunning Climber" ratings={[1]}/> You don’t have hands free for this to matter in combat.
- <Rating content="Dance Underfood" ratings={[1]}/> Why? You don’t gain any actual bonus for being in the same space as a larger creature unless your GM cooks up some homebrew nonsense, and I can't rank that for you.
- <Rating content="Fade Away" ratings={[3]}/> Free invisibility is always good. Unfortunately, it has a mediocre prerequisite in Easily Dismissed, which is also uncommon.
- <Rating content="Guiding Luck" ratings={[3]}/> You get an extra use of halfling luck that applies to perception checks or attack rolls only; Use it if your party really needs to win initiative against some nasty foes or to get an important strike in before an enemy can act again.
- <Rating content="Helpful Halfling" ratings={[2]}/> If you have an archetype that lets you aid more reliably this can be nice on a support turge. However, that also means you’re using a skill you’ve invested in reliably, and it ought to be near impossible to critically fail on anything but a nat 1, and at higher levels that doesn’t even make you critically fail anymore.
- <Rating content="Irrepressible" ratings={[1]}/> If you aren’t gutsy this feat is already redundant with your class features. If you are gutsy, it is <Rating content="yellow" ratings={[2]} bold={false} stars={false}/> till level 13 where it’s back to red. You already have a really good will save on account of your base ancestry boosts and will progression, so this is unlikely to come up often, but fear effects can be nasty.
- <Rating content="Unhampered Passage" ratings={[2]}/> You can cast freedom of movement. Automatically escaping non magical restraining effects is pretty cool, and with a ten minute cast time you might want to take it before combat begins. Still, it doesn’t scale and you have better options. I might just take cultural adaptability and look for one of those ancestry feats that provide bonuses against maneuver actions to your DCs instead.

**17<sup>th</sup> Level Halfling Feats:**
- <Rating content="Shadow Self" ratings={[4]}/> Free invisibility once per hour when you succeed on a hide or sneak check against all your foes, up to 1 minute or until you take a hostile action. That on its own is already great, but you also make your foes think you are hidden in another space, and this seems to be a non-magical non-illusion effect. A great capstone for stealth builds.

<Rating content="Human" ratings={[4]}/><br>
The alternate attribute boosts rule made humans a lot worse in most optimisation rankings simply because their free boosts were no longer such a valuable feature, alongside the increase in options that various new ancestries offer. The human still remains a potent choice for the thaumaturge thanks to their ready access to many general feats and the power of <Rating content="Natural Ambition" ratings={[4]}/> on the thaumaturge. The ancestry peters out a bit by the end, but by that point you can just drop a slot on Adopted Ancestry.

**Human Heritages:**
- <Rating content="Skilled" ratings={[3]}/> If you want more skills at expert level this is the best way to do it. The thaumaturge might like this to get some of their non tradition skills to expert if they want to take full advantage of their extra limited skill increases.
- <Rating content="Versatile" ratings={[3]}/> You get a general feat. Armor Training, Fleet, Adopted Ancestry, Incredible Initiative and Toughness are all good choices. This heritage is quite strong, but plenty of other ancestries get features either similar to or better than just the base feat, and they didn’t have to give up any base ancestry or heritage features to get them.
- <Rating content="Wintertouched" ratings={[2]}/> Standard ancestry damage resistance.

**1<sup>st</sup> Level Human Feats:**
- <Rating content="Adapted Cantrip" ratings={[1]}/> You don’t have spellcasting.
- <Rating content="Cooperative Nature" ratings={[3]}/> You don’t have a lot of base reactions and you might not always want to make multiple strikes due to your lower accuracy, so this is a pretty powerful bonus, especially with the remaster reducing the DC for Aid ensuring you critically succeed more often at lower levels.
- <Rating content="Dragon Spit" ratings={[2]}/> Ethnicity/nationality locked. Offensive spellcasting.
- <Rating content="General Training" ratings={[4]}/> Gain another general feat. Good options include Armor Training, Fleet, Toughness etc. Many humans will simply keep choosing this feat.
- <Rating content="Gloomseer" ratings={[2]}/> Ethnicity/nationality locked. You gain low-light vision.
- <Rating content="Haughty Obstinacy" ratings={[3]}/> PCs shouldn’t be coerced. The other part of the effect applies to some nasty will saves, but those effects are quite rare and the feature is completely redundant with Resolve at level 9.
- <Rating content="Natural Ambition" ratings={[4]}/> This feat tends to rank near the top of optimisation guides, and for good reason. The thaumaturge has a lot of powerful and fun level 1 feats that open up a lot of feat chains and strong options for the class. Unfortunately, they are all competing with Diverse Lore. This feat allows you to take an additional 1st level feat in addition to that powerhouse, or if you wish to play a build that is less reliant on that feature, you still greatly benefit from having access to, for example, scroll thaumaturgy and a familiar at the same time, or taking Ammunition Thaumaturgy alongside an actual 1st level feat that’s not just a tax.
- <Rating content="Natural Skill" ratings={[2]}/> This is very unnecessary for a class with your number of trained skills.
- <Rating content="Unconventional Weaponry" ratings={[3]}/> Poach whatever weapon you want from any other ancestry or culture. This is a great way to access one handed reach weapons for melee turges.

**5<sup>th</sup> Level Human Feats:**
- <Rating content="Adaptive Adept" ratings={[1]}/> You can’t cast spells.
- <Rating content="Clever Improviser" ratings={[2]}/> Being able to use this to attempt trained actions can be pretty useful, but it’s mostly for the purposes of recall knowledge and you already have diverse lore.
- <Rating content="Darkseer" ratings={[3]}/> Ethnicity/nationality locked. Gain darkvision.
- <Rating content="Sense Allies" ratings={[1]}/> The thaumaturge has few features that require targeting their allies; This is most useful for the purposes of Share Weaknesses.
- <Rating content="Wavetouched Paragon" ratings={[2]}/> Ethnicity/nationality locked. You gain a swim speed.

**9<sup>th</sup> Level Human Feats:**
- <Rating content="Cooperative Soul" ratings={[2]}/> You become completely immune to failure on aid checks provided you are an expert in the skill used. Works especially well if you have a feat that lets you use a single skill on all Aid checks.
- <Rating content="Dragon Prince" ratings={[3]}/> Ethnicity/nationality locked, and requires Dragon Spit. Area damage is always handy, especially if you have a reliable DC. You generally want to go for cones over lines unless your enemies enjoy the conga.
- <Rating content="Group Aid" ratings={[2]}/> Can be nice out of combat, but you could have also used Follow The Expert.
- <Rating content="Hardy Traveller" ratings={[1]}/> Buy a bag of holding; Improving your overland travel speed is almost useless unless your entire party can improve it to the same (or similar) speed at once.
- <Rating content="Incredible Improvisation" ratings={[2]}/> Once a day you gain a powerful bonus to a skill you are untrained with. I’d sooner have taken the tome.
- <Rating content="Multitalented" ratings={[4]}/> Gain a free multiclass archetype. This is a bit late in level, so look for archetypes that offer a lot of value up front with their dedication or have some really solid late-game feats; If you have the aiuvarin heritage, you get to ignore the attribute requirements, which can be useful for some builds.
- <Rating content="Shory Aeromancer" ratings={[3]}/> Cast fly once per day. Always handy.

**13<sup>th</sup> Level Human Feats:**
- <Rating content="Advanced General Training" ratings={[2]}/> Most of the best general feats are low level, but I might pick this up for the purposes of mid-level skill feats. The thaumaturge has ready access to extra skills, but skill feats are its most limiting factor.
- <Rating content="Bounce Back" ratings={[3]}/> Ignoring the wounded condition is as great as it is rare. If you went down once, you might well go down again; this provides some well appreciated insurance. You are a very offensive class with slightly less than average defences when it comes to your HP and AC, so this will be handy.
- <Rating content="Irriseni Ice Witch" ratings={[2]}/> Ethnicity/nationality locked. You can better resist cold damage as a wintertouched human and cast a powerful spell once a day, though it doesn’t scale. The cold resistance is the best part of this feat, but Wall of Ice is still nice to have. I’d only take it if cold damage comes up often.
- <Rating content="Shadow Pact" ratings={[2]}/> Ethnicity/nationality locked. You get a non-scaling creation that evaporates in bright light.  
- <Rating content="Shory Aerialist" ratings={[2]}/> Ethnicity/nationality locked. The more flight you have access to, the better this feat becomes, and the thaumaturge has excellent access to flight from magical items. Bump its rating by one step if you can access flight more than once a day, or up to <Rating content="Blue" ratings={[4]} bold={false} stars={false}/> if you can access it every encounter. If you only have flight from the prior Shory feat, this is still okay.
- <Rating content="Stubborn Persistence" ratings={[2]}/> You get a small chance to avoid becoming fatigued. Fatigue is rare as far as conditions go, and is not very debilitating one. You can probably just cast a spell to deal with it anyway
- <Rating content="Unconventional Expertise" ratings={[1]}/> Completely unnecessary.

**17<sup>th</sup> Level Human Feats:**
- <Rating content="Heroic Presence" ratings={[2]}/> Rather mediocre as capstone feats go, but it’s still free temporary HP (which will likely disappear immediately) and bonuses to will saves. A little redundant with the Regalia, but this does apply regardless of range and can also affect your party’s minions. 

<Rating content="Leshy" ratings={[3]}/><br>
These little plants became so popular and beloved that Paizo decided they had to become core ancestries. The Leshies have a very lovely intelligence flaw, but no native charisma boost, so you may want to use alternate boost instead if you want to maximise your charisma, but plenty of builds can live just fine with a +3. A lot of their options are just pillaged from the elf and orc lists, so you might just use them, but they have a lot of interesting options on their own, and are rather hardy for being little plants. You could draw from real world stories and treatments that involve the use of flora to describe the use of your esoterica. 

**Leshy Heritages:**
- <Rating content="Cactus" ratings={[3]}/> Standard ancestry unarmed strike.
- <Rating content="Fruit" ratings={[3]}/> You get some decent healing once per day. Don’t think about it too hard; even as a thaumaturge, some things are better off being unexplained.
- <Rating content="Fungus" ratings={[3]}/> You gain darkvision.
- <Rating content="Gourd" ratings={[3]}/> If you are disarmed, drawing a weapon with a potency crystal attached to it is a great back up, especially since you basically get the benefits of Quick Draw here. 
- <Rating content="Pine" ratings={[2]}/> On its own this does basically nothing for you, but it opens up access to some neat feats. 
- <Rating content="Leaf" ratings={[3]}/> Immunity to fall damage opens up novel and hilarious new forms of movement. Be sure to invest in jumping to make maximum use of this feat.
- <Rating content="Lotus" ratings={[1]}/> You can walk on water. You can only do so slowly and if the water is moving you’ll need to make a check. Just get a swim speed.
- <Rating content="Root" ratings={[3]}/> You get a couple extra hit points and become harder to shove, reposition, and trip. This is especially useful given your poor reflex saves.
- <Rating content="Seaweed" ratings={[1]}/> Is your campaign nautical? Definitely pick this. Otherwise, just get swim speeds from a consumable or something.
- <Rating content="Vine" ratings={[2]}/> You can climb without hands. This allows ranged turges to climb up a wall and shoot from safety. However, with no native access to a climb speed, investment into athletics and a bit of strength is necessary, so thrown weapons are your best bet.

**1<sup>st</sup> Level Leshy Feats:**
- <Rating content="Ageless Spirit" ratings={[1]}/> Pillaged from the elf list. The same rating applies.
- <Rating content="Grasping Reach" ratings={[1]}/> You can’t use two handed weapons.
- <Rating content="Harmlessly Cute" ratings={[3]}/> You get a decent social skill feat 6 levels earlier than you ought to. It technically still has a requirement of being master in Diplomacy, so talk with your GM. 
- <Rating content="Leshy Superstition" ratings={[3]}/> Pillaged from the orc list. A fantastic and easy feat which you should use every time it becomes available.
- <Rating content="Pyrophilic Recovery (U)" ratings={[2]}/> This is a really roundabout way of saying you reduce fire damage on top of any fire resistances you already have. Pine leshies have access to this feat.
- <Rating content="Seedpod" ratings={[3]}/>This ranged unarmed attack is already fantastic with its reliable damage type and range longer than most thrown weapons, but being able to combine it with the Cactus leshy provides you a powerful switch hitter build for dexturges that leaves your hands free to use implements and activate items too. Together, they are a <Rating content="Blue" ratings={[4]} bold={false} stars={false}/> combination. 
- <Rating content="Shadow of the Wilds" ratings={[1]}/> Incredibly situational and only useful if your party is as paranoid about this as you are.
- <Rating content="Undaunted" ratings={[2,3]}/> Standard ancestry emotion resistance.

**5<sup>th</sup> Level Leshy Feats:**
- <Rating content="Anchoring Roots" ratings={[3]}/> You gain powerful bonuses against reposition, shove, and trip, but you must spend an action to activate the effect. You are even better at using this feat because you can always RK on a foe to see if they have some nasty abilities that trigger when they use such effects, so you know when it’s best to activate this.
- <Rating content="Climate Adaptation (U)" ratings={[1]}/> Pine leshies get access, but this is near useless.
- <Rating content="Defensive Needles (U)" ratings={[2]}/> Pine leshies get access, but your GM will probably let you use it with a Cactus leshy too. The damage isn’t a lot, but it can add up.
- <Rating content="Leshy Glide" ratings={[2]}/> I’m not sure why you’d just not want to jump up again really.
- <Rating content="Ritual Reversion" ratings={[2]}/> You become a plant. It is impossible to distinguish you from a normal plant through perception, but some enemies might be able to see through your disguise with nature or survival. Could be useful for sneaking around.
- <Rating content="Speak with Kindred" ratings={[2]}/> You can talk to plants. Your leshy heritage determines how useful this feat is to you, as well as how game your GM is with such an effect. In the right scenario, this can get you a very large communications network, and you have excellent capabilities as a Face.

**9<sup>th</sup> Level Leshy Feats:**
- <Rating content="Bark and Tendril" ratings={[3]}/> Oaken resilience is an alright defensive buff with a good duration, but it doesn’t scale at all. Entangle is very good; the difficult terrain it creates applies regardless of the creatures’ saves, so your non-existent spellcasting proficiency doesn’t hurt as much. This can entirely lock out many enemies' movement abilities.
- <Rating content="Lucky Keepsake" ratings={[3]}/> Pillaged from the orc list. Still great.
- <Rating content="Solar Rejuvenation" ratings={[2]}/> You regain hit points over time while in sunlight unless you are a fungus leshy, in which case you shouldn’t bother because you don’t generally have a large pile of dead plants to eat. Even so, whoever’s treating wounds on you was probably going to heal you to full anyway, but if you didn’t take too much damage this is still nice.
- <Rating content="Spore Cloud" ratings={[2]}/> You can dazzle all creatures in an emanation around you. THe thaumaturge has a very good class DC, but this does cost two actions to use; you might consider just running away instead.
- <Rating content="Towering Growth (U)" ratings={[3]}/> Large size and expanded reach is great for strength turges, especially if you have a weapon or mirror implements and some aura effects. You also get to use this twice per day rather than just once unlike most other feats.

**13<sup>th</sup> Level Leshy Feats:**
- <Rating content="Call of the Green Man" ratings={[1]}/> Standard ancestry battle form.
- <Rating content="Cloak of Poison" ratings={[2]}/>Passively deal poison damage to any creature who damages you in the melee without a reach weapon. Poison is a mediocre damage type, but you can choose not to activate it when fighting something immune to poison. It’s only once per day though.

**17<sup>th</sup> Level Leshy Feats:**
- <Rating content="Flourish and Ruin" ratings={[2]}/> Field of life is only practical when fighting undead or outside of combat, in which case it restores 10d8 (45 on average) to each party member. Tangling creepers can create difficult terrain in a great area; However, many enemies by this level will have flight capabilities and the spell requires your spell attacks and DCs for any further effect. Even with a spellcasting proficiency, your spell attacks are mediocre, and you should certainly have better healing by now. 
- <Rating content="Regrowth" ratings={[3]}/> You can cast regenerate. This spell makes one target nigh-invulnerable unless your enemies use fire or acid damage, and you should have no problem figuring that out by this level. 

<Rating content="Orc" ratings={[3]}/><br>
If you want to get into the melee, you can do much worse than the orc. It has a powerful chassis, as tanky as a dwarf without suffering a speed penalty, and some decent heritage options, as well as a fantastic array of feats. If you want to be hard to kill, the Orc can certainly help with that.

**Orc Heritages:**
- <Rating content="Badlands" ratings={[1]}/> Completely unnecessary. Hustling is useless and if you really wanted to avoid environmental heat effects you could have just taken another ancestry or the ifrit versatile heritage.
- <Rating content="Battle Ready" ratings={[4]}/> Intimidation is a fantastic skill for the thaumaturge, and this saves you a skill proficiency and a skill feat.
- <Rating content="Deep" ratings={[1]}/> Combat climber on its own is useless to you and Terrain Expertise is whatever.
- <Rating content="Grave" ratings={[3]}/> For campaigns featuring the undead in droves, These features easily shoot it up to blue.
- <Rating content="Hold Scarred" ratings={[3]}/> You get a couple extra hit points and Diehard. Orc Ferocity makes Diehard a bit more useful than average, and a free general feat is still nice to have.
- <Rating content="Rainfall" ratings={[2]}/> These are all situational and mostly apply out of combat. Combining them together is still nice though.
- <Rating content="Winter" ratings={[1]}/> Even worse than badlands. At least this gets you an extra (mediocre) skill.

**1<sup>st</sup> Level Orc Feats:**
- <Rating content="Beast Trainer" ratings={[1]}/> Just get the beastmaster archetype.
- <Rating content="Iron fists" ratings={[1]}/> Your fist attacks stop being nonlethal (even if you want them to be) and gain the shove trait. I don’t understand this feat. RAW, Fist attacks mean that you could technically use this to shove with with your kick or a headbutt, but the wording and flavour of this feat very clearly intend to apply this to just your literal fists, and your hands are full constantly so all this does is make applying an item bonus on shoves easier in the best case scenario. Worthless.
- <Rating content="Hold Mark" ratings={[3]}/> You get a permanent status bonus to saves against a tradition of your choice, but you are already trained in all the skills present here and it doesn’t have the usual text for substitution. Still, a passive bonus is fantastic, even if slightly redundant with some thaumaturge abilities. I generally recommend selecting the divine or arcane tradition unless you know the other two are going to come up frequently. Divine is used by many common enemies, especially holy/unholy enemies and undead, while arcane is the most offensive spell list. Pity it’s competing with that monstrosity below.
- <Rating content="Orc Ferocity" ratings={[4]}/> you’re picking this up, no questions asked. If you really want something else, pick it up with Ancestral Paragon. This feat defines the orc ancestry, and the thaumaturge will greatly appreciate this feature given their constantly full hands and the pain of picking things up. You’re also not potentially dead, which is generally a pretty good thing.
- <Rating content="Orc Superstition" ratings={[3]}/> Get a circumstance bonus against magic as a reaction. It’s a pity it has to compete with the powerhouse above it.
- <Rating content="Orc Warmask" ratings={[2]}/> On its own this feat does almost nothing for you. It’s saved by a red rating thanks to its follow up feats, but if you aren’t picking those this is worthless.
- <Rating content="Orc Weapon Familiarity" ratings={[2]}/> The knuckle dagger and necksplitter are fun weapons, but they don’t do much you couldn’t manage already. You can’t use anything else.
- <Rating content="Tusks" ratings={[2]}/> Standard ancestry unarmed attack. I rank this a bit lower than average because you could have easily gotten this from another ancestry instead with better support for them.

**5<sup>th</sup> Level Orc Feats:**
- <Rating content="Athletic Might" ratings={[2]}/> Just get an item or spell that gives you an automatic climb or swim speed.
- <Rating content="Bloody Blows" ratings={[2]}/> A mediocre critical effect for unarmed attacks. At least it can combine with your Regalia.
- <Rating content="Defy Death" ratings={[2]}/> Situational. If you got revived through such an effect, you likely have the time to recover from it anyway.
- <Rating content="Mask of Power" ratings={[3]}/> Free Sure Strike. Good on anyone.
- <Rating content="Mask of Rejection" ratings={[3]}/> A very big magic resistance bonus against spells of your mask’s tradition. Fantastic even at just once a day.
- <Rating content="Scar-Thick Skin" ratings={[2]}/> You become twice as likely to end persistent bleed damage, which is among the most common persistent damage types. Some other ancestries and heritages have better bonuses though, but at least this one is common.
- <Rating content="Victorious Vigor" ratings={[3]}/> You’ve got some heavy damage numbers and focus on whittling down a single target at a time. You may have better reactions, but this is a great preventative measure anyway.

**9<sup>th</sup> Level Orc Feats:**
- <Rating content="Death's Drums" ratings={[3]}/> When you suffer persistent damage or have the wounded condition, you gain a powerful bonus to fortitude saving throws. Synergises well with Orc Ferocity.
- <Rating content="Dragon Grip" ratings={[1]}/> You don’t have an animal companion.
- <Rating content="Mask of Pain" ratings={[4]}/> You deal some solid damage to a creature you demoralise in exchange for a reaction. This is a great way to finish off a mook or soften them up for a beating, and it’s yet another bonus that benefits from the regalia.
- <Rating content="Pervasive Superstition" ratings={[3]}/> You always get a bonus to your saving throws against magic. The thaumaturge doesn’t have access to a lot of circumstance bonuses, so this is a solid pick, and gets even better if you have a reaction implement so this doesn’t compete with that anymore.
- <Rating content="Undying Ferocity" ratings={[2]}/> You gain a modest amount of temporary hit points. It’s most useful to prevent persistent damage from downing you again, But you ought to have enough abilities to counteract that by now.

**13<sup>th</sup> Level Orc Feats:**
- <Rating content="Ferocious Beasts" ratings={[1]}/> You don’t have an animal companion.
- <Rating content="Incredible Ferocity" ratings={[3]}/> Use Orc Ferocity almost every encounter. Don’t get too reckless though; this is still a once per encounter ability, less if you’re under a time crunch.
- <Rating content="Lifeblood's Call" ratings={[3]}/> Gain a damage bonus when you are wounded or doomed. Synergises with Orc Ferocity for obvious reasons.
- <Rating content="Mask of Fear" ratings={[2]}/> You can burn your mask to instantly remove the frightened condition. Your will saving throws are among the best in the game.
- <Rating content="Spell Devourer" ratings={[3]}/> You get temporary hit points when you succeed at a saving throw. The higher your saves are, the better this gets; look for the most powerful circumstance and status bonuses you can stack often to get the most use out of this feat.

**17<sup>th</sup> Level Orc Feats:**
- <Rating content="Rampaging Ferocity" ratings={[4]}/> A fantastic ability to activate as long as you are within reach of the foe who nearly downed you. Thaumaturges love free stuff, and a free strike is one of the best things you can give them. Look to maximise your reach to get the most value out of this feat.

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

<p/><Rating content="Yellow" ratings={[2]} stars={false} bold={false}/> sort of serves a double purpose. Abilities ranked yellow are either kind of mediocre or effective but only in somewhat niche situations. Take these either if you really like them or are certain those situations will come up often and a higher rated option couldn’t do the same.

<p/><Rating content="Red" ratings={[1]} stars={false} bold={false}/> is bad. These options are generally just bad. Even if they work in certain situations, those either never come up or are just not that hard to overcome anyway. Only take a red option if you really want to for flavour purposes.

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
- <Rating content="Ancestry Weapon Training" ratings={[1,2,3]}/> This feat’s rating is as diverse as the weapons themselves are. For the most part, ancestral weapons are not worth the feat it takes to get them. Most have common equivalents that are very similar in power, save for reach weaponry. As of the remaster, these feats also grant access to the weapon’s critical specialisation effect at fifth level. These feats are slightly more valuable than usual to the thaumaturge because without the weapon implement they do not have permanent access to critical specialisation effects.

#### Common Ancestries:
The following ancestries are available in all campaigns.

<Rating content="Dwarf" ratings={[1]}/><br>
Charisma flaw, horrible speed, and very mediocre feats. 10 HP and darkvision don’t mean much, especially now that the leshy and orc are core ancestries. There are certainly ancestries in the uncommon and rare categories worse than this, and you do have some alright feats past level 9, which could bump this to <Rating content="yellow" ratings={[2]} bold={false} stars={false}/>, but as it stands it’s the worst option in the core selection by a mile.

<p/><Rating content="Elf" ratings={[4]}/><br>
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
- <Rating content="Elven Weapon Familiarity" ratings={[1]}/> All of these weapons are two-handed. Pass.
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
- <Rating content="Otherworldly Acumen" ratings={[4]}/> This feat is astonishingly flexible. Gain any second level spell from the same tradition as your cantrip, with the ability to swap it to any other spell during your daily preparations. Some good choices: comprehend language, darkvision, humanoid form, invisibility, mirror image, resist energy, see the unseen, spider climb, water breathing. Leave it on mirror image when you don’t know what is coming. Swap it to one of the others if you expect to need it. You can also check out the sections in Equipment below on scrolls and other spellcasting items for further advice and a link to a useful guide.
- <Rating content="Tree Climber" ratings={[1]}/> You gain a mediocre climb speed. The thaumaturge has no need for this sort of climbing, especially by this level.

**13<sup>th</sup> Level Elf Feats:**
- <Rating content="Avenge Ally" ratings={[3]}/> If an ally is dying, make a strike with the benefits of Sure Strike for one action. This is a fantastic effect, but it does require a dying ally. You may be able to cheese it depending on the definition of ally, but that’s hard to fly. 
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
- <Rating content="Animal Elocutionist" ratings={[3]}/>You can talk to animals and gain a small bonus to doing so. This basically gives you access to the largest communications network in the right regions, assuming your GM is willing to play ball.
- <Rating content="Empathetic Plea" ratings={[3]}/> You’re a very hostile person on account of being a martial, but given that the thaumaturge focuses on getting one enemy down at a time, you’ll have plenty of targets for this feat at the start of a combat that isn’t just a solo encounter, and you’ve an excellent diplomacy modifier. You don’t have many native reactions, and they won’t always apply against the targets this one triggers on.
- <Rating content="Fey Fellowship" ratings={[2]}/> In a campaign featuring the fey, this is an excellent bonus against the wily fellows both in and out of combat.
- <Rating content="First World Magic" ratings={[2]}/> Gets you Guidance. You could probably just get this from the Fey Touched heritage, which is why this feat’s rating is lower than normal.
- <Rating content="Gnome Obsession" ratings={[3]}/> This feat is pretty good. Get both a scaling lore skill and Assurance in anything you want with a day of downtime. You don’t have as much reliance on lore skills, but if you’ve got an eidolon, a decent intelligence, and/or don’t want to access this through the Tome you can make good use of this.
- <Rating content="Gnome Polyglot" ratings={[2]}/> You learn three new languages. If you’re the party face this might be somewhat useful. 
- <Rating content="Gnome Weapon Familiarity" ratings={[1]}/> If you wanted the flickmace, you took Unconventional Weaponry for it. Decent for Gnomes using Alternate Boost though.
- <Rating content="Grim Insight" ratings={[2]}/> You’ve got really good saving throws, and fear is a common effect. Partially redundant at level 9, but automatically making foes off-guard is really nice.
- <Rating content="Illusion Sense" ratings={[2]}/> You get a bonus against illusions. Could be nice if you’re doing the scout/searcher role with a Lantern.
- <Rating content="Inventive Offensive" ratings={[2]}/> Meh. You can already access plenty of weapons that already have the relevant traits. 
- <Rating content="Life Giving magic" ratings={[2]}/> Casting an innate cantrip gives you temporary hit points. The amount is low and the duration is short. Still, it’s a reaction that gives you more durability. Surprisingly not a great combination with the (Glass) Shield cantrips, since their reactions already reduce far more damage.
- <Rating content="Natural Performer" ratings={[1]}/> Performance isn’t a useful skill and their feats are near useless for someone with your capabilities.
- <Rating content="Razzle Dazzle" ratings={[1]}/> You don’t have any means of blinding or dazzling a creature that would benefit from this feat. If you do, this can a good pick for those effects with a low duration, though you might want to just retrain for it once you get such a reliable feature.
- <Rating content="Theoretical Acumen" ratings={[4]}/> There is no class better suited to the use of this ability. You can invest into most of the skills the feat replaces decently, but being able to use your Esoteric Lore modifier for a whole Saving Throw is just fantastic, even if it is just once per day.
- <Rating content="Unexpected Shift" ratings={[3]}/> The thaumaturge is an offensive class and will need to target hostile creatures. Becoming dazzled isn’t ideal, but the defensive bonuses are well worth it if they save your life. If you choose this feat, you’re absolutely picking up Fortuitous Shift.
- <Rating content="Vibrant Display" ratings={[1]}/> Thaumaturges focus on one target at a time. If you are surrounded by multiple foes at once and you don’t have a more reliable means of area control/damage, Run away.

**5<sup>th</sup> Level Gnome Feats:**
- <Rating content="Eclectic Obsession" ratings={[2]}/> This feat allows you to spontaneously gain any lore you want for ten minutes as an action. The benefit of knowing when you critically failed a check by losing this skill is a bit redundant with Unmistakable Lore though. You are unlikely to have high intelligence, but if you do (or have an eidolon) this can be pretty good if something you didn’t prepare for showed up and you really want to know what it is before (or while) you attack it.
- <Rating content="Energised Font" ratings={[1]}/> You only need this feat if you took an archetype and have a focus pool from it. Pretty good if you do.
- <Rating content="Intuitive Illusions" ratings={[1]}/> I would generally not advise that the thaumaturge pick up sustaining spells, especially for combat, but this can deal with that. It also requires you to cast such a spell in the first place, and while you have access to spellcasting items, this is just too situational.
- <Rating content="Natural Illusionist" ratings={[2]}/> Illusion spells’ effectiveness are often reliant on how your GM has NPCs react to them. These spells do scale though,which is nice.
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
- <Rating content="Dance Underfoot" ratings={[1]}/> Why? You don’t gain any actual bonus for being in the same space as a larger creature unless your GM cooks up some homebrew nonsense, and I can't rank that for you.
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
- <Rating content="Iron Fists" ratings={[1]}/> Your fist attacks stop being nonlethal (even if you want them to be) and gain the shove trait. I don’t understand this feat. RAW, Fist attacks mean that you could technically use this to shove with with your kick or a headbutt, but the wording and flavour of this feat very clearly intend to apply this to just your literal fists, and your hands are full constantly so all this does is make applying an item bonus on shoves easier in the best case scenario. Worthless.
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

#### Versatile Heritages
You lose your heritage bonus in exchange for (usually) low light vision and an expanded feat pool. Sometimes that’s worth it, sometimes it is not. These heritages can be a good way to make up the difference if the rating is reduced by a mediocre feat selection, as is the case for leshies.

The remaster has changed it such that that aiuvarin and the dromaar (what were previously known as half-elfs and half-orcs respectively) are now available as common ancestries respectively for any ancestry, not just the human. I’m not… entirely sure how this interacts with certain ancestries now becoming core, namely the leshy, but RAW nothing stops it so just work with your GM to work out a sensible explanation. Player Core has also given vague advice on the existence of Mixed ancestries, but again, it’s basically just up to you and the GM to work that out.

Additionally, many uncommon heritages have lineage feats at level 1, tying you to a specific ancestor or type of creature from which you are descended. You can only have one lineage feat and you can only pick them at level 1, and they can’t be retrained, so keep that in mind.

<Rating content="Aiuvarin" ratings={[3]}/><br>
The elf feat list is a fantastic choice on nearly any ancestry. If your base class has a more reliable base chassis than the elf, such as the orc or gnome, this is a decent pick to improve your ability in both ranged and melee. The only reason this isn’t blue is because of the elf’s powerful base speed and easier access to the Ancient Elf heritage, but this is still a great pick. The unique aiuvarin feats aren’t much to write home about unless you can take Elf Avatism for Ancient Elf in a free archetype game.

<p/><Rating content="Changeling (U)" ratings={[3]}/><br>
If you really want to make your character’s mommy issues a part of their mechanics, the changeling is pretty good for it. Children of hags turning into thaumaturges to ward off the Call and hunt down evil creatures is quite fitting, and there’s some pretty good stuff here, even if you have to wade through some garbage to get to it.

**1<sup>st</sup> Level Changeling Lineage Feats:**
- <Rating content="Brine May" ratings={[1]}/> You’re a bit better at Swim checks. 
- <Rating content="Callow May" ratings={[1]}/> You get a mediocre skill feat and a situational combat bonus if you roll deception for initiative, which is incredibly unlikely to happen.
- <Rating content="Dream May" ratings={[1]}/> Very situational. You are unlikely to face the conditions this lessens at early levels and by the mid-level mark your party can probably just buy/prepare one of the condition cleanser spells like Sound Body and Clear Mind.
- <Rating content="Moon May" ratings={[3]}/> Standard ancestry cantrip.
- <Rating content="Slag May" ratings={[1]}/> If your GM allows you to use this with your hands full  
(for example, using claws with your legs) this is <Rating content="green" ratings={[3]} bold={false} stars={false}/>. Free hand grappling and applying cold iron (which is near impossible to apply to unarmed strikes unless you are a monk) to your unarmed attacks is pretty good, and the damage is respectable.
- <Rating content="Snow May" ratings={[1]}/> Situational and mediocre.
- <Rating content="Veil May" ratings={[2]}/> Your perception is good, but your deception can be even better. Donning a disguise quickly isn’t fantastic but it can be useful in subterfuge missions if you’ve been made and need to escape quickly. 
- <Rating content="Virga May" ratings={[2]}/> Electric Arc is a reliable cantrip, and it’s an occult cantrip instead of being arcane or primal, which is neat.

**1<sup>st</sup> Level Changeling Feats:**
- <Rating content="Changeling Lore" ratings={[2]}/> Hag Lore is a lot more useful than most ancestry lores, and this also gets you Deception and a free skill. 
- <Rating content="Hag Claws" ratings={[1]}/> Just use your fists. You also likely can’t use these attacks since they require claws that likely are on your hands, which are full.
- <Rating content="Hag's Sight" ratings={[3]}/> Standard ancestry darkvision.
- <Rating content="Maiden's Mending" ratings={[2]}/> You’re unlikely to have many of these but if you do (such as by taking scroll thaumaturgy) this can be a decent booster.

**5<sup>th</sup> Level Changeling Feats:**
- <Rating content="Called" ratings={[4]}/> Name one effect that calls for a will save that doesn’t have the mental trait. I struggle to think of any that aren’t player facing focus spells or some illusion spells. This is, effectively, a permanent circumstance bonus to your will saves. You also get to turn successes against control effects into critical successes, but that’s both redundant by level 9 and utterly overshadowed by the former effect.
- <Rating content="Cunning Hag" ratings={[2]}/> Maybe you want to open a door mid combat. 
- <Rating content="Favourable Winds" ratings={[1]}/> Who looked at this and thought “this is a great and useful ability that’s completely balanced” and put it in the same section as the Called feat?
- <Rating content="Mistchild" ratings={[3]}/> This is a useful bonus for thaumaturges who like to sneak around, and also synergises with many spells and the Mirror’s IV ability well. Be sure to keep your AC up as much as possible though.

**9<sup>th</sup> Level Changeling Feats:**
- <Rating content="Accursed Claws" ratings={[1]}/> You generally can’t use claws and the damage is too mediocre for such a high level effect.
- <Rating content="Invoke The Elements" ratings={[3]}/> Requires a lineage feat; the best lineage feats are Virga or Veil May, but if you are one of the other two this is a great way to feel better about your situational choice. A powerful defensive buff for both melee and dexturges, punishing enemies for getting adjacent to you by taking some modest damage with a save against your solid class DC, and forcing concealment on reach using foes and ranged enemies who make attacks against you. The only issue is that it takes 2 actions to activate, but it’s a great defensive bonus anyway. Since it lacks the usual text saying otherwise, you are able to use this concealment to hide, but not to get undetected. Synergises well with the Mistchild feat. 
- <Rating content="Mother's Mindfulness" ratings={[1]}/> Honestly? I’d rather pick up the Bell.
- <Rating content="Occult Resistance" ratings={[2]}/> Requires expert in Occultism. The bonus is quite solid, but a lot of offensive occult effects force will saves anyway, and many of those have the mental trait, so you could have probably just taken Called instead for a much wider ranging effect. Still decent if your campaign is focused around occult mysteries and the like.

**13<sup>th</sup> Level Changeling Feats:**
- <Rating content="Hag Magic" ratings={[3]}/> I enjoy clairvoyance as a scouting tool, and augury is always a great pick up. Most of the other spells here are whatever, but you can still find something nice.
- <Rating content="Spiteful Rake" ratings={[1]}/> You can’t use claws and you never have hands free.

**17<sup>th</sup> Level Changeling Feats:**
- <Rating content="Crone's Cruelty" ratings={[1]}/> Single Target Incapacitation spell that doesn’t heighten. Pass.
- <Rating content="Stormy Elements" ratings={[3]}/> Use Invoke The Elements every encounter. A fantastic bonus to your defensive capabilities.

<p/><Rating content="Dromaar" ratings={[3]}/><br>
The dromaar aren’t bad, I’m just not sure why you wouldn’t play a normal orc instead. You get the orc’s solid base chassis and a heritage that actually gives you something from the get-go (or even just take another versatile heritage) on top of already accessing its feat list. Maybe you’d like it on a hardy gnome?

<p/><Rating content="Nephilim" ratings={[3]}/><br>
This new heritage takes the place of all the former planar heritages, though the aphorite and ganzi feats have not been reprinted in Player Core. As of current, it includes all the feats belonging to both the Aasimar and the Tiefling, either reprinted from the APG or changed up a bit. In general this ancestry is most powerful when accessing the fiendish feats, as they provide some powerful bonuses. PFS has ruled that you can use aasimar and tiefling feats as a nephilim, though you may only pick one or the other and can’t treat them interchangeably (though weirdly you can take something like an angelkin lineage and tiefling feats); At present, I will only be reviewing the feats presented in Player Core for the Nephilim.

**1<sup>st</sup> Level Nephilim Lineage Feats:**
- <Rating content="Angelkin" ratings={[2]}/> Mediocre skill and some extra languages. Could be nice for a face.
- <Rating content="Grimspawn" ratings={[3]}/> General feats for an ancestry feat is pretty good, and Diehard’s always nice to have. 
- <Rating content="Hellspawn" ratings={[3]}/> A modest set of bonuses. Free skill feats are always neat, and Lie to Me is pretty good, though not super necessary, especially with your high perception.
- <Rating content="Lawbringer" ratings={[2,3]}/> Standard ancestry emotion resistance.
- <Rating content="Musetouched" ratings={[2]}/> You’re better at escaping. You shouldn’t be escaping that much.
- <Rating content="Pitborn" ratings={[4]}/> Not only is athletics a fantastic skill on every thaumaturge, this gives you a flexible skill feat for it. Free skill feats are a fantastic bonus for skill monkey turges, and this is unparalleled flexibility for a non-human ancestry feat.

**1<sup>st</sup> Level Nephilim Feats:**
- <Rating content="Bestial Manifestation" ratings={[3]}/> Standard ancestry unarmed attacks. I’d pick the hoof or the tail for their reliable damage type.
- <Rating content="Halo" ratings={[3]}/> You have a light spell affixed to you that you can activate or deactivate with a single action.
- <Rating content="Nephilim Eyes" ratings={[3]}/> Standard ancestry darkvision.
- <Rating content="Nephilim Lore" ratings={[2]}/> This is surprisingly flexible as lore feats go. I’d give it some consideration if you’re fighting creatures from a certain plane or in that plane often.
- <Rating content="Nimble Hooves" ratings={[4]}/> Movement speed bonuses are always fantastic. Won’t stack with feats like Nimble Elf.

**5<sup>th</sup> Level Nephilim Feats:**
- <Rating content="Blessed Blood" ratings={[1]}/> Funnily enough, you can take this feat regardless of lineage; Your fiendish blood is certainly most holy. The damage is mediocre and has an incredibly situational trigger, and you’re incredibly unlikely to be the party crafter.
- <Rating content="Extraplanar Supplication" ratings={[2]}/> Cast bless or bane. Sustaining either is going to be a heavy action tax on the thaumaturge’s already strained action economy. You already have reliable access to magic items and status bonuses anyway. Don’t even think about picking Bane.
- <Rating content="Nephilim Resistance" ratings={[3]}/> Standard flat ancestry resistance. Choose fire.
- <Rating content="Scion of many Planes" ratings={[2]}/> You almost never want this. I’d only take it if you wanted a lineage feat but also wanted Nephilim Eyes, since you don’t actually need a lineage feat to qualify for this.
- <Rating content="Skillful Tail" ratings={[2]}/> Maybe you want to open a door mid combat. Maybe you want to open a door mid combat.

**9<sup>th</sup> Level Nephilim Feats:**
- <Rating content="Celestial magic" ratings={[1]}/> Frankly, none of these spells are worth a 9th level feat. If you really want to pick this up, only choose Everlight and Humanoid Form; Everything else requires a spellcasting proficiency you don’t have or scaling the feat doesn’t provide.
- <Rating content="Divine Countermeasures" ratings={[2]}/> You gain a bonus on saving throws against divine effects.The Divine tradition is a common tool of many fiends and undead, as well as certain dragons. Even if it’s a bit high level, a flat circumstance bonus is quite powerful, and this is a great pick if divine enemies are common in your campaign.
- <Rating content="Divine Wings" ratings={[3]}/> 9/17 ancestry flight progression.
- <Rating content="Fiendish magic" ratings={[3]}/> Invisibility and See the Unseen are your best picks and they’re both solid options. Everything else doesn’t heighten at all and becomes near-useless in short order. You might like False Vitality for its long duration.

**13<sup>th</sup> Level Nephilim Feats:**
- <Rating content="Celestial Mercy" ratings={[1]}/> Why do these feats provide spells that need to scale to stay relevant and then cannot scale at all? 
- <Rating content="Slip Sideways" ratings={[4]}/> Fifth rank Translocate is a powerful get out of jail free card. Break out of nearly every bad situation you’re in, be it a jail cell, a monster’s stomach, or an awkward dinner with your partner’s parents. Unfortunately locked to the fiendish lineages, which is weird given a lot of celestials can access this feat too. You might take Scion of Many Planes or retrain for it just to access this feat.
- <Rating content="Summon Nephilim Kin" ratings={[2,3,4]}/> You summon creatures appropriate to your lineage. Don’t listen to anyone who tells you summon spells are bad: your summons are useless for combat, but they provide impressive utility. Many heritages offer low-level summons that can fly, turn invisible, and be effective scouts, though you must be quick with how you use them given the one minute time limit.<br>
The best options are the Hellspawn, for their utility options and access to fifth level translocate through the zebub and barbazu, and the Lawbringer, for their archons access to translocate, flight, and healing support. <br>
The Musetouched also provides you with the gancanagh, which empowers allies with heroism and inspiring makeout sessions; their long durations means you can summon a gancanagh, let your party get their kisses in, dismiss the azata and still enjoy the benefits in combat. They can also translate all languages. The Pitborn also has the vermlek, which can help you hide bodies and remove or fake evidence, and the brimorak can cast translocate and fireball, making them good messengers, fast couriers, and hilarious distractions.

**17th Level Nephilim Feats:**
- <Rating content="Divine Declaration" ratings={[1]}/> Offensive spellcasting.
- <Rating content="Eternal Wings" ratings={[3]}/> 9/17 ancestry flight progression.

### Proficiencies and Advancement:
I rank these proficiencies relative to other classes. The thaumaturge’s progression means they’re good at a lot more things than you’d think.
- <Rating content="Key Attribute" ratings={[3]}/> Charisma is your key attribute. It fuels just about every class feature the thaumaturge has, but outside of investing into the charisma based skills it holds little intrinsic value.
- <Rating content="Hit Points" ratings={[2]}/> You get eight hit points per level. Your hit points are better than most dedicated spellcasters, but worse than most frontline martial characters. You do have easy access to defensive abilities however, which can help bridge the gap, on top of your above average save progression. 
- <Rating content="Perception" ratings={[3]}/> The Thaumaturge’s perception progression is above average. You start at expert and increase to master at ninth level. The thaumaturge greatly benefits from going first due to their vast repertoire, so you have some incentive to boost your initiative as much as you can.
- <Rating content="Saving Throws" ratings={[4]}/> The thaumaturge is the only class to get legendary in will saves automatically. The only other class that can do the same is the monk, and the thaumaturge gets their legendary proficiency two levels earlier. They also reach master in fortitude at 15th level, and reflex saves are easy to patch up. You face the unknown and the haunting, and they must weather your resolve.
- <Rating content="Skills" ratings={[3]}/> The thaumaturge starts trained in all the tradition skills, plus 4 + your intelligence modifier. You have a lot of variety in the skills you choose. The thaumaturge also has Esoteric Lore, which is an autoscaling Lore Skill that you will have constant use for, on top of implements and feats that further expand your ability to use a variety of skills, as well as a few additional skill increases. You also gain extra skill increases at levels your class DC improves that only apply to your tradition skills, and if built right the thaumaturge can move up to 4 skills to legendary permanently.
- <Rating content="Attacks" ratings={[4]}/> The thaumaturge has proficiency in all martial weapons up to master. You are mostly going to stick to one handed weapons and unarmed attacks, but if a macguffin zweihander shows up in your adventuring career and is relevant to smiting a big bad, you can certainly pick it up for a combat or two. The thaumaturge does have a slightly worse attack modifier compared to other martials due to having charisma as a key attribute, but they have two very powerful damage boosters in Implement’s Empowerment and Exploit Vulnerability and easy access to accuracy boosters through their features. The thaumaturge’s damage output is not one to be ignored.
- <Rating content="Defenses" ratings={[3]}/> Medium armour proficiency is solid, and you advance to expert slightly faster than most classes. You can’t use shields very well, but you have a host of options you can select if taking damage is something you want to avoid. 
- <Rating content="Class DC" ratings={[3]}/> The thaumaturge has the second fastest class DC progression in the game. While you don’t make use of it much with the base class, a lot of feats and features utilise this, and your fast progression makes you quite decent at using save based abilities, especially with your unique ability to easily impose penalties on your enemies saves against such effects.

### Attributes:
The thaumaturge is a little MAD, but this also means it’s very versatile when it comes to planning out your build. Diversity is the name of the game with this class.
<table>
    <tr>
        <td><b>Colour</b></td>
        <td><b>Modifier</b></td>
    </tr>
    <tr>
        <td><Rating content="Blue" ratings={[4]} stars={false}/></td>
        <td>+4</td>
    </tr>
    <tr>
        <td><Rating content="Green" ratings={[3]} stars={false}/></td>
        <td>+2 or +3</td>
    </tr>
    <tr>
        <td><Rating content="Yellow" ratings={[2]} stars={false}/></td>
        <td>+0 or +1</td>
    </tr>
    <tr>
        <td><Rating content="Red" ratings={[1]} stars={false}/></td>
        <td>-1 or 0</td>
    </tr>
</table>

- <Rating content="Strength" ratings={[3]}/> For the heavy hitters. Strength offers a great variety of powerful weaponry and access to the athletics skill, which is still decent even for the action hungry thaumaturge. It also opens up access to heavy armour, which can help correct your pitiful reflex saves. <Rating content="Red" ratings={[1]} bold={false} stars={false}/> for dex builds, who have better places to allocate points into.
- <Rating content="Dexterity" ratings={[3]}/> The thaumaturge can make solid use of finesse weaponry, owing to its wealth of damage boosters, to compensate for the strength loss while simultaneously increasing your defences and patching your worst save. It also opens up ranged combat through reload or thrown weaponry, which can help keep you safe to an extent. <Rating content="Yellow" ratings={[2]} bold={false} stars={false}/> for melee builds, who want at least a +1 to fill out the breastplate cap, or +0 if able to access heavy armour.
- <Rating content="Constitution" ratings={[3]}/> You only have 8 hitpoints per level. If you are in melee, it is generally paramount you upgrade this as much as possible, but in the right party composition and with the right build, you can get away with a +1 at first level, though you should still upgrade this whenever possible. Turges with good range can safely rank this <Rating content="yellow" ratings={[2]} bold={false} stars={false}/>, especially if your party has some solid control and defenders. 
- <Rating content="Intelligence" ratings={[1]}/> For a class that’s supposed to know so many things, Intelligence does nothing for you. Some Tome users may want to boost this skill if they wish to take advantage of free lore skills for reduced DCs, but in general you can just take Diverse Lore and call it a day.
- <Rating content="Wisdom" ratings={[2]}/> You have the best will saves in the game and very solid Perception. You are less reliant on this attribute than some other classes, but investing into religion or medicine is really nice and can be very helpful as an extra addition to your toolkit.  
- <Rating content="Charisma" ratings={[4]}/> Despite the blanket blue rating, there’s a lot more to this attribute than at first glance. Charisma powers a lot of features in your class, the most obvious one being Esoteric Lore. However, you can get away with a +3 if you want to move boosts elsewhere, such as for a melee build, and it is entirely possible to get away with a +2, though I cannot recommend any lower in an optimisation guide. Charisma is a very powerful attribute and you should boost it every chance you get, because more and more features will make use of it as you level. In fact, with the right build it’s entirely possible to dump your strength and dexterity (at least until your armour cap) and rely on a spellcasting and item build using your class DC and charisma based abilities.
- **Attribute Boosts:** Boost your charisma, your choice of strength or dexterity depending on your build, and then whatever else as per the above rankings.

### Esoterica, Esoteric Lore, and Exploit Vulnerability:
Much like the inventor, the thaumaturge gains automatic proficiency scaling in a skill and uses that skill to power a variety of features. However, the thaumaturge’s Esoteric Lore skill is unique to its class, and uses its charisma modifier instead of intelligence. The skill allows you to recall knowledge on *any* creature, haunt or curse. This is already a powerful feature on its own, and it expands in usability greatly once combined with the Diverse Lore class feat, but it also provides one of your main damage boosters. Exploit Vulnerability.

There is not much to say about EV that is not already well explained in the class, so I’ll just go over some basic details.

Generally speaking, Personal Antithesis does less damage than exploiting a target’s Mortal Weakness unless they are significantly lower level than you. Now, per the rules as written, you cannot target multiple weaknesses on a creature if they both come from the same instance of damage, (such as if a cold iron axe hits a creature weak to cold iron and slashing, they only take additional damage from the higher weakness). It is quite possible that the same intent applies to the thaumaturge if your weapon’s damage already exploits a creature’s weakness, you cannot use Personal Antithesis to trigger another weakness. It is my personal opinion that since Personal Antithesis creates a special weakness to your *Strikes* and not another specific material, trait, or damage type, you should in fact be able to exploit a Personal Antitheseis of the foe’s in addition to the weakness(es) you are already triggering, because otherwise that just seems to punish your character for thinking ahead. 

Esoterica is mostly just a flavour thing. I encourage all thaumaturges to make use of the various bits and bobs on their person when describing the actions they do in and out of combat, because it’s fun, and maybe even add special flourishes to your basic actions. Of course, you still need to have your esoterica on your person to activate some of your abilities, namely your EV. The implements themselves are detailed further below.  

### Implement’s Empowerment and Intensify Vulnerability:
The thaumaturge is generally limited to one handed weapons if they’re holding an implement, which they should be. They also generally want hands for activating special abilities on their implements and various magical items they collect throughout their adventuring career. This means that you’ll pretty much never see a damage die above a d8 in your weapon’s hands. This is where Implement’s Empowerment comes in. A flat *2 damage per weapon die* just for holding in your hands what you already were going to is fantastic. This effectively puts thaumaturge weapons up to 2 die sizes higher than their base weapon die was on average. Combined with EV, you have powerful damage boosters rivalled only by certain barbarians and the inventor. Of course, this expects you to have an implement in hand and turns off the moment you have anything in them that’s not a single weapon, your esoterica, or implements.

As mentioned earlier, we’ll get into further detail on implements below. I want to highlight some important things about item juggling. When you get two implements (or when you get three implements as a Weapon user), you gain the ability to quickly swap one implement for another as long as you are wearing the implements on your person to use an action pertaining to the implement, including free actions and reactions. This may allow you to swap to a weapon to strike enemies with once you get 3 implements, but I’m not sure that’s RAI. This does mean that generally you won’t be able to benefit from two implements’ abilities at once if they require you to hold them in your hands, and wield a weapon at the same time. You can circumvent this by picking the Weapon Implement, or using unarmed attacks.

Then there’s Intensify Invulnerability. This is a one action feature that all implements have that you can’t use the same round as your EV, and both have a once per round limit. The various IVs are detailed under their respective implements. If your GM runs games uber-RAW, there’s a case to be made that your IV benefits are technically always active due to the wording of the feature.

### Implements
The thaumaturge’s implements are sort of its subclass equivalent. They can push the thaumaturge into certain roles and playstyles to an extent, but in general they are an addition, rather than a definition. You can get up to 3 implements over the course of your adventuring career, with one of your first two implements eventually hitting paragon, the other at adept, and your third implement staying at initiate unless you take a feat to boost it. 

<p/><Rating content="Amulet" ratings={[3]}/><br>
Don’t like getting hit? Why not try waving a shiny gem in your foe’s face to make it hurt less! A solid choice for thaumaturges in the frontlines who may want to try tanking a few extra hits when the main tank goes down or needs to fall back. You can also protect your allies with the ability, effectively doubling as a weaker champion’s reaction for the price of an implement. A worthy trade in my opinion. 

- <Rating content="Initiate Benefit" ratings={[3]}/> Grant champion level resistance against a damaging effect caused by your EV target. The only actual range requirement here is that your ally be within 15 feet of you, otherwise you and your EV target can be shooting each other from a mile away and you’ll still be able to activate this resistance if you have a reaction available. It does have the manipulate trait though, so watch out for Reactive Strikes. A simple but effective reaction, which the thaumaturge doesn’t have much of.
- <Rating content="Adept Benefit" ratings={[3]}/> A very solid boost. This lingering resistance applies against <i>all</i> sources of that damage, which makes it very useful against enemies with multiple attacks and/or encounters with multiple enemies. Once again, a simple but very effective feature that’ll come up every round.
- <Rating content="Intensify Vulnerability" ratings={[3]}/> Good Amulet builds will almost never go down. This is effectively the esoteric warden class feat but applicable every turn. It’s incredibly powerful and can basically shut down casters or other monsters who rely on saving throws given your excellent progression. 
- <Rating content="Paragon Benefit" ratings={[4]}/> AoE effects mean nothing to your party anymore. With Esoteric Reflexes (no ifs about it, you took it the moment it became available) you’re able to push through most damage coming your party’s way, and your excellent save progression and powerful save boosters make you a real nightmare to beat down. A fun thing you can do with esoteric reflexes and a backfire mantle is have an ally throw a bomb or some other minor attack of a damage you believe the enemies would deal into your team just before combat begins, all negate it from the resistance, and then gain a lingering resistance to the damage the enemies might deal in advance of your first turn anyway. 

<p/><Rating content="Bell" ratings={[2]}/><br>
Just pick up another implement. The bell tries to do something I think is fun, but then expects you to power through olympic hurdles to actually achieve it. It shares design space with the amulet as a defence oriented reaction, but it can enable better offensive power for your party by applying status penalties to DCs you and your allies target. However, its base ability is quite weak and its upgrades don’t do much to make the investment feel worth it. I would probably just pick up the amulet and reflavour it as a bell if that’s what you’re interested in.

- <Rating content="Initiate Benefit" ratings={[2]}/> There’s a lot of things that don’t go well for the Bell here. Firstly, the reaction has the Mental trait, which means mindless creatures completely bypass the effect. It is also a manipulate effect, which means it triggers reactive strikes. It does have a better range than the amulet when it comes to directly or indirectly defending allies, but it forces the target to make a save with no effect on a success. The reaction <i>does</i> target a save the target likely struggles with depending on the effect, and the conditions it imposes are good. However, the duration also varies wildly in effectiveness since it ends on your next turn rather than a more consistent 1 round effect. If stupefied, the target doesn’t even have to make a flat check to avoid losing the triggering spell. Surely you could have just frightened a foe or have an ally or yourself grapple the caster. 
- <Rating content="Adept benefit" ratings={[3]}/> If the target fails the save, being able to automatically maintain the effect for 3 whole rounds is solid. You can also trigger the effect again on a strike to impose both clumsy and enfeebled, or otherwise fish for a critical failure since even if the target succeeds the initial effect’s duration is still in place. You could also instead be granting allies lingering resistances, gaining free recall knowledge checks and master skills, reveal the invisible etc. Sure though, ringing a little bell to maybe impose a -1 is fun.
- <Rating content="Intensify Vulnerability" ratings={[2]}/> This is just a worse Cursed Effigy. Sure, it doesn’t cost you an 8th level feat, but it also requires you to spend an action before actually making a strike instead of just chaining off a successful strike like CE does for the same action cost, and has to be maintained every round unlike CE which just works for <i>all</i> save based thaumaturge abilities you have so long as the target has your EV on it. It’s still <Rating content="yellow" ratings={[2]} stars={false} bold={false}/> because it’s technically free and does have a nice critical success effect, but this is just scraping the bottom of the barrel here.
- <Rating content="Paragon Benefit" ratings={[2]}/> In a vacuum, this ability is decent. You don’t take an implement to paragon for just being decent. There is nothing much to say here, the condition values increase a bit, which is <i>alright</i>, to be nice about it, and you can target any creature, but the effect only lasts till your turn starts. 
Just pick up another implement.

<p/><Rating content="Chalice" ratings={[2]}/><br>
Healing is something the thaumaturge can’t do incredibly well without spells and archetypes, but the chalice aims to correct that. Unfortunately, it failed the roll. The chalice does some decent healing for being a “resourceless” effect, but that’s really all it does until level 17. Just archetype into blessed one or medic or something. You are not a healbot.

- <Rating content="Initiate Benefit" ratings={[2]}/> You give out some okay temporary HP that stays for a round to either yourself or an adjacent ally. You can also trigger a healing effect that heals 3 HP per level you have, but it only occurs once per ten minutes. This is not great. It is an alright way to get around negative healing limitations at low levels, but you should probably just leave the healing to just about anyone else, as this is not worth the action it takes nor the reactive strike it can trigger. If your GM allows you to trigger this with Paired Link, it gets a bit better, though still not worth an implement (and Paired Link isn’t all that anyway).
- <Rating content="Adept Benefit" ratings={[2]}/> More healing when an ally takes critical piercing or slashing damage or suffers bleed damage. Just pick up a healing archetype by this level. It doesn’t even try to remove persistent damage. Even Root to Life does that!
- <Rating content="Intensify Vulnerability" ratings={[2]}/> More healing, but only if you waste effectively three actions on your turn to activate this, make a strike, and if it hits you spend an action to use the chalice. A fantastic use of your actions for the round, the enemies are sure to quake in their boots.
- <Rating content="Paragon Benefit" ratings={[3]}/> More hea- oh, what? The chalice actually does something else now? It’s been so long, I forgot there were other actions! This effect is honestly a really nice condition cleanser and can even counteract other harmful effects targeting the recipient, it’s just a shame it took 17 levels to get here. You also probably have someone else who is better at cleansing these conditions than you are by this level, though it’s pretty action-efficient. Probably would be having more fun doing something else though.

<p/><Rating content="Lantern" ratings={[3]}/>
This implement is one of my personal favourites. It’s got a host of solid features that’ll find use in just about any game that isn’t the GM simply throwing bags of meat towards the players. It’s an especially potent choice in games of illusions, mystery, and secrets of the shadows, and an interesting pick given that the subclass is very much a bright shining light in the middle of the darkness. Don’t expect to be sneaking in the dark a whole lot. 

- <Rating content="Initiate Benefit" ratings={[3]}/> Unveil it all. This is basically free guidance on all your seek and recall knowledge checks when within 20 feet of a target, and enables you to do what is essentially two exploration abilities at once. Be sure to invest in your Perception to make the most use of this feature, and stick real close to anyone else in the party with a solid Perception bonus. There’s also no limit on the secret check, it happens as long as you are within range of a triggering effect, so if you have the time and the right space you can just walk around an area a few times to determine whether or not there are any traps in the area. If you can get your GM to accept the status bonus to perception applying to initiative, this is an easy <Rating content="blue" ratings={[3]} bold={false} stars={false}/>.
- <Rating content="Adept Benefit" ratings={[3]}/> Increased range on your lantern abilities and a free See Invisibility. A lovely automatic bonus just for taking the implement at level 1 or 5.
- <Rating content="Intensify Vulnerability" ratings={[3]}/> A bit situational, and bordering on a lower rating. However, automatic concealment removal is incredibly powerful, and a -2 status penalty to stealth and deception really hinders a lot of foes that aren’t just big dumb brutes. It also applies in social situations when you need to get answers out of someone and expect them to try weaselling their way out of it. You also increase the bonus from your initial benefit, which is a lovely sweetener. Pick up Tome and the relevant feats to recall <i>all</i> the knowledge.
- <Rating content="Paragon Benefit" ratings={[2]}/> The Lantern does feel like an implement that gets worse over time. A discount true seeing is alright, and the radius expansion is okay, but it’s a really mediocre capstone for investing in an implement this long. Whatever implement you paired this with was probably what you were taking to paragon anyway. 

<p/><Rating content="Mirror" ratings={[3]}/><br>
The mirror’s an interesting implement. Its adept benefit is incredibly controversial, but the rest of their abilities offer some of the most freedom in the game. It’s incredible action compression, reach expansion, flank provision, at-will teleportation etc. This implement is for the creative minded players who can analyse a battlefield and want to make a real mess of a ‘turge. You might like what’s staring back at you, but your foes sure won’t.

- <Rating content="Initiate benefit" ratings={[4]}/> There’s so much to do here than I can really explain. Get high ground, increase your effective reach, increase the effectiveness of any auras or touch spells you have, activate 15 foot two action teleports with a movement ability right after etc. Having to keep this ability up every turn for an action (yes, the mirror does go down at the start of your next turn. You can’t exploit the wording to say it remains until you move) can seem intensive, which is why i would not recommend this to new players or those looking to play a more “simple” thaumaturge, but experienced players, especially those who play combats with detailed terrain can get a lot of use out of this feat. Additionally, RAW nothing actually stops you from using up to all of your actions using Mirror’s Reflection, because it’s not listed as an effect that ends the Reflection, but your GM might justifiably rule otherwise, but if allowed this can get real nasty. The only real limits here are your imagination and the GM’s level of permissiveness. 
- <Rating content="Adept benefit" ratings={[3]}/> This benefit is… weird. Many players decry this ability for forcing you to lose your mirror and having to resummon it again, but you were already going to have to resummon it anyway. The real issue is definitely losing your off-turn benefits (such as flanking a foe, having an aura up, having a vantage point, additional reach for a reactive strike you poached from an archetype or the Weapon’s Implement’s Interruption etc) but if they strike your mirror, that’s damage they could have avoided, and might deter them from striking you again. It also provides a fantastic way to break an enemy’s multiattack option (eg. Draconic Frenzy) or a Grab or Constrict ability. Additionally, remember that the foe has to be adjacent to your image when this happens. Experienced Mirror Players will know how to use this feature well, just as they have the initiate.
- <Rating content="Intensify Vulnerability" ratings={[3]}/> A surprisingly simple but still effective IV for the Mirror. Concealment gets better the more AC you have, so don’t go skimping on it.
- <Rating content="Paragon Benefit" ratings={[4]}/> Free actions. Thaumaturges <i>love</i> free actions. Draw an item, strike a foe, seek in two different places. Deceptively simple, but a good mirror user will be an absolute monster with this. Just wait till level 19 when your EVs and IVs become free actions too!


<p/><Rating content="Regalia" ratings={[3]}/><br>
Kneel before greatness. The regalia is a fantastic implement for a support geared ‘turge leaning towards the charisma based skills. You’re really good at supporting your friends, even if you aren’t all that great at the skills you’re supporting them with. The Regalia feeds into other implements especially well, finding synergies with almost every other implement in the game, really cementing it as a must-have for any thaumaturge that wants to have their allies bask in the spotlights they create. 

- <Rating content="Initiate Benefit" ratings={[3]}/> A permanent bonus to three charisma skills and your allies gain more benefits for following you in exploration (and perhaps even social) activities. You also gain an aura that protects you and your allies against fear and lessens its effect on them if they do become frightened. A solid bonus for a thaumaturge gearing up for a skill monkey build.
- <Rating content="Adept Benefit" ratings={[4]}/> You become even better at making you and your allies even better at doing things. The bonus increase only applies if you are master in the skills, which is a hefty investment, were it not for the fact that you can just pick up the tome to cover them whenever you please, as well as archetypes like the rogue for skill increase feats. Your aura also grows in power, providing a very powerful passive bonus against all *mental* effects. You can probably count the number of Will based saves that don’t have the mental trait on less than ten fingers. Your aura also grants a status bonus to damage rolls for yourself and your allies, and this applies to <i>all</i> of your party’s damage rolls, not just strikes. It also scales!
- <Rating content="Intensify Vulnerability" ratings={[2]}/> Just use Aid. It eats a reaction but you can survive just fine if you didn’t pick an implement that already provides a reaction, and most of those have good IVs to use anyway. 
- <Rating content="Paragon Benefit" ratings={[4]}/> You’re the Party Face. You’re too competent to do silly things like critically failing on such basic tasks. In fact, you exude such confidence that even your most basic activities inspire others to follow your simple mastery.<br>Your aura also grows even stronger. Not only are your allies immune to flanking as long as you aren’t flanked (very powerful if you can find a feature like Deny Advantage to slap onto your chassis), They also reduce any status penalties from a wide list of conditions by 1 so long as you aren’t affected by the same. Given your excellent saving throws, that shouldn’t be a problem. Lead your comrades into the breach.

<p/><Rating content="Tome" ratings={[3]}/><br>
Recall all the knowledge. The Tome Implement offers additional versatility to what is already one of the most versatile classes in the game. This is an excellent choice for any build that wants to learn as much information as possible about any situation that they are in, and be really damn good at exposing every detail of an enemy’s stat-block. It’s my personal favourite and arguably the best implement the class offers, and there’s no thaumaturge build in the game where this implement would ever go amiss.

- <Rating content="Initiate Benefit" ratings={[2,3]}/> The tome is my personal favourite implement of all time, and yet I would not recommend starting play with it. The +1 circumstance bonus to <i>all</i> Recall Knowledge checks is powerful and basically outshines The Investigator’s Pursue a Lead when it comes to that activity, but starting with two extra skills isn’t that big of a deal. You are already trained in 9 skills at level 1 at <i>worst</i>, and you are basically scrambling to find extra skills that aren’t already likely covered by your party. You will generally be better served by picking another implement that has more immediate benefits at lower levels like the amulet or mirror, and so I would advise picking the tome up at 5th level to get more immediate use of its abilities, and being able to pick its adept benefit sooner.<br>
However, you do become expert in the skills at levels 3 and 5, and being able to swap them <i>every day</i> is very nice, especially for the purposes of Lore. For example, if you have to suddenly get on a boat, picking up Sailing Lore or Navigation Lore or whatever hyper specific ability you can think of can be very useful, especially with some investment into intelligence. This is especially useful if your GM uses the rules for certain skill checks using different abilities in certain situations, and is even more solid if your GM allows you to use specific lore skills to do special actions that aren’t Recall Knowledge. In games with a small party, a party that has multiple people trained in the same skills, or a party that is able to attain information about their adventures or missions beforehand, bump this ability’s rating by one step. In a game where all three of these situations are factors, this is just outright <Rating content="Blue" ratings={[4]} bold={false} stars={false}/>. 
- <Rating content="Adept Benefit" ratings={[4]}/> This is where the Tome really kicks off. Master in any two skills every day by 9th level is incredibly useful. While you can’t use these proficiencies to fulfil prerequisites, they’re still very powerful for the purposes of basic actions, using Lores to get easier DCs on Recall Knowledge, and for the purposes of feats and other abilities that require you to roll a skill check as part of activating an ability (eg. Marshal Stances, Lingering Composition). 
The real treasure here though, is the free Recall Knowledge. A free Recall Knowledge against any creature, not just the target of your EV, is already great for the action-hungry thaumaturge, but a +1 circumstance bonus to your next attack roll against said target is just too good. Not only is this a very powerful accuracy boost, it also means you’ll always know when you’re being fed false information, since you only get the +1 bonus if you succeed. You don’t even have to attack the target, you can just recall knowledge about the history of the kingdom’s minister , and know whether or not you succeeded because of the bonus to attack rolls. Easily the strongest adept benefit in the game.

- <Rating content="Intensify Invulnerability" ratings={[4]}/> This ability has had many detractors, myself included. It is often compared to the Investigator’s Devise a Stratagem unfavourably, but this is far more than that. Effectively this feat is an at-will True Strike that applies to <i>any</i> attack you make for a whole round. This combines fantastically with a variety of builds; It is the best way to make use of reload weaponry when combined with the Risky Reload feat, allowing you to decide beforehand whether or not to spend the actions firing. Additionally, with three actions available, you might decide to use the Tome to roll a d20; If you crit or roll a high number, you can make a strike with zero MAP and then use your d20 result to overcome the MAP penalty on your second attack. These are just basic applications of the ability, and they stack quite well with additional damage boosters that might cost an action to activate, such as special ammunition. This becomes especially powerful at level 19 when you can activate it as a free action and greatly eases your action economy. The Tome stays winning.
- <Rating content="Paragon Benefit" ratings={[4]}/> Let’s take it from the top:<ul>
<li>Legendary in any two skills every day. Fighting through the nine hells? Devil Lore has you covered. You almost certainly have abilities that rely on skill checks that this feature suddenly has you legendary in, like a Lingering Composition. Get Wonder Worker, enjoy the free spells. Sky’s the limit with this one.</li>
<li>The circumstance bonus to your RK checks goes from +1 to +2. Simple, yet effective. That’s another bonus that could get you a crit on a recall knowledge, and as a Tome user, you <i>love</i> Recall Knowledge. Interacts especially well with my next point-</li>
<li>A circumstance bonus to one attack wasn’t enough? Let’s have it apply to all of them! The thaumaturge has always had struggles with its base accuracy, but with features like this, your IV becoming a free action at level 19, and the class’s easy access to accuracy boosters, your foes are going to feel <i>really</i> Weak to your strikes.</li>
<li>You win initiative. I don’t know if there’s a single other class with this powerful of an initiative booster, especially once you have a status and/or item bonus going on. You’ve got 17+ levels of nonsense to throw at your foes. Watch them do nothing but suffer as they wait fruitlessly for their turn to arrive someday.</li>
<li>Don’t be a fool, kids. Read your books, and stay in school.</li>

<p/><Rating content="Wand" ratings={[2]}/><br>
Blast. The wand is another interesting implement because it’s not really supposed to be something you use constantly or to substitute your strike actions for. I would say this build is more valuable for melee builds than it is ranged, since this gives you a solid ranged pseudo cantrip, though that does mean it’s a bit niche which is why it gets a yellow rating. Gets more fun as you level it up, though I wouldn’t recommend it as an initial implement.

- <Rating content="Initiate Benefit" ratings={[3]}/> Use the damage booster as frequently and as early in an encounter as possible. This became slightly stronger post remaster since cantrips lost spellcaster modifiers and the wand didn’t so it’s a bit more consistent than most damage cantrips, at least at low levels. Pick Electricity as your first damage type, it’s the most consistent and least likely to face resistances. I generally don’t recommend using the wand as your main damage in an encounter, but a critical hit recharging the damage boost is a solid incentive to use it again to target foes out of your reach. 
- <Rating content="Adept Benefit" ratings={[4]}/> A solid array of debuff effects, and your Fling Magic’s range increases even further. If you have the regalia implement, Fire’s persistent damage combines quite well with the regalia adept benefit’s damage bonus. Cold is alright, penalties to movement can really cripple a lot of monsters, especially in a ranged party.
- <Rating content="Intensify Vulnerability" ratings={[2]}/> It’s a decent bit of extra damage, but there are better things to do than devote a whole turn to just flinging magic on one guy extra hard.
- <Rating content="Paragon Benefit" ratings={[4]}/> You get to choose between three different damage types with three different effects, and a truly extreme range increase. Oh, did I forget the ability to make 20 foot bursts?<br>
Enjoy the discount fireballs. Remember that the failure effects apply to anyone who fails, not just your EV target! 

<p/><Rating content="Weapon" ratings={[3]}/><br>
Hitting things till they go down is a venerable tradition in the history of table-top roleplaying. The Weapon implement is certainly one of the more popular implements, and for good reason. The thaumaturge loves additional attacks given their high damage and tight action economy, and doesn’t have a lot of native reactions. It also alleviates their hand economy by treating the weapon as an implement that you can swap around with your other implements as necessary. You don’t need it to excel as a thaumaturge, but you can’t go wrong with it.

- <Rating content="Initiate Benefit" ratings={[4]}/> The weapon implement comes out swinging with discount Reactive Strike. It’s better in some cases, given that it triggers on concentrate actions, can disrupt any action on a critical hit so long as it triggered the Interruption (except standing) and can even be used by ranged thaumaturges. You also get access to the implement’s critical specialisation at fifth level as an added bonus. A great damage booster, though be sure to have allies around who can help you guarantee that the ability activates.
- <Rating content="Adept Benefit" ratings={[2]}/> It’s a nice consolation prize when you miss. The Weapon definitely loses a lot of steam past its initial benefits, your main value at higher levels is being able to treat both hands as holding implements.
- <Rating content="Intensify Vulnerability" ratings={[3]}/> Hit things harder. This lasts a whole round and pairs nicely with other accuracy boosters like the tome’s adept benefit. 
- <Rating content="Paragon Benefit" ratings={[3]}/> Disrupting actions is really good. Being able to disrupt them on a normal hit is a great help for a class that can’t boost their attack stat as high as other martials, and features like esoteric reflexes double the value of this feature. Enemy spellcasters are not going to like you.

#### Synergies
There are some implement combinations that really shine together, and I intend to highlight them in this section. Some of these implements also have powerful combinations when using both at the same time, even in combat; unarmed strikes that leave your hands free synergise quite well with these.You can still pick most implement combinations that aren’t on this list, they just don’t work with each other as well or at all, but that’s perfectly fine. So long as you aren’t trying to put Bell in tandem with any other reaction implement. Just don’t. 

- <Rating content="Amulet/Mirror" ratings={[3]}/> Expand the range of your Amulet’s reaction. You can also combine this with the Mirror’s adept benefit to reduce the damage you take while still harming an enemy. Simple, but effective. 
- <Rating content="Amulet/Regalia" ratings={[3]}/> These don’t actually do much with each other, but are a good combo for a thaumaturge who wants to defend and support their allies.
- <Rating content="Amulet/Weapon" ratings={[3]}/> Behold, thy Sword and Board. They both have generally different triggers when it comes to reactions so it doesn’t really hurt much. Definitely pick up Esoteric Reflexes, but you’d be picking that up even if you had just the one.
- <Rating content="Bell/Mirror" ratings={[2]}/> This is similar to the Amulet/Mirror combo, but the bell has a much larger range so the aura expansion isn’t as effective. Also, it’s the Bell.
- <Rating content="Bell/Wand" ratings={[2]}/> This can make for an okay debuff build, especially since the bell can impose clumsy to improve the chances of a target failing against Fling Magic. Pretty boring though, and not that great.
- <Rating content="Chalice/Mirror" ratings={[2]}/> This can save you repeatedly having to move to and fro when trying to heal allies on the battlefield, but that’s about it.
- <Rating content="Lantern/Mirror" ratings={[3]}/> This basically enables you to make twice the number of checks to detect traps everytime you enter a new area, and increases the radius for the purposes of your Lantern’s special bonuses. Quite fun.
- <Rating content="Lantern/Regalia" ratings={[3]}/> There isn’t actually much synergy here outside of the sheer number of bonuses you can hand out to yourself and allies. This is very fun in an intrigue/mystery game and basically makes you a better Interrogator than the Investigator.
- <Rating content="Lantern/Tome" ratings={[4]}/> Put every other recall knowledge build to shame. The bonuses to recall knowledge stack, and the secret checks to detect hazards and their ilk are a useful universal benefit, as well as the lantern’s abilities to reveal concealed creatures (and even invisible and ethereal creatures with the adept ability) to provide even more targets to RK and EV on. With the right build, expect your GM to just start handing out the statblocks to you. A personal favourite.
- <Rating content="Lantern/Wand" ratings={[2]}/> The Lantern’s adept benefit can remove a target’s concealment for the purposes of targeting a creature with Fling Magic. Just okay, but that’s what this rating’s for.
- <Rating content="Mirror/Regalia" ratings={[4]}/> More aura expansion. The Regalia has a very powerful aura effect, especially past adept, and if your allies are a bit spaced out across the battlefield this allows you to keep them all within range of your aura at once while being a bit harder to target with area effects unless they’re quite wide.
- <Rating content="Mirror/Weapon" ratings={[4]}/> Flank with yourself or be somewhere else while still threatening your EV target with a nasty reaction. It can also make non-reach Weapons a bit better since by flanking with yourself your target can’t get out of range with a single step. 
- <Rating content="Regalia/Tome" ratings={[4]}/> A very solid support combination, the regalia’s benefits involve handing out bonuses like candy to your allies, and the extra skills the tome grants synergises well with the regalia adept’s skill requirements as well as the bonuses from Follow the Expert. If you want to be a Supporturge, you can’t go wrong with these two. Another favourite of mine.
- <Rating content="Regalia/Weapon" ratings={[3]}/> Not a lot of synergy but the regalia adept’s damage bonus does apply to Implement’s Interruption, so a solid bonus on top of the general power of the Regalia.
- <Rating content="Regalia/Wand" ratings={[2]}/> This is very much a mid-level combination, but once you get both effects to adept, the regalia’s adept bonus does apply to the persistent damage the wand’s fire damage applies. It’s whatever until then, but if you take Wand to paragon, being able to apply a powerful damage effect on every person who suffers the damage is really great area control. Still yellow because of how long it takes to get off the ground.
- <Rating content="Tome/Weapon" ratings={[3]}/> A simple but reliable combination. Implement Interruption benefits from the tome’s IV effect, making it a somewhat decent alternative to striking twice. However, the Weapon’s IV applies a +2 status bonus to all strikes you make, which does stack with the tome’s adept benefit bonus, effectively giving you a +3 bonus to the first strike you make (and to every strike if you take tome to paragon, which you should). A fine choice for an offensive thaumaturge who wants to learn more about the things it is currently killing while simultaneously being better at currently killing them.

**Three Implement Combinations:** Generally you can just look at the above rankings and combine implements that synergise with each other. The Mirror and Regalia are excellent picks for this; The Regalia for its host of buffs for the whole party, and the Mirror because its initial benefit is just fantastic. An Amulet is also a reliable tool for a final implement. Two fun combos I like are the Tome/Regalia/Lantern for the skill monkeys, and the Tome/Regalia/Weapon for the offensive boosters.

### Class Feats
#### 1<sup>st</sup> Level Feats:
- <Rating content="Ammunition Thaumaturgy" ratings={[2]}/> This is a feat tax, plain and simple. I do not personally recommend basic reload combat for the thaumaturge because reloading is a lot worse of an action tax than moving around is in my opinion, but with the right build you can pump out a lot of damage while staying safely in the backlines. Be sure to pick an archetype that improves your reload actions, and pick up the Tome for its IV ability to combine with Risky Reload in particular for an easier action economy.
- <Rating content="Diverse Lore" ratings={[4]}/> Whoever wrote the thaumaturge’s recall knowledge capabilities really hated the investigator. This feat is so strong, you can recall knowledge on any topic with a paltry -2 penalty if it doesn’t pertain to creatures, haunts, or curses. Abilities like Bardic Lore and Keen Recollection can’t hold a candle to this and Esoteric Lore already autoscales to legendary. If that wasn’t enough, you also gain the effects of a RK success or a critical success every time you succeed or critically succeed on EV respectively. Your party will love you for all the information you dole out from this feat, and your GM will hate you for constantly yelling out that you recall knowledge every time they bring up anything you deem important, trivial or otherwise. 
- <Rating content="Divine Disharmony" ratings={[2]}/> Feint, but better. The thaumaturge loves accuracy boosters, so if you can fit this onto a ranged build it’s pretty solid. Does compete with a lot of actions though, and probably better for a class to poach from an archetype.
- <Rating content="Familiar" ratings={[3]}/> The thaumaturge is weirdly good at a lot of things, and this is another one of them. Familiars are quite useful for the thaumaturge with abilities like independent and manual dexterity allowing your familiar to greatly ease your action economy when swapping out items, which the thaumaturge has a lot of incentive to do. Plus, it’s just cool to have.<br>
Ritunn has a fantastic guide to familiars which you can find <a href="https://docs.google.com/document/d/107_A6a9VmBwPVgIihj7I3gvOToGYzaSB7jh5gNFzLlw/edit#heading=h.gpok8zftnj2u">here</a> for additional information.
- <Rating content="Haunt Familiarity" ratings={[1]}/> Pick up a Lantern. In a game where haunts are a common occurrence, your party should be well equipped to handle such encounters without needing this feat. 
- <Rating content="Root to Life" ratings={[2]}/> The ability to better end persistent damage on a dying ally is the only thing that’s keeping this from a <Rating content="red" ratings={[1]} bold={false} stars={false}/> rating. Otherwise, this is just a worse stabilise, and you should have better tools to deal with persistent damage, especially as you level up.
- <Rating content="Scroll Thaumaturgy" ratings={[4]}/> You can activate any scroll. This feat is incredibly versatile, basically giving you the effects of trick magic item on scrolls without any investment into the tradition skills outside of you automatically being trained in them. Being able to hold them in the same hands as implements is a great way to sweeten the deal. You can’t make too much use of this immediately, but a lot of adventures provide scrolls as treasure along the way. Still a solid pick at later levels if you want to pick up something else (Diverse Lore) instead. Opens up a very fun feat path in <Rating content="Scroll Esoterica" ratings={[4]} bold={false} stars={false}/>.

#### 2<sup>nd</sup> Level Feats:
- <Rating content="Call Implement" ratings={[1]}/> Niche. You can already deem a new item an implement with one day of downtime, and the Called Accessory Rune, while uncommon, already does most of this ability’s job for it.
- <Rating content="Enhanced Familiar" ratings={[4]}/> More abilities for your familiar. I am certain you can find something useful for your build. The thaumaturge’s familiar progression is second only to the Witch and the Familiar Thesis Wizard. Very unique for a martial with no native access to spellcasting.
- <Rating content="Esoteric Warden" ratings={[3]}/> Status bonuses to defences are not easy to come by, even if it is once per day per creature. Solid defensive bonuses, which melee builds will especially appreciate.
- <Rating content="Talisman Esoterica" ratings={[3]}/> Talismans are fun. Scaling at half your level can be a bit painful, but there are plenty of powerful low level talismans that stay relevant as you level, the Predator’s Claw being a standout. Free consumables are almost never a bad choice.
- <Rating content="Turn Away Misfortune" ratings={[1]}/> You start every session with 1 Hero Point, can hold up to 3 Hero Points at once, and are expected to gain an additional Hero Point after each hour of play. If you are suffering a misfortune effect, which is already a rare occurrence with your Will progression, you can just spend one of those to get this same effect without spending a feat slot and a reaction.

#### 4<sup>th</sup> Level Feats:
- <Rating content="Breached Defenses" ratings={[1]}/> This feat is annoying when writing in British English. I could see this feat being <Rating content="green" ratings={[3]} bold={false} stars={false}/> if the feature allowed you to ignore any resistance.<br>
However, Breached Defenses only allows you to ignore a creature’s resistance if it can specifically be bypassed. Your grand plan to ignore the Grim Reaper’s resistance 15 to all damage has unfortunately failed. It’s incredibly situational, expecting you to be in a situation where a) a creature has a high resistance to your basic strike’s damage b) this resistance is higher than your Mortal Weakness/Personal Antithesis damage and c) this resistance is bypassable.<br>
The benefit of learning its highest resistance on a success is also a poor ability, especially when you could use Diverse Lore for a far more Diverse Purpose. In addition to all of that, it does not interact with any further abilities like Sympathetic Vulnerabilities or Share Weakness, leaving it purely a standalone option. In the right situation it’s valuable, but it’s rarely a situation that comes up often, and if you are in a campaign where you are fighting constructs, incorporeal undead or anything else with such a feature, you ought to be able to afford the proper materials to upgrade your weapon with.
- <Rating content="Instructive Strike" ratings={[3]}/> The thaumaturge doesn’t have a lot of competing metastrikes in the base class, so this is a reliable option to use every turn unless you are a ranged build. It combines especially well with the Tome implement’s adept benefit, allowing you to make what is essentially two free recall knowledge checks for one action. Your GM will probably just hand over the stat blocks to you by now, though if you have a lot of Recall Knowledge capabilities already this might be a little much. Can still be useful if you frequently face enemies with a lot of moving parts, especially with your excellent ability to use a variety of tools, even more as you level.
- <Rating content="Paired Link" ratings={[2]}/> This ability is not necessarily weak but more situational. In the right party composition, especially one with a lot of spellcasting, this is basically saving you or your party member a stride action every turn a touch ability must be activated. Bump this ability’s rating by one step in those parties if you and your ally make frequent use of them. 
- <Rating content="Thaumaturgic Ritualist (U)" ratings={[2]}/> This is a fun feat, if nothing else. Rituals are a very interesting but not always useful option to add to your toolkit, and if your GM allows this feat they likely will allow the vast majority of rituals in the game. Pick up the tome implement when taking this feat to provide all the necessary skill proficiencies for the rituals you learn. Rune Trap is a fun one to pick up when combined with the scroll thaumaturgy feat chain and a spellcasting archetype. The feat also provides a powerful bonus to ensuring your ritual checks succeed.

#### 6<sup>th</sup> Level Feats:
- <Rating content="One More Activation" ratings={[3]}/> This feat is for the magic item addicts. There are a lot of items half your level or lower that become a lot stronger with even just a single additional activation. This feat only grows in value the higher you level, and really benefits from the Thaumaturge’s Investiture and Intensify Investiture feats at levels 10 and 12 to gain extra items and make them stronger, to use this off. If your GM rules that this feat can only activate once a day (likely due to the iffy wording, though I do not see how this feat is strong enough to warrant that), this feat becomes <Rating content="red" ratings={[1]} bold={false} stars={false}/>. 
- <Rating content="Scroll Esoterica" ratings={[4]}/> Become a spellcaster. Free scrolls every day, even at 1st level, is very very solid. You get to choose a spell from any spell list, and at 8th level you get to pick a 2nd level spell. You may consider picking this feat up a bit later down the line when you’re closer to its follow up feat and can afford more lower level scrolls (remember that with scroll thaumaturgy you can hold scrolls in your implement holding hands as if they were esoterica) if you haven’t invested in an archetype or other thaumaturge feats, but free spells, even this low-level, are a solid choice. The thaumaturge has an incredibly expansive toolkit. 
- <Rating content="Sympathetic Vulnerabilities" ratings={[4]}/> Use your trade secrets against more victims. This is really good for your action economy against enemies you trigger Personal Antithesis against, since it is likely that when for example, fighting encounters with humanoids who rarely have native weaknesses, they are all of the same type, and is still fantastic in encounters where there are multiple enemies with a weakness to X but of different types, even if those are infrequent.

#### 8<sup>th</sup> Level Feats:
- <Rating content="Cursed Effigy" ratings={[2]}/> This gets better the more you use scroll thaumaturgy and other features that use your class DC, such as the Wand implement. It’s also pretty good with the 12th level Intensify Investiture to get even more use out of it. Bump its rating by one step in those cases. 
- <Rating content="Elaborate Talisman Esoterica" ratings={[3]}/> Never turn down extra free stuff. You can also hand out talismans to your party if you think they’d make better use of them. Not really worth picking up again though, you have better competition by then.
- <Rating content="Incredible Familiar" ratings={[3]}/> You may think you’d struggle a bit to fill out abilities, but now you gain access to a lot of very cool specific familiars which makes this feat worth the pick. A reliable choice for just about any thaumaturge.
- <Rating content="Know-It-All" ratings={[3]}/> Your GM isn’t just handing out the stat block anymore, they’ve just given you the Monster Core. Thumb through it at your pleasure.

#### 10<sup>th</sup> Level Feats:
- <Rating content="Share Weakness" ratings={[3]}/> Share your 11 herbs and spices with your fellow martial. Increase or decrease the rating of this feat depending on the frequency of creatures who have a Mortal Weakness you can exploit in the campaign thus far. This pairs especially well with a Fighter or Gunslinger in the party, but any combat focused PC who’s got a higher attack bonus than you is worth picking this feat up for. It also enables a more support-oriented thaumaturge who can give up frequent attacks by letting the other murderhobos in the party deal with the threat at hand for them. Useless if you’re the only strike-using martial in your party, but that’s incredibly unlikely.
- <Rating content="Thaumaturge's Investiture" ratings={[3]}/> Most classes do just fine with 10 invested items or less and can call it a day. The thaumaturge isn’t one of those classes. Invest all the items. Activate all of them. This feat is <Rating content="blue" ratings={[4]} bold={false} stars={false}/> if you take the feats that increase item activations, use your class DC for their abilities, and activate magic items easier. Your character is certain to look ridiculous with the amount of equipment hanging off your body by this point, to say nothing of your esoterica.
- <Rating content="Twin Weakness" ratings={[2]}/> The thaumaturge has two damage boosters. Implement’s Empowerment, and Exploit Vulnerability. It is the combination of these two features that make the thaumaturge such a powerhouse of damage, rivalling that of the inventor and the barbarian. This feature lets you guarantee the application of the latter ability at least once a turn, but it’s rather action intensive. If you really hate missing, you might like this feat, but you could probably spend the same action cost activating an ability that provides a powerful accuracy booster (like the IVs of certain implements) for a benefit that’s easier to use and didn’t cost a 10th level feat. On a basic reading, this feat seems to do about the same damage as Vicious Swing, which is a 1st level feat. That fact alone almost makes me want to bump this down to <Rating content="red" ratings={[1]} bold={false} stars={false}/>. 

#### 12<sup>th</sup> Level Feats:
- <Rating content="Elaborate Scroll Esoterica" ratings={[4]}/> Behold, more free stuff. At this point low level scrolls are a bit cheap, but this is effectively giving you a wand you can’t overcharge each day for spells all the way up to 5th level. Invest in abilities that put stuff in your hands for you for maximum combat efficiency. You’re guaranteed to find something useful across the four spell lists here. 
- <Rating content="Intensify Investiture" ratings={[3]}/> The thaumaturge has a very fast class DC progression, second only to the kineticist and the commander. This synergises really well with prior feats that give you more items and more activations of them, allowing you to gain great use out of cheap low level items each day. You basically never run out of resources.
- <Rating content="Shared Warding" ratings={[2]}/> The effect is good, but too high level, especially for a follow up feat, for my taste. This is still very useful in fights against enemies who use AoE effects, granting the effects of protection to everyone in your party for a round. The first round of combat is the most important one, so if you’re using this, invest in going first as much as you can. 
- <Rating content="Thaumaturge's Demesne (U)" ratings={[1]}/> This feat’s requirements are hilarious to me. It requires you to already own the area or otherwise have it uncontested, you can’t ever reassign it or transport it elsewhere if it's destroyed or you lose access to it, and it just… Doesn’t do much. Adventurers are called adventurers for a reason. There’s a joke about capitalism here I can't be bothered to make.

#### 14<sup>th</sup> Level Feats:
- <Rating content="Esoteric Reflexes" ratings={[4]}/> You’re taking this feat because you’re a Weapon user, an Amulet user, or both. You may also take this as a Bell thaumaturge but you probably should have one of the other two anyway (and probably just anything but the Bell). The thaumaturge loves reactions, and this feat loves giving you extra reactions, effectively doubling your output with those implements every round. 
- <Rating content="Grand Talisman Esoterica" ratings={[3]}/> You love free stuff, and the free stuff loves you so much it lets you use them more often per combat. Two talismans on an item at once can be really potent with the right combinations. A fitting end to this road.
- <Rating content="Trespass Teleportation" ratings={[1]}/> This class has a bad habit of the last feat choice in a level either being really strong or really weak. This ability is already situational enough as is, but smart enemies can game this by teleporting to places dangerous for you (such as the sky, underwater, or the Nine Hells) and splitting you from the party, especially if the feat requires you to spend the reaction before you see the target’s end destination. If you know you are fighting an enemy with teleportation effects, find other ways to lock them down with your team members through feats, magic items, or spells (A personal favourite of mine is Inescapable Grasp).

#### 16<sup>th</sup> Level Feats:
- <Rating content="Implement's Flight" ratings={[4]}/> It’s flight. Everyone loves flight. I expect every thaumaturge who takes this to provide a verbose and hilarious description of how their implement suddenly lifts their character through the skies. You may also try spinning, as that is a good trick.
- <Rating content="Seven-Part Link" ratings={[2]}/> Another reliable effect, but just a little too high level for me to rank it any higher without incredible teamwork from your party. Once again, incredibly solid in a larger party, possibly with summons, that saves you and your casters actions moving in and out of range to get potent buffs off, like Heal, Heroism, Lay on Hands etc. It seems that per the text RAW you can’t apply your thaumaturgic abilities with a range of touch (of which there aren’t many anyway) to more than one ally who you Paired Link with, but this is probably unintended.<br>
If your GM allows you to count items you’ve invested as thaumaturgic abilities (likely due to taking feats such as thaumaturge’s investiture, scroll thaumaturgy etc) this feat becomes a lot better and a lot more fun.
- <Rating content="Severe Magic" ratings={[2]}/> Enemies with access to spellcasting are not infrequent at these levels. Your spellcasting allies are probably better at doing this than you will ever be, but it’s resourceless outside of the action cost and you can repeat it every turn. A solid choice for melee thaumaturges or repeating weapon users. 

#### 18<sup>th</sup> Level Feats:
- <Rating content="Grand Scroll Esoterica" ratings={[4]}/> Cast even more spells. Even at this level scrolls of 6th-7th level are a bit too expensive to buy every day, and this provides you with more free stuff that you get to swap out every day for another spell you have access to. Remember that you can also heighten lower level spells with your scrolls, and there’s a lot of good options at these levels. The sky’s the limit.
- <Rating content="Implement's Assault" ratings={[3]}/> This feat is stronger than it looks, and it looks pretty good. The game in general suggests that combat encounters feature as many or more foes than there are PCs, and this feature does very well compared in those cases compared to having to constantly activate EV, especially if you didn’t take Sympathetic Vulnerabilities (which also works well with this feat!). If you can get into range (perhaps by having an ally transport you, using haste etc.) of at least 3 enemies this feature is incredibly worthwhile. If your GM allows this to work with reload weaponry, since it lacks the text that features like the inventor’s Devastating Weaponry do, this is even more incredible. It also pairs well with Sweep, Backswing and Forceful weapons. Enjoy your custom death blender.
- <Rating content="Intense Implement" ratings={[2]}/> Some implements have powerful adept benefits. I don’t personally think they’re powerful enough to warrant an 18th level feat, but niche builds do exist that can take advantage of this feat to some extent.

#### 20<sup>th</sup> Level Feats:
- <Rating content="Ubiquitous Weakness" ratings={[3]}/> At this level, you should know if your big bad(s) and their minions have exploitable weaknesses. You probably already have items that exploit such a weakness, but if you don’t, this feat is a very powerful damage booster. If your party is also heavily martial with an emphasis on making multiple attacks, bump the feat’s rating up a step. Enjoy your final murderous rampage with the power of friendship.
- <Rating content="Unlimited Demesne" ratings={[1]}/> Just cast the actual spell. Irori knows you already can by this level. 
- <Rating content="Wonder Worker" ratings={[3,4]}/> You have enough skill increases to invest at least one of the four tradition skills to legendary, in which case, this feat is still nice for basically giving you an at-will scroll. However, this feat becomes insane with the Tome Implement’s Paragon Benefit. You can use it to become legendary in any two skills of your choice, and as long as you are already legendary in one of the four main skills (which is quite easy given the thaumaturge’s extra increases), you can cast the Wonder Worker spell from just about any tradition. This is what has to cement the thaumaturge as the most versatile martial in the game, if nothing else. You can basically get the effects of <Rating content="Manifestation" ratings={[4]} bold={false} stars={false}/> without having to expend a 10th level spell slot. Combined with feats that give you extra magic items of all kinds, you truly are a Thaumaturge, Worker of Wonders.

### General Feats:
General feats are among the worst designed features in this game. There are clear winners you’ll want immediately upon access, and then there’s just absolute garbage. The thaumaturge will want classics like Fleet and Incredible Initiative. Toughness is a near-must pick for most melee turges. I’m only going to highlight certain feats. Anything that isn’t covered is usually just <Rating content="Red" ratings={[1]} bold={false} stars={false}/> and never better than <Rating content="Yellow" ratings={[2]} bold={false} stars={false}/>. You might just pick up strong skill feats instead.

**1<sup>st</sup> Level:**
- <Rating content="Adopted Ancestry" ratings={[2]}/> If you desperately desire another ancestry’s feats and aren’t willing to use the mixed heritage, this is how you have to get it. I only recommend this feat for the most precise builds that need two feats from different ancestries to pull off. If your backstory is just “raised by kobolds” but you don’t actually need their feats for anything, you’d usually be better off without it.
- <Rating content="Armor Proficienct" ratings={[3]}/> Get scaling proficiency in heavy armour. This is an excellent choice for strength thaumaturges in low level campaigns who don’t or can’t get the champion archetype
- <Rating content="Canny Acumen" ratings={[1]}/> This feat has little use for thaumaturges. You already become an expert in reflex saves at level 3. You might retrain for it or pick it up at a higher level to become master in reflex at level 17.
- <Rating content="Diehard" ratings={[2]}/> This benefit is the definition of situational, applying in the rare scenario that you have been left unconscious for several turns or pissed someone off enough that they start stabbing your unconscious body while your allies are still around. Still, it applies in the situation with the greatest possible consequence for your character, or if you’ve been getting up and getting knocked back down and racking up a high wounded score, so it doesn’t hurt as an insurance policy. I’d be more inclined to retrain for it once you meet the prerequisites for its follow-up feat, Numb to Death. It’s better if you can get it more cheaply from an ancestry feature.
- <Rating content="Fleet" ratings={[4]}/> This is the best general feat in the game. Faster movement is always useful.
- <Rating content="Incredible Initiative" ratings={[4]}/> You gain a bonus to all initiative checks.
- <Rating content="Pet" ratings={[1]}/> You can at least get Manual Dexterity, but you should probably just take Familiar.
- <Rating content="Shield Block" ratings={[1]}/> You don’t use shields. Cast Shield instead.
- <Rating content="Toughness" ratings={[3]}/> Take this on melee builds, especially if you don’t have a Defender.
- <Rating content="Untrained Improvisation" ratings={[1]}/> You generally have enough skills that this feat does very little for you; However, if your GM is flexible with the use of lore skills for purposes other than recall knowledge, this can be very useful to pick up, especially with some investment in intelligence.

**3<sup>rd</sup> Level:**
- <Rating content="Ancestral Paragon" ratings={[3]}/> There are usually some good ancestry feats available to you. If nothing else appeals to you, all the more reason to take this.
- <Rating content="Keen Follower" ratings={[1]}/> You’ve fantastic skills. Other people follow your expertise.
- <Rating content="Prescient Planner" ratings={[2]}/> Get whatever standard piece of adventuring gear you need. This is handy for producing manacles, shovels, and ropes on demand.
- <Rating content="Thorough Search" ratings={[3]}/> Pretty useful if you are the party’s scout, and their bonuses stack with the lantern’s. Speed in exploration mode rarely comes up anyway.

**7<sup>th</sup> Level:**
- <Rating content="Expedious Search" ratings={[2]}/> Generally speaking, time and speed in exploration mode isn’t the most important or frequently tracked, but if it is in your game this is a neat pick for the party scout. 
- <Rating content="Numb to Death" ratings={[3]}/> Once per day, you don’t get wounded and get extra healing when brought back up from unconsciousness. Between this and its prerequisite diehard, you’ll be pretty tough to kill. Of course, the other prerequisite for this feat is that you must have died first.
- <Rating content="Prescient Consumable" ratings={[2]}/> You can summon up whatever consumable you need. You’re not for want of many such items, given your easy access and use of them, and this doesn’t help you in combat anyway, but it has its uses.

**11<sup>th</sup> Level:**
- <Rating content="Incredible Scout" ratings={[3]}/> Incredible initiative for your entire party, provided your party actually uses exploration activities like this.

### Skills:
The thaumaturge can take on the role of a skill monkey quite easily, given its incredible access to skill bonuses and proficiencies. Your easy access to magical items also helps greatly.

#### Varying Skill Feats:
A large number of varying skill feats are based around various knowledge skills, typically those of the four magic traditions. You don’t really care about them for the purposes of Recall Knowledge, but they have other decent uses, especially Religion and Arcana. Religion is the skill the thaumaturge can make best use out of due to scaling off wisdom and having access to some neat feats. However, the details of your individual campaign will vary wildly, and you should make your own calls in accordance with your knowledge and preferences.

- <Rating content="Armor Assist" ratings={[1]}/> A useless feat. You can shave thirty seconds off of putting on your light armour. That’s still five rounds of combat.
- <Rating content="Assurance" ratings={[4]}/> RPGbot has a great guide on Assurance, which can be found <a href="https://rpgbot.net/p2/characters/assurance">here</a>. I recommend using this feat for athletics, the four tradition skills, and esoteric lore. Using it on athletics allows you to ignore MAP and the dexturge’s mediocre strength, especially since you can identify the lowest saves of enemies with ease. Intimidation serves the same function, though it never needed to worry about the multiple attack penalty regardless. Assurance in Esoteric Lore grants you reliable successes on your RK and EV effects against lower level enemies, removing the worry of critical failure. Because crafting and medicine both have fixed DCs, Assurance allows you to guarantee success, though you might not have invested in those well enough. Finally, it can be applied to one of the four magic tradition skills (arcana, nature, occultism, religion) to use the Trick Magic Item feat with great reliability. Every thaumaturge can find a use for Assurance.
- <Rating content="Assured Identification" ratings={[3]}/> A great versatile knowledge skill which prevents you from critically failing checks to identify magic. It even partially protects you from misidentifying a cursed item, which is a rare benefit. Be suspicious of anything you can’t identify if you take this feat.
- <Rating content="Automatic Knowledge" ratings={[4]}/> You probably took assurance in Esoteric Lore. This is a great follow up to that, especially in encounters with lower level mooks.
- <Rating content="Break Curse" ratings={[2]}/> You can attempt to counteract a curse with your occultism or religion skill. It takes eight hours and only applies when you have a cursed ally, so you should probably just use spellcasting instead. 
- <Rating content="Consult the Spirits" ratings={[3]}/> A great fit for thaumaturges looking to boost their nature or religion. Occultism might fit the flavour of the class more, but it keys off your intelligence which serves nearly zero purpose to the thaumaturge compared to wisdom. This feat synergises fantastically with the Lantern and Tome implements. 
- <Rating content="Discreet Inquiry" ratings={[2]}/> This isn’t the greatest skill feat, but it's very useful in games of sleuthing and mystery. 
- <Rating content="Eyes of the City" ratings={[3]}/> Use diplomacy to track people through cities. This is a solid thematic and mechanical match for the thaumaturge. The rating may be a bit generous for a situational feat that merely saves you the need to invest skill boosts into survival, but there are few classes that can make better use of this.
- <Rating content="Half-Truths" ratings={[2,3]}/> You can request using deception and lie using diplomacy. You have to be an expert in both just to take the feat, so you gain nothing from it until seventh level when you boost one to master. At that point, between this and Charming Liar you’ve completely replaced diplomacy’s default functions. The thaumaturge’s main hindrance when it comes to being a skill monkey is its average number of skill feats. This greatly improves your social skills out of combat and reduces your need to further invest in both at once.
- <Rating content="Quick Identification" ratings={[2]}/> Most of these “activity speed enhancer” skill feats are about as worthwhile as they sound. At least this one eventually reduces it to an activity you could theoretically perform in combat; by the time it is a single action, this feat is <Rating content="green" ratings={[3]} bold={false} stars={false}/>. I also consider it to this feat’s credit that it does not lock the benefit to any one of your knowledge skills. You do have great skill proficiencies with the tradition skills.
- <Rating content="Quick Recognition" ratings={[3]}/> A nice bonus which turns Recognize Spell from a reaction to a free action. It works particularly well if you have reaction implements or an ancestry feat which boosts saving throws as a reaction because you know which spells you’ll need to use your reaction on, and which ones you can handle.
- <Rating content="Recognize Spell" ratings={[2]}/> You can use a reaction to attempt to recognize a spell being cast. Typically, you can tell what spell is being cast when something goes boom. However, you don’t have many inherent uses for your reaction without using an implement, and knowing that the dragon that was summoned to the battlefield is actually an illusion can be very helpful. You can also use this spell to tell whether your foe turned invisible or teleported. There are many scenarios in which knowing exactly what the enemy cast helps you dramatically. Unfortunately, you aren’t very good at using the tradition skills due to your lower relevant modifiers, but if you invested into the right skill depending on your campaign this is still a solid bonus. Otherwise, Arcana and Religion are the two standout options since the arcane spell list has the most offensive options and the divine list is common amongst holy/unholy creatures and undead.
- <Rating content="Skill Training" ratings={[1]}/> You don’t need every skill. The only reason to take this feat is if you want to brag about having every skill. Humans have a better version of this feat available as an ancestry feat, as do some other ancestries, and you can just take the Tome.
- <Rating content="Slippery Prey" ratings={[3]}/> You can reduce or outright ignore the multiple attack penalty when using the escape action depending on your proficiency level in acrobatics or athletics. Very solid for the thaumaturge with their lower base accuracy.
- <Rating content="Trick Magic Item" ratings={[4]}/> A valuable addition to your skillset. Few classes are better qualified to use it than a thaumaturge thanks to their automatic training in all four tradition skills and additional skill increases. It works wonders in tandem with the Tome Implement and the Assurance feat in a spell tradition. With all of them, you can draw any wand and cast any spell of your level or lower on the fly. As there is no bonus for critically succeeding, using the Assurance feat to guarantee success is eminently practical.<br>
As Trick Magic item takes an action to activate, using a wand will usually take your whole turn. It is mostly useful for out-of-combat buffs. Check the wand subsection down in equipment for a review of useful items.<br>
Needless to say, if you have spellcasting from any source you are unlikely to need this feat. Thaumaturges in particular already have native access to Scrolls and can access all the spellcasting traditions through archetypes incredibly easily. Nonetheless, this is still a valuable tool for the purpose of activating wands of spells that aren’t already on your spellcasting tradition and/or are so valuable you want to cast them everyday.

If a common skill feat isn’t covered in the lists above or below, consider it <Rating content="red" ratings={[1]} bold={false} stars={false}/> or <Rating content="yellow" ratings={[2]} bold={false} stars={false}/> at best.

#### <Rating content="Acrobatics" ratings={[3]}/>
This skill isn’t nearly as important as athletics is. Uneven terrain is much less frequent than the pitfalls that athletics can get you past. It is still helpful to be trained for the rare occasions it shows up.
<Rating content="Cat Fall" ratings={[3]}/> and <Rating content="Steady Balance" ratings={[3]}/> are solid first level feats. Steady Balance is quite situational, but it’s fantastic when it comes up. Dexturges who push acrobatics to legendary will greatly benefit from either feat. From 7th level and above, <Rating content="Aerobatics Mastery" ratings={[3]}/> is great if you have a fly speed, but <Rating content="Kip Up" ratings={[4]}/> is a fantastic choice; Reflex is your worst save and you are very prone to getting tripped, and between its first level feats and this even strength turges can do a lot to compensate for their poor Reflex. 

#### <Rating content="Arcana" ratings={[2]}/>
Arcana is usually a powerful skill, but the thaumaturge has little use for it. You are already automatically trained in it, and almost all of its feats are shared between it and the other skills associated with spellcasting traditions. The only real value it has on its own is Unified Theory, but that’s not worth much on someone with your capabilities.

#### <Rating content="Athletics" ratings={[3]}/>
Athletics is a reliable skill every adventurer should at least be trained in for the purposes of climbing and swimming. The strength turge can make good use of it, especially with a whip, but any thaumaturge with assurance and recall knowledge investment can find it an excellent action to use against lower level mooks whose DCs can be reliably targeted with the skill. You do struggle with maneuvers unless your weapon or unarmed attack has a relevant trait though.

**1<sup>st</sup> Level:**
- <Rating content="Combat Climber" ratings={[1]}/> Thaumaturges can’t make good use of climbing in combat unless their ancestry or another source provides them a hands-free version of it. Many of those sources basically provide this feat’s benefits alongside it anyway.
- <Rating content="Hefty Hauler" ratings={[1]}/> A Spacious Pouch costs just 75 gp and can carry 25 bulk. Only take this feat if your GM doesn’t allow you to purchase magic items, but I’m not sure why anyone, even a thaumaturge, would play such a game.
- <Rating content="Quick Jump" ratings={[3]}/> If you have high strength, intend to continue increasing athletics, or have Assurance in athletics, you should choose Quick Jump instead of Powerful Leap. The higher your level, the more preferable Quick Jump becomes.
- <Rating content="Titan Wrestler" ratings={[4]}/> If you want to use athletics in combat, this feat is mandatory. Use it to gain the benefits of your athletics skill on huge and larger targets. You almost never see huge monsters until after fifth level, so try to pick it up or retrain for it around then, unless you are small, in which case pick it up immediately.
- <Rating content="Underwater Marauder" ratings={[2]}/> This feat is only useful if you are in a nautical campaign. Otherwise, just move your runes over to an appropriate weapon when you hear that you’re heading to the local water dungeon.

**2<sup>nd</sup> Level:**
- <Rating content="Powerful Leap" ratings={[3]}/> If you have a movement speed of 30+ feet, a low strength, or no intention of raising your proficiency in athletics past expert, choose Powerful Leap instead of Quick Jump. At higher levels when your athletics modifier eclipses the distance of your leap, you might choose to retrain into Quick Jump.
- <Rating content="Rapid Mantel" ratings={[3]}/> This feat allows you to swap the Grab an Edge reaction from a reflex saving throw to an athletics check. Regardless of whether or not you use that benefit, you can instantly pull yourself up as part of the same reaction. It is nice for strength thaumaturges with their poor reflex saves. 

**7<sup>th</sup> Level:**
- <Rating content="Quick Swim" ratings={[2]}/> See Underwater Marauder.
- <Rating content="Wall Jump" ratings={[3]}/> Wall jump is a very cool and practical ability. The more jumping or leaping feats you have, the better it gets.
- <Rating content="Quick Climber" ratings={[2]}/> Some ancestries offer hands free climbing but with a mediocre climb speed or just no climb speed at all; This is a must-pick if you wish to make maximum use of their abilities. It does provide you with one of the fastest climb speeds in the game at 15th level though, which is pretty cool.

**15<sup>th</sup> Level:**
- <Rating content="Cloud Jump" ratings={[4]}/> A great enhancement to your mobility. You are a hero of the realm, and no cliff, pit, or wall is going to stop you any longer.

#### <Rating content="Crafting" ratings={[1]}/>
You don’t care about intelligence and you don’t use shields. Leave this skill to anyone who uses those instead. You may want it to craft magical items, but that’s a hefty investment for very little value in most games.

### <Rating content="Deception" ratings={[3]}/> 
Deception has two mid-combat functions: feinting and diversions. Feinting only works in melee, only on a single target, and doesn’t get any skill feat support. It makes an enemy off-guard. Creating a Diversion has skill feat support and works on every creature in range. It gives you the hidden condition, which also makes enemies off-guard to your next attack. It can also be used to sneak into cover if your stealth proficiency is high. Creating a diversion provides a great way to use your stealth bonus on maps with limited cover. Diversions are only likely to work once per fight because it gives creatures a big bonus against repeat attempts.<br>
While making enemies off-guard is fantastic to any character, the thaumaturge has less reliance on the skill thanks to feats like Divine Disharmony, which lets them effectively feint at range using Intimidation against any but the most militant of atheists. If you don’t care for deception’s out of combat uses, you may instead choose that feat and invest into the far stronger Intimidation skill, or even just take neither and push Intimidation anyway, especially if your team has reliable off-guard generation. It’s still useful by virtue of the thaumaturge’s high charisma, and has some fun social feats. It’s a solid choice for dexturges in particular, to couple with stealth.

**1<sup>st</sup> Level:**
- <Rating content="Charlatan" ratings={[2]}/> You can hide a magic item on your person and convince people you are a spellcaster. It’s not a bad fit for the thaumaturge thanks to their easy access to magic items. That said, you have little reason to pretend to be a spellcaster in the first place. It’s very fun though.
- <Rating content="Charming Liar" ratings={[1]}/> Just invest in diplomacy if you want to make friends. You have the skill increases for it anyway.
- <Rating content="Lengthy Diversion" ratings={[3]}/> Make your diversions last longer. An especially solid pick for dexturges who like to sneak around.
- <Rating content="Lie to Me" ratings={[4]}/> It’s not hard for your deception to be higher than your perception. Great pick if you have a wisdom flaw.

**2<sup>nd</sup> Level:**
- <Rating content="Confabulator" ratings={[3]}/> Fantastic if you’re invested into Create A Diversion; makes it very easy to use multiple times in an encounter. 
- <Rating content="Fleeing Diversion" ratings={[3]}/> A fine feat that enables you to use your reaction to move in response to a critical success on a diversion check. Sometimes you just have to get out of dodge.
- <Rating content="Quick Disguise" ratings={[3]}/> This feat got a much-needed boost from the remaster. You can assemble a disguise much more quickly. When you hit master proficiency at seventh level or later, you can assemble a disguise within a single turn.

**<sup>7th</sup> Level:**
- <Rating content="Doublespeak" ratings={[3]}/> This feat is basically a fallible version of telepathy. Your party automatically understands what you mean when you say something completely different. Everyone else has to make a perception check to figure it out.
- <Rating content="Slippery Secrets" ratings={[3]}/> Circumventing magical lie detection is useful for late-game deception, especially in a game of espionage and stealth, depending on how frequent such an ability is.

**15<sup>th</sup> Level:**
- <Rating content="Reveal Machinations (R)" ratings={[4]}/> This is a rare feat locked behind the very first AP in the game, but i just couldn’t ignore it; It’s a hilarious capstone feat that provides you the benefits of RK on top of a Deception Check to frighten a target, which is basically two different skills’ skill actions at once using another skill. It was me, Barry! 

#### <Rating content="Diplomacy" ratings={[4]}/>
Some of the rules on diplomacy are a bit gamey and inorganic, even post-remaster, so check with your GM to see how rigidly they will adhere to rules-as-written regarding diplomacy; Nonetheless, it remains a helpful skill in all campaigns on its own merits. As the nice-guy social skill, it is the only common way to convince NPCs to do what you want without making enemies down the road.

**1<sup>st</sup> Level:**
- <Rating content="Bargain Hunter" ratings={[1]}/> Instead of using this feat, you can get income the normal way using your esoteric lore. The only bonus diplomacy offers over this is easier access to item bonuses.
- <Rating content="Bon Mot" ratings={[3]}/> This is a good use of your diplomacy in battle if you or an ally are frequently using either stealth or effects that target wisdom saves. Otherwise, Demoralize is probably a better opener, especially in encounters with multiple foes.
- <Rating content="Group Impression" ratings={[2]}/> Most GMs allow diplomacy checks to apply to crowds when you are giving a big speech. On the off-chance your GM actually insists “only one guy in the crowd starts cheering” after you get up on the podium, you’ll need this feat. The remaster buffs don’t change that.

**2<sup>nd</sup> Level:**
- <Rating content="Glad-Hand" ratings={[4]}/> Get an instant check to improve the attitude of any NPC you so much as greet. If you fail, you can try again the normal way. This is like getting a permanent fortune effect on all checks to make an impression. As of the remaster, it no longer penalises the initial check. A must-pick in any game with heavy focus on social mobility and keeping allies, and still solid in the average campaign anyway.

**7<sup>th</sup> Level:**
- <Rating content="Evangelise" ratings={[3]}/> If you have Bon Mot, you’ll probably want to trade it out for this. Stupefied hits the same stats Bon Mot does while simultaneously making a caster’s life worse. The numbers are slightly smaller, but vastly more versatile, and the flat check that can make them lose a spell is greatly valuable. You must be following a deity to access this option, but that isn’t hard. Pick a deity with the knowledge or truth domains for basic flavour.
- <Rating content="Shameless Request" ratings={[4]}/> You become immune to the effects of critically failing a check to make an impression.

**15<sup>th</sup> Level:**
- <Rating content="Legendary Negotiation" ratings={[4]}/> Use your whole round to get enemies to stop fighting. If you succeed, you’ve ended the fight. If you fail, you’ve wasted your whole turn. It is the ultimate gamble, but if you pull it off you can completely change the direction of the story. Check with your fellow player before you commit to this feat; some of them come to the table to hit things, and will be annoyed if you always try this turn one. You can also use EV and RK checks in the conversation that follows to get more information beforehand and save some actions in the chance that combat resumes.

#### <Rating content="Intimidation" ratings={[4]}/>
Intimidation is a highly valuable skill because demoralising is so strong. Unlike the feint action, intimidation has skill feats that support demoralisation. It even gains extra power through the Divine Disharmony class feat, which allows you to gain a powerful accuracy boost against most enemies even after they’re immune to your Demoralize. You will likely have multiple members in the party boosting this, but you’re the best at using it thanks to your key charisma, and you can take turns scaring foes one after the other anyway.

**1<sup>st</sup> Level:**
- <Rating content="Group Coercion" ratings={[2]}/> GMs are more likely to be literal about intimidation rules than diplomacy. As such, this is a handy way to threaten a group of people into obedience.
- <Rating content="Intimidating Glare" ratings={[4]}/> This feat is not optional for anyone interested in demoralisation in combat. Take it so you can intimidate a grizzly bear with a stern look. Note that the loss of the auditory trait probably means that you can’t use it to frighten targets who can’t see you. I once had a fighter jumping in all action hero and trying to critically demoralise a kobold who wasn’t looking at him.
- <Rating content="Quick Coercion" ratings={[2]}/> In a tense situation, you’re more likely to want intimidation than diplomacy. For those situations, quick coercion has you covered. Again, this is assuming your GM adheres to rules-as-written and insists that your quick threat or desperate plea takes the full listed duration.

**2<sup>nd</sup> Level:**
- <Rating content="Intimidating Prowess" ratings={[3]}/> A solid boost to intimidation just for boosting strength. Don’t take this if you have regalia or use dexterity. 
- <Rating content="Lasting Coercion" ratings={[3]}/> Your threats are effective much longer. At legendary intimidation, the target has to comply with your demands for a month. Once you’ve got everything you need out of a thug, tell them they don’t want to sell death sticks.
- <Rating content="Terrifying Resistance" ratings={[4]}/> A powerful bonus to your saving throws against targets you successfully demoralise. Even if most spellcasters have high will DCs, you’ve got a high modifier and not much access to circumstance bonuses that are this widely applicable. Becomes even more useful the higher you level, so you may want to take this later or retrain for it once you’re a high enough level.

**7<sup>th</sup> Level:**
- <Rating content="Battle Cry" ratings={[4]}/> At the start of battle, you get a free action to demoralise. Thaumaturges <i>love</i> free stuff.
- <Rating content="Terrified Retreat" ratings={[4]}/> You are already very likely to critically succeed at the Demoralize action, especially against lower level enemies. You can use this in a variety of ways mid-combat, such as using it to trigger your Weapon reaction, spending three (and free) actions to target multiple mooks at once to get them all running away, force an enemy to break flanking by fleeing etc.

**15<sup>th</sup> Level:**
- <Rating content="Scare to Death" ratings={[4]}/> This skill feat provides you with an upgraded version of the Demoralize action, assuming you are targeting a creature with a level lower than or equal to yours. Even so, this is very reliable against higher level foes with low will DCs, as even a failure effect is equal to the Demoralize action’s success effect, and you can still use both actions against targets since this isn’t actually a Demoralize action (though that means it doesn’t interact with feats that improve Demoralize).

#### <Rating content="Lore" ratings={[1]}/>
The only lore skill you really care about is Esoteric Lore. Everything else requires investment in your least favourite attribute. Still, since that is an automatically scaling lore skill, you do get access to all the lore feats.
- <Rating content="Additional Lore" ratings={[2]}/> In campaigns designed around a specific concept or creature, this is a decent choice, even with your usually low intelligence. Can easily be replaced by the Tome though.
- <Rating content="Experienced Professional" ratings={[2]}/> You’ll make most of your money adventuring, not earning income. If your GM provides large swathes of downtime, this might come in handy.
- <Rating content="Unmistakable Lore" ratings={[4]}/> This works with Esoteric Lore. Combine this with all the other RK bonuses you have access to, and your GM will just start handing out monster statblocks directly to you. This is a little worse than normal because you have Dubious Knowledge which means that you won’t exactly know if you’ve failed, but it’s still incredibly useful.
- <Rating content="Legendary Professional" ratings={[2]}/> The same as the Experienced Professional feat. 

#### <Rating content="Medicine" ratings={[2]}/>
Medicine is an incredibly valuable skill, but it only becomes great if you take several feats. The thaumaturge isn’t as good at using it due to its tight action economy, but with decent wisdom and/or the assurance feat you can fill in healing duties in a pinch. Could probably just use your scrolls of heal though. You don’t actually care much for battle medicine since it requires free hands, which reduces its value greatly. The skill’s still useful for resourceless out of combat healing, but someone else in the party ought to be better suited for it. You can replace the condition and persistent damage cleansers with spells decent enough anyway.

#### <Rating content="Nature" ratings={[2]}/>
As a wisdom based skill, Nature is a bit more reliable than its int-based siblings when it comes to the tradition skills. However, the feats that require nature are generally quite mediocre outside of the generic multi tradition feats. Your host of bonuses to RK coupled with diverse lore can fill in for the skill decent enough against creatures like the Fey anyway. You’re also automatically trained in it for the purposes of TMI.

#### <Rating content="Occultism" ratings={[2]}/>
While it fits the class flavour excellently, the reliance on intelligence and the thaumaturge’s base class features don’t do a lot for it. It’s got some fun low level feats though.

**1<sup>st</sup> Level:**
- <Rating content="Deceptive Worship" ratings={[1]}/> Use Deception. 
- <Rating content="Oddity Identification" ratings={[2]}/> Some neat little extra info, though a well built RK build can probably discern this well enough anyway.
- <Rating content="Read Psychometric Resonance (U)" ratings={[2]}/> This is uncommon, but it fits your flavour excellently and has some fun bonuses that don’t actually require any investment in occultism beyond training in the skill, which you get automatically.
- <Rating content="Root Magic" ratings={[2]}/> It’s a decent once per day bonus to give an ally against a spell or haunt. If you are increasing Occultism, perhaps to qualify for occult spellcasting archetypes, bump its rating a step.

- <Rating content="Performance" ratings={[1]}/>
You aren’t a bard, and even if you have its archetype it isn’t necessary to push this skill unless you take certain feats, and even then you should just pick it up with the tome. Just invest in Diplomacy, given that’s basically what most of its skill feats try to emulate anyway. 

#### <Rating content="Religion" ratings={[3]}/>
This is a wisdom based tradition skill with some really solid feats, which is why it gets a higher rating than the other skills. Your faith is relevant to some feats, but being faithful is fine unless you also invested in medicine and want access to the Mortal and Godless Healing feats, which are both solid options that require you to be an atheist.

**1<sup>st</sup> Level:**
- <Rating content="Pilgrim's Token" ratings={[3]}/> This provides a bonus roughly equivalent to a +1 to initiative. It stacks with every other initiative enhancer due to its nonstandard design. You have a decent perception, so if you tie with an enemy this likely means you’ll go first or amongst the first in combat, which is very powerful if you invest in the right options and plenty of magic items.
- <Rating content="Student of the Canon" ratings={[2]}/> You can’t critically fail knowledge checks about religious symbols, rites, practices, and organisations. This can provide some decent value, especially in cities who are especially devoted. Bump it up a step in those cases, especially if the faiths they’re devoted to include those you follow.

**7<sup>th</sup> Level:**
- <Rating content="Sacred Defense" ratings={[3]}/> If you invested in religion at least up to master this is a neat bonus, especially if you don’t have other reliable sources of temp HP. That’s not very hard to do as a thaumaturge though.

**15<sup>th</sup> Level:**
- **Divine Guidance:** It’s entirely up to your GM how valuable this feat is. I can’t provide an objective rating on it.

### <Rating content="Society" ratings={[1]}/>
Mediocre. You aren’t automatically trained in this skill, but that’s because it provides little value to you. Many of its feats just substitute the effects of Diplomacy but with Society, which is useless for you. Leave this to the investigators.

#### <Rating content="Stealth" ratings={[4]}/>
Stealth is always a handy skill to have. Every dexturge will want to invest in it, and you can also use it to replace initiative, which is especially handy if you have a wisdom flaw. It also provides an excellent pair of actions in hide and sneak to use on turns you don’t want to be an obvious target.

**1<sup>st</sup> Level:**
- <Rating content="Experienced Smuggler" ratings={[3]}/> Many weapons a dexturge would use would qualify for this feat. You might even smuggle some of your allies’ lighter weapons into situations where weapons are banned. This is still quite situational though, and as you level higher you can probably just buy rings of discretion or even get a raiment rune on a runestone.
- <Rating content="Terrain Stalker" ratings={[2]}/> This is a funny feat because you’re suddenly incentivised to get into difficult terrain as often as possible, though your allies might not enjoy that. Underbrush is probably the most common option you’ll frequent.

**2<sup>nd</sup> Level:**
- <Rating content="Armored Stealth" ratings={[3]}/> This is quite solid at lower levels when your dex isn’t good enough for lighter armour and you don’t have the strength to ignore the check penalty, but still want to use stealth for initiative, especially if you have a strength or wisdom flaw. Combines well with the chain shirt to basically ignore any check penalty. You’ll want to retrain it at higher levels depending on your strength and dexterity modifiers. 
- <Rating content="Quiet Allies" ratings={[3]}/> When the whole party makes stealth checks, there are several points of failure. Sneaking as a group is almost impossible without this feat. If your whole party is decently stealthy, this feat is extraordinarily valuable.
- <Rating content="Shadow Mark" ratings={[2]}/> Get a decent bonus the rare time you tail a target. It is a debuff on the target’s perception, which means it stacks with any other stealth bonuses you might have. It’s still quite situational and you don’t have much reason to shadow a target anyway, especially since you aren’t reliant on features like Pursue A Lead, and Recall Knowledge doesn’t require you to constantly have the target in your sights.

**7<sup>th</sup> Level:**
- <Rating content="Foil Senses" ratings={[4]}/> This feat is basically mandatory by the mid-levels. Every monster and their mother has a special sense to detect you with, so bypassing them with a single mid-level feat is a great offer.
- <Rating content="Swift Sneak" ratings={[3]}/> If you want to maximise your stealth, doing so quickly is very useful. It is ideal for moving between points of cover when targets aren’t looking, or just getting out of dodge after your failure alerts a guard without completely revealing you.

**15<sup>th</sup> Level:**
- <Rating content="Legendary Sneak" ratings={[4]}/> You can hide without cover. You get some other extra goodies, but none of them compare to that bonus. A fantastic capstone.

#### <Rating content="Survival" ratings={[1]}/>
If you’re not playing in a survival themed campaign, this has little value to you. Otherwise, there are some useful feats, but you can accomplish a lot with just spells anyway.

#### <Rating content="Thievery" ratings={[3]}/>
As a thaumaturge, you are likely to be the party’s trap finder and disabler. Thievery is a useful skill to pick up for that, but in general it’s a decent choice for dexturges. You don’t even actually need to steal anything, since adventuring is more reliable anyway, but in a campaign focused around espionage and stealth, having a reliable lock picker and trap finder is great, especially when coupled with the Lantern and Tome implements.

**1<sup>st</sup> Level:**
- <Rating content="Concealing Legerdemain" ratings={[1]}/> It’s weird that this isn’t just a base effect of the thievery skill. You most likely have stealth proficiency anyway, so just pick up Experienced Smuggler. 
- <Rating content="Pickpocket" ratings={[2]}/> When the party needs to steal something, the odds of you getting within arm’s reach of the guy carrying it without being in active combat is unlikely.
- <Rating content="Subtle Theft" ratings={[2]}/> Observers get a penalty to spot you stealing from your primary target. It is a handy bonus, but the scenario remains uncommon. A bit more useful in crowded urban environments.

**2<sup>nd</sup> Level:**
- <Rating content="Wary Disarmament" ratings={[2]}/> You get a decent bonus to your defences against traps you failed to disarm. You hopefully won’t have to rely on this feat, but it’s a handy safety booster when it comes up, especially given your poor (though better than other thaums) reflex saves, which a lot of traps target.

**7<sup>th</sup> Level:**
- <Rating content="Quick Unlock" ratings={[2]}/> Speed up your lockpicking. This is a bit better than other feats that speed up an activity because lock picking is actually a risky activity; This gives you more time before someone wises up to you and your party’s activities. Still a bit costly for a 7th level skill feat requiring master proficiency.

**15<sup>th</sup> Level:**
- <Rating content="Legendary Thief" ratings={[2]}/> I would like it a bit more if you were able to use at least a worse version of it as even a 3 action activity. It doesn’t really have much use in game other than for boasting about your talents in the thieves’ guilds and the things you’ve stolen under bizarre and impossible circumstances.

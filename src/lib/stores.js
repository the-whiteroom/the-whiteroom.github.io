import { writable } from "svelte/store";

export const cards = writable([
    {
        title : "What is a damage dealer, anyway?",
        blurb : [
            "Sometimes it seems like everyone can agree that damage dealers are important, but not what they are.",
            "Read on to see how different characters stack up in terms of damage, which ones are the \"damage dealers\" - and which aren't."
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "Rogue: if confirmation bias was a class",
        blurb : [
            "Sneak Attack, Expertise, Cunning Action - almost every feature Rogues get feels strong, but isn't. Rogues struggle to find a niche as damage dealers, skill monkeys, or skirmishers.",
            "And yet, anybody who’s played Rogue but not crunched the numbers will tell you that Rogues feel like they’re contributing effectively. Why is that?"
        ],
        tags : ['D&D 5e', 'Classes']
    },
    {
        title : "A weighty decision: Medium vs Heavy Armor",
        blurb : [
            "Ever wondered why most characters are better off wearing medium armor?",
            "Or which are the exceptions to this rule?",
            "Wonder no more, with this quick reference that answers all those and more!"
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "No, you shouldn't dip Paladin 2",
        blurb : [
            "It’s no secret that people love Smite. Who wouldn’t? It lets you roll more dice, and everybody loves that.",
            "Except Smite has a horrible, dark secret. It’s not much damage, and it’s never worth the cost of your precious spell slots, nor the danger it puts you in."
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "On tanking",
        blurb : [
            "The “tank” is one of the most enduring fantasy archetypes ever. The Barbarian, protecting his companions from a mighty foe. The Paladin, an impassable wall holding back the forces of darkness. The Fighter, a whirlwind of steel and death that no enemy may pass unscathed. With how fundamental a part of the genre it is, anyone would reasonably expect that D&D - a game in this genre - would support it."
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "Stop casting Spiritual Weapon",
        blurb : [
            "Spiritual Weapon is one of the most iconic Cleric spells in D&D 5e.",
            "But does it live up to its reputation as a potent and versatile offensive spell?",
            "Not at all.",
        ],
        tags : ['D&D 5e', 'Spells']
    },
    {
        title : "Thaumaturge optimisation guide",
        blurb : [
            "Want to play a worker of wonders? Smite undead, fiends, lycanthropes and other evil beings harnessing the power of myths and superstition? Recall long-lost information through esoteric means and rites? The thaumaturge is for you! This guide exists to help players, both old and new to pathfinder 2e, create the strongest and most fun builds with this versatile class."
        ],
        tags : ['PF2e', 'Classes']
    },
    {
        title : "Healing: An Unhealthy Mechanic",
        blurb : [
            "Healing is a classic fantasy archetype, so many players, especially those playing clerics, turn to it in a vain attempt to keep their allies alive.",
            "However, DnD 5e heavily disincentives this method of support in several ways, leading to it being a poor choice in nearly all cases."
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "Hold Person: An overrated spell",
        blurb : [
            "Hold Person is often touted as a fantastic spell. But is it really that great?",
        ],
        tags : ['D&D 5e', 'Spells']
    },
    {
        title : "Hex and Hunter's Mark",
        blurb : [
            "With the release of One D&D in sight, two spells in particular have been getting a lot of attention. Both of these spells were trap options in 5th edition, and despite being nerfed in One D&D, look to be set to become a core part of two of the game's most popular classes.",
            "These spells are, of course, Hex and Hunter's Mark.",
        ],
        tags : ['D&D 5e', 'Spells','One D&D']
    },
    //{
    //    title : "PF2e: it's just better",
    //    blurb : [
    //        "words",
    //    ],
    //    tags : ['PF2e']
    //},
    //{
    //    title : "Druid: A simple guide to the game's most complicated class",
    //    blurb : [
    //        "words",
    //    ],
    //    tags : ['D&D 5e', 'Classes']
    //},
    //{
    //    title : "Misconceptions about action economy",
    //    blurb : [
    //        "History of the term (zee bashew, rpgs, comp pokemon), defining action economy in a turn based game, doing more isn't always good, debuffing enemies is good action economy",
    //        "Examples of good/bad/conditional/overated (Conjure Animals, Hypno Pattern, PWT, SW, Haste, Quicken)",
    //    ],
    //    tags : ['D&D 5e', 'Theory']
    //},
    //{
    //    title : "Ranged vs melee",
    //    blurb : [
    //        "words",
    //    ],
    //    tags : ['D&D 5e', 'Theory']
    //},
])
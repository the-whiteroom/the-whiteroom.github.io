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
        title : "Medium vs heavy armor",
        blurb : [
            "Ever wondered why most characters are better off wearing medium armor?",
            "Or which are the exceptions to this rule?",
            "Wonder no more, with this quick reference that answers all those and more!"
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "Ranged vs melee",
        blurb : [
            "words",
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "On tanking",
        blurb : [
            "barbarian not durable",
            "paladin not durable",
            "armored caster extremely durable"
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "Misconceptions about action economy",
        blurb : [
            "History of the term (zee bashew, rpgs, comp pokemon), defining action economy in a turn based game, doing more isn't always good, debuffing enemies is good action economy",
            "Examples of good/bad/conditional/overated (Conjure Animals, Hypno Pattern, PWT, SW, Haste, Quicken)",
        ],
        tags : ['D&D 5e', 'Theory']
    },
    {
        title : "Stop casting Spiritual Weapon",
        blurb : [
            "link to article on action economy",
        ],
        tags : ['D&D 5e', 'Spells']
    },
    {
        title : "Rogue: if confirmation bias was a class",
        blurb : [
            "words",
        ],
        tags : ['D&D 5e', 'Classes']
    },
    {
        title : "PF2e: it's just better",
        blurb : [
            "words",
        ],
        tags : ['PF2e']
    },
    {
        title : "Druid: A simple guide to the game's most complicated class",
        blurb : [
            "words",
        ],
        tags : ['D&D 5e', 'Classes']
    },
    {
        title : "No, you shouldn't dip Paladin 2",
        blurb : [
            "words",
        ],
        tags : ['D&D 5e', 'Theory']
    },
])
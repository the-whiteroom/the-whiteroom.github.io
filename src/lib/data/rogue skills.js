import { scales } from "chart.js";

const skills = {
    'Acrobatics' : 'DEX',
    'Animal Handling' : 'WIS',
    'Arcana' : 'INT',
    'Athletics' : 'STR',
    'Deception' : 'CHA',
    'History' : 'INT',
    'Insight' : 'WIS',
    'Intimidation' : 'CHA',
    'Investigation' : 'INT',
    'Medicine' : 'WIS',
    'Nature' : 'INT',
    'Perception' : 'WIS',
    'Performance' : 'CHA',
    'Persuasion' : 'CHA',
    'Religion' : 'INT',
    'Sleight of Hand' : 'DEX',
    'Stealth' : 'DEX',
    'Survival' : 'WIS',
}

const prof = 2;

const cleric_proficiencies = ['Insight', 'Religion', 'Medicine', 'Persuasion'];

function mod(stat){
    return Math.floor((stat-10)/2);
}

const cleric_stats = {
    'STR' : 8, // 8
    'DEX' : 14, // 14
    'CON' : 15, // 15 (for rescon)
    'INT' : 8, // 8
    'WIS' : 17, // 17
    'CHA' : 12, // 12
}
const cleric_skills = Object.entries(skills).map(e => mod(cleric_stats[e[1]]) + prof*cleric_proficiencies.includes(e[0]) + 2.5);

const rogue_proficiencies = ['Sleight of Hand', 'Stealth', 'Perception', 'Persuasion', 'Deception', 'Insight'];
const rogue_expertises = ['Perception', 'Stealth'];
const rogue_stats = {
    'STR' : 8, // 8
    'DEX' : 17, // 17
    'CON' : 16, // 16
    'INT' : 8, // 8
    'WIS' : 13, // 13 (for reswis)
    'CHA' : 12, // 12
}
const rogue_skills = Object.entries(skills).map(e => mod(rogue_stats[e[1]]) + prof*rogue_proficiencies.includes(e[0]) + prof*rogue_expertises.includes(e[0]));

export const data = {
    labels : Object.keys(skills),
    datasets : [
        {
            label: 'Rogue',
            data: rogue_skills,
            borderColor: '#555752',
            backgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 5,
        },
        {
            label: 'Cleric',
            data: cleric_skills,
            borderColor: '#91a1b2',
            backgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 5,
        }
    ]
}

function footer(tooltipItems){
    let data = {};
    if(tooltipItems[0].dataset.label == 'Cleric'){
        let skill = tooltipItems[0].label;
        let stat = skills[skill];
        let modifier = mod(cleric_stats[stat]);
        data[stat] = cleric_stats[stat] + ' (' + (modifier <0?'':'+')+modifier + ')';
        if(cleric_proficiencies.includes(skill)){
            data[skill + ' proficiency'] = '+'+prof;
        }
        data['Guidance'] = '+2.5'
    } else if(tooltipItems[0].dataset.label == 'Rogue'){
        let skill = tooltipItems[0].label;
        let stat = skills[skill];
        let modifier = mod(rogue_stats[stat]);
        data[stat] = rogue_stats[stat] + ' (' + (modifier <0?'':'+')+modifier + ')';
        if(rogue_proficiencies.includes(skill)){
            data[skill + ' proficiency'] = '+'+prof;
        }
        if(rogue_expertises.includes(skill)){
            data[skill + ' expertise'] = '+'+prof;
        }
    }
    return Object.entries(data).map(e => e[0]+': '+e[1]);
}

export const options = {
    scales : {
        r : {
            min: -2,
            ticks : {
                callback: (value, index, ticks) => {
                    return (value<0 ? '' : '+')+value;
                }
            }
        }
    },
    plugins : {
        tooltip : {
            callbacks : {
                afterBody: footer
            }
        }
    }
}
//compute baselines
const levels = [...Array(20).keys()].map(l => l+1);
const prof = levels.map(l => Math.floor(l/4 + 7/4));
const ac = levels.map(l => 13+(l>=4)+(l>=5)+(l>=8)+(l>=10)+(l>=13)+(l>=17));
const crit = 0.05;
const adv_crit = 1-(1-crit)**2;


// fighter baseline
const mod = levels.map(l => 3+(l>=6)+(l>=8));
const fighter_attack = prof.map((e,i) => e+mod[i]+2-5*(levels[i]>=4));
const fighter_hit = fighter_attack.map((e,i) => (21-ac[i]+e)/20);
const fighter_attacks = levels.map(l => 2+(l>=5)+(l>=11)+(l>=20)+((l>=2)+(l>=5)+(l>=11)+(l>=20))*((l>=17)+1)/8);
const fighter_hit_damage = levels.map((e,i) => 3.5+mod[i]+10*(e>=4));
const fighter_crit_damage = 3.5;
const fighter_DPR = fighter_attacks.map((e,i) => e*(fighter_hit[i]*fighter_hit_damage[i] + crit*fighter_crit_damage));

// fighter baseline (advantage)
const fighter_adv_hit = fighter_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**2);
const fighter_adv_DPR = fighter_attacks.map((e,i) => e*(fighter_adv_hit[i]*fighter_hit_damage[i] + adv_crit*fighter_crit_damage));

// rogue
const sneak_dice = levels.map(l => Math.floor((l+1)/2,1));
const dex = levels.map(l => 3+(l>=8)+(l>=12));

const unmodified_attack = prof.map((e,i) => e+dex[i]); // unmodified attacks are always made without SS and always add sneak attack
const unmodified_hit = unmodified_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**2); //made with advantage
const unmodified_damage = unmodified_hit.map((e,i) => e*(3.5+dex[i]+3.5*sneak_dice[i]) + adv_crit*(3.5+3.5*sneak_dice[i]));

const ss_attack = prof.map((e,i) => e+dex[i]-5*(levels[i]>=4)); // SS attacks are always made with SS and never add sneak attack
const ss_hit = ss_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**2);
const ss_damage = ss_hit.map((e,i) => e*(3.5+dex[i]+10*(levels[i]>=4)) + adv_crit*3.5);

//no external advantage source - BA generate advantage, action one unmodified attack
const ba_DPR = unmodified_damage;
// external advantage source
const ext_DPR = unmodified_hit.map((e,i) => unmodified_damage[i] + e * ss_damage[i] + (1-e) * unmodified_damage[i]);

console.log(ext_DPR);

function round(num, decimalPlaces = 0) {
    if (num < 0)
        return -round(-num, decimalPlaces);

    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
}

function header(tooltipItems){
    return 'Level '+tooltipItems[0].label;
}

function footer(tooltipItems){
    let index = tooltipItems[0].dataIndex;
    let data = {};
    if(tooltipItems[0].dataset.label == 'Fighter Baseline'){
        data = {
            'DEX modifier': '+'+mod[index],
            'Target AC': ac[index],
            'Hit chance': round(fighter_hit[index]*100,2)+'%',
            'Attacks' : fighter_attacks[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit' : fighter_hit_damage[index],
            'Additional damage on crit' : fighter_crit_damage
        }
    }
    return Object.entries(data).map(e => e[0]+': '+e[1]);
}

export const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Fighter Baseline",
        data: fighter_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#7f513e',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Fighter Baseline (External advantage source)",
        data: fighter_adv_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#7f513e',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
        borderDash: [5,],
      },
      {
        label: "Rogue (BA advantage generation)",
        data: ba_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#555752',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Rogue (External advantage source)",
        data: ext_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#555752',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
        borderDash: [5,],
      },
    ],
};

export const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Sustained DPR',
            },
            min: 0,
        },
        x: {
            title: {
            display: true,
            text: 'Level',
            }
        }
    },
    plugins: {
        legend: {
            display: true,
        },
        tooltip: {
            callbacks : {
                title : header,
                afterBody : footer
            }
        }
    },
    maintainAspectRatio: false,
};
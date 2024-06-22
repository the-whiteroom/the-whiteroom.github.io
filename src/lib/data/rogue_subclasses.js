//compute baselines
const levels = [...Array(18).keys()].map(l => l+3);
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
const dex = levels.map(l => 3+(l>=8)+(l>=10));

const unmodified_attack = prof.map((e,i) => e+dex[i]);
const ss_attack = prof.map((e,i) => e+dex[i]-5*(levels[i]>=4));

const unmodified_hit = unmodified_attack.map((e,i) => (21-ac[i]+e)/20);
const unmodified_adv_hit = unmodified_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**2);
const ss_hit = ss_attack.map((e,i) => (21-ac[i]+e)/20);
const ss_adv_hit = ss_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**2);

// arcane trickster - 1 adv/SA, 1 unmodified/SS or 1 unmodified/SA (depends on first hit)
const arcane_attack_1 = unmodified_adv_hit.map((e,i) => e*(3.5+dex[i]+3.5*sneak_dice[i])+adv_crit*(3.5+3.5*sneak_dice[i]));
const arcane_attack_2_ss = ss_hit.map((e,i) => e*(3.5+dex[i]+10*(levels[i]>=4))+crit*3.5);
const arcane_attack_2_sa = unmodified_hit.map((e,i) => e*(3.5+dex[i]+3.5*sneak_dice[i])+crit*(3.5+sneak_dice[i]));
const arcane_DPR = unmodified_adv_hit.map((e,i) => arcane_attack_1[i] + e*arcane_attack_2_ss[i] + (1-e)*arcane_attack_2_sa[i]);

// swashbuckler - 1 unmodified/SA (BA cunning action)
const swash_DPR = unmodified_hit.map((e,i) => e*(4.5+dex[i]+3.5*sneak_dice[i]) + crit*(4.5+3.5*sneak_dice[i]));


// phantom - 1 adv/SA (BA Steady Aim) and then some additional rider from Wails From The Grave
const phantom_wails = prof.map((e,i) => e*3.5*Math.ceil(sneak_dice[i]/2)*(levels[i]<9)); //total DPR from WFtG over an adventuring day (ignoring hits) before level 9, when we can use it every turn
const phantom_DPR = unmodified_adv_hit.map((e,i) => e*(3.5+dex[i]+3.5*sneak_dice[i]+(levels[i]>=9)*3.5*Math.ceil(sneak_dice[i]/2)*(1+(levels[i]>=17))) + adv_crit*(3.5+3.5*sneak_dice[i]) + phantom_wails[i]/4/8);

//inquisitive - 1 unmodified/SA, 1 unmodified/SS or 1 unmodified/SA (depends on first hit)
const inquisitive_sa = unmodified_hit.map((e,i) => e*(3.5+dex[i]+3.5*sneak_dice[i]) + crit*(3.5+dex[i]+3.5*sneak_dice[i]));
const inquisitive_ss = ss_hit.map((e,i) => e*(3.5+dex[i]+10*(levels[i]>=4)) + crit*3.5);
const inquisitive_DPR = unmodified_hit.map((e,i) => inquisitive_sa[i] + e*inquisitive_ss[i] + (1-e)*inquisitive_sa[i]);

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
    } else if (tooltipItems[0].dataset.label == 'Arcane Trickster'){
        data = {
            'DEX modifier': '+'+mod[index],
            'Target AC': ac[index],
            'Hit chance': round(fighter_adv_hit[index]*100,2)+'%',
            'Attack 1 damage' : round(arcane_attack_1[index],5),
            'Attack 2 damage' : round(arcane_attack_2_sa[index],5),
            'Attack 2 damage (SS)' : round(arcane_attack_2_ss[index],5)
        }
    } else if (tooltipItems[0].dataset.label == 'Phantom'){
        data = {
            'DEX modifier': '+'+dex[index],
            'Target AC': ac[index],
        }
    } else if (tooltipItems[0].dataset.label == 'Swashbuckler'){
        data = {
            'DEX modifier': '+'+dex[index],
            'Target AC': ac[index],
            'Hit chance': round(unmodified_hit[index]*100,2)+'%',
            'Damage on hit' : 3.5+dex[index]+3.5*sneak_dice[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Additional damage on crit' : 3.5+3.5*sneak_dice[index],
        }
    } else if (tooltipItems[0].dataset.label == 'Inquisitive'){
        data = {
            'DEX modifier': '+'+dex[index],
            'Target AC': ac[index],
            'Hit chance (Sneak Attack)' : round(unmodified_hit[index]*100,2)+'%',
            'Hit chance (Sharpshooter)' : round(ss_hit[index]*100,2)+'%',
            'Damage on hit (Sneak Attack)' : round(3.5+dex[index]+3.5*sneak_dice[index],5),
            'Damage on hit (Sharpshooter)' : round(3.5+dex[index]+10*(levels[index]>=4),5),
            'Crit chance' : round(crit*100,2)+'%',
            'Additional damage on crit (Sneak Attack)' : round(3.5+3.5*sneak_dice[index],5),
            'Additional damage on crit (Sharpshooter)' : 3.5,
            'Damage per attack (Sneak Attack)' : round(inquisitive_sa[index],5),
            'Damage per attack (Sharpshooter)' : round(inquisitive_ss[index],5),
            'Damage (1st attack)' : round(inquisitive_sa[index],5),
            'Damage (2nd attack)' : round(unmodified_hit[index]*inquisitive_ss[index] + (1-unmodified_hit[index])*inquisitive_sa[index],5)
        }
    }
    return Object.entries(data).map(e => e[0]+': '+e[1]);
}

export const data = {
    labels: levels,
    datasets: [
      {
        label: "Arcane Trickster",
        data: arcane_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#2a9d8f',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Inquisitive",
        data: inquisitive_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#e9c46a',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Phantom",
        data: phantom_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#f4a261',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Swashbuckler",
        data: swash_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#e76f51',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Fighter Baseline",
        data: fighter_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#7f513e',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
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
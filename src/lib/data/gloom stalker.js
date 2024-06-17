//compute baselines
const levels = [...Array(20).keys()].map(l => l+1);
const prof = levels.map(l => Math.floor(l/4 + 7/4));
const ac = levels.map(l => 13+(l>=4)+(l>=5)+(l>=8)+(l>=10)+(l>=13)+(l>=17));
const crit = 0.05;

const dex = levels.map(l => 3+(l>=6)+(l>=8));
const fighter_attack = prof.map((e,i) => e+dex[i]+2-5*(levels[i]>=4));
const fighter_hit = fighter_attack.map((e,i) => (21-ac[i]+e)/20);
const fighter_attacks = levels.map(l => 2+(l>=5)+(l>=11)+(l>=20)+((l>=2)+(l>=5)+(l>=11)+(l>=20))*((l>=17)+1)/8);
const fighter_hit_damage = levels.map((e,i) => 3.5+dex[i]+10*(e>=4));
const fighter_crit_damage = 3.5;
const fighter_DPR = fighter_attacks.map((e,i) => e*(fighter_hit[i]*fighter_hit_damage[i] + crit*fighter_crit_damage));

const gloom_dex = levels.map(l => 3+(l>=8)+(l>=12));
const gloom_attack = prof.map((e,i) => e+gloom_dex[i]+2-5*(levels[i]>=4));
const gloom_hit = gloom_attack.map((e,i) => (21-ac[i]+e)/20);
const gloom_attacks = levels.map(l => 2+(l>=5)); // TODO: account for Stalker's Flurry
const gloom_hit_damage = levels.map((e,i) => 3.5+gloom_dex[i]+10*(e>=4));
const dread_ambusher_damage = levels.map((e,i) => 3.5+gloom_dex[i]+4.5+10*(e>=4));
const gloom_crit_damage = 3.5;
const dread_ambusher_crit_damage = 3.5+4.5;

// DPR for Gloom is effectively split into two cases; DPR on turn 1, and DPR on the 3 succeeding turns
// the term involving e is accounting for Stalker's Flurry (TODO:)
const gloom_nova = gloom_attacks.map((e,i) => (e+(1-gloom_hit[i]**(e+1))*(levels[i]>=11))*(gloom_hit[i]*gloom_hit_damage[i] + crit*gloom_crit_damage) + (gloom_hit[i]*dread_ambusher_damage[i] + crit*dread_ambusher_crit_damage));
const gloom_sustain = gloom_attacks.map((e,i) => (e+(1-gloom_hit[i]**e)*(levels[i]>=11))*(gloom_hit[i]*gloom_hit_damage[i] + crit*gloom_crit_damage));

//effective DPR is over 3 rounds where monsters can act, if PWT active
//levels 1-4: no PWT (mean turns: 4)
//levels 5-6: 4 encounters PWT, 4 without (mean turns: 3.5)
//levels 7-8: 6 encounters PWT, 2 without (mean turns: 3.25)
//levels 9+: all PWT (mean turns: 3)
const rounds = levels.map(e => e < 5 ? 4 : e<7 ? 3.5 : e<9 ? 3.25 : 3);
console.log(rounds);
const gloom_DPR = gloom_sustain.map((e,i) => (levels[i]<3 ? 4*e : gloom_nova[i]+3*e)/(rounds[i]));

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
    let data;
    if(tooltipItems[0].dataset.label == 'Fighter Baseline'){
        data = {
            'DEX modifier': '+'+dex[index],
            'Target AC': ac[index],
            'Hit chance': round(fighter_hit[index]*100,2)+'%',
            'Attacks' : fighter_attacks[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit' : fighter_hit_damage[index],
            'Additional damage on crit' : fighter_crit_damage
        }
    } else if(tooltipItems[0].dataset.label == 'Gloom Stalker'){
        data = {
            'DEX modifier': '+'+gloom_dex[index],
            'Target AC': ac[index],
            'Hit chance': round(gloom_hit[index]*100,2)+'%',
            'Crit chance' : round(crit*100,2)+'%',
            'Attacks (Attack action)' : gloom_attacks[index],
            'Damage on hit (Attack action)' : gloom_hit_damage[index],
            'Additional damage on crit (Attack action)' : gloom_crit_damage,
        }
        if(levels[index]>=3){
            data['Attacks (Dread Ambusher)'] = 0.25;
            data['Damage on hit (Dread Ambusher)'] = dread_ambusher_damage[index];
            data['Damage on crit (Dread Ambusher)'] = dread_ambusher_crit_damage;
        }
        if(levels[index]>=5){
            data['PWT uptime'] = levels[index] < 5 ? '0%' : levels[index]<7 ? '50%' : levels[index]<9 ? '75%' : '100%';
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
        label: "Gloom Stalker",
        data: gloom_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#507F62',
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
                text: 'DPR',
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
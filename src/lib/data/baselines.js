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

const cha = levels.map(l => 3+(l>=4)+(l>=8));
const warlock_attack = prof.map((e,i) => e+cha[i]);
const warlock_hit = warlock_attack.map((e,i) => (21-ac[i]+e)/20);
const warlock_attacks = levels.map(l => 1+(l>=5)+(l>=11)+(l>=17));
const warlock_hit_damage = cha.map((e,i) => 5.5+3.5+e*(levels[i]>=2));
const warlock_crit_damage = 5.5+3.5;
const warlock_DPR = warlock_attacks.map((e,i) => e*(warlock_hit[i]*warlock_hit_damage[i] + crit*warlock_crit_damage))

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
    } else if(tooltipItems[0].dataset.label == 'Warlock Baseline'){
        data = {
            'DEX modifier': '+'+cha[index],
            'Target AC': ac[index],
            'Hit chance': round(warlock_hit[index]*100,2)+'%',
            'Attacks' : warlock_attacks[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit' : warlock_hit_damage[index],
            'Additional damage on crit' : warlock_crit_damage
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
        label: "Warlock Baseline",
        data: warlock_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#7b469b',
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
    }
};
//compute baselines
const levels = [...Array(19).keys()].map(l => l+2);
const prof = levels.map(l => Math.floor(l/4 + 7/4));
const ac = levels.map(l => 13+(l>=4)+(l>=5)+(l>=8)+(l>=10)+(l>=13)+(l>=17));
const crit = 0.05;

const dex = levels.map(l => 3+(l>=6)+(l>=8));
const fighter_attack = prof.map((e,i) => e+dex[i]+2-5*(levels[i]>=4));
const fighter_hit = fighter_attack.map((e,i) => (21-ac[i]+e)/20);
const fighter_attacks = levels.map(l => 3+2*(l>=5)+2*(l>=11)+2*(l>=20));
const fighter_hit_damage = levels.map((e,i) => 3.5+dex[i]+10*(e>=4));
const fighter_crit_damage = 3.5;
const fighter_nova = fighter_attacks.map((e,i) => e*(fighter_hit[i]*fighter_hit_damage[i] + crit*fighter_crit_damage));

const str = levels.map(l => 3+(l>=4)+(l>=8));
const paladin_attack = prof.map((e,i) => e+str[i]);
const paladin_hit = paladin_attack.map((e,i) => (21-ac[i]+e)/20);
const paladin_attacks = levels.map(l => 2 + (l>=5));
const crit_hit = paladin_hit.map(e => crit/e);
const paladin_hit_damage = str.map((e,i) => 5.5+e +4.5*(levels[i]>=11));
const paladin_crit_damage = levels.map(e => 3.5+4.5*(e>=11));
const paladin_1_hits = paladin_hit.map((e,i) => 1-(1-e)**paladin_attacks[i]);
const paladin_2_hits = paladin_hit.map((e,i) => levels[i]<5 ? e**2 :3*e**2*(1-e)+e**3);
const paladin_3_hits = paladin_hit.map((e,i) => levels[i]<5 ? 0 : e**3);
const smite_1 = levels.map(e => (Math.floor(e/4+3/4,1)-(e>16))*4.5);
const smite_2 = levels.map(e => (Math.floor(e/4+3/4,1)-(e>12)+(e>14)-(e>16))*4.5);
const smite_3 = levels.map(e => ((e>2)+(e>6)+(e>10)+(e>16))*4.5);
const hit_damage = paladin_attacks.map((e,i) => e*(paladin_hit[i]*paladin_hit_damage[i] + crit*paladin_crit_damage[i]));
const smite_damage = crit_hit.map((e,i) => paladin_1_hits[i]*(1+e)*smite_1[i] + paladin_2_hits[i]*(1+e)*smite_2[i] + paladin_3_hits[i]*(1+e)*smite_3[i]);
const paladin_nova = hit_damage.map((e,i) => e+smite_damage[i]);

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
    if(tooltipItems[0].dataset.label == 'Baseline fighter'){
        data = {
            'DEX modifier': '+'+dex[index],
            'Target AC': ac[index],
            'Hit chance': round(fighter_hit[index]*100,2)+'%',
            'Attacks' : fighter_attacks[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit' : fighter_hit_damage[index],
            'Additional damage on crit' : fighter_crit_damage
        }
    } else if(tooltipItems[0].dataset.label == 'Paladin Smiting') {
        data = {
            'STR modifier' : '+'+str[index],
            'Target AC': ac[index],
            'Hit chance': round(paladin_hit[index]*100,2)+'%',
            'Attacks' : paladin_attacks[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit' : paladin_hit_damage[index],
            'Additional damage on crit' : paladin_crit_damage[index],
            'Land 1st Smite' : round(paladin_1_hits[index]*100,4)+'%',
            '1st Smite damage' : smite_1[index],
            'Land 2nd Smite' : round(paladin_2_hits[index]*100,4)+'%',
            '2nd Smite damage' : smite_2[index],
        }
        if(levels[index]>=5){
            data['Land 3rd Smite'] = round(paladin_3_hits[index]*100,4)+'%';
            data['3rd Smite damage'] = smite_3[index];
        }
        data['P(crit|hit)'] = round(crit_hit[index]*100,2)+'%';
        data['Hit damage'] = round(hit_damage[index],3);
        data['Smite damage'] = round(smite_damage[index],3);
    }
    return Object.entries(data).map(e => e[0]+': '+e[1]);
}

export const data = {
    labels: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Paladin Smiting",
        data: paladin_nova,
        cubicInterpolationMode: 'monotone',
        borderColor: '#b59e54',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Baseline fighter",
        data: fighter_nova,
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
            min: 0,
            title: {
                display: true,
                text: 'DPR',
            },
        },
        x: {
            title: {
            display: true,
            text: 'Level',
            }
        }
    },
    plugins: {
        title: {
            display: true,
            text: "Nova damage of characters"
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
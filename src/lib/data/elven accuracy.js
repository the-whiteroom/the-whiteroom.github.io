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

// rogue (EA)
const sneak_dice = levels.map(l => Math.floor((l+1)/2,1));
const dex = levels.map(l => 3+(l>=12)+(l>=16));
const adv_dice = levels.map(l => l<4 ? 2 : 3)
const ea_crit = adv_dice.map(e=> 1-(1-crit)**e);

const unmodified_attack = prof.map((e,i) => e+dex[i]);
const ss_attack = prof.map((e,i) => e+dex[i]-5*(levels[i]>=10));

const unmodified_hit = unmodified_attack.map((e,i) => (21-ac[i]+e)/20);
const unmodified_adv_hit = unmodified_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**adv_dice[i]);
const ss_hit = ss_attack.map((e,i) => (21-ac[i]+e)/20);
const ss_adv_hit = ss_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**adv_dice[i]);

// no external advantage source
const ba_DPR = unmodified_adv_hit.map((e,i) => e*(3.5+dex[i]+3.5*sneak_dice[i]) + ea_crit[i]*(3.5+3.5*sneak_dice[i]));

// external advantage source
const ext_attack_1 = unmodified_adv_hit.map((e,i) => e*(3.5+dex[i]+3.5*sneak_dice[i]) + ea_crit[i]*(3.5+3.5*sneak_dice[i]));
// IF beyond level 8, CBE attack as well
const ext_attack_2_ss = ss_adv_hit.map((e,i) => e*(3.5+dex[i]+10*(levels[i]>=10)) + ea_crit[i]*3.5);
// if didn't hit first time, second attack is just ext_attack_1, no need to duplicate code
const ext_DPR = unmodified_adv_hit.map((e,i) => ext_attack_1[i] + (levels[i]>=8)*(e*ext_attack_2_ss[i] + (1-e)*ext_attack_1[i]));

//rogue baseline
const baseline_dex = levels.map(l => 3+(l>=8)+(l>=12));
const baseline_unmodified_attack = prof.map((e,i) => e+baseline_dex[i]);
const baseline_ss_attack = prof.map((e,i) => e+baseline_dex[i]-5*(levels[i]>=4));

const baseline_unmodified_adv_hit = baseline_unmodified_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**2);
const baseline_ss_adv_hit = baseline_ss_attack.map((e,i) => 1-(1-(21-ac[i]+e)/20)**2);

const baseline_sa_adv = baseline_unmodified_adv_hit.map((e,i) => e*(3.5+baseline_dex[i]+3.5*sneak_dice[i]) + adv_crit*(3.5+3.5*sneak_dice[i]));
const baseline_ss_adv = baseline_ss_adv_hit.map((e,i) => e*(3.5+baseline_dex[i]+10*(levels[i]>=4)) + adv_crit*3.5);

const baseline_ba_DPR = baseline_sa_adv;
const baseline_ext_DPR = baseline_unmodified_adv_hit.map((e,i) => baseline_sa_adv[i] + e*baseline_ss_adv[i] + (1-e)*baseline_sa_adv[i]);

console.log(baseline_ba_DPR);
console.log(baseline_ext_DPR);

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
    } else if (tooltipItems[0].dataset.label == 'Fighter Baseline (External advantage source)'){
        data = {
            'DEX modifier': '+'+mod[index],
            'Target AC': ac[index],
            'Hit chance': round(fighter_adv_hit[index]*100,2)+'%',
            'Attacks' : fighter_attacks[index],
            'Crit chance' : round(adv_crit*100,2)+'%',
            'Damage on hit' : fighter_hit_damage[index],
            'Additional damage on crit' : fighter_crit_damage
        }
    } else if (tooltipItems[0].dataset.label == 'Elven Accuracy (External advantage source)'){
        data = {
            'DEX modifier': '+'+dex[index],
            'Target AC': ac[index],
            'Crit chance' : round(ea_crit[index]*100,2)+'%',
            'Hit chance (Sneak Attack)': round(unmodified_adv_hit[index]*100,2)+'%',
            'Damage on hit (Sneak Attack)' : 3.5+dex[index]+3.5*sneak_dice[index],
            'Additional damage on crit (Sneak Attack)' : 3.5+3.5*sneak_dice[index],
            'Hit chance (Sharpshooter)' : round(ss_adv_hit[index]*100,2)+'%',
            'Damage on hit (Sharpshooter)' : 3.5+dex[index]+10*(levels[index]>=10),
            'Additional damage on crit (Sharpshooter)' : 3.5,
            'Damage per attack (Sneak Attack)' : round(ext_attack_1[index],3),
            'Damage per attack (Sharpshooter)' : round(ext_attack_2_ss[index],3),
            'Damage (1st attack)' : round(ext_attack_1[index],3),
        }
        if(levels[index]>=8){
            data['Damage (2nd attack)'] = round(unmodified_adv_hit[index]*ext_attack_2_ss[index] + (1-unmodified_adv_hit[index])*ext_attack_1[index],3);
        }
    } else if (tooltipItems[0].dataset.label == 'Elven Accuracy (BA advantage generation)'){
        data = {
            'DEX modifier': '+'+dex[index],
            'Target AC': ac[index],
            'Crit chance' : round(ea_crit[index]*100,2)+'%',
            'Hit chance': round(unmodified_adv_hit[index]*100,2)+'%',
            'Damage on hit' : 3.5+dex[index]+3.5*sneak_dice[index],
            'Additional damage on crit' : 3.5+3.5*sneak_dice[index],
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
        label: "Elven Accuracy (BA advantage generation)",
        data: ba_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#555752',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Elven Accuracy (External advantage source)",
        data: ext_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#555752',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
        borderDash: [5,],
      },
      {
        label: "Rogue (BA advantage generation)",
        data: baseline_ba_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#aaa',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Rogue (External advantage source)",
        data: baseline_ext_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#aaa',
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
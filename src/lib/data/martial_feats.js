//compute baselines
const levels = [...Array(20).keys()].map(l => l+1);
const prof = levels.map(l => Math.floor(l/4 + 7/4));
const ac = levels.map(l => 13+(l>=4)+(l>=5)+(l>=8)+(l>=10)+(l>=13)+(l>=17));
const crit = 0.05;

// fighter scaling
const mod = levels.map(l => 3+(l>=6)+(l>=8));

// warlock baseline
const cha = levels.map(l => 3+(l>=4)+(l>=8));
const warlock_attack = prof.map((e,i) => e+cha[i]);
const warlock_hit = warlock_attack.map((e,i) => (21-ac[i]+e)/20);
const warlock_attacks = levels.map(l => 1+(l>=5)+(l>=11)+(l>=17));
const warlock_hit_damage = cha.map((e,i) => 5.5+3.5+e*(levels[i]>=2));
const warlock_crit_damage = 5.5+3.5;
const warlock_DPR = warlock_attacks.map((e,i) => e*(warlock_hit[i]*warlock_hit_damage[i] + crit*warlock_crit_damage));

// fighter baseline
const fighter_attack = prof.map((e,i) => e+mod[i]+2-5*(levels[i]>=4));
const fighter_hit = fighter_attack.map((e,i) => (21-ac[i]+e)/20);
const fighter_attacks = levels.map(l => 2+(l>=5)+(l>=11)+(l>=20)+((l>=2)+(l>=5)+(l>=11)+(l>=20))*((l>=17)+1)/8);
const fighter_hit_damage = levels.map((e,i) => 3.5+mod[i]+10*(e>=4));
const fighter_crit_damage = 3.5;
const fighter_DPR = fighter_attacks.map((e,i) => e*(fighter_hit[i]*fighter_hit_damage[i] + crit*fighter_crit_damage));

// twf shortswords
const twf_mod = levels.map(l => 3+(l>=4)+(l>=6));
const twf_attack = prof.map((e,i) => e+twf_mod[i]);
const twf_hit = twf_attack.map((e,i) => (21-ac[i]+e)/20);
const twf_hit_damage = twf_mod.map(e => 3.5+e);
const twf_crit_damage = 3.5;
const twf_DPR = fighter_attacks.map((e,i) => e*(twf_hit[i]*twf_hit_damage[i] + crit*twf_crit_damage));

// Sword and board (PAM Duelling Quarterstaff)
const pam_mod = levels.map(l => 3+(l>=4)+(l>=6));
const pam_attack = prof.map((e,i) => e+pam_mod[i]);
const pam_hit = pam_attack.map((e,i) => (21-ac[i]+e)/20);
const pam_attacks = levels.map(l => 1+(l>=5)+(l>=11)+(l>=20)+((l>=2)+(l>=5)+(l>=11)+(l>=20))*((l>=17)+1)/8);
const pam_hit_damage = pam_mod.map(e => 3.5+e+2);
const pam_ba_damage = pam_mod.map(e => 2.5+e+2);
const pam_crit_damage = 3.5;
const pam_ba_crit_damage = 2.5;
const pam_DPR = pam_attacks.map((e,i) => e*(pam_hit[i]*pam_hit_damage[i] + crit*pam_crit_damage) + pam_hit[i]*pam_ba_damage[i] + crit*pam_ba_crit_damage);

// Great weapon fighting (greatsword)
const gwf_mod = levels.map(l => 3+(l>=4)+(l>=6));
const gwf_attack = prof.map((e,i) => e+gwf_mod[i]);
const gwf_hit = gwf_attack.map((e,i) => (21-ac[i]+e)/20);
const gwf_attacks = levels.map(l => 1+(l>=5)+(l>=11)+(l>=20)+((l>=2)+(l>=5)+(l>=11)+(l>=20))*((l>=17)+1)/8);
const gwf_hit_damage = gwf_mod.map(e => 2*(3.5+3.5+3+4+5+6)/6+e);
const gwf_crit_damage = 2*(3.5+3.5+3+4+5+6)/6;
const gwf_DPR = gwf_attacks.map((e,i) => e*(gwf_hit[i]*gwf_hit_damage[i] + crit*gwf_crit_damage));


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
    } else if(tooltipItems[0].dataset.label == 'Two-Weapon Fighting (Shortswords)'){
        data = {
            'STR/DEX modifier': '+'+twf_mod[index],
            'Target AC': ac[index],
            'Hit chance': round(twf_hit[index]*100,2)+'%',
            'Attacks' : fighter_attacks[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit' : twf_hit_damage[index],
            'Additional damage on crit' : twf_crit_damage
        }
    } else if(tooltipItems[0].dataset.label == "Sword and Board (PAM Dueling Quarterstaff)"){
        data = {
            'STR modifier': '+'+pam_mod[index],
            'Target AC': ac[index],
            'Hit chance': round(pam_hit[index]*100,2)+'%',
            'Attacks (Attack action)' : pam_attacks[index],
            'Attacks (Polearm Master bonus action)' : 1,
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit (Attack action)' : pam_hit_damage[index],
            'Damage on hit (Polearm Master bonus action)' : pam_ba_damage[index],
            'Additional damage on crit (Attack action)' : pam_crit_damage,
            'Additional damage on crit (Polearm Master bonus action)' : pam_ba_crit_damage,
        }
    } else if(tooltipItems[0].dataset.label == "Great Weapon Fighting (Greatsword)"){
        data = {
            'STR modifier': '+'+gwf_mod[index],
            'Target AC': ac[index],
            'Hit chance': round(gwf_hit[index]*100,2)+'%',
            'Attacks' : gwf_attacks[index],
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit' : round(gwf_hit_damage[index],2),
            'Additional damage on crit' : round(gwf_crit_damage,2)
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
        borderDash: [5,],
      },
      {
        label: "Two-Weapon Fighting (Shortswords)",
        data: twf_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#ccc',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Sword and Board (PAM Dueling Quarterstaff)",
        data: pam_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#ccc',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      
      {
        label: "Great Weapon Fighting (Greatsword)",
        data: gwf_DPR,
        cubicInterpolationMode: 'monotone',
        borderColor: '#ccc',
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
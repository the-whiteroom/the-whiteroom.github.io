const levels = [...Array(20).keys()].map(l => l+1);
const dex = levels.map(l => 3+(l>=8)+(l>=10));
const con = 3;
const hp = levels.map(l => 3+l*(5+con));
const ac = dex.map(e => 12+e); // studded leather
const monster_attack = levels.map(e => 3+(e>=3)+(e>=4)+(e>=5)+(e>=8)+(e>=11)+(e>=16)+(e>=17));
const monster_damage = levels.map(l => [11.5,17.5,23.5,29.5,35.5,41.5,47.5,53.5,59.5,65.5,71.5,77.5,83.5,89.5,95.5,101.5,107.5,113.5,119.5,131.5][l-1]);
const monster_hit = monster_attack.map((e,i) => (21-ac[i]+e)/20);
const monster_DPR = monster_damage.map((e,i) => e*monster_hit[i]);
const turns_survived = hp.map((e,i) => e/monster_DPR[i]);

export const data = {
    labels: levels,
    datasets: [
      {
        label: "Studded leather",
        data: turns_survived,
        cubicInterpolationMode: 'monotone',
        borderColor: '#555752',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
    ]
};

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
    let data = {
        'DEX modifier' : '+'+dex[index],
        'CON modifier' : '+'+con[index],
        'AC' : ac[index],
        'Monster hit chance' : round(monster_hit[index]*100,1)+'%',
        'Monster DPR' : round(monster_DPR[index],3),
        'HP' : hp[index]
    }
    return Object.entries(data).map(e => e[0]+': '+e[1]);
}

export const options = {
    scales: {
        y: {
            title: {
                display: true,
                text: 'Turns survived',
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
<script>
    export let level;

    let axis = 450;
    
    import { Line } from 'svelte-chartjs';
    import {
    Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from 'chart.js';

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );
    $: levels = [...Array(21-level).keys()].map(l => l+level);
    console.log(levels);
    $: monster_attack = levels.map(e => 3+(e>=3)+(e>=4)+(e>=5)+(e>=8)+(e>=11)+(e>=16)+(e>=17));
    $: monster_damage = levels.map(l => [11.5,17.5,23.5,29.5,35.5,41.5,47.5,53.5,59.5,65.5,71.5,77.5,83.5,89.5,95.5,101.5,107.5,113.5,119.5,131.5][l-1]); // actually damage on hit

    //realistic barbarian (Raging)
    $: barb_con = levels.map(e => 3+2*(e>=20));
    $: barb_dex = levels.map(e => 3);
    $: barb_ac = barb_con.map((e,i) => 10+e+barb_dex[i]);
    $: barb_hit = monster_attack.map((e,i) => 1-(1-(21-barb_ac[i]+e)/20)**2); // uses Reckless
    $: barb_DPR = monster_damage.map((e,i) => e*barb_hit[i]);
    $: barb_hp = levels.map((e,i) => 5+e*(7+barb_con[i]));
    $: barb_hp_rage = barb_hp.map(e => e*2);
    $: barb = barb_hp_rage.map((e,i) => e/barb_DPR[i]);

    //tanky barbarian
    $: tank_con = levels.map(e => 3+(e>=4)+(e>=8)+2*(e>=20));
    $: tank_dex = levels.map(e => 3+(e>=12)+(e>=16));
    $: tank_ac = tank_con.map((e,i) => 10+e+tank_dex[i]);
    $: tank_hit = monster_attack.map((e,i) => (21-tank_ac[i]+e)/20);
    $: tank_DPR = monster_damage.map((e,i) => e*tank_hit[i]);
    $: tank_hp = levels.map((e,i) => 5+e*(7+tank_con[i]+1+2)); // tough, hill dwarf
    $: tank_hp_rage = tank_hp.map(e => e*2);
    $: tank = tank_hp_rage.map((e,i) => e/tank_DPR[i]);

    //paladin
    $: pal_con = levels.map(e => 3);
    $: pal_ac = levels.map(e => 20+(e>=2)); // defense
    $: pal_hit = monster_attack.map((e,i) => (21-pal_ac[i]+e)/20);
    $: pal_DPR = monster_damage.map((e,i) => e*pal_hit[i]);
    $: pal_hp = levels.map((e,i) => 4+e*(6+pal_con[i]));
    $: pal = pal_hp.map((e,i) => e/pal_DPR[i]);

    //cleric (sorc 1 dip)
    $: cleric_con = levels.map(e => 2);
    $: cleric_ac = levels.map(e => e == 1 ? 17 : 24);
    $: cleric_hit = monster_attack.map((e,i) => Math.max((21-cleric_ac[i]+e)/20,0.05)**2); //dodges
    $: cleric_DPR = monster_damage.map((e,i) => e*cleric_hit[i]);
    $: cleric_hp = levels.map((e,i) => 3+e*(5+cleric_con[i]));
    $: cleric = cleric_hp.map((e,i) => e/cleric_DPR[i]);

    $: data = {
        labels: levels,
        datasets: [
        {
            label: "Tanky Barbarian",
            data: tank,
            cubicInterpolationMode: 'monotone',
            borderColor: '#E7623E',
            backgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 5,
            borderDash: [5,],
        },
        {
            label: "Realistic Barbarian",
            data: barb,
            cubicInterpolationMode: 'monotone',
            borderColor: '#E7623E',
            backgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 5,
        },
        {
            label: "Paladin",
            data: pal,
            cubicInterpolationMode: 'monotone',
            borderColor: '#b59e54',
            backgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 5,
        },
        {
            label: "Average Cleric",
            data: cleric,
            cubicInterpolationMode: 'monotone',
            borderColor: '#91a1b2',
            backgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 5,
        },
        ],
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
        let data = {};
        if(tooltipItems[0].dataset.label == 'Tanky Barbarian'){
            data = {
                'CON modifier' : '+'+tank_con[index],
                'DEX modifier' : '+'+tank_dex[index],
                'AC' : tank_ac[index],
                'Monster hit chance' : round(tank_hit[index]*100,4)+'%',
                'Monster DPR' : round(tank_DPR[index],3),
                'HP' : tank_hp[index],
                'Effective HP (Rage)' : tank_hp_rage[index]
            }            
        } else if (tooltipItems[0].dataset.label == 'Realistic Barbarian'){
            data = {
                'CON modifier' : '+'+barb_con[index],
                'DEX modifier' : '+'+barb_dex[index],
                'AC' : barb_ac[index],
                'Monster hit chance' : round(barb_hit[index]*100,4)+'%',
                'Monster DPR' : round(barb_DPR[index],3),
                'HP' : barb_hp[index],
                'Effective HP (Rage)' : barb_hp_rage[index]
            }            
        } else if (tooltipItems[0].dataset.label == 'Paladin'){
            data = {
                'CON modifier' : '+'+pal_con[index],
                'AC' : pal_ac[index],
                'Monster hit chance' : round(pal_hit[index]*100,4)+'%',
                'Monster DPR' : round(pal_DPR[index],3),
                'HP' : pal_hp[index]
            }
        } else if (tooltipItems[0].dataset.label == 'Average Cleric'){
            data = {
                'CON modifier' : '+'+cleric_con[index],
                'AC' : cleric_ac[index],
                'Monster hit chance' : round(cleric_hit[index]*100,4)+'%',
                'Monster DPR' : round(cleric_DPR[index],3),
                'HP' : cleric_hp[index]
            }
        }
        return Object.entries(data).map(e => e[0]+': '+e[1]);
    }

    $: options = {
        scales: {
            y: {
                min: 0,
                title: {
                    display: true,
                    text: 'Turns survived',
                },
                max: axis,
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
                text: "Survivability of various characters"
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
</script>

<style>
</style>

<div style="height:400px">
    <Line {data} {options}/>
</div>
<div style="text-align: center; justify-content: center; display: flex;">
    <span>Adjust y-axis: 15</span><input type=range min=15 max=450 bind:value={axis} /><span> 450</span>
</div>

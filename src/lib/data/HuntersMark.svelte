<script>
    let level = 5;
    $: prof = Math.floor(level/4 + 7/4);
    $: dex = 3+(level>=8)+(level>=12);
    $: ac = 13+(level>=4)+(level>=5)+(level>=8)+(level>=10)+(level>=13)+(level>=17);
    $: hit = (21-ac+dex+prof+2*(level>=2)-5*(level>=4))/20;
    const crit = 0.05;

    $: damage_on_hit = 3.5+dex+10*(level>=4);
    const damage_on_crit = 3.5;
    $: damage_on_hit_hm = damage_on_hit+3.5;
    const damage_on_crit_hm = 7;// 3.5 + 3.5
    $: damage = damage_on_hit * hit + damage_on_crit * crit;
    $: damage_hm = damage_on_hit_hm * hit + damage_on_crit_hm * crit;
    $: attacks = 1+(level>=5); // unmodified attacks per turn

    $: favored_foe = 2.5+1*(level>=6)+1*(level>=14);

    $: cumulative = [1,2,3,4].map(t => (attacks+1)*damage*t);
    $: cumulative_ff = [1,2,3,4].map(t => ((attacks+1)*damage+(1-(1-hit)**(attacks+1))*favored_foe)*t);
    $: cumulative_hm = [1,2,3,4].map(t => attacks*damage_hm + (t-1)*(attacks+1)*damage_hm);

    function round(num, decimalPlaces = 0) {
        if (num < 0)
            return -round(-num, decimalPlaces);

        num = Math.round(num + "e" + decimalPlaces);
        return Number(num + "e" + -decimalPlaces);
    }

    function header(tooltipItems){
        if(tooltipItems[0].label==1) return 'Turn 1';
        return 'Turns 1-'+tooltipItems[0].label;
    }

    function footer(tooltipItems){
        let data = {
            'Proficiency bonus' : prof,
            'DEX modifier' : '+' + dex,
            'Target AC' : ac,
            'Hit chance' : round(hit*100,2)+'%',
            'Crit chance' : round(crit*100,2)+'%',
            'Damage on hit (Unmodified)' : damage_on_hit,
            'Damage on crit (Unmodified)' : damage_on_crit,
            'Damage per attack (Unmodified)' : damage,
            'Damage on hit (Hunter\'s Mark)' : damage_on_hit_hm,
            'Damage on crit (Hunter\'s Mark)' : damage_on_crit_hm,
            'Damage per attack (Hunter\'s Mark)' : damage_hm,
            'Attacks from Attack action' : attacks,
            'Damage (Favored Foe)' : favored_foe,
            'Favoured Foe chance' : round((1-(1-hit)**(attacks+1))*100,2)+'%'
        }
        return Object.entries(data).map(e => e[0]+': '+e[1]);
    }

    $: data = {
        labels: [1,2,3,4],
        datasets: [
            {
                label: "Unmodified",
                data: cumulative,
                cubicInterpolationMode: 'monotone',
                borderColor: '#749C75',
                backgroundColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 5,
            },
            {
                label: "Favored Foe",
                data: cumulative_ff,
                cubicInterpolationMode: 'monotone',
                borderColor: '#B2BD7E',
                backgroundColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 5,
            },
            {
                label: "Hunter's Mark",
                data: cumulative_hm,
                cubicInterpolationMode: 'monotone',
                borderColor: '#E9D985',
                backgroundColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 5,
            },
        ],
    };

    $: options = {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Cumulative damage dealt',
                },
            },
            x: {
                title: {
                display: true,
                text: 'Turns elapsed',
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: "Level "+level,
            },
            tooltip: {
                callbacks: {
                    title: header,
                    afterBody: footer
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        maintainAspectRatio: false,
    };
    
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
        CategoryScale,
    );
</script>

<div style="height:400px">
    <Line {data} {options}/>
</div>
<div style="text-align: center; justify-content: center; display: flex;">
    <span>Adjust level: 1</span><input type=range min=1 max=20 bind:value={level} /><span> 20</span>
</div>
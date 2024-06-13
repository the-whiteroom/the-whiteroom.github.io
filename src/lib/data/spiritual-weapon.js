export const data = {
    labels: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Spiritual Weapon",
        data: [0.047222222,0.046747967,0.041666667,0.037581699,0.05297619,0.052185792,0.051767677,0.044835681,0.055701754,0.052263374,0.049224806,0.046520147,0.055034722,0.052310231,0.049842767,0.047597598,0.045545977,0.041931217],
        cubicInterpolationMode: 'monotone',
        borderColor: 'rgb(0,0,0)',
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
            max: 1,
            title: {
                display: true,
                text: 'DPR',
            },
            ticks : {
                callback : (value, index, ticks) => {
                    return value * 100 + '%';
                }
            }
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
            display: false,
        },
        title: {
            display: true,
            text: "DPR of spiritual weapon as a % of monster HP"
        }
    }
};
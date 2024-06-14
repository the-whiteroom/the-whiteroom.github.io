export const data = {
    labels: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Paladin Smiting",
        data: [17.7,17.7,19,36.619125,36.619125,37.95,39.9,51.29625,48.019125,58.8,58.8,63.438375,63.438375,66.919125,66.919125,68.25,68.25,68.25,68.25,],
        cubicInterpolationMode: 'monotone',
        borderColor: '#b59e54',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Baseline fighter",
        data: [15.15,15.15,22.8,38,44.625,44.625,47.125,51.75,47.125,65.975,65.975,65.975,65.975,65.975,65.975,65.975,65.975,65.975,84.825,],
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
        }
    }
};
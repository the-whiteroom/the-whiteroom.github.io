export const data = {
    labels: [0, 1, 2, 3, 4],
    datasets: [
      {
        label: "Hold Person",
        data: [0.5, 0.25, 0.125, 0.0625, 0.03125],
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
            text: 'Probability of enemy still being affected'
            }
        },
        x: {
            title: {
            display: true,
            text: 'Enemy turns elapsed',
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Effectiveness of Hold Person over an encounter"
        }
    }
};
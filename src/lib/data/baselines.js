export const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Fighter Baseline",
        data: [10.1,10.73125,10.73125,16.15,24.7,29.00625,29.00625,30.63125,33.6375,30.63125,41.234375,41.234375,41.234375,41.234375,41.234375,41.234375,44.76875,44.76875,44.76875,56.55,],
        cubicInterpolationMode: 'monotone',
        borderColor: '#7f513e',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Warlock Baseline",
        data: [6.3,8.25,8.25,8.9,17.8,17.8,17.8,19.1,20.5,19.1,28.65,28.65,28.65,28.65,28.65,28.65,38.2,38.2,38.2,38.2,],
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
    }
};
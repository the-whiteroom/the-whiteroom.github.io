export const data = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        data: [0.5, 0.25, 0.125, 0.0625],
      },
    ],
};

export const options = {
    scales: {
        y: {
            title: {
            display: true,
            text: 'Probability of enemy still being affected'
            }
        },
        x: {
            title: {
            display: true,
            text: 'Turns elapsed'
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    }
};
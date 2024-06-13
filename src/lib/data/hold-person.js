export const data = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "Hold Person",
        data: [0.5, 0.25, 0.125, 0.0625],
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
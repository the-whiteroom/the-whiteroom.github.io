export const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Tanky Barbarian",
        data: [7.826086957,8.857142857,9.361702128,9.190207156,8.450704225,8.578313253,8.673684211,9.345794393,9.411764706,9.465648855,8.645899555,9.548387097,9.580838323,9.608938547,9.633507853,9.655172414,8.794926004,8.810572687,8.824648155,11.66032953],
        cubicInterpolationMode: 'monotone',
        borderColor: '#E7623E',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
        borderDash: [5,],
      },
      {
        label: "Realistic Barbarian",
        data: [4.076086957,4.464285714,4.654255319,4.06779661,3.885381253,3.927937455,3.959742617,3.78282154,3.801520608,3.816793893,3.66584982,3.676132708,3.684937817,3.692562352,3.69922883,3.572781898,3.472868217,3.477239354,3.481171548,4.246422497,],
        cubicInterpolationMode: 'monotone',
        borderColor: '#E7623E',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Paladin",
        data: [6.52173913,9.523809524,9.929078014,6.101694915,5.164319249,5.220883534,5.263157895,4.539385848,4.56182473,4.580152672,4.020979021,4.032258065,4.041916168,4.05027933,4.057591623,3.612479475,3.255813953,3.259911894,3.263598326,3.117870722,],
        cubicInterpolationMode: 'monotone',
        borderColor: '#b59e54',
        backgroundColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 5,
      },
      {
        label: "Average Cleric",
        data: [3.826086957,4.342857143,4.595744681,3.389830508,3.028169014,3.072289157,3.105263158,2.782969886,2.801120448,2.815945717,2.545454545,2.55483871,2.562874251,2.569832402,2.57591623,2.346618898,2.15503876,2.158590308,2.161785216,2.06590621,],
        cubicInterpolationMode: 'monotone',
        borderColor: '#91a1b2',
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
                text: 'Turns survived',
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
            text: "Survivability of various characters"
        }
    }
};
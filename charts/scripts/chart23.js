const data23 = {
  labels: [
    '2023-01-01',
    '2023-02-01',
    '2023-03-01',
    '2023-04-01',
    '2023-05-01',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 15, 3, 6, 9, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const config23 = {
  type: 'bar',
  data: data23,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'eeeeee',
          },
        },
        min: '2023-01-01',
        max: '2023-02-01',
        ticks: {
          maxRotation: 0,
          autoSkip: false,
          font: {
            weight: 'bold',
          },
          showLabelBackdrop: true,
          backdropColor: (color) => {
            const date = new Date(color.tick.value);
            const dayOfWeek = date.getDay();
            const isSunday = dayOfWeek === 0;
            const isSaturday = dayOfWeek === 6;

            if (isSunday === true || isSaturday === true) {
              return '#eee';
            } else {
              return 'transparent';
            }
          },
        },
        border: {
          width: 3,
        },
        grid: {
          display: false,
        },
      },
      x2: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'dd',
          },
        },
        min: '2023-01-01',
        max: '2023-02-01',
        ticks: {
          maxRotation: 0,
          autoSkip: false,
          showLabelBackdrop: true,
          backdropColor: (color) => {
            const date = new Date(color.tick.value);
            const dayOfWeek = date.getDay();
            const isSunday = dayOfWeek === 0;
            const isSaturday = dayOfWeek === 6;

            if (isSunday === true || isSaturday === true) {
              return '#eee';
            } else {
              return 'transparent';
            }
          },
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart23 = new Chart(document.getElementById('myChart23'), config23);

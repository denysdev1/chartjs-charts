const data7 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Red Bar',
      data: [6, 19, 13, 15, 12, 13],
      backgroundColor: ['rgba(255, 99, 132, 1)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1,
      categoryPercentage: 0.5,
      order: 0,
    },
    {
      label: 'Orange Bar',
      data: [5, 15, 3, 5, 2, 3],
      backgroundColor: ['rgba(255, 159, 64, 1)'],
      borderColor: ['rgba(255, 159, 64, 1)'],
      borderWidth: 1,
      order: 1,
    },
  ],
};

const config7 = {
  type: 'bar',
  data: data7,
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart7 = new Chart(document.getElementById('myChart7'), config7);

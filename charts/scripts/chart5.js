const data5 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Temperature in C',
      data: [
        [8, 12],
        [9, 16],
        [6, 9],
        [4, 10],
        [3, 12],
        [9, 2],
      ],
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)'],
      borderWidth: 1,
      borderSkipped: false,
    },
  ],
};

const config5 = {
  type: 'bar',
  data: data5,
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart5 = new Chart(document.getElementById('myChart5'), config5);

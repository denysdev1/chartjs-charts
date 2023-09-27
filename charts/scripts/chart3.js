const color3 = 'rgba(75, 192, 192, 1)';

const data3 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [
        { x: 3, y: 3 },
        { x: 6, y: 3 },
        { x: 9, y: 4.5 },
        { x: 12, y: 6 },
        { x: 15, y: 6 },
        { x: 9, y: 4.5 },
        { x: 6, y: 3 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: color3,
      borderWidth: 1,
    },
  ],
};

const config3 = {
  type: 'scatter',
  data: data3,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Total Sales',
          color: color3,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Sales Agents',
        },
      },
    },
  },
};

const myChart3 = new Chart(document.getElementById('myChart3'), config3);

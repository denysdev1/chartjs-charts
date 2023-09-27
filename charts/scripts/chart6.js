const data6 = {
  labels: ['Red 1', 'Red 2', 'Red 3', 'Green'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 15, 5],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(75, 192, 192, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(75, 192, 192, 1)',
    ],
    borderWidth: 1,
    offset: [20, 20, 20, 0]
  }]
};

const config6 = {
  type: 'pie',
  data: data6,
  options: {
    layout: {
      padding: {
        left: 50,
        right: 20,
        top: 30,
        bottom: 30
      }
    },
    plugins: {
      labels: {
        render: (arguments) => {
          return `${arguments.label}: ${arguments.percentage}%`
        },
        position: 'outside',
        textMargin: 10
      }
    }
  }
};

const myChart6 = new Chart(
  document.getElementById('myChart6'),
  config6
);
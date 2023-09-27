const data10 = {
  labels: ['Sales', 'Cost', 'Profit', 'ABC'],
  datasets: [
    {
      label: '# of Votes',
      data: [
        {
          financials: 'Sales',
          url: 'https://www.google.com',
          amount: { usd: 900, eur: 600 },
        },
        {
          financials: 'Cost',
          url: 'https://www.chartjs.org',
          amount: { usd: 600, eur: 450 },
        },
        {
          financials: 'Profit',
          url: 'https://www.amazon.com',
          amount: { usd: 450, eur: 300 },
        },
        {
          financials: 'ABC',
          url: 'https://www.flipkart.com',
          amount: { usd: 450, eur: 300 },
        },
      ],
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

const config10 = {
  type: 'pie',
  data: data10,
  options: {
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? 'pointer'
        : 'default';
    },
    parsing: {
      key: 'amount.usd',
    },
  },
};

const ctx10 = document.getElementById('myChart10');
const myChart10 = new Chart(ctx10, config10);

function pieChartCanvas10(click) {
  const clickedSlice = myChart10.getElementsAtEventForMode(
    click,
    'nearest',
    { intersect: true },
    true
  );
  if (clickedSlice.length) {
    const pieSlice = clickedSlice[0];
    const link =
      myChart10.data.datasets[clickedSlice[0].datasetIndex].data[
        clickedSlice[0].index
      ].url;
    window.open(link);
  }
}

ctx10.onclick = pieChartCanvas10;

const data12 = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange',
    'Black',
    'Next Color',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [
        [12, 19],
        [19, 3],
        [3, 5],
        [5, 2],
        [2, 3],
        [3, 9],
        [9, 15],
        [15, 10],
      ],
      backgroundColor: barBackgroundColorCode12(),
      borderColor: barColorCode12(),
      borderWidth: 1,
      borderSkipped: false,
    },
  ],
};

const waterfallLines12 = {
  id: 'waterfall',
  beforeDraw(chart, args, options) {
    const {
      ctx,
      config,
      scales: { x, y },
    } = chart;

    ctx.save();
    ctx.strokeStyle = options.lineColor;
    ctx.setLineDash([options.linestyle1, options.linestyle2]);
    for (let i = 0; i < config._config.data.datasets[0].data.length - 1; i++) {
      ctx.strokeRect(
        x.getPixelForValue(i),
        y.getPixelForValue(config._config.data.datasets[0].data[i][1]),
        x.getPixelForValue(0.5),
        0
      );
    }
  },
};

const config12 = {
  type: 'bar',
  data: data12,
  options: {
    plugins: {
      datalabels: {
        formatter: (value) => {
          const votes = value[1] - value[0];
          const netVotes = Math.abs(votes);
          return `Votes: ${netVotes}`;
        },
      },
      waterfall: {
        lineColor: 'black',
        linestyle1: 5,
        linestyle2: 5,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [waterfallLines12, ChartDataLabels],
};

const myChart12 = new Chart(document.getElementById('myChart12'), config12);

function barColorCode12() {
  return (ctx) => {
    const start = ctx.parsed._custom.start;
    const end = ctx.parsed._custom.end;
    let barColor =
      start <= end
        ? 'rgba(75, 192, 192, 1)'
        : start > end
        ? 'rgba(255, 99, 132, 1)'
        : 'black';

    if (
      ctx.dataIndex === 0 ||
      ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1
    ) {
      barColor = 'rgba(0, 0, 0, 1)';
    }

    return barColor;
  };
}

function barBackgroundColorCode12() {
  return (ctx) => {
    const start = ctx.parsed._custom.start;
    const end = ctx.parsed._custom.end;
    let barColor =
      start <= end
        ? 'rgba(75, 192, 192, 0.2)'
        : start > end
        ? 'rgba(255, 99, 132, 0.2)'
        : 'rgba(0, 0, 0, 0.2)';

    if (
      ctx.dataIndex === 0 ||
      ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1
    ) {
      barColor = 'rgba(0, 0, 0, 0.2)';
    }

    return barColor;
  };
}

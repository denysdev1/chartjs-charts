const coordinates14 = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const browserData14 = [
  {
    browser: 'Chrome',
    color: 'rgba(75, 192, 192, 1)',
    users: 150,
    marketshare: 70,
    versionData: [
      { version: 'v5', users: 10 },
      { version: 'v6', users: 20 },
      { version: 'v7', users: 30 },
      { version: 'v8', users: 60 },
      { version: 'v9', users: 20 },
    ],
  },
  {
    browser: 'FireFox',
    color: 'rgba(255, 26, 104, 1)',
    users: 25,
    marketshare: 24,
    versionData: [
      { version: 'V3.1', users: 10 },
      { version: 'v3.2', users: 10 },
      { version: 'v3.3', users: 5 },
    ],
  },
  {
    browser: 'Safari',
    color: 'rgba(54, 162, 235, 1)',
    users: 30,
    marketshare: 26,
    versionData: [
      { version: 'Web 9', users: 10 },
      { version: 'Web 10', users: 10 },
      { version: 'Web 11', users: 10 },
    ],
  },
];

const data14 = {
  datasets: [
    {
      label: 'Browser Data Market Share',
      data: browserData14,
      backgroundColor: [
        browserData14[0].color,
        browserData14[1].color,
        browserData14[2].color,
      ],
      borderColor: [
        browserData14[0].color,
        browserData14[1].color,
        browserData14[2].color,
      ],
      borderWidth: 1,
    },
  ],
};

const resetButton14 = {
  id: 'resetButton',
  beforeDraw(chart, args, options) {
    if (chart.data.datasets[0].label !== 'Browser Data Market Share') {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      ctx.save();

      const text = 'Back';
      const thickBorder = 3;
      const textWidth = ctx.measureText(text).width;
      const padding = 10;
      const paddingright = padding / 2;

      ctx.fillStyle = 'rgba(75, 192, 192, 0.2)';
      ctx.fillRect(
        right - (textWidth + 2 + padding),
        5,
        textWidth + padding,
        20
      );

      ctx.fillStyle = '#666';
      ctx.font = '12px Arial';
      ctx.fillText(text, right - (textWidth + 2 + paddingright), 15);

      ctx.lineWidth = thickBorder;
      ctx.strokeStyle = 'rgba(75, 192, 192, 1)';
      ctx.strokeRect(
        right - (textWidth + 2 + padding),
        5,
        textWidth + padding,
        20
      );

      coordinates14.top = 5 - thickBorder;
      coordinates14.bottom = 5 + 20 + thickBorder;
      coordinates14.left = right - (textWidth + 2 + padding);
      coordinates14.right = right;

      ctx.restore();
    }
  },
};

const config14 = {
  type: 'bar',
  data: data14,
  options: {
    onHover: (event, chartElement) => {
      if (
        myChart14.config.data.datasets[0].label === 'Browser Data Market Share'
      ) {
        event.native.target.style.cursor = chartElement[0]
          ? 'pointer'
          : 'default';
      } else {
        event.native.target.style.cursor = 'default';
      }
    },
    parsing: {
      xAxisKey: 'browser',
      yAxisKey: 'marketshare',
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [resetButton14],
};

const ctx14 = document.getElementById('myChart14');
const myChart14 = new Chart(ctx14, config14);

function changeChart14(browser) {
  myChart14.config.options.parsing.xAxisKey = 'versionData.version';
  myChart14.config.options.parsing.yAxisKey = 'versionData.users';

  const vColor = [];
  const vUsers = [];
  const vLabel = browserData14[browser].versionData.map((labels) => {
    vUsers.push(labels.users);
    vColor.push(browserData14[browser].color);
    return labels.version;
  });

  myChart14.config.data.labels = vLabel;
  myChart14.config.data.datasets[0].label = browserData14[browser].browser;
  myChart14.config.data.datasets[0].data = vUsers;
  myChart14.config.data.datasets[0].backgroundColor = vColor;
  myChart14.config.data.datasets[0].borderColor = vColor;
  myChart14.update();
}

function clickHandler14(click) {
  if (myChart14.config.data.datasets[0].label === 'Browser Data Market Share') {
    const bar = myChart14.getElementsAtEventForMode(
      click,
      'nearest',
      { intersect: true },
      true
    );
    if (bar[0]) {
      changeChart14(bar[0].index);
    }
  }
}

ctx14.onclick = clickHandler14;

function resetChart14() {
  myChart14.config.options.parsing.xAxisKey = 'browser';
  myChart14.config.options.parsing.yAxisKey = 'marketshare';

  const bColor = [];
  const bMarketshare = [];
  const bLabel = browserData14.map((browser) => {
    bMarketshare.push(browser.marketshare);
    bColor.push(browser.color);
    return browser.browser;
  });

  myChart14.config.data.labels = bLabel;
  myChart14.config.data.datasets[0].label = 'Browser Data Market Share';
  myChart14.config.data.datasets[0].data = bMarketshare;
  myChart14.config.data.datasets[0].backgroundColor = bColor;
  myChart14.config.data.datasets[0].borderColor = bColor;
  myChart14.update();
}

function mousemoveHandler14(canvas, mousemove) {
  const x = mousemove.offsetX;
  const y = mousemove.offsetY;

  if (myChart14.config.data.datasets[0].label !== 'Browser Data Market Share') {
    if (
      x > coordinates14.left &&
      x < coordinates14.right &&
      y > coordinates14.top &&
      y < coordinates14.bottom
    ) {
      canvas.style.cursor = 'pointer';
    } else {
      canvas.style.cursor = 'default';
    }
  }
}

function clickButtonHandler14(canvas, click) {
  const x = click.offsetX;
  const y = click.offsetY;

  if (myChart14.config.data.datasets[0].label !== 'Browser Data Market Share') {
    if (
      x > coordinates14.left &&
      x < coordinates14.right &&
      y > coordinates14.top &&
      y < coordinates14.bottom
    ) {
      resetChart14();
    }
  }
}

ctx14.addEventListener('mousemove', (e) => {
  myChart14.resize();
  mousemoveHandler14(ctx14, e);
});

ctx14.addEventListener('click', (e) => {
  myChart14.resize();
  clickButtonHandler14(ctx14, e);
});

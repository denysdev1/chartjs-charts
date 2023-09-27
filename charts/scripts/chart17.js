const data17 = {
  labels: [
    new Date('2023-06-01').setHours(0, 0, 0, 0),
    new Date('2023-06-02').setHours(0, 0, 0, 0),
    new Date('2023-06-03').setHours(0, 0, 0, 0),
    new Date('2023-06-04').setHours(0, 0, 0, 0),
    new Date('2023-06-05').setHours(0, 0, 0, 0),
    new Date('2023-06-06').setHours(0, 0, 0, 0),
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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
      hitRadius: 0,
      pointRadius: 0,
    },
  ],
};

const config17 = {
  type: 'line',
  data: data17,
  options: {
    layout: {
      padding: {
        left: 12,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart17 = new Chart(document.getElementById('myChart17'), config17);

function crosshair17(chart, mousemove) {
  chart.update('none');

  const xCoor = mousemove.offsetX;
  const yCoor = mousemove.offsetY;

  const {
    ctx,
    data,
    chartArea: { top, bottom, left, right, width, height },
    scales: { x, y },
  } = chart;

  ctx.save();

  if (xCoor >= left && xCoor <= right && yCoor >= top && yCoor <= bottom) {
    lines(left, yCoor, right, yCoor);
    lines(xCoor, top, xCoor, bottom);
    function lines(xStart, yStart, xEnd, yEnd) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(102, 102, 102, 1)';
      ctx.lineWidth = 2;
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xEnd, yEnd);
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      ctx.setLineDash([]);
    }

    ctx.beginPath();
    const LABEL_HEIGHT = 24;
    ctx.fillStyle = 'rgba(102, 102, 102, 1)';
    ctx.fillRect(0, yCoor - LABEL_HEIGHT / 2, left, LABEL_HEIGHT);
    ctx.restore();

    const labelText = y.getValueForPixel(yCoor);
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText(labelText.toFixed(2), left / 2, yCoor);
    ctx.restore();

    const bottomLabel = new Date(x.getValueForPixel(xCoor)).toLocaleString(
      'en-US',
      {
        day: 'numeric',
        month: 'long',
      }
    );
    const bottomLabelWidth = ctx.measureText(bottomLabel).width + 12;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(102, 102, 102, 1)';
    ctx.fillRect(
      xCoor - bottomLabelWidth / 2,
      bottom,
      bottomLabelWidth,
      LABEL_HEIGHT
    );
    ctx.restore();

    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText(bottomLabel, xCoor, bottom + LABEL_HEIGHT / 2);
    ctx.restore();
  }
}

myChart17.canvas.addEventListener('mousemove', (e) => {
  crosshair17(myChart17, e);
});

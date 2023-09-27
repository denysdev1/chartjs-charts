const departmentDatasets2 = [
  'Sales Department',
  'Marketing Department',
  'HR Department',
  'IT Department',
];
const cost2 = [999, 666, 333, 999];
const budget2 = [3000, 4000, 5000, 10000];
const tax2 = [1000, 1000, 1000, 1000];

const departmentInfo2 = departmentDatasets2.map((department, index) => {
  let departmentDataset = {};
  departmentDataset.department = department;
  departmentDataset.financials = {};
  departmentDataset.financials.cost = cost2[index];
  departmentDataset.financials.budget = budget2[index];
  departmentDataset.financials.tax = tax2[index];
  return departmentDataset;
});

const data2 = {
  datasets: [
    {
      label: 'Tax',
      data: departmentInfo2,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

// config block
const config2 = {
  type: 'bar',
  data: data2,
  options: {
    parsing: {
      yAxisKey: 'department',
      xAxisKey: 'financials.tax',
    },
    borderWidth: 1,
    indexAxis: 'y',
    scales: {},
  },
};

const myChart2 = new Chart(document.getElementById('myChart2'), config2);

function changeFinancials(financials) {
  myChart2.config.options.parsing.xAxisKey = `financials.${financials}`;
  myChart2.update();
}

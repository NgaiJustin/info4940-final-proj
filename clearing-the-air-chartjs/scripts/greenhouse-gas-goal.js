const ctxGreenhouseGasGoal = document
  .getElementById('greenhouse-gas-goals')
  .getContext('2d')
let delayedGreenhouseGasGoal

// TODO: Factor out to JSON
const labelsGreenhouseGasGoal = ['Google', 'IBM', 'Oracle', 'AWS']
const dataGreenhouseGasGoal = {
  labels: labelsGreenhouseGasGoal,
  datasets: [
    {
      data: [2030, 2030, 2040, 2050],
      label: 'Net Zero Goal',

      fill: true,
      backgroundColor: [
        GOOGLE_COLOR_LIGHT,
        IBM_COLOR_LIGHT,
        AWS_COLOR_LIGHT,
        ORACLE_COLOR_LIGHT,
      ],
      hoverBackgroundColor: [GOOGLE_COLOR, IBM_COLOR, AWS_COLOR, ORACLE_COLOR],
      tension: 0.4,
    },
  ],
}

// Configure Chart
const confiGreenhouseGasGoalg = {
  type: 'bar',
  data: dataGreenhouseGasGoal,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Greenhouse Gas Emissions Goals (company-wide metrics)',
      },
    },
    radius: 5,
    hoverRadius: 12,
    hitRadius: 30,
    responsive: true,
    animation: {
      onComplete: () => {
        delayedGreenhouseGasGoal = true
      },
      delay: context => {
        let delay = 0
        if (
          context.type === 'data' &&
          context.mode === 'default' &&
          !delayedGreenhouseGasGoal
        ) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100
        }
        return delay
      },
    },
    scales: {
      y: {
        min: 2020,
        max: 2060,
        ticks: {
          callback: value => 'By ' + value,
        },
      },
    },
  },
}
const GreenhouseGasGoalChart = new Chart(
  ctxGreenhouseGasGoal,
  confiGreenhouseGasGoalg
)

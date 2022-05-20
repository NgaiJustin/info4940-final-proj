const ctxEnergy = document.getElementById('energy-consumption').getContext('2d')
let delayedEnergy

// TODO: Factor out to JSON
const labelsEnergy = ['Google Cloud', 'IBM', 'Oracle', 'AWS', 'Global Avreage']
const dataEnergy = {
  labels: labelsEnergy,
  datasets: [
    {
      data: [1.105, 1.67, 1.41, 1.7, 1.57],
      label: 'PUE',
      fill: true,
      pointBackgroundColor: 'rgba(189, 195, 199)',
      hoverBackgroundColor: [
        GOOGLE_COLOR,
        IBM_COLOR,
        ORACLE_COLOR,
        AWS_COLOR,
        DEFAULT_COLOR,
      ],
      tension: 0.4,
    },
  ],
}

// Configure Chart
const configEnergy = {
  type: 'bar',
  data: dataEnergy,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Energy Efficiency',
      },
    },
    radius: 5,
    hoverRadius: 12,
    hitRadius: 30,
    responsive: true,
    animation: {
      onComplete: () => {
        delayedEnergy = true
      },
      delay: context => {
        let delay = 0
        if (
          context.type === 'data' &&
          context.mode === 'default' &&
          !delayedEnergy
        ) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100
        }
        return delay
      },
    },
    scales: {
      y: {
        ticks: {
          callback: value => value + '',
        },
      },
    },
  },
}
const energyChart = new Chart(ctxEnergy, configEnergy)

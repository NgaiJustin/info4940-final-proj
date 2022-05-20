const ctxEnergy = document.getElementById('energy-consumption').getContext('2d')
let delayedEnergy

// TODO: Factor out to JSON
const labelsEnergy = ['2016', '2017', '2018', '2019', '2020']
const dataEnergy = {
  labels: labelsEnergy,
  datasets: [
    {
      data: [89.29, 109.68, 148.93, 121.86, 133.89],
      label: 'Google Cloud',
      fill: true,
      pointBackgroundColor: 'rgba(189, 195, 199)',
      tension: 0.4,
    },
    {
      data: [30.63, 29.38, 28.13, 27.38, 24.38],
      label: 'Oracle Cloud',
      fill: true,
      backgroundColor: '#f80000',
      pointBackgroundColor: 'rgba(189, 195, 199)',
      tension: 0.4,
    },
    {
      data: [28.28, 36.83, 32.09, 33.97, 33.97],
      label: 'Amazon (AWS)',
      fill: true,
      backgroundColor: '#FF9900',
      pointBackgroundColor: 'rgba(189, 195, 199)',
      tension: 0.4,
    },

    {
      data: [
        82.49554204, 74.63761438, 76.79782246, 81.35610884, 69.18246417,
        57.7445761,
      ],
      label: 'Australia per 50,000 Capita',
      fill: true,
      backgroundColor: 'rgba(5, 47, 95, 1)',
      pointBackgroundColor: 'rgba(189, 195, 199)',
      tension: 0.4,
    },
  ],
}

// Configure Chart
const configEnergy = {
  type: 'line',
  data: dataEnergy,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Energy Consumption',
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
          callback: value => value + 'M gallons',
        },
      },
    },
  },
}
const energyChart = new Chart(ctxEnergy, configEnergy)

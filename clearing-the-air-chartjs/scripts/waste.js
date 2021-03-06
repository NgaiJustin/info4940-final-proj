const ctxWaste = document.getElementById('total-waste').getContext('2d')
console.log(ctxWaste)
let delayedWaste

// Gradient Fill
let googleGradient = ctxWaste.createLinearGradient(0, 0, 0, 400)
googleGradient.addColorStop(0, 'rgba(58, 123, 213, 1')
googleGradient.addColorStop(1, 'rgba(0, 210, 255, 0.3')

// TODO: Factor out to JSON
const labelsWaste = ['2016', '2017', '2018', '2019', '2020']
const dataWaste = {
  labels: labelsWaste,
  datasets: [
    {
      data: [43058, 53363, 57113, 48126, 28864],
      label: 'Google Cloud',
      fill: true,
      backgroundColor: googleGradient,
      pointBackgroundColor: 'rgba(189, 195, 199)',
      tension: 0.4,
    },
    {
      data: [20434, 16852, 15612, 14464, 10148],
      label: 'IBM',
      fill: true,
      backgroundColor: IBM_COLOR_MEDIUM,
      pointBackgroundColor: 'rgba(189, 195, 199)',
      tension: 0.4,
    },
    {
      data: [2106, 1998, 2033, 1963, 621],
      label: 'Oracle',
      fill: true,
      backgroundColor: ORACLE_COLOR,
      pointBackgroundColor: 'rgba(189, 195, 199)',
      tension: 0.4,
    },
  ],
}

// Configure Chart
const configWaste = {
  type: 'line',
  data: dataWaste,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Total Waste',
      },
    },
    radius: 5,
    hoverRadius: 12,
    hitRadius: 30,
    responsive: true,
    animation: {
      onComplete: () => {
        delayedWaste = true
      },
      delay: context => {
        let delay = 0
        if (
          context.type === 'data' &&
          context.mode === 'default' &&
          !delayedWaste
        ) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100
        }
        return delay
      },
    },
    scales: {
      y: {
        ticks: {
          callback: value => value + ' metric tonnes',
        },
      },
    },
  },
}
const WasteChart = new Chart(ctxWaste, configWaste)

const ctxLandfill = document
  .getElementById('landfill-diversion')
  .getContext('2d')
let delayedLandfill

// TODO: Factor out to JSON
const labelsLandfill = ['2017', '2018', '2019', '2020']
const dataLandfill = {
  labels: labelsLandfill,
  datasets: [
    {
      data: [91, 87, 90, 81],
      label: 'Google',
      fill: true,
      backgroundColor: GOOGLE_COLOR_LIGHT,
      hoverBackgroundColor: GOOGLE_COLOR,
      tension: 0.4,
    },
    {
      data: [87.7, 89.4, 87.3, 83.3],
      label: 'IBM',
      fill: true,
      backgroundColor: IBM_COLOR_LIGHT,
      hoverBackgroundColor: IBM_COLOR,
      tension: 0.4,
    },
  ],
}

// Configure Chart
const configLandfill = {
  type: 'bar',
  data: dataLandfill,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Landfill Diversion Rate (%)',
      },
    },
    radius: 5,
    hoverRadius: 12,
    hitRadius: 30,
    responsive: true,
    animation: {
      onComplete: () => {
        delayedLandfill = true
      },
      delay: context => {
        let delay = 0
        if (
          context.type === 'data' &&
          context.mode === 'default' &&
          !delayedLandfill
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
const LandfillChart = new Chart(ctxLandfill, configLandfill)

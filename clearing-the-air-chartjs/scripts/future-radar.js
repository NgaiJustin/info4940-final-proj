const ctxfutureRadar = document.getElementById('future-radar').getContext('2d')
let delayedfutureRadar

DATA_COUNT = 4
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 1 }

// TODO: Factor out to JSON
const labelsfutureRadar = [
  'United Nations Climate Change Conference (COP26)',
  'Signatory of the Climate Neutral Data Centre Pact',
  'RE100 Member',
  'Signatory of the Climate Pledge',
]
const datafutureRadar = {
  labels: labelsfutureRadar,
  datasets: [
    {
      data: [1, 1, 1, 0],
      label: 'Google',
      fill: true,
      backgroundColor: GOOGLE_COLOR_LIGHT,
      hoverBackgroundColor: GOOGLE_COLOR,
    },
    {
      data: [1, 1, 0, 1],
      label: 'IBM',
      fill: true,
      backgroundColor: IBM_COLOR_LIGHT,
      hoverBackgroundColor: IBM_COLOR,
    },
    {
      data: [1, 0, 0, 0],
      label: 'Oracle',
      fill: true,
      backgroundColor: ORACLE_COLOR_LIGHT,
      hoverBackgroundColor: ORACLE_COLOR,
    },
    {
      data: [0, 1, 0, 1],
      label: 'AWS',
      fill: true,
      backgroundColor: AWS_COLOR_LIGHT,
      hoverBackgroundColor: AWS_COLOR,
    },
  ],
}

// Configure Chart
const configfutureRadar = {
  type: 'bar',
  data: datafutureRadar,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Engagement in Climate Pledges/Promises',
        padding: {
          bottom: 30,
        },
      },
      legend: { align: 'center', position: 'left' },
    },
    radius: 5,
    hoverRadius: 12,
    hitRadius: 30,
    responsive: true,
    aspectRatio: 5,
    animation: {
      onComplete: () => {
        delayedfutureRadar = true
      },
      delay: context => {
        let delay = 0
        if (
          context.type === 'data' &&
          context.mode === 'default' &&
          !delayedfutureRadar
        ) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100
        }
        return delay
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        },

        ticks: {
          callback: value => {
            if (value == 0) {
              return 'No'
            } else if (value == 1) {
              return 'Yes'
            } else {
              return ''
            }
          },
        },
      },
    },
  },
}
const futureRadarChart = new Chart(ctxfutureRadar, configfutureRadar)

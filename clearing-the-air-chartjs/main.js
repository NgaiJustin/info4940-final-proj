const ctx = document.getElementById('myChart').getContext('2d')
let delayed

// Gradient Fill
let googleGradient = ctx.createLinearGradient(0, 0, 0, 400)
googleGradient.addColorStop(0, 'rgba(58, 123, 213, 1')
googleGradient.addColorStop(1, 'rgba(0, 210, 255, 0.3')
let oracleGradient = ctx.createLinearGradient(0, 0, 0, 400)
oracleGradient.addColorStop(0, 'rgba(58, 123, 213, 1')
oracleGradient.addColorStop(1, 'rgba(0, 210, 255, 0.3')
let awsGradient = ctx.createLinearGradient(0, 0, 0, 400)
oracleGradient.addColorStop(0, 'rgba(58, 123, 213, 1')
oracleGradient.addColorStop(1, 'rgba(0, 210, 255, 0.3')

// TODO: Factor out to JSON
const labels = ['2016', '2017', '2018', '2019', '2020']
const data = {
  labels,
  datasets: [
    {
      data: [89.29, 109.68, 148.93, 121.86, 133.89],
      label: 'Google Cloud',
      fill: true,
      backgroundColor: googleGradient,
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
const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Water Consumption',
      },
    },
    radius: 5,
    hoverRadius: 12,
    hitRadius: 30,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true
      },
      delay: context => {
        let delay = 0
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
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
const myChart = new Chart(ctx, config)

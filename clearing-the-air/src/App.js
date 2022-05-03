import React from 'react'
import BarChart from './diagrams/BarChart'
import BarChartRace from './diagrams/BarChartRace'

import { useState } from 'react'
import useInterval from './hooks/useInterval'

import './App.css'

const barData = [
  { year: 1, efficiency: 24.3, sales: 100 },
  { year: 2, efficiency: 27.6, sales: 61 },
  { year: 3, efficiency: 28, sales: 59 },
  { year: 4, efficiency: 28.4, sales: 65 },
]

const getRandomIndex = array => {
  return Math.floor(array.length * Math.random())
}

function App() {
  const [iteration, setIteration] = useState(0)
  const [start, setStart] = useState(false)
  const [data, setData] = useState([
    {
      name: 'alpha',
      value: 10,
      color: '#f4efd3',
    },
    {
      name: 'beta',
      value: 15,
      color: '#cccccc',
    },
    {
      name: 'charlie',
      value: 20,
      color: '#c2b0c9',
    },
    {
      name: 'delta',
      value: 25,
      color: '#9656a1',
    },
    {
      name: 'echo',
      value: 30,
      color: '#fa697c',
    },
    {
      name: 'foxtrot',
      value: 35,
      color: '#fcc169',
    },
  ])

  useInterval(() => {
    if (start) {
      const randomIndex = getRandomIndex(data)
      setData(
        data.map((entry, index) =>
          index === randomIndex
            ? {
                ...entry,
                value: entry.value + 10,
              }
            : entry
        )
      )
      setIteration(iteration + 1)
    }
  }, 500)

  return (
    <div className="root">
      {/* Graph 1 */}
      <div className="diagram">
        <h1>Racing Bar Chart</h1>
        <BarChartRace data={data} />
        <button onClick={() => setStart(!start)}>
          {start ? 'Start' : 'Stop!'}
        </button>
        <p>Iteration: {iteration}</p>
      </div>
      {/* Graph 2 */}
      <div className="diagram">
        <div className="barWrapper">
          <BarChart data={barData} />
        </div>
      </div>
      {/* Graph 3 */}
      {/* Graph 4 */}
    </div>
  )
}

export default App

import React from 'react'
import BarChart from './diagrams/BarChart'
import BarChartRace from './diagrams/BarChartRace'
import BarChartRace2 from './diagrams/BarChartRace2'

import barData from './data/barData.json'
import barData2 from './data/barData2.json'

import { useState } from 'react'
import useInterval from './hooks/useInterval'

import './App.css'

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
      {/* <div className="diagram">
        <h1>Racing Bar Chart</h1>
        <BarChartRace data={data} />
        <button onClick={() => setStart(!start)}>
          {start ? 'Start' : 'Stop!'}
        </button>
      </div> */}

      {/* Graph 2 */}
      {/* <div className="diagram">
        <div className="barWrapper">
          <BarChart data={barData} />
        </div>
      </div> */}

      {/* Graph 3 */}
      <div className="diagram">
        <div className="barWrapper">
          <BarChartRace2 data={barData2} />
        </div>
      </div>

      {/* Graph 4 */}
    </div>
  )
}

export default App

import React from 'react'
import BarChart from './diagrams/BarChart'
import BarChartRace from './diagrams/BarChartRace'
import StackedBarChart from './diagrams/StackedBarChart'
import StackedAreaChart from './diagrams/StackedAreaChart'

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

/* Stacked Area&Bar Chart Testing*/
// const allKeys = ["Grid", "Contracted","Total"];
//
// const colors = {
//   "Grid": "green",
//   "Contracted": "orange",
//   "Total": "blue"
// };
//
// function App() {
//   const [keys, setKeys] = useState(allKeys);
//   const [data, setData] = useState([
//     {
//       year: 2016,
//       "Grid": 10,
//       "Contracted": 20,
//       "Total":30
//     },
//     {
//       year: 2017,
//       "Grid": 20,
//       "Contracted": 40,
//     },
//     {
//       year: 2000,
//       "Grid": 30,
//       "Contracted": 45,
//     },
//     {
//       year: 2010,
//       "Grid": 40,
//       "Contracted": 60,
//     },
//     {
//       year: 2020,
//       "Grid": 50,
//       "Contracted": 80,
//     }
//   ]);
//
//   return (
//     <React.Fragment>
//       <h2>Stacked Area Chart with D3 </h2>
//       <StackedAreaChart data={data} keys={keys} colors={colors} />
//       <StackedBarChart data={data} keys={keys} colors={colors} />
//
//       <div className="fields">
//         {allKeys.map(key => (
//           <div key={key} className="field">
//             <input
//               id={key}
//               type="checkbox"
//               checked={keys.includes(key)}
//               onChange={e => {
//                 if (e.target.checked) {
//                   setKeys(Array.from(new Set([...keys, key])));
//                 } else {
//                   setKeys(keys.filter(_key => _key !== key));
//                 }
//               }}
//             />
//             <label htmlFor={key} style={{ color: colors[key] }}>
//               {key}
//             </label>
//           </div>
//         ))}
//       </div>
//
//       <button
//         onClick={() =>
//           setData([
//             ...data,
//             {
//               year: Math.max(...data.map(d => d.year)) + 10,
//               "Grid": Math.round(Math.random() * 100),
//               "Contracted": Math.round(Math.random() * 125),
//               "Total": Math.round(Math.random() * 150)
//             }
//           ])
//         }
//       >
//         Add data
//       </button>
//     </React.Fragment>
//   );
// }


export default App

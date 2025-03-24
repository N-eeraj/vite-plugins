import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

console.log("")
const x = 4
console.log(x)

function App() {
  console.log("hi log")
       console.warn("warning!!")   ;
  console.error(`ERROR`);
  console.info('i_n_f_o')
  const obj = {rowA: 1, rowB: 2}   ; console.table(obj);

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a data-test="STATIC-DATA-TEST" aria-label="ARIA-LABEL" href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a data-cy="STATIC-DATA-CY" aria-label="ARIA-LABEL" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 data-test={"DYNAMIC-DATA-TEST"} aria-label="ARIA-LABEL">Vite + React</h1>
      <div className="card">
        <button data-cy="STATIC-DATA-CY" aria-label="ARIA-LABEL" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p data-cy={"DYNAMIC-DATA-CY"} aria-label="ARIA-LABEL" className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

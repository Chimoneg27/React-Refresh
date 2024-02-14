import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Simple Counter, React</h1>
      <h2>Count: {count}</h2>

      <button onClick={addValue}>Increase</button>
      {"  "}
      <button onClick={removeValue}>Decrease</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App

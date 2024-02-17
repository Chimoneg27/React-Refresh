import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Simple Counter, React</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      {"  "}
      <button onClick={() => setCount(count -1)}>Decrease</button>
      {"  "}
      <button onClick={() => setCount(0)}>Reset</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App

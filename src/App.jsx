import React, { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Hello from nadi massage</h1>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
    </>
  )
}

export default App

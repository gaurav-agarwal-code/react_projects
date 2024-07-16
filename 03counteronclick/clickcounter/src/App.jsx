import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const upcount = (props) => {
    // setCounter(counter + 1) .........will not work since this all cmd is  send in batch
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1) //.......first take previous state of counter as callback and then increment it as required
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }

  const downcount = () => setCounter(counter - 1)

  return (
    <>
      <p>click accordingly</p>
      <button
        onClick={upcount}>Addcount {counter}</button>
      <button
        onClick={downcount}>Downcount {counter}</button>
    </>
  )
}

export default App

import { useState } from "react"
import Button from "./Button";
import Statistics from "./Statistics";

function App() {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={()=>setGood(good+1)}/>
      <Button text="Neutral" onClick={()=>setNeutral(neutral+1)}/>
      <Button text="Bad" onClick={()=>setBad(bad+1)}/>

      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

export default App

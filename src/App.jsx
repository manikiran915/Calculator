import {useState} from 'react';
import './App.css';
function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [result, setResult] = useState(0);
function handleAddition()
{
  setResult(numberA + numberB);
}
function handleSubtraction()
{
  setResult(numberA - numberB);
}

  return (
    <div >
      <h1>React Calculator</h1>
      <br></br>
      <label htmlFor="input">Enter a number A:</label>
      <input type="number" id="a_value" value={numberA} onChange={(e) => setNumberA(Number(e.target.value))} />
      <br></br>
      <label htmlFor="input">Enter a number B:</label>
      <input type="number" id="b_value" value={numberB} onChange={(e) => setNumberB(Number(e.target.value))} />
      <br></br>
      <label htmlFor="input">Result:</label>
      <input type="number" id="result" value={result}  readOnly />
      <br></br>
      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
    </div>
  )
}

export default App;
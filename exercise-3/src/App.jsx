import React, { useState } from "react";

function App() {
  // states for A, B, and result
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // handle input for A
  function onA(event) {
    setA(event.target.value);
  }

  // handle input for B
  function onB(event) {
    setB(event.target.value);
  }

  // compute sum
  function onCompute() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("Error: Invalid number");
      setError(true);
    } else {
      setResult(numA + numB);
      setError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} value={a} />

      <label>B =</label>
      <input onChange={onB} value={b} />

      <label>A + B =</label>
      <input className={error ? "error" : ""} value={result} disabled />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
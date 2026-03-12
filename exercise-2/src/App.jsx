import React, { useState } from "react";

function App() {
  // state to store the entered text
  const [text, setText] = useState("");

  // function triggered when typing in the first input
  function handleKeyPress(event) {
    setText(event.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={handleKeyPress} />

      <p>
        <label>Here is the text in upper case</label>

        {/* display uppercase text */}
        <input value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
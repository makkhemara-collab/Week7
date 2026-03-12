import React, { useState } from "react";

function App() {
  // boolean state for weather
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    if (isRaining) {
      return "Rain Time";
    } else {
      return "Sunny Time";
    }
  }

  function getBackgroundColor() {
    if (isRaining) {
      return "rainy";   // must match CSS
    } else {
      return "sunny";   // must match CSS
    }
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>

      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;

import React from "react";
import './../styles/App.css';

let weather_inp = { temperature: 25, conditions: "Sunny" };

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      {
        weather_inp.temperature > 20 ?
          (<div style={{ color: "red" }}>{weather_inp.temperature}</div>)
          : (<div style={{ color: "blue" }}>{weather_inp.temperature}</div>)
      }
      <div>{weather_inp.conditions}</div>
    </div>
  )
}

export default App

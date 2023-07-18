
import React from "react";
import './../styles/App.css';

let weather_inp = { temperature: 25, conditions: "Sunny" };

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      {
        weather_inp.temperature > 20 ?
          (<p style={{ color: "red" }}><span>Temperature</span> <span>{weather_inp.temperature}</span></p>)
          : (<p style={{ color: "blue" }}><span>conditions</span><span>{weather_inp.temperature}</span></p>)
      }
      <p>{weather_inp.conditions}</p>
    </div>
  )
}

export default App

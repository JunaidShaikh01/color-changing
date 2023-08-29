import "./App.css";
import { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("");
  function handleColor(event) {
    setBgColor(event.target.value);
  }
  return (
    <div className="App">
      <select onChange={handleColor}>
        <option value="">Select From Here</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <div
        className="subApp"
        style={{ backgroundColor: bgColor, width: "100px", height: "100px" }}
      ></div>
    </div>
  );
}

export default App;

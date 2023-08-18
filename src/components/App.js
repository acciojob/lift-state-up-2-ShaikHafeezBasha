
import React, { useState } from "react";
import Child from "../components/Child";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{inputValue}</p>
      <Child inputValue={inputValue} setInputValue={setInputValue} />
      {/* <div className="child">
        <h2>Child Component</h2>
        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
      </div> */}
    </div>
  )
}
//https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json

export default App

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [stepVariable, setStepVariable] = useState(1);
  function incrementStep() {
    setStepVariable((stepVariable += 1));
  }
  function decrementStep() {
    if (stepVariable > 1) {
      setStepVariable((stepVariable -= 1));
    }
  }
  let [countVariable, setCountVariable] = useState(0);
  function incrementCount() {
    setCountVariable((countVariable += stepVariable));
  }
  function decrementCount() {
    setCountVariable((countVariable -= stepVariable));
  }
  const date = new Date();
  date.setDate(date.getDate() + countVariable);
  return (
    <>
      <div className="App">
        <div className="App-header1">
          <div>
            <button className="org" onClick={decrementStep}>
              -
            </button>
            <h1 className="org">Step : {stepVariable}</h1>
            <button className="org" onClick={incrementStep}>
              +
            </button>
          </div>
          <div>
            <button className="org" onClick={decrementCount}>
              -
            </button>
            <h1 className="org">Count : {countVariable}</h1>
            <button className="org" onClick={incrementCount}>
              +
            </button>
          </div>
          <h2>
            {countVariable === 0
              ? `Today is ${date.toDateString()}`
              : countVariable < 0
              ? `${Math.abs(countVariable)} days ago was ${date.toDateString()}`
              : `${countVariable} days from today is ${date.toDateString()}`}
          </h2>
        </div>
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;

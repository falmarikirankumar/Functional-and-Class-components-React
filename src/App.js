import "./App.css";
import Function from "./Componets/Function";
import Classcomp from "./Componets/Classcomp";
import React, { useState } from "react";

function App() {
  const [fun, setFun] = useState(false);
  const [cla, setCal] = useState(false);

  let funClick = () => {
    if (fun) {
      setFun(false);
    } else {
      setFun(true);
    }
  };

  let classClick = () => {
    if (cla) {
      setCal(false);
    } else {
      setCal(true);
    }
  };

  return (
    <div className="App">
      <h1 className="head">Styling using Functional and Class Component</h1>
      <br />
      <br />
      <div className="main">
        <div>
          <button onClick={funClick}>
            To see styling in function component
          </button>
          <button onClick={classClick}>
            To see styling in class component
          </button>
        </div>
      </div>
      <div className="main">
        <div>{fun ? <Function /> : ""}</div>
        <div>{cla ? <Classcomp /> : ""}</div>
      </div>
    </div>
  );
}

export default App;

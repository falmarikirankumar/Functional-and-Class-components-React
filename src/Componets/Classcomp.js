import React from "react";
// import { ReactDOM } from "react";

class Classcomp extends React.Component {
  render() {
    return (
      <div className="div2">
        <h2>This is created using class</h2>
        <h1>Component</h1>
        <p>This id done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    );
  }
}

export default Classcomp;

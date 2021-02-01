import "./App.css";
import { Weight } from "./Weight";
import { Height } from "./Height";
import { Result } from "./Result";
import React, { useState, useEffect } from "react";

function App() {
  const [height, setHeight] = useState();
  const [result, setResult] = useState();
  const [weight, setWeight] = useState();

  useEffect(() => {
    setResult((weight / Math.pow(height / 100, 2)).toFixed(2));
  }, [height, weight]);

  return (
    <div className="container">
      <Weight weight={weight} setWeight={setWeight} />
      <Height height={height} setHeight={setHeight} />
      <Result result={result} />
    </div>
  );
}

export default App;

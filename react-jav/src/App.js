import logo from "./logo.svg";
import "./App.css";
import { Weight } from "./Weight";
import { Height } from "./Height";
import { Result } from "./Result";
import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <div className="container">
      <Weight weights={(weight, setWeight)} />
      <Height height={height} />
      <Result stats={(weight, height)} />
    </div>
  );
}

export default App;

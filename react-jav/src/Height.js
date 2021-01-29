import React from "react";

export const Height = ({ setHeight }) => {
  return (
    <div className="container-height">
      <h3>Testmagasság (cm)</h3>
      <input onChange={(e) => setHeight(e.target.value)} />
    </div>
  );
};

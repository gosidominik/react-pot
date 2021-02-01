import React from "react";

export const Height = ({ setHeight,height }) => {
  return (
    <div className="container-height">
      <h3>Testmagasság (cm)</h3>
      <input value={height} onChange={(e) => setHeight(e.target.value)} />
    </div>
  );
};

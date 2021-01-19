import React, { useState } from "react";

export const Height = () => {
  const [height, setHeight] = useState();

  return (
    <div className="container">
      <h3>Testmagasság (cm)</h3>
      <input
        type="text"
        className="input-group"
        value={height}
        onChange={() => setHeight()}
      />
    </div>
  );
};

import React, { useState } from "react";

export const Weight = () => {
  const [weight, setWeight] = useState();

  return (
    <div className="container">
      <h3>Testtömeg (kg)</h3>
      <input
        type="text"
        className="input-group"
        value={weight}
        onChange={() => setWeight()}
      />
    </div>
  );
};

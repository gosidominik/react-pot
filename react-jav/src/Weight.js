import React from "react";

export const Weight = ({ setWeight,weight }) => {
  return (
    <div className="container-weight">
      <h3>Testtömeg (kg)</h3>
      <input value={weight} onChange={(e) => setWeight(e.target.value)} />
    </div>
  );
};

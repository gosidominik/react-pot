import React from "react";

export const Weight = ({ setWeight }) => {
  return (
    <div className="container-weight">
      <h3>Testtömeg (kg)</h3>
      <input onChange={(e) => setWeight(e.target.value)} />
    </div>
  );
};

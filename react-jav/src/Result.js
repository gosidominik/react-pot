import React, { useState } from "react";

export const Result = ({ stats }) => {
  const { height, weight } = stats;
  //   const [result, setResult] = useState();

  //   const weightIndex = () => {
  //     if (result < 18.5) {
  //       return "Sovány";
  //     } else if (result >= 18.5 && result <= 25) {
  //       return "Normál";
  //     } else {
  //       return "Túlsúlyos";
  //     }
  //   };

  return (
    <div className="container">
      <h1 className="tti">{weight / height}</h1>
      <h3 className="tti"></h3>
    </div>
  );
};

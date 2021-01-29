import React from "react";

export const Result = ({ result }) => {
  return (
    <div className="container-tti">
      <h1>{result}</h1>
      <h3
        className={`${
          result < 18.5 ? "sovány" : result > 25 ? "túlsúlyos" : "normál"
        }`}
      >
        {result < 18.5 ? "Sovány" : result > 25 ? "Túlsúlyos" : "Normál"}
      </h3>
    </div>
  );
};

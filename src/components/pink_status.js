import React from "react";

const PinkStatus = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "red",
          fontSize: "26px",
          padding: "20px",
          marginTop: "70px",
        }}
      >
        <h3 style={{ color: "white" }}>Results</h3>
        <p style={{ color: "white", fontSize: "20px" }}>
          PU Category 1 or above or scarring from previous pressure ulcers
        </p>
      </div>
    </>
  );
};

export default PinkStatus;

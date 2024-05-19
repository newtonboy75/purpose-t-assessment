import React from "react";

const OrangeStatus = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "orange",
          fontSize: "26px",
          padding: "20px",
          marginTop: "70px",
        }}
      >
        <h3 style={{ color: "white" }}>Results</h3>
        <p style={{ color: "white", fontSize: "20px" }}>
          No pressure ulcer but at risk
        </p>
      </div>
    </>
  );
};

export default OrangeStatus;

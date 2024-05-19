import React from "react";
import NoRisk from "./no_risk";
import PinkStatus from "./pink_status";
import OrangeStatus from "./orange_status";

const ResultPage = (props) => {
  if (props.result === "no-risk") {
    return <NoRisk />;
  }

  if (props.result === "pink-status") {
    return <PinkStatus />;
  }

  if (props.result === "orange-status") {
    return <OrangeStatus />;
  }
};

export default ResultPage;

import React from "react";
import { ReactFormBuilder, Registry } from "react-form-builder2";
import Demobar from "../components/demobar";



const FormBuilder = () => {
const queryParameters = new URLSearchParams(window.location.search);
const type = queryParameters.get("type");
const pid = queryParameters.get("pid")
const part = queryParameters.get("part")

const url = "http://localhost:5001/api/form";
const saveUrl = "http://localhost:5001/api/form?id=" + crypto.randomUUID() + "&type=pt" + "&projectid=" + pid + "&part=" + part;
//console.log(saveUrl);

  return (
    <>
      <Demobar />
      <ReactFormBuilder saveUrl={saveUrl} locale="en" saveAlways={true} />
    </>
  );
};

export default FormBuilder;

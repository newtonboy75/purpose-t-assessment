import React, { useEffect, useState } from "react";
import { ReactFormGenerator } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import ResultPage from "../components/result";

const FormPage = () => {
  var formid = window.location.href.split("/").pop();
  const saveUrl = "http://localhost:5001/api/form/" + formid;
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNun] = useState(0);
  const [riskStatus, setRiskStatus] = useState("no-risk");
  const [answers, setAnswers] = useState();
  let blue_ans = ["mobility_status_4", "_status_5", "clinical_judgement_2"];
  const pink_res = [
    "sacrum_3",
    "lbuttock_3",
    "rbuttock_3",
    "lischial_3",
    "rischial_3",
    "lhip_3",
    "rhip_3",
    "lheel_3",
    "rheel_3",
    "lankle_3",
    "rankle_3",
    "lelbow_3",
    "relbow_3",
  ];

  const orange_res = [
    "sacrum_2",
    "lbuttock_2",
    "rbuttock_2",
    "lischial_2",
    "rischial_2",
    "lhip_2",
    "rhip_2",
    "lheel_2",
    "rheel_2",
    "lankle_2",
    "rankle_2",
    "lelbow_2",
    "relbow_2",
  ];

  useEffect(() => {
    const getIt = () => {
      fetch(saveUrl)
        .then((res) => res.json())
        .then((json) => {
          setFormData(JSON.parse(json[pageNum].task_data)["task_data"]);
          setLoading(false);
        });
    };
    
    pageNum !== 2 && getIt();
  }, [pageNum]);

  const handleSubmit = (e) => {
    console.log(answers)
    if (pageNum === 0) {
      //if on first page
      let answer_data = [];
      for (let i in e) {
        const element = document.getElementById(
          "fid_preview_" + e[i]["value"][0]
        );
        answer_data.push(element.value);
      }
      //compare answers, if all blue direct to result page
      if (JSON.stringify(answer_data) === JSON.stringify(blue_ans)) {
        setPageNun(2);
      } else {
        setPageNun(1);
      }
    } else if (pageNum == 1) {
      //if on second page
      const inputs = document.forms[0].getElementsByTagName("input");
      let checked_inputs = [];
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked === true) {
          if (pink_res.indexOf(inputs[i].value) >= 0) {
            setRiskStatus("pink-status");
            setPageNun(2);
          } else if (orange_res.indexOf(inputs[i].value) >= 0) {
            setRiskStatus("orange-status");
            setPageNun(2);
          } else {
            setRiskStatus("no-risk");
            setPageNun(2);
          }
        }
      }
    }
  };

  const handleChange = (e) => {
    const inputs = document.forms[0].getElementsByTagName("input");
    let checked_inputs = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        checked_inputs.push(inputs[i].value);
      }
    }
    setAnswers([...checked_inputs]);
    //console.log(checked_inputs);
  };

  window.addEventListener("click", (e) => {
    if (pageNum !== 0) {
      if (e.target.type === "checkbox") {
        let clicked_item = e.target.value;
        let parent =
          e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByTagName(
            "input"
          );
        for (let i = 0; i < parent.length; i++) {
          if (parent[i].value !== clicked_item) {
            parent[i].checked = false;
          }
        }
      }
    }
  });

  if (pageNum == 2) {
    return <ResultPage result={riskStatus} />;
  }

  return (
    <>
      {!loading && (
        <ReactFormGenerator
          action_name="Next"
          form_action=""
          task_id={12} // Used to submit a hidden variable with the id to the form from the database.
          data={formData} // Question data
          onSubmit={(e) => handleSubmit(e)}
          onChange={(e) => handleChange(e)}
        />
      )}
    </>
  );
};

export default FormPage;

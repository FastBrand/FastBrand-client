import Navbar from "../../components/navbar/Navbar";
import MarkSelectForm from "../../components/markSelectForm/MarkSelectForm";
import NationSelectForm from "../../components/nationSelectForm/NationSelectForm";
import TrademarkForm from "../../components/trademarkForm/TrademarkForm";
import ClassificationForm from "../../components/classificationForm/ClassificationForm";
import ApplicantForm from "../../components/applicantForm/ApplicantForm";
import "./DomesticMark.css";
import ManagerForm from "../../components/managerForm/ManagerForm";
import Footer from "../../components/footer/Footer";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function DomesticMark() {
  const [trademarkData, setTrademarkData] = useState({});
  const [classificationData, setClassificationData] = useState({});
  const [managerData, setManagerData] = useState({});
  const [applicantData, setApplicantData] = useState({});

  const handleSubmit = () => {
    const data = {
      //...markSelectData
      ...trademarkData,
      ...classificationData,
      ...managerData,
      //...nationData,
      ...applicantData,
    };
    const endpoint =
      applicantData.type === "personal"
        ? "http://localhost:8080/api/register/personal"
        : "http://localhost:8080/api/register/corporate";

    const JSONData = JSON.stringify(data);
    console.log(JSONData);

    axios
      .post(endpoint, JSONData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("리스폰스");
        console.log(response);
      });
  };

  return (
    <div className="markPage">
      <Navbar backgroundColor={true} borderBottom={true} />
      <MarkSelectForm />
      <TrademarkForm onTrademarkDataChange={setTrademarkData} />
      <ClassificationForm onClassificationataChange={setClassificationData} />
      <ManagerForm onManagerChange={setManagerData} />
      <NationSelectForm />
      <ApplicantForm onApplicantChange={setApplicantData} />
      <Button onClick={handleSubmit} variant="contained">
        신청하기
      </Button>
    </div>
  );
}
export default DomesticMark;

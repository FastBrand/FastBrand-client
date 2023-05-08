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
  const [applicantType, setApplicantType] = useState({ poc: "personal" });
  const [countriesData, setcountriesData] = useState({}); 

  const markSelectData = {
    type: "국내",
  };

  const nationData = {
    country: "대한민국",
    madrid: "마드리드",
    direct: "각국출원",
    status: "진행상태",
  };

  const handleSubmit = () => {
    const data = {
      mark: {
        ...trademarkData,
        ...classificationData,
        ...markSelectData,
        ...applicantType,
        ...countriesData,
      },
      ...(applicantType.poc === "personal"
        ? { personal: { ...applicantData } }
        : { corporate: { ...applicantData } }),
      user: { ...managerData },
    };

    const endpoint =
      applicantType.poc === "personal"
        ? "http://localhost:8080/api/register/personal"
        : "http://localhost:8080/api/register/corporate";

    const JSONData = JSON.stringify(data);
    // console.log(JSONData);

    axios
      .post(endpoint, JSONData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="markPage">
      <Navbar backgroundColor={true} borderBottom={true} />
      <MarkSelectForm />
      <TrademarkForm onTrademarkDataChange={setTrademarkData} />
      <ClassificationForm onClassificationataChange={setClassificationData} />
      <ManagerForm onManagerChange={setManagerData} />
      <NationSelectForm onSelectedCountries={setcountriesData}/>
      <ApplicantForm
        onApplicantChange={setApplicantData}
        onApplicantTypeChange={setApplicantType}
      />
      <div>
      <Button id="submitButton" onClick={handleSubmit} variant="contained">
        견적보기
      </Button>
      </div>
    </div>
  );
}
export default DomesticMark;

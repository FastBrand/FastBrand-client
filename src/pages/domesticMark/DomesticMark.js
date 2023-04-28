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

  const [selectedMark, setSelectedMark] = useState('국내출원');

  const handleSelectedMark = (selectedMark) => {

  };
  
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
        ...nationData,
      },
      ...(applicantType.poc === "personal"
        ? { personal: { ...applicantData } }
        : { corporate: { ...applicantData } }),
      user: { ...managerData },
    };

    // 테스트용 데이터
    const data2 = {
      mark: {
        brand_name: "123",
        description: "123",
        image: "123",
        sector: "123",
        type: "123",
        poc: "personal",
        country: "123",
        madrid: "123",
        direct: "123",
        status: "123",
      },
      personal: {
        name_kor: "456",
        name_eng: "456",
        ssn: "456",
        personalEmail: "aaa@aaa.com",
        personalMobile: "456",
        personalPhone: "456",
        address: "456",
        detail: "456",
        zipcode: "456",
        agreement: "456",
      },
      user: {
        name: "999",
        email: "aaa@bb.com",
        mobile: "999",
        phone: "999",
        acc_num: "999",
      },
    };
    console.log(data);
    const endpoint =
      applicantType.poc === "personal"
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
        console.log(response);
      })
      .catch((error) => {
        console.log("에러");
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
     <NationSelectForm />
     <ApplicantForm
      onApplicantChange={setApplicantData}
      onApplicantTypeChange={setApplicantType}
      />
      <Button onClick={handleSubmit} variant="contained">
        신청하기
      </Button>
    </div>
  );
}
export default DomesticMark;

import Navbar from "../../components/navbar/Navbar";
import MarkSelectForm from "../../components/markSelectForm/MarkSelectForm";
import NationSelectForm from "../../components/nationSelectForm/NationSelectForm";
import TrademarkForm from "../../components/trademarkForm/TrademarkForm";
import ClassificationForm from "../../components/classificationForm/ClassificationForm";
import ApplicantForm from "../../components/applicantForm/ApplicantForm";
import ManagerForm from "../../components/managerForm/ManagerForm";
import TopButton from "../../components/topButton/TopButton";
import CheckModal from "../../components/CheckModal/CheckModal";
import { Button } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { useState } from "react";
import axios from "axios";
import "./DomesticMark.css";

const useStyles = makeStyles((theme)=>({
  root:{
    fontFamily: "Pretendard",
  },
}))

function DomesticMark() {
  const [trademarkData, setTrademarkData] = useState({});
  const [classificationData, setClassificationData] = useState({});
  const [managerData, setManagerData] = useState({});
  const [applicantData, setApplicantData] = useState({});
  const [applicantType, setApplicantType] = useState({ poc: "personal" });
  const [countriesData, setcountriesData] = useState({}); //개별출원
  const [madridData, setMadridData] = useState({}); //마드리드
  const [markSelectData, setmarkSelcetData] = useState({});
  const [modalOpen, setModalOpen] = useState(false); // 모달창 open 상태를 관리하는 상태 추가
  const classes = useStyles();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const nationData = { //개별출원 데이터 (
    country: countriesData
  };
  const nationData2 = { //마드리드출원 데이터
    country: madridData
  };
  
  const nationDataArray = Object.values(nationData.country);
  const madridDataArray = Object.values(nationData2.country);

  const nationDataString = nationDataArray.join(',');
  const madridDataString = madridDataArray.join(',');

  const handleSubmit = () => {

    if (markSelectData === "국내출원" || markSelectData === "국내+해외출원") {
      nationDataString = `한국, ${nationDataString}`;
    }

    const data = {
      mark: {
        ...trademarkData,
        ...classificationData,
        ...applicantType,
        type: markSelectData,
        country: "더미데이터",
        madrid: madridDataString,
        direct: nationDataString,
        status: "더미데이터"
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
    //console.log(JSONData);

    axios
      .post(endpoint, JSONData, {
        headers: {
          "Content-Type": "application/json",
        },}) 
      .then((response) => {
        console.log(response);
        console.log("성공");
      })
      .catch((error) => {
        console.log(error);
        console.log("실패");
        console.log(data);
        console.log(JSONData);
      });

  };

  return (
    <div className={classes.root}>
      <Navbar backgroundColor={true} borderBottom={true} />
      <MarkSelectForm onSelectedMark={setmarkSelcetData}/>
      <TrademarkForm onTrademarkDataChange={setTrademarkData} />
      <ClassificationForm onClassificationataChange={setClassificationData} />
      <ManagerForm onManagerChange={setManagerData} />

      {markSelectData === "국내출원" ? 
      null : 
      <NationSelectForm onSelectedCountries={setcountriesData} onSelectedMadrid={setMadridData} />}

      <ApplicantForm
        onApplicantChange={setApplicantData}
        onApplicantTypeChange={setApplicantType}
      />

      <Button
        id="submitButton01"
        onClick={() => setModalOpen(true)}
      >
        견적보기
      </Button>
      <TopButton />
      <CheckModal
        open={modalOpen}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        trademarkData={trademarkData}
        madridDataString={madridDataString}
        nationDataString={nationDataString}
        managerData={managerData}
        applicantData={applicantData}
        markSelectData={markSelectData}
      />
    </div>
  );
}
export default DomesticMark;

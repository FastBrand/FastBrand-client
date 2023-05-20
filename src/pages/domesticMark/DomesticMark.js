import Navbar from "../../components/navbar/Navbar";
import MarkSelectForm from "../../components/markSelectForm/MarkSelectForm";
import NationSelectForm from "../../components/nationSelectForm/NationSelectForm";
import TrademarkForm from "../../components/trademarkForm/TrademarkForm";
import ClassificationForm from "../../components/classificationForm/ClassificationForm";
import ApplicantForm from "../../components/applicantForm/ApplicantForm";
import ManagerForm from "../../components/managerForm/ManagerForm";
import TopButton from "../../components/topButton/TopButton";
import CheckModal from "../../components/CheckModal/CheckModal";
import Footer from "../../components/footer/Footer";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import axios from "axios";
import "./DomesticMark.css";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Pretendard",
  },
}));

function DomesticMark() {
  const [imageData, setImageData] = useState(null); // 이미지 파일
  const [sealData, setSealData] = useState(null);
  const [trademarkData, setTrademarkData] = useState({});
  const [classificationData, setClassificationData] = useState({});
  const [managerData, setManagerData] = useState({});
  const [applicantData, setApplicantData] = useState({});
  const [applicantType, setApplicantType] = useState({ poc: "personal" });
  const [countriesData, setcountriesData] = useState({}); //개별출원
  const [madridData, setMadridData] = useState({}); //마드리드
  const [madridPriceData, setMadridPriceData] = useState(0); //마드리드 출원 가격
  const [directPriceData, setDirectPriceData] = useState(0); //각국출원 가격
  const [markSelectData, setmarkSelcetData] = useState({});
  const [modalOpen, setModalOpen] = useState(false); // 모달창 open 상태를 관리하는 상태 추가
  const classes = useStyles();

  const nationData = {
    //개별출원 데이터 (
    country: countriesData,
  };
  const nationData2 = {
    //마드리드출원 데이터
    country: madridData,
  };

  const nationDataArray = Object.values(nationData.country);
  const madridDataArray = Object.values(nationData2.country);

  const nationDataString = nationDataArray.join(",");
  const madridDataString = madridDataArray.join(",");
  let directNationString = nationDataString;
  if (markSelectData === "국내출원" || markSelectData === "국내+해외출원") {
    directNationString = `[한국] ${nationDataString}`;
  }

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    const data = {
      mark: {
        ...trademarkData,
        ...classificationData,
        ...applicantType,
        type: markSelectData,
        country: "더미데이터",
        madrid: madridDataString,
        direct: directNationString,
        status: "더미데이터",
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

    const formData = new FormData();
    formData.append("image", imageData);
    formData.append("seal", sealData);
    formData.append("data", data);
    axios
      .post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(data);
        console.log(JSONData);
      });
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <MarkSelectForm onSelectedMark={setmarkSelcetData} />
      <TrademarkForm
        onTrademarkDataChange={setTrademarkData}
        onImageDataChange={setImageData}
      />
      <ClassificationForm onClassificationataChange={setClassificationData} />
      <ManagerForm onManagerChange={setManagerData} />
      {markSelectData === "국내출원" ? null : (
        <NationSelectForm
          onSelectedCountries={setcountriesData}
          onSelectedMadrid={setMadridData}
          onEachPrice={setDirectPriceData}
          onMadridPrice={setMadridPriceData}
        />
      )}
      <ApplicantForm
        onApplicantChange={setApplicantData}
        onApplicantTypeChange={setApplicantType}
        onSealDataChange={setSealData}
      />
      <Button id="submitButton01" onClick={() => setModalOpen(true)}>
        견적보기
      </Button>
      <TopButton />
      <CheckModal
        open={modalOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        trademarkData={trademarkData}
        madridDataString={madridDataString}
        directNationString={directNationString}
        managerData={managerData}
        applicantData={applicantData}
        markSelectData={markSelectData}
        classificationData={classificationData}
        applicantType={applicantType}
        madridPriceData={madridPriceData}
        directPriceData={directPriceData}
      />
      <Footer />
    </div>
  );
}
export default DomesticMark;

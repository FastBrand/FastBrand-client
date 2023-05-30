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
  const [markSelectData, setmarkSelcetData] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // 모달창 open 상태를 관리하는 상태 추가
  const [formatterData, setFormatterData] = useState(0);
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
    directNationString = `한국(고정) ${nationDataString}`;
  }

  const handleOpen = () => {
    const showError = (message) => {
      window.alert(message);
    };

    const checkField = (value, message) => {
      if (!value) {
        showError(message);
        return false;
      }
      return true;
    };
    // 상표
    if (!checkField(trademarkData.brand_name, "상표명을 입력해주세요.")) return;
    if (
      !checkField(trademarkData.description, "상표에 대한 설명을 입력해주세요.")
    )
      return;
    // 분류
    if (
      !checkField(classificationData.sector, "분류를 한 개 이상 선택해주세요.")
    )
      return;
    // 담당자
    if (!checkField(managerData.name, "담당자 성명을 입력해주세요.")) return;
    if (!checkField(managerData.email, "담당자 이메일을 입력해주세요.")) return;
    if (!/\S+@\S+\.\S+/.test(managerData.email)) {
      showError("담당자 이메일을 형식에 맞게 입력해주세요.");
      return;
    }
    if (!checkField(managerData.mobile, "담당자 휴대전화를 입력해주세요."))
      return;
    if (!/^[\d-]+$/.test(managerData.mobile)) {
      showError("담당자 휴대전화를 형식에 맞게 입력해주세요.");
      return;
    }
    if (managerData.phone && !/^[\d-]+$/.test(managerData.phone)) {
      showError("담당자 유선전화를 형식에 맞게 입력해주세요.");
      return;
    }
    if (!checkField(managerData.acc_num, "담당자 계좌번호를 입력해주세요."))
      return;
    // 출원국가
    if (!(markSelectData === "국내출원")) {
      if (nationDataString === "" && madridDataString === "") {
        showError("출원할 국가를 선택해주세요.");
        return;
      }
    }

    //출원인(개인)
    if (applicantType.poc === "personal") {
      if (
        !checkField(applicantData.name_kor, "출원인 성명(한글)을 입력해주세요.")
      )
        return;
      if (
        !checkField(applicantData.name_eng, "출원인 성명(영어)을 입력해주세요.")
      )
        return;
      if (!checkField(applicantData.ssn, "출원인 생년월일을 입력해주세요."))
        return;

      if (
        !checkField(
          applicantData.personalEmail,
          "출원인 이메일을 입력해주세요."
        )
      )
        return;

      if (!/\S+@\S+\.\S+/.test(applicantData.personalEmail)) {
        showError("출원인 이메일을 형식에 맞게 입력해주세요.");
        return;
      }
      if (
        !checkField(
          applicantData.personalMobile,
          "출원인 휴대전화를 입력해주세요."
        )
      )
        return;

      if (!/^[\d-]+$/.test(applicantData.personalMobile)) {
        showError("출원인 휴대전화를 형식에 맞게 입력해주세요.");
        return;
      }
    }
    //출원인(법인)
    if (applicantType.poc === "corporate") {
      if (
        !checkField(
          applicantData.name_kor,
          "출원인 법인명(한글)을 입력해주세요."
        )
      )
        return;
      if (
        !checkField(
          applicantData.name_eng,
          "출원인 법인명(영어)을 입력해주세요."
        )
      )
        return;
      if (
        !checkField(applicantData.brn, "출원인 사업자 등록번호를 입력해주세요.")
      )
        return;
      if (
        !checkField(applicantData.crn, "출원인 법인 등록번호를 입력해주세요.")
      )
        return;
      if (
        !checkField(
          applicantData.corporateName,
          "출원인 대표자 성명을 입력해주세요."
        )
      )
        return;
      if (
        !checkField(applicantData.ssn, "출원인 대표자 생년월일을 입력해주세요.")
      )
        return;
      if (
        !checkField(
          applicantData.corporateMobile,
          "출원인 법인 대표 휴대전화를 입력해주세요."
        )
      )
        return;
      if (
        !checkField(
          applicantData.corporateEmail,
          "출원인 법인 대표 이메일을 입력해주세요."
        )
      )
        return;
      if (!/\S+@\S+\.\S+/.test(applicantData.corporateEmail)) {
        showError("출원인 법인 대표 이메일을 형식에 맞게 입력해주세요.");
        return;
      }
    }
    if (
      !checkField(
        applicantData.agreement,
        "개인정보수집 및 활용에 동의해주세요."
      )
    )
      return;

    setModalOpen(true);
  };

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
      user: {
        ...managerData,
        price: formatterData.toString(),
      },
    };

    const endpoint =
      applicantType.poc === "personal"
        ? "http://localhost:8080/api/register/personal"
        : "http://localhost:8080/api/register/corporate";

    const JSONData = JSON.stringify(data);

    const formData = new FormData();
    formData.append("data", new Blob([JSONData], { type: "application/json" }));
    formData.append("image", imageData);
    if (applicantType.poc === "corporate") formData.append("seal", sealData);

    axios
      .post(endpoint, formData)
      .then((response) => {
        console.log(response);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <Navbar backgroundColor="white" />
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
          classificationDataString={classificationData.sector}
          markSelectData={markSelectData}
        />
      )}

      <ApplicantForm
        onApplicantChange={setApplicantData}
        onApplicantTypeChange={setApplicantType}
        onSealDataChange={setSealData}
      />

      <Button id="submitButton01" onClick={() => handleOpen(true)}>
        견적보기
      </Button>
      <TopButton />
      {modalOpen && (
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
          onFormattedPrice={setFormatterData}
        />
      )}
      <Footer />
    </div>
  );
}
export default DomesticMark;

import Navbar from "../../components/navbar/Navbar";
import MarkSelectForm from "../../components/markSelectForm/MarkSelectForm";
import NationSelectForm from "../../components/nationSelectForm/NationSelectForm";
import TrademarkForm from "../../components/trademarkForm/TrademarkForm";
import ClassificationForm from "../../components/classificationForm/ClassificationForm";
import ApplicantForm from "../../components/applicantForm/ApplicantForm";
import ManagerForm from "../../components/managerForm/ManagerForm";
import TopButton from "../../components/topButton/TopButton";
import { Button, Modal, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from '@material-ui/styles';
import { useState } from "react";
import axios from "axios";
import "./DomesticMark.css";

const useStyles = makeStyles((theme)=>({
  root:{
    fontFamily: "Pretendard",
  },
  modalBox:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #000',
    boxShadow: 18,
    p: 8,
    overflow: 'auto',
    width: '600px',
    height: '700px',
    backgroundColor:'#3E3E3F',
  },
  modalClose:{
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  checkText01:{
    fontSize: '32px',
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
    marginTop: '25px',
    marginBottom: '5px',
  },
  minicheckText01:{
    textAlign: 'center',
    color: '#cba585',
    fontWeight: 200,
  },
  checkText02:{
    marginLeft: '18px',
    marginRight: '20px',
    fontSize: '20px',
    fontWeight: 400,
    marginTop: '40px',
    color: 'white',
    textAlign: 'left',
    borderBottom: '2px solid white',
  },
}))




function DomesticMark() {
  const [trademarkData, setTrademarkData] = useState({});
  const [classificationData, setClassificationData] = useState({});
  const [managerData, setManagerData] = useState({});
  const [applicantData, setApplicantData] = useState({});
  const [applicantType, setApplicantType] = useState({ poc: "personal" });
  const [countriesData, setcountriesData] = useState({});
  const [modalOpen, setModalOpen] = useState(false); // 모달창 open 상태를 관리하는 상태 추가
  const classes = useStyles();

  const CheckModal = () => {
    return (
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box className={classes.modalBox}>
          <Box className={classes.modalClose} >
          <IconButton onClick={handleCloseModal}>
            <CloseIcon sx={{color:'white'}} />
          </IconButton>
          </Box>
          <div className={classes.checkText01}>견적 내용</div>
          <p className={classes.minicheckText01}>※ 결제는 견적을 변리사무소 메일로 발송하고 입력하신 메일로 연락드린 후에 진행됩니다.</p>
          <div className={classes.checkText02}>{markSelectData.type} 패키지</div>
          <div className={classes.checkText02}>VAT</div>
          <div className={classes.checkText02}>특허청 관납료</div>
          <div className={classes.checkText02}>상표명</div>
          <div className={classes.checkText02}>출원인 성명</div>
          <div className={classes.checkText02}>담당자 성명</div>
          <Button id="submitButton02"
          onClick={handleSubmit}
          variant="contained">
          견적발송
          </Button>
          </Box>
      </Modal>
    );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
      } 
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <Navbar backgroundColor={true} borderBottom={true} />
      <MarkSelectForm />
      <TrademarkForm onTrademarkDataChange={setTrademarkData} />
      <ClassificationForm onClassificationataChange={setClassificationData} />
      <ManagerForm onManagerChange={setManagerData} />
      <NationSelectForm onSelectedCountries={setcountriesData} />
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
      <CheckModal/>
    </div>
  );
}
export default DomesticMark;

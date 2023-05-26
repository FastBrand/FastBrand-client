import { Grid } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import StepOne from "../../assets/images/step/절차01.svg";
import StepTwo from "../../assets/images/step/절차02.svg";
import StepThree from "../../assets/images/step/절차03.svg";
import StepFour from "../../assets/images/step/절차04.svg";
import StepFive from "../../assets/images/step/절차05.svg";
import StepSix from "../../assets/images/step/절차06.svg";
import StepSeven from "../../assets/images/step/절차07.svg";
import { Title, StepTitle, StepContent, StepContainer } from "./StepStyles";

const Step = () => {
  return (
    <>
      <Navbar backgroundColor="white" />
      <StepContainer>
        <Title>절차안내</Title>
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={6} md={3} justifyContent="center">
            <img src={StepOne} alt="절차안내01" />
            <StepTitle>상표등록신청</StepTitle>
            <StepContent>
              출원인 인적사항
              <br />
              상표정보, 상품류 지정상품 선정
            </StepContent>
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={StepTwo} alt="절차안내02" />
            <StepTitle>
              상표전문가를 통한
              <br />
              등록가능성 검토
            </StepTitle>
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={StepThree} alt="절차안내03" />
            <StepTitle>상표출원준비</StepTitle>
            <StepContent>대리인선임, 특허고객정보등록</StepContent>
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={StepFour} alt="절차안내04" />
            <StepTitle>출원서 작성</StepTitle>
            <StepContent>우선심사신청서 작성</StepContent>
          </Grid>
          <Grid item xs={5} md={3}>
            <img src={StepFive} alt="절차안내05" />
            <StepTitle>출원완료보고</StepTitle>
            <StepContent>
              출원번호통지서, 출원서사본, 영수증
              <br />
              출원인에게 통보(SNS, 이메일)
            </StepContent>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5} md={3}>
            <img src={StepSix} alt="절차안내06" />
            <StepTitle>특허청심사 및 결과통지보고</StepTitle>
            <StepContent>
              출원인에게 통보(SNS, 이메일)
              <br />
              등록료 납부
            </StepContent>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5} md={3}>
            <img src={StepSeven} alt="절차안내07" />
            <StepTitle>등록상표권 관리</StepTitle>
            <StepContent>
              상표등록증발송, 상표갱신관리, <br />
              권리자 변동(주소이전등)사항관리
            </StepContent>
          </Grid>
        </Grid>
      </StepContainer>
      <Footer />
    </>
  );
};

export default Step;

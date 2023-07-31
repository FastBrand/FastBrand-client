import React from "react";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { Fade } from "@mui/material";
import { CustomBox, Title, ButtonLink, SubTitle, MainImg } from "./MainStyle";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import mainImg from "../../assets/images/mainPage.svg";

const Main = () => {
  useEffect(() => {
    // Google Analytics 초기화
    ReactGA.initialize("UA-264549276-1");

    // 페이지 뷰 기록
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Navbar backgroundColor="none" />

      <CustomBox>
        <div>
          <Fade timeout={1000} in={true} mountOnEnter unmountOnExit>
            <Title variant="h1">
              신속하고 합리적인
              <br />
              <span style={{ color: "#0992E3" }}>상표등록</span>
            </Title>
          </Fade>
          <Fade timeout={1000} in={true} mountOnEnter unmountOnExit>
            <SubTitle>고민하지 말고 신청하세요!</SubTitle>
          </Fade>
          <Fade timeout={2000} in={true} mountOnEnter unmountOnExit>
            <ButtonLink to="/domesticMark">상표등록 신청하기</ButtonLink>
          </Fade>
        </div>
        <MainImg src={mainImg} />
      </CustomBox>
      <Footer />
    </>
  );
};

export default Main;

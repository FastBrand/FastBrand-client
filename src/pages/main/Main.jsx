import {
  CustomBox,
  Title,
  BackgroundBox,
  ButtonLink,
  MainContainer,
  SubTitle,
} from "./MainStyle";
import { Box } from "@mui/material";
import Footer from "../../components/footer/Footer";
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Main = () => {
  return (
    <>
      <BackgroundBox>
        <MainContainer>
          <Navbar backgroundColor="none" />
          <CustomBox>
            <Box>
              <Title variant="h1">
                신속하고 합리적인
                <br />
                <Box component="span" sx={{ color: "#CBA585" }}>
                  상표등록
                </Box>
              </Title>
              <SubTitle>고민하지 말고 신청하세요!</SubTitle>
              <ButtonLink to="/domesticMark">상표등록 신청하기</ButtonLink>
            </Box>
          </CustomBox>
        </MainContainer>
      </BackgroundBox>
      <Footer />
    </>
  );
};

export default Main;

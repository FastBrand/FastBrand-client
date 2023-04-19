import { CustomBox, Title, BackgroundBox, ButtonLink } from "./MainStyle";
import { Box, Typography, Container } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Main = () => {
  return (
    <BackgroundBox>
      <Container>
        <Navbar backgroundColor={false} borderBottom={false} />
        <CustomBox>
          <Box>
            <Title variant="h1">
              신속하고 합리적인
              <br />
              <Box component="span" sx={{ color: "#CBA585" }}>
                상표등록
              </Box>
            </Title>
            <Typography
              sx={{
                fontFamily: "Pretendard",
                fontSize: "20px",
                color: "white",
                fontWeight: "500",
                margin: "0 0 40px 5px",
              }}
            >
              고민하지 말고 신청하세요!
            </Typography>
            <ButtonLink to="/domesticMark">상표등록 신청하기</ButtonLink>
          </Box>
        </CustomBox>
      </Container>
    </BackgroundBox>
  );
};

export default Main;

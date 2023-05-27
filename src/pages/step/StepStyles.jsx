import { styled } from "@mui/system";
import { Typography, Container } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: 600,
  fontSize: "40px",
  textAlign: "center",
  marginTop: "200px",
  marginBottom: "3vw",
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "24px",
  fontWeight: 700,
  marginTop: "-50px",
}));

export const StepContent = styled(Typography)(({ theme }) => ({
  paddingTop: 1,
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "18px",
}));

export const StepContainer = styled(Container)(({ theme }) => ({
  paddingLeft: "5vw",
  paddingRight: "5vw",
  marginTop: "150px",
  marginBottom: "150px",
}));

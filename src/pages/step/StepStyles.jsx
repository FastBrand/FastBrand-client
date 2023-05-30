import { styled } from "@mui/system";
import { Typography, Container } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: 500,
  fontSize: "35px",
  textAlign: "center",
  // marginTop: "200px",
  // marginBottom: "3vw",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "24px",
  fontWeight: 600,
  marginTop: "-30px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const StepContent = styled(Typography)(({ theme }) => ({
  paddingTop: 1,
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontWeight: 300,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const StepContainer = styled(Container)(({ theme }) => ({
  paddingLeft: "5vw",
  paddingRight: "5vw",
  marginTop: "150px",
  marginBottom: "80px",
}));

export const ExtraContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#eee",
  fontFamily: "Pretendard",
  borderRadius: "3px",
  color: "gray",
  padding: "30px",
  marginTop: "50px",
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

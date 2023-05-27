import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: 600,
  fontSize: "40px",
  textAlign: "center",
  marginTop: "200px",
  marginBottom: "3vw",
  [theme.breakpoints.down("lg")]: {
    fontSize: "37px",
  },
}));

export const FAQContainer = styled("div")(({ theme }) => ({
  paddingLeft: "25vw",
  paddingRight: "25vw",
  paddingBottom: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
}));

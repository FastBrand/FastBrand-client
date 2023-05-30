import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: 500,
  fontSize: "35px",
  textAlign: "center",
  marginTop: "150px",
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const FAQContainer = styled("div")(({ theme }) => ({
  paddingLeft: "15vw",
  paddingRight: "15vw",
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

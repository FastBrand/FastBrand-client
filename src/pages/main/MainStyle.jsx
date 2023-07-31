import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const MainImg = styled("img")(({ theme }) => ({
  width: "55%",
  [theme.breakpoints.down("1370")]: {
    marginTop: "50px",
    height: "70%",
    width: "70%",
  },
  [theme.breakpoints.down("1200")]: {
    width: "100%",
    height: "60%",
  },
  [theme.breakpoints.down("750")]: {
    marginTop: "10px",
  },
  [theme.breakpoints.down("600")]: {
    marginTop: 0,
    width: "100%",
    height: "50%",
  },
  [theme.breakpoints.down("500")]: {
    marginTop: "100px",
    height: "30%",
  },
  height: "100vh",
}));

export const CustomBox = styled("div")(({ theme }) => ({
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "10px",
  // gap: theme.spacing(5),
  transition: "0.2s",
  padding: "0 14vw ",
  [theme.breakpoints.down("1370")]: {
    padding: "0 3vw",
    marginTop: "110px",
    flexDirection: "column",
    textAlign: "center",
  },
  height: "100vh",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontSize: "60px",
  fontWeight: 400,
  [theme.breakpoints.down("1370")]: {
    "& br": {
      display: "none",
    },
  },
  [theme.breakpoints.down("600")]: {
    fontSize: "45px",
  },
}));

export const ButtonLink = styled(Link)(({ theme }) => ({
  // backgroundImage: "linear-gradient(to right, #9AF288 0%, #0992E3 40%)",
  backgroundColor: "#0992E3",
  marginLeft: "3px",
  padding: "16px 24px",
  textAlign: "center",
  justifyContent: "center",
  transition: "0.5s",
  borderRadius: "3px",
  fontSize: "24px",
  color: "white",
  fontWeight: "600",
  fontFamily: "Pretendard",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#00BAEF",
  },
  [theme.breakpoints.down("600")]: {
    fontSize: "18px",
  },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontSize: "30px",
  fontWeight: 500,
  padding: "0 0 40px 5px",
  [theme.breakpoints.down("600")]: {
    fontSize: "24px",
  },
}));

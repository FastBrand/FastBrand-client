import { styled } from "@mui/system";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import mainImg from "../../assets/images/메인.jpeg";

export const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(5),
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontSize: "80px",
  fontWeight: "600",
  color: "#fff",
  margin: theme.spacing(24, 0, 0, 0),
  // theme.transitions.create
}));

export const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backgroundBlendMode: "multiply",
  backgroundImage: `url(${mainImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
  [theme.breakpoints.down("md")]: {
    backgroundPosition: "center",
  },
}));

export const ButtonLink = styled(Link)(({ theme }) => ({
  backgroundImage: "linear-gradient(to right, #CBA585 0%, #9F6A5B 30%)",
  margin: "3px",
  padding: "16px 24px",
  textAlign: "center",
  justifyContent: "center",
  transition: "0.5s",
  backgroundSize: "200% auto",
  borderRadius: "5px",
  fontSize: "18px",
  color: "white",
  fontWeight: "600",
  fontFamily: "Pretendard",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    backgroundPosition: "right center",
  },
}));

import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import companyImage01 from "../../assets/images/companyimage01.jpg";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: 600,
  fontSize: "37px",
  textAlign: "center",
  marginTop: "100px",
  marginBottom: "3vw",
  color: "white",
  height: "100%",
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginTop: "150px",
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

export const InfoBox01 = styled("div")(({ theme }) => ({
  fontFamily: "Prentendard",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${companyImage01})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InfoBox02 = styled("div")(({ theme }) => ({
  fontFamily: "Prentendard",
  padding: "50px 18vw 0 18vw",

  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("xl")]: {
    padding: "50px 10vw 0 10vw",
  },
  [theme.breakpoints.down("1250")]: {
    paddingLeft: "2vw",
    paddingRight: "2vw",
  },
  [theme.breakpoints.down("800")]: {
    flexDirection: "column",
    paddingTop: "0",
  },
}));

export const Strong = styled("strong")({
  color: "#e3093c",
});

export const Text = styled("div")({
  fontWeight: 600,
  color: "#09a4e3",
  fontSize: "18px",
  marginLeft: "2px",
});

export const SubTitle = styled("div")({
  fontSize: "24px",
  fontWeight: 600,
});

export const Paragraph = styled("p")({
  marginLeft: "2px",
  fontSize: "16px",
});

export const Image01 = styled("img")(({ theme }) => ({
  margin: "auto",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("800")]: {
    margin: "0 auto",
    width: "100%",
  },
}));

export const Image02 = styled("img")(({ theme }) => ({
  margin: "auto 30px auto auto",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("800")]: {
    margin: "0 auto",
    width: "90%",
  },
}));

export const Container = styled("div")({});

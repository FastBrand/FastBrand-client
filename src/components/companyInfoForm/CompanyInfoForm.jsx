import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Box, Fade } from "@material-ui/core";
import companyImage from "../../assets/images/skyline.jpeg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Prentendard",
  },
  sectionTitle: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "40px",
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "3vw",
    color: "white",
  },
  sectionTitle02: {
    fontFamily: "Prentendard",
    marginTop: "30px",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "500",
    color: "#141221",
  },
  sectionTitle03: {
    fontFamily: "Prentendard",
    marginTop: "38px",
    fontSize: "38px",
    color: "#0c273c",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "600",
  },
  serviceImg: {
    height: 200,
    objectFit: "cover",
    width: "100%",
  },
  linkButton: {
    fontFamily: "Prentendard",
    width: "200px",
    height: "50px",
    marginTop: "50px",
    fontSize: "18px",
    backgroundColor: "transparent",
    color: "white",
    border: "3px solid white",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  gridBox: {
    fontFamily: "Prentendard",
    border: "2px solid #cba585",
    marginLeft: "100px",
    marginRight: "100px",
    paddingTop: "30px",
  },
  paragraphs: {
    fontFamily: "Prentendard",
    fontSize: "18px",
    fontWeight: 400,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
    display: "flex",
  },
  paragraphs02: {
    fontFamily: "Prentendard",
    color: "#f3eae8",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "30px",
    margin: "auto",
    display: "flex",
  },

  infoBox01: {
    fontFamily: "Prentendard",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${companyImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
  },
  infoBox02: {
    fontFamily: "Prentendard",
    backgroundColor: "white",
    height: "70vh",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
  },
  infoBox03: {
    fontFamily: "Prentendard",
    backgroundColor: "#3E3E3F",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
  },
}));

function CompanyInfoForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar backgroundColor="white" />
      <Box className={classes.infoBox01} sx={{ height: "100%" }}>
        <Fade timeout={1000} in={true}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography className={classes.sectionTitle} variant="h3">
                특허법인 원전(元全)
              </Typography>
              <Button
                className={classes.linkButton}
                variant="contained"
                onClick={() => window.open("http://www.wonjon.com/")}
              >
                더 알아보기
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </Box>
      <Box className={classes.infoBox02} sx={{ height: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" className={classes.sectionTitle03}>
              CEO 인사말
            </Typography>
            <Typography variant="h4" className={classes.sectionTitle02}>
              " 특허법인 원전(元全)의 홈페이지를 찾아주셔서 대단히 감사합니다 "
            </Typography>
          </Grid>
        </Grid>
        <Typography className={classes.paragraphs} variant="body1">
          여러분의 소중한 지적재산권의 출원, 등록, 관리, 보호를 위하여 최선을
          다하고 있는 특허법인 원전의 소개 말씀을 올리겠습니다.
          <br />
          <br />
          특허제도의 역사가 일천한 한국에 있어서, 저희들 원전은 전통있는
          사무소중의 하나로서 1969년 설립이래
          <br />
          특허, 실용신안, 디자인, 상표, 저작권, 컴퓨터프로그램, 반도체 배치설계,
          라이센싱 등의 출원, 등록, 심판 및 침해소송 등<br />
          국내외 고객 여러분의 지적재산권 전반에 관한 업무를 대리하고 있습니다.
          <br />
          <br />
          한편, 저희들 원전은 특허청과의 유기적인 업무협력체제를 유지하고 기동성
          있는 업무를 수행하고 있으며,
          <br />
          기계, 금속, 재료, 전기, 전자, 반도체, 통신, 비즈니스 모델, 물리, 화학,
          생명공학, 약학, 상표, 디자인 등의
          <br />
          출원, 등록, 심판, 소송 등 전분야에 걸친 업무를 대리하는 국제적인
          특허법인으로서 오늘에 이르기까지
          <br />
          등록, 심판, 소송 등 최상의 성공률을 견지해 오고 있습니다. 또한, 원전은
          세계주요국가의 특허사무소와 긴밀히 유대하여
          <br />
          국내외의 발명, 고안 및 상표의 해외출원등록을 완벽하게 처리하고
          있습니다. 끝으로 많은 활용과 지도, 편달 있으시기를 바랍니다.
          <br />
          <br />
          감사합니다.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
}
export default CompanyInfoForm;

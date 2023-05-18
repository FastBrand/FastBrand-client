import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button, Box} from '@material-ui/core';
import companyImage from '../../assets/images/skyline.jpeg';
import Navbar from '../navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Prentendard',
    
  },
  sectionTitle: {
    fontFamily: "Pretendard",
    fontWeight: 600,
    fontSize: "40px",
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "3vw",
    color: 'white'
  },
  sectionTitle02: {
    fontFamily: 'Prentendard',
    marginTop: "30px",
    marginBottom: "20px",
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: '600',
    color: '#141221',
  },
  sectionTitle03: {
    fontFamily: 'Prentendard',
    color:'#f3eae8',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '600'
  },
  sectionTitle04: {
    fontFamily: 'Prentendard',
    color:'#cba585',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '400',
  },
  serviceImg: {
    height: 200,
    objectFit: 'cover',
    width: '100%'
  },
  linkButton: {
    fontFamily: 'Prentendard',
    width: '200px',
    height: '50px',
    marginTop: '50px',
    marginLeft: '170px',
    fontSize: '18px',
    backgroundColor:'transparent',
    color:'white',
    border: '3px solid white',
    marginLeft: 'auto', 
    marginRight: 'auto',
    display: 'block' 
  },
  gridBox: {
    fontFamily: 'Prentendard',
    border:"2px solid #cba585",
    marginLeft: '100px',
    marginRight: '100px',
    paddingTop: '30px'
  },
  paragraphs:{
    fontFamily: 'Prentendard',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    margin: 'auto',
    display: 'flex',
  },
  paragraphs02:{
    fontFamily: 'Prentendard',
    color: '#f3eae8',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    marginTop: '10px',
    marginBottom: '30px',
    margin: 'auto',
    display: 'flex',
  },

  infoBox01:{
    fontFamily: 'Prentendard',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${companyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto', 
  },
  infoBox02:{
    fontFamily: 'Prentendard',
    backgroundColor: 'white',
    height: '55vh',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto' ,
  },
  infoBox03:{
    fontFamily: 'Prentendard',
    backgroundColor: '#3E3E3F',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto' ,
  }

}));

function CompanyInfoForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
    <Box className={classes.infoBox01} sx={{ height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography className={classes.sectionTitle} variant="h3">
            특허법인 원전(元全)
            </Typography>
            <Button
                className={classes.linkButton}
                variant="contained"
                onClick={() => window.open('http://www.wonjon.com/')}
            >
            더 알아보기
            </Button>
          </Grid>
        </Grid>
    </Box>

    <Box className={classes.infoBox02} sx={{ height: '100%' }}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
        <Typography variant="h4" className={classes.sectionTitle02}>
        " 특허법인 원전(元全)의 홈페이지를 찾아주셔서 대단히 감사합니다 "
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography className={classes.paragraphs} variant="body1">
        여러분의 소중한 지적재산권의 출원, 등록, 관리, 보호를 위하여 최선을 다하고 있는 특허법인 원전의 소개 말씀을 올리겠습니다.<br/><br/>

        특허제도의 역사가 일천한 한국에 있어서, 저희들 원전은 전통있는 사무소중의 하나로서 1969년 설립이래<br/>
        특허, 실용신안, 디자인, 상표, 저작권, 컴퓨터프로그램, 반도체 배치설계, 라이센싱 등의 출원, 등록, 심판 및 침해소송 등<br/>
        국내외 고객 여러분의 지적재산권 전반에 관한 업무를 대리하고 있습니다.<br/><br/>

        한편, 저희들 원전은 특허청과의 유기적인 업무협력체제를 유지하고 기동성 있는 업무를 수행하고 있으며,<br/>
        기계, 금속, 재료, 전기, 전자, 반도체, 통신, 비즈니스 모델, 물리, 화학, 생명공학, 약학, 상표, 디자인 등의<br/>
        출원, 등록, 심판, 소송 등 전분야에 걸친 업무를 대리하는 국제적인 특허법인으로서
        오늘에 이르기까지<br/>
        등록, 심판, 소송 등 최상의 성공률을 견지해 오고 있습니다. 또한, 원전은 세계주요국가의 특허사무소와 긴밀히 유대하여<br/>
        국내외의 발명, 고안 및 상표의 해외출원등록을 완벽하게 처리하고 있습니다.
        끝으로 많은 활용과 지도, 편달 있으시기를 바랍니다.<br/><br/>

        감사합니다.
        </Typography>
         </Grid>
        </Grid>
    </Box> 

    <Box className={classes.infoBox03} sx={{ height: '100%' }}>
    <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
            <Typography variant="h4" className={classes.sectionTitle03}>원전의 특징(元全)</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Box className={classes.gridBox}>
        <Typography variant="h5" className={classes.sectionTitle04}>
        특허법인 원전은 변리사법에 의하여 구성원 전원이 무한책임을 지는 특허법인(특허청 특허법인 인가 제1호)입니다.<br/>
        </Typography>
        <Typography variant='body1' className={classes.paragraphs02}>
            저희들 원전은 성심과 열의를 다하여 더욱 높은 질의 특허업무 서비스를 제공하고자 최선을 다하여<br/>
            모든 업무를 전문변리사의 책임하에 수행합니다.
            또한, 담당업무를 변리사가 직접 책임처리 함으로써 최양질의 서비스를 제공합니다.
        </Typography>
        </Box>
        </Grid>

        <Grid item xs={12} md={12}>
        <Box className={classes.gridBox}>
        <Typography variant="h5" className={classes.sectionTitle04}>
        특허의 출원에서 관리 보호 침해소송에 이르기까지 토탈서비스 체제를 구축하여 운영하고 있습니다.<br/>
        </Typography>
        <Typography variant='body1' className={classes.paragraphs02}>
        특허의 출원에서 등록 , 심판, 소송 (침해소송포함)에 이르기까지 특허에 관한 모든 업무를 총괄하여 봉사하는<br/>
        즉, 토탈서비스의 시스템을 구축하여 고객에게 불편이 없도록 봉사해드리고 있습니다.
        </Typography>
        </Box>
        </Grid>
        
        <Grid item xs={12} md={12}>
        <Box className={classes.gridBox}>
        <Typography variant="h5" className={classes.sectionTitle04}>
        가장 합리적이고 부담없는 요금으로 해외출원을 돕기 위하여 해외특허출원 전담팀을 운영하고 있습니다.<br/>
        </Typography>
        <Typography variant='body1' className={classes.paragraphs02}>
        해외 각국의 신용있는 특허사무소들과 유기적으로 협력하여 가장 합리적이고 부담없는 요금으로<br/>
        우리 기업들의 해외출원을 도와드리고자 해외특허출원의 전담팀을 운영하고 있습니다.
        </Typography>
        </Box>
        </Grid>     
        </Grid>

    </Box>
</div>
) 
};
export default CompanyInfoForm;

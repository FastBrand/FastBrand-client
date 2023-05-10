import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import companyImage from '../../assets/images/skyline.jpeg';
import MuiImage from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Prentendard'
  },
  container: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
  },
  serviceImg: {
    height: 200,
    objectFit: 'cover',
    width: '100%'
  },
  linkButton: {
    width: '200px',
    height: '50px',
    marginLeft: '400px',
    fontSize: '18px',
    backgroundColor:'transparent',
    color:'black',
    border: '0.5px solid #000',
  }
}));

function CompanyInfoForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h2" className={classes.sectionTitle}>
          회사 소개
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <MuiImage src={companyImage} alt="회사 이미지"
          aspectRatio={10 / 7} // 이미지 가로 세로 비율 설정
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">
            특허법인 원전(元全)
            </Typography>
            <Typography variant="body1" paragraph>
            <br/>            
            여러분의 소중한 지적재산권의 출원, 등록, 관리, 보호를 위하여 최선을 다하고 있는 특허법인 원전의 소개 말씀을 올리겠습니다.
            특허제도의 역사가 일천한 한국에 있어서, 저희들 원전은 전통있는 사무소중의 하나로서 1969년 설립이래
            특허, 실용신안, 디자인, 상표, 저작권, 컴퓨터프로그램, 반도체 배치설계, 라이센싱 등의 출원, 등록, 심판 및
            침해소송 등 국내외 고객 여러분의 지적재산권 전반에 관한 업무를 대리하고 있습니다.<br/><br/>
            한편, 저희들 원전은 특허청과의 유기적인 업무협력체제를 유지하고 기동성 있는 업무를 수행하고 있으며,
            기계, 금속, 재료, 전기, 전자, 반도체, 통신, 비즈니스 모델, 물리, 화학, 생명공학, 약학, 상표, 디자인 등의 출원, 등록, 심판, 소송 등 
            전분야에 걸친 업무를 대리하는 국제적인 특허법인으로서 오늘에 이르기까지 등록, 심판, 소송 등 최상의 성공률을 견지해 오고 있습니다.<br/><br/>
            또한, 원전은 세계주요국가의 특허사무소와 긴밀히 유대하여 국내외의 발명, 고안 및 상표의 해외출원등록을 완벽하게 처리하고 있습니다.
            끝으로 많은 활용과 지도, 편달 있으시기를 바랍니다. 감사합니다.
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
        <Typography variant="h2" className={classes.sectionTitle}>
        특허법인 원전(元全)의 특징 
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src="service1-image.jpg"
              alt="서비스 1 이미지"
              className={classes.serviceImg}
            />
            <Typography variant="h4">
                특허청 특허법인 인가 제1호
            </Typography>
            <Typography variant="body1" paragraph>
            저희들 원전은 성심과 열의를 다하여 더욱 높은 질의 특허업무 서비스를 제공하고자
            최선을 다하여 모든 업무를 전문변리사의 책임하에 수행합니다.
            또한, 담당업무를 변리사가 직접 책임처리 함으로써 최양질의 서비스를 제공합니다.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src="service2-image.jpg"
              alt="서비스 2 이미지"
              className={classes.serviceImg}
            />
            <Typography variant="h4">토탈서비스 체제를 구축</Typography>
            <Typography variant="body1" paragraph>
            특허의 출원에서 등록 , 심판, 소송 (침해소송포함)에 이르기까지 특허에 관한 모든 업무를 총괄하여 봉사하는
            즉, 토탈서비스의 시스템을 구축하여 고객에게 불편이 없도록 봉사해드리고 있습니다.
            </Typography>
            </Grid>
      <Grid item xs={12} md={4}>
        <img
          src="service3-image.jpg"
          alt="서비스 3 이미지"
          className={classes.serviceImg}
        />
        <Typography variant="h4">해외특허출원 전담팀을 운영</Typography>
        <Typography variant="body1" paragraph>
        해외 각국의 신용있는 특허사무소들과 유기적으로 협력하여
        가장 합리적이고 부담없는 요금으로 우리 기업들의 해외출원을 도와드리고자 
        해외특허출원의 전담팀을 운영하고 있습니다.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</div>
) 
};
export default CompanyInfoForm;

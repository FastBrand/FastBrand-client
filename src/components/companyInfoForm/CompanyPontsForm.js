import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar/Navbar';
import { Container, Grid, Typography, Button, Box} from '@material-ui/core';
import companyImage01 from '../../assets/images/companyimage01.jpg';
import companyImage02 from '../../assets/images/calculatorImage.jpeg';

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
    marginTop: '18px',
    marginBottom: "18px",
    marginLeft: '50px',
    textAlign: 'left',
    fontSize: '32px',
    fontWeight: '600',
    color: '#c48240',
  },
  sectionTitle02_1: {
    fontFamily: 'Prentendard',
    marginTop: '18px',
    marginBottom: "10px",
    marginLeft: '50px',
    textAlign: 'left',
    fontSize: '32px',
    fontWeight: '600',
    color: '#c48240',
  },
  sectionTitle03: {
    fontFamily: 'Prentendard',
    marginBottom: "10px",
    textAlign: 'right',
    marginRight: '50px',
    fontSize: '32px',
    fontWeight: '600',
    color: '#c48240',
  },
  sectionTitle04: {
    fontFamily: 'Prentendard',
    marginRight: '50px',
    marginBottom: "3px",
    textAlign: 'right',
    fontSize: '32px',
    fontWeight: '600',
    color: '#141221',
  },
  gridBox: {
    fontFamily: 'Prentendard',
    marginLeft: '100px',
    marginTop: '10px',
  },
  gridBox02: {
    fontFamily: 'Prentendard',
    marginRight: '200px',
    marginTop: '50px',
  },
  paragraphs:{
    fontFamily: 'Prentendard',
    color: 'black',
    fontSize: '18px',
    alignItems: 'right',
    justifyContent: 'right',
    textAlign:'right',
    margin: 'auto',
    marginRight: '80px',
    marginBottom: '30px',
    display: 'flex',
  },
  paragraphs02:{
    fontFamily: 'Prentendard',
    fontSize: '18px',
    color: 'black',
    alignItems: 'left',
    justifyContent: 'left',
    textAlign:'left',
    margin: 'auto',
    marginLeft: '50px',
    marginBottom: '30px',
    display: 'flex',
  },
  paragraphs03:{
    fontFamily: 'Prentendard',
    fontSize: '18px',
    color: 'black',
    alignItems: 'right',
    justifyContent: 'right',
    textAlign:'right',
    margin: 'auto',
    marginRight: '50px',
    marginBottom: '50px',
    display: 'flex',
  },
  infoBox01:{
    fontFamily: 'Prentendard',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${companyImage01})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  infoBox02:{
    fontFamily: 'Prentendard',
    backgroundColor: 'white',
    marginTop: '80px',
    height: '65vh',
    display: 'block',
    alignItems: 'left',
    justifyContent: 'left',
    overflow: 'auto' ,
  },
  infoBox03:{
    fontFamily: 'Prentendard',
    backgroundColor: 'white',
    padding: '20px',
    height: '80vh',
    display: 'block',
    alignItems: 'left',
    justifyContent: 'left',
    overflow: 'auto' ,
  }

}));

function CompanyPointForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />

      <Box className={classes.infoBox01}>
     
      <Typography variant="h4" className={classes.sectionTitle}>
         서비스 안내
        </Typography>
        
      </Box>

      
    <Box className={classes.infoBox02} sx={{ height: '100%' }}>
        <Grid container spacing={3}>
        <Grid className={classes.gridBox}item xs={4} md={4}>
            <img src={companyImage01}
            height='auto'
            width='500px'
            />
        </Grid>

        <Grid item xs={12} md={6}>
        <Typography className={classes.sectionTitle02}>
        등록성공률 99%
        </Typography>
        <Typography className={classes.paragraphs02}>
        풍부한 경험을 갖춘 상표전문가의 노하우와<br/>
        선행상표 조사 시, 엄격한 심사 요건 판단<br/>
        (사업화 중이거나 사업화 예정, 해외상표출원 예정인 상표들 위주로 출원)<br/>
        검토로, 중간사건(거절이유)이 발생되지 않도록 하여 높은 등록성공률<br/><br/><br/>
        </Typography>

        <Grid item xs={12} md={12}>
        <Typography className={classes.sectionTitle02_1}>
        등록 기간 3개월로 단축
        </Typography>
        <Typography className={classes.paragraphs02}>
        빠른상표출원으로 통상 15개월 넘는 심사기간을 3개월로<br/>
        단축 우선심사신청을 진행하며 높은 등록률을 자랑합니다.
        </Typography>
         </Grid>

        </Grid>
        </Grid>
    </Box> 

    <Box className={classes.infoBox03} sx={{ height: '100%' }}>
        
        <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <Typography className={classes.sectionTitle04}>
        타 사이트에 비해 한국상표출원 수수료
        </Typography>
        <Typography className={classes.sectionTitle03}>
        20% 할인하여 20만원
        </Typography>
       
        <Typography className={classes.paragraphs03}>
        대리인 수수료(선행상표조사+우선심사포함) 할인된 20만원!<br/>
        특허청 전문기관과 계약 우선심사조사료 절감<br/>
        </Typography>

        <Grid item xs={12} md={12}>
        <Typography className={classes.sectionTitle04}>
        해외상표출원시 한국상표출원 수수료
        </Typography>
        <Typography className={classes.sectionTitle03}>
        50% 대폭할인
        </Typography>
        
        <Typography className={classes.paragraphs03}>
        해외상표출원과 한국상표출원 동시 진행시 한국상표출원 수수료의 대폭 할인
        </Typography>
        </Grid>

         <Grid item xs={12} md={12}>
        <Typography className={classes.sectionTitle03}>
        해외상표출원 수수료 초저가
        </Typography>
        <Typography className={classes.paragraphs03}>
        해외상표출원은 국내대리인 수수료 대폭 할인하여 초저가로<br/>
        진행 경험이 풍부한 해외대리인들을 활용 초저가<br/>
        (출원비용 절감+중간사건 횟수 단축)
        </Typography>
         </Grid>
        </Grid>

        <Grid className={classes.gridBox02}item xs={4} md={4}>
            <img src={companyImage02}
            height='400px'
            width='580px'
            />
        </Grid>

        </Grid>
    </Box>
</div>
) 
};
export default CompanyPointForm;

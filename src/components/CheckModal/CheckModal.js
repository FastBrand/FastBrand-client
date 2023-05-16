import {
  Modal, 
  Box,
  IconButton, 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
 } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from '@material-ui/styles';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({
  modalBox:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #000',
    boxShadow: 18,
    p: 8,
    overflow: 'auto',
    width: '600px',
    height: '700px',
    backgroundColor:'#3E3E3F',
  },
  modalClose:{
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  checkText01:{
    fontSize: '32px',
    fontWeight: 500,
    color: 'white',
    textAlign: 'center',
    marginTop: '25px',
    marginBottom: '5px',
  },
  minicheckText01:{
    textAlign: 'center',
    color: '#cba585',
    fontWeight: 200,
  },
  checkTextBox:{
    marginLeft: '50px',
    marginRight: '50px',
    marginTop: '50px',
    borderBottom: '1px solid #cba585',
    color: 'white',
    textAlign: 'center',
  },
  checkText02:{
    fontSize: '20px',
    fontWeight: 300,
  },
  checkText03:{
    fontSize: '20px',
    fontWeight: 300,
  }
}))


function CheckModal({
  open,handleClose,handleSubmit, 
  trademarkData,
  madridDataString, 
  nationDataString, 
  managerData, 
  applicantData, 
  markSelectData, 
  classificationData}) {

  const classes = useStyles();

  const handleConfirmButtonClick = () => {
    if (window.confirm("정말로 진행하시겠습니까?")) {
      
    handleSubmit();
    sendEmail(); 
    }
  };

  const sendEmail = () => {
    const templateParams = {
      to_email: managerData.email, // 수신자 이메일
      subject: '상표신청',
      message: `
      - 상표 정보 
        패키지: ${markSelectData}
        상표명: ${trademarkData.brand_name}
        세부설명: ${trademarkData.description}
        분류: ${classificationData.sector}
        출원국가(마드리드): ${madridDataString}
        출원국가(개별출원): ${nationDataString} 
        
        -담당자 정보      
        담당자 성명: ${managerData.name}
        담당자 이메일: ${managerData.email}
        담당자 휴대전화: ${managerData.mobile}
        담당자 유선전화: ${managerData.phone}

        -출원인 정보
        출원인 성명(한글): ${applicantData.name_kor}
        출원인 성명(영문): ${applicantData.name_eng}
        출원인 주민번호: ${applicantData.ssn}
        출원인 우편번호: ${applicantData.zipcode}
        출원인 주소: ${applicantData.address}, ${applicantData.detail}
        출원인 이메일: ${applicantData.personalEmail}
        출원인 휴대전화: ${applicantData.personalMobile}
        출원인 유선전화: ${applicantData.personalPhone}
      ` 
    };

    emailjs.send('service_ntfee7r', 'template_5zsy56b', templateParams, 'niIZOtG66JjWR0wjS')
    .then((response) => {
      console.log('이메일 전송성공', response);
    })
    .catch((error) => {
      console.error('이메일 전송오류', error);
    });
};

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={classes.modalBox}>
        <Box className={classes.modalClose} >
        <IconButton onClick={handleClose}>
          <CloseIcon sx={{color:'white'}} />
        </IconButton>
        </Box>
        <div className={classes.checkText01}>견적 내용</div>
        <p className={classes.minicheckText01}>※ 결제는 견적을 변리사무소 메일로 발송하고 입력하신 메일로 연락드린 후에 진행됩니다.</p>
        <div className={classes.checkTextBox} > 
          <span className={classes.checkText02}>패키지: </span>
          <span className={classes.checkText03}>{markSelectData}</span>
          </div>
        <div className={classes.checkTextBox}>
        <span className={classes.checkText02}>상표명: </span>
        <span className={classes.checkText03}>{trademarkData.brand_name}</span>
        </div>
        <div className={classes.checkTextBox}>
        <span className={classes.checkText02}>출원인 성명: </span>
        <span className={classes.checkText03}>{applicantData.name_kor}</span>
        </div>
        <div className={classes.checkTextBox}>
        <span className={classes.checkText02}>담당자 성명: </span>
        <span className={classes.checkText03}>{managerData.name}</span>
        </div>
        <div className={classes.checkTextBox}>
        <span className={classes.checkText02}>담당자 이메일: </span>
        <span className={classes.checkText03}>{managerData.email}</span>
        </div>
        <Button id="submitButton02"
        onClick={handleConfirmButtonClick}
        variant="contained">
        견적발송
        </Button>
        </Box>

    {/* <Dialog open={handleConfirmButtonClick} onClose={handleConfirmDialogClose}>
    <DialogTitle>견적 이메일 발송</DialogTitle>
    <DialogContent>
    <DialogContentText >
      정말로 진행하시겠습니까?
    </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleConfirmDialogClose} color="primary">취소</Button>
      <Button onClick={handleConfirmDialogClose} color="primary">확인</Button>
    </DialogActions>
  </Dialog> */}

  </Modal>
  );
};
export default CheckModal;

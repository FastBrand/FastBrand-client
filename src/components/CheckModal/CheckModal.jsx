import {
  Modal,
  Box,
  IconButton,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PriceTooltip from "./PriceTooltip.jsx";
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import React, { useCallback } from 'react';

const useStyles = makeStyles((theme) => ({
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "3px",
    boxShadow: 18,
    p: 8,
    overflow: "auto",
    width: "600px",
    height: "800px",
    backgroundColor: "white",
  },
  modalClose: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  checkText01: {
    fontFamily: "Pretendard",
    fontSize: "18px",
    fontWeight: 400,
    color: "black",
    textAlign: "left",
    marginLeft: "10px",
    marginTop: "25px",
    marginBottom: "10px",
  },
  minicheckText01: {
    fontFamily: "Pretendard",
    textAlign: "left",
    fontSize: "14px",
    marginLeft: "10px",
    color: "#872e40",
    fontWeight: 400,
  },
  checkTextBox: {
    fontFamily: "Pretendard",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "50px",
    borderBottom: "1px solid #cba585",
    color: "black",
    textAlign: "center",
  },
  tableCell: {
    fontFamily: "Pretendard",
    borderRight: "0.1px solid black",
    width: "50%",
  },
  textRed: {
    color: "#872e40",
    fontSize: "20px",
    fontWeight: 500,
  },
  recipeTable: {
    padding:  '0 10px',
  }
}))


function CheckModal({
  open,
  handleClose,
  handleSubmit,
  trademarkData,
  madridDataString,
  directNationString,
  managerData,
  applicantData,
  markSelectData,
  classificationData,
  applicantType,
  madridPriceData,
  directPriceData,
  onFormattedPrice,
}) {
  const classes = useStyles();
  const [formattedPrice, setFormattedPrice] = useState(0);

  const [openDialog, setOpenDialog] = useState(false); //다이얼로그 창
  const handleDialogOpen =  () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };


  const handlePrice = useCallback(() => {
    let priceData = 0;

    if (markSelectData === "국내출원") {
      priceData = 485500;
      priceData = priceData.toFixed(0);
    } else if (markSelectData === "국내+해외출원") {
      priceData = madridPriceData + directPriceData + 385500;
      priceData = priceData.toFixed(0);
    } else {
      priceData = madridPriceData + directPriceData;
      priceData = priceData.toFixed(0);
    }

    const formatter = new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    });
    const numberWithCommas = formatter.format(priceData);
    return numberWithCommas;
  }, [markSelectData, madridPriceData, directPriceData]);
  
  useEffect(() => {
    setFormattedPrice(handlePrice());
  }, [handlePrice]);

  useEffect(() => {
    onFormattedPrice(formattedPrice);
  }, [formattedPrice]);

  

  const handleConfirmButtonClick = async () => {
  try{
    await handleSubmit();
    await sendEmail();
    handleDialogClose();
    handleClose();
    alert("메일발송이 완료되었습니다.");

    setTimeout(() => {
        window.location.reload();
    }, 300);
  }
    catch(error) {
      console.log(error)
    }  
}; 

  const sendEmail = async  () => {
    let message;
    let nationMessage = "";
    let toEmail = managerData.email;

    if (applicantType.poc === "personal") {
      if (markSelectData !== "국내출원") {
        nationMessage = `
       -견적
       출원국가(개별출원): ${directNationString} 
       출원국가(마드리드): ${madridDataString}
       예상가격: ${formattedPrice}
       `;
      } else {
        nationMessage = `
          -견적
          출원국가(개별출원): 한국
          분류: ${classificationData.sector}
          예상가격: ${formattedPrice}
          `;
      }

      message = `
        -상표 정보 
        패키지: ${markSelectData}
        상표명: ${trademarkData.brand_name}
        세부설명: ${trademarkData.description}

        -담당자 정보      
        담당자 성명: ${managerData.name}
        담당자 이메일: ${managerData.email}
        담당자 휴대전화: ${managerData.mobile}
        담당자 유선전화: ${managerData.phone}
        
        -출원인 정보(개인)
        출원인 성명(한글): ${applicantData.name_kor}
        출원인 성명(영문): ${applicantData.name_eng}
        출원인 주민번호: ${applicantData.ssn}
        출원인 우편번호: ${applicantData.zipcode}
        출원인 주소: ${applicantData.address}, ${applicantData.detail}
        출원인 이메일: ${applicantData.personalEmail}
        출원인 휴대전화: ${applicantData.personalMobile}
        출원인 유선전화: ${applicantData.personalPhone}
      `;
    } else {
      if (markSelectData !== "국내출원") {
        nationMessage = `
        -견적
        출원국가(개별출원): ${directNationString} 
        출원국가(마드리드): ${madridDataString}
        분류: ${classificationData.sector}
        예상가격: ${formattedPrice}
        `;
      } else {
        nationMessage = `
           -견적
           출원국가(개별출원): 한국
           분류: ${classificationData.sector}
           예상가격: ${formattedPrice}
           `;
      }

      message = `
        -상표 정보 
        패키지: ${markSelectData}
        상표명: ${trademarkData.brand_name}
        세부설명: ${trademarkData.description}

        -담당자 정보      
        담당자 성명: ${managerData.name}
        담당자 이메일: ${managerData.email}
        담당자 휴대전화: ${managerData.mobile}
        담당자 유선전화: ${managerData.phone}
        
        -출원인 정보(법인)
        법인명(한글): ${applicantData.corporateName}
        법인명(영문): ${applicantData.name_eng}
        사업자등록번호: ${applicantData.brn}
        법인 등록번호: ${applicantData.crn}
        대표자 생년월일: ${applicantData.ssn}       
        법인대표 우편번호: ${applicantData.zipcode}
        법인대표 주소: ${applicantData.address}, ${applicantData.detail}
        법인대표 이메일: ${applicantData.corporateEmail}
        법인대표 휴대전화: ${applicantData.corporateMobile}
        법인대표 유선전화: ${applicantData.corporatePhone}
      `;
    }

    const templateParams = {
      subject: "상표신청",
      toEmail: toEmail,
      message: message,
      nationMessage: nationMessage,
    };

    try{
      await Promise.all([
        emailjs.send('service_ntfee7r', 'template_5zsy56b', templateParams, 'niIZOtG66JjWR0wjS'),
        emailjs.send('service_ntfee7r', 'template_nk4mhqd', templateParams, 'niIZOtG66JjWR0wjS')
      ]);
      console.log('이메일 전송성공');
    }
    catch(error){
      console.log('이메일 전송오류', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={classes.modalBox}>
        <Box className={classes.modalClose}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <div className={classes.checkText01}>견적 내용</div>
        {markSelectData === "국내출원" ? (
          <div className={classes.minicheckText01}>
            ※ 유의사항 <br />
            - 거절통지에 대한 의견서 수수료 별도
            <br />
            - 특허청 등록료 별도
            <br />
            - 등록대행수수료 별도
            <br />
            - 미출원시 상표조사비용 55,000원(부가세포함) 차감
            <br />
          </div>
        ) : (
          <div className={classes.minicheckText01}>
            ※ 유의사항 <br />
            - 거절통지에 대한 의견서 비용별도
            <br />
            - 수수료 부가세 별도
            <br />
            - 마드리드 출원의 경우 [스위스, 불가리아, 우크라이나]국가 3개 이상의
            분류를 선택했을 시,
            <br />
            &nbsp; &nbsp;실제가격이 예상가격보다 저렴할 수 있습니다. <br />
          </div>
        )
}
      <Box className={classes.recipeTable}>
        <Table >
        <TableBody>
          <TableRow>
            <TableCell>패키지: </TableCell>
            <TableCell>{markSelectData}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>상표명: </TableCell>
            <TableCell>{trademarkData.brand_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>세부설명: </TableCell>
            <TableCell>{trademarkData.description}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>상표 분류: </TableCell>
            <TableCell>{classificationData.sector} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>출원인 성명: </TableCell>
            <TableCell>{applicantData.name_kor}</TableCell>
          </TableRow>

            <TableRow>
              <TableCell className={classes.tableCell}>
                담당자 성명: {managerData.name}
              </TableCell>
              <TableCell>담당자 이메일: {managerData.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>
                담당자 연락처: {managerData.mobile}
              </TableCell>
              <TableCell>담당자 유선전화: {managerData.phone}</TableCell>
            </TableRow>

          {markSelectData === '국내출원' ? (
            <>
              <TableRow>
                <TableCell>패키지 수수료(부가세 10%):</TableCell>
                <TableCell>₩220,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>특허청 전문기관(부가세 10%):</TableCell>
                <TableCell>₩49,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>특허청 관납료(우선심사포함): </TableCell>
                <TableCell>₩216,000</TableCell>
              </TableRow>
              <TableRow>
              <TableCell><div className={classes.textRed}>
              <span><PriceTooltip/> </span>
              예상가격:</div></TableCell>
              <TableCell><div className={classes.textRed}>{formattedPrice}</div></TableCell>
              </TableRow>
            </>
          ) : (
            <>
              <TableRow>
                <TableCell>출원국가(개별국출원):</TableCell>
                <TableCell>{directNationString}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>출원국가(마드리드): </TableCell>
                <TableCell>{madridDataString}</TableCell>
              </TableRow>
              <TableRow>
               <TableCell>
                <div className={classes.textRed}>
                <span><PriceTooltip/></span>
                예상가격: 
                </div>
                </TableCell>
                <TableCell><div className={classes.textRed}>{formattedPrice}</div></TableCell>
              </TableRow>
            </>
          )}
              
        </TableBody>
 
    </Table>
    </Box>
      <Button id="submitButton03"
        onClick={handleDialogOpen}
        variant="contained">
        상표등록
      </Button>
      <Dialog
          open={openDialog}
          onClose={handleDialogClose}
          aria-labelledby="메일발송창"
          aria-describedby="견적메일발송 확인"
        >
          <DialogTitle id="alert-dialog-title">
            정말로 견적메일을 보내시겠습니까?
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleConfirmButtonClick}>예</Button>
            <Button onClick={handleDialogClose}>아니오</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Modal>
  );
}
export default CheckModal;

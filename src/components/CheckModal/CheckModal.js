import {
  Modal,
  Box,
  IconButton,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/styles";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // border: '1px solid #000',
    borderRadius: "3px",
    boxShadow: 18,
    p: 8,
    overflow: "auto",
    width: "600px",
    height: "700px",
    backgroundColor: "white",
  },
  modalClose: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  checkText01: {
    fontFamily: "Pretendard",
    fontSize: "22px",
    fontWeight: 600,
    color: "black",
    textAlign: "left",
    marginLeft: "10px",
    marginTop: "25px",
    marginBottom: "5px",
  },
  minicheckText01: {
    fontFamily: "Pretendard",
    textAlign: "left",
    fontSize: "14px",
    marginLeft: "10px",
    color: "red",
    fontWeight: 400,
  },
  checkTextBox: {
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
}));

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
}) {
  const classes = useStyles();

  const handlePrice = () => {
    let priceData = 0;

    if (markSelectData === "국내출원") {
      priceData = madridPriceData + directPriceData + 200000;
      priceData = priceData.toFixed(0);
    } else if (markSelectData === "국내+해외출원") {
      priceData = madridPriceData + directPriceData + 100000;
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
  };
  // handlePrice 함수를 호출하여 가격을 계산
  const formattedPrice = handlePrice();

  const handleConfirmButtonClick = () => {
    if (window.confirm("정말로 진행하시겠습니까?")) {
      handleSubmit();
      sendEmail();
    }
  };

  const sendEmail = () => {
    let message;
    if (applicantType.poc === "personal") {
      message = `
        -상표 정보 
        패키지: ${markSelectData}
        상표명: ${trademarkData.brand_name}
        세부설명: ${trademarkData.description}
        분류: ${classificationData.sector}
        출원국가(마드리드): ${madridDataString}
        출원국가(개별출원): ${directNationString} 
        
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
      message = `
        -상표 정보 
        패키지: ${markSelectData}
        상표명: ${trademarkData.brand_name}
        세부설명: ${trademarkData.description}
        분류: ${classificationData.sector}
        출원국가(마드리드): ${madridDataString}
        출원국가(개별출원): ${directNationString} 
        
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
        대표자 주민번호: ${applicantData.ssn}       
        법인대표 우편번호: ${applicantData.zipcode}
        법인대표 주소: ${applicantData.address}, ${applicantData.detail}
        법인대표 이메일: ${applicantData.corporateEmail}
        법인대표 휴대전화: ${applicantData.corporateMobile}
        법인대표 유선전화: ${applicantData.corporatePhone}
      `;
    }

    const templateParams = {
      subject: "상표신청",
      message: message,
    };

    emailjs
      .send(
        "service_ntfee7r",
        "template_5zsy56b",
        templateParams,
        "niIZOtG66JjWR0wjS"
      )
      .then((response) => {
        console.log("이메일 전송성공", response);
      })
      .catch((error) => {
        console.error("이메일 전송오류", error);
      });
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
        <div className={classes.minicheckText01}>
          ※ 최소가격은 1개류 기준으로 제시됩니다.
          <br />
          2개 이상의 분류를 선택했을 시, 실제 가격과 차이가 있을 수 있습니다.
        </div>
        <Table>
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
              <TableCell>예상최소가격: </TableCell>
              <TableCell>{formattedPrice}원</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>상표 분류: </TableCell>
              <TableCell>{classificationData.sector} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>출원국가(마드리드): </TableCell>
              <TableCell>{madridDataString}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>출원국가(개별국출원):</TableCell>
              <TableCell>{directNationString}</TableCell>
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
          </TableBody>
        </Table>
        <Button
          id="submitButton03"
          onClick={handleConfirmButtonClick}
          variant="contained"
        >
          견적발송
        </Button>
      </Box>
    </Modal>
  );
}
export default CheckModal;

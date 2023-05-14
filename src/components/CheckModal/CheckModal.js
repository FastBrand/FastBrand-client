import { Modal, Box, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from '@material-ui/styles';

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

function CheckModal({open, handleClose, handleSubmit, trademarkData, managerData, applicantData,  markSelectData}) {
  const classes = useStyles();

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
        onClick={handleSubmit}
        variant="contained">
        견적발송
        </Button>
        </Box>
    </Modal>
  );
};
export default CheckModal;

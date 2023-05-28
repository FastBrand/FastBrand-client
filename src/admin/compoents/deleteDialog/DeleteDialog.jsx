import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
import axios from "axios";

const DeleteDialog = ({ open, handleClose, selectedRow, hanldeUpdate }) => {
  const handleDeleteClick = () => {
    const idToDelete = selectedRow.id;
    axios
      .delete(`http://43.202.29.2:8080/api/faq/${idToDelete}`) // faq delete api
      .then((response) => {
        hanldeUpdate();
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>삭제하시겠습니까?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          삭제한 데이터는 복구할 수 없습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          취소
        </Button>
        <Button onClick={handleDeleteClick} color="error" variant="outlined">
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteDialog;

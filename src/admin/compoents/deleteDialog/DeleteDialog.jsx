import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";

const DeleteDialog = ({ open, handleClose, selectedRow, handleSave }) => {
  const handleDeleteClick = () => {
    const idToDelete = selectedRow.id;
    handleClose();
    handleSave(idToDelete);
    console.log(idToDelete);
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

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const EditDialog = ({ open, hanldeUpdate, handleClose, selectedRow }) => {
  const [FAQ, setFAQ] = useState({
    title: selectedRow.title,
    content: selectedRow.content,
  });
  const hanldeQuestionChange = (event) => {
    setFAQ({ ...FAQ, title: event.target.value });
  };

  const hanldeAnswerChange = (event) => {
    setFAQ({ ...FAQ, content: event.target.value });
  };
  const handleConfirm = () => {
    const newFAQ = {
      ...FAQ,
      title: FAQ.title.replace(/\n/g, "\r\n"),
      content: FAQ.content.replace(/\n/g, "\r\n"),
    };
    axios
      .patch(`http://localhost:8080/api/faq/${selectedRow.id}`, newFAQ) // faq delete api
      .then((response) => {
        hanldeUpdate();
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleCancel = () => {
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>FAQ 수정</DialogTitle>
      <DialogContent>
        <TextField
          label="질문"
          type="text"
          margin="dense"
          fullWidth
          multiline
          value={FAQ.title}
          onChange={hanldeQuestionChange}
        />
        <TextField
          label="답변"
          type="text"
          margin="dense"
          fullWidth
          multiline
          value={FAQ.content}
          onChange={hanldeAnswerChange}
          minRows={10}
        />
        <DialogActions style={{ paddingRight: 0 }}>
          <Button onClick={handleCancel} variant="outlined">
            취소
          </Button>
          <Button onClick={handleConfirm} variant="outlined">
            확인
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
export default EditDialog;

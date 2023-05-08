import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";

const EditDialog = ({ open, handleSave, handleClose, selectedRow }) => {
  useEffect(() => {
    if (selectedRow) {
      setQuestion(selectedRow.question);
      setAnswer(selectedRow.answer);
    }
  }, [selectedRow]);

  const [question, setQuestion] = useState(
    selectedRow ? selectedRow.question : ""
  );
  const [answer, setAnswer] = useState(
    selectedRow ? selectedRow.answer : "null"
  );

  const hanldeQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const hanldeAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleConfirm = () => {
    handleClose();
    handleSave(selectedRow);
  };
  const handleCancle = () => {
    setQuestion(selectedRow ? selectedRow.question : "");
    setAnswer(selectedRow ? selectedRow.answer : "null");
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
          value={question}
          onChange={hanldeQuestionChange}
        />
        <TextField
          label="답변"
          type="text"
          margin="dense"
          fullWidth
          multiline
          value={answer}
          onChange={hanldeAnswerChange}
          minRows={10}
        />
        <DialogActions style={{ paddingRight: 0 }}>
          <Button onClick={handleCancle} variant="outlined">
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

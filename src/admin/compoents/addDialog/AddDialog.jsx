import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddDialog = ({ open, handleClose, handleSave }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const hanldeQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const hanldeAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleAddClick = () => {
    const newFAQ = { id: "5", question: question, answer: answer };
    handleSave(newFAQ);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>FAQ 추가</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="질문을 입력해주세요"
          type="text"
          value={question}
          onChange={hanldeQuestionChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="답변을 입력해주세요"
          type="text"
          value={answer}
          onChange={hanldeAnswerChange}
          fullWidth
          multiline
          minRows={10}
        />
        <DialogActions style={{ paddingRight: 0 }}>
          <Button onClick={handleClose} color="primary" variant="outlined">
            취소
          </Button>
          <Button onClick={handleAddClick} color="primary" variant="outlined">
            확인
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default AddDialog;

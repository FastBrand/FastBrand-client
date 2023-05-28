import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddDialog = ({ open, handleClose, hanldeUpdate }) => {
  const [newFAQ, setNewFAQ] = useState({ title: "", content: "" });

  const handleQuestionChange = (event) => {
    setNewFAQ({ ...newFAQ, title: event.target.value });
  };

  const handleAnswerChange = (event) => {
    setNewFAQ({ ...newFAQ, content: event.target.value });
  };

  const handleAddClick = () => {
    axios
      .post("http://43.202.29.2:8080/api/faq", newFAQ) // faq add api
      .then((response) => {
        hanldeUpdate();
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
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
          value={newFAQ.title}
          onChange={handleQuestionChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="답변을 입력해주세요"
          type="text"
          value={newFAQ.content}
          onChange={handleAnswerChange}
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

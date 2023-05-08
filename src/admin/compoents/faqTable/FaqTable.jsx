import { useEffect } from "react";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import DeleteDialog from "../deleteDialog/DeleteDialog";
import EditDialog from "../editDialog/EditDialog";
import AddDialog from "../addDialog/AddDialog";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const FaqTable = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "상표등록신청을 하면 답이 오는 데까지 얼마나 걸리나요?",
      answer: "답변입니다룽",
    },
    {
      id: 2,
      question: "상표등록신청을 하면 답이 오는 데까지 얼마나 걸리나요?",
      answer: "답변입표등록신청을 하면 답이 오는 데까지 얼마나 걸리나니다룽",
    },
  ]);
  const [faqData, setFaqData] = useState([]);
  const [isDeleteDialogOpen, setOpenDeleteDialog] = useState(false);
  const [isEditDialogOpen, setOpenEditDialog] = useState(false);
  const [isAddDialogOpen, setOpenAddDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/faq")
      .then((response) => {
        setFaqData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteClick = (faq) => {
    setSelectedRow(faq);
    setOpenDeleteDialog(true);
  };

  const handleEditClick = (faq) => {
    setSelectedRow(faq);
    setOpenEditDialog(true);
  };

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleEditDialogSave = () => {};
  const handleDeleteDialogSave = () => {};

  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        추가
      </Button>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>No</b>
              </TableCell>
              <TableCell>
                <b>질문</b>
              </TableCell>
              <TableCell>
                <b>답변</b>
              </TableCell>
              <TableCell>
                <b>수정</b>
              </TableCell>
              <TableCell>
                <b>삭제</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faqData.map((faq) => (
              <TableRow key={faq.id}>
                <TableCell align="center">{faq.id}</TableCell>
                <TableCell align="left" style={{ maxWidth: 400 }}>
                  {faq.question}
                </TableCell>
                <TableCell align="left" style={{ maxWidth: 700 }}>
                  {faq.answer}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(faq)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteClick(faq)}>
                    <DeleteIcon />
                  </IconButton>
                  <DeleteDialog
                    open={isDeleteDialogOpen}
                    handleSave={handleDeleteDialogSave}
                    handleClose={() => setOpenDeleteDialog(false)}
                    selectedRow={selectedRow}
                  />

                  <EditDialog
                    open={isEditDialogOpen}
                    handleClose={() => setOpenEditDialog(false)}
                    handleSave={handleEditDialogSave}
                    selectedRow={selectedRow}
                  />
                  <AddDialog
                    open={isAddDialogOpen}
                    handleClose={() => setOpenAddDialog(false)}
                    handleSave={handleEditDialogSave}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default FaqTable;

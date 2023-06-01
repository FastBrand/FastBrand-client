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
  TableSortLabel
} from "@mui/material";
import DeleteDialog from "../deleteDialog/DeleteDialog";
import EditDialog from "../editDialog/EditDialog";
import AddDialog from "../addDialog/AddDialog";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const AddButton = styled(Button)({
  color: "white",
  backgroundColor: "#3E3E3F",
  marginRight: "50%",
  marginBottom: "5px",
  "&:hover": {
    backgroundColor: "#76777c",
    color: "white",
  },
});


const FaqTable = () => {
  const [faqData, setFaqData] = useState([]);
  const [isDeleteDialogOpen, setOpenDeleteDialog] = useState(false);
  const [isEditDialogOpen, setOpenEditDialog] = useState(false);
  const [isAddDialogOpen, setOpenAddDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);


  const hanldeUpdate = () => {
    axios
      .get("http://43.202.29.2:8080/api/faq")
      .then((response) => {
        const formattedData = response.data.map((faq) => ({
          ...faq,
          content: faq.content.replace(/\\r\\n/g, "\r\n"),
          title: faq.title.replace(/\\r\\n/g, "\r\n"),
        }));
        setFaqData(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    hanldeUpdate();
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

  if (!localStorage.getItem("Authorization")) {
    return <Navigate to="/login" replace />;
  }

  return (
    
    <Box>
      <AddButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        추가
      </AddButton>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#9E9E9F" }}>
              
              <TableCell align="center">
              <TableSortLabel sx={{ whiteSpace: "nowrap" }}>
                <b>No</b>
                </TableSortLabel>
              </TableCell>
             
              <TableCell>
              <TableSortLabel sx={{ whiteSpace: "nowrap" }}>
                <b>질문</b>
                </TableSortLabel>
              </TableCell>           
            
              <TableCell>
              <TableSortLabel sx={{ whiteSpace: "nowrap" }}>
                <b>답변</b>
                </TableSortLabel>
              </TableCell>             
             
              <TableCell>
              <TableSortLabel sx={{ whiteSpace: "nowrap" }}>
                <b>수정</b>
                </TableSortLabel>
              </TableCell> 
       
              <TableCell>
              <TableSortLabel sx={{ whiteSpace: "nowrap" }}>
                <b>삭제</b>
                </TableSortLabel>
             </TableCell>             
            </TableRow>
          </TableHead>

          <TableBody>
            {faqData.map((faq) => (
              <TableRow key={faq.id}>
                <TableCell align="center">{faq.id}</TableCell>
                <TableCell align="left" style={{ maxWidth: 400 }}>
                  {faq.title}
                </TableCell>
                <TableCell align="left" style={{ maxWidth: 700 }}>
                  {faq.content}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isDeleteDialogOpen && (
        <DeleteDialog
          open={isDeleteDialogOpen}
          hanldeUpdate={hanldeUpdate}
          handleClose={() => setOpenDeleteDialog(false)}
          selectedRow={selectedRow}
        />
      )}
      {isEditDialogOpen && (
        <EditDialog
          open={isEditDialogOpen}
          handleClose={() => setOpenEditDialog(false)}
          hanldeUpdate={hanldeUpdate}
          selectedRow={selectedRow}
        />
      )}
      {isAddDialogOpen && (
        <AddDialog
          open={isAddDialogOpen}
          handleClose={() => setOpenAddDialog(false)}
          hanldeUpdate={hanldeUpdate}
        />
      )}
    </Box>
  );
};
export default FaqTable;

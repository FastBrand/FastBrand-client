import { Paper,Table,TableCell,TableContainer,TableHead,TableRow,TableBody,Box,Button,IconButton, } from '@mui/material';
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

function MarkInfo() {
    const [trademarks, setTrademarks] = useState([]);
  
    const refreshData = () => {
      axios.get("http://localhost:8080/api/main/info")
        .then(response => {
          const dataArr = response.data;
          const newTrademarks = dataArr.map(data => {
            const { brand_name, poc, type } = data.mark;
            const { name, email } = data.user;
  
            return {
              name: brand_name,
              poc: poc,
              type: type,
              name: name,
              email: email
            };
          });
  
          setTrademarks(newTrademarks);
        })
        .catch(error => console.log(error))
    }
  
    useEffect(() => {
      refreshData();
    }, []);
  
    return (
        <div>
        <button onClick={refreshData}>새로고침</button>
        <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">상표명</TableCell>
              <TableCell>출원유형</TableCell>
              <TableCell>개인/법인</TableCell>
              <TableCell>담당자</TableCell>
              <TableCell>이메일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trademarks.map((trademark, index) => (
              <TableRow key={index}>
                <TableCell>{trademark.name}</TableCell>
                <TableCell>{trademark.type}</TableCell>
                <TableCell>{trademark.poc}</TableCell>
                <TableCell>{trademark.name}</TableCell>
                <TableCell>{trademark.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </div>
    );
}


export default MarkInfo;
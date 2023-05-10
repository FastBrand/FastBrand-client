import { Paper,Table,TableCell,TableContainer,TableHead,TableRow,TableBody,Box,Button,IconButton, } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./paginate.css"


function MarkInfo() {
    const [trademarks, setTrademarks] = useState([]);
    const location = useLocation();

    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage;

    const pageCount = Math.ceil(trademarks.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const refreshData = () => {
      axios.get("http://localhost:8080/api/main/info")
        .then(response => {
          const dataArr = response.data;
          const newTrademarks = dataArr.map(data => {
            const { id, brand_name, poc, type } = data.mark;
            const { name, email } = data.user;
  
            return {
              id: id,  
              brand_name: brand_name,
              poc: poc,
              type: type,
              name: name,
              email: email,
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
            <TableRow sx={{ background: "#9E9E9F" }}>
              <TableCell align="center"><b>상표번호</b></TableCell>
              <TableCell align="center"><b>상표명</b></TableCell>
              <TableCell align="center"><b>출원유형</b></TableCell>
              <TableCell align="center"><b>개인/법인</b></TableCell>
              <TableCell align="center"><b>담당자</b></TableCell>
              <TableCell align="center"><b>이메일</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trademarks.slice(pagesVisited, pagesVisited + itemsPerPage).map((trademark) => (
              <TableRow key={trademark.id}>
                <TableCell align="center">{trademark.id}</TableCell>
                <TableCell align="center">{trademark.brand_name}</TableCell>
                <TableCell align="center">{trademark.type}</TableCell>
                <TableCell align="center">{trademark.poc}</TableCell>
                <TableCell align="center">{trademark.name}</TableCell>
                <TableCell align="center">{trademark.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        <div>
            <ReactPaginate
                previousLabel={'이전'}
                nextLabel={'다음'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagination'}
                previousLinkClassName={'pagination__link'}
                nextLinkClassName={'pagination__link'}
                disabledClassName={'pagination__link--disabled'}
                activeClassName={'pagination__link--active'}
            />
        </div>
    </div>
    );
}


export default MarkInfo;
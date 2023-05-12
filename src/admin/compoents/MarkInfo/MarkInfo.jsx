import { Paper,Table,TableCell,TableContainer,TableHead,TableRow,TableBody,Box,Button,IconButton, } from '@mui/material';
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from '@material-ui/icons/Refresh';
import axios from "axios";
import moment from 'moment';
import ReactPaginate from "react-paginate";
import "./paginate.css"


function MarkInfo() {
    const [trademarks, setTrademarks] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [sortConfig, setSortConfig] = useState(null);

    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage;

    const pageCount = Math.ceil(trademarks.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleRowClick = (clickedRow) => {
        if (sortConfig && sortConfig.key === clickedRow.key) {
          setSortConfig({ ...sortConfig, direction: sortConfig.direction === "ascending" ? "descending" : "ascending" });
        } 
        else {
          setSortConfig({ key: clickedRow.key, direction: "ascending" });
        }
    };

    const sortedTrademarks = useMemo(() => {
        const data = [...trademarks];
        if (sortConfig !== null) {
          data.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? 1 : -1;
            }
            return 0;
          });
        }
        return data;
    }, [trademarks, sortConfig]);

    const Authorization = localStorage.getItem('Authorization');
    const headers = { Authorization: `${Authorization}` };

    const refreshData = () => {
      axios.get("http://localhost:8080/api/main/info", { headers })
        .then(response => {
          const dataArr = response.data;
          const newTrademarks = dataArr.map(data => {
            const { id, brand_name, poc, type } = data.mark;
            const { name, email, created_at } = data.user;
  
            return {
              id: id,  
              brand_name: brand_name,
              poc: poc,
              type: type,
              name: name,
              email: email,
              created_at: moment(created_at).format('YYYY-MM-DD')
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
        <IconButton
        style={{ backgroundColor: "#999999", color: "inherit" }}
        onClick={refreshData}
        color="primary"
        size="small"
        aria-label="새로고침"
        >
        <RefreshIcon />
        </IconButton>
        <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#9E9E9F" }}>
              <TableCell key="id" align="center" onClick={() => handleRowClick(trademarks)}><b>상표번호</b></TableCell>
              <TableCell key="brand_name" align="center" onClick={() => handleRowClick(trademarks)}><b>상표명</b></TableCell>
              <TableCell key="poc" align="center" onClick={() => handleRowClick(trademarks)}><b>출원유형</b></TableCell>
              <TableCell key="type" align="center" onClick={() => handleRowClick(trademarks)}><b>개인/법인</b></TableCell>
              <TableCell key="name" align="center" onClick={() => handleRowClick(trademarks)}><b>담당자</b></TableCell>
              <TableCell key="email" align="center" onClick={() => handleRowClick(trademarks)}><b>이메일</b></TableCell>
              <TableCell key="created_at" align="center" onClick={() => handleRowClick(trademarks)}><b>등록일</b></TableCell>
              <TableCell align="center"><b>세부사항</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTrademarks.slice(pagesVisited, pagesVisited + itemsPerPage).map((trademark) => (
              <TableRow className="table-row" key={trademark.id}>
                <TableCell align="center">{trademark.id}</TableCell>
                <TableCell align="center">{trademark.brand_name}</TableCell>
                <TableCell align="center">{trademark.type}</TableCell>
                <TableCell align="center">{trademark.poc}</TableCell>
                <TableCell align="center">{trademark.name}</TableCell>
                <TableCell align="center">{trademark.email}</TableCell>
                <TableCell align="center">{trademark.created_at}</TableCell>
                <TableCell align="center"><Link to={`/markinfo/${trademark.id}`}>세부정보</Link></TableCell>
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
import {
  Select,
  MenuItem,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Box,
  IconButton,
  TableSortLabel,
  TextField,
  Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { styled } from "@mui/material/styles";
import "./paginate.css";
import { Navigate } from "react-router-dom";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  marginBottom: "16px",
});

const StyledTextField = styled(TextField)({
  width: "200px",
  backgroundColor: "#f5f5f5",
  "&:focus": {
    backgroundColor: "#f5f5f5",
    borderColor: "#f5f5f5",
  },
});

const StyledSelect = styled(Select)({
  minWidth: "120px",
  backgroundColor: "#f5f5f5",
  "&:focus": {
    backgroundColor: "#f5f5f5",
    borderColor: "#f5f5f5",
  },
});

function MarkInfo() {
  const [trademarks, setTrademarks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTrademarks, setFilteredTrademarks] = useState([]);
  const [search, setSearch] = useState(0);
  const [searchType, setSearchType] = useState("brand_name");
  const [pageCount, setPageCount] = useState(0);
  const [firstPage, setFirstPage] = useState(1);

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const filterTrademarks = (searchTerm) => {
    const filteredTrademarks = trademarks.filter((trademark) => {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      if (searchType === "brand_name") {
        return trademark.brand_name.toLowerCase().includes(lowercaseSearchTerm);
      } else if (searchType === "id") {
        return trademark.id.toString().includes(lowercaseSearchTerm);
      } else if (searchType === "name") {
        return trademark.name.toLowerCase().includes(lowercaseSearchTerm);
      }
      return false;
    });
    setFilteredTrademarks(filteredTrademarks);
    setPageCount(Math.ceil(filteredTrademarks.length / itemsPerPage));
  };

  const handleSearch = (event) => {
    filterTrademarks(searchTerm);
    setSearch(1);
    setPageNumber(0);
    setFirstPage(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      filterTrademarks(searchTerm);
      setSearch(1);
      setPageNumber(0);
      setFirstPage(0);
    }
  };

  const itemsPerPage = 10;
  let pagesVisited = pageNumber * itemsPerPage;

  const changePage = ({ selected }) => {
    setFirstPage(1);
    setPageNumber(selected);
  };

  const handleRowClick = (event) => {
    const clickedCell = event.currentTarget;
    const key = clickedCell.getAttribute("data-key");
    let direction = "asc";
    if (sortDirection === "asc") {
      direction = "desc";
    }

    const sortedTrademarks = [...trademarks].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setTrademarks(sortedTrademarks);
    setSortDirection(direction);
  };

  const refreshData = () => {
    axios
      .get("http://43.202.29.2:8080/api/main/info")
      .then((response) => {
        const dataArr = response.data;
        const newTrademarks = dataArr.map((data) => {
          const { id, brand_name, poc, type } = data.mark;
          const { name, email, created_at } = data.user;

          return {
            id: id,
            brand_name: brand_name,
            poc: poc,
            type: type,
            name: name,
            email: email,
            created_at: moment(created_at).format("YYYY-MM-DD"),
          };
        });

        newTrademarks.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setTrademarks(newTrademarks);
        setSearch(0);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    refreshData();
    setPageNumber(0);
  }, []);

  useEffect(() => {
    setPageCount(Math.ceil(trademarks.length / itemsPerPage));
  }, [trademarks]);

  if (!localStorage.getItem("Authorization")) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <StyledBox>
        <StyledSelect value={searchType} onChange={handleSearchTypeChange}>
          <MenuItem value="brand_name">상표명</MenuItem>
          <MenuItem value="id">상표번호</MenuItem>
          <MenuItem value="name">담당자</MenuItem>
        </StyledSelect>
        <StyledTextField
          label="상표 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon sx={{ color: "black", fontSize: "30px" }} />
        </IconButton>
      </StyledBox>
      {/* <IconButton
        style={{
          backgroundColor: "#999999",
          color: "inherit",
          marginBottom: "5px",
        }}
        onClick={refreshData}
        color="primary"
        size="small"
        aria-label="새로고침"
      > */}
        <Button onClick={refreshData}>새로고침</Button>
      {/* </IconButton> */}
      <TableContainer component={Paper} sx={{ width: "90%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#9E9E9F" }}>
              <TableCell
                data-key="id"
                align="left"
                onClick={handleRowClick}
                style={{ cursor: "pointer", paddingLeft: "55px" }}
              >
                <TableSortLabel>
                  <b>상표번호</b>
                </TableSortLabel>
              </TableCell>
              <TableCell
                data-key="brand_name"
                align="left"
                onClick={handleRowClick}
                style={{ cursor: "pointer", paddingLeft: "55px" }}
              >
                <TableSortLabel>
                  <b>상표명</b>
                </TableSortLabel>
              </TableCell>
              <TableCell
                data-key="poc"
                align="left"
                onClick={handleRowClick}
                style={{ cursor: "pointer", paddingLeft: "55px" }}
              >
                <TableSortLabel>
                  <b>출원유형</b>
                </TableSortLabel>
              </TableCell>
              <TableCell
                data-key="type"
                align="left"
                onClick={handleRowClick}
                style={{ cursor: "pointer", paddingLeft: "55px" }}
              >
                <TableSortLabel>
                  <b>개인/법인</b>
                </TableSortLabel>
              </TableCell>
              <TableCell
                data-key="name"
                align="left"
                onClick={handleRowClick}
                style={{ cursor: "pointer", paddingLeft: "55px" }}
              >
                <TableSortLabel>
                  <b>담당자</b>
                </TableSortLabel>
              </TableCell>
              <TableCell
                data-key="email"
                align="left"
                onClick={handleRowClick}
                style={{ cursor: "pointer", paddingLeft: "55px" }}
              >
                <TableSortLabel>
                  <b>이메일</b>
                </TableSortLabel>
              </TableCell>
              <TableCell
                data-key="created_at"
                align="left"
                onClick={handleRowClick}
                style={{ cursor: "pointer", paddingLeft: "55px" }}
              >
                <TableSortLabel>
                  <b>등록일</b>
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                <b>세부사항</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search === 0 && (
              <>
                {trademarks
                  .slice(pagesVisited, pagesVisited + itemsPerPage)
                  .map((trademark) => (
                    <TableRow className="table-row">
                      <TableCell align="center">{trademark.id}</TableCell>
                      <TableCell align="center">
                        {trademark.brand_name}
                      </TableCell>
                      <TableCell align="center">{trademark.type}</TableCell>
                      <TableCell align="center">{trademark.poc === 'personal' ? '개인' : trademark.poc === 'corporate' ? '법인' : ''}</TableCell>
                      <TableCell align="center">{trademark.name}</TableCell>
                      <TableCell align="center">{trademark.email}</TableCell>
                      <TableCell align="center">
                        {trademark.created_at}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/markinfo/${trademark.id}`}>세부정보</Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </>
            )}
            {search === 1 && (
              <>
                {filteredTrademarks
                  .slice(pagesVisited, pagesVisited + itemsPerPage)
                  .map((trademark) => (
                    <TableRow className="table-row">
                      <TableCell align="center">{trademark.id}</TableCell>
                      <TableCell align="center">
                        {trademark.brand_name}
                      </TableCell>
                      <TableCell align="center">{trademark.type}</TableCell>
                      <TableCell align="center">{trademark.poc === 'personal' ? '개인' : trademark.poc === 'corporate' ? '법인' : ''}</TableCell>
                      <TableCell align="center">{trademark.name}</TableCell>
                      <TableCell align="center">{trademark.email}</TableCell>
                      <TableCell align="center">
                        {trademark.created_at}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/markinfo/${trademark.id}`}>세부정보</Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {firstPage === 0 && (
        <div>
          <ReactPaginate
            key={pageNumber}
            previousLabel={"이전"}
            nextLabel={"다음"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      )}
      {firstPage === 1 && (
        <div>
          <ReactPaginate
            previousLabel={"이전"}
            nextLabel={"다음"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      )}
    </div>
  );
}

export default MarkInfo;

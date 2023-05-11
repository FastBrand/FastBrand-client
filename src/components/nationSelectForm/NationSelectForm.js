import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Modal,
  Box,
  Button,
  IconButton,
  TextField,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { CustomTypo, FormContainer } from "../../styles/FormStyles";
import "./NationSelectForm.css";
import nation_data from "./NationData.json";

const NationButton = styled(Button)({
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: 400,
  marginLeft: "30px",
  borderRadius: "30px",
  border: "0.5px solid #2F2E41",
  backgroundColor: "transparent",
  color: "black",
  width: "120px",
  height: "48px",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#3E3E3F",
    color: "white",
    borderColor: "#3E3E3F",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#3E3E3F",
    borderColor: "none",
  },
});

const NationButton_table = styled(Button)({
  fontSize: "12px",
  fontWeight: "400px",
  marginLeft: "5px",
  borderRadius: "40px",
  borderRadius: "40px",
  border: "0.5px solid #2F2E41",
  backgroundColor: "transparent",
  color: "black",
  width: "100px",
  height: "35px",
  padding: "4px",
  "&:hover": {
    backgroundColor: "#CBA585",
    color: "white",
    borderColor: "#CBA585",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#CBA585",
    borderColor: "#CBA585",
  },
  "&.selected": {
    backgroundColor: "#CBA585",
    color: "white",
    borderColor: "#CBA585",
  },
});

function NationSelectedBox({ country }) {
  //국가선택창 또는 검색 버튼에서 국가 선택시 밑에 추가됨.
  return (
    <Box className="nationBox_selected">
      {country}{" "}
      <span style={{ color: "#2F2E41", marginLeft: "3px" }}>&times;</span>
    </Box>
  );
}

function NationSelectForm({ onSelectedCountries }) {
  //국가선택 컴포넌트
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // 입력어를 state로 관리
  const [boxes, setBoxes] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({}); //선택된 국가들

  useEffect(() => {
    onSelectedCountries(selectedCountries);
  }, [selectedCountries, onSelectedCountries]);

  const handleOpen = () => {
    //모달창 오픈
    setOpen(true);
  };

  const handleClose = () => {
    //모달창 닫기
    const selected = Object.keys(selectedCountries);
    const selectedCountriesArray = selected.map((country) => [
      country,
      nation_data[country].madrid,
    ]);
    onSelectedCountries(selectedCountriesArray);
    console.log(selected);
    const newBoxes = selected.map((c) => <Box country={c} key={c} />);
    setBoxes([...boxes, newBoxes]);
    setSelectedCountries(selectedCountries); // 선택된 국가들을 업데이트
    console.log("모달창 닫기");
    setOpen(false);
  };

  // const handleSearch = () => { // 검색 버튼 클릭 시 검색어에 해당하는 박스 추가 로직
  //   const newBox =
  //   <Box className="nationBox_selected"> {searchValue}
  //   <IconButton onClick={handleClose}><CloseIcon /></IconButton>
  //   </Box>;
  //   setBoxes([...boxes, newBox]);
  //   console.log(searchValue);
  // };

  // const handleInput = (event) => {
  //   // TextField에 입력된 값을 검색어 state에 저장
  //   setSearchValue(event.target.value);
  // };

  const handleSelectCountry = (i, j, country) => {
    //모달창 국가명버튼 클릭 시 상자생성
    const newSelectedCountries = { ...selectedCountries };
    if (newSelectedCountries[country]) {
      delete newSelectedCountries[country];
    } else {
      newSelectedCountries[country] = true;
    }
    setSelectedCountries(newSelectedCountries);

    const newBoxes = Object.keys(newSelectedCountries).map((c) => (
      <NationSelectedBox country={c} key={c} />
    ));
    setBoxes(newBoxes);
  };

  const continentMap = {}; // 대륙 정보를 저장할 객체
  for (const [country, info] of Object.entries(nation_data)) {
    const continent = info.continent;
    if (!continentMap[continent]) {
      continentMap[continent] = []; // 대륙이 처음 등장하면 배열을 생성
    }
    continentMap[continent].push(country); // 대륙에 속하는 국가를 배열에 추가
  }

  const handleConfirm = () => {
    //확인버튼을 눌렀을 때
    console.log("확인버튼");
    handleClose();
  };

  return (
    <FormContainer>
      <CustomTypo>
        05. 출원할 국가를 선택해주세요.
        <div className="littleInfo">다중선택이 가능합니다.</div>
      </CustomTypo>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="국가명"
            variant="standard"
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <NationButton variant="outlined" onClick={handleOpen}>
            국가선택
          </NationButton>
        </Grid>
        <Grid item xs={12}>
          <div className="boxContainer">
            {boxes.map(
              (
                country,
                index //국가버튼 선택시에 밑에 추가되는 상자들 표시
              ) => (
                <Box key={index}>{country}</Box>
              )
            )}
          </div>
        </Grid>
      </Grid>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="국가선택창"
          aria-describedby="다중선택이 가능합니다. 스크롤해서 선택해주세요."
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              border: "1px solid #000",
              boxShadow: 18,
              p: 8,
              overflow: "auto",
              maxHeight: "80vh",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "5px",
                right: "5px",
              }}
            >
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <h2 id="modal-title">국가 선택</h2>
            <p id="modal-description">
              다중선택이 가능하며 스크롤해서 선택해주세요.
            </p>

            <TableContainer style={{ width: "800px", maxHeight: "60vh" }}>
              <Table style={{ width: "100%", height: "100%" }}>
                {Object.entries(continentMap).map(([continent, countries]) => (
                  <TableBody key={continent} sx={{ overflow: "auto" }}>
                    <TableRow>
                      <TableCell
                        id="contentName_row"
                        rowSpan={Math.ceil(countries.length / 1)}
                      >
                        {continent}
                      </TableCell>
                    </TableRow>
                    {Array.from({
                      length: Math.ceil(countries.length / 4),
                    }).map((_, i) => (
                      <TableRow
                        key={`row-${i}`}
                        sx={{ display: "flex", flexWrap: "wrap" }}
                      >
                        {countries
                          .slice(i * 4, (i + 1) * 4)
                          .map((country, j) => (
                            <TableCell key={`${continent}-${country}`}>
                              <NationButton_table
                                variant="outlined"
                                onClick={() =>
                                  handleSelectCountry(i, j, country)
                                }
                                className={
                                  selectedCountries[country] ? "selected" : ""
                                }
                              >
                                {country}
                              </NationButton_table>
                            </TableCell>
                          ))}
                      </TableRow>
                    ))}
                  </TableBody>
                ))}
              </Table>
            </TableContainer>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "25px",
                marginLeft: "50px",
              }}
            >
              <Button
                id="confireButton_table"
                variant="outlined"
                onClick={handleConfirm}
                style={{
                  marginRight: "30px",
                  backgroundColor: "#CBA585",
                  color: "white",
                }}
              >
                확인
              </Button>
              <Button
                id="confireButton_table"
                variant="outlined"
                onClick={handleClose}
              >
                취소
              </Button>
            </div>
          </Box>
        </Modal>
      )}
    </FormContainer>
  );
}
export default NationSelectForm;

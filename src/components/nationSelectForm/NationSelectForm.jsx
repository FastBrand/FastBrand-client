import Modal from "@mui/material/Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { CustomTypo, FormContainer } from "../../styles/formStyles";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import nation_data from "./NationData.json";
import madrid_data from "./MadridData.json";
import CustomTooltip from "./Tooltip";
import "./NationSelectForm.css";
import { hover } from "@testing-library/user-event/dist/hover";

const NationButton = styled(Button)({
  //개별출원 박스
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: 500,
  marginRight: "30px",
  borderRadius: "30px",
  borderColor: "#3E3E3F",
  backgroundColor: "transparent",
  color: "black",
  // width: "180px",
  // height: "52px",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: "#CBA585",
    color: "white",
    borderColor: "#CBA585",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#CBA585",
    borderColor: "none",
  },
});

const NationButton_table = styled(Button)({
  //개별출원
  padding: "4px",
  fontSize: "12px",
  width: "100px",
  height: "35px",
  fontWeight: 600,
  fontFamily: "Pretendard",
  // marginLeft: "5px",
  borderRadius: "30px",
  border: "0.5px solid black",
  backgroundColor: "transparent",
  color: "black",
  // width: "100px",
  // height: "35px",
  // padding: "4px",
  "&:hover": {
    borderColor: "black",
  },
  // "&:active": {
  //   boxShadow: "none",
  //   backgroundColor: "#CBA585",
  //   borderColor: "#CBA585",
  // },
  "&.selected": {
    backgroundColor: "#CBA585",
    color: "white",
    borderColor: "#CBA585",
  },
});

const NationButton_table2 = styled(Button)({
  //마드리드
  fontSize: "12px",
  fontFamily: "Pretendard",
  fontWeight: 600,
  marginLeft: "5px",
  borderRadius: "30px",
  border: "0.5px solid black",
  backgroundColor: "transparent",
  color: "black",
  width: "100px",
  height: "35px",
  padding: "4px",
  "&:hover": {
    borderColor: "black",
    backgroundColor: "white",
  },
  // "&:active": {
  //   boxShadow: "none",
  //   backgroundColor: "#857770",
  //   borderColor: "#857770",
  // },
  "&.selected": {
    backgroundColor: "#857770",
    color: "white",
    borderColor: "#857770",
  },
});

function NationSelectForm({
  onSelectedCountries,
  onSelectedMadrid,
  onMadridPrice,
  onEachPrice,
  classificationDataString,
  markSelectData,
}) {
  //국가선택 컴포넌트
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [boxes2, setBoxes2] = useState([]);
  const { continentMap, madridContinentMap } = processCountryData(
    nation_data,
    madrid_data
  );
  const [selectedCountries, setSelectedCountries] = useState({}); //선택된 국가들
  const [selectedMadrid, setSelectedMadrid] = useState({}); //선택된 국가들

  const exchangeCHF = useState(1484.94); //스위스 프랑 환율
  const exchangeUSD = useState(1334.42); //달러 환율
  // const exchangeJPY = useState(9.69); //엔화 환율
  // const exchangeEUR = useState(1444.51); //유로 환율
  const [madridPrice, setMadridPrice] = useState(0);
  const [eachPrice, setEachPrice] = useState(0);
  const [madridAddFee, setMadridAddFee] = useState(0);
  const [eachAddFee, setEachAddFee] = useState(0);

  function NationSelectedBox({ country }) {
    //개별출원 국가 박스 추가 로직
    return <Box className="nationBox_selected">{country}</Box>;
  }

  function NationSelectedBox2({ country }) {
    //마드리드 국가 박스 추가 로직
    return (
      <Box className="nationBox_selected02">
        {country} <span style={{ color: "#ffce2a" }}>M</span>
      </Box>
    );
  }

  useEffect(() => {
    onSelectedCountries(selectedCountries);
  }, [selectedCountries, onSelectedCountries]);
  useEffect(() => {
    onSelectedMadrid(selectedMadrid);
  }, [selectedMadrid, onSelectedMadrid]);

  // if (markSelectData === "국내출원") 국내출원 패키지면 국가배열 초기화
  // {
  //   setSelectedMadrid({});
  //   setSelectedCountries({});
  //   console.log(markSelectData);
  //   console.log(selectedCountries);
  //   console.log(selectedMadrid);
  // }

  useEffect(() => {
    //분류의 개수가 변경될 때마다 계산 수행
    if (classificationDataString !== undefined) {
      const categories = classificationDataString.split(",");
      const numberOfCategories = categories.length;

      const selectedAddBasicPrices = Object.keys(selectedCountries).map(
        (c) => nation_data[c].additialPrice
      );
      const selectedAddUsdPrices = Object.keys(selectedCountries).map(
        (c) => nation_data[c].additialUSD
      );
      const selectedAddBasicMadridPrices = Object.keys(selectedMadrid).map(
        (c) => madrid_data[c].additialMadrid
      );
      const selectedAddChfPrices = Object.keys(selectedMadrid).map(
        (c) => madrid_data[c].additialCHF
      );
      const addBasicTotalPrice = selectedAddBasicPrices.reduce(
        (acc, curr) => (acc + curr) * numberOfCategories,
        0
      );
      const addUsdPrice =
        selectedAddUsdPrices.reduce((acc, curr) => acc + curr, 0) *
        (exchangeUSD[0] * numberOfCategories);

      const addBasicTotalMadridPrice = selectedAddBasicMadridPrices.reduce(
        (acc, curr) => (acc + curr) * numberOfCategories,
        0
      );
      const addChfPrice =
        selectedAddChfPrices.reduce((acc, curr) => acc + curr, 0) *
        (exchangeCHF[0] * numberOfCategories);

      setEachAddFee(addBasicTotalPrice + addUsdPrice);
      setMadridAddFee(addBasicTotalMadridPrice + addChfPrice);
      onEachPrice(eachPrice + eachAddFee);
      onMadridPrice(madridPrice + madridAddFee);

      console.log("분류 개수:", numberOfCategories);
      console.log("마드리드 추가류가격:", madridAddFee);
      console.log("개별출원 추가류가격:", eachAddFee);
    }
  }, [classificationDataString, eachAddFee]);

  useEffect(() => {
    // 개별출원 국가가 변경될 때마다 계산을 수행
    const selectedBasicPrices = Object.keys(selectedCountries).map(
      (c) => nation_data[c].price
    );
    const selectedUsdPrices = Object.keys(selectedCountries).map(
      (c) => nation_data[c].usd
    );

    if (classificationDataString !== undefined) {
      const categories = classificationDataString.split(",");
      const numberOfCategories = categories.length;

      const selectedAddBasicPrices = Object.keys(selectedCountries).map(
        (c) => nation_data[c].additialPrice
      );
      const selectedAddUsdPrices = Object.keys(selectedCountries).map(
        (c) => nation_data[c].additialUSD
      );
      const selectedAddBasicMadridPrices = Object.keys(selectedMadrid).map(
        (c) => madrid_data[c].additialMadrid
      );
      const selectedAddChfPrices = Object.keys(selectedMadrid).map(
        (c) => madrid_data[c].additialCHF
      );

      const addBasicTotalPrice = selectedAddBasicPrices.reduce(
        (acc, curr) => (acc + curr) * numberOfCategories,
        0
      );
      const addUsdPrice =
        selectedAddUsdPrices.reduce((acc, curr) => acc + curr, 0) *
        (exchangeUSD[0] * numberOfCategories);
      const addBasicTotalMadridPrice = selectedAddBasicMadridPrices.reduce(
        (acc, curr) => (acc + curr) * numberOfCategories,
        0
      );
      const addChfPrice =
        selectedAddChfPrices.reduce((acc, curr) => acc + curr, 0) *
        (exchangeCHF[0] * numberOfCategories);
      setEachAddFee(addBasicTotalPrice + addUsdPrice);
      setMadridAddFee(addBasicTotalMadridPrice + addChfPrice);
    }

    const usdPrice =
      selectedUsdPrices.reduce((acc, curr) => acc + curr, 0) * exchangeUSD[0];
    const basicTotalPrice = selectedBasicPrices.reduce(
      (acc, curr) => acc + curr,
      0
    );
    const totalPrice = basicTotalPrice + usdPrice;

    if (Object.keys(selectedCountries).length === 0) {
      setEachPrice(0); //나라 없으면 0
    } else {
      setEachPrice(totalPrice + eachAddFee); // 개별출원 기본 가격 셋팅
    }

    onEachPrice(eachPrice);
  }, [selectedCountries, classificationDataString, eachPrice]);

  useEffect(() => {
    // 마드리드 국가가 변경될 때마다 계산을 수행

    const selectedBasicPrices = Object.keys(selectedMadrid).map(
      (c) => madrid_data[c].priceMadrid
    );
    const selectedChfPrices = Object.keys(selectedMadrid).map(
      (c) => madrid_data[c].chf
    );

    const chfPrice =
      selectedChfPrices.reduce((acc, curr) => acc + curr, 0) * exchangeCHF[0];
    const basicTotalPrice = selectedBasicPrices.reduce(
      (acc, curr) => acc + curr,
      0
    );
    const totalPriceM =
      basicTotalPrice + chfPrice + (1000000 + 653 * exchangeCHF[0]);

    if (classificationDataString !== undefined) {
      const categories = classificationDataString.split(",");
      const numberOfCategories = categories.length;

      const selectedAddBasicPrices = Object.keys(selectedCountries).map(
        (c) => nation_data[c].additialPrice
      );
      const selectedAddUsdPrices = Object.keys(selectedCountries).map(
        (c) => nation_data[c].additialUSD
      );
      const selectedAddBasicMadridPrices = Object.keys(selectedMadrid).map(
        (c) => madrid_data[c].additialMadrid
      );
      const selectedAddChfPrices = Object.keys(selectedMadrid).map(
        (c) => madrid_data[c].additialCHF
      );

      const addBasicTotalPrice = selectedAddBasicPrices.reduce(
        (acc, curr) => (acc + curr) * numberOfCategories,
        0
      );
      const addUsdPrice =
        selectedAddUsdPrices.reduce((acc, curr) => acc + curr, 0) *
        (exchangeUSD[0] * numberOfCategories);
      const addBasicTotalMadridPrice = selectedAddBasicMadridPrices.reduce(
        (acc, curr) => (acc + curr) * numberOfCategories,
        0
      );
      const addChfPrice =
        selectedAddChfPrices.reduce((acc, curr) => acc + curr, 0) *
        (exchangeCHF[0] * numberOfCategories);
      setEachAddFee(addBasicTotalPrice + addUsdPrice);
      setMadridAddFee(addBasicTotalMadridPrice + addChfPrice);
    }

    if (Object.keys(selectedMadrid).length === 0) {
      setMadridPrice(0);
    } else {
      setMadridPrice(totalPriceM + madridAddFee); // 마드리드 기본 가격 셋팅
    }

    onMadridPrice(madridPrice);
  }, [selectedMadrid, classificationDataString, madridPrice]);

  const handleOpen = () => {
    //개별출원 모달창 오픈
    setOpen(true);
  };
  const handleOpen2 = () => {
    //마드리드 모달창 오픈
    setOpen2(true);
  };

  const handleClose = () => {
    //개별출원 모달창 닫기
    const selected = Object.keys(selectedCountries);
    const selectedCountriesArray = selected.map((country) => [country]);
    onSelectedCountries(selectedCountriesArray);
    console.log("개별출원:", selected);
    const newBoxes = selected.map((c) => <Box country={c} key={c} />);
    setBoxes([...boxes, newBoxes]);
    //setSelectedCountries(selectedCountries); // 선택된 국가들을 업데이트
    setOpen(false);
  };

  const handleClose2 = () => {
    //마드리드 모달창 닫기
    const selected = Object.keys(selectedMadrid);
    const selectedCountriesArray = selected.map((country) => [country]);
    onSelectedMadrid(selectedCountriesArray);
    console.log("마드리드:", selected);
    const newBoxes = selected.map((c) => <Box country={c} key={c} />);
    setBoxes2([...boxes2, newBoxes]);
    //setSelectedMadrid(selectedMadrid); // 선택된 국가들을 업데이트
    setOpen2(false);
  };

  const handleSelectCountry = (i, j, country) => {
    //개별출원 모달창 국가명버튼 클릭 시 상자생성
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

  const handleSelectMadrid = (i, j, country) => {
    //마드리드 모달창 국가명버튼클릭시 동작
    const newSelectedCountries = { ...selectedMadrid };
    if (newSelectedCountries[country]) {
      delete newSelectedCountries[country];
    } else {
      newSelectedCountries[country] = true;
    }
    setSelectedMadrid(newSelectedCountries);

    const newBoxes = Object.keys(newSelectedCountries).map((c) => (
      <NationSelectedBox2 country={c} key={c} />
    ));
    setBoxes2(newBoxes);
  };

  function processCountryData(nation_data, madrid_data) {
    const continentMap = {}; // 대륙 정보를 저장할 객체
    for (const [country, info] of Object.entries(nation_data)) {
      const continent = info.continent;
      if (!continentMap[continent]) {
        continentMap[continent] = []; // 대륙이 처음 등장하면 배열을 생성
      }
      continentMap[continent].push(country); // 대륙에 속하는 국가를 배열에 추가
    }

    const madridContinentMap = {}; // 마드리드 대륙 정보를 저장할 객체
    for (const [country, info] of Object.entries(madrid_data)) {
      const continent = info.continent;
      if (!madridContinentMap[continent]) {
        madridContinentMap[continent] = []; // 대륙이 처음 등장하면 배열을 생성
      }
      madridContinentMap[continent].push(country); // 대륙에 속하는 국가를 배열에 추가
    }

    return { continentMap, madridContinentMap };
  }

  const handleConfirm = () => {
    //확인버튼을 눌렀을 때
    handleClose();
  };

  const handleConfirm2 = () => {
    //확인버튼을 눌렀을 때
    handleClose2();
  };

  return (
    <FormContainer sx={{ pt: 0 }}>
      <CustomTypo>
        04-2. 출원할 방법과 국가를 선택해주세요*
        <div className="littleInfo">
          ※ '같은 국가'를 개별출원과 마드리드 동시에 출원할 수 없습니다&nbsp;
          <span>
            <CustomTooltip />
          </span>
        </div>
      </CustomTypo>

      <NationButton variant="outlined" onClick={handleOpen}>
        개별국가 출원
      </NationButton>
      <NationButton
        variant="outlined"
        onClick={handleOpen2}
        sx={{
          "&:hover": {
            backgroundColor: "#857770",
            color: "white",
            borderColor: "#857770",
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: "#857770",
            borderColor: "none",
          },
        }}
      >
        마드리드 출원
      </NationButton>

      <div className="boxContainer">
        {boxes.map(
          (
            country,
            index //국가버튼 선택시에 밑에 추가되는 상자들 표시
          ) => (
            <Box key={index}>{country}</Box>
          )
        )}
        {boxes2.map((country, index) => (
          <Box key={index}>{country}</Box>
        ))}
      </div>

      <Modal
        fontFamily="Pretendard"
        open={open}
        onClose={handleClose}
        aria-labelledby="개별출원선택창"
        aria-describedby="개별출원 선택창입니다. 다중선택이 가능합니다. 스크롤해서 선택해주세요."
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            // border: "1px solid #000",
            borderRadius: "3px",
            boxShadow: 18,
            padding: "10px 30px 40px 30px",
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

          <h2 id="modal-title">개별출원선택창</h2>
          <p id="modal-description">
            ※ 개별출원 선택창입니다. 다중선택이 가능하며 스크롤해서
            선택해주세요.
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
                      {countries.slice(i * 4, (i + 1) * 4).map((country, j) => (
                        <TableCell key={`${continent}-${country}`}>
                          <NationButton_table
                            variant="outlined"
                            onClick={() => handleSelectCountry(i, j, country)}
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
                color: "white",
                backgroundColor: "#3E3E3F",
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

      {open2 && (
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="마드리드선택창"
          aria-describedby="마드리드 협약국가들 선택창입니다. 다중선택이 가능합니다. 스크롤해서 선택해주세요."
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              // border: "1px solid #000",
              borderRadius: "3px",
              boxShadow: 18,
              padding: "10px 30px 40px 30px",
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
              <IconButton onClick={handleClose2}>
                <CloseIcon />
              </IconButton>
            </Box>
            <h2 id="modal-title">마드리드선택창</h2>
            <p id="modal-description">
              ※ 마드리드 협약국가들 선택창입니다. 다중선택이 가능하며 스크롤해서
              선택해주세요.
              <br />※ 모든 국가가 마드리드 협약에 소속되어있지는 않습니다.
            </p>

            <TableContainer style={{ width: "800px", maxHeight: "60vh" }}>
              <Table style={{ width: "100%", height: "100%" }}>
                {Object.entries(madridContinentMap).map(
                  ([continent, countries]) => (
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
                                <NationButton_table2
                                  variant="outlined"
                                  onClick={() =>
                                    handleSelectMadrid(i, j, country)
                                  }
                                  className={
                                    selectedMadrid[country] ? "selected" : ""
                                  }
                                >
                                  {country}
                                </NationButton_table2>
                              </TableCell>
                            ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  )
                )}
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
                onClick={handleConfirm2}
                style={{
                  backgroundColor: "#3E3E3F",
                  marginRight: "30px",
                  color: "white",
                }}
              >
                확인
              </Button>
              <Button
                id="confireButton_table"
                variant="outlined"
                onClick={handleClose2}
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

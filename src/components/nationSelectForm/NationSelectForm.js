import Modal from '@mui/material/Modal';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import nation_data from './NationData.json';
import madrid_data from './MadridData.json';
import "./NationSelectForm.css";

const NationButton = styled(Button)({ //개별출원 박스
  fontSize: '16px',
  fontWeight: 400,
  marginRight: '100px',
  borderRadius: '50px',
  border: '0.5px solid #2F2E41',
  backgroundColor: 'transparent',
  color: 'black',
  width: '180px',
  height: '52px',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#3E3E3F',
    color: 'white',
    borderColor: '#3E3E3F',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#3E3E3F',
    borderColor: 'none',
  },
});


const NationButton_table = styled(Button)({ //개별출원
  fontSize: '12px',
  fontWeight: '400px',
  marginLeft: '5px',
  borderRadius: '40px',
  borderRadius: '40px',
  border: '0.5px solid #2F2E41',
  backgroundColor: 'transparent',
  color: 'black',
  width: '100px', height: '35px', padding: '4px',
  '&:hover': {
    backgroundColor: '#CBA585',
    color: 'white',
    borderColor: '#CBA585',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#CBA585',
    borderColor: '#CBA585',
  },
  '&.selected': {
    backgroundColor: '#CBA585',
    color: 'white',
    borderColor: '#CBA585'
  },
});


const NationButton_table2 = styled(Button)({ //마드리드
  fontSize: '12px',
  fontWeight: '400px',
  marginLeft: '5px',
  borderRadius: '40px',
  borderRadius: '40px',
  border: '0.5px solid #2F2E41',
  backgroundColor: 'transparent',
  color: 'black',
  width: '100px', height: '35px', padding: '4px',
  '&:hover': {
    backgroundColor: '#857770',
    color: 'white',
    borderColor: '#857770',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#857770',
    borderColor: '#857770',
  },
  '&.selected': {
    backgroundColor: '#857770',
    color: 'white',
    borderColor: '#857770'
  },
});

function NationSelectedBox({ country }) { //개별출원 국가 박스 추가 로직
  return (
    <Box className="nationBox_selected">
      {country}
    </Box>
  )
}

function NationSelectedBox2({ country }) { //마드리드 국가 박스 추가 로직
  return (
    <Box className="nationBox_selected02">
      {country}M
    </Box>
  )
}
function NationSelectForm({ onSelectedCountries, onSelectedMadrid }) { //국가선택 컴포넌트
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [boxes2, setBoxes2] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({}); //선택된 국가들
  const [selectedMadrid, setSelectedMadrid] = useState({}); //선택된 국가들

  useEffect(() => {
    onSelectedCountries(selectedCountries);
  }, [selectedCountries, onSelectedCountries]);
  useEffect(() => {
    onSelectedMadrid(selectedMadrid);
  }, [selectedMadrid, onSelectedMadrid]);

  const handleOpen = () => { //개별출원 모달창 오픈
    setOpen(true);
  };
  const handleOpen2 = () => { //마드리드 모달창 오픈
    setOpen2(true);
  };

  const handleClose = () => { //개별출원 모달창 닫기
    const selected = Object.keys(selectedCountries);
    const selectedCountriesArray = selected.map((country) => [country]);
    onSelectedCountries(selectedCountriesArray);
    console.log(selected);
    const newBoxes = selected.map((c) => (
      <Box country={c} key={c} />
    ));
    setBoxes([...boxes, newBoxes]);
    setSelectedCountries(selectedCountries); // 선택된 국가들을 업데이트
    console.log("모달창 닫기");
    setOpen(false);
  };

  const handleClose2 = () => { //마드리드 모달창 닫기
    const selected = Object.keys(selectedMadrid);
    const selectedCountriesArray = selected.map((country) => [country, madrid_data[country].madrid]);
    onSelectedMadrid(selectedCountriesArray);
    console.log(selected);
    const newBoxes = selected.map((c) => (
      <Box country={c} key={c} />
    ));
    setBoxes2([...boxes2, newBoxes]);
    setSelectedMadrid(selectedMadrid); // 선택된 국가들을 업데이트
    console.log("모달창2 닫기");
    setOpen2(false);
  };

  const handleSelectCountry = (i, j, country) => { //개별출원 모달창 국가명버튼 클릭 시 상자생성
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

  const handleSelectMadrid = (i, j, country) => { //마드리드 모달창 국가명버튼클릭시 동작
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

  const handleConfirm = () => { //확인버튼을 눌렀을 때
    console.log("확인버튼");
    handleClose();
  };

  const handleConfirm2 = () => { //확인버튼을 눌렀을 때
    console.log("확인2버튼");
    handleClose2();
  };

  return (
    <div style={{ margin: "100px 230px", flexWrap: "wrap", justifyContent: "center" }}>
      <br /><br /><br />
      <Container>
        <div className="littleTitle02" style={{ color: "black" }}>04. 출원할 방법과 국가를 선택해주세요.</div>
        <div className="littleInfo">'같은 국가를' 개별출원과 마드리드 동시에 출원할수는 없습니다.</div>

        <NationButton variant="outlined" onClick={handleOpen}>개별국가 출원</NationButton>
        <NationButton variant="outlined" onClick={handleOpen2}>마드리드 출원</NationButton>

        <div className="boxContainer">
          {
            boxes.map((country, index) => ( //국가버튼 선택시에 밑에 추가되는 상자들 표시
              <Box key={index}>{country}</Box>
            ))
          }
          {
            boxes2.map((country, index) => (
              <Box key={index}>{country}</Box>
            ))
          }

        </div>





        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="개별출원선택창"
          aria-describedby="개별출원 선택창입니다. 다중선택이 가능합니다. 스크롤해서 선택해주세요."
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            border: '1px solid #000',
            boxShadow: 18,
            p: 8,
            overflow: 'auto',
            maxHeight: '80vh',
          }}>
            <Box sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <h2 id="modal-title">개별출원선택창</h2>
            <p id="modal-description">개별출원 선택창입니다.다중선택이 가능하며 스크롤해서 선택해주세요.</p>

            <TableContainer style={{ width: '800px', maxHeight: '60vh' }}>
              <Table style={{ width: '100%', height: '100%' }}>
                {Object.entries(continentMap).map(([continent, countries]) => (
                  <TableBody key={continent} sx={{ overflow: 'auto' }}>
                    <TableRow>
                      <TableCell id="contentName_row" rowSpan={Math.ceil(countries.length / 1)}>
                        {continent}
                      </TableCell>
                    </TableRow>
                    {Array.from({ length: Math.ceil(countries.length / 4) }).map((_, i) => (
                      <TableRow key={`row-${i}`} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {countries.slice(i * 4, (i + 1) * 4).map((country, j) => (
                          <TableCell key={`${continent}-${country}`}>
                            <NationButton_table variant="outlined"
                              onClick={() => handleSelectCountry(i, j, country)}
                              className={selectedCountries[country] ? 'selected' : ''
                              }>
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

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginLeft: '50px' }}>
              <Button id='confireButton_table'
                variant="outlined"
                onClick={handleConfirm} style={{
                  marginRight: '30px',
                  backgroundColor: '#CBA585',
                  color: 'white'
                }}
              >확인
              </Button>
              <Button id='confireButton_table' variant="outlined" onClick={handleClose}>취소</Button>
            </div>
          </Box>
        </Modal>

        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="마드리드선택창"
          aria-describedby="마드리드 협약국가들 선택창입니다. 다중선택이 가능합니다. 스크롤해서 선택해주세요."
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            border: '1px solid #000',
            boxShadow: 18,
            p: 8,
            overflow: 'auto',
            maxHeight: '80vh',
          }}>
            <Box sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <h2 id="modal-title">마드리드선택창</h2>
            <p id="modal-description">마드리드 협약국가들 선택창입니다. 다중선택이 가능하며 스크롤해서 선택해주세요.</p>

            <TableContainer style={{ width: '800px', maxHeight: '60vh' }}>
              <Table style={{ width: '100%', height: '100%' }}>
                {Object.entries(madridContinentMap).map(([continent, countries]) => (
                  <TableBody key={continent} sx={{ overflow: 'auto' }}>
                    <TableRow>
                      <TableCell id="contentName_row" rowSpan={Math.ceil(countries.length / 1)}>
                        {continent}
                      </TableCell>
                    </TableRow>
                    {Array.from({ length: Math.ceil(countries.length / 4) }).map((_, i) => (
                      <TableRow key={`row-${i}`} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {countries.slice(i * 4, (i + 1) * 4).map((country, j) => (
                          <TableCell key={`${continent}-${country}`}>
                            <NationButton_table2 variant="outlined"
                              onClick={() => handleSelectMadrid(i, j, country)}
                              className={selectedMadrid[country] ? 'selected' : ''
                              }>
                              {country}
                            </NationButton_table2>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                ))}
              </Table>
            </TableContainer>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginLeft: '50px' }}>
              <Button id='confireButton_table'
                variant="outlined"
                onClick={handleConfirm2}
                style={{
                  marginRight: '30px',
                  backgroundColor: '#857770',
                  color: 'white'
                }}
              >확인
              </Button>
              <Button id='confireButton_table'
                variant="outlined"
                onClick={handleClose2}
                style={{
                  color: '#857770',
                  border: "0.5px solid #857770"
                }}>
                취소
              </Button>
            </div>
          </Box>
        </Modal>
      </Container>
    </div>
  );
}
export default NationSelectForm;

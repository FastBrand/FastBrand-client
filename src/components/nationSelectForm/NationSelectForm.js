import Modal from '@mui/material/Modal';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import { Container, fontSize, margin } from '@mui/system';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import "./NationSelectForm.css";
import nation_data from './NationData.json';


const NationButton = styled(Button)({
  fontSize: '16px',
  fontWeight: 400,
  marginLeft: '30px',
  borderRadius: '50px',
  border: '0.5px solid #2F2E41',
  backgroundColor: 'transparent',
  color: 'black',
  width: '120px',
  height: '48px',
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


const NationButton_table = styled(Button)({
  fontSize:'12px', 
  fontWeight:'400px', 
  marginLeft:'5px', 
  borderRadius:'40px',
  borderRadius:'40px', 
  border:'0.5px solid #2F2E41', 
  backgroundColor:'transparent',
  color:'black', 
  width:'100px', height:'35px', padding:'4px',
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
  },
});


function NationSelectedBox({ country }){ //국가선택창 또는 검색 버튼에서 국가 선택시 밑에 추가됨.
return(
  <Box className="nationBox_selected">
    {country} <span style={{color:"#2F2E41", marginLeft:"3px"}}>&times;</span>
    </Box>
)
}

function NationSelectForm() { //국가선택 컴포넌트
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(''); // 입력어를 state로 관리
  const [boxes, setBoxes] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({}); //선택된 국가들

  const handleOpen = () => { //모달창 오픈
    setOpen(true);
  };

  const handleClose = () => { //모달창 닫기
    setOpen(false);
  };

  const handleSearch = () => { // 검색 버튼 클릭 시 검색어에 해당하는 박스 추가 로직
    const newBox = 
    <Box className="nationBox_selected"> {searchValue} 
    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
    </Box>;
    setBoxes([...boxes, newBox]);
    console.log(searchValue);
  };

  const handleInput = (event) => {
    // TextField에 입력된 값을 검색어 state에 저장
    setSearchValue(event.target.value);
  };

  const handleSelectCountry = (i, j, country) => {
    const newSelectedCountries = { ...selectedCountries }; // 기존 선택한 국가들을 복사
    if (newSelectedCountries[country]) {
      delete newSelectedCountries[country]; // 이미 선택한 국가를 다시 클릭하면 선택을 취소
    } else {
      newSelectedCountries[country] = true; // 새로운 국가를 선택하면 선택한 국가들에 추가
    }
    setSelectedCountries(newSelectedCountries); // 선택한 국가들을 state에 저장
    console.log(selectedCountries)
  };

  const continentMap = {}; // 대륙 정보를 저장할 객체
  for (const [country, info] of Object.entries(nation_data)) {
    const continent = info.continent;
    if (!continentMap[continent]) {
      continentMap[continent] = []; // 대륙이 처음 등장하면 배열을 생성
    }
    continentMap[continent].push(country); // 대륙에 속하는 국가를 배열에 추가
  }

  return (
    <div style={{margin: "100px 230px", flexWrap: "wrap", justifyContent: "center" }}>
      <br/><br/><br/>
      <Container>
        <div className="littleTitle02"style={{color:"black"}}>04. 출원할 국가를 선택해주세요.</div>
        <div className="littleInfo">다중선택이 가능합니다.</div>
        <TextField id="standard-basic" label="국가명" variant="standard"
        style={{width:'400px', maxWidth: '100%'}}
        value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>

        <NationButton variant="outlined" onClick={handleSearch}>입력</NationButton>
        <NationButton variant="outlined" onClick={handleOpen}>국가선택</NationButton>
        <div>{boxes}</div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="국가선택창"
        aria-describedby="다중선택이 가능합니다. 스크롤해서 선택해주세요."
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
          <h2 id="modal-title">국가 선택</h2>
          <p id="modal-description">다중선택이 가능하며 스크롤해서 선택해주세요.</p>

          <TableContainer style={{ width: '800px', height: '800px' }}>
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
          <Button id='confireButton_table' variant="outlined" onClick={handleClose} style={{marginRight:'30px', backgroundColor:'#CBA585', color:'white'}}>확인</Button>
          <Button id='confireButton_table' variant="outlined" onClick={handleClose}>취소</Button>
          </div>
        </Box>
      </Modal>
      </Container>
    </div>
  );
}
export default NationSelectForm;
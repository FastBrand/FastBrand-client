import Modal from '@mui/material/Modal';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import { Container, fontSize, margin } from '@mui/system';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./NationSelectForm.css";

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

  const handleSelectCountry = () => { //국가선택팝업창에서 국가 버튼을 눌렀을 때 
    
  }

  return (
    <div style={{margin: "100px 230px", flexWrap: "wrap", justifyContent: "center" }}>
      <br/><br/><br/>
      <Container>
        <div className="littleTitle02"style={{color:"black"}}>04. 출원할 국가를 선택해주세요.</div>
        <div className="littleInfo">다중선택이 가능합니다.</div>
        <TextField id="standard-basic" label="국가명" variant="standard" style={{width:'400px', maxWidth: '100%'}}
         value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>

        <Button className="nationButton" variant="outlined" onClick={handleSearch} sx={{
          fontSize:'16px', fontWeight:'400', marginLeft:'30px',borderRadius:'50px',
          backgroundColor:'transparent', color:'black', width:'120px', height:'48px',
          padding:'8px 16px', border: '0.5px solid #2F2E41'}}>검색</Button>

            <Button className="nationButton" variant="outlined" onClick={handleOpen} sx={{
          fontSize:'16px', fontWeight:'400', marginLeft:'30px',borderRadius:'50px',
          backgroundColor:'transparent', color:'black', width:'120px', height:'48px',
          padding:'8px 16px', border: '0.5px solid #2F2E41'}}>국가선택</Button>

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
              <TableBody sx={{overflow:'auto'}}>
                {[...Array(20)].map((_, i) => (
                  <TableRow key={i}>
                {i === 0 && (
                  <TableCell className="contentName_row" rowSpan={2} style={{color:"white", fontSize:'20px', fontWeight:'400', textAlign:'center'}}> 주요국가 </TableCell>
                )}
                {i === 2 && (
                  <TableCell className="contentName_row" rowSpan={5} style={{color:"white", fontSize:'20px', fontWeight:'400', textAlign:'center'}}> 아시아 </TableCell>
                )}
                 {i === 7 && (
                  <TableCell className="contentName_row" rowSpan={1} style={{color:"white", fontSize:'20px', fontWeight:'400', textAlign:'center'}}> 북미 </TableCell>
                )}
                 {i === 8 && (
                  <TableCell className="contentName_row" rowSpan={4} style={{color:"white", fontSize:'20px', fontWeight:'400', textAlign:'center'}}> 남미 </TableCell>
                )}
                 {i === 12 && (
                  <TableCell className="contentName_row" rowSpan={4} style={{color:"white", fontSize:'20px', fontWeight:'400', textAlign:'center'}}> 유럽 </TableCell>
                )} 
                {i === 16 && (
                  <TableCell className="contentName_row" rowSpan={4} style={{color:"white", fontSize:'20px', fontWeight:'400', textAlign:'center'}}> 아프리카 </TableCell>
                )}
                    {[...Array(5)].map((_, j) => (                      
                      <TableCell key={`${i}-${j}`}>
                        <Button className='nationButton_table' variant="outlined" color="primary" onClick={() => handleSelectCountry(i, j)} sx={{
                          fontSize:'12px', fontWeight:'400px', marginLeft:'5px', borderRadius:'40px',
                          borderRadius:'40px', border:'0.5px solid #2F2E41', backgroundColor:'transparent',
                          color:'black', width:'100px', height:'35px', padding:'4px'
                        }}>선택</Button>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginLeft: '50px' }}>
          <Button className='confireButton_table' variant="outlined" onClick={handleClose} style={{
            marginRight:'30px', backgroundColor:'#CBA585', color:'white', border:'0.5px solid #CBA585', borderRadius:'50px', width:'120px', height:'48', padding:'8px 16px'}}>확인</Button>
          <Button className='confireButton_table' variant="outlined" onClick={handleClose} style={{
            marginRight:'30px', backgroundColor:'#FFFFFF', color:'#CBA585', border:'0.5px solid #CBA585', borderRadius:'50px', width:'120px', height:'48', padding:'8px 16px'}}>취소</Button>
          </div>
        </Box>
      </Modal>
      </Container>
    </div>
  );
}
export default NationSelectForm;

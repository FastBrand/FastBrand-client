import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Box, Card, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import axios from "axios";
import { useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from 'moment';
import "./paginate.css"

function MarkDetail() {
  const { id } = useParams();
  const [trademark, setTrademark] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const Authorization = localStorage.getItem('Authorization');
  const headers = { Authorization: `${Authorization}` };

  const refreshData = () => {
    axios.get(`http://43.202.29.2:8080/api/main/info/${id}`, { headers })
    .then(response => {
      const data = response.data;
      
      const trademarkData = data.mark.poc === "personal"? 
      {
        id: data.mark.id,
        brand_name: data.mark.brand_name,
        description: data.mark.description,
        image: data.images[0].url,
        sector: data.mark.sector,
        type: data.mark.type,
        poc: data.mark.poc,
        country: data.mark.country,
        madrid: data.mark.madrid,
        direct: data.mark.direct,
        status: data.mark.status,

        name: data.user.name,
        email: data.user.email,
        mobile: data.user.mobile,
        phone: data.user.phone,
        acc_num: data.user.acc_num,
        price: data.user.price,
        created_at: data.user.created_at,

        pname_kor: data.personal.name_kor,
        pname_eng: data.personal.name_eng,
        pssn: data.personal.ssn,
        personalEmail: data.personal.personalEmail,
        personalMobile: data.personal.personalMobile,
        personalPhone: data.personal.personalPhone,
        paddress: data.personal.address,
        pdetail: data.personal.detail,
        pzipcode: data.personal.zipcode,
        pagreement: data.personal.agreement,
      } : 
      {
        id: data.mark.id,
        brand_name: data.mark.brand_name,
        description: data.mark.description,
        image: data.images[0].url,
        sector: data.mark.sector,
        type: data.mark.type,
        poc: data.mark.poc,
        country: data.mark.country,
        madrid: data.mark.madrid,
        direct: data.mark.direct,
        status: data.mark.status,

        name: data.user.name,
        email: data.user.email,
        mobile: data.user.mobile,
        phone: data.user.phone,
        acc_num: data.user.acc_num,
        price: data.user.price,
        created_at: data.user.created_at,

        cname_kor: data.corporate.name_kor,
        cname_eng: data.corporate.name_eng,
        brn: data.corporate.brn,
        crn: data.corporate.crn,
        corporateName: data.corporate.corporateName,
        cssn: data.corporate.ssn,
        corporateMobile: data.corporate.corporateMobile,
        corporatePhone: data.corporate.corporatePhone,
        corporateEmail: data.corporate.corporateEmail,
        seal: data.seals[0].url,
        caddress: data.corporate.address,
        cdetail: data.corporate.detail,
        czipcode: data.corporate.zipcode,
        cagreement: data.corporate.agreement
      };
      
        setTrademark(trademarkData);
      })
      .catch(error => console.log(error))
  }

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://43.202.29.2:8080/api/edit/mark/${trademark.id}`);
      window.location.href = "/markBoard";
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    handleClose();
  };

  const createdDate = moment(trademark.created_at).format('YYYY-MM-DD HH:mm');

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div>
      <h3>출원신청정보 &nbsp;
      <IconButton
        style={{ backgroundColor: "#999999", color: "inherit" }}
        onClick={handleClickOpen}
        color="primary"
        size="small"
        aria-label="새로고침"
        >
        <DeleteIcon />
      </IconButton></h3><br></br>

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
      <DialogContent>삭제된 데이터는 복구할 수 없습니다.</DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteClick} color="error">삭제</Button>
        <Button onClick={handleCancel}>취소</Button>
      </DialogActions>
    </Dialog>
  
      {trademark.poc === "personal" && (
        <div>
        <h4>출원인 정보</h4>
        <TableContainer component={Paper} sx={{ width: "80%" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ background: "#9E9E9F" }}>
                <TableCell align="center"><b>항목</b></TableCell>
                <TableCell align="center"><b>내용</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className="table-row">
                <TableCell align="center">출원인(한글)</TableCell>
                <TableCell align="center">{trademark.pname_kor}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">출원인(영문)</TableCell>
                <TableCell align="center">{trademark.pname_eng}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">생년월일</TableCell>
                <TableCell align="center">{trademark.pssn}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">이메일</TableCell>
                <TableCell align="center">{trademark.personalEmail}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">휴대폰 번호</TableCell>
                <TableCell align="center">{trademark.personalMobile}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">전화번호</TableCell>
                <TableCell align="center">{trademark.personalPhone}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">주소</TableCell>
                <TableCell align="center">{trademark.paddress}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">상세주소</TableCell>
                <TableCell align="center">{trademark.pdetail}</TableCell>
              </TableRow>
              <TableRow className="table-row"> 
                <TableCell align="center">우편번호</TableCell>
                <TableCell align="center">{trademark.pzipcode}</TableCell>
              </TableRow>
              <TableRow className="table-row">
                <TableCell align="center">약관 동의 여부</TableCell>
                <TableCell align="center">{trademark.pagreement}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      )}

  
      {trademark.poc === "corporate" && (
        <div>
          <h4>출원인 정보</h4>
        <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#9E9E9F" }}>
              <TableCell align="center"><b>항목</b></TableCell>
              <TableCell align="center"><b>내용</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="table-row">
              <TableCell align="center">회사명(한글)</TableCell>
              <TableCell align="center">{trademark.cname_kor}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">회사명(영문)</TableCell>
              <TableCell align="center">{trademark.cname_eng}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">사업자등록번호</TableCell>
              <TableCell align="center">{trademark.brn}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">법인등록번호</TableCell>
              <TableCell align="center">{trademark.crn}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">대표자명</TableCell>
              <TableCell align="center">{trademark.corporateName}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">대표자 생년월일</TableCell>
              <TableCell align="center">{trademark.cssn}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">전화번호</TableCell>
              <TableCell align="center">{trademark.corporatePhone}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">휴대폰 번호</TableCell>
              <TableCell align="center">{trademark.corporateMobile}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">이메일</TableCell>
              <TableCell align="center">{trademark.corporateEmail}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">주소</TableCell>
              <TableCell align="center">{trademark.caddress}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">상세주소</TableCell>
              <TableCell align="center">{trademark.cdetail}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">우편번호</TableCell>
              <TableCell align="center">{trademark.czipcode}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">인감 이미지</TableCell>
              <TableCell align="center">
              <Card>
                  <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                    <CardMedia
                      component="img"
                      alt="No Image"
                      image={trademark.seal}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Card>
                </TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">약관 동의 여부</TableCell>
              <TableCell align="center">{trademark.cagreement}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      )}
      <br></br><br></br>
      <div> 
      <h4>상표정보</h4> 
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#9E9E9F" }}>
              <TableCell align="center"><b>항목</b></TableCell>
              <TableCell align="center"><b>내용</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="table-row">
              <TableCell align="center">상표번호</TableCell>
              <TableCell align="center">{trademark.id}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">상표명</TableCell>
              <TableCell align="center">{trademark.brand_name}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">설명</TableCell>
              <TableCell align="center">{trademark.description}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">이미지</TableCell>
              <TableCell align="center">
                <Card>
                  <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                    <CardMedia
                      component="img"
                      alt="No Image"
                      image={trademark.image}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Card>
              </TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">분류</TableCell>
              <TableCell align="center">{trademark.sector}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">유형</TableCell>
              <TableCell align="center">{trademark.type}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">개인/기업</TableCell>
              <TableCell align="center">{trademark.poc === 'personal' ? '개인' : trademark.poc === 'corporate' ? '법인' : ''}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">마드리드</TableCell>
              <TableCell align="center">{trademark.madrid}</TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell align="center">개별출원</TableCell>
              <TableCell align="center">{trademark.direct}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <br></br><br></br>
    <div>
      <h4>담당자 정보</h4>
    
    <TableContainer component={Paper} sx={{ width: "80%" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#9E9E9F" }}>
            <TableCell align="center"><b>항목</b></TableCell>
            <TableCell align="center"><b>내용</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="table-row">
            <TableCell align="center">이름</TableCell>
            <TableCell align="center">{trademark.name}</TableCell>
          </TableRow>
          <TableRow className="table-row">
            <TableCell align="center">이메일</TableCell>
            <TableCell align="center">{trademark.email}</TableCell>
          </TableRow>
          <TableRow className="table-row">
            <TableCell align="center">휴대폰 번호</TableCell>
            <TableCell align="center">{trademark.mobile}</TableCell>
          </TableRow>
          <TableRow className="table-row">
            <TableCell align="center">전화번호</TableCell>
            <TableCell align="center">{trademark.phone}</TableCell>
          </TableRow>
          <TableRow className="table-row">
            <TableCell align="center">계좌번호</TableCell>
            <TableCell align="center">{trademark.acc_num}</TableCell>
          </TableRow>
          <TableRow className="table-row">
            <TableCell align="center">예상가격</TableCell>
            <TableCell align="center">{trademark.price}</TableCell>
          </TableRow>
          <TableRow className="table-row">
            <TableCell align="center">등록일자</TableCell>
            <TableCell align="center">{createdDate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <br></br><br></br>
    </div>
  );  
}

export default MarkDetail;

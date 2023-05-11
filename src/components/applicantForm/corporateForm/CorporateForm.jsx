import { TextField, Grid, Dialog } from "@mui/material";
import DaumPostcode from "react-daum-postcode";
import React, { useState, useEffect } from "react";
import {
  CustomTypo,
  FormContainer,
  FileLabel,
  Wrapper,
  PostCodeButton,
} from "../../../styles/FormStyles";

const CorporateForm = ({ onCorporateChange }) => {
  const [open, setOpen] = useState(false);
  const [corporateData, setCorporateData] = useState({
    name_kor: "",
    name_eng: "",
    brn: "",
    crn: "",
    corporateName: "",
    ssn: "",
    corporateMobile: "",
    corporatePhone: "",
    corporateEmail: "",
    seal: "seal", // 법인 인감 파일
    address: "", // 주소
    detail: "", // 상세주소
    zipcode: "", // 우편번호
    agreement: "동의",
  });

  useEffect(() => {
    onCorporateChange(corporateData);
  }, [corporateData, onCorporateChange]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setCorporateData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("seal", file);

    // FormData 객체에 파일이 제대로 첨부되었는지 확인
    console.log(formData.get("seal"));

    setCorporateData((prevData) => ({ ...prevData, seal: formData }));
  };

  const handleComplete = (data) => {
    setCorporateData((prevData) => ({
      ...prevData,
      address: `${data.address} ${
        data.buildingName ? `(${data.buildingName})` : ""
      }`,
      zipcode: data.zonecode,
    }));
    setOpen(false);
  };

  return (
    <form>
      <FormContainer>
        <CustomTypo>05. 출원인 정보를 입력해주세요</CustomTypo>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateName_kor"
              label="법인명(한글)"
              variant="standard"
              value={corporateData.name_kor}
              onChange={(event) => handleInputChange(event, "name_kor")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateName_eng"
              label="법인명(영어)"
              variant="standard"
              value={corporateData.name_eng}
              onChange={(event) => handleInputChange(event, "name_eng")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateBrn"
              label="사업자 등록번호"
              variant="standard"
              value={corporateData.brn}
              onChange={(event) => handleInputChange(event, "brn")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateCrn"
              label="법인 등록번호"
              variant="standard"
              value={corporateData.crn}
              onChange={(event) => handleInputChange(event, "crn")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateName"
              label="대표자 성명"
              variant="standard"
              value={corporateData.corporateName}
              onChange={(event) => handleInputChange(event, "corporateName")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateSsn"
              label="대표자 주민등록번호"
              variant="standard"
              value={corporateData.ssn}
              onChange={(event) => handleInputChange(event, "ssn")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateMobile"
              label="법인 대표 휴대전화"
              variant="standard"
              value={corporateData.corporateMobile}
              onChange={(event) => handleInputChange(event, "corporateMobile")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="corporatePhone"
              label="법인 대표 유선전화"
              variant="standard"
              fullWidth
              sx={{ mb: "3rem" }}
              value={corporateData.corporatePhone}
              onChange={(event) => handleInputChange(event, "corporatePhone")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateEmail"
              label="법인 대표 이메일"
              variant="standard"
              value={corporateData.corporateEmail}
              onChange={(event) => handleInputChange(event, "corporateEmail")}
            />
          </Grid>
        </Grid>
      </FormContainer>
      <Wrapper>
        <FileLabel htmlFor="fileUpload">
          사용중인 법인 인감 파일이 있다면 파일을 첨부해주세요
        </FileLabel>
        <input
          accept="image/*"
          id="imgUpload"
          type="file"
          onChange={(event) => handleImageChange(event)}
        />
        <label className="fileLabel" htmlFor="imgUpload">
          파일 첨부
        </label>
      </Wrapper>
      <FormContainer>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CustomTypo>07. 법인 등본상 주소를 입력해주세요</CustomTypo>
          </Grid>
          <Grid item xs={6}>
            <TextField
              controlled="true"
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateZipcode"
              label="우편번호"
              variant="standard"
              value={corporateData.zipcode}
              onChange={(event) => handleInputChange(event, "zipcode")}
            />
          </Grid>
          <Grid item xs={4}>
            <PostCodeButton
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
            >
              우편번호찾기
            </PostCodeButton>
          </Grid>
          <Grid item xs={12}>
            <TextField
              controlled="true"
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateAddress"
              label="주소"
              variant="standard"
              value={corporateData.address}
              onChange={(event) => handleInputChange(event, "address")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              controlled="true"
              required
              fullWidth
              sx={{ mb: "3rem" }}
              id="corporateDetail"
              label="상세주소"
              variant="standard"
              value={corporateData.detail}
              onChange={(event) => handleInputChange(event, "detail")}
            />
          </Grid>
        </Grid>
        {open && (
          <Dialog
            open={open}
            onClose={handleClose}
            sx={{ "& .MuiDialog-paper": { width: "600px" } }}
          >
            <DaumPostcode onComplete={handleComplete} />
          </Dialog>
        )}
      </FormContainer>
    </form>
  );
};
export default CorporateForm;

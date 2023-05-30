import { Grid, Dialog } from "@mui/material";
import DaumPostcode from "react-daum-postcode";
import React, { useState, useEffect } from "react";
import {
  CustomTypo,
  FormContainer,
  FileLabel,
  PostCodeButton,
  FileUploadContainer,
  CustomTextField,
} from "../../../styles/formStyles";

const CorporateForm = ({ onCorporateChange, onSealDataChange }) => {
  const [fileName, setFileName] = useState("");
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
    address: "", // 주소
    detail: "", // 상세주소
    zipcode: "", // 우편번호
    agreement: "",
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

    if (file.size === 0) {
      // 파일이 선택되지 않은 경우
      return;
    }

    if (file.size > 50000000) {
      window.confirm(
        "사진 크기가 너무 큽니다. 50MB 이하의 크기로 업로드 해주세요."
      );
      event.target.value = null;
      return;
    }

    setFileName(file.name);

    onSealDataChange(file);
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
    <>
      <FormContainer>
        <CustomTypo>06. 출원인 정보를 입력해주세요*</CustomTypo>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateName_kor"
              label="법인명(한글)"
              variant="standard"
              value={corporateData.name_kor}
              onChange={(event) => handleInputChange(event, "name_kor")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateName_eng"
              label="법인명(영어)"
              variant="standard"
              value={corporateData.name_eng}
              onChange={(event) => handleInputChange(event, "name_eng")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateBrn"
              label="사업자 등록번호"
              variant="standard"
              value={corporateData.brn}
              onChange={(event) => handleInputChange(event, "brn")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateCrn"
              label="법인 등록번호"
              variant="standard"
              value={corporateData.crn}
              onChange={(event) => handleInputChange(event, "crn")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateName"
              label="대표자 성명"
              variant="standard"
              value={corporateData.corporateName}
              onChange={(event) => handleInputChange(event, "corporateName")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateSsn"
              label="대표자 생년월일"
              variant="standard"
              value={corporateData.ssn}
              onChange={(event) => handleInputChange(event, "ssn")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateMobile"
              label="법인 대표 휴대전화"
              variant="standard"
              value={corporateData.corporateMobile}
              onChange={(event) => handleInputChange(event, "corporateMobile")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              id="corporatePhone"
              label="법인 대표 유선전화"
              variant="standard"
              fullWidth
              value={corporateData.corporatePhone}
              onChange={(event) => handleInputChange(event, "corporatePhone")}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              required
              fullWidth
              id="corporateEmail"
              label="법인 대표 이메일"
              variant="standard"
              value={corporateData.corporateEmail}
              onChange={(event) => handleInputChange(event, "corporateEmail")}
            />
          </Grid>
        </Grid>
      </FormContainer>
      <FileUploadContainer>
        <FileLabel htmlFor="fileUpload">
          사용중인 법인 인감 파일이 있다면 파일을 첨부해주세요
        </FileLabel>
        <label
          style={{
            fontFamily: "Pretendard",
            textDecoration: "underline",
            fontSize: "20px",
          }}
        >
          {fileName}
        </label>
        <input
          accept="image/*"
          id="imgUpload"
          type="file"
          onChange={(event) => handleImageChange(event)}
        />
        <label className="fileLabel" htmlFor="imgUpload">
          파일 첨부
        </label>
      </FileUploadContainer>
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTypo>07. 법인 등본상 주소를 입력해주세요</CustomTypo>
          </Grid>
          <Grid item xs={8} sm={5}>
            <CustomTextField
              // required
              fullWidth
              id="corporateZipcode"
              label="우편번호"
              variant="standard"
              value={corporateData.zipcode}
              onChange={(event) => handleInputChange(event, "zipcode")}
            />
          </Grid>
          <Grid item xs={4} sm={7}>
            <PostCodeButton
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
            >
              우편번호찾기
            </PostCodeButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              controlled="true"
              // required
              fullWidth
              multiline
              id="corporateAddress"
              label="주소"
              variant="standard"
              value={corporateData.address}
              onChange={(event) => handleInputChange(event, "address")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              controlled="true"
              // required
              fullWidth
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
    </>
  );
};
export default CorporateForm;

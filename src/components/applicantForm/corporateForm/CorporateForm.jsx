import { TextField, Grid, Button } from "@mui/material";
import { Wrapper, Label, CustomTypo } from "./CorporateFormStyle";
import React from "react";
import { useState, useEffect } from "react";

const CorporateForm = ({ onCorporateChange }) => {
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
    seal: "seal",
    address: "address",
    detail: "detail",
    zipcode: "zipcode",
    agreement: "동의",
  });

  useEffect(() => {
    onCorporateChange(corporateData);
  }, [corporateData, onCorporateChange]);

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
  console.log(corporateData);
  return (
    <form>
      <Grid container spacing={2} sx={{ mb: "3rem", padding: "0 230px" }}>
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
      <Wrapper>
        <Label htmlFor="fileUpload">
          사용중인 법인 인감 파일이 있다면 파일을 첨부해주세요
        </Label>
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
      <Grid container spacing={1} sx={{ padding: "100px 230px" }}>
        <CustomTypo sx={{ mb: "3rem" }}>
          06. 법인 등본상 주소를 입력해주세요
        </CustomTypo>
        <Grid item xs={8}>
          <TextField
            required
            fullWidth
            sx={{ mb: "3rem" }}
            id="corporateAddress"
            label="주소"
            variant="standard"
            // value={corporateData.address}
            // onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">주소검색</Button>
        </Grid>
        <Grid item xs={8}>
          <TextField
            required
            fullWidth
            sx={{ mb: "3rem" }}
            id="corporateDetail"
            label="상세주소"
            variant="standard"
            // value={corporateData.corporateDetail}
            // onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </form>
  );
};
export default CorporateForm;

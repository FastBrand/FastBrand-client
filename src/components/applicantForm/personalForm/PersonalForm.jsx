import { TextField, Grid } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
const PersonalForm = ({ onPersonalChange }) => {
  const [personalData, setPersonalData] = useState({
    name_kor: "",
    name_eng: "",
    ssn: "",
    personalEmail: "",
    personalMobile: "",
    personalPhone: "",
    address: "주소",
    detail: "상세주소",
    zipcode: "우편번호",
    agreement: "동의",
  });

  useEffect(() => {
    onPersonalChange(personalData);
  }, [personalData, onPersonalChange]);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setPersonalData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Grid container spacing={2} sx={{ mb: "3rem", padding: "0 230px" }}>
      <Grid item xs={6}>
        <TextField
          required
          fullWidth
          id="personalName_kor"
          label="성명(한글)"
          variant="standard"
          sx={{ mb: "3rem" }}
          value={personalData.personalName_kor}
          onChange={(event) => handleInputChange(event, "name_kor")}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          fullWidth
          id="applicantEnglishName"
          label="성명(영어)"
          variant="standard"
          sx={{ mb: "3rem" }}
          value={personalData.name_eng}
          onChange={(event) => handleInputChange(event, "name_eng")}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          fullWidth
          id="personalSsn"
          label="주민번호"
          variant="standard"
          sx={{ mb: "3rem" }}
          value={personalData.ssn}
          onChange={(event) => handleInputChange(event, "ssn")}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          fullWidth
          id="personalEmail"
          label="이메일"
          variant="standard"
          sx={{ mb: "3rem" }}
          value={personalData.personalEmail}
          onChange={(event) => handleInputChange(event, "personalEmail")}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          fullWidth
          id="personalMobile"
          label="휴대전화"
          variant="standard"
          sx={{ mb: "3rem" }}
          value={personalData.personalMobile}
          onChange={(event) => handleInputChange(event, "personalMobile")}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="personalPhone"
          label="유선전화"
          variant="standard"
          sx={{ mb: "3rem" }}
          value={personalData.personalPhone}
          onChange={(event) => handleInputChange(event, "personalPhone")}
        />
      </Grid>
    </Grid>
  );
};
export default PersonalForm;

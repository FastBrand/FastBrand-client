import { TextField, Grid, Dialog } from "@mui/material";
import DaumPostcode from "react-daum-postcode";
import React, { useState, useEffect } from "react";
import {
  CustomTypo,
  FormContainer,
  PostCodeButton,
} from "../../../styles/FormStyles";

const PersonalForm = ({ onPersonalChange }) => {
  const [open, setOpen] = useState(false);
  const [personalData, setPersonalData] = useState({
    name_kor: "",
    name_eng: "",
    ssn: "",
    personalEmail: "",
    personalMobile: "",
    personalPhone: "",
    address: "",
    detail: "",
    zipcode: "",
    agreement: "동의",
  });

  useEffect(() => {
    onPersonalChange(personalData);
  }, [personalData, onPersonalChange]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setPersonalData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleComplete = (data) => {
    setPersonalData((prevData) => ({
      ...prevData,
      address: `${data.address} ${
        data.buildingName ? `(${data.buildingName})` : ""
      }`,
      zipcode: data.zonecode,
    }));
    setOpen(false);
  };

  return (
    <FormContainer>
      <CustomTypo>05. 출원인 정보를 입력해주세요</CustomTypo>
      <Grid container spacing={2}>
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
        <Grid item xs={6}>
          <TextField
            controlled="true"
            required
            fullWidth
            sx={{ mb: "3rem" }}
            id="personalZipcode"
            label="우편번호"
            variant="standard"
            value={personalData.zipcode}
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
            id="personalAddress"
            label="주소"
            variant="standard"
            value={personalData.address}
            onChange={(event) => handleInputChange(event, "address")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            controlled="true"
            required
            fullWidth
            sx={{ mb: "3rem" }}
            id="personalDetail"
            label="상세주소"
            variant="standard"
            value={personalData.detail}
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
  );
};
export default PersonalForm;

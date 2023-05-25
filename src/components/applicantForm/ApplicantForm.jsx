import {
  CustomRadio,
  CustomFormControlLabel,
  CustomRadioGroup,
} from "./ApplicantFormStyle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
  Radio,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { FileLabel, Wrapper, FormContainer } from "../../styles/formStyles";
import React from "react";
import { useState, useEffect } from "react";
import PersonalForm from "./personalForm/PersonalForm";
import CorporateForm from "./corporateForm/CorporateForm";

const ApplicantForm = ({
  onApplicantChange,
  onApplicantTypeChange,
  onSealDataChange,
}) => {
  const [applicantType, setApplicantType] = useState({ poc: "personal" });
  const [corporateData, setCorporateData] = useState({});
  const [personalData, setPersonalData] = useState({});
  const [applicantData, setApplicantData] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setApplicantData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setApplicantType(() => ({
      poc: value,
    }));
  };

  useEffect(() => {
    onApplicantTypeChange(applicantType);
  }, [applicantType, onApplicantTypeChange]);

  useEffect(() => {
    // applicantType에 따라 personalData 또는 corporateData를 applicantData에 저장
    const dataToSave =
      applicantType.poc === "personal" ? personalData : corporateData;
    setApplicantData({ ...dataToSave });
  }, [applicantType, personalData, corporateData]);

  useEffect(() => {
    onApplicantChange(applicantData);
  }, [applicantData, onApplicantChange]);

  return (
    <>
      <Wrapper sx={{ backgroundColor: "#3E3E3F" }}>
        <FileLabel sx={{ color: "white" }}>
          출원인 유형을 선택해주세요*
        </FileLabel>
        <CustomRadioGroup
          name="applicant-type"
          value={applicantType.poc}
          onChange={handleChange}
        >
          <CustomFormControlLabel
            value="personal"
            control={<CustomRadio />}
            label="개인"
          />
          <CustomFormControlLabel
            value="corporate"
            control={<CustomRadio />}
            label="법인"
          />
        </CustomRadioGroup>
      </Wrapper>
      {applicantType.poc === "personal" ? (
        <PersonalForm onPersonalChange={setPersonalData} />
      ) : (
        <CorporateForm
          onCorporateChange={setCorporateData}
          onSealDataChange={onSealDataChange}
        />
      )}
      <Wrapper sx={{ backgroundColor: "white", height: "0", pb: 15 }}>
        <Typography
          sx={{
            cursor: "pointer",
            fontFamily: "Pretendard",
            textDecoration: "underline",
            fontSize: "18px",
            fontWeight: 500,
            mr: 1,
          }}
          onClick={handleDialogOpen}
        >
          개인정보수집 및 활용 동의 전문 보기*
        </Typography>
        <CustomRadioGroup
          name="agreement"
          value={applicantData.agreement}
          onChange={(event) => handleInputChange(event, "agreement")}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "Pretendard",
              fontWeight: 500,
            },
            width: "30%",
          }}
        >
          <FormControlLabel
            sx={{ m: 0 }}
            value="동의"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#CBA585",
                  },
                }}
              />
            }
            label="동의"
          />
          <FormControlLabel
            sx={{ m: 0 }}
            value="거부"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#CBA585",
                  },
                }}
              />
            }
            label="거부"
          />
        </CustomRadioGroup>
      </Wrapper>
      {dialogOpen && (
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          fullWidth
          maxWidth="sm"
          scroll="paper"
        >
          <DialogActions>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDialogClose}
              sx={{
                position: "absolute",
                top: 5,
                right: 15,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
          <DialogTitle>개인정보수집 및 활용</DialogTitle>
          <DialogContent dividers>개인정보수집 및 활용 내용</DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ApplicantForm;

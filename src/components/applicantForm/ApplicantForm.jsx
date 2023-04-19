import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import {
  CustomTypo,
  FormContainer,
  Wrapper,
  Label,
  ApplicantWrapper,
  CustomRadio,
} from "./ApplicantFormStyle";
import React from "react";
import { useState, useEffect } from "react";
import PersonalForm from "./personalForm/PersonalForm";
import CorporateForm from "./corporateForm/CorporateForm";

const ApplicantForm = ({ onApplicantChange }) => {
  const [applicantType, setApplicantType] = useState("personal");
  const [corporateData, setCorporateData] = useState({});
  const [personalData, setPersonalData] = useState({});
  const [applicantData, setApplicantData] = useState({});

  const handleChange = (event) => {
    setApplicantType(event.target.value);
  };

  useEffect(() => {
    onApplicantChange(applicantData);
  }, [applicantData, onApplicantChange]);

  useEffect(() => {
    // applicantType에 따라 personalData 또는 corporateData를 applicantData에 저장
    const dataToSave =
      applicantType === "personal" ? personalData : corporateData;
    setApplicantData({ ...dataToSave, type: applicantType });
  }, [applicantType, personalData, corporateData]);

  return (
    <FormContainer>
      <FormControl component="fieldset">
        <Wrapper>
          <Label>출원인 유형을 선택해주세요</Label>
          <RadioGroup
            name="applicant-type"
            value={applicantType}
            onChange={handleChange}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <FormControlLabel
              value="personal"
              control={<CustomRadio />}
              label="개인"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Pretendard",
                  fontWeight: "500",
                  fontSize: "20px",
                },
              }}
            />
            <FormControlLabel
              value="corporate"
              control={<CustomRadio />}
              label="법인"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Pretendard",
                  fontWeight: "500",
                  fontSize: "20px",
                },
              }}
            />
          </RadioGroup>
        </Wrapper>
        <ApplicantWrapper>
          <CustomTypo sx={{ margin: "100px 0" }}>
            05. 출원인 정보를 입력해주세요
          </CustomTypo>
        </ApplicantWrapper>
        {applicantType === "personal" ? (
          <PersonalForm onPersonalChange={setPersonalData} />
        ) : (
          <CorporateForm onCorporateChange={setCorporateData} />
        )}
      </FormControl>
    </FormContainer>
  );
};

export default ApplicantForm;

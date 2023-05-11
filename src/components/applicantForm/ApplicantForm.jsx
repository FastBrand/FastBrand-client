import {
  CustomRadio,
  CustomFormControlLabel,
  CustomRadioGroup,
} from "./ApplicantFormStyle";
import { FileLabel, Wrapper } from "../../styles/FormStyles";
import React from "react";
import { useState, useEffect } from "react";
import PersonalForm from "./personalForm/PersonalForm";
import CorporateForm from "./corporateForm/CorporateForm";

const ApplicantForm = ({ onApplicantChange, onApplicantTypeChange }) => {
  const [applicantType, setApplicantType] = useState({ poc: "personal" });
  const [corporateData, setCorporateData] = useState({});
  const [personalData, setPersonalData] = useState({});
  const [applicantData, setApplicantData] = useState({});

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
          출원인 유형을 선택해주세요
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
        <CorporateForm onCorporateChange={setCorporateData} />
      )}
    </>
  );
};

export default ApplicantForm;

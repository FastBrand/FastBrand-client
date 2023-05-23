import React, { useState, useEffect } from "react";
import { TextField, Grid } from "@mui/material";
import {
  CustomTypo,
  FormContainer,
  CustomTextField,
} from "../../styles/formStyles";

const ManagerForm = ({ onManagerChange }) => {
  const [managerData, setManagerData] = useState({
    name: "",
    email: "",
    mobile: "",
    phone: "",
    acc_num: "", // 계좌번호
  });

  useEffect(() => {
    onManagerChange(managerData);
  }, [managerData, onManagerChange]);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setManagerData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <FormContainer>
      <CustomTypo>04. 담당자 정보를 입력해주세요</CustomTypo>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField
            fullWidth
            required
            id="managerName"
            label="성명"
            variant="standard"
            value={managerData.name}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            fullWidth
            required
            id="managerEMail"
            label="이메일"
            variant="standard"
            value={managerData.email}
            onChange={(event) => handleInputChange(event, "email")}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            fullWidth
            required
            id="managerPhone"
            label="휴대전화"
            variant="standard"
            value={managerData.mobile}
            onChange={(event) => handleInputChange(event, "mobile")}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            id="managerLandlinePhone"
            fullWidth
            label="유선전화"
            variant="standard"
            value={managerData.phone}
            onChange={(event) => handleInputChange(event, "phone")}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            id="managerAccountNumber"
            required
            fullWidth
            label="계좌번호"
            variant="standard"
            value={managerData.acc_num}
            onChange={(event) => handleInputChange(event, "acc_num")}
          />
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default ManagerForm;

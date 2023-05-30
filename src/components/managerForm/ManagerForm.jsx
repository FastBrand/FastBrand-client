import React, { useState, useEffect } from "react";
import { Grid, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
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
    acc_num: "", // 은행명, 계좌번호
  });

  const [bankData, setBankData] = useState({
    type: "은행", // 은행, 증권사 구분
    name: "", // 은행/증권사명
    num: "", // 계좌번호
  });

  // 은행
  const bankNameList = [
    "농협",
    "신한",
    "카카오뱅크",
    "IBK기업",
    "하나",
    "우리",
    "국민",
    "SC제일",
    "대구",
    "부산",
    "광주",
    "새마을금고",
    "경남",
    "전북",
    "제주",
    "산업",
    "우체국",
    "신협",
    "수협",
    "씨티",
    "케이뱅크",
    "토스뱅크",
    "도이치",
    "BOA",
    "BNP",
    "중국공상",
    "HSBC",
    "JP모간",
    "산림조합",
    "저축은행",
  ];

  // 증권사
  const brokerNameList = [
    "교보증권",
    "다올투자",
    "대신증권",
    "DB금융",
    "메리츠증권",
    "미래에셋",
    "부국증권",
    "삼성증권",
    "신영증권",
    "신한증권",
    "유진투자",
    "유안타증권",
    "이베스트",
    "케이프투자",
    "키움증권",
    "한국포스",
    "NH투자",
    "하나증권",
    "하이투자",
    "한국투자",
    "한화투자",
    "현대차증권",
    "KB증권",
    "SK증권",
    "토스증권",
    "BNK투자",
    "IBK투자",
  ];

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

  const handleBankChange = (event) => {
    const { value } = event.target;
    setBankData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setBankData((prevData) => ({
      ...prevData,
      type: value,
      name: "", // Reset bank name when type changes
    }));
  };

  useEffect(() => {
    setManagerData((prevData) => ({
      ...prevData,
      acc_num: `${bankData.name}, ${bankData.num}`,
    }));
  }, [bankData.name, bankData.num]);

  return (
    <FormContainer>
      <CustomTypo>04. 담당자 정보를 입력해주세요*</CustomTypo>
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
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel
              required
              id="bankTypeLabel"
              sx={{
                fontFamily: "Pretendard",
                fontWeight: 500,
                fontSize: "20px",
                mt: 0.5,
                ml: -1.5,
              }}
            >
              은행/증권사 구분
            </InputLabel>
            <Select
              sx={{
                fontFamily: "Pretendard",
                fontSize: "20px",
                marginBottom: "2rem",
              }}
              variant="standard"
              labelId="bankTypeLabel"
              id="bankType"
              value={bankData.type}
              onChange={handleTypeChange}
            >
              <MenuItem sx={{ fontFamily: "Pretendard" }} value="은행">
                은행
              </MenuItem>
              <MenuItem sx={{ fontFamily: "Pretendard" }} value="증권사">
                증권사
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel
              id="bankNameLabel"
              required
              sx={{
                fontFamily: "Pretendard",
                fontWeight: 500,
                fontSize: "20px",
                mt: 0.7,
                ml: -1.5,
              }}
            >
              {bankData.type === "은행" ? "은행명" : "증권사명"}
            </InputLabel>
            <Select
              sx={{
                fontFamily: "Pretendard",
                fontSize: "20px",
                marginBottom: "2rem",
              }}
              variant="standard"
              labelId="bankNameLabel"
              id="bankName"
              value={bankData.name}
              onChange={handleBankChange}
            >
              {bankData.type === "은행" &&
                bankNameList.map((bank) => (
                  <MenuItem
                    key={bank}
                    value={bank}
                    sx={{ fontFamily: "Pretendard" }}
                  >
                    {bank}
                  </MenuItem>
                ))}
              {bankData.type === "증권사" &&
                brokerNameList.map((broker) => (
                  <MenuItem
                    key={broker}
                    value={broker}
                    sx={{ fontFamily: "Pretendard" }}
                  >
                    {broker}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <CustomTextField
            sx={{ pb: 0 }}
            id="managerAccountNumber"
            required
            fullWidth
            label="계좌번호"
            variant="standard"
            value={bankData.num}
            onChange={(event) =>
              setBankData((prevData) => ({
                ...prevData,
                num: event.target.value,
              }))
            }
          />
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default ManagerForm;

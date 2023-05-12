import { TextField, Grid } from "@mui/material";
import React from "react";
import "./TrademarkForm.scss";
import {
  CustomTypo,
  FormContainer,
  Wrapper,
  FileLabel,
} from "../../styles/FormStyles";
import { useState, useEffect } from "react";

const TrademarkForm = ({ onTrademarkDataChange }) => {
  const [trademarkData, setTrademarkData] = useState({
    brand_name: "",
    description: "",
    image: "image",
  });
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    onTrademarkDataChange(trademarkData);
  }, [trademarkData, onTrademarkDataChange]);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setTrademarkData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // const formData = new FormData();
    // formData.append("image", file);
    // FormData 객체에 파일이 제대로 첨부되었는지 확인
    // console.log(formData.get("image"));

    setTrademarkData((prevData) => ({
      ...prevData,
      image: file.name,
    }));
    console.log(file.name);
    // console.log(trademarkData);
    // setFileName(file.name);
  };
  return (
    <>
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTypo sx={{ mb: "3rem" }}>
              02. 상표명과 설명을 적어주세요
            </CustomTypo>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="trademarkName"
              label="상표명"
              variant="standard"
              sx={{ mb: "3rem" }}
              value={trademarkData.trademarkName}
              onChange={(event) => handleInputChange(event, "brand_name")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="trademarkDescription"
              label="상표에 대한 설명을 간단하게 작성해주세요"
              variant="standard"
              value={trademarkData.trademarkDescription}
              onChange={(event) => handleInputChange(event, "description")}
            />
          </Grid>
        </Grid>
      </FormContainer>
      <Wrapper>
        <FileLabel>상표이미지가 있다면 파일을 첨부해주세요</FileLabel>
        <input
          accept="image/*"
          id="fileUpload"
          type="file"
          onChange={(event) => handleImageChange(event)}
        />
        <label className="fileLabel" htmlFor="fileUpload">
          파일 첨부
        </label>
      </Wrapper>
    </>
  );
};

export default TrademarkForm;

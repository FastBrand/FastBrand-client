import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { CustomTypo, FormContainer } from "../../styles/formStyles";
import markType_data from "./data"; //상표유형 데이터
import "./MarkSelectForm.css";

function MarkAreaCard(props) {
  //상표유형 카드 컴포넌트
  const [isSelected, setIsSelected] = useState(false); //카드가 선택됐는지 판단하는 state

  const handleClick = () => {
    props.onClick(props.markData.type);
    setIsSelected(true); // 선택된 상태로 설정합니다.
  };

  useEffect(() => {
    if (props.selectedMark !== props.markData.type) {
      setIsSelected(false);
    }
  }, [props.selectedMark]);

  useEffect(() => {
    if (props.selectedMark === props.markData.type) {
      setIsSelected(true);
    }
  }, [props.selectedMark, props.markData.type]);

  const content01 = String(props.markData.content);

  return (
    <Card
      sx={{
        alignItems: "center",
        textAlign: "center",
        backgroundColor: isSelected ? "#857770" : "white",
        color: isSelected ? "white" : "black",
        width: "300px", // 원하는 너비 설정
        height: "400px", // 원하는 높이 설정
        margin: "12px", // 원하는 마진 설정
        "@media (max-width: 1024px)": {
          width: "80%", // 화면이 600px 이하일 때 너비를 100%로 조정
          height: "auto", // 화면이 600px 이하일 때 높이를 자동 조정
          fontSize: "18px",
        },
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{ 
          width: "100%",
          height: "100%"}}
      >
        {/* <CardMedia
          component="img"
          image={box_icon}
          alt="package picture"
          sx={{
            width: 100,
            objectFit: "cover",
            margin: "0 auto 10px ", // top right bottom left
          }}
        /> */}
        <CardContent sx={{ justifyContent: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            // component="div"
            sx={{
              color: isSelected ? "#f6f6eb" : "#857770",
              fontFamily: "Pretendard",
              fontWeight: 700,
              fontSize: "34px",
              "@media (max-width: 1024px)":{
                fontSize: "24px",
              },
              "@media (max-width: 600px)":{
                fontSize: "14px",
              }
            }}
          >
            {props.markData.type}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            fontFamily="Pretendard"
            fontSize="18px"
            sx={{
              wordWrap: "break-word",
              "@media (max-width: 1024px)":{
                fontSize: "18px",
                display: "none",
              }
            }}
          >
          {props.markData.content}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            fontFamily="Pretendard"
            fontSize="18px"
            sx={{
              wordWrap: "break-word",
              "@media (max-width: 1024px)":{
                fontSize: "20px",
                display: "none",
              }
            }}
          >
           {props.markData.content2}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            fontFamily="Pretendard"
            fontSize="18px"
            sx={{
              wordWrap: "break-word",
              "@media (max-width: 1024px)":{
                fontSize: "20px",
                display: "none", 
              }
            }}
          >
            {props.markData.content3}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              marginBottom: '10px',
              color: isSelected ? "#f6f6eb" : "#857770",
                "@media (max-width: 1024px)":{
                  fontSize: "24px",
                },
              "@media (max-width: 600px)":{
                fontSize: "10px",
              }
            }}
          >
            <br/>₩ {props.markData.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function MarkSelectForm({ onSelectedMark }) {
  //상표패키지선택 컴포넌트

  const [selectedMark, setSelectedMark] = useState("국내출원");

  const handleMarkClick = (type) => {
    //패키지 타입,인덱스 상태 저장
    setSelectedMark(type);
  };

  let [markData] = useState(markType_data); //상표패키지 데이터
  useEffect(() => {
    onSelectedMark(selectedMark);
  }, [selectedMark, onSelectedMark]);

  return (
    <Box sx={{ backgroundColor: "#3e3e3f", paddingTop: "80px" }}>
      <FormContainer>
        <CustomTypo sx={{ color: "white" }}>
          01. 패키지 유형을 선택해주세요*
        </CustomTypo>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <MarkAreaCard
              markData={markData[0]}
              onClick={handleMarkClick}
              selectedMark={selectedMark}
            />
          </Grid>
          <Grid item xs={4}>
            <MarkAreaCard
              markData={markData[1]}
              onClick={handleMarkClick}
              selectedMark={selectedMark}
            />
          </Grid>
          <Grid item xs={4}>
            <MarkAreaCard
              markData={markData[2]}
              onClick={handleMarkClick}
              selectedMark={selectedMark}
            />
          </Grid>
        </Grid>
      </FormContainer>
    </Box>
  );
}
export default MarkSelectForm;

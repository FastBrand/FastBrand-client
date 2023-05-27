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

  return (
    <Card
      sx={{
        alignItems: "center",
        textAlign: "center",
        backgroundColor: isSelected ? "#857770" : "white",
        color: isSelected ? "white" : "black",
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{ paddingBottom: "20px", paddingTop: "20px" }}
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
              fontSize: "36px",
            }}
          >
            {props.markData.type}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            fontFamily="Pretendard"
            fontSize="18px"
          >
            {props.markData.content}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            fontFamily="Pretendard"
            fontSize="18px"
          >
            {props.markData.content2}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            fontFamily="Pretendard"
            fontSize="18px"
          >
            {props.markData.content3}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              color: isSelected ? "#f6f6eb" : "#857770",
            }}
          >
            <br />₩{props.markData.price}
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
          01. 패키지 유형을 선택해주세요
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

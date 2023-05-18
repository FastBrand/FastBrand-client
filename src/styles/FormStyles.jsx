// 신청 폼 스타일
import { styled } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

export const CustomTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "42px",
  marginBottom: "2rem",
}));

export const FormContainer = styled("div")(({ theme }) => ({
  padding: "100px 13vw",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
}));

export const Wrapper = styled("div")(({ theme }) => ({
  paddingLeft: "13vw",
  paddingRight: "13vw",
  backgroundColor: "#eee",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
}));

export const FileLabel = styled("label")({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "25px",
});

export const FileUploadContainer = styled("div")(({ theme }) => ({
  paddingLeft: "13vw",
  paddingRight: "13vw",
  backgroundColor: "#eee",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    paddingTop: "10px",
    paddingBottom: "10px",
    height: "150px",
  },
}));

export const PostCodeButton = styled(Button)({
  borderRadius: "30px",
  backgroundColor: "#d9d9d9",
  color: "black",
  fontFamily: "Pretendard",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#d9d9d9",
    color: "black",
  },
});

export const CustomTextField = styled(TextField)({
  // 폰트 설정
  fontFamily: "Pretendard",
  fontWeight: "400",

  "& label.Mui-focused": {
    // focused 상태일 때의 라벨 색상
    color: "#f44336",
  },
  "& .MuiInputBase-root": {
    // 기본 상태일 때의 폰트와 밑줄 색상
    fontFamily: "Pretendard",
    fontWeight: "400",
    borderBottom: "1px solid #757575",
    "&.Mui-focused": {
      // focused 상태일 때의 폰트와 밑줄 색상
      borderBottom: "2px solid black",
    },
  },
});

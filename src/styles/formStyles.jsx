// 신청 폼 스타일
import { styled } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

export const CustomTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "38px",
  marginBottom: "2rem",
}));

export const FormContainer = styled("div")(({ theme }) => ({
  padding: "90px 15vw",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
}));

export const Wrapper = styled("div")(({ theme }) => ({
  paddingLeft: "15vw",
  paddingRight: "15vw",
  backgroundColor: "#eee",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
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
  paddingLeft: "15vw",
  paddingRight: "15vw",
  backgroundColor: "#eee",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
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
  "& .MuiInputBase-root": {
    fontFamily: "Pretendard",
    fontWeight: "500",
    fontSize: "20px",
  },
  // 라벨 폰트 설정
  "& .MuiInputLabel-root": {
    fontFamily: "Pretendard",
    fontWeight: "500",
    fontSize: "20px",
  },
  "&.MuiTextField-root": {
    // dense 설정
    paddingBottom: "2rem",
  },

  // Helpertext 스타일
  "& .MuiFormHelperText-root": {
    fontFamily: "Pretendard",
    fontWeight: "500",
    fontSize: "14px",
  },
});

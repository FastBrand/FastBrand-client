// 신청 폼 스타일
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const CustomTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "42px",
  marginBottom: "2rem",
}));

export const FormContainer = styled("div")(({ theme }) => ({
  padding: "100px 13vw", //top right bottom left,
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

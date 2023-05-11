import { styled } from "@mui/system";
import { Typography, Container } from "@mui/material";

export const CustomTypo = styled(Typography)({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "46px",
});

export const FormContainer = styled(Container)(({ theme }) => ({
  padding: "100px 230px",
}));

export const Wrapper = styled("div")(({ theme }) => ({
  paddingLeft: "230px",
  paddingRight: "230px",
  backgroundColor: "#eee",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const CustomLabel = styled("label")({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "25px",
});

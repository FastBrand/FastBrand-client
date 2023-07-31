import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  paddingLeft: "230px",
  paddingRight: "230px",
  backgroundColor: "#eee",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Label = styled("label")({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "25px",
});

export const CustomTypo = styled(Typography)({
  fontFamily: "Pretendard",
  fontWeight: "600",
  fontSize: "46px",
});

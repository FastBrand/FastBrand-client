import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontSize: "24px",
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const Content = styled(Typography)({
  fontFamily: "Pretendard",
});

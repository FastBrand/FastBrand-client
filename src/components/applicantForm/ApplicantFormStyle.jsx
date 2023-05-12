import { styled } from "@mui/system";
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";

export const CustomRadio = styled(Radio)({
  color: "white",
  "&.Mui-checked": {
    color: "#CBA585",
  },
});

export const CustomFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    fontFamily: "Pretendard",
    fontWeight: "500",
    fontSize: "20px",
    color: "white",
  },
});

export const CustomRadioGroup = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "60%",
});

import FaqTable from "../../compoents/faqTable/FaqTable";
import { Box, Typography } from "@mui/material";

const FaqAdmin = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: "35px", fontFamily: "Pretendard" }}>
        FAQ 관리
      </Typography>
      <br />
      <FaqTable />
    </Box>
  );
};
export default FaqAdmin;

import { Tooltip, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const CustomTooltip = () => {
  return (
    <Tooltip
      placement="top"
      title={
        <>
          <Typography fontSize={"16px"} fontFamily="Pretendard">
            <span style={{ color: "#ffc448" }}>장점: </span>
            마드리드 출원이란 [마드리드 협약]에 속해 있는 국가들을 중계하는
            기관에 요청하여 여러 국가 동시 출원시에 '기본개별수수료' 절감효과를
            누릴수 있습니다.
            <br />
            <br />
            <span style={{ color: "#ff8368" }}>단점: </span>
            중계기관을 거치므로 개별국출원 보다 다소 심사진행이 느릴 수 있습니다.
          </Typography>
        </>
      }
    >
      <HelpIcon fontSize="small" />
    </Tooltip>
  );
};
export default CustomTooltip;

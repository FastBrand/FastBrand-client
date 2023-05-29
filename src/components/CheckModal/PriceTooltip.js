import {Tooltip, Typography} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const PriceTooltip = () => {
    return (
        <Tooltip
        placement="top"
        title={
       
         <Typography variant="body1">
         <span style={{}}>[미국] 2개류 출원 기준예시:</span>
         <br />
         <br />
            <span style={{color:'#ed833b', fontWeight:"400"}}>마드리드 출원의 경우:</span>
            <br/>
            기본 수수료 (300,000) + 
            국고금(CHF 460) + 
            추가 류 수수료 (100,000) + 
            추가 류 국고금(CHF 460) + 
            당소 마드리드 기본 수수료(1,000,000) + 
            마드리드 기본 국고금(CHF 653)
            <br />
            <br />
            <span style={{color:"#fff8d5"}}>개별국가 출원의 경우:</span>
            <br/>
             기본 수수료 (700,000) +
             현지 기본 비용 (USD 1000) + 
             추가 류 수수료 (700,000) + 
             현지 추가 류 비용 (USD 1000)
             <br/><br/>
             <span style={{color:'#ff9894'}}>
             *마드리드 기본 수수료와 마드리드 기본 국고금은 한번만 부과됩니다.<br/>
             *추가 류 수수료와 추가 류 국고금은 류 하나를 추가 할 때마다 부과됩니다.
             </span>
        </Typography>   
     
        }
        >
            <HelpIcon fontSize="small"/>
        </Tooltip>
    );
};
export default PriceTooltip;
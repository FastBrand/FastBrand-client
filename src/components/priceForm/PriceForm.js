import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./PriceForm.css";
import { ReactComponent as CheckIcon } from "../../assets/images/icon/iconCheck.svg";
import Navbar from "../../components/navbar/Navbar";

function PriceForm() {
  let [title] = useState([
    "국내출원 상표등록",
    "해외출원 상표등록",
    "국내+해외출원 상표등록",
  ]);
  
  return (
    <div>
      <div>
      <Navbar backgroundColor={true} borderBottom={true} />
      </div>
    <div className="priceInfo">
      <br/>
      <div className="priceTitle">비용안내</div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card className="priceCard">
              <CardContent>
              <Typography id='priceNotice01'>
                  {title[0]}
                </Typography>
                <br /><br /><br />
                <Typography id="priceNum" variant="h3" color={"#CBA585"}>
                  ₩ 000,000~
                </Typography>
                <Typography id='priceNotice02'>
                  <CheckIcon /> 30일 이내 출원심사 완료
                  <br /><br /><br />
                  <CheckIcon /> 상표출원 불가판정 시, 심사비 환불
                  <br /><br /><br />
                  <CheckIcon /> 무료 문의
                  <br /><br /><br />
                </Typography>
                <br /><br /><br />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className="priceCard">
              <CardContent>
              <Typography id='priceNotice01'>
                  {title[1]}
                </Typography>
                <br /><br /><br />
                <Typography id="priceNum" variant="h3" color={"#7A3200"}>
                  ₩ 000,000~
                </Typography>
                <Typography id='priceNotice02'>
                  <CheckIcon /> 30일 이내 출원심사 완료
                  <br /><br /><br />
                  <CheckIcon /> 상표출원 불가판정 시, 심사비 환불
                  <br /><br /><br />
                  <CheckIcon /> 무료 문의
                  <br /><br /><br />
                </Typography>
                <br /><br /><br />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className="priceCard">
              <CardContent>
                <Typography id='priceNotice01'>
                  {title[2]}
                </Typography>
                <br /><br /><br />
                <Typography id="priceNum" variant="h3" color={"#005B49"}>
                  ₩ 000,000~
                </Typography>
                <Typography id='priceNotice02'>
                  <CheckIcon /> 30일 이내 출원심사 완료
                  <br /><br /><br />
                  <CheckIcon /> 상표출원 불가판정 시, 심사비 환불
                  <br /><br /><br />
                  <CheckIcon /> 무료 문의
                  <br /><br /><br />
                </Typography>
                <br /><br /><br />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
    </div>
  );
}
export default PriceForm;

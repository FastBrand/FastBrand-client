import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./PriceForm.css";
import { ReactComponent as CheckIcon } from "../../assets/images/icon/iconCheck.svg";

function PriceForm() {
  let [title] = useState([
    "국내출원 상표등록",
    "해외출원 상표등록",
    "국내+해외출원 상표등록",
  ]);
  return (
    <div className="priceInfo">
      <br />
      <div className="priceTitle">비용안내</div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card
              sx={{ minWidth: 150, minHeight: 500, maxHeight: 700 }}
              elevation={5}
            >
              <CardContent>
                <Typography
                  fontSize={20}
                  fontWeight={600}
                  marginTop={2}
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="left"
                >
                  {title[0]}
                </Typography>
                <br />
                <br />
                <br />
                <Typography id="priceNum" variant="h3" color={"#CBA585"}>
                  ₩ 000,000~
                </Typography>
                <Typography
                  fontSize={18}
                  fontWeight={400}
                  marginTop={10}
                  textAlign="left"
                >
                  <CheckIcon /> 30일 이내 출원심사 완료
                  <br />
                  <br />
                  <br />
                  <CheckIcon /> 상표출원 불가판정 시, 심사비 환불
                  <br />
                  <br />
                  <br />
                  <CheckIcon /> 무료 문의
                  <br />
                  <br />
                  <br />
                </Typography>
                <br />
                <br />
                <br />
                <Button id="applicationButton" variant="contained">
                  상표등록 신청하기
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              sx={{ minWidth: 150, minHeight: 500, maxHeight: 700 }}
              elevation={5}
            >
              <CardContent>
                <Typography
                  fontSize={20}
                  fontWeight={600}
                  marginTop={2}
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="left"
                >
                  {title[1]}
                </Typography>
                <br />
                <br />
                <br />
                <Typography id="priceNum" variant="h3" color={"#7A3200"}>
                  ₩ 000,000~
                </Typography>
                <Typography
                  font-fontSize={18}
                  fontWeight={400}
                  marginTop={10}
                  textAlign="left"
                >
                  <CheckIcon /> 30일 이내 출원심사 완료
                  <br />
                  <br />
                  <br />
                  <CheckIcon /> 상표출원 불가판정 시, 심사비 환불
                  <br />
                  <br />
                  <br />
                  <CheckIcon /> 무료 문의
                  <br />
                  <br />
                  <br />
                </Typography>
                <br />
                <br />
                <br />
                <Button
                  id="applicationButton"
                  variant="contained"
                  style={{ backgroundColor: "#7A3200" }}
                >
                  상표등록 신청하기
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              sx={{ minWidth: 150, minHeight: 500, maxHeight: 700 }}
              elevation={5}
            >
              <CardContent>
                <Typography
                  fontSize={20}
                  fontWeight={600}
                  marginTop={2}
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="left"
                >
                  {title[2]}
                </Typography>
                <br />
                <br />
                <br />
                <Typography id="priceNum" variant="h3" color={"#005B49"}>
                  ₩ 000,000~
                </Typography>
                <Typography
                  font-fontSize={18}
                  fontWeight={400}
                  marginTop={10}
                  textAlign="left"
                >
                  <CheckIcon /> 30일 이내 출원심사 완료
                  <br />
                  <br />
                  <br />
                  <CheckIcon /> 상표출원 불가판정 시, 심사비 환불
                  <br />
                  <br />
                  <br />
                  <CheckIcon /> 무료 문의
                  <br />
                  <br />
                  <br />
                </Typography>
                <br />
                <br />
                <br />
                <Button
                  id="applicationButton"
                  variant="contained"
                  style={{ backgroundColor: "#005B49" }}
                >
                  {" "}
                  상표등록 신청하기
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default PriceForm;

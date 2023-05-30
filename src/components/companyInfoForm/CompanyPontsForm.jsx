import React from "react";
import { Fade } from "@mui/material";
import {
  // InfoBox01,
  // SectionTitle,
  InfoBox02,
  Strong,
  Text,
  SubTitle,
  Paragraph,
  Image01,
  Image02,
  Title,
} from "./CompanyPontsStyles";
// import { Grid } from "@mui/material";
import companyImage02 from "../../assets/images/teamwork.jpg";
import companyImage03 from "../../assets/images/happyprofessionalemployees.jpg";

function CompanyPointForm() {
  return (
    <div style={{ marginBottom: "200px" }}>
      {/* <InfoBox01>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <SectionTitle variant="h3">서비스안내</SectionTitle>
          </Grid>
        </Grid>
      </InfoBox01> */}
      <Fade timeout={1000} in={true} mountOnEnter unmountOnExit>
        <Title>서비스안내</Title>
      </Fade>
      <Fade timeout={2000} in={true} mountOnEnter unmountOnExit>
        <InfoBox02>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingRight: "40px",
            }}
          >
            <div style={{ paddingBottom: "20px" }}>
              <Text>UP</Text>
              <SubTitle>등록성공률</SubTitle>
              <Paragraph>
                풍부한 경험을 갖춘 상표전문가의 노하우와 선행상표 조사시 엄격한
                심사 요건 판단
                <Strong>
                  (사업화 중이거나 사업화 예정, 해외상표출원 예정인 상표들
                  위주로 출원)
                </Strong>
                검토로,
                <Strong>
                  중간사건(거절이유)이 발생되지 않도록 하여 높은 등록성공률
                </Strong>
              </Paragraph>
            </div>
            <div>
              <Text>DOWN</Text>
              <SubTitle>등록 기간 3개월로 단축</SubTitle>
              <Paragraph>
                빠른상표출원으로 통상 15개월 넘는 심사기간을 3개월로 단축
                우선심사신청을 진행하며 높은 등록률을 자랑함
              </Paragraph>
            </div>
          </div>
          <Image01 src={companyImage02} />
        </InfoBox02>
      </Fade>
      <Fade timeout={3000} in={true} mountOnEnter unmountOnExit>
        <InfoBox02>
          <Image02 src={companyImage03} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ paddingBottom: "20px" }}>
              <Text>REASONABLE</Text>
              <SubTitle>
                타 사이트에 비해 한국상표출원 수수료
                <br />
                <Strong>20% 할인하여 20만원</Strong>
              </SubTitle>
              <Paragraph>
                대리인 수수료(선행상표조사+우선심사포함) 할인된 20만원 특허청
                전문기관과 계약 우선심사조사료 절감
              </Paragraph>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <Text>SALE</Text>
              <SubTitle>
                해외상표출원시 한국상표출원 수수료
                <br />
                <Strong>50% 대폭할인</Strong>
              </SubTitle>
              <Paragraph>
                해외상표출원과 한국상표출원 동시 진행시 한국상표출원 수수료의
                대폭 할인
              </Paragraph>
            </div>
            <div>
              <Text>LOW PRICE</Text>
              <SubTitle>해외상표출원 수수료 초저가</SubTitle>
              <Paragraph>
                해외상표출원은 국내대리인 수수료 대폭 할인하여 초저가로 진행
                경험이 풍부한 해외대리인들을 활용 초저가 (출원비용 절감+중간사건
                횟수 단축)
              </Paragraph>
            </div>
          </div>
        </InfoBox02>
      </Fade>
    </div>
  );
}
export default CompanyPointForm;

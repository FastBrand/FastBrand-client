import { ToggleButton, Tooltip, Typography } from "@mui/material";
import { CustomTypo, FormContainer } from "../../styles/formStyles";
import React, { useState, useEffect } from "react";

const classifications = [
  { id: 1, name: "1류", description: "화학제품, 비료, 코팅제, 비닐" },
  { id: 2, name: "2류", description: "페인트, 니스, 래커, 잉크, 염료" },
  {
    id: 3,
    name: "3류",
    description: "화장품, 향수, 디퓨저, 비누, 세면용품, 세탁세제",
  },
  { id: 4, name: "4류", description: "양초, 향초, 램프" },
  { id: 5, name: "5류", description: "의약제, 살균제, 제초제" },
  { id: 6, name: "6류", description: "금속재료, 건축재료" },
  {
    id: 7,
    name: "7류",
    description: "기계 및 공작기계, 모터 및 엔진, 농기구, 자동판매기",
  },
  { id: 8, name: "8류", description: "수공구, 수동기구, 칼" },
  {
    id: 9,
    name: "9류",
    description: "컴퓨터, 소프트웨어, CD, DVD, USB, 핸드폰 악세서리, 카메라",
  },
  { id: 10, name: "10류", description: "의료용 기계기구, 의료재료" },
  { id: 11, name: "11류", description: "조명장치, 조리장치, 냉난방장치" },
  { id: 12, name: "12류", description: "자동차, 비행기, 선박, 수송기계기구" },
  { id: 13, name: "13류", description: "총포탄, 화학류, 불꽃" },
  { id: 14, name: "14류", description: "귀금속, 보석류, 시계" },
  { id: 15, name: "15류", description: "악기" },
  {
    id: 16,
    name: "16류",
    description: "서적, 인쇄물, 잡지, 사진, 문방구, 미술재료, 교육재료",
  },
  {
    id: 17,
    name: "17류",
    description: "고무, 플라스틱 제품, 충전, 방음, 단열, 절연재료",
  },
  {
    id: 18,
    name: "18류",
    description: "가죽, 인조가죽 제품, 트렁크 및 여행용 가방, 우산, 양산",
  },
  {
    id: 19,
    name: "19류",
    description: "비금속제 건축재료, 비금속제 이동식 건축물, 비금속제 기념물",
  },
  {
    id: 20,
    name: "20류",
    description: "가구, 쿠션, 액자, 목재, 인테리어장식품",
  },
  {
    id: 21,
    name: "21류",
    description:
      "가정용품, 주방용 기구, 용기, 스펀지, 솔, 청소용구, 유리, 도자기제품",
  },
  {
    id: 22,
    name: "22류",
    description: "로프, 끈, 망, 텐트, 차양막, 타폴린, 돛, 충전용 재료",
  },
  { id: 23, name: "23류", description: "직물용 실" },
  {
    id: 24,
    name: "24류",
    description: "직물, 직물제품, 침대커버, 테이블커버",
  },
  { id: 25, name: "25류", description: "의류, 신발, 모자" },
  {
    id: 26,
    name: "26류",
    description: "레이스, 자수포, 리본, 단추, 핀, 바늘, 조화",
  },
  {
    id: 27,
    name: "27류",
    description: "카펫, 매트, 리놀륨, 비직물제 벽걸이",
  },
  {
    id: 28,
    name: "28류",
    description: "장난감, 게임기, 오락 및 놀이용구, 체조용품 및 운동용품",
  },
  {
    id: 29,
    name: "29류",
    description:
      "육류, 어류, 절임, 조림, 냉동, 건조, 조리된 식품, 계란, 우유, 우유제품",
  },
  {
    id: 30,
    name: "30류",
    description: "커피, 차, 쌀, 빵, 과자, 빙과, 소금, 소스, 향신료",
  },
  {
    id: 31,
    name: "31류",
    description:
      "곡물, 농업, 원예 및 임산물, 신선과일 및 채소, 종자, 식물, 사료",
  },
  {
    id: 32,
    name: "32류",
    description: "맥주, 광천수, 탄산수, 음료, 과실음료 및 과실주스",
  },
  { id: 33, name: "33류", description: "와인, 소주, 위스키, 탁주, 담금주" },
  { id: 34, name: "34류", description: "담배, 흡연용품, 성냥" },
  {
    id: 35,
    name: "35류",
    description:
      "통신판매업, 온라인쇼핑몰, 광고업, 각종도소매업, 컨설팅, 무역업",
  },
  {
    id: 36,
    name: "36류",
    description:
      "보험업, 임대업, 분양업, 투자자문업, 금융업, 부동산업, 할부리스업",
  },
  {
    id: 37,
    name: "37류",
    description: "건축건설업, 자동차정비업, 인테리어, 수리업, 세탁업, 청소업",
  },
  {
    id: 38,
    name: "38류",
    description:
      "통신업, 방송업, 인터넷방송, 데이터전송업, 온라인컨텐츠 전송업",
  },
  {
    id: 39,
    name: "39류",
    description:
      "운송업, 여행예약, 관광업, 택배업, 이사대행, 견인업, 차량임대업 창고업",
  },
  {
    id: 40,
    name: "40류",
    description: "인쇄제본업, 목공업, 제분업, 식품가공, 소재가공업",
  },
  {
    id: 41,
    name: "41류",
    description:
      "학원, 교육, 출판, 연예, 유학알선, 피트니스센터, 스포츠, 게임, 공연문화활동업",
  },
  {
    id: 42,
    name: "42류",
    description: "프로그래밍, 웹, 제품, 건축 디자인업, 과학, 기술 R&D 연구소",
  },
  {
    id: 43,
    name: "43류",
    description: "카페, 요식업, 베이커리, 주점업, 숙박업, 식품조달",
  },
  {
    id: 44,
    name: "44류",
    description:
      "병원, 약국, 심리상담, 피부관리, 미용실, 네일샵, 사우나, 꽃꽂이, 동물병원, 산후조리",
  },
  {
    id: 45,
    name: "45류",
    description:
      "법무, 보안, 웨딩, 장례, 종교, 돌봄서비스, 개인 서비스업, 온라인 소셜네트워킹",
  },
  {
    id: 46,
    name: "기타",
    description: "기타",
  },
];

const ClassificationForm = ({ onClassificationataChange }) => {
  const [selectedClassifications, setSelectedClassifications] = useState([]);
  const [classificationData, setClassificationData] = useState({
    sector: "",
  });

  const handleClassificationClick = (classificationId) => {
    setSelectedClassifications((prevSelected) => {
      let newSelectedClassifications = prevSelected.includes(classificationId)
        ? prevSelected.filter((id) => id !== classificationId)
        : [...prevSelected, classificationId];
      return newSelectedClassifications;
    });
  };

  useEffect(() => {
    const selectedNames = selectedClassifications
      .map((id) => classifications.find((c) => c.id === id).name)
      .join(", ");
    setClassificationData({ sector: selectedNames });
  }, [selectedClassifications]);

  useEffect(() => {
    onClassificationataChange(classificationData);
  }, [classificationData, onClassificationataChange]);

  return (
    <FormContainer sx={{ pb: 0 }}>
      <CustomTypo>03. 분류를 선택해주세요</CustomTypo>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}
      >
        {classifications.map((classification) => (
          <Tooltip
            arrow
            key={classification.id}
            title={
              <Typography sx={{ fontSize: 15, fontFamily: "Pretendard" }}>
                {classification.description}
              </Typography>
            }
          >
            <ToggleButton
              value={classification.id}
              selected={selectedClassifications.includes(classification.id)}
              onClick={() => handleClassificationClick(classification.id)}
              style={{
                border: selectedClassifications.includes(classification.id)
                  ? "2px solid #CBA585"
                  : "1px solid black",
                fontFamily: "Pretendard",
                fontWeight: selectedClassifications.includes(classification.id)
                  ? 700
                  : "",
                width: "7rem",
                margin: "0.8rem 0.5rem",
                borderRadius: "3px",
                fontSize: "18px",
                backgroundColor: "white",
                color: selectedClassifications.includes(classification.id)
                  ? "#CBA585"
                  : "black",
                boxShadow: selectedClassifications.includes(classification.id)
                  ? "rgba(0, 0, 0, 0.2) 1.95px 1.95px 3px"
                  : "none",
              }}
            >
              {classification.name}
            </ToggleButton>
          </Tooltip>
        ))}
      </div>
    </FormContainer>
  );
};
export default ClassificationForm;

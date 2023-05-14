import logoImg from "../../assets/images/logo/문자.svg";
import {
  Logo,
  FooterContainer,
  FooterWrapper,
  CustomList,
  CompanyInfo,
  CustomListItem,
  CustomListItemText,
} from "./FooterStyles";
import { Box, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "개인정보취급방침", link: "/" },
  { text: "이용약관", link: "/" },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo src={logoImg} />
        <CompanyInfo>
          <CustomList>
            {menuItems.map((item, index) => (
              <CustomListItem key={index} component={Link} to={item.link}>
                <CustomListItemText>{item.text}</CustomListItemText>
              </CustomListItem>
            ))}
          </CustomList>
          <Box>
            <p>
              주소 : 서울특별시 강남구 테헤란로 84길 15 시몬타워 13층 | TEL :
              02-553-1246~50 | FAX : 02-553-0990, 0987 | E-MAIL :
              sjyim@wonjon.com
            </p>
            <span>Copyright ⓒ WONJON P.C. All Right Reserved.</span>
          </Box>
        </CompanyInfo>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

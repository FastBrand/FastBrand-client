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
import { Link } from "react-router-dom";

const menuItems = [
  {
    text: "개인정보취급방침",
    link: "http://www.wonjon.com/default/info/info01.php",
    target: "_blank",
  },
  {
    text: "이메일무단수집거부",
    link: "http://www.wonjon.com/default/info/info02.php",
    target: "_blank",
  },
  { text: "관리자", link: "/login", target: "_self" },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo src={logoImg} />
        <CompanyInfo>
          <CustomList>
            {menuItems.map((item, index) => (
              <CustomListItem key={index} to={item.link} target={item.target}>
                <CustomListItemText>{item.text}</CustomListItemText>
              </CustomListItem>
            ))}
          </CustomList>
          <div>
            <p>
              주소 : 서울특별시 강남구 테헤란로 84길 15 시몬타워 13층 | TEL :
              02-553-1246~50 | FAX : 02-553-0990, 0987 | E-MAIL :
              sjyim@wonjon.com
            </p>
            <span>Copyright ⓒ WONJON P.C. All Right Reserved.</span>
          </div>
        </CompanyInfo>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

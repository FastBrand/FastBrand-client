import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo/복합.svg";
import MenuDrawer from "../menuDrawer/MenuDrawer";
import {
  NavbarContainer,
  NavLink,
  NavbarLinksBox,
  CustomMenuIcon,
  NavbarLeftContainer,
  NavbarRightContainer,
  NavbarLogo,
  ButtonLink,
} from "./NavbarStyles";

const Navbar = ({ backgroundColor }) => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <NavbarContainer backgroundColor={backgroundColor} visible={visible}>
      <NavbarLeftContainer>
        <Link to="/">
          <NavbarLogo src={logoImg} alt="빠른상표" />
        </Link>
        <NavbarLinksBox>
          <NavLink to="/price">비용안내</NavLink>
          <NavLink to="/step">절차안내</NavLink>
          <NavLink to="/companyinfo">회사소개</NavLink>
          <NavLink to="/companypoint">서비스안내</NavLink>
          <NavLink to="/faq">자주하는질문</NavLink>
        </NavbarLinksBox>
      </NavbarLeftContainer>
      <NavbarRightContainer>
        <ButtonLink to="/domesticMark">상표등록 신청하기</ButtonLink>
        <CustomMenuIcon onClick={toggleDrawer(true)} />
        {open && <MenuDrawer open={open} toggleDrawer={() => setOpen(false)} />}
      </NavbarRightContainer>
    </NavbarContainer>
  );
};

export default Navbar;

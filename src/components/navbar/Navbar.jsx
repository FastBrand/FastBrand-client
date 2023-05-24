import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../menuDrawer/MenuDrawer";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImg from "../../assets/images/logo/복합.svg";

const Navbar = ({ backgroundColor }) => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp);
      // console.log(visible);
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

  const NavLink = styled(Link)(({ theme }) => ({
    fontSize: "20px",
    color: "#CBA585",
    fontWeight: 500,
    fontFamily: "Pretendard",
    cursor: "pointer",
    textDecoration: "none",
    transition: "0.5s",
    "&:hover": {
      // color: "white",
    },
  }));

  const NavbarLinksBox = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("1250")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    color: "#CBA585",
    fontSize: "2.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  }));

  const NavbarContainer = styled("div")(({ theme }) => ({
    position: "fixed",
    zIndex: "100",
    top: visible ? "0" : "-110px",
    left: "0",
    right: "0",
    display: "flex",
    transition: "all 0.3s linear",
    height: "100px",
    padding: "0 150px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: backgroundColor,
    borderBottom: backgroundColor === "none" ? "none" : "1px solid #eee",
    [theme.breakpoints.down("1250")]: {
      padding: " 0 20px",
    },
  }));

  const NavbarLeftWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
  });

  const NavbarRightWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gaps: "1rem",
  });
  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    height: "85px",
    width: "85px",
    marginRight: theme.spacing(5),
  }));

  const ButtonLink = styled(Link)(({ theme }) => ({
    fontSize: "20px",
    color: "#CBA585",
    fontWeight: 600,
    fontFamily: "Pretendard",
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
    border: "2px solid #CBA585",
    borderRadius: "3px",
    padding: "11px 15px",
    transition: "0.2s",

    "&:hover": {
      color: "white",
      backgroundColor: "#CBA585",
    },
  }));

  return (
    <NavbarContainer>
      <NavbarLeftWrapper>
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
      </NavbarLeftWrapper>
      <NavbarRightWrapper>
        <ButtonLink to="/domesticMark">상표등록 신청하기</ButtonLink>
        <CustomMenuIcon onClick={toggleDrawer(true)} />
        {open && <MenuDrawer open={open} toggleDrawer={() => setOpen(false)} />}
      </NavbarRightWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

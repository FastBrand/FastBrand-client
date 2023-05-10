import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../menuDrawer/MenuDrawer";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../assets/images/logo/복합.svg";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ backgroundColor, borderBottom }) => {
  const [open, setOpen] = useState(false);

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
    fontSize: "16px",
    color: "#CBA585",
    fontWeight: "400",
    fontFamily: "Pretendard",
    cursor: "pointer",
    textDecoration: "none",
    transition: "0.5s",
    "&:hover": {
      // color: "white",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("750")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    color: "#CBA585",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  }));

  const NavbarContainer = styled(Box)(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    margin: "0 150px 0 150px",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    [theme.breakpoints.down("1080")]: {
      margin: "0",
    },
  }));

  const NavbarWrapper = styled(Box)(({ theme }) => ({
    position: "fixed",
    zIndex: "100",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    height: "100px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    height: "85px",
    width: "85px",
    marginRight: theme.spacing(5),
  }));

  const ButtonLink = styled(Link)(({ theme }) => ({
    fontSize: "16px",
    color: "#CBA585",
    fontWeight: "400",
    fontFamily: "Pretendard",
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
    border: "2px solid #CBA585",
    borderRadius: "5px",
    padding: "11px 15px",
    transition: "0.2s",

    "&:hover": {
      color: "white",
      backgroundColor: "#CBA585",
    },
  }));

  return (
    <NavbarWrapper
      backgroundColor={backgroundColor ? "white" : "transparent"}
      // borderBottom={borderBottom ? "1px solid #eee" : "none"}
      // backgroundColor="white"
    >
      <NavbarContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <NavbarLogo src={logoImg} alt="빠른상표" />
            </Link>
            <NavbarLinksBox>
              <NavLink to="/price">비용안내</NavLink>
              <NavLink>절차안내</NavLink>
              <NavLink to="/companyInfo">회사소개</NavLink>
              <NavLink to="/faq">고객문의</NavLink>
              {/* <NavLink to="/director">관리자(임시)</NavLink> */}
            </NavbarLinksBox>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gaps: "1rem",
          }}
        >
          <ButtonLink to="/domesticMark">상표등록 신청하기</ButtonLink>
          <CustomMenuIcon onClick={toggleDrawer(true)} />
          {open && (
            <MenuDrawer open={open} toggleDrawer={() => setOpen(false)} />
          )}
        </Box>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;

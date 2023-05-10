import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, ListItem, Box } from "@mui/material";

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    padding: "70px 0px 300px 50px", // top right bottom left
    width: "500px",
    boxSizing: "border-box",
    height: "100%",
    overflow: "auto",
  },
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontFamily: "Pretendard",
  transition: "0.4s",
  paddingLeft: 0,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  "&:hover": {
    cursor: "pointer",
    color: "#CBA585",
  },
  "& .MuiListItemText-primary": {
    fontSize: "50px",
    fontFamily: "Pretendard",
    fontWeight: 600,
  },
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontSize: "16px",
  position: "absolute",
  bottom: "50px",
}));

export const CustomCloseIcon = styled(CloseIcon)(({ theme }) => ({
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  fontSize: "2rem",
  "&:hover": {
    cursor: "pointer",
  },
}));

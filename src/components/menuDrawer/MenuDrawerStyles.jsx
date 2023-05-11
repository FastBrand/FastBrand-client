import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, ListItem, Box } from "@mui/material";

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    padding: "70px 0px 0px 50px", // top right bottom left
    width: "450px",
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiDrawer-paper": {
      width: "100%",
      padding: "70px 10px 0px 50px",
    },
  },
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontFamily: "Pretendard",
  transition: "0.4s",
  paddingLeft: 0,
  paddingTop: theme.spacing(2),
  "&:hover": {
    cursor: "pointer",
    color: "#CBA585",
  },
  "& .MuiListItemText-primary": {
    fontSize: "45px",
    fontFamily: "Pretendard",
    fontWeight: 700,
  },
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  fontFamily: "Pretendard",
  paddingTop: "8em",
  fontSize: "16px",
}));

export const CustomCloseIcon = styled(CloseIcon)(({ theme }) => ({
  position: "absolute",
  top: "2rem",
  right: "2rem",
  fontSize: "2rem",
  "&:hover": {
    cursor: "pointer",
  },
}));

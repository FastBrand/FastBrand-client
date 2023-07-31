import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, ListItem, Box } from "@mui/material";

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    padding: "80px 50px 80px 50px", // top right bottom left
    width: "fit-content",
    boxSizing: "border-box",
    minWidth: "360px",
  },
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontFamily: "Pretendard",
  transition: "0.3s",
  padding: 0,
  paddingTop: theme.spacing(2),
  "&:hover": {
    cursor: "pointer",
    color: "#0992E3",
  },
  "& .MuiListItemText-primary": {
    fontSize: "35px",
    fontFamily: "Pretendard",
    fontWeight: 600,
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiDrawer-paper": {
      width: "100%",
      padding: "70px 0px 0px 50px",
    },
  },
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

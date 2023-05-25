import { NavLink, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog, 
  DialogActions, 
  DialogTitle,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../../assets/images/logo/도형.svg";

const drawerWidth = 202;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#3E3E3F",
    color: "#FFFFFF",
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    color: "#FFFFFF",
  },
  logo: {
    width: "100px",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: "3px",
    marginBottom: "3px",
  },
  buttonList: {
    "&:hover": {
      backgroundColor: "#999999"
    },
    "&active":{
      backgroundColor: "#999999"
    }
  }
}));

function SideNavbarForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    localStorage.removeItem('Authorization');
    console.log("로그아웃함:", localStorage.getItem('Authorization'));
    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <img src={logo} alt="logo" className={classes.logo} />
        <List>
          <ListItem
            className={classes.buttonList}
            button
            component={NavLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.icon}>
              <SignalCellularAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="대시보드" />
          </ListItem>
          <ListItem
          className={classes.buttonList}
            button
            component={NavLink}
            to="/markBoard"
          >
            <ListItemIcon className={classes.icon}>
              <MessageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="상표 관리" />
          </ListItem>
          <ListItem
          className={classes.buttonList}
            button
            component={NavLink}
            to="/faqBoard"
          >
            <ListItemIcon className={classes.icon}>
              <BookOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ 관리" />
          </ListItem>
          <ListItem
            className={classes.buttonList}
            button
            onClick={handleClickOpen}
          >
            <ListItemIcon className={classes.icon}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="로그아웃" />
          </ListItem>
        </List>
      </Drawer>

      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="로그아웃창"
          aria-describedby="관리자 로그아웃"
      >
        <DialogTitle id="alert-dialog-title">정말로 로그아웃을 하시겠습니까?</DialogTitle>
        <DialogActions>
          <Button onClick={handleLogout}>예</Button>
          <Button onClick={handleClose}>아니오</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SideNavbarForm;

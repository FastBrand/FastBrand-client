import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import logo from '../../../assets/images/logo/도형.svg';

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
    backgroundColor: '#3E3E3F',
    color: '#FFFFFF'
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    color: '#FFFFFF'
  },
  logo: {
    width: '100px',
    height: '100px',   
    alignItems: 'center',
    justifyContent: 'center',
    margin: "auto", 
    marginTop: "3px",
    marginBottom: "3px",
  },
}));

function SideNavbarForm() {
  const classes = useStyles();

  const handleListItemClick = (event) => {
    // 선택된 버튼의 스타일을 변경
    event.currentTarget.style.backgroundColor = '#999999';
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
          <ListItem button component={NavLink} to="/dashboard" onClick={handleListItemClick}>
            <ListItemIcon className={classes.icon}>
              <SignalCellularAltOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="대시보드" />
          </ListItem>
          <ListItem button component={NavLink} to="/productList" onClick={handleListItemClick}>
            <ListItemIcon className={classes.icon}>
              <MessageOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="상품목록 관리" />
          </ListItem>
          <ListItem button component={NavLink} to="/faqAdmin" onClick={handleListItemClick}>
            <ListItemIcon className={classes.icon}>
              <BookOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ 관리" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default SideNavbarForm;

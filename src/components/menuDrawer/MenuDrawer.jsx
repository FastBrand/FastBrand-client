import {
  CustomDrawer,
  CustomListItem,
  CustomBox,
  CustomCloseIcon,
} from "./MenuDrawerStyles";
import { List, ListItemText, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "서비스안내", link: "/companypoint" },
  { text: "절차안내", link: "/step" },
  { text: "회사안내", link: "/companyInfo" },
  { text: "자주묻는질문", link: "/faq" },
  { text: "상표등록신청하기", link: "/domesticMark" },
];

const MenuDrawer = ({ open, toggleDrawer }) => {
  return (
    <CustomDrawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <CustomBox>
        <Grid container>
          <Grid item xs={3}>
            <Box style={{ fontWeight: 800 }}>
              <Box>고객센터</Box>
              <Box>핸드폰</Box>
              <Box>이메일</Box>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box>
              <Box>02-553-1246</Box>
              <Box>010-4006-5236</Box>
              <Box>mark@wonjon.com</Box>
            </Box>
          </Grid>
        </Grid>
      </CustomBox>
      <CustomCloseIcon onClick={() => toggleDrawer(false)} />
      <List>
        {menuItems.map((item, index) => (
          <CustomListItem key={index} component={Link} to={item.link}>
            <ListItemText primary={item.text} />
          </CustomListItem>
        ))}
      </List>
    </CustomDrawer>
  );
};
export default MenuDrawer;

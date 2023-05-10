import {
  CustomDrawer,
  CustomListItem,
  CustomBox,
  CustomCloseIcon,
} from "./MenuDrawerStyles";
import { List, ListItemText, Link } from "@mui/material";

const menuItems = [
  { text: "비용안내", link: "/price" },
  { text: "절차안내", link: "/procedure" },
  { text: "회사안내", link: "/companyInfo" },
  { text: "고객문의", link: "/faq" },
  { text: "상표등록신청하기", link: "/domesticMark" },
];

const MenuDrawer = ({ open, toggleDrawer }) => {
  return (
    <CustomDrawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <CustomCloseIcon onClick={() => toggleDrawer(false)} />
      <List>
        {menuItems.map((item, index) => (
          <CustomListItem key={index} component={Link} to={item.link}>
            <ListItemText primary={item.text} />
          </CustomListItem>
        ))}
      </List>
      <CustomBox sx={{ fontFamily: "Pretendard" }}>
        고객센터 : 02-553-1246 (무료상표출원상담)
        <br />
        핸드폰 : 010-4006-5236
        <br />
        이메일 : mark@wonjon.com
      </CustomBox>
    </CustomDrawer>
  );
};
export default MenuDrawer;

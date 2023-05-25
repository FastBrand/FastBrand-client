import {
  CustomDrawer,
  CustomListItem,
  CustomCloseIcon,
} from "./MenuDrawerStyles";
import { List, ListItemText } from "@mui/material";
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
      {/* <a
          href="https://www.flaticon.com/free-icons/customer-service"
          title="customer service icons"
        >
          Customer service icons created by Freepik - Flaticon
        </a> */}
      <div
        style={{
          fontFamily: "Pretendard",
          paddingBottom: "30px",
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: 800,
          }}
        >
          고객 센터
        </div>
        <div style={{ fontWeight: 700, fontSize: "38px", marginTop: "-5px" }}>
          02-553-1246
        </div>
        <br />
        핸드폰 : 010-4006-5236
        <br />
        이메일 : mark@wonjon.com
      </div>
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

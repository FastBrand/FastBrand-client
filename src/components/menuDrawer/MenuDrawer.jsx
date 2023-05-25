import {
  CustomDrawer,
  CustomListItem,
  CustomBox,
  CustomCloseIcon,
} from "./MenuDrawerStyles";
import CustomerService from "../../assets/images/icon/customer-service.png";
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
      {/* <a
          href="https://www.flaticon.com/free-icons/customer-service"
          title="customer service icons"
        >
          Customer service icons created by Freepik - Flaticon
        </a> */}
      <div
        style={{
          fontFamily: "Pretendard",
          padding: "0 0px 2em 0",
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "38px" }}>02-553-1246</span>
        <br />
        Email. sjyim@wonjon.com
        <br />
        FAX.02-553-0990, 0987
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

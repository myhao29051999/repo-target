import React, { useState, useEffect } from "react";

// libraries
import { Link, animateScroll as scroll } from "react-scroll";
import { Image } from "antd-mobile";

// constants
import { images } from "constants/images";

// utils
import { getUserFromLocalStorage } from "utils";

// components
import { Drawer, Button, ModalLogin } from "components";

// styles
import {
  HeaderMobileStyle,
  HeaderLogoStyle,
  HeaderButtonStyle,
  HeaderListContentStyle,
  UserInfo,
  GroupLoginSuccess,
} from "./style";

function HeaderMobile() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const showModalLogin = () => {
    setIsOpen(true);
  };
  const onCancelLogin = () => {
    setIsOpen(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onCloseDrawer = () => {
    setVisible(false);
  };

  const onLogout = () => {
    localStorage.removeItem("userLogin");
    setUserName("");
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user !== null) {
      setUserName(user?.hoTen);
    } else {
      setUserName("");
    }
  });

  return (
    <HeaderMobileStyle>
      <HeaderLogoStyle>
        <img src={images.LOGO} alt="logo" />
      </HeaderLogoStyle>
      <HeaderButtonStyle>
        <Drawer
          onOpenDrawer={showDrawer}
          visible={visible}
          onClose={onCloseDrawer}
          width={280}
        >
          {userName !== "" ? (
            <GroupLoginSuccess>
              <UserInfo>Xin chào {userName}</UserInfo>
              <Image
                src={images.ICON_LOGOUT}
                alt="icon-logout"
                aria-hidden="true"
                height={25}
                width={25}
                style={{ cursor: "pointer", display: "block" }}
                onClick={onLogout}
              />
            </GroupLoginSuccess>
          ) : (
            <Button
              className="btn__signin"
              type="outlineRed"
              size="large"
              onClick={showModalLogin}
            >
              Đăng nhập
            </Button>
          )}
          <HeaderListContentStyle>
            <li>
              <Link to="showTimes" smooth={true} duration={1000}>
                Lịch chiếu
              </Link>
            </li>
            {/* <li>
              <Link to="theaterSystem" smooth={true} duration={1000}>
                Cụm rạp
              </Link>
            </li> */}
            <li>
              <Link to="news" smooth={true} duration={1000}>
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="application" smooth={true} duration={1000}>
                Ứng dụng
              </Link>
            </li>
          </HeaderListContentStyle>
          <ModalLogin title="Login" visible={isOpen} onCancel={onCancelLogin} />
        </Drawer>
      </HeaderButtonStyle>
    </HeaderMobileStyle>
  );
}
export default HeaderMobile;

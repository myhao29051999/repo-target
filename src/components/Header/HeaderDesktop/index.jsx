import React, { useState, useEffect } from "react";

// libraries
import { Link, animateScroll as scroll } from "react-scroll";
import { Image } from "antd-mobile";

// constants
import { images } from "constants/images";

// utils
import { getUserFromLocalStorage } from "utils";

// components
import { Button, ModalLogin } from "components";

// styles
import {
  HeaderDes,
  LogoDes,
  ListDes,
  ButtonsDes,
  UserInfo,
  GroupLoginSuccess,
} from "./style";

export default function HeaderDesktop() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const onCancel = () => {
    setIsOpen(false);
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
    <HeaderDes>
      <LogoDes span={6}>
        <img src={images.LOGO} alt="logo" />
      </LogoDes>
      <ListDes span={12}>
        <ul>
          <li>
            <Link to="showTimes" smooth={true} duration={1000}>
              Lịch chiếu
            </Link>
          </li>
          <li>
            <Link to="theaterSystem" smooth={true} duration={1000}>
              Cụm rạp
            </Link>
          </li>
          <li>
            <Link to="news" smooth={true} duration={1000}>
              Tin tức
            </Link>
          </li>
          <li>
            <a>Ứng dụng</a>
          </li>
        </ul>
      </ListDes>
      <ButtonsDes span={6}>
        {userName !== "" ? (
          <GroupLoginSuccess>
            <UserInfo>Xin chào {userName}</UserInfo>
            <Image
              src={images.ICON_LOGOUT}
              alt="icon-logout"
              aria-hidden="true"
              height={30}
              width={30}
              style={{ cursor: "pointer", display: "block" }}
              onClick={onLogout}
            />
          </GroupLoginSuccess>
        ) : (
          <Button
            className="btn__signin"
            type="outlineRed"
            size="large"
            onClick={showModal}
          >
            Đăng nhập
          </Button>
        )}
      </ButtonsDes>
      <ModalLogin title="Login" visible={isOpen} onCancel={onCancel} />
    </HeaderDes>
  );
}

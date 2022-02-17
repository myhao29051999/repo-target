import React, { useState } from "react";

// libraries
import { Link, animateScroll as scroll } from "react-scroll";

// constants
import { images } from "constants/images";

// components
import { Button, ModalLogin } from "components";

// styles
import { HeaderDes, LogoDes, ListDes, ButtonsDes } from "./style";

export default function HeaderDesktop() {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const onCancel = () => {
    setIsOpen(false);
  };
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
            <a>Tin tức</a>
          </li>
          <li>
            <a>Ứng dụng</a>
          </li>
        </ul>
      </ListDes>
      <ButtonsDes span={6}>
        <Button
          className="btn__signin"
          type="outlineRed"
          size="large"
          onClick={showModal}
        >
          Đăng nhập
        </Button>
      </ButtonsDes>
      <ModalLogin title="Login" visible={isOpen} onCancel={onCancel} />
    </HeaderDes>
  );
}

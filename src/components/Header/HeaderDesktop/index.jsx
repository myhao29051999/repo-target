import React from "react";

// libraries
import { Link, animateScroll as scroll } from "react-scroll";

// constants
import { images } from "constants/images";

// components
import { Button } from "components";

// styles
import { HeaderDes, LogoDes, ListDes, ButtonsDes } from "./style";

export default function HeaderDesktop() {
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
            <a>Cụm rạp</a>
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
        <Button className="btn__signin" type="outlineRed" size="large">
          Đăng nhập
        </Button>
      </ButtonsDes>
    </HeaderDes>
  );
}

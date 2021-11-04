import React from "react";

// libraries
import { Col } from "antd";

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
          <li>Lịch chiếu</li>
          <li>Cụm rạp</li>
          <li>Tin tức</li>
          <li>Ứng dụng hi</li>
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

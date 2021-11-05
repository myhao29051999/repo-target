import React, { useState } from "react";

// constants
import { images } from "constants/images";

// components
import { Drawer, Button } from "components";

// styles
import {
  HeaderMobileStyle,
  HeaderLogoStyle,
  HeaderButtonStyle,
  HeaderListContentStyle,
} from "./style";

function HeaderMobile() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onCloseDrawer = () => {
    setVisible(false);
  };

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
          <Button type="outlineRed" size="large">
            Đăng nhập
          </Button>
          <HeaderListContentStyle>
            <li>Lịch chiếu</li>
            <li>Cụm rạp</li>
            <li>Tin tức</li>
            <li>Ứng dụng</li>
          </HeaderListContentStyle>
        </Drawer>
      </HeaderButtonStyle>
    </HeaderMobileStyle>
  );
}
export default HeaderMobile;

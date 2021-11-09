import React, { useState } from "react";

// libraries
import { Link, animateScroll as scroll } from "react-scroll";

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
            <li>
              <Link to="showTimes" smooth={true} duration={1000}>
                Lịch chiếu
              </Link>
            </li>
            <li>
              <Link to="showTimes" smooth={true} duration={1000}>
                Cụm rạp
              </Link>
            </li>
            <li>
              <Link to="showTimes" smooth={true} duration={1000}>
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="showTimes" smooth={true} duration={1000}>
                Ứng dụng
              </Link>
            </li>
          </HeaderListContentStyle>
        </Drawer>
      </HeaderButtonStyle>
    </HeaderMobileStyle>
  );
}
export default HeaderMobile;

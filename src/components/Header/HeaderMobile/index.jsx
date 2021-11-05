import React from "react";

// libraries
import { Row, Col } from "antd";

// constants
import { images } from "constants/images";

// components
import { Drawer } from "components";

// styles
import { HeaderMobileStyle, HeaderLogoStyle, HeaderButtonStyle } from "./style";
export default function HeaderMobile() {
  return (
    <HeaderMobileStyle>
      <HeaderLogoStyle>
        <img src={images.LOGO} alt="logo" />
      </HeaderLogoStyle>
      <HeaderButtonStyle>
        <Drawer />
      </HeaderButtonStyle>
    </HeaderMobileStyle>
  );
}

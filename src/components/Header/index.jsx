import React from "react";

// utils
import { useViewPort } from "utils";

// components
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  const viewPort = useViewPort();
  const isMobile = viewPort.width <= 768;
  if (isMobile) {
    return <HeaderMobile />;
  } else {
    return <HeaderDesktop />;
  }
}
export default Header;

import React, { useEffect, useState } from "react";

// constants
import { images } from "constants/images";
import { screens } from "constants/screens";

// components
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < screens.mobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  if (isMobile) {
    return <HeaderMobile />;
  } else {
    return <HeaderDesktop />;
  }
}
export default Header;

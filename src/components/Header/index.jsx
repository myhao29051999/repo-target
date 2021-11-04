import React, { useEffect, useState } from "react";

// constants
import { images } from "constants/images";
import { screens } from "constants/screens";

// components
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > screens.desktop) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  if (isDesktop) {
    return <HeaderDesktop />;
  } else {
    return <HeaderMobile />;
  }
}
export default Header;

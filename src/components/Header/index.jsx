import React, { useEffect, useState } from "react";

// utils
import { useViewPort } from "utils";

// components
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  // const useViewport = () => {
  //   const [width, setWidth] = React.useState(window.innerWidth);

  //   React.useEffect(() => {
  //     const handleWindowResize = () => setWidth(window.innerWidth);
  //     window.addEventListener("resize", handleWindowResize);
  //     return () => window.removeEventListener("resize", handleWindowResize);
  //   }, []);

  //   return { width };
  // };
  const viewPort = useViewPort();
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return <HeaderMobile />;
  } else {
    return <HeaderDesktop />;
  }
}
export default Header;

import { useState, useEffect } from "react";
import moment from "moment";

export function useViewPort() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
}

export function formatDate(d, f) {
  if (d) {
    try {
      return moment(d).format(f);
    } catch (error) {
      return "";
    }
  }
  return "";
}

export function getUserFromLocalStorage() {
  const user = localStorage.getItem("userLogin");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

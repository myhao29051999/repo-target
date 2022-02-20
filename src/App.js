import "./App.css";
// libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Image } from "antd-mobile";

// HOC
import Auth from "HOC";

// constants
import { images } from "constants/images";

// configs
import { paths } from "configs/path";

// pages
import HomePage from "pages/Home";
import MovieDetail from "pages/Home/MovieDetail";
import AdminPage from "pages/Admin/Dashboard";

// css
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "reactjs-popup/dist/index.css";
function App() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {showButton && (
        <Image
          className="back-to-top"
          src={images.ICON_BACK_TO_TOP}
          alt="icon-back-to-top"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
          width={50}
          height={50}
          aria-hidden={true}
        ></Image>
      )}
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={paths.HOMEPAGE} component={HomePage} />
          <Auth
            exact={false}
            path={paths.MOVIE_DETAIL + ":maPhim"}
            Component={MovieDetail}
          />
          <Auth exact={false} path={paths.ADMINPAGE} Component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

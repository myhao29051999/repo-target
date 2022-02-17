import "./App.css";
// libraries
import { BrowserRouter, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

// routers
import { adminRouter, mainRouter } from "./configs/router";

// templates
import RouterMainTemplate from "templates/main";
import RouterAdminTemplate from "templates/admin";

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

  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };

  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterAdminTemplate>
      );
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
        <button onClick={scrollToTop} className="back-to-top">
          back to top
        </button>
      )}
      <BrowserRouter>
        <Switch>
          {renderMainRouter()}
          {renderAdminRouter()}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
